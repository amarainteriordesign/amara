import Image from "next/image";

export default function Studio() {
  return (
    <>
      <section className="relative bg-[#e8dfd2] pb-[180px] max-md:pb-[140px] max-sm:pb-[100px]">
        <div className="mx-auto flex max-w-[1200px] items-start gap-[60px] px-[60px] pt-[100px] max-md:flex-col max-md:gap-[40px] max-md:px-[40px] max-md:pt-[80px] max-sm:gap-[30px] max-sm:px-[17px] max-sm:pt-[60px]">
          <div className="w-[50%] shrink-0 max-md:w-full">
            <div className="bg-[#000] p-[30px] max-sm:p-[20px]">
              <Image
                src="/images/pages/home/drawing.png"
                alt="Architectural drawing"
                width={483}
                height={245}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="w-[50%] pt-[20px] max-md:w-full max-md:pt-0">
            <p className="font-display text-normal max-w-[420px] pb-[24px] text-[38px] leading-[46px] tracking-[0.8px] text-[#2a2a2a] max-md:max-w-full max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]">
              Redefining the way we design, Globally
            </p>
            <p className="text-normal max-w-[420px] font-serif text-[15px] leading-[24px] tracking-[-0.3px] text-[#4a4a4a] max-md:max-w-full max-sm:text-[14px] max-sm:leading-[22px]">
              From the vibrant rhythm of Miami to the refined elegance of Paris and the bold energy of
              Dubai, Amara redefines interior design through a distinct voice. We are a boutique
              powerhouse blending artistic depth with technical mastery, crafting spaces that feel
              personal, peaceful, and precise. Each project is approached with care, sensitivity, and
              a strong point of view, balancing global influence with local soul to shape environments
              that elevate the everyday.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-10 w-[42%] max-w-[500px] -translate-x-1/2 translate-y-1/2 max-md:w-[50%] max-sm:w-[60%]">
          <Image
            src="/images/pages/home/studio.png"
            width={1000}
            height={600}
            alt="Amara founders"
            className="h-auto w-full rounded-[4px] object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[#e8dfd2] pt-[180px] pb-[100px] max-md:pt-[140px] max-sm:pt-[100px] max-sm:pb-[70px]">
        <p className="text-center font-display text-[32px] leading-[40px] tracking-[3px] text-[#2a2a2a] uppercase max-sm:text-[18px] max-sm:leading-[26px] max-sm:tracking-[2px]">
          Where Vision Meets Precision.
        </p>
      </section>
    </>
  );
}
