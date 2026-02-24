"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Copy from "@/components/common/Copy/Copy";

gsap.registerPlugin(useGSAP);

export default function HeroSourcing() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
    );
  });

  return (
    <section className="relative min-h-screen w-full max-md:min-h-screen">
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            src="/images/pages/sourcing/Aerial_Container_Cargo_Ship_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
            width={1920}
            height={1080}
            alt="Container ship on open ocean - global sourcing"
            priority
          />

          <div className="absolute inset-0 z-0 bg-black/30" />

          <div className="hero-overlay absolute top-1/2 z-[1] flex max-h-fit w-full -translate-y-1/2 flex-col items-center justify-center overflow-hidden p-[20px]">
            <Copy animateOnScroll={false} delay={1.55}>
              <p className="pb-[12px] text-center font-calvino text-[56px] leading-[64px] font-normal tracking-[-0.5px] capitalize text-[#FFF] max-sm:pb-[8px] max-sm:text-[40px] max-sm:leading-[48px]">
                <span className="text-white">Think global.</span>{" "}
                <span className="text-white">Source better.</span>
              </p>
            </Copy>

            <Copy delay={1.8} animateOnScroll={false}>
              <p className="pb-[8px] text-center font-sans text-[16px] leading-[24px] font-normal tracking-[4px] text-white uppercase max-sm:pb-[12px] max-sm:text-[12px]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)' }}>
                Purchasing - Logistics - Installation
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
}
