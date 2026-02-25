import Image from "next/image";
import Link from "next/link";

export default function Approach() {
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
          <div className="max-md:hidden">
            <div className="mb-[60px]">
              <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626]">
                DESIGN PROCESS
              </h2>

              <div className="mt-[16px] space-y-[48px]">
                <div>
                  <h3 className="text-[22px] leading-[30px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                    Phase 1 – Concept & Vision
                  </h3>
                  <ul className="mt-[16px] space-y-[8px]">
                    {[
                      "Interior design concept development aligned with client brief and lifestyle",
                      "Curated moodboards defining material palette, textures, and overall aesthetic direction",
                      "Preliminary space planning and layout studies to optimize flow and functionality",
                      "Initial material and finish direction for cohesive design identity",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#4a4a4a]">
                        <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[22px] leading-[30px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                    Phase 2 – Design Development
                  </h3>
                  <ul className="mt-[16px] space-y-[8px]">
                    {[
                      "Detailed space planning with fully coordinated layouts",
                      "Final selection of interior finishes, materials, and surfaces",
                      "Integrated architectural and decorative lighting design",
                      "Preliminary FF&E selection aligned with design concept and budget",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#4a4a4a]">
                        <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[22px] leading-[30px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                    Phase 3 – Detailed Design & Documentation
                  </h3>
                  <ul className="mt-[16px] space-y-[8px]">
                    {[
                      "Complete interior design drawing package (layouts, RCP, lighting, finishes)",
                      "Custom joinery design with technical detailing",
                      "High-quality 3D renderings for design visualization",
                      "Final FF&E specification for procurement and installation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] font-sans text-[16px] leading-[26px] text-[#4a4a4a]">
                        <span className="mt-[9px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#4a4a4a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-[36px] leading-[44px] tracking-[0.5px] text-[#262626]">
                PROCUREMENT PROCESS – Phases 4–6
              </h2>
              <p className="mt-[16px] font-sans text-[16px] leading-[26px] text-[#4a4a4a]" style={{ textAlign: 'justify' }}>
                From approved design to final handover, we manage procurement, logistics, quality control, international shipping, and white-glove installation to ensure seamless project delivery.
              </p>
              <div className="mt-[28px]">
                <Link href="/procurement" className="inline-block h-[39px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#262626]">
                  EXPLORE OUR FULL PROCUREMENT PROCESS
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden max-md:block">
            <div className="mb-[40px]">
              <h2 className="font-display text-[26px] leading-[34px] tracking-[0.5px] text-[#262626]">
                DESIGN PROCESS
              </h2>

              <div className="mt-[16px] space-y-[28px]">
                <div>
                  <h3 className="text-[18px] leading-[24px] font-medium tracking-[0.2px] text-[#262626]" style={{ fontFamily: 'var(--font-lora)' }}>
                    Phase 1 – Concept & Vision
                  </h3>
                  <ul className="mt-[16px] space-y-[8px]">
                    {[
                      "Interior design concept development aligned with client brief and lifestyle",
                      "Curated moodboards defining material palette, textures, and overall aesthetic direction",
                      "Preliminary space planning and layout studies to optimize flow and functionality",
                      "Initial material and finish direction for cohesive design identity",
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
                    Phase 2 – Design Development
                  </h3>
                  <ul className="mt-[16px] space-y-[8px]">
                    {[
                      "Detailed space planning with fully coordinated layouts",
                      "Final selection of interior finishes, materials, and surfaces",
                      "Integrated architectural and decorative lighting design",
                      "Preliminary FF&E selection aligned with design concept and budget",
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
                    Phase 3 – Detailed Design & Documentation
                  </h3>
                  <ul className="mt-[16px] space-y-[8px]">
                    {[
                      "Complete interior design drawing package (layouts, RCP, lighting, finishes)",
                      "Custom joinery design with technical detailing",
                      "High-quality 3D renderings for design visualization",
                      "Final FF&E specification for procurement and installation",
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

            <div className="mt-[40px] mb-[40px] overflow-hidden">
              <Image
                src="/images/pages/design/Material_Samples_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
                width={1598}
                height={2048}
                alt="Material samples"
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-[26px] leading-[34px] tracking-[0.5px] text-[#262626]">
                PROCUREMENT PROCESS – Phases 4–6
              </h2>
              <p className="mt-[16px] font-sans text-[14px] leading-[22px] text-[#4a4a4a]" style={{ textAlign: 'justify' }}>
                From approved design to final handover, we manage procurement, logistics, quality control, international shipping, and white-glove installation to ensure seamless project delivery.
              </p>
              <div className="mt-[28px]">
                <Link href="/procurement" className="inline-block h-[32px] rounded-[35px] border-[1px] border-[#26262699] px-[14px] font-sans text-[11px] leading-[32px] font-medium tracking-[0.2px] text-[#262626]">
                  EXPLORE OUR FULL PROCUREMENT PROCESS
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[45%] shrink-0 overflow-hidden max-md:hidden">
          <Image
            src="/images/pages/design/Material_Samples_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
            width={1598}
            height={2048}
            alt="Material samples"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
