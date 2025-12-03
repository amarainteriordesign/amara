"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const contextRef = useRef<gsap.Context>(null);
  const imageContextRef = useRef<gsap.Context>(null);
  const screenSize = useWindowSize();

  useGSAP(() => {
    // Set initial states
    gsap.set(".work-step-1", { opacity: 1, zIndex: 1 });
    gsap.set(".work-step-2", { opacity: 0, zIndex: 0 });
    gsap.set(".work-step-3", { opacity: 0, zIndex: 0 });

    // Create a timeline for smooth transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".works-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.33) {
            // Step 1: First text visible
            gsap.to(".work-step-1", { opacity: 1, zIndex: 1, duration: 0.3 });
            gsap.to(".work-step-2", { opacity: 0, zIndex: 0, duration: 0.3 });
            gsap.to(".work-step-3", { opacity: 0, zIndex: 0, duration: 0.3 });
          } else if (progress < 0.66) {
            // Step 2: Second text visible
            gsap.to(".work-step-1", { opacity: 0, zIndex: 0, duration: 0.3 });
            gsap.to(".work-step-2", { opacity: 1, zIndex: 1, duration: 0.3 });
            gsap.to(".work-step-3", { opacity: 0, zIndex: 0, duration: 0.3 });
          } else {
            // Step 3: Drawing visible
            gsap.to(".work-step-1", { opacity: 0, zIndex: 0, duration: 0.3 });
            gsap.to(".work-step-2", { opacity: 0, zIndex: 0, duration: 0.3 });
            gsap.to(".work-step-3", { opacity: 1, zIndex: 1, duration: 0.3 });
          }
        },
      },
    });

    // Add some easing to the timeline
    tl.to({}, { duration: 1 });
  });

  // Image animations similar to Moments component
  useGSAP(
    () => {
      if (!containerRef.current || !screenSize.width) return;
      if (imageContextRef.current) imageContextRef.current.revert();

      const isNotMd = screenSize.width >= 960;
      imageContextRef.current = gsap.context(() => {
        gsap.set(".work-left-anim", {
          y: -100,
          duration: 0,
        });

        gsap.set(".work-right-anim", {
          y: 80,
          duration: 0,
        });

        if (isNotMd) {
          gsap.set(".work-right-anim-container", {
            y: 200,
          });
        }

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom-=200px",
          end: "bottom top+=200px",
          onUpdate: (self) => {
            gsap.to(".work-left-anim", {
              y: -100 + self.progress * 100,
              duration: 0.05,
            });

            gsap.to(".work-right-anim", {
              y: -80 + self.progress * 80,
              duration: 0.05,
            });

            if (isNotMd) {
              gsap.to(".work-right-anim-container", {
                translateY: 200 - self.progress * 400,
                duration: 0.05,
              });
            }
          },
        });
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "center center",
          end: "bottom top",
          onUpdate: (self) => {
            gsap.to(".work-right-anim", {
              bottom: 1 - self.progress,
              duration: 0.05,
            });
          },
        });
      });
    },
    {
      scope: containerRef,
      dependencies: [screenSize],
    },
  );

  // Header logo animation for the images section
  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) {
      contextHeaderRef.current?.revert();
      return;
    }

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".work-images-wrapper",
        start: "top-=80px top",
        end: "bottom-=80px top",
        onEnter: () => {
          headerLogo?.classList.remove("dark");
        },
        onEnterBack: () => {
          headerLogo?.classList.remove("dark");
        },
        onLeaveBack: () => {
          headerLogo?.classList.add("dark");
        },
        onLeave: () => {
          headerLogo?.classList.add("dark");
        },
      });
    });
  });

  return (
    <>
      <section className="works-container relative mx-auto h-[350vh] w-full max-w-[1440px] px-[20px]">
        <div className="sticky top-0 flex h-screen w-full items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="work-step-1 absolute top-1/2 left-1/2 z-[1] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <p className="max-w-[900px] text-center font-serif text-[26px] leading-[43px] font-normal tracking-[0.7px] text-[#262626] max-md:max-w-[366px] max-md:text-[16px] max-md:leading-[21px] max-md:tracking-[0.4px] max-sm:max-w-[280px] max-sm:text-[12px]">
                Our work begins in the unseen, where intention, instinct, and emotion quietly take
                form.
              </p>
            </div>

            <div className="work-step-2 absolute top-1/2 left-1/2 z-[0] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <p className="max-w-[750px] text-center font-serif text-[26px] leading-[43px] font-normal tracking-[0.7px] text-[#262626] max-md:max-w-[366px] max-md:text-[16px] max-md:leading-[21px] max-md:tracking-[0.4px] max-sm:max-w-[280px] max-sm:text-[12px]">
                Water evaporates from the ocean, rising into the sky and drifting back towards the
                land, this is where we step in.
              </p>
            </div>

            <div className="work-step-3 absolute top-1/2 left-1/2 z-[0] flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <Image
                src="/images/pages/studio/drawing.png"
                alt="Drawing"
                width={520}
                height={272}
                className="w-full max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="work-images-wrapper mx-auto w-full max-w-[1440px] px-[20px]"
      >
        <div className="max-xmd:gap-[60px] flex items-start justify-center gap-[113px] max-md:flex-col max-md:gap-[40px]">
          <div className="relative aspect-[1.37] w-full max-w-[606px] overflow-hidden max-md:max-w-full">
            <Image
              src="/images/pages/studio/work.png"
              alt="Work"
              width={606}
              height={442}
              className="work-left-anim absolute left-0 h-[calc(100%+100px)] max-h-[calc(100%+100px)] w-full translate-y-[-100px] object-cover"
            />
          </div>
          <div className="work-right-anim-container aspect-[0.75] w-full max-w-[487px] max-md:w-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/pages/home/studio.png"
                alt="Studio "
                width={487}
                height={652}
                className="work-right-anim absolute left-0 h-[calc(100%+80px)] max-h-[calc(100%+80px)] translate-y-[-80px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
