import Image from "next/image";
import Linkedin from "@/components/icons/linkedin.svg";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFF">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function ContactUs() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 top-0 h-1/2 bg-[#F1EBDF]" />
      <div className="absolute inset-0 top-1/2 h-1/2 bg-[#E8E0D6]" />
      <div className="relative z-[2] mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] pb-[40px] max-md:pb-[30px]">
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
            <div>
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#FEFAF6]">
                ELOISE CHAUVIERE
              </p>
              <p className="font-sans text-[11px] leading-[16px] font-normal tracking-[1px] text-[#FEFAF6CC]">
                Managing Director
              </p>
            </div>
            <div className="flex items-center gap-[9px] self-end">
              <a
                href="https://api.whatsapp.com/send?phone=13055604373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"
              >
                <WhatsAppIcon />
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
            <div className="self-end max-md:self-start">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#FEFAF6]">
                INES BAKKALI
              </p>
              <p className="font-sans text-[11px] leading-[16px] font-normal tracking-[1px] text-[#FEFAF6CC]">
                Design Director
              </p>
            </div>

            <div className="flex items-center gap-[9px] self-start max-md:self-end">
              <a
                href="https://api.whatsapp.com/send?phone=13055604373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"
              >
                <WhatsAppIcon />
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
