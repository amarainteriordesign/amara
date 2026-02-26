import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-[#e8dfd2] py-[80px] max-md:py-[60px] max-sm:py-[40px]">
      <div className="mx-auto flex max-w-[1200px] items-center gap-[60px] px-[60px] max-md:flex-col max-md:gap-[40px] max-md:px-[40px] max-sm:gap-[30px] max-sm:px-[17px]">
        <div className="w-[50%] shrink-0 max-md:w-full">
          <Image
            src="/images/pages/home/Studio_Interior_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
            width={600}
            height={750}
            alt="Amara founders"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="w-[50%] max-md:w-full">
          <div className="mb-[24px]">
            <Image
              src="/images/pages/home/Architecture_Sketch_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
              width={4063}
              height={1840}
              alt="Architecture sketch"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
          <h2 className="text-normal pb-[24px] text-[38px] leading-[46px] tracking-[0.8px] text-[#2a2a2a] max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]" style={{ fontFamily: 'var(--font-lora)' }}>
            Designing Between Miami, Dubai & Beyond
          </h2>
          <p className="text-normal text-[15px] leading-[24px] tracking-[-0.3px] text-[#4a4a4a] max-sm:text-[14px] max-sm:leading-[22px]" style={{ fontFamily: 'var(--font-lora)', textAlign: 'justify' }}>
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
