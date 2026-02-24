"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

export default function PrinciplesSourcing() {
  const screenSize = useWindowSize();

  useGSAP(
    () => {
      const isInline = screenSize.width < 960;

      if (isInline) {
        const context = gsap.context(() => {
          ScrollTrigger.create({
            trigger: ".sourcing-principle-container-anim",
            start: "top bottom+=200px",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(".sourcing-principle-image-box-anim", {
                yPercent: self.progress * -20,
                ease: "none",
                duration: 0.05,
              });
              gsap.to(".sourcing-principle-image-box-anim-bg", {
                yPercent: self.progress * -20,
                ease: "none",
                duration: 0.05,
              });
            },
          });
        });

        return () => context.revert();
      }

      const context = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".sourcing-principle-container-anim-main",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(".sourcing-principle-image-box-anim", {
              yPercent: self.progress * -20,
              ease: "none",
              duration: 0.05,
            });
            gsap.to(".sourcing-principle-image-box-anim-bg", {
              yPercent: self.progress * -20,
              ease: "none",
              duration: 0.05,
            });
          },
        });
      });

      return () => context.revert();
    },
    {
      dependencies: [screenSize],
    },
  );

  return (
    <section className="bg-[#e8dfd2] sourcing-principle-container-anim-main relative h-[calc(100vh+600px)] min-h-[800px] w-full max-md:h-auto max-md:min-h-fit">
      <div className="mx-auto max-w-[1440px] px-[24px] py-[108px] text-center max-md:py-[48px]">
        <h3
          className="text-bg-img inline bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] italic text-[44px] leading-[52px] tracking-[0.2px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[32px] max-sm:leading-[40px]"
          style={{ fontFamily: 'var(--font-lora)', WebkitTextFillColor: 'transparent' }}
        >
          Our Approach
        </h3>
      </div>

      <div className="absolute top-[15%] left-[112px] mr-[calc(45vw+80px)] max-w-[600px] max-md:hidden">
        <div className="mb-[60px] max-sm:mb-[40px]">
          <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
            DESIGN PHASES 1-3
          </h2>
          <p className="mt-[16px] font-sans text-[16px] leading-[26px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]">
            Before procurement begins, the design must be in place.
          </p>
          <div className="mt-[28px]">
            <button className="inline-block h-[39px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#262626] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]">
              EXPLORE OUR FULL DESIGN PROCESS →
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
            SOURCING PHASES 4-6
          </h2>

          <div className="mt-[48px] space-y-[48px] max-sm:mt-[32px] max-sm:space-y-[36px]">

            <div>
              <h3 className="text-[22px] leading-[30px] font-medium tracking-[0.2px] text-[#262626] max-sm:text-[18px] max-sm:leading-[24px]" style={{ fontFamily: 'var(--font-lora)' }}>
                Phase 4 : Purchasing & Procurement
              </h3>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "Supplier selection, product specification confirmation, and FF&E procurement across furniture, lighting, and finishes",
                  "Purchase order placement, production coordination, and lead time management",
                  "Budget tracking, cost control, and procurement alignment with the approved interior design scope",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] leading-[30px] font-medium tracking-[0.2px] text-[#262626] max-sm:text-[18px] max-sm:leading-[24px]" style={{ fontFamily: 'var(--font-lora)' }}>
                Phase 5 : Logistics, Quality Control & Shipping
              </h3>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "End-to-end logistics management, order tracking, and delivery coordination",
                  "Quality control inspections, secure warehouse storage, consolidation, and container loading",
                  "Export documentation, international shipping, and customs clearance coordination",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] leading-[30px] font-medium tracking-[0.2px] text-[#262626] max-sm:text-[18px] max-sm:leading-[24px]" style={{ fontFamily: 'var(--font-lora)' }}>
                Phase 6 : Installation, Fit-Out & Styling
              </h3>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "White-glove delivery scheduling and on-site FF&E and lighting installation",
                  "Fit-out coordination, on-site supervision, and quality assurance",
                  "Final interior styling, client walkthrough, and turnkey project handover",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="hidden px-[24px] max-md:block">
        <div className="mb-[40px]">
          <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
            DESIGN PHASES 1-3
          </h2>
          <p className="mt-[12px] text-[14px] leading-[22px] text-[#4a4a4a]" style={{ fontFamily: 'var(--font-lora)' }}>
            Before procurement begins, the design must be in place.
          </p>
          <div className="mt-[20px]">
            <button className="inline-block h-[32px] rounded-[35px] border-[1px] border-[#26262699] px-[14px] font-sans text-[11px] leading-[32px] font-medium tracking-[0.2px] text-[#262626]">
              EXPLORE OUR FULL DESIGN PROCESS →
            </button>
          </div>
        </div>
      </div>

      <div className="sourcing-principle-container-anim sticky top-0 ml-auto h-screen w-[45vw] max-md:relative max-md:h-[100vw] max-md:w-full">
        <div className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-hidden">
          <div className="overlow-hidden absolute">
            <Image
              src="/images/pages/sourcing/boat-water.webp"
              width={1000}
              height={2000}
              alt="Boat on water"
              className="sourcing-principle-image-box-anim-bg h-[120%] w-full scale-[1.4] object-cover blur-[30px]"
            />
          </div>

          <div className="relative z-[1] h-[345px] max-h-full w-[321px] max-w-full overflow-hidden max-sm:h-[165px] max-sm:w-[165px]">
            <div className="absolute h-full w-full overflow-hidden">
              <Image
                src="/images/pages/sourcing/boat-water.webp"
                width={500}
                height={1000}
                alt="Boat on water"
                className="sourcing-principle-image-box-anim h-[120%] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden px-[24px] pb-[60px] max-md:block">
        <div className="mt-[40px]">
          <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
            SOURCING PHASES 4-6
          </h2>

          <div className="mt-[32px] space-y-[36px]">
            <div>
              <h3 className="text-[18px] leading-[24px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                Phase 4 : Purchasing & Procurement
              </h3>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "Supplier selection, product specification confirmation, and FF&E procurement across furniture, lighting, and finishes",
                  "Purchase order placement, production coordination, and lead time management",
                  "Budget tracking, cost control, and procurement alignment with the approved interior design scope",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-[8px] font-sans text-[14px] leading-[22px] text-[#4a4a4a]">
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] leading-[24px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                Phase 5 : Logistics, Quality Control & Shipping
              </h3>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "End-to-end logistics management, order tracking, and delivery coordination",
                  "Quality control inspections, secure warehouse storage, consolidation, and container loading",
                  "Export documentation, international shipping, and customs clearance coordination",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-[8px] font-sans text-[14px] leading-[22px] text-[#4a4a4a]">
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] leading-[24px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                Phase 6 : Installation, Fit-Out & Styling
              </h3>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "White-glove delivery scheduling and on-site FF&E and lighting installation",
                  "Fit-out coordination, on-site supervision, and quality assurance",
                  "Final interior styling, client walkthrough, and turnkey project handover",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-[8px] font-sans text-[14px] leading-[22px] text-[#4a4a4a]">
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
