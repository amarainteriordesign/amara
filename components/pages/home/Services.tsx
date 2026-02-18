import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="bg-[#e8dfd2] pt-[80px] max-md:pt-[60px] max-sm:pt-[40px]">
        <div className="mx-auto max-w-[1200px] px-[60px] pb-[40px] text-center max-md:px-[40px] max-sm:px-[17px] max-sm:pb-[28px]">
          <h2
            className="text-bg-img inline bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] font-serif italic text-[32px] leading-[40px] tracking-[0.2px] max-sm:text-[22px] max-sm:leading-[28px]"
            style={{ WebkitTextFillColor: 'transparent' }}
          >
            Boutique Design, Strategic Sourcing
          </h2>
          <p className="text-center font-sans text-[14px] leading-[18px] font-normal tracking-[0.4px] text-[#262626] uppercase">
            WORLDWIDE
          </p>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#e8dfd2] from-50% to-[#f1ebdf] to-50% pb-[40px]">
        <div className="mx-auto flex max-w-[1200px] gap-[20px] px-[60px] max-md:flex-col max-md:px-[40px] max-sm:px-[17px]">
          <div className="flex w-1/2 flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-md:w-full max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#92958D' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[38px] leading-[46px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]">
                Design
              </h2>
              <p className="text-normal max-w-[400px] font-serif text-[15px] leading-[24px] tracking-[-0.3px] text-[#e2e0da] max-md:max-w-full max-sm:text-[14px] max-sm:leading-[22px]">
                Our approach is deeply rooted in the essence of each place, drawing inspiration from
                its culture and history. The materials we select, the art we curate, and the design
                details we incorporate serve as essential parts of a larger narrative: design plays a
                pivotal role in enhancing overall well-being.
              </p>
            </div>
            <div className="mt-[28px]">
              <Link
                href="/philosophy"
                className="h-[39px] inline-block rounded-[35px] border-[1px] border-[#e2e0da99] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#FFF] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
              >
                FIND OUT MORE
              </Link>
            </div>
          </div>

          <div className="flex w-1/2 flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-md:w-full max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#2F3034' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[38px] leading-[46px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[24px] max-sm:leading-[30px] max-sm:tracking-[0.4px]">
                Sourcing
              </h2>
              <p className="text-normal max-w-[400px] font-serif text-[15px] leading-[24px] tracking-[-0.3px] text-[#d4cfc8] max-md:max-w-full max-sm:text-[14px] max-sm:leading-[22px]">
                We source with intention, seeking out materials, artisans, and objects that bring
                character and authenticity to every space. From rare stones to bespoke furnishings,
                each element is carefully selected to reflect the vision of the project and the
                identity of the client.
              </p>
            </div>
            <div className="mt-[28px]">
              <Link
                href="/philosophy"
                className="h-[39px] inline-block rounded-[35px] border-[1px] border-[#d4cfc899] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] text-[#FFF] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
              >
                FIND OUT MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
