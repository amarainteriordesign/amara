"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { formatTimeForOffset } from "@/helpers/time";

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

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="w-full bg-[#F1EBDF] px-[42px] pt-[60px] pb-[30px] max-md:px-[20px] max-md:pt-[40px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-start gap-[40px] max-md:flex-col max-md:gap-[40px]">
          {/* Left — Logo + AMARA Image */}
          <div className="flex w-[40%] flex-col max-md:w-full">
            <p className="mb-[30px] font-sans text-[16px] leading-[20px] font-medium tracking-[-0.5px] text-[#262626]">
              <span className="text-[#737373]">Amara</span>{" "}
              <span className="italic">Boutique Design Studio</span>
            </p>

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

          {/* Middle — Navigation Links */}
          <div className="flex w-[30%] flex-col items-center justify-center pt-[40px] max-md:w-full max-md:items-start max-md:pt-[0px]">
            <nav className="flex flex-col items-center gap-[8px] max-md:items-start">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="font-sans text-[14px] leading-[24px] font-medium tracking-[1.5px] text-[#262626] uppercase transition-colors hover:text-[#737373]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Social Icons (2x2 grid) */}
          <div className="flex w-[30%] items-center justify-end pt-[40px] max-md:w-full max-md:justify-start max-md:pt-[0px]">
            <div className="grid grid-cols-2 gap-[12px]">
              <a
                href="mailto:info@amarainteriordesign.com"
                aria-label="Email"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#9B9284] text-[#262626] transition-colors hover:bg-[#262626] hover:text-white"
              >
                <MailIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/amara-interior-design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#9B9284] text-[#262626] transition-colors hover:bg-[#262626] hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:info@amarainteriordesign.com"
                aria-label="Social placeholder 1"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#9B9284] text-[#262626] transition-colors hover:bg-[#262626] hover:text-white"
              >
                <MailIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/amara-interior-design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social placeholder 2"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#9B9284] text-[#262626] transition-colors hover:bg-[#262626] hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom — City Times */}
        <div className="mt-[40px] flex items-center justify-center gap-[30px] pt-[20px] max-md:justify-start">
          {CITIES.map((item) => (
            <div className="flex items-center gap-[8px]" key={item.title}>
              <p className="font-sans text-[14px] leading-[20px] font-normal tracking-[-0.4px] text-[#737373]">
                {formatTimeForOffset(now, item.offset)}
              </p>
              <p className="font-sans text-[14px] leading-[20px] font-medium tracking-[-0.6px] text-[#262626]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
