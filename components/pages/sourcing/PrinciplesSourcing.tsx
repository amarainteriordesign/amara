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
          const mobileSteps = gsap.utils.toArray<HTMLElement>(".sourcing-mobile-principle-step");

          mobileSteps.forEach((step) => {
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
            trigger: ".sourcing-principle-container-anim-main",
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
          OUR FOUNDING PRINCIPLES.
        </h3>
      </div>

      <div className="hidden max-w-[1440px] px-[24px] max-md:block">
        <div className="mx-auto mt-[40px] mb-[40px] flex max-w-[500px] flex-col gap-[32px] max-sm:max-w-full max-sm:px-[16px]">
          <div className="sourcing-mobile-principle-step opacity-0">
            <p className="font-sans text-[13px] leading-[18px] font-medium tracking-[2px] uppercase text-[#62513A] mb-[8px]">Cost Efficiency</p>
            <p className="font-serif text-[14px] leading-[21px] text-[#1A1A1E99] max-sm:text-[13px] max-sm:leading-[19px]">
              Save up to 30% compared to traditional sourcing. We work directly with our UAE partner factory — no middlemen, no markups, just quality at better prices.
            </p>
          </div>
          <div className="sourcing-mobile-principle-step opacity-0">
            <p className="font-sans text-[13px] leading-[18px] font-medium tracking-[2px] uppercase text-[#62513A] mb-[8px]">Top-Tier Quality</p>
            <p className="font-serif text-[14px] leading-[21px] text-[#1A1A1E99] max-sm:text-[13px] max-sm:leading-[19px]">
              Premium materials, direct from source. We use only top-quality materials from trusted global suppliers — no shortcuts, just standout results.
            </p>
          </div>
          <div className="sourcing-mobile-principle-step opacity-0">
            <p className="font-sans text-[13px] leading-[18px] font-medium tracking-[2px] uppercase text-[#62513A] mb-[8px]">Fast Delivery & Execution</p>
            <p className="font-serif text-[14px] leading-[21px] text-[#1A1A1E99] max-sm:text-[13px] max-sm:leading-[19px]">
              Up to 40% faster than standard timelines. Our streamlined local production delivers high-end materials quickly — keeping your project on schedule.
            </p>
          </div>
          <div className="sourcing-mobile-principle-step opacity-0">
            <p className="font-sans text-[13px] leading-[18px] font-medium tracking-[2px] uppercase text-[#62513A] mb-[8px]">Global Reach & Logistics</p>
            <p className="font-serif text-[14px] leading-[21px] text-[#1A1A1E99] max-sm:text-[13px] max-sm:leading-[19px]">
              Skip the local shelf, go worldwide. Wherever your project is, we handle fast, reliable sourcing and export through our global network.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[40%] left-[112px] mr-[calc(45vw+80px)] max-w-[600px] max-md:hidden">
        <div className="flex w-full flex-col items-start gap-[62px]">
          <div>
            <p className="sourcing-principle-text-anim-step font-sans text-[14px] leading-[18px] font-medium tracking-[2px] uppercase text-[#9B9792] mb-[10px]">
              Cost Efficiency
            </p>
            <p className="sourcing-principle-text-anim-step-text w-full font-serif text-[16px] leading-[21px] text-[#1A1A1E66]">
              Save up to 30% compared to traditional sourcing. We work directly with our UAE partner factory — no middlemen, no markups, just quality at better prices.
            </p>
          </div>

          <div>
            <p className="sourcing-principle-text-anim-step font-sans text-[14px] leading-[18px] font-medium tracking-[2px] uppercase text-[#9B9792] mb-[10px]">
              Top-Tier Quality
            </p>
            <p className="sourcing-principle-text-anim-step-text w-full font-serif text-[16px] leading-[21px] text-[#1A1A1E66]">
              Premium materials, direct from source. We use only top-quality materials from trusted global suppliers — no shortcuts, just standout results.
            </p>
          </div>

          <div>
            <p className="sourcing-principle-text-anim-step font-sans text-[14px] leading-[18px] font-medium tracking-[2px] uppercase text-[#9B9792] mb-[10px]">
              Fast Delivery & Execution
            </p>
            <p className="sourcing-principle-text-anim-step-text w-full font-serif text-[16px] leading-[21px] text-[#1A1A1E66]">
              Up to 40% faster than standard timelines. Our streamlined local production delivers high-end materials quickly — keeping your project on schedule.
            </p>
          </div>

          <div>
            <p className="sourcing-principle-text-anim-step font-sans text-[14px] leading-[18px] font-medium tracking-[2px] uppercase text-[#9B9792] mb-[10px]">
              Global Reach & Logistics
            </p>
            <p className="sourcing-principle-text-anim-step-text w-full font-serif text-[16px] leading-[21px] text-[#1A1A1E66]">
              Skip the local shelf, go worldwide. Wherever your project is, we handle fast, reliable sourcing and export through our global network.
            </p>
          </div>
        </div>
      </div>

      <div className="sourcing-principle-container-anim sticky top-0 ml-auto h-screen w-[45vw] max-md:relative max-md:h-[100vw] max-md:w-full">
        <div className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-hidden">
          <div className="overlow-hidden absolute">
            <Image
              src="/images/pages/philosophy/principles-bg.png"
              width={1000}
              height={2000}
              alt="Principles"
              className="sourcing-principle-image-box-anim-bg h-[120%] w-full scale-[1.4] object-cover blur-[30px]"
            />
          </div>

          <div className="relative z-[1] h-[345px] max-h-full w-[321px] max-w-full overflow-hidden max-sm:h-[165px] max-sm:w-[165px]">
            <div className="absolute h-full w-full overflow-hidden">
              <Image
                src="/images/pages/philosophy/principles.jpg"
                width={500}
                height={1000}
                alt="Principles"
                className="sourcing-principle-image-box-anim h-[120%] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
