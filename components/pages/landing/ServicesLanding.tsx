export default function ServicesLanding() {
  return (
    <div className="bg-gradient-to-b from-[#e8dfd2] from-50% to-[#f1ebdf] to-50% max-md:!bg-[#F1EBDF] max-md:!bg-none">
      <div className="max-md:bg-[#e8dfd2]">
        <div className="mx-auto max-w-[1200px] px-[60px] pt-[40px] pb-[40px] text-center max-md:px-[40px] max-md:pt-[30px] max-sm:px-[17px] max-sm:pt-[25px] max-sm:pb-[28px]">
          <h2
            className="text-bg-img inline bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[9px] italic text-[32px] leading-[40px] tracking-[0.2px] max-sm:text-[22px] max-sm:leading-[28px]"
            style={{ fontFamily: 'var(--font-lora)', WebkitTextFillColor: 'transparent' }}
          >
            Boutique Design, Strategic Procurement
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1200px] gap-[80px] px-[60px] pb-[40px] max-md:flex-col max-md:gap-[20px] max-md:px-[40px] max-md:pb-0 max-sm:px-[17px]">
          <div className="flex flex-1 flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#92958D' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[38px] leading-[46px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]">
                DESIGN
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Luxury interior design services begin with a deep understanding of space, lifestyle, and context. As a global full-service interior design studio with offices in Dubai and Miami, we deliver residential, hospitality, and commercial interior design projects worldwide, guiding every stage from concept development and spatial planning to material selection and precise execution.
              </p>
            </div>
            <div className="mt-[28px]">
              <a
                href="#contact-us"
                className="h-[39px] inline-block rounded-[35px] border-[1px] border-[#e2e0da99] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#FFF] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
              >
                FIND OUT MORE
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#2F3034' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[38px] leading-[46px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]">
                PROCUREMENT
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Our international furniture procurement services support residential, hospitality, and commercial projects worldwide. We partner with premium manufacturers and trusted suppliers, managing consolidated container shipping, global logistics, customs coordination, and on-site installation to ensure quality control, cost efficiency, and seamless project delivery across international markets.
              </p>
            </div>
            <div className="mt-[28px]">
              <a
                href="#contact-us"
                className="h-[39px] inline-block rounded-[35px] border-[1px] border-[#d4cfc899] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#FFF] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
              >
                FIND OUT MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
