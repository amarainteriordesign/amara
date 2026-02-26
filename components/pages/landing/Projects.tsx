"use client";

import Carousel, { type Slide } from "@/components/common/Carousel";

// Original projects data converted to slides format
const slides: Slide[] = [
  {
    id: "project-1",
    img: "/images/pages/home/Project_Preview_One_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
    alt: "Project 1",
  },
  {
    id: "project-2",
    img: "/images/pages/home/Project_Preview_Two_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
    alt: "Project 2",
  },
  {
    id: "project-3",
    img: "/images/pages/home/Project_Preview_Three_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
    alt: "Project 3",
  },
];

export default function Projects() {
  return (
    <section className="project-landing-ref w-full max-w-full overflow-hidden pb-[127px] max-sm:pb-[65px]">
      <div className="flex flex-col items-center justify-center px-[20px] pb-[55px] max-sm:pb-[54px]">
        <h3 className="text-bg-img bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[9px] text-center text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:pb-[16px] max-sm:text-[24px] max-sm:leading-[28px] max-sm:tracking-[-0.6]" style={{ fontFamily: 'var(--font-lora)' }}>
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
