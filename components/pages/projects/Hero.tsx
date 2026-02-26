"use client";
import Copy from "@/components/common/Copy/Copy";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
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
    <section
      className={`max-xmd:min-h-screen hero-wrapper relative min-h-[calc(100vh+80px)] w-full`}
    >
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="animate-hero-reveal absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            src="/images/pages/projects/Projects_Hero_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
            width={1920}
            height={1080}
            alt="Luxury interior design projects portfolio Amara Miami Dubai"
            priority
            sizes="100vw"
          />

          <div className="absolute top-1/2 z-[1] flex max-h-fit w-full -translate-y-1/2 flex-col items-center justify-center overflow-hidden p-[20px]">
            <Copy delay={1.7} animateOnScroll={false}>
              <h1 className="text-center font-serif text-[28px] leading-[36px] font-normal tracking-tighter text-[#FFF] max-sm:text-[24px]">
                Building the Finest Homes
              </h1>
            </Copy>

            <div className="max-h-fit w-full overflow-hidden text-center">
              <p className="hero-center-text-space text-bg-img bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] pb-[8px] font-serif text-[28px] leading-[36px] tracking-tighter italic max-sm:text-[24px]">
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
