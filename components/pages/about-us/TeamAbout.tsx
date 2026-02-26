import Image from "next/image";
import Linkedin from "@/components/icons/linkedin.svg";

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFF">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function PhotoOverlay({ name, title, position, links }: { name: string; title: string; position: 'top' | 'bottom'; links: { whatsapp: string; linkedin: string } }) {
  return (
    <>
      <div className={`absolute ${position === 'top' ? 'top-0 left-0 py-[15px] pl-[26px]' : 'bottom-[15px] left-[26px]'} z-[2]`}>
        <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#FEFAF6]">{name}</p>
        <p className="font-sans text-[11px] leading-[16px] font-normal tracking-[1px] text-[#FEFAF6]">{title}</p>
      </div>
      <div className={`absolute ${position === 'top' ? 'right-[15px] bottom-[15px]' : 'top-[15px] right-[15px]'} z-[2] flex items-center gap-[9px]`}>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"><WhatsAppIcon /></a>
        <a href={links.linkedin} target="_blank" className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border-[1px] border-[#FFF] bg-[#ADADAD4D]"><Linkedin width={16} height={16} color="#FFF" /></a>
      </div>
    </>
  );
}

export default function TeamAbout() {
  return (
    <section className="w-full bg-[#e8dfd2]">
      <div className="mx-auto w-full max-w-[1400px] px-[60px] pt-[100px] pb-[140px] max-md:px-[40px] max-md:pt-[60px] max-md:pb-[60px] max-sm:px-[20px] max-sm:pt-[40px] max-sm:pb-[40px]">

        <div className="max-md:hidden">
          <div className="flex gap-[40px]">
            <div className="w-[48%]">
              <div className="relative h-[750px] w-full overflow-hidden rounded-[8px]">
                <Image src="/images/pages/studio/eloise.webp" alt="ELOISE CHAUVIERE" fill className="rounded-[8px] object-cover" />
                <PhotoOverlay name="ELOISE CHAUVIERE" title="Managing Director" position="top" links={{ whatsapp: "https://api.whatsapp.com/send?phone=13055604373", linkedin: "https://www.linkedin.com/in/eloïse-chauviere-44b93b159" }} />
              </div>
              <div className="mt-[60px]">
                <h3 className="pb-[12px] font-sans text-[14px] leading-[20px] font-bold tracking-[1.8px] text-[#262626] uppercase">Inès Bakkali</h3>
                <p className="font-sans text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#262626]" style={{ textAlign: 'justify' }}>
                  Creative and design-led, Inès leads the creative vision at Amara. As Design Director, she oversees concept development, spatial planning, and material selection, ensuring each project is cohesive, functional, and thoughtfully executed.
                </p>
              </div>
            </div>
            <div className="w-[52%]">
              <div className="pt-[20px]">
                <h3 className="pb-[12px] font-sans text-[14px] leading-[20px] font-bold tracking-[1.8px] text-[#262626] uppercase">Eloise Chauviere</h3>
                <p className="font-sans text-[16px] leading-[28px] font-normal tracking-[-0.2px] text-[#262626]" style={{ textAlign: 'justify' }}>
                  Strategic and detail-driven, Eloise bridges concept and execution. As Managing Director, she leads company operations, client strategy, international logistics and procurement, ensuring every project is delivered efficiently and to the highest standard.
                </p>
              </div>
              <div className="mt-[60px]">
                <div className="relative h-[750px] w-full overflow-hidden rounded-[8px]">
                  <Image src="/images/pages/studio/ines.webp" alt="INES BAKKALI" fill className="rounded-[8px] object-cover" />
                  <PhotoOverlay name="INES BAKKALI" title="Design Director" position="bottom" links={{ whatsapp: "https://api.whatsapp.com/send?phone=13055604373", linkedin: "https://www.linkedin.com/in/inesbakkali/" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden max-md:flex max-md:flex-col max-md:gap-[40px]">
          <div className="relative h-[500px] w-full overflow-hidden rounded-[8px] max-sm:h-[400px]">
            <Image src="/images/pages/studio/eloise.webp" alt="ELOISE CHAUVIERE" fill className="rounded-[8px] object-cover" />
            <PhotoOverlay name="ELOISE CHAUVIERE" title="Managing Director" position="top" links={{ whatsapp: "https://api.whatsapp.com/send?phone=13055604373", linkedin: "https://www.linkedin.com/in/eloïse-chauviere-44b93b159" }} />
          </div>
          <div>
            <h3 className="pb-[12px] font-sans text-[14px] leading-[20px] font-bold tracking-[1.8px] text-[#262626] uppercase">Eloise Chauviere</h3>
            <p className="font-sans text-[14px] leading-[24px] font-normal tracking-[-0.2px] text-[#262626]" style={{ textAlign: 'justify' }}>Strategic and detail-driven, Eloise bridges concept and execution. As Managing Director, she leads company operations, client strategy, international logistics and procurement, ensuring every project is delivered efficiently and to the highest standard.</p>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden rounded-[8px] max-sm:h-[400px]">
            <Image src="/images/pages/studio/ines.webp" alt="INES BAKKALI" fill className="rounded-[8px] object-cover" />
            <PhotoOverlay name="INES BAKKALI" title="Design Director" position="bottom" links={{ whatsapp: "https://api.whatsapp.com/send?phone=13055604373", linkedin: "https://www.linkedin.com/in/inesbakkali/" }} />
          </div>
          <div>
            <h3 className="pb-[12px] font-sans text-[14px] leading-[20px] font-bold tracking-[1.8px] text-[#262626] uppercase">Inès Bakkali</h3>
            <p className="font-sans text-[14px] leading-[24px] font-normal tracking-[-0.2px] text-[#262626]" style={{ textAlign: 'justify' }}>Creative and design-led, Inès leads the creative vision at Amara. As Design Director, she oversees concept development, spatial planning, and material selection, ensuring each project is cohesive, functional, and thoughtfully executed.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
