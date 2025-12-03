import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow-right.svg";
import Link from "next/link";

export default function Studio() {
  return (
    <section className="max-slg:min-h-[947px] flex min-h-[1010px] w-full max-md:h-auto max-md:max-h-full max-md:min-h-full max-md:flex-col">
      <div className="max-xmd:pl-[100px] max-xmd:pr-[40px] w-[50%] bg-[#000] pt-[120px] pr-[75px] pb-[87px] pl-[132px] max-md:w-full max-md:pr-[100px] max-sm:px-[17px] max-sm:pt-[80px] max-sm:pb-[75px]">
        <Image
          src="/images/pages/home/drawing.png"
          alt="Drawing"
          width={483}
          height={245}
          className="h-auto w-full object-cover pb-[55px] max-md:w-full max-sm:pb-[60px]"
        />
        <div className="pb-[66px] max-sm:pb-0">
          <p className="font-display text-normal max-w-[337px] pb-[18px] text-[42px] leading-[49px] tracking-[0.8px] text-[#FFF] max-sm:max-w-full max-sm:pb-[28px] max-sm:text-[22px] max-sm:leading-[23px] max-sm:tracking-[0.4]">
            <span className="max-sm:hidden">Redefining the way we design, Globally</span>

            <span className="hidden max-sm:inline"> Redefining Interiors, Globally</span>
          </p>
          <p className="text-normal max-w-[380px] pb-[54px] font-serif text-[16px] leading-[24px] tracking-[-0.4] text-[#FFF] max-sm:max-w-full max-sm:pb-[35px]">
            From the vibrant rhythm of Miami to the refined elegance of Paris and the bold energy of
            Dubai, Amara redefines interior design through a distinct voice. We are a boutique
            powerhouse blending artistic depth with technical mastery, crafting spaces that feel
            personal, peaceful, and precise. Each project is approached with care, sensitivity, and
            a strong point of view, balancing global influence with local soul to shape environments
            that elevate the everyday.
          </p>
          <Link
            href="/studio"
            className="justify-cter inline-flex h-[43] w-fit items-center gap-[11px] rounded-[30px] bg-white/20 px-[25px] max-sm:h-[34px] max-sm:px-[17]"
          >
            <p className="text-normal font-sans text-[14px] leading-[43px] tracking-[-0.4] text-[#FFF] max-sm:leading-[34px]">
              Discover The Studio
            </p>
            <ArrowIcon width="19" height="15" className="hidden max-md:block" color="#FFF" />
          </Link>
        </div>

        <p className="self-end font-sans text-[14px] leading-[30px] font-normal tracking-[1.8] text-[#FFF] uppercase max-sm:hidden">
          MIAMI - DUBAI - PARIS
        </p>
      </div>
      <div className="w-[50%] max-md:w-full">
        <Image
          src="/images/pages/home/studio.png"
          width={719}
          height={1010}
          alt={"Studio image"}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
