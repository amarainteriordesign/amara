"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Quote({ leaveEarly = false }: { leaveEarly?: boolean }) {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".quote-container-anim",
        start: "top bottom-=100px",
        end: leaveEarly ? "top top+=300px" : "top top",
        onUpdate: (self) => {
          gsap.to(".quote-bg-anim", {
            opacity: self.progress,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".quote-container-anim",
        start: "bottom bottom",
        end: leaveEarly ? "bottom top+=300px" : "bottom top",
        onUpdate: (self) => {
          gsap.to(".quote-bg-anim", {
            opacity: 1 - self.progress,
          });
        },
      });

      const words = gsap.utils.toArray<HTMLElement>(".quote-text-anim-text .word");
      gsap.fromTo(
        words,
        { color: "#62513A" },
        {
          color: "#A2ADB4",
          stagger: 0.15,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: ".quote-text-anim",
            start: "top top+=150px",
            end: leaveEarly ? "+=1000px" : "+=700px",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  });

  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) {
      contextHeaderRef.current?.revert();
      return;
    }

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".quote-container-anim",
        start: "top-=80px top",
        end: "bottom-=80px top",
        onEnter: () => {
          headerLogo?.classList.remove("dark");
        },
        onEnterBack: () => {
          headerLogo?.classList.remove("dark");
        },
        onLeaveBack: () => {
          headerLogo?.classList.add("dark");
        },
        onLeave: () => {
          headerLogo?.classList.add("dark");
        },
      });
    });
  });

  const text = "LISTENING TO WHAT THE SPACE ASKS FOR AND ANSWERING WITH MEANING AND CARE";

  return (
    <>
      <div className="quote-bg-anim pointer-events-none fixed inset-0 z-[10] opacity-0">
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            src="/images/pages/design/quote.webp"
            className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            alt="Serene interior atmosphere Amara Interior Design"
            width={2000}
            height={1000}
          />

          <h2 className="font-diranista quote-text-anim-text leadding-[99px] max-xmd:text-[75px] max-xmd:leading-[90px] max-xmd:max-w-[900px] max-sm::tracking-[-1.5px] max-w-[1196px] text-center text-[100px] font-normal tracking-[-5px] text-[#A2ADB4] uppercase max-md:max-w-[560px] max-md:text-[45px] max-md:leading-[50px] max-md:tracking-[-2px] max-sm:max-w-[410px] max-sm:px-[10px] max-sm:text-[32px] max-sm:leading-[42px]">
            {text.split(/(\s+)/).map((part, i) =>
              /\s+/.test(part) ? (
                part
              ) : (
                <span key={i} className="word inline-block">
                  {part}
                </span>
              ),
            )}
          </h2>
        </div>
      </div>

      <section className="quote-container-anim relative z-[11] min-h-[calc(100vh+900px)] w-full justify-center bg-cover max-sm:min-h-[calc(100vh+500px)]">
        <div className="quote-text-anim sticky top-0 flex h-screen w-full flex-col items-center justify-center"></div>
      </section>
    </>
  );
}
