import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow-right.svg";

interface StudioProps {
  isDesktopSideBySide?: boolean;
}

export default function Studio({ isDesktopSideBySide = false }: StudioProps) {
  return (
    <section className={`w-full bg-[#000] ${isDesktopSideBySide ? "h-full flex items-center" : ""}`}>
      <div className={`mx-auto px-[40px] pt-[100px] pb-[80px] max-sm:px-[17px] max-sm:pt-[80px] max-sm:pb-[60px] ${isDesktopSideBySide ? "md:max-w-full md:px-[40px] md:pt-[40px] md:pb-[40px]" : "max-w-[800px]"}`}>
        <Image
          src="/images/pages/home/drawing.png"
          alt="Drawing"
          width={483}
          height={245}
          className={`mx-auto h-auto w-full object-cover pb-[55px] max-sm:pb-[60px] ${isDesktopSideBySide ? "md:max-w-[300px] md:pb-[30px]" : "max-w-[500px]"}`}
        />
        <div className="text-center">
          <p className={`font-display text-normal mx-auto pb-[18px] tracking-[0.8px] text-[#FFF] max-sm:max-w-full max-sm:pb-[28px] max-sm:text-[22px] max-sm:leading-[23px] max-sm:tracking-[0.4] ${isDesktopSideBySide ? "md:max-w-full md:text-[24px] md:leading-[30px] md:pb-[12px]" : "max-w-[500px] text-[42px] leading-[49px]"}`}>
            <span className="max-sm:hidden">Redefining the way we design, Globally</span>

            <span className="hidden max-sm:inline"> Redefining Interiors, Globally</span>
          </p>
          <p className={`text-normal mx-auto pb-[54px] font-calvino text-[16px] leading-[24px] tracking-[-0.4] text-[#FFF] max-sm:max-w-full max-sm:pb-[35px] ${isDesktopSideBySide ? "md:max-w-full md:text-[13px] md:leading-[20px] md:pb-[24px]" : "max-w-[600px]"}`}>
            From the vibrant rhythm of Miami to the refined elegance of Paris and the bold energy of
            Dubai, Amara redefines interior design through a distinct voice. We are a boutique
            powerhouse blending artistic depth with technical mastery, crafting spaces that feel
            personal, peaceful, and precise. Each project is approached with care, sensitivity, and
            a strong point of view, balancing global influence with local soul to shape environments
            that elevate the everyday.
          </p>
          <a
            href="https://calendar.app.google/mDqB7oH4P1jt3wTd9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[43px] w-fit items-center justify-center gap-[11px] rounded-[30px] bg-white/20 px-[25px] max-sm:h-[34px] max-sm:px-[17px]"
          >
            <p className="text-normal font-sans text-[14px] leading-[43px] tracking-[-0.4] text-[#FFF] max-sm:leading-[34px]">
              Book an appointment
            </p>
            <ArrowIcon width="19" height="15" className="hidden max-md:block" color="#FFF" />
          </a>
        </div>

        <p className={`mt-[50px] text-center font-sans text-[14px] leading-[30px] font-normal tracking-[1.8] text-[#FFF] uppercase max-sm:hidden ${isDesktopSideBySide ? "md:mt-[20px]" : ""}`}>
          MIAMI - DUBAI - PARIS
        </p>
      </div>
    </section>
  );
}
