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
        trigger: ".project-home-ref",
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
    <section className="project-home-ref w-full max-w-full overflow-hidden pb-[181px] max-sm:pb-[93px]">
      <div className="flex flex-col items-center justify-center px-[20px] pb-[55px] max-sm:pb-[54px]">
        <h3 className="text-bg-img bg-[url(/images/pages/home/text-background.png)] !bg-top pb-[9px] text-center font-serif text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:pb-[16px] max-sm:text-[24px] max-sm:leading-[28px] max-sm:tracking-[-0.6]">
          Discover our Projects worldwide.{" "}
        </h3>
        <p className="text-center font-sans text-[14px] leading-[18px] font-normal tracking-[0.4px] text-[#262626] uppercase">
          BLENDING DESIGN WITH PEACEFUL LIVING.
        </p>
      </div>
      <Carousel slides={slides} />
      <div className="flex flex-col items-center justify-center px-[20px] pt-[23px] max-sm:pt-[25px]">
        <p className="pb-[7px] font-sans text-[12px] leading-[43px] font-medium tracking-[0.6px] text-[#262626] uppercase max-sm:pb-0 max-sm:text-[10px] max-sm:leading-[30px] max-sm:tracking-[-0.5]">
          MIAMI, FLORIDA, UNITED STATES
        </p>
        <h4 className="font-calvino pb-[27px] text-[42px] leading-[43px] font-normal tracking-[0.8px] text-[#262626] uppercase max-sm:pb-[15px] max-sm:text-[22px] max-sm:leading-[32px] max-sm:tracking-[-0.4]">
          THE VILLAGE
        </h4>
        <Link
          href="/projects"
          className="h-[39px] self-center rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
        >
          DISCOVER PROJECT
        </Link>
      </div>
    </section>
  );
}
