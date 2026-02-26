import Image from "next/image";

export default function Experiences() {
  return (
    <section className="max-xmd:px-[20px] mx-auto flex w-full max-w-[1440px] flex-col gap-[67px] px-[52px] pt-[64px] max-sm:gap-[50px] max-sm:pt-[20px]">
      <div className="flex w-full flex-col items-end">
        <p className="font-made-mirage-thin text-[82px] leading-[81px] font-thin tracking-[8px] text-[#000000] uppercase max-md:text-[70px] max-md:tracking-[7px] max-sm:text-[38px] max-sm:leading-[40px] max-sm:tracking-[3.8px]">
          Ele<span className="font-snell-roundhand mr-[20px] italic max-sm:mr-[10px]">m</span>ent
          <span className="font-snell-roundhand mr-[15px] ml-[-20px] italic max-sm:mr-[7px] max-sm:ml-[-10px]">
            a
          </span>
          l
        </p>

        <div className="mr-[133px] flex flex-col items-center gap-[32px] max-md:mr-[100px] max-sm:mr-[40px] max-sm:gap-[24px]">
          <p className="font-made-mirage-thin mt-[-10px] text-[82px] leading-[81px] font-thin tracking-[8.2px] text-[#000000] uppercase max-md:text-[70px] max-md:tracking-[7px] max-sm:text-[38px] max-sm:leading-[40px] max-sm:tracking-[3.8px]">
            E<span className="font-snell-roundhand mr-[20px] italic max-sm:mr-[10px]">x</span>
            periences
          </p>
          <p className="max-w-[452px] font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#1A1A1E] max-md:max-w-[400px] max-sm:text-[12px] max-sm:tracking-[0.3px]">
            We work like composers: aligning material, light, and layout into a rhythm that holds
            the feeling of a place. Each project becomes a story told through flow and form.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-[15px] max-md:flex-col max-md:gap-[50px] max-sm:gap-[34px]">
        <div className="flex max-w-[343px] flex-col items-start gap-[17px] self-end max-md:max-w-[580px] max-md:self-start max-sm:w-full max-sm:max-w-[315px] max-sm:gap-[15px]">
          <Image
            src="/images/pages/studio/experience1.png"
            alt="Concept development luxury interior design Amara"
            width="605"
            height="756"
            className="h-[54vh] w-full object-cover max-md:h-[90vh] max-sm:h-[450px]"
          />
          <p className="fomt-sans text-[13px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:text-[12px] max-sm:tracking-[0%]">
            CONCEPT DEVELOPMENT
          </p>
        </div>
        <div className="flex w-full max-w-[605px] flex-col items-start gap-[17px] max-md:max-w-[580px] max-md:self-end max-sm:w-full max-sm:max-w-[315px] max-sm:gap-[15px]">
          <Image
            src="/images/pages/studio/experience2.png"
            alt="Procurement and project management Amara Interior Design"
            width="605"
            height="756"
            className="h-[93vh] w-full object-cover max-md:h-[90vh] max-sm:h-[450px]"
          />
          <p className="fomt-sans text-[13px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:text-[12px] max-sm:tracking-[0%]">
            PROCUREMENT & PROJECT MANAGEMENT
          </p>
        </div>
        <div className="flex w-full max-w-[332px] flex-col items-start gap-[17px] self-start max-md:max-w-[580px] max-md:self-start max-sm:w-full max-sm:max-w-[315px] max-sm:gap-[15px]">
          <Image
            src="/images/pages/studio/experience3.png"
            alt="On-site installation luxury interiors Amara Miami Dubai"
            width="605"
            height="756"
            className="h-[53vh] w-full object-cover max-md:h-[90vh] max-sm:h-[450px]"
          />
          <p className="fomt-sans text-[13px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:text-[12px] max-sm:tracking-[0%]">
            DESIGN DEVELOPMENT
          </p>
        </div>
      </div>
    </section>
  );
}
