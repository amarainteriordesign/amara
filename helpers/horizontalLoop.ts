import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

interface HorizontalLoopConfig {
  onChange?: (item: Element, index: number) => void;
  repeat?: number;
  paused?: boolean;
  center?: boolean | Element | string;
  speed?: number;
  snap?: number | false;
  paddingRight?: number;
  reversed?: boolean;
  draggable?: boolean;
}

export interface HorizontalLoopTimeline extends gsap.core.Timeline {
  toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
  closestIndex: (setCurrent?: boolean) => number;
  current: () => number;
  next: (vars?: gsap.TweenVars) => gsap.core.Tween;
  previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
  times: number[];
  draggable?: Draggable;
}

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
- Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
- When each item animates to the left or right enough, it will loop back to the other side
- Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
- The returned timeline will have the following methods added to it:
- next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
- previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
- toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
- current() - returns the current index (if an animation is in-progress, it reflects the final index)
- times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
*/
export function horizontalLoop(
  items: gsap.TweenTarget,
  config?: HorizontalLoopConfig,
): HorizontalLoopTimeline {
  let timeline: HorizontalLoopTimeline;
  const elements = gsap.utils.toArray(items) as HTMLElement[];
  const configObj = config || {};

  gsap.context(() => {
    // use a context so that if this is called from within another context or a gsap.matchMedia(), we can perform proper cleanup like the "resize" event handler on the window
    const onChange = configObj.onChange;
    let lastIndex = 0;

    const tl = gsap.timeline({
      repeat: configObj.repeat,
      onUpdate:
        onChange &&
        function () {
          const i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(elements[i], i);
          }
        },
      paused: configObj.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    }) as HorizontalLoopTimeline;

    const length = elements.length;
    const startX = elements[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const spaceBefore: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;
    let indexIsDirty = false;
    const center = configObj.center;
    const pixelsPerSecond = (configObj.speed || 1) * 100;
    const snap = configObj.snap === false ? (v: number) => v : gsap.utils.snap(configObj.snap || 1); // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    let timeOffset = 0;
    const container =
      center === true
        ? (elements[0].parentNode as HTMLElement)
        : center
          ? (gsap.utils.toArray(center)[0] as HTMLElement)
          : (elements[0].parentNode as HTMLElement);
    let totalWidth: number;

    const getTotalWidth = (): number =>
      elements[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      spaceBefore[0] +
      elements[length - 1].offsetWidth *
        (gsap.getProperty(elements[length - 1], "scaleX") as number) +
      (parseFloat(String(configObj.paddingRight)) || 0);

    const populateWidths = (): void => {
      let b1 = container.getBoundingClientRect();
      let b2: DOMRect;
      elements.forEach((el, i) => {
        widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px") as string) / widths[i]) * 100 +
            (gsap.getProperty(el, "xPercent") as number),
        );
        b2 = el.getBoundingClientRect();
        spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
        b1 = b2;
      });
      gsap.set(elements, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i: number) => xPercents[i],
      });
      totalWidth = getTotalWidth();
    };

    let timeWrap: (value: number) => number;

    const populateOffsets = (): void => {
      timeOffset = center ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth : 0;
      if (center) {
        times.forEach((t, i) => {
          times[i] = timeWrap(
            tl.labels["label" + i] + (tl.duration() * widths[i]) / 2 / totalWidth - timeOffset,
          );
        });
      }
    };

    const getClosest = (values: number[], value: number, wrap: number): number => {
      let i = values.length;
      let closest = 1e10;
      let index = 0;
      let d: number;
      while (i--) {
        d = Math.abs(values[i] - value);
        if (d > wrap / 2) {
          d = wrap - d;
        }
        if (d < closest) {
          closest = d;
          index = i;
        }
      }
      return index;
    };

    const populateTimeline = (): void => {
      let i: number;
      let item: Element;
      let curX: number;
      let distanceToStart: number;
      let distanceToLoop: number;
      tl.clear();
      for (i = 0; i < length; i++) {
        item = elements[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = (item as HTMLElement).offsetLeft + curX - startX + spaceBefore[0];
        distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0,
        )
          .fromTo(
            item,
            { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
            {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond,
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      timeWrap = gsap.utils.wrap(0, tl.duration());
    };

    const refresh = (deep?: boolean): void => {
      const progress = tl.progress();
      tl.progress(0, true);
      populateWidths();
      if (deep) populateTimeline();
      populateOffsets();
      if (deep && tl.draggable && tl.paused()) {
        tl.time(times[curIndex], true);
      } else {
        tl.progress(progress, true);
      }
    };

    const onResize = (): void => refresh(true);
    let proxy: HTMLElement;

    gsap.set(elements, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);

    function toIndex(index: number, vars?: gsap.TweenVars): gsap.core.Tween {
      const varsObj = vars || {};
      if (Math.abs(index - curIndex) > length / 2) {
        index += index > curIndex ? -length : length; // always go in the shortest direction
      }
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        varsObj.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      varsObj.overwrite = true;
      gsap.killTweensOf(proxy);
      if (varsObj.duration === 0) {
        tl.time(timeWrap(time));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return tl;
      }
      return tl.tweenTo(time, varsObj);
    }

    tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent?: boolean): number => {
      const index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = (): number => (indexIsDirty ? tl.closestIndex(true) : curIndex);
    tl.next = (vars?: gsap.TweenVars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars?: gsap.TweenVars) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance

    if (configObj.reversed) {
      tl.vars.onReverseComplete?.();
      tl.reverse();
    }

    if (configObj.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      const wrap = gsap.utils.wrap(0, 1);
      let ratio: number;
      let startProgress: number;

      let lastSnap: number;
      let initChangeX: number;
      let wasPlaying: boolean;

      const align = (): void => {
        tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio));
      };
      const syncIndex = (): void => {
        tl.closestIndex(true);
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (typeof window.InertiaPlugin === "undefined") {
        console.warn(
          "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club",
        );
      }

      const draggable = Draggable.create(proxy, {
        trigger: elements[0].parentNode as Element,
        type: "x",
        onPressInit() {
          const x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = startProgress / -ratio - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value: number) {
          //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX;
          }
          const time = -(value * ratio) * tl.duration();
          const wrappedTime = timeWrap(time);
          const snapTime = times[getClosest(times, wrappedTime, tl.duration())];
          let dif = snapTime - wrappedTime;
          if (Math.abs(dif) > tl.duration() / 2) {
            dif += dif < 0 ? tl.duration() : -tl.duration();
          }
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          if (draggable.isThrowing) {
            indexIsDirty = true;
          }
        },
        onThrowComplete: () => {
          syncIndex();
          if (wasPlaying) {
            tl.play();
          }
        },
      })[0];
      tl.draggable = draggable;
    }

    tl.closestIndex(true);
    lastIndex = curIndex;
    if (onChange) {
      onChange(elements[curIndex], curIndex);
    }
    timeline = tl;
  });
  return timeline!;
}
