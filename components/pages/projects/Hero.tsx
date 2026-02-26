"use client";
import Copy from "@/components/common/Copy/Copy";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) {
      contextHeaderRef.current?.revert();
      return;
    }

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".hero-wrapper",
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
      className={`max-xmd:min-h-screen hero-wrapper relative min-h-[calc(100vh+80px)] w-full`}
    >
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="animate-hero-reveal absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            src="/images/pages/projects/hero.png"
            width={1920}
            height={1080}
            alt="Luxury interior design projects portfolio Amara Miami Dubai"
          />

          <div className="absolute top-1/2 z-[1] flex max-h-fit w-full -translate-y-1/2 flex-col items-center justify-center overflow-hidden p-[20px]">
            <Copy delay={1.7} animateOnScroll={false}>
              <p className="text-center font-serif text-[28px] leading-[36px] font-normal tracking-tighter text-[#FFF] max-sm:text-[24px]">
                Building the Finest Homes
              </p>
            </Copy>

            <div className="max-h-fit w-full overflow-hidden text-center">
              <p className="hero-center-text-space text-bg-img bg-[url(/images/pages/home/text-background.webp)] pb-[8px] font-serif text-[28px] leading-[36px] tracking-tighter italic max-sm:text-[24px]">
                All over the world
              </p>
            </div>

            <Copy delay={1.8} animateOnScroll={false}>
              <p className="pb-[8px] font-sans text-[12px] leading-[20px] font-normal tracking-tight text-[#FFF] uppercase max-sm:pb-[12px]">
                From blueprint to belonging
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
