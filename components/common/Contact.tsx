import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-background w-full">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-[167px] px-[20px] pt-[300px] pb-[40px] max-md:pt-[183px] max-md:pb-[33px] max-sm:gap-[183px] max-sm:px-[12px]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h4 className="text-gradient-vertical pb-[9px] text-center font-serif text-[28px] leading-[36px] tracking-tighter italic max-md:pb-[16px] max-sm:text-center max-sm:text-[24px]">
            Book a Discovery Call with our Team
          </h4>

          <p className="pb-[43px] font-sans text-[12px] leading-[20px] font-normal tracking-[2%] text-[#262626] uppercase max-md:pb-[17px]">
            BRING YOU PROJECT TO LIFE
          </p>

          <Link
            href="/about-us#contact-us"
            className="h-[43px] rounded-[30px] bg-[#26262633] px-[20px] font-serif text-[14px] leading-[43px] font-normal tracking-[-3%] text-[#262626]"
          >
            Contact Us
          </Link>
        </div>
        <h3 className="font-display text-bg-img max-slg:text-[225px] max-slg:leading-[240px] max-xmd:text-[165px] max-xmd:leading-[182px] max-xsm:text-[108px] max-xsm:leading-[120px] w-full bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] pb-[26px] text-center text-[255px] leading-[237px] font-normal tracking-[-7%] text-nowrap uppercase max-md:text-[128px] max-md:leading-[142px] max-sm:text-[60px] max-sm:leading-[72px] max-sm:tracking-[-10%]">
          LET’s TALK.
        </h3>
      </div>
    </section>
  );
}
