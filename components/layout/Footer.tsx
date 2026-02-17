"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatTimeForOffset } from "@/helpers/time";
import Mail from "@/components/icons/mail.svg";
import Linkedin from "@/components/icons/linkedin.svg";

const NAV_LINKS = [
  { name: "PROJECTS", url: "/projects" },
  { name: "STUDIO", url: "/studio" },
  { name: "PHILOSOPHY", url: "/philosophy" },
  { name: "BLOG", url: "/blog" },
];

const CITIES = [
  { title: "Dubai", offset: 4 },
  { title: "Miami", offset: -5 },
  { title: "Paris", offset: 1 },
];

type FooterProps = {
  showDesertImage?: boolean;
  desertImage?: string;
};

export default function Footer({
  showDesertImage = false,
  desertImage = "/images/pages/home/footer.png",
}: FooterProps) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {showDesertImage && (
        <div className="relative z-[2] h-[100vh] w-full">
          <Image
            src={desertImage}
            width={1920}
            height={1080}
            alt="Desert landscape"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <footer className="w-full bg-[#7a8070] px-[42px] pt-[60px] pb-[30px] max-md:px-[20px] max-md:pt-[40px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Main row: AMARA cutout | nav links (centered) | social icons (right) */}
          <div className="grid grid-cols-[240px_1fr] max-sm:grid-cols-[180px_1fr] max-md:flex max-md:flex-col max-md:gap-[40px]">
            {/* AMARA Cutout */}
            <div className="max-md:w-full">
              <div className="relative h-[180px] w-[240px] overflow-hidden max-sm:h-[140px] max-sm:w-[180px]">
                <svg
                  className="absolute top-0 left-0 h-full w-full"
                  width="240"
                  height="180"
                  viewBox="0 0 307 217"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="amara-footer-clip">
                      <path d="M99 115.553H153.297L197.032 115V157.592H208V217H163.046V158.367H156.005H148.964L148.422 217H99V115.553Z" />
                      <path d="M0 0H43.836H88V89.9237V217H51.7068V144.351H43.836H39.9006V217H0V0Z" />
                      <path d="M219 0H262.836H307V42.2683V102H270.707V67.8517H262.836H258.901V102H219V0Z" />
                      <path d="M219 115H262.836H307V157.268V217H270.707V182.852H262.836H258.901V217H219V115Z" />
                      <path d="M109.833 0H197.614L208 102H175.278L177.958 42.8889H164.78L168.577 102H138.87L141.662 43H129.377L131.499 102H99L107.711 21.5556L109.833 0Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="/images/pages/home/footer.png"
                    width="307"
                    height="217"
                    clipPath="url(#amara-footer-clip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>

            {/* Right area: nav centered + socials right, vertically centered to cutout */}
            <div className="flex items-center max-md:w-full max-md:flex-col max-md:items-start max-md:gap-[40px]">
              <div className="flex flex-1 justify-center max-md:justify-start">
                <nav className="flex flex-col items-center gap-[8px] max-md:items-start">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className="font-sans text-[14px] leading-[24px] font-medium tracking-[1.5px] text-[#F5F1ED] uppercase transition-opacity hover:opacity-70"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="shrink-0">
                <div className="grid grid-cols-2 gap-[12px]">
                  <a
                    href="mailto:info@amarainteriordesign.com"
                    aria-label="Email"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#F5F1ED] bg-[#ADADAD4D] transition-opacity hover:opacity-70"
                  >
                    <Mail width={20} height={14} color="#FFF" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/amara-interior-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#F5F1ED] bg-[#ADADAD4D] transition-opacity hover:opacity-70"
                  >
                    <Linkedin width={16} height={16} color="#FFF" />
                  </a>
                  <a
                    href="mailto:info@amarainteriordesign.com"
                    aria-label="Email 2"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#F5F1ED] bg-[#ADADAD4D] transition-opacity hover:opacity-70"
                  >
                    <Mail width={20} height={14} color="#FFF" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/amara-interior-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn 2"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#F5F1ED] bg-[#ADADAD4D] transition-opacity hover:opacity-70"
                  >
                    <Linkedin width={16} height={16} color="#FFF" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* City Times — same grid so it aligns to the right-side column */}
          <div className="mt-[40px] grid grid-cols-[240px_1fr] pt-[20px] max-sm:grid-cols-[180px_1fr] max-md:flex">
            <div className="max-md:hidden" />
            <div className="flex justify-center gap-[30px] max-md:justify-start">
              {CITIES.map((item) => (
                <div className="flex items-center gap-[8px]" key={item.title}>
                  <p className="font-sans text-[14px] leading-[20px] font-normal tracking-[-0.4px] text-[#D5D5C8]">
                    {formatTimeForOffset(now, item.offset)}
                  </p>
                  <p className="font-sans text-[14px] leading-[20px] font-medium tracking-[-0.6px] text-[#F5F1ED]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
