"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Copy from "@/components/common/Copy/Copy";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1 } });

    tl.to(".hero-bottom-text", { y: 300, duration: 0 });
    tl.to(".hero-bottom-text", { opacity: 1, delay: 1.5, duration: 0 });
    tl.to(".hero-bottom-text", { y: 0 });

    const tl2 = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1 } });

    tl2.to(".hero-center-text-space", { y: 120, duration: 0 });
    tl2.to(".hero-center-text-space", { opacity: 1, delay: 1.5, duration: 0 });
    tl2.to(".hero-center-text-space", { y: 0 });

    gsap.to(".animate-hero-reveal", {
      scale: 1,
      ease: "power3.inOut",
      duration: 2,
      delay: 1.7,
    });
  });

  const contextRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) contextRef.current?.revert();

    contextRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".hero-container",
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
      className={`max-xmd:min-h-screen hero-container relative min-h-[calc(100vh+80px)] w-full`}
    >
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="animate-hero-reveal absolute top-0 left-0 z-[-1] h-full w-full object-cover object-bottom"
            src="/images/pages/studio/hero.png"
            width={1440}
            height={809}
            alt="Amara Interior Design studio about us Miami Dubai"
          />
          <div className="mx-auto flex h-screen w-full max-w-[1440px] flex-col items-center justify-end gap-[67px] px-[20px] pt-[166px] pb-[166px] max-md:justify-center max-sm:gap-[35px] max-sm:px-[12px]">
            <div className="flex flex-col items-center">
              <Copy delay={1.7} animateOnScroll={false}>
                <h1 className="text-center font-serif text-[28px] leading-[36px] font-normal tracking-[-0.8px] text-[#FFF] max-sm:text-[24px] max-sm:tracking-[-0.6px]">
                  Design Begins with People
                </h1>
              </Copy>
              <div className="max-h-fit w-full overflow-hidden text-center">
                <p className="hero-center-text-space text-bg-img bg-[url(/images/pages/home/text-background.webp)] text-center font-serif text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:text-[24px] max-sm:tracking-[-0.6px]">
                  Their Rituals, Their Rhythm, Their Dreams
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[25px] max-sm:gap-[35px]">
              <Image
                src="/images/pages/studio/logo.png"
                alt="Amara Interior Design logo"
                width={307}
                height={217}
                className="object-contain max-sm:h-[153px] max-sm:w-[217px]"
              />
              <Copy delay={1.8} animateOnScroll={false}>
                <p className="text-center font-sans text-[12px] leading-[20px] font-normal tracking-[0.3px] text-[#FFF] uppercase">
                  Rooted in human stories
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
