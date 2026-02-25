import Image from "next/image";

export default function Rhythm() {
  return (
    <div className="bg-background w-full">
      <section className="max-xmd:px-[20px] mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[151px] px-[83px] pt-[166px] pb-[216px] max-sm:gap-[95px] max-sm:px-[18px] max-sm:pt-[89px] max-sm:pb-[110px]">
        <div className="flex w-full flex-col items-start gap-[19px] max-md:items-end max-sm:gap-[8px]">
          <div className="flex w-full items-end justify-center gap-[20px] max-md:flex-col max-md:items-start max-sm:gap-0">
            <p className="tranking-[3%] hidden max-w-[500px] font-serif text-[14px] leading-[21px] font-normal text-[#1A1A1E] max-md:block max-sm:max-w-full max-sm:pb-[20px] max-sm:text-[12px]">
              We design by feeling first, gathering impressions from places we’ve lived, loved, and
              wandered through. From Mediterranean ease to Japanese restraint, African depth to
              Latin warmth, we absorb rhythms, textures, and rituals.{" "}
            </p>
            <div className="w-full max-sm:pb-[12px]">
              <Image
                src="/images/pages/design/valley.jpg"
                width={635}
                height={986}
                alt="Valley"
                className="h-screen w-full max-w-[635px] object-cover max-md:h-[95vh] max-md:max-w-full max-sm:h-[553px]"
              />
            </div>
            <p className="tranking-[3%] hidden max-w-[500px] font-serif text-[14px] leading-[21px] font-normal text-[#1A1A1E] max-md:block max-sm:max-w-full max-sm:pb-[34px] max-sm:text-[12px]">
              These lived inspirations flow gently into our work, shaping a design language that’s
              grounded yet fluid, instinctive yet refined, always deeply human.
            </p>

            <div className="flex h-screen w-full flex-col items-center justify-between gap-[20px] pt-[18px] max-md:h-fit max-md:items-end max-md:justify-start max-md:pt-0">
              <p className="tranking-[3%] max-xmd:max-w-[350px] max-w-[436px] font-serif text-[14px] leading-[21px] font-normal text-[#1A1A1E] max-md:hidden">
                We design by feeling first, gathering impressions from places we’ve lived, loved,
                and wandered through. From Mediterranean ease to Japanese restraint, African depth
                to Latin warmth, we absorb rhythms, textures, and rituals.
                <br />
                <br />
                These lived inspirations flow gently into our work, shaping a design language that’s
                grounded yet fluid, instinctive yet refined, always deeply human.
              </p>
              <Image
                src="/images/pages/design/ocean.png"
                alt="Ocean"
                width={615}
                height={648}
                className="h-[65vh] w-full max-w-[615px] object-cover max-md:max-w-[65vw] max-sm:h-[385px]"
              />
            </div>
          </div>
          <p className="tranking-[3%] font-serif text-[14px] leading-[21px] font-normal text-[#1A1A1E] max-sm:text-[12px]">
            The rhythm of elsewhere, quietly echoed.
          </p>
        </div>
        <p className="text-gradient-vertical max-w-[565px] self-center text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-0.8px] max-sm:max-w-[326px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[0.6px]">
          What stays with us isn’t what we see, but what we feel. The warmth of a stone wall, the
          hush of a forest, they find their way into our work, quietly guiding how we build
          atmosphere.
        </p>
      </section>
    </div>
  );
}
