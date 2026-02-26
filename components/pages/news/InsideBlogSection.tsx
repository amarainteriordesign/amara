"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Arrow from "@/components/icons/arrow-right.svg";
import { SerializedBlog } from "@/types/blog";

type InsideBlogSectionProps = {
  blog: SerializedBlog;
};

export default function InsideBlogSection({ blog }: InsideBlogSectionProps) {
  useGSAP(() => {
    gsap.to(".animate-hero-reveal", {
      scale: 1,
      ease: "power3.inOut",
      duration: 2,
      delay: 1,
    });
  });

  return (
    <section className="w-full max-w-full overflow-hidden">
      <Image
        className="animate-hero-reveal min-h-screen w-full object-cover"
        src={blog.heroImageUrl}
        width={1920}
        height={1080}
        alt="Interior design article feature image Amara"
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-[71px] pt-[66px] pb-[305px] max-md:px-[20px] max-md:pb-[158px] max-sm:px-[12px]">
        <Link
          href="/news"
          className="flex w-full items-center gap-[11px] pb-[123px] font-sans text-[14px] leading-[18px] font-normal tracking-[0.3px] text-[#262626] max-md:pb-[66px]"
        >
          <Arrow width={12} height={10} color="#262626" className="rotate-180" />
          <span>BACK TO NEWS</span>
        </Link>

        <h1
          className="font-display max-w-[895px] self-center pb-[180px] text-center text-[42px] leading-[43px] tracking-[0.8px] text-[#262626] max-md:pb-[80px] max-sm:text-[24px] max-sm:leading-[25px] max-sm:tracking-[0.5px]"
          dangerouslySetInnerHTML={{ __html: blog.title }}
        ></h1>

        <p className="max-xmd:ml-0 ml-[100px] w-full max-w-[595px] pb-[149px] font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-md:max-w-[475px] max-md:pb-[97px] max-sm:max-w-full max-sm:leading-[19px]">
          <span
            className="tracking-[2.5px] uppercase"
            dangerouslySetInnerHTML={{ __html: blog.description1Title }}
          ></span>
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{ __html: blog.description1.replace(/\n/g, "<br />") }}
          ></span>
        </p>

        <p className="max-xmd:mr-0 mr-[100px] w-full max-w-[595px] self-end pb-[212px] font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-md:max-w-[475px] max-md:pb-[145px] max-sm:max-w-full max-sm:self-start max-sm:leading-[19px]">
          <span
            className="tracking-[2.5px] uppercase"
            dangerouslySetInnerHTML={{ __html: blog.description2Title }}
          ></span>
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{ __html: blog.description2.replace(/\n/g, "<br />") }}
          ></span>
        </p>

        <Image
          src={blog.image1Url}
          alt="Interior design inspiration Amara news Miami Dubai"
          width={1200}
          height={1800}
          className="mb-[212px] h-[909px] w-full max-w-[895px] self-center object-cover max-md:mb-[145px] max-md:h-[636px] max-md:max-w-[626px] max-sm:h-[372px] max-sm:max-w-full"
        />

        <p className="max-xmd:ml-0 ml-[100px] w-full max-w-[595px] pb-[149px] font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-md:max-w-[475px] max-md:pb-[97px] max-sm:max-w-full max-sm:leading-[19px]">
          <span
            className="tracking-[2.5px] uppercase"
            dangerouslySetInnerHTML={{ __html: blog.secondDescription1Title }}
          ></span>
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{ __html: blog.secondDescription1.replace(/\n/g, "<br />") }}
          ></span>
        </p>

        <p className="max-xmd:mr-0 mr-[100px] w-full max-w-[595px] self-end font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-md:max-w-[475px] max-sm:max-w-full max-sm:self-start max-sm:leading-[19px]">
          <span
            className="tracking-[2.5px] uppercase"
            dangerouslySetInnerHTML={{ __html: blog.secondDescription2Title }}
          ></span>
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{ __html: blog.secondDescription2.replace(/\n/g, "<br />") }}
          ></span>
        </p>
      </div>
    </section>
  );
}
