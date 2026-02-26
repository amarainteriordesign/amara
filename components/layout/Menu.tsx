"use client";
import Link from "next/link";
import ArrowIcon from "@/components/icons/arrow-right.svg";
import { formatTimeForOffset } from "@/helpers/time";
import React, { useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { usePathname, useRouter } from "next/navigation";

export default function Menu({ now }: { now: Date }) {
  const screenSize = useWindowSize();
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  function navigateToContactUs() {
    router.push("/about-us#contact");
  }

  function onMenuClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const topMenuPosition = containerRef.current?.getBoundingClientRect().top || 0;
    if (event.clientY - topMenuPosition >= 324 && event.clientY - topMenuPosition <= 406) {
      if (event.clientX >= 25 && event.clientX <= 143) {
        if (pathname !== "/") {
          router.push("/");
        }
      }
    }
  }

  return (
    <div
      ref={containerRef}
      onClick={onMenuClick}
      className="relative h-[574px] w-full px-[25px] pt-[50px] pb-[32px]"
    >
      <div className="w-full border-t-[1px] border-[#E8DFD2] pb-[99px]">
        {[
          { name: "Projects", url: "/projects" },
          { name: "Design", url: "/design" },
          { name: "Procurement", url: "/procurement" },
          { name: "About Us", url: "/about-us" },
          { name: "News", url: "/blog" },
        ].map((page, i) => (
          <Link
            key={i}
            href={page.url}
            className="flex w-full items-center justify-between border-b-[1px] border-[#E8DFD2] py-[7px] pr-[18px]"
          >
            <span className="font-regular font-sans text-[19px] leading-[36px] tracking-[-0.5px]">
              {page.name}
            </span>
            <ArrowIcon width={20} height={15} color="#727272" />
          </Link>
        ))}
      </div>

      <button
        onClick={navigateToContactUs}
        className="absolute top-[366px] right-[25px] flex h-[41px] w-[128px] items-center justify-center rounded-[30px] bg-transparent font-sans text-[14px] leading-[20px] text-[#F6EFE5]"
      >
        Contact Us
      </button>

      <div className="mx-auto flex w-full max-w-[340px] justify-between gap-[20px] pt-[130px]">
        {[
          {
            title: "Dubai",
            offset: 4,
          },
          {
            title: "Miami",
            offset: -5,
          },
          {
            title: "Paris",
            offset: 1,
          },
        ].map((item) => (
          <div className="flex items-baseline gap-[8px]" key={item.title}>
            <p className="font-sans text-[14px] leading-[20px] font-normal tracking-[-0.7px] text-[#737373]">
              {now && formatTimeForOffset(now, item.offset)}
            </p>
            <p className="font-sans text-[14px] leading-[20px] font-medium tracking-[-0.6px] text-[#262626]">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <svg
        className="absolute top-0 left-0 z-[-1] h-full w-full"
        width={screenSize?.width || 600}
        height="524"
        viewBox={`0 0 ${screenSize?.width || 600} 524`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="menu-mask-mobile" maskUnits="userSpaceOnUse">
            <rect width={screenSize?.width || 600} height="524" fill="white" />
            <g transform="translate(25,324) scale(0.38)">
              <path
                d="M99 115.553H153.297L197.032 115V157.592H208V217H163.046V158.367H156.005H148.964L148.422 217H99V115.553Z"
                fill="black"
              />
              <path
                d="M0 0H43.836H88V89.9237V217H51.7068V144.351H43.836H39.9006V217H0V0Z"
                fill="black"
              />
              <path
                d="M219 0H262.836H307V42.2683V102H270.707V67.8517H262.836H258.901V102H219V0Z"
                fill="black"
              />
              <path
                d="M219 115H262.836H307V157.268V217H270.707V182.852H262.836H258.901V217H219V115Z"
                fill="black"
              />
              <path
                d="M109.833 0H197.614L208 102H175.278L177.958 42.8889H164.78L168.577 102H138.87L141.662 43H129.377L131.499 102H99L107.711 21.5556L109.833 0Z"
                fill="black"
              />
            </g>

            <g transform={`translate(${screenSize?.width - 128 - 25}, 366)`}>
              <rect width="128" height="41" rx="20" fill="black" />
            </g>
          </mask>
        </defs>

        <rect
          width={screenSize?.width || 600}
          height="524"
          fill="#F1EBDF"
          mask="url(#menu-mask-mobile)"
        />
      </svg>
    </div>
  );
}
