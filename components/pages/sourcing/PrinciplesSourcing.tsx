"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

export default function PrinciplesSourcing() {
  const screenSize = useWindowSize();

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>(".sourcing-principle-text-anim-step");
      const stepsTexts = gsap.utils.toArray<HTMLElement>(".sourcing-principle-text-anim-step-text");

      const isInline = screenSize.width < 960;

      if (isInline) {
        const context = gsap.context(() => {
          ScrollTrigger.create({
            trigger: ".sourcing-principle-container-anim",
            start: "top bottom+=200px",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(".sourcing-principle-image-box-anim", {
                yPercent: self.progress * -20,
                ease: "none",
                duration: 0.05,
              });
              gsap.to(".sourcing-principle-image-box-anim-bg", {
                yPercent: self.progress * -20,
                ease: "none",
                duration: 0.05,
              });
            },
          });
        });

        return () => context.revert();
      }

      const context = gsap.context(() => {
        steps.forEach((step, index) => {
          ScrollTrigger.create({
            trigger: ".sourcing-principle-container-anim",
            start: `top top-=${index * 180}px`,
            end: `+=180px`,
            onEnter: () => {
              gsap.fromTo(
                step,
                { color: "#9B9792" },
                {
                  color: "#111",
                  duration: 0.6,
                },
              );

              gsap.fromTo(
                stepsTexts[index],
                { color: "#1A1A1E66" },
                {
                  color: "#111",
                  duration: 0.6,
                },
              );
            },
            onEnterBack: () => {
              gsap.fromTo(
                step,
                { color: "#9B9792" },
                {
                  color: "#111",
                  duration: 0.6,
                },
              );

              gsap.fromTo(
                stepsTexts[index],
                { color: "#1A1A1E66" },
                {
                  color: "#111",
                  duration: 0.6,
                },
              );
            },
            onLeave: () => {
              gsap.fromTo(
                step,
                { color: "#111" },
                {
                  color: "#9B9792",
                  duration: 0.6,
                },
              );

              gsap.fromTo(
                stepsTexts[index],
                { color: "#111" },
                {
                  color: "#1A1A1E66",
                  duration: 0.6,
                },
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(
                step,
                { color: "#111" },
                {
                  color: "#9B9792",
                  duration: 0.6,
                },
              );

              gsap.fromTo(
                stepsTexts[index],
                { color: "#111" },
                {
                  color: "#1A1A1E66",
                  duration: 0.6,
                },
              );
            },
          });
        });

        ScrollTrigger.create({
          trigger: ".sourcing-principle-container-anim-main",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(".sourcing-principle-image-box-anim", {
              yPercent: self.progress * -20,
              ease: "none",
              duration: 0.05,
            });
            gsap.to(".sourcing-principle-image-box-anim-bg", {
              yPercent: self.progress * -20,
              ease: "none",
              duration: 0.05,
            });
          },
        });
      });

      return () => context.revert();
    },
    {
      dependencies: [screenSize],
    },
  );

  return (
    <section className="bg-background sourcing-principle-container-anim-main relative h-[calc(100vh+1100px)] min-h-[800px] w-full max-md:h-[calc(180vh)] max-md:h-fit max-md:min-h-fit">
      <div className="max-xmd:py-[60px] mx-auto max-w-[1440px] px-[24px] py-[108px] max-md:py-[18px] max-md:py-[48px]">
        <h3 className="max-xmd:text-[70px] max-xmd:leading-[70px] font-diranista text-center text-[100px] leading-[100px] font-normal text-[#62513A] max-md:text-[48px] max-md:leading-[48px] max-sm:text-[32px] max-sm:leading-[32px]">
          WHY WORK WITH US?
        </h3>
      </div>

      <div className="hidden max-w-[1440px] px-[24px] max-md:flex">
        <p className="mx-auto mt-[65px] mb-[147px] max-w-[500px] text-center text-[14px] leading-[21px] text-[#1A1A1E66] max-sm:max-w-[302px] max-sm:text-[11px]">
          Save up to 30% compared to traditional sourcing. We work directly with our UAE partner factory — no middlemen, no markups, just quality at better prices.
        </p>
      </div>

      <div className="absolute top-[40%] left-[112px] mr-[calc(45vw+80px)] max-w-[600px] max-md:hidden">
        <div className="flex w-full flex-col items-start gap-[62px]">
          <div className="relative pl-[100px]">
            <p className="sourcing-principle-text-anim-step absolute top-0 left-0 font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#9B9792]">
              Cost Efficiency
            </p>

            <p className="sourcing-principle-text-anim-step-text w-full font-sans text-[16px] leading-[21px] text-[#1A1A1E66]">
              Save up to 30% compared to traditional sourcing. We work directly with our UAE partner factory — no middlemen, no markups, just quality at better prices.
            </p>
          </div>

          <div className="relative pl-[100px]">
            <p className="sourcing-principle-text-anim-step absolute top-0 left-0 font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#9B9792]">
              Top-Tier Quality
            </p>

            <p className="sourcing-principle-text-anim-step-text w-full font-sans text-[16px] leading-[21px] text-[#1A1A1E66]">
              Premium materials, direct from source. We use only top-quality materials from trusted global suppliers — no shortcuts, just standout results.
            </p>
          </div>

          <div className="relative pl-[100px]">
            <p className="sourcing-principle-text-anim-step absolute top-0 left-0 font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#9B9792]">
              Fast Delivery & Execution
            </p>

            <p className="sourcing-principle-text-anim-step-text w-full font-sans text-[16px] leading-[21px] text-[#1A1A1E66]">
              Up to 40% faster than standard timelines. Our streamlined local production delivers high-end materials quickly — keeping your project on schedule.
            </p>
          </div>

          <div className="relative pl-[100px]">
            <p className="sourcing-principle-text-anim-step absolute top-0 left-0 font-display text-[14px] leading-[18px] tracking-[2px] uppercase text-[#9B9792]">
              Global Reach & Logistics
            </p>

            <p className="sourcing-principle-text-anim-step-text w-full font-sans text-[16px] leading-[21px] text-[#1A1A1E66]">
              Skip the local shelf, go worldwide. Wherever your project is, we handle fast, reliable sourcing and export through our global network.
            </p>
          </div>
        </div>
      </div>

      <div className="sourcing-principle-container-anim sticky top-0 ml-auto h-screen w-[45vw] max-md:relative max-md:h-[100vw] max-md:w-full">
        <div className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-hidden">
          <div className="overlow-hidden absolute">
            <Image
              src="/images/pages/sourcing/container-ladies.png"
              width={1000}
              height={2000}
              alt="Amara team at shipping container"
              className="sourcing-principle-image-box-anim-bg h-[120%] w-full scale-[1.4] object-cover blur-[30px]"
            />
          </div>

          <div className="relative z-[1] h-[345px] max-h-full w-[321px] max-w-full overflow-hidden max-sm:h-[165px] max-sm:w-[165px]">
            <div className="absolute h-full w-full overflow-hidden">
              <Image
                src="/images/pages/sourcing/container-ladies.png"
                width={500}
                height={1000}
                alt="Amara team at shipping container"
                className="sourcing-principle-image-box-anim h-[120%] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
