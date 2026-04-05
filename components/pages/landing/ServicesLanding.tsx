export default function ServicesLanding() {
  return (
    <>
      <section className="bg-[#e8dfd2] pt-[40px] max-md:pt-[30px] max-sm:pt-[25px]">
        <div className="mx-auto max-w-[1200px] px-[60px] pb-[40px] text-center max-md:px-[40px] max-sm:px-[17px] max-sm:pb-[28px]">
          <a
            href="#contact-us"
            className="invisible text-bg-img inline bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[9px] italic text-[32px] leading-[40px] tracking-[0.2px] no-underline max-sm:text-[22px] max-sm:leading-[28px]"
            style={{ fontFamily: 'var(--font-lora)', WebkitTextFillColor: 'transparent' }}
          >
            Boutique Design, Strategic Procurement
          </a>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#e8dfd2] from-50% to-[#f1ebdf] to-50% pb-[40px] max-md:!bg-[#e8dfd2] max-md:!bg-none max-md:pb-0">
        <div className="mx-auto flex max-w-[1200px] gap-[80px] px-[60px] max-md:flex-col max-md:gap-[20px] max-md:px-[40px] max-sm:px-[17px]">
          <div className="flex flex-1 flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/images/pages/landing/Restaurant_Interior_Lounge_Amara_Interior_Design_Procurement_Miami_Dubai.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[42px] leading-[50px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[27px] max-sm:leading-[33px] max-sm:tracking-[0.4px]">
                DESIGN
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Refined luxury interior design begins with understanding space, lifestyle, and context. Our studio designs residential, hospitality, and commercial interiors worldwide, guiding projects from concept development and spatial planning to materials, lighting, and detailed execution.
              </p>
            </div>
            <div className="mt-[28px]">
              <a
                href="#contact-us"
                className="h-[39px] inline-block rounded-[35px] border-[1px] border-[#e2e0da99] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#FFF] no-underline max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
              >
                FIND OUT MORE
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url(/images/pages/landing/Shipping_Container_Cargo_Amara_Interior_Design_Procurement_Miami_Dubai.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[42px] leading-[50px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[27px] max-sm:leading-[33px] max-sm:tracking-[0.4px]">
                PROCUREMENT
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Our international furniture procurement services connect projects with premium manufacturers worldwide. We manage global sourcing, consolidated container shipping, logistics, and installation, ensuring quality control, cost efficiency, and seamless delivery.
              </p>
            </div>
            <div className="mt-[28px]">
              <a
                href="#contact-us"
                className="h-[39px] inline-block rounded-[35px] border-[1px] border-[#d4cfc899] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#FFF] no-underline max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
              >
                FIND OUT MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
