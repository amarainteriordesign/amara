export default function AboutSection() {
  return (
    <section className="w-full bg-[#e8dfd2]">
      <div className="mx-auto max-w-[900px] px-[60px] pt-[80px] pb-[40px] text-center max-md:px-[40px] max-md:pt-[60px] max-md:pb-[30px] max-sm:px-[20px] max-sm:pt-[40px] max-sm:pb-[20px]">
        <h2
          className="text-bg-img inline bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] italic text-[44px] leading-[52px] tracking-[0.2px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[26px] max-sm:leading-[34px]"
          style={{ fontFamily: 'var(--font-lora)', WebkitTextFillColor: 'transparent' }}
        >
          International FF&E Procurement & Installation
        </h2>
        <p className="mt-[40px] font-sans max-md:mt-[30px] text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]">
          At Amara Interior Design, sourcing is a structured and strategic process. We provide international furniture sourcing and FF&E procurement services for luxury residential, hospitality, and commercial projects worldwide. Working directly with trusted global manufacturers and partners, we manage quotations, production follow up, quality control, and international logistics. From supplier coordination to consolidated container shipping, last mile delivery, and onsite installation, we oversee the entire procurement process to ensure consistency, transparency, and reliable project timelines.
        </p>
        <div className="pt-[40px] max-sm:pt-[28px]">
          <a
            href="https://wa.me/13055604373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block h-[39px] rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#262626] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
