"use client";
import Copy from "@/components/common/Copy/Copy";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  return (
    <section className={`max-xmd:min-h-screen relative z-[13] min-h-[calc(100vh+80px)] w-full`}>
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="animate-hero-reveal absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            src="/images/pages/design/Palm_Trees_Amara_Interior_Design_Miami_Dubai.webp"
            width={1920}
            height={1080}
            alt="Hero background Image"
          />

          <div className="absolute top-1/2 z-[1] flex max-h-fit w-full -translate-y-1/2 flex-col items-center justify-center overflow-hidden p-[20px]">
            <Copy delay={1.7} animateOnScroll={false}>
              <p className="text-center font-serif text-[32px] leading-[40px] font-normal tracking-tighter text-[#FFF] max-sm:text-[26px]">
                Where Design Comes to Life
              </p>
            </Copy>

            <div className="max-h-fit w-full overflow-hidden text-center">
              <p className="hero-center-text-space text-bg-img bg-[url(/images/pages/home/text-background.webp)] pb-[8px] font-serif text-[32px] leading-[40px] tracking-tighter italic max-sm:text-[26px]">
                Inspired by the elements
              </p>
            </div>

            <Copy delay={1.8} animateOnScroll={false}>
              <p className="pb-[8px] font-sans text-[14px] leading-[22px] font-normal tracking-[4px] text-white uppercase max-sm:pb-[12px] max-sm:text-[11px]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)' }}>
                MIAMI - DUBAI - PARIS
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
