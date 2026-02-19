import Image from "next/image";

export default function Studio() {
  return (
    <section className="bg-[#e8dfd2] py-[80px] max-md:py-[60px] max-sm:py-[40px]">
      <div className="mx-auto flex max-w-[1200px] items-center gap-[60px] px-[60px] max-md:flex-col max-md:gap-[40px] max-md:px-[40px] max-sm:gap-[30px] max-sm:px-[17px]">
        <div className="w-[50%] shrink-0 max-md:w-full">
          <Image
            src="/images/pages/home/studio.webp"
            width={600}
            height={750}
            alt="Amara founders"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="w-[50%] max-md:w-full">
          <div className="mb-[24px]">
            <Image
              src="/images/pages/home/architecture-sketch.webp"
              width={4063}
              height={1840}
              alt="Architecture sketch"
              className="h-auto w-full"
            />
          </div>
          <p className="font-calvino text-normal pb-[24px] text-[38px] leading-[46px] tracking-[0.8px] text-[#2a2a2a] max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]">
            Designing Between Dubai, Miami & Beyond
          </p>
          <p className="text-normal font-calvino text-[15px] leading-[24px] tracking-[-0.3px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]">
            From the vibrant rhythm of Miami to the refined elegance of Paris and the bold energy of
            Dubai, Amara redefines interior design through a distinct voice. We are a boutique
            powerhouse blending artistic depth with technical mastery, crafting spaces that feel
            personal, peaceful, and precise. Each project is approached with care, sensitivity, and
            a strong point of view, balancing global influence with local soul to shape environments
            that elevate the everyday.
          </p>
        </div>
      </div>
    </section>
  );
}
