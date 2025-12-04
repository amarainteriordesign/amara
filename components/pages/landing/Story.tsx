import Image from "next/image";

const DUBAI_DESCRIPTION =
  "Dubai fuels our boldest ideas. Its spirit of innovation and openness invites us to push boundaries, shaping a design approach that's fearless, modern, and deeply creative.";

export default function Story() {
  return (
    <section className="max-xmd:px-[40px] items start mx-auto flex w-full max-w-[1440px] flex-col bg-[#F5F1ED] px-[65px] pt-[178px] pb-[181px] max-md:px-[20px] max-sm:pt-[96px] max-sm:pb-[112px]">
      <div className="relative flex h-[2271px] w-full items-start justify-between max-md:justify-normal max-sm:h-[1800px]">
        <div className="flex h-full flex-col justify-between py-[120px] max-sm:py-0">
          <div className="flex max-w-[438px] flex-col gap-[25px] max-sm:max-w-[315px] max-sm:gap-[15px]">
            <Image
              src="/images/pages/studio/story1-new.png"
              width={900}
              height={1000}
              className="h-[530px] w-full object-cover max-sm:h-[450px]"
              alt="Design materials selection"
            />
            <div className="flex w-full flex-col items-start gap-[6px]">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#262626] uppercase max-sm:hidden">
                DESIGN DEVELOPMENT
              </p>
              <p className="font-serif text-[14px] leading-[21px] font-normal tracking-[0.3px] text-[#262626] max-sm:text-[12px] max-sm:tracking-[0.3px]">
                We translate your vision into moodboards, spatial layouts, and initial narratives
                that reflect your lifestyle, brand identity, or project intent with clarity and
                depth.
              </p>
            </div>
          </div>
          <div className="flex max-w-[438px] flex-col gap-[25px] max-md:flex-col-reverse max-sm:max-w-[315px] max-sm:gap-[15px]">
            <div className="flex w-full flex-col items-start gap-[6px]">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:hidden">
                PROCUREMENT & PROJECT MANAGEMENT
              </p>
              <p className="font-serif text-[14px] leading-[21px] font-normal tracking-[2%] text-[#262626] max-sm:text-[12px] max-sm:tracking-[0%]">
                We source, budget, and oversee production and delivery, managing every vendor,
                timeline, and detail to bring your space to life with ease and precision.
              </p>
            </div>
            <Image
              src="/images/pages/studio/story2-landing.png"
              width={900}
              height={1000}
              className="h-[530px] w-full object-cover max-sm:h-[450px]"
              alt="Procurement & Project Management"
            />
          </div>
        </div>
        <hr className="max-xmd:hidden h-full w-[0.5px] bg-[#262626] pt-[155px]"></hr>
        <div className="flex h-full flex-col items-end justify-center max-md:absolute max-md:right-0 max-md:w-full">
          <div className="flex max-w-[438px] flex-col gap-[25px] max-sm:max-w-[315px] max-sm:gap-[15px]">
            <Image
              src="/images/pages/studio/story3-landing.png"
              width={900}
              height={1000}
              className="h-[530px] w-full object-cover max-sm:h-[450px]"
              alt="Design Development"
            />
            <div className="flex w-full flex-col items-start gap-[6px]">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:hidden">
                DESIGN DEVELOPMENT
              </p>
              <p className="font-serif text-[14px] leading-[21px] font-normal tracking-[2%] text-[#262626] max-sm:text-[12px] max-sm:tracking-[0%]">
                From material palettes to detailed drawings, we refine the concept into buildable
                designs, balancing form, function, and a curated selection of finishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
