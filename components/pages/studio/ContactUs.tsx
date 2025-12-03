import Image from "next/image";
import Mail from "@/components/icons/mail.svg";
import Linkedin from "@/components/icons/linkedin.svg";

export default function ContactUs() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] pb-[132px] max-md:pb-[70px]">
      <div className="flex w-full justify-center pt-[160px] max-sm:pt-[100px]">
        <Image
          src="/images/pages/studio/drawing.png"
          alt="Drawing"
          width={1020}
          height={432}
          className="w-full max-w-[520px]"
        />
      </div>

      <div
        id="contact"
        className="flex w-full items-end justify-center gap-[20px] pt-[225px] max-md:flex-col max-md:gap-[30px] max-sm:pt-[86px]"
      >
        <div className="max-xmd:mr-0 mr-[55px] flex min-h-[63vh] w-full max-w-[423px] flex-col items-start justify-between max-md:min-h-fit max-md:max-w-full max-md:pb-[30px]">
          <div className="w-full max-md:border-b-[1px] max-md:border-[#DDD7CE] max-md:pb-[40px]">
            <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#262626] max-md:hidden max-md:pb-[7px]">
              CONTACT US
            </p>

            <p className="max-w-[234px] font-serif text-[12px] leading-[18px] font-normal tracking-[0.3px] text-[#262626] max-md:max-w-[450px] max-sm:max-w-[350px]">
              We’d love to hear from you. Reach out to us anytime, we’re here to listen, guide, and
              transform your vision into something truly extraordinary.
            </p>
          </div>
          <div className="max-xmd:items-start flex w-full flex-wrap items-end justify-between gap-[40px] pt-[51px] max-md:justify-normal max-md:gap-[60px] max-sm:w-full max-sm:gap-[20px]">
            <div className="flex flex-col">
              <p className="pb-[7px] font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#262626] max-md:pb-[15px]">
                DUBAI OFFICE
              </p>

              <a
                href="tel:+971585487150"
                className="font-serif text-[12px] leading-[18px] font-normal tracking-[0.3px] text-[#262626]"
              >
                +971 58 548 7150
              </a>

              <a
                href="mailto:info@amarainteriordesign.com"
                className="pointer-events-auto pt-[8px] font-serif text-[12px] leading-[18px] font-normal tracking-[0.3px] text-[#262626]"
              >
                info@amarainteriordesign.com
              </a>
            </div>
            <div className="flex flex-col">
              <p className="pb-[7px] font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#262626] max-md:pb-[15px]">
                MIAMI OFFICE
              </p>

              <a
                href="tel:+13055604373"
                className="font-serif text-[12px] leading-[18px] font-normal tracking-[0.3px] text-[#262626]"
              >
                +1 (305) 560 4373
              </a>

              <a
                href="mailto:info@amarainteriordesign.com"
                className="pointer-events-auto pt-[8px] font-serif text-[12px] leading-[18px] font-normal tracking-[0.3px] text-[#262626]"
              >
                info@amarainteriordesign.com
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex h-[63vh] w-full max-w-[417px] flex-col justify-between gap-[20px] rounded-[8px] max-md:h-[76vh] max-md:max-w-full max-sm:h-[427px]">
          <Image
            src="/images/pages/studio/eloise.png"
            alt="ELOISE CHAUVIERE"
            width={417}
            height={515}
            className="absolute top-0 right-0 h-full w-full overflow-hidden rounded-[8px] object-cover"
          />

          <div className="relative z-[2] flex h-full w-full justify-between py-[15px] pr-[15px] pl-[26px] max-sm:px-[22px] max-sm:pt-[10px] max-sm:pb-[18px]">
            <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#FEFAF6]">
              ELOISE CHAUVIERE
            </p>
            <div className="flex items-center gap-[9px] self-end">
              <a
                href="mailto:info@amarainteriordesign.com"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"
              >
                <Mail width={20} height={14} color="#FFF" />
              </a>

              <a
                href="https://www.linkedin.com/in/eloïse-chauviere-44b93b159"
                target="_blank"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"
              >
                <Linkedin width={16} height={16} color="#FFF" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex h-[76vh] w-full max-w-[417px] flex-col justify-between gap-[20px] rounded-[8px] max-md:max-w-full max-sm:h-[427px]">
          <Image
            src="/images/pages/studio/ines.png"
            alt="ELOISE CHAUVIERE"
            width={417}
            height={515}
            className="absolute top-0 right-0 h-full w-full overflow-hidden rounded-[8px] object-cover"
          />
          <div className="max-sm: relative z-[2] flex h-full w-full justify-between py-[15px] pr-[15px] pl-[26px] max-sm:px-[22px] max-sm:pt-[10px] max-sm:pb-[18px]">
            <p className="self-end font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#FEFAF6] max-md:self-start">
              INES BAKKALI
            </p>

            <div className="flex items-center gap-[9px] self-start max-md:self-end">
              <a
                href="mailto:info@amarainteriordesign.com"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"
              >
                <Mail width={20} height={14} color="#FFF" />
              </a>

              <a
                href="https://www.linkedin.com/in/inesbakkali/"
                target="_blank"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"
              >
                <Linkedin width={16} height={16} color="#FFF" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
