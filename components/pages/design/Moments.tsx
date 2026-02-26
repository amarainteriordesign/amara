"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

export default function Moments() {
  const containerRef = useRef<HTMLElement>(null);
  const contextRef = useRef<gsap.Context>(null);
  const screenSize = useWindowSize();

  useGSAP(
    () => {
      if (!containerRef.current || !screenSize.width) return;
      if (contextRef.current) contextRef.current.revert();

      const isNotMd = screenSize.width >= 960;
      contextRef.current = gsap.context(() => {
        gsap.set(".moment-left-anim", {
          y: -100,
          duration: 0,
        });

        gsap.set(".moment-right-anim", {
          y: 80,
          duration: 0,
        });

        if (isNotMd) {
          gsap.set(".moment-right-anim-container", {
            y: 200,
          });
        }

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom-=200px",
          end: "bottom top+=200px",
          onUpdate: (self) => {
            gsap.to(".moment-left-anim", {
              y: -100 + self.progress * 100,
              duration: 0.05,
            });

            gsap.to(".moment-right-anim", {
              y: -80 + self.progress * 80,
              duration: 0.05,
            });

            if (isNotMd) {
              gsap.to(".moment-right-anim-container", {
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
            gsap.to(".moment-left-anim", {
              opacity: 1 - self.progress,
              duration: 0.05,
            });

            gsap.to(".moment-right-anim", {
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

  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) {
      contextHeaderRef.current?.revert();
      return;
    }

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".moments-wrapper",
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
    <section
      ref={containerRef}
      className="moments-wrapper max-h-fit w-full max-w-full overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-end justify-center gap-[120px] p-[193px] px-[20px] pt-[121px] max-md:flex-col max-md:items-start max-md:gap-[30px] max-md:pt-[74px] max-md:pb-[69px] max-sm:px-[18px]">
        <div className="flex flex-col items-start gap-[63px] pb-[17px] max-md:w-full max-md:gap-[10px]">
          <div className="relative aspect-[0.67] w-full max-w-[331px] overflow-hidden max-md:max-w-full">
            <Image
              src="/images/pages/home/studio.webp"
              alt="Amara Interior Design studio workspace Miami Dubai"
              width={1300}
              height={1500}
              className="moment-left-anim absolute left-0 h-[calc(100%+100px)] max-h-[calc(100%+100px)] w-full translate-y-[-100px] object-cover"
            />
          </div>

          <p className="max-w-[328px] font-serif text-[14px] leading-[21px] font-normal tracking-[3%] text-[#A2ADB4] max-md:max-w-[500px] max-sm:max-w-full max-sm:text-[12px] max-sm:leading-[22px] max-sm:tracking-[0%]">
            A room can carry silence, a light can hold warmth. We design for these moments; where
            stillness and beauty meet in quiet harmony.
          </p>
        </div>

        <div className="moment-right-anim-container aspect-[0.69] w-full max-w-[566px] self-end max-sm:max-w-[251px]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/pages/home/design1.webp"
              alt="Bespoke luxury interior design detail Amara Miami Dubai"
              width={1500}
              height={1900}
              className="moment-right-anim moment-left-anim absolute left-0 h-[calc(100%+80px)] max-h-[calc(100%+80px)] translate-y-[-80px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
