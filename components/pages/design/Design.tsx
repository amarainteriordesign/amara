import Image from "next/image";

export default function Design() {
  return (
    <section className="bg-[#F1EBDF] flex w-full flex-col gap-[86px] pt-[180px] max-md:gap-[59px] max-md:pt-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] max-md:items-center max-md:px-[24px]">
        <div className="flex w-full items-start gap-[40px] max-md:flex-col max-md:items-center max-md:gap-0">
          <div className="max-md:pb-[46px]">
            <Image
              src="/images/pages/design/Logo_Elements_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
              alt="Amara Logo Elements"
              width={966}
              height={874}
              className="w-full max-w-[421px] max-sm:max-w-[232px]"
            />
          </div>
          <div className="flex flex-col gap-[60px] max-md:gap-[46px]">
            <div className="flex flex-col max-md:items-center">
              <h2 className="text-bg-img inline bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[6px] text-[44px] leading-[52px] tracking-[0.2px] italic whitespace-nowrap max-md:pb-[16px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-center max-sm:text-[26px] max-sm:leading-[34px] max-sm:whitespace-normal" style={{ fontFamily: "var(--font-lora)" }}>
                Our Design Philosophy
              </h2>
              <p className="font-sans text-[12px] leading-[20px] font-normal tracking-[2%] text-[#000] uppercase">
                STORY OF THE ELEMENTS
              </p>
            </div>
            <div className="flex gap-[80px] max-md:flex-col max-md:gap-[33px] max-md:max-w-[500px]">
              <p className="max-w-[309px] font-sans text-[14px] leading-[21px] font-normal tracking-[3%] text-[#262626] max-sm:max-w-full max-sm:text-[12px]" style={{ textAlign: "justify" }}>
                We don&apos;t begin with rules or shapes. We begin with what we feel, the texture of a
                surface, the warmth of natural lines, the quiet pull of a space that just feels right.
                Every material tells a story, every project finds its rhythm. What guides us is less a
                method, more a sense of balance.
              </p>
              <p className="max-w-[309px] font-sans text-[14px] leading-[21px] font-normal tracking-[3%] text-[#262626] max-sm:max-w-full max-sm:text-[12px]" style={{ textAlign: "justify" }}>
                Some spaces ground you, others move you. We try to build both, places that hold weight,
                but also breathe. In our logo, each letter carries a part of that intention. A nod to what
                inspires us: the raw, the refined, and the feeling that lingers long after you leave
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-[20px] max-md:px-[12px] max-sm:px-0">
        <Image
          src="/images/pages/design/Logo_Elements_Strip_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
          alt="Amara Logo Elements Strip"
          width={6384}
          height={1280}
          className="w-full max-w-[1341px] max-sm:max-w-full"
        />
      </div>
    </section>
  );
}
