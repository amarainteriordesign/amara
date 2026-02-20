"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function PrinciplesSourcing() {
  useGSAP(() => {
    const context = gsap.context(() => {
      const allSteps = gsap.utils.toArray<HTMLElement>(".sourcing-principle-step");

      allSteps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top bottom-=40px",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section className="bg-background relative w-full">
      <div className="mx-auto max-w-[1440px] px-[24px] py-[108px] max-md:py-[48px]">
        <h3 className="font-display text-center text-[72px] leading-[72px] font-normal text-[#62513A] max-md:text-[36px] max-md:leading-[36px] max-sm:text-[24px] max-sm:leading-[24px]">
          WHY WORK WITH US?
        </h3>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center gap-[80px] px-[112px] pb-[120px] max-md:flex-col max-md:gap-[40px] max-md:px-[24px] max-md:pb-[60px]">
        <div className="flex flex-1 flex-col gap-[48px] max-md:gap-[32px] max-md:max-w-[500px]">
          <div className="sourcing-principle-step opacity-0">
            <p className="font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#62513A] mb-[10px] max-md:text-[13px] max-md:mb-[8px]">
              Cost Efficiency
            </p>
            <p className="font-sans text-[16px] leading-[21px] text-[#1A1A1E99] max-md:text-[14px] max-md:leading-[21px] max-sm:text-[13px] max-sm:leading-[19px]">
              Save up to 30% compared to traditional sourcing. We work directly with our UAE partner factory — no middlemen, no markups, just quality at better prices.
            </p>
          </div>

          <div className="sourcing-principle-step opacity-0">
            <p className="font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#62513A] mb-[10px] max-md:text-[13px] max-md:mb-[8px]">
              Top-Tier Quality
            </p>
            <p className="font-sans text-[16px] leading-[21px] text-[#1A1A1E99] max-md:text-[14px] max-md:leading-[21px] max-sm:text-[13px] max-sm:leading-[19px]">
              Premium materials, direct from source. We use only top-quality materials from trusted global suppliers — no shortcuts, just standout results.
            </p>
          </div>

          <div className="sourcing-principle-step opacity-0">
            <p className="font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#62513A] mb-[10px] max-md:text-[13px] max-md:mb-[8px]">
              Fast Delivery & Execution
            </p>
            <p className="font-sans text-[16px] leading-[21px] text-[#1A1A1E99] max-md:text-[14px] max-md:leading-[21px] max-sm:text-[13px] max-sm:leading-[19px]">
              Up to 40% faster than standard timelines. Our streamlined local production delivers high-end materials quickly — keeping your project on schedule.
            </p>
          </div>

          <div className="sourcing-principle-step opacity-0">
            <p className="font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#62513A] mb-[10px] max-md:text-[13px] max-md:mb-[8px]">
              Global Reach & Logistics
            </p>
            <p className="font-sans text-[16px] leading-[21px] text-[#1A1A1E99] max-md:text-[14px] max-md:leading-[21px] max-sm:text-[13px] max-sm:leading-[19px]">
              Skip the local shelf, go worldwide. Wherever your project is, we handle fast, reliable sourcing and export through our global network.
            </p>
          </div>
        </div>

        <div className="relative flex w-[45%] items-center justify-center max-md:w-full max-md:max-w-[300px]">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/pages/philosophy/principles-bg.png"
              width={1000}
              height={2000}
              alt="Principles"
              className="h-full w-full scale-[1.4] object-cover blur-[30px]"
            />
          </div>

          <div className="relative z-[1] h-[345px] w-[321px] max-w-full overflow-hidden my-[40px] max-sm:h-[200px] max-sm:w-[186px]">
            <div className="absolute h-full w-full overflow-hidden">
              <Image
                src="/images/pages/philosophy/principles.jpg"
                width={500}
                height={1000}
                alt="Principles"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
