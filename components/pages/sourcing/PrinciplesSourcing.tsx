import Image from "next/image";

export default function PrinciplesSourcing() {
  return (
    <section className="bg-[#e8dfd2] w-full">
      <div className="mx-auto max-w-[1440px] px-[24px] pt-[40px] pb-[40px] text-center max-md:pt-[48px] max-md:pb-[30px]">
        <h3
          className="text-bg-img inline bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] italic text-[44px] leading-[52px] tracking-[0.2px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[32px] max-sm:leading-[40px]"
          style={{ fontFamily: 'var(--font-lora)', WebkitTextFillColor: 'transparent' }}
        >
          Our Approach
        </h3>
      </div>

      <div className="mx-auto max-w-[1440px] flex gap-[80px] px-[60px] pb-[108px] max-md:flex-col max-md:gap-[40px] max-md:px-[24px] max-md:pb-[60px]">
        <div className="flex-1">
          <div className="mb-[60px] max-sm:mb-[40px]">
            <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
              DESIGN PHASES 1-3
            </h2>
            <p className="mt-[16px] font-sans text-[16px] leading-[26px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
              From briefing to design, we translate your vision into a cohesive luxury interior concept and coordinated design package, with finalized layouts, material and finish direction, lighting strategy, and technical drawings, ready for execution before procurement.
            </p>
            <div className="mt-[28px]">
              <button className="inline-block h-[39px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#262626] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]">
                EXPLORE OUR FULL DESIGN PROCESS
              </button>
            </div>
          </div>

          <div className="hidden max-md:block mt-[40px] mb-[60px]">
            <div className="relative flex w-full items-center justify-center overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <div className="absolute inset-0">
                <Image
                  src="/images/pages/sourcing/boat-water.webp"
                  width={1000}
                  height={2000}
                  alt="Boat on water"
                  className="h-full w-full object-cover blur-[30px]"
                />
              </div>
              <div className="relative z-[1] h-[200px] w-[200px] overflow-hidden max-sm:h-[165px] max-sm:w-[165px]">
                <Image
                  src="/images/pages/sourcing/boat-water.webp"
                  width={500}
                  height={1000}
                  alt="Boat on water"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
              SOURCING PHASES 4-6
            </h2>

            <div className="mt-[16px] space-y-[48px] max-sm:mt-[12px] max-sm:space-y-[36px]">

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

        <div className="w-[45%] shrink-0 max-md:w-full">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/pages/sourcing/boat-water.webp"
                width={1000}
                height={2000}
                alt="Boat on water"
                className="h-full w-full object-cover blur-[30px]"
              />
            </div>

            <div className="relative z-[1] h-[345px] max-h-[60%] w-[321px] max-w-[70%] overflow-hidden max-sm:h-[165px] max-sm:w-[165px]">
              <div className="absolute h-full w-full overflow-hidden">
                <Image
                  src="/images/pages/sourcing/boat-water.webp"
                  width={500}
                  height={1000}
                  alt="Boat on water"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
