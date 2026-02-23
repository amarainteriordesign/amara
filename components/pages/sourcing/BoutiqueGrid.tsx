export default function BoutiqueGrid() {
  return (
    <section className="w-full bg-[#e8dfd2]">
      <div className="mx-auto max-w-[1200px] px-[60px] pt-[80px] pb-[20px] text-center max-md:px-[40px] max-md:pt-[60px] max-sm:px-[17px] max-sm:pt-[40px]">
        <h3 className="font-display text-center text-[72px] leading-[72px] font-normal text-[#62513A] max-md:text-[48px] max-md:leading-[48px] max-sm:text-[32px] max-sm:leading-[32px]">
          WHY WORK WITH US?
        </h3>
      </div>

      <div className="bg-[#e8dfd2] pb-[40px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap px-[60px] max-md:flex-col max-md:px-[40px] max-sm:px-[17px]">
          <div className="flex w-[calc(50%-40px)] flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-md:w-full max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#92958D' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[28px] leading-[36px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[20px] max-sm:leading-[26px] max-sm:tracking-[0.4px]">
                COST EFFICIENCY
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Save up to 30% compared to traditional sourcing. We work directly with our UAE partner factory — no middlemen, no markups, just quality at better prices.
              </p>
            </div>
          </div>

          <div className="w-[80px] max-md:h-[20px] max-md:w-full" />

          <div className="flex w-[calc(50%-40px)] flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-md:w-full max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#92958D' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[28px] leading-[36px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[20px] max-sm:leading-[26px] max-sm:tracking-[0.4px]">
                TOP-TIER QUALITY
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Premium materials, direct from source. We use only top-quality materials from trusted global suppliers — no shortcuts, just standout results.
              </p>
            </div>
          </div>

          <div className="h-[20px] w-full" />

          <div className="flex w-[calc(50%-40px)] flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-md:w-full max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#92958D' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[28px] leading-[36px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[20px] max-sm:leading-[26px] max-sm:tracking-[0.4px]">
                FAST DELIVERY & EXECUTION
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Up to 40% faster than standard timelines. Our streamlined local production delivers high-end materials quickly — keeping your project on schedule.
              </p>
            </div>
          </div>

          <div className="w-[80px] max-md:h-[20px] max-md:w-full" />

          <div className="flex w-[calc(50%-40px)] flex-col justify-between rounded-[4px] px-[50px] pt-[50px] pb-[45px] max-md:w-full max-sm:px-[28px] max-sm:pt-[36px] max-sm:pb-[32px]" style={{ backgroundColor: '#92958D' }}>
            <div>
              <h2 className="font-display text-normal pb-[28px] text-[28px] leading-[36px] tracking-[0.8px] text-[#FFF] max-sm:pb-[20px] max-sm:text-[20px] max-sm:leading-[26px] max-sm:tracking-[0.4px]">
                GLOBAL REACH & LOGISTICS
              </h2>
              <p className="text-normal font-sans text-[15px] leading-[24px] tracking-[-0.3px] text-[#FFF] max-sm:text-[14px] max-sm:leading-[22px]" style={{ textAlign: 'justify' }}>
                Skip the local shelf, go worldwide. Wherever your project is, we handle fast, reliable sourcing and export through our global network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
