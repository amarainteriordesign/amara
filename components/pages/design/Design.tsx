import Image from "next/image";

export default function Design() {
  return (
    <section className="bg-background flex w-full flex-col gap-[86px] pt-[242px] max-md:gap-[59px] max-md:pt-[91px]">
      <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-[40px] px-[20px] max-md:flex-col max-md:items-center max-md:gap-0 max-md:px-[17px]">
        <div className="max-md:pb-[46px]">
          <Image
            src="/images/pages/design/design.png"
            alt="Design"
            width={421}
            height={345}
            className="w-full max-w-[421px] max-sm:max-w-[232px]"
          />
        </div>
        <div className="max-xmd:max-w-[270px] flex max-w-[309px] shrink flex-col items-start gap-[60px] max-md:max-w-[500px] max-md:gap-[46px] max-sm:max-w-full">
          <div className="flex w-full flex-col max-md:items-center">
            <h3 className="text-bg-img pb-[6px] text-[28px] leading-[36px] tracking-tighter italic max-md:pb-[16px] max-sm:text-center max-sm:text-[24px]" style={{ fontFamily: "var(--font-lora)" }}>
              Our Design Philosophy
            </h3>
            <p className="font-sans text-[12px] leading-[20px] font-normal tracking-[2%] text-[#000] uppercase">
              STORY OF THE ELEMENTS
            </p>
          </div>
          <p className="mb-[26px] w-full font-sans text-[14px] leading-[21px] font-normal tracking-[3%] text-[#262626] max-md:mb-0 max-md:pb-[33px] max-sm:max-w-full max-sm:text-[12px]">
            We don’t begin with rules or shapes. We begin with what we feel, the texture of a
            surface, the warmth of natural lines, the quiet pull of a space that just feels right.
            Every material tells a story, every project finds its rhythm. What guides us is less a
            method, more a sense of balance.
          </p>
        </div>
        <p className="max-xmd:mr-0 max-xmd:max-w-[270px] mr-[140px] mb-[26px] max-w-[309px] shrink-0 font-sans text-[14px] leading-[21px] font-normal tracking-[3%] text-[#262626] max-md:mb-0 max-md:max-w-[500px] max-sm:max-w-full max-sm:text-[12px]">
          Some spaces ground you, others move you. We try to build both, places that hold weight,
          but also breathe. In our logo, each letter carries a part of that intention. A nod to what
          inspires us: the raw, the refined, and the feeling that lingers long after you leave
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-[20px] max-md:px-[12px] max-sm:px-0">
        <Image
          src="/images/pages/design/design-elements.png"
          alt="Design Elements"
          width={1321}
          height={314}
          className="w-full max-w-[1341px] max-sm:max-w-full"
        />
      </div>
    </section>
  );
}
