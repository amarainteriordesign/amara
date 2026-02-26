"use client";
import SoundIcon from "@/components/icons/sound.svg";
import PauseIcon from "@/components/icons/pause.svg";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Copy from "@/components/common/Copy/Copy";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Elements() {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const isMobileWindow = windowSize.width < 1280;
    if (isMobileWindow !== isMobile) {
      setIsMobile(isMobileWindow);
    }
  }, [windowSize, isMobile]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".elements-container",
        start: "top center",
        end: "bottom bottom",
        once: true,
      },
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    tl.to(".elements-text-anim", { translateY: 0 });

    gsap.to(".elements-text-anim-2", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".elements-container",
        start: "top center",
        end: "bottom bottom",
        once: true,
      },
      duration: 1.25,
      delay: 0.1,
    });

    // Items
    const items = gsap.utils.toArray(".element-item-anim") as HTMLElement[];

    const mappedItemsWithProps = items.map((item) => {
      const leftTarget = item.getAttribute("data-left-target");
      const topTarget = item.getAttribute("data-top-target");
      const rightTarget = item.getAttribute("data-right-target");
      const leftMobileTarget = item.getAttribute("data-mobile-left-target");
      const topMobileTarget = item.getAttribute("data-mobile-top-target");
      const rightMobileTarget = item.getAttribute("data-mobile-right-target");
      return {
        item,
        leftTarget: !isMobile
          ? leftTarget
            ? parseInt(leftTarget, 10)
            : 0
          : leftMobileTarget
            ? parseInt(leftMobileTarget, 10)
            : 0,
        topTarget: !isMobile
          ? topTarget
            ? parseInt(topTarget, 10)
            : 0
          : topMobileTarget
            ? parseInt(topMobileTarget, 10)
            : 0,
        rightTarget: !isMobile
          ? rightTarget
            ? parseInt(rightTarget, 10)
            : 0
          : rightMobileTarget
            ? parseInt(rightMobileTarget, 10)
            : 0,
      };
    });

    mappedItemsWithProps.forEach((item) => {
      if (item.leftTarget) {
        gsap.to(item.item, {
          left: item.leftTarget,
          top: item.topTarget,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".elements-items-anim-container",
            start: "top center+=200px",
            end: "bottom bottom",
            once: true,
          },
        });
      } else {
        gsap.to(item.item, {
          right: item.rightTarget,
          top: item.topTarget,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".elements-items-anim-container",
            start: "top center+=200px",
            end: "bottom bottom",
            once: true,
          },
        });
      }
    });
  }, [isMobile]);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) contextHeaderRef.current?.revert();

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".elements-container",
        start: "top-=80px top",
        end: "bottom-=80px top",
        onEnter: () => {
          headerLogo?.classList.add("dark");
        },
        onEnterBack: () => {
          headerLogo?.classList.add("dark");
        },
        onLeaveBack: () => {
          headerLogo?.classList.remove("dark");
        },
        onLeave: () => {
          headerLogo?.classList.remove("dark");
        },
      });
    });
  });

  return (
    <section className="elements-container flex w-full max-w-full flex-col items-center gap-[186px] overflow-hidden pt-[180px] pb-[285px] max-sm:gap-[88px] max-sm:pt-[88px] max-sm:pb-[125px]">
      <div className="flex w-full flex-col items-center justify-center px-[20px]">
        <div className="max-h-fit overflow-hidden text-center">
          <h3 className="text-bg-img elements-text-anim translate-y-[120%] bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[8px] text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:text-[22px] max-sm:tracking-[-0.6]" style={{ fontFamily: 'var(--font-lora)' }}>
            Mastering Balance
          </h3>
        </div>

        <Copy delay={0.5}>
          <p className="pb-[68px] text-center font-sans text-[12px] leading-[20px] font-normal tracking-[0.4px] text-[#262626] uppercase max-sm:pb-[27px]">
            STORY OF THE ELEMENTS
          </p>
        </Copy>

        <p className="elements-text-anim-2 text-gradient-vertical max-w-[565px] pb-[43px] text-center text-[28px] leading-[37px] font-normal tracking-[-0.8px] opacity-0 max-sm:max-w-[311px] max-sm:pb-[27px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[-0.5]" style={{ fontFamily: 'var(--font-lora)' }}>
          Each space we design begins with a quiet conversation between elements. Fire gives
          impulse, earth brings weight, spirit invites meaning, and water softens the edges. We let
          their contrasts guide us, blending instinct and intention to create spaces that breathe,
          hold, and restore. Places that feel just right, where every material, light, and curve
          finds its purpose in harmony with the whole.
        </p>

        <button
          onClick={handleAudioToggle}
          className="flex h-[44] w-fit cursor-pointer items-center justify-center gap-[13px] rounded-[30px] bg-[#26262633] px-[14px] max-sm:gap-[13px]"
        >
          <div className="relative h-fit w-fit">
            {isMuted ? (
              <SoundIcon color="#262626" width={19} height={21} />
            ) : (
              <PauseIcon color="#262626" width={19} height={21} />
            )}
          </div>

          <div className="h-[32px] w-[1.5px] rounded-[1px] bg-[#262626] max-sm:h-[29px]"></div>

          <p className="text-[14px] leading-[36px] font-normal tracking-[-0.4px] text-[#262626] max-sm:text-[13px] max-sm:leading-[16px]" style={{ fontFamily: 'var(--font-lora)' }}>
            Listen <span className="max-sm:hidden">to an Excerpt from </span>“Our Founding Story”
          </p>
        </button>

        <audio ref={audioRef} preload="metadata">
          <source src="/audio/our_founding_story_amara.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="max-slg:h-[950px] relative mx-auto h-[1250px] w-full max-w-[1440px] max-md:h-[500px] max-sm:h-[490px]">
        <Link
          href="/design"
          className="element-item-anim open-cursor-item group max-slg:w-[500px] max-slg:h-[513px] absolute top-[40%] left-[40%] z-[1] h-[593px] w-[561px] max-md:h-[330px] max-md:w-[320px] max-sm:h-[315px] max-sm:w-[228px]"
          data-left-target="148"
          data-top-target="0"
          data-mobile-left-target="14"
          data-mobile-top-target="0"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/pages/home/elements-1.png"
              alt="Elements 1"
              width={1000}
              height={600}
              className="h-full w-full object-cover object-left"
            />
          </div>
        </Link>

        <Link
          href="/design"
          className="elements-items-anim-container open-cursor-item group element-item-anim max-slg:w-[420px] max-slg:h-[320px] absolute top-[40%] right-[40%] z-[2] h-[367px] w-[491px] max-md:h-[200px] max-md:w-[280px] max-sm:h-[152px] max-sm:w-[152px]"
          data-right-target="147"
          data-top-target="0"
          data-mobile-right-target="14"
          data-mobile-top-target="14"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/pages/home/elements-2.png"
              alt="Elements 1"
              width={1000}
              height={600}
              className="h-full w-full object-cover object-right"
            />
          </div>
        </Link>

        <Link
          href="/design"
          className="element-item-anim open-cursor-item group max-slg:w-[420px] max-slg:h-[360px] absolute top-[40%] left-[40%] z-[1] h-[420px] w-[487px] max-md:h-[280px] max-md:w-[320px] max-sm:h-[150px] max-sm:w-[129px]"
          data-left-target="76"
          data-top-target="712"
          data-mobile-left-target="14"
          data-mobile-top-target="339"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/pages/home/element-3.png"
              alt="Elements 1"
              width={1000}
              height={600}
              className="h-full w-full object-cover object-right"
            />
          </div>
        </Link>

        <Link
          href="/design"
          className="element-item-anim group open-cursor-item max-slg:w-[620px] max-slg:h-[630px] absolute top-[40%] right-[40%] z-[3] h-[715px] w-[707px] max-md:h-[420px] max-md:w-[420px] max-sm:h-[256px] max-sm:w-[209px]"
          data-right-target="75"
          data-top-target="503"
          data-mobile-right-target="14"
          data-mobile-top-target="233"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/pages/home/elements-4.png"
              alt="Elements 1"
              width={1000}
              height={600}
              className="h-full w-full object-cover object-left"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
