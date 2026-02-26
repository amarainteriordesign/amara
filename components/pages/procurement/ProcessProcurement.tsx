export default function ProcessProcurement() {
  return (
    <section className="w-full bg-[#f1ebdf] py-[100px] max-md:py-[60px] max-sm:py-[40px]">
      <div className="mx-auto max-w-[1100px] px-[60px] max-md:px-[40px] max-sm:px-[20px]">

        <div className="mb-[80px] max-md:mb-[60px] max-sm:mb-[40px]">
          <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626] max-sm:text-[26px] max-sm:leading-[34px]">
            DESIGN PROCESS
          </h2>
          <p className="mt-[6px] font-display text-[14px] tracking-[1.5px] text-[#9a9082] max-sm:text-[12px]">
            Phase 1 - 3
          </p>
          <p className="mt-[24px] max-w-[800px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:mt-[16px] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
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
            PROCUREMENT PROCESS
          </h2>
          <p className="mt-[6px] font-display text-[14px] tracking-[1.5px] text-[#9a9082] max-sm:text-[12px]">
            Procurement & Delivery
          </p>

          <div className="mt-[48px] space-y-[48px] max-sm:mt-[32px] max-sm:space-y-[36px]">

            <div>
              <p className="font-display text-[13px] tracking-[0.5px] text-[#9a9082] max-sm:text-[11px]">
                PHASE 4
              </p>
              <h3 className="mt-[8px] font-display text-[22px] leading-[30px] tracking-[0.3px] text-[#262626] max-sm:text-[18px] max-sm:leading-[24px]">
                PURCHASING & PROCUREMENT
              </h3>
              <p className="mt-[16px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
                This phase converts the approved design into confirmed orders, prices, and timelines. This includes :
              </p>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "Engagement with selected suppliers and manufacturers",
                  "Confirmation of suppliers, SKUs, specifications, finishes, and quantities",
                  "Final pricing, lead times, and availability checks",
                  "Placement of purchase orders",
                  "Budget tracking and cost control",
                  "Coordination of production timelines",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#262626] max-sm:text-[14px] max-sm:leading-[22px]"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#262626]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-[13px] tracking-[0.5px] text-[#9a9082] max-sm:text-[11px]">
                PHASE 5
              </p>
              <h3 className="mt-[8px] font-display text-[22px] leading-[30px] tracking-[0.3px] text-[#262626] max-sm:text-[18px] max-sm:leading-[24px]">
                LOGISTICS, QUALITY CONTROL & SHIPPING
              </h3>
              <p className="mt-[16px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
                We manage and control the movement of all items from production through shipping. This includes :
              </p>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "Order tracking and delivery follow-up",
                  "Inspection and quality control upon arrival at our warehouse",
                  "Secure storage until all items are received and approved",
                  "Consolidation and container loading",
                  "Preparation of export documentation in coordination with local and international brokers",
                  "International shipping and customs clearance",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#262626] max-sm:text-[14px] max-sm:leading-[22px]"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#262626]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-[16px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
                This phase ensures all items are shipped safely and in full compliance.
              </p>
            </div>

            <div>
              <p className="font-display text-[13px] tracking-[0.5px] text-[#9a9082] max-sm:text-[11px]">
                PHASE 6
              </p>
              <h3 className="mt-[8px] font-display text-[22px] leading-[30px] tracking-[0.3px] text-[#262626] max-sm:text-[18px] max-sm:leading-[24px]">
                INSTALLATION, FIT-OUT & STYLING
              </h3>
              <p className="mt-[16px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
                This phase focuses on on-site delivery, installation, and final completion of the project. This includes :
              </p>
              <ul className="mt-[16px] space-y-[8px]">
                {[
                  "Scheduling of white-glove deliveries to site",
                  "Unpacking, assembly, and installation of all FF&E and lighting",
                  "Coordination of fit-out works where required",
                  "On-site supervision and quality control",
                  "Final styling and detailing",
                  "Client walkthrough and project handover",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#262626] max-sm:text-[14px] max-sm:leading-[22px]"
                  >
                    <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#262626]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-[16px] font-sans text-[16px] leading-[28px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]" style={{ textAlign: 'justify' }}>
                We remain involved until the project is fully installed and completed.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
