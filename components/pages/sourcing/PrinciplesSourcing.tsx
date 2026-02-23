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

      const context = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".sourcing-principle-container-anim",
          start: isInline ? "top bottom+=200px" : "top top",
          end: isInline ? "bottom top" : "bottom bottom",
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
    <section className="bg-background sourcing-principle-container-anim-main relative w-full max-md:h-fit max-md:min-h-fit">
      <div className="mx-auto max-w-[1440px] px-[24px] py-[108px] max-md:py-[48px]">
        <h3 className="text-center text-[72px] leading-[72px] font-normal tracking-[1px] text-[#62513A] max-md:text-[48px] max-md:leading-[48px] max-sm:text-[32px] max-sm:leading-[32px]" style={{ fontFamily: 'var(--font-libre-caslon-display)' }}>
          OUR APPROACH
        </h3>
      </div>

      <div className="mx-auto flex max-w-[1440px] gap-[80px] px-[112px] pb-[120px] max-md:flex-col max-md:gap-[40px] max-md:px-[24px] max-md:pb-[60px]">
        <div className="flex-1 max-md:order-2">

          <div className="mb-[60px] max-sm:mb-[40px]">
            <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
              DESIGN PROCESS
            </h2>
            <p className="mt-[6px] font-sans text-[14px] tracking-[1.5px] text-[#9a9082] max-sm:text-[12px]">
              Phase 1 - 3
            </p>
            <p className="mt-[24px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:mt-[16px] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
              From briefing to detailed design, we transform your vision into a cohesive luxury interior design concept rooted in lifestyle, spatial planning, and refined material direction. The concept is then developed into a fully coordinated design package with finalized layouts, finishes, lighting strategy, and technical drawings for seamless project execution worldwide.
            </p>
            <div className="mt-[32px] max-sm:mt-[24px]">
              <button className="inline-block h-[39px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#262626] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]">
                FIND OUT MORE →
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
              SOURCING PROCESS
            </h2>
            <p className="mt-[6px] font-sans text-[14px] tracking-[1.5px] text-[#9a9082] max-sm:text-[12px]">
              Procurement & Delivery
            </p>

            <div className="mt-[48px] space-y-[48px] max-sm:mt-[32px] max-sm:space-y-[36px]">

              <div>
                <h3 className="font-sans text-[20px] leading-[28px] font-medium tracking-[0.2px] text-[#262626] max-sm:text-[17px] max-sm:leading-[24px]">
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
                <h3 className="font-sans text-[20px] leading-[28px] font-medium tracking-[0.2px] text-[#262626] max-sm:text-[17px] max-sm:leading-[24px]">
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
                <h3 className="font-sans text-[20px] leading-[28px] font-medium tracking-[0.2px] text-[#262626] max-sm:text-[17px] max-sm:leading-[24px]">
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

        <div className="sourcing-principle-container-anim sticky top-[100px] h-fit w-[45vw] max-md:relative max-md:top-0 max-md:order-1 max-md:h-[100vw] max-md:w-full">
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
      </div>
    </section>
  );
}
