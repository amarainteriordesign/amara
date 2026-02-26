export default function AboutSection() {
  return (
    <section className="w-full bg-[#e8dfd2]">
      <div className="mx-auto max-w-[900px] px-[60px] pt-[80px] pb-[40px] text-center max-md:px-[40px] max-md:pt-[60px] max-md:pb-[30px] max-sm:px-[20px] max-sm:pt-[40px] max-sm:pb-[20px]">
        <h2
          className="text-bg-img inline bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[9px] italic text-[44px] leading-[52px] tracking-[0.2px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[26px] max-sm:leading-[34px]"
          style={{ fontFamily: 'var(--font-lora)', WebkitTextFillColor: 'transparent' }}
        >
          About Our Studio
        </h2>
        <p className="mt-[40px] font-sans max-md:mt-[30px] text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[24px]">
          Amara Interior Design is an international interior design studio founded by two partners. Built on friendship and complementary expertise, the studio brings together creative direction and structured execution. Operating between Miami, Dubai, and Paris, the studio works across residential, commercial, and wellness projects, delivering timeless interiors shaped by thoughtful design, functionality, and carefully considered materials.
        </p>
      </div>
    </section>
  );
}
