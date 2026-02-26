import Link from "next/link";

export default function ContactAbout() {
  return (
    <section className="bg-[#e8dfd2] w-full">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] pt-[80px] pb-[80px] max-md:pt-[60px] max-md:pb-[60px] max-sm:px-[12px] max-sm:pt-[40px] max-sm:pb-[40px]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="text-gradient-vertical pb-[9px] text-center font-serif text-[28px] leading-[36px] tracking-tighter italic max-md:pb-[16px] max-sm:text-center max-sm:text-[24px]">
            Book a Discovery Call with our Team
          </h2>

          <p className="pb-[43px] font-sans text-[12px] leading-[20px] font-normal tracking-[2%] text-[#262626] uppercase max-md:pb-[17px]">
            BRING YOU PROJECT TO LIFE
          </p>

          <Link
            href="/about-us#contact"
            className="h-[43px] rounded-[30px] bg-[#26262633] px-[20px] font-serif text-[14px] leading-[43px] font-normal tracking-[-3%] text-[#262626]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
