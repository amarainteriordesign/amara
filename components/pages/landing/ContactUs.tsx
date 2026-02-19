import Image from "next/image";
import Mail from "@/components/icons/mail.svg";
import Linkedin from "@/components/icons/linkedin.svg";

export default function ContactUs() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 top-0 h-1/2 bg-[#F1EBDF]" />
      <div className="absolute inset-0 top-1/2 h-1/2 bg-[#E8E0D6]" />
      <div className="relative z-[2] mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] pb-[132px] max-md:pb-[70px]">
      <div
        id="contact"
        className="flex w-full items-end justify-center gap-[20px] pt-[20px] max-md:flex-col max-md:gap-[30px] max-sm:pt-[16px]"
      >
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
      </div>
    </section>
  );
}
