"use client";

import Link from "next/link";
import Carousel, { type Slide } from "@/components/common/Carousel";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Original projects data converted to slides format
const slides: Slide[] = [
  {
    id: "project-1",
    img: "/images/pages/home/project1.png",
    alt: "Project 1",
  },
  {
    id: "project-2",
    img: "/images/pages/home/project2.png",
    alt: "Project 2",
  },
  {
    id: "project-3",
    img: "/images/pages/home/project3.png",
    alt: "Project 3",
  },
];

export default function Projects() {
  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) contextHeaderRef.current?.revert();

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".project-landing-ref",
        start: "top-=80px top",
        end: "bottom-=80px top",
        onEnter: () => {
          headerLogo?.classList.add("dark");
        },
        onEnterBack: () => {
          headerLogo?.classList.add("dark");
        },
        onLeaveBack: () => {
          headerLogo?.classList.remove("dark");
        },
        onLeave: () => {
          headerLogo?.classList.remove("dark");
        },
      });
    });
  });

  return (
    <section className="project-landing-ref w-full max-w-full overflow-hidden pb-[127px] max-sm:pb-[65px]">
      <div className="flex flex-col items-center justify-center px-[20px] pb-[55px] max-sm:pb-[54px]">
        <h3 className="text-bg-img bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] text-center text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:pb-[16px] max-sm:text-[24px] max-sm:leading-[28px] max-sm:tracking-[-0.6]" style={{ fontFamily: 'var(--font-lora)' }}>
          Discover our Projects worldwide{" "}
        </h3>
        <p className="text-center font-sans text-[14px] leading-[18px] font-normal tracking-[0.4px] text-[#262626] uppercase">
          BLENDING DESIGN WITH PEACEFUL LIVING.
        </p>
      </div>
      <Carousel slides={slides} />
    </section>
  );
}
