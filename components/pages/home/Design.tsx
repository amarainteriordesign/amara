"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "@/components/common/Copy/Copy";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Design() {
  const screenSize = useWindowSize();
  const contextRef = useRef<gsap.Context>(null);

  useGSAP(() => {
    contextRef.current?.revert();
    const isMd = screenSize.width < 960;

    contextRef.current = gsap.context(() => {
      // intro animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".design-container",
          start: "top top+=400px",
          end: "bottom bottom",
          once: true,
        },
        defaults: { ease: "power3.inOut", duration: 1 },
      });

      tl.to(".design-text-anim", { translateY: 0 });

      const minWidth = isMd ? 70 : 40;
      const minX = isMd ? -200 : -100;

      const slides = gsap.utils.toArray(".design-slider-item") as HTMLElement[];

      ScrollTrigger.create({
        trigger: ".design-slider-item--container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(slides, {
            width: minWidth + self.progress * 12 + "vw",
          });
          gsap.set(".design-slider-item--inner", {
            x: minX * self.progress + "vw",
          });
        },
      });
    });

    return () => {
      contextRef.current?.revert();
    };
  }, [screenSize]);

  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) contextHeaderRef.current?.revert();

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".design-container",
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
    <section className="design-container xmd:pb-[100px] w-full max-w-full pb-[150px] max-sm:pb-[70px]">
      <div className="top-0 mx-auto flex max-w-[1440px] flex-col items-center justify-center px-[20px] pt-[166px] max-sm:pt-[88px]">
        <div className="max-h-fit w-full overflow-hidden text-center">
          <h3 className="design-text-anim text-bg-img translate-y-[-120%] bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:pb-[7px] max-sm:text-[24px] max-sm:tracking-[-0.6]" style={{ fontFamily: 'var(--font-lora)' }}>
            Designing with stillness in mind
          </h3>
        </div>

        <Copy delay={0}>
          <p className="pb-[81px] font-sans text-[12px] leading-[20px] font-normal tracking-[0.6px] text-[#262626] uppercase max-sm:pb-[27px]">
            The Heart Behind the Name
          </p>
        </Copy>

        <div className="max-h-fit overflow-hidden text-center">
          <p className="design-text-anim text-gradient-vertical max-w-[552px] translate-y-[-120%] text-center text-[28px] leading-[37px] font-normal tracking-[-0.8px] max-sm:max-w-[320px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[-0.5]" style={{ fontFamily: 'var(--font-lora)' }}>
            “I’ve never seen design as simple decoration. For me, it’s a way of bringing calm, of
            creating space for what truly matters. Each project feels like a quiet dialogue where
            beauty, balance, and emotion come together.”
          </p>
        </div>
      </div>

      <div className="max-w design-slider-item--container relative min-h-[calc(100vh+700px)] w-full">
        <div className="max-xmd:pt-[54px] max-xmd:top-[calc(calc(50vh-202px)-54px)] sticky top-[calc(calc(50vh-255.5px)-198px)] z-[1] w-full overflow-hidden pt-[198px]">
          <div
            className="design-slider-item--inner flex items-center"
            style={{ willChange: "transform" }}
          >
            {[
              { img: "/images/pages/home/design1.png", title: "Water and golden object" },
              { img: "/images/pages/home/design2.png", title: "Relaxing in stone bathtub" },
              {
                img: "/images/pages/home/design3.png",
                title: "Outdoor leisure area with fire pit",
              },
              { img: "/images/pages/home/design4.png", title: "Water and golden object" },
            ].map((item, index) => (
              <div
                key={"design" + index}
                style={{ willChange: "width" }}
                className="design-slider-item h-[511px] w-[40vw] flex-shrink-0 p-[50px] max-md:h-[404px] max-md:w-[70vw] max-md:p-[20px]"
              >
                <Image
                  style={{ maxWidth: "unset" }}
                  className="h-full w-full object-cover"
                  width={1000}
                  height={950}
                  src={item.img}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
