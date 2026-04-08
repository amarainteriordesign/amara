"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatTimeForOffset } from "@/helpers/time";
import Mail from "@/components/icons/mail.svg";
import Linkedin from "@/components/icons/linkedin.svg";
import Instagram from "@/components/icons/instagram.svg";

const NAV_LINKS = [
  { name: "ABOUT US", url: "/about-us" },
  { name: "DESIGN", url: "/design" },
  { name: "PROCUREMENT", url: "/procurement" },
  { name: "PROJECTS", url: "/projects" },
  { name: "NEWS", url: "/news" },
];

const CITIES = [
  { title: "Dubai", offset: 4 },
  { title: "Miami", offset: -5 },
  { title: "Paris", offset: 1 },
];

type FooterProps = {
  showDesertImage?: boolean;
  desertImage?: string;
  bgColor?: string;
};

export default function Footer({
  showDesertImage = false,
  desertImage = "/images/pages/home/Footer_Desert_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
  bgColor = "#F1EBDF",
}: FooterProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
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

      <footer className="w-full px-[42px] pt-[60px] pb-[30px] max-md:px-[20px] max-md:pt-[40px]" style={{ backgroundColor: bgColor }}>
        <div className="mx-auto max-w-[1440px]">
          {/* Main row: 3 equal columns */}
          <div className="grid grid-cols-3 items-center max-md:flex max-md:flex-col max-md:items-center max-md:gap-[40px]">
            {/* Col 1 — AMARA Cutout (left-aligned) */}
            <div className="justify-self-start">
              <div className="relative h-[180px] w-[240px] overflow-hidden max-sm:h-[70px] max-sm:w-[95px]">
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
                    href="/images/pages/home/Footer_Desert_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
                    width="307"
                    height="217"
                    clipPath="url(#amara-footer-clip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>

            {/* Col 2 — Nav links (centered) */}
            <nav className="flex flex-col items-center gap-[8px] justify-self-center max-md:items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="font-sans text-[14px] leading-[24px] font-medium tracking-[1.5px] text-[#4A4A40] uppercase transition-opacity hover:opacity-70"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Col 3 — Social icons (pulled in from right to mirror AMARA cutout distance) */}
            <div className="flex justify-end pr-[130px] max-lg:pr-[60px] max-md:pr-0">
            <div className="flex gap-[12px]">
              <a
                href="mailto:info@amarainteriordesign.com?subject=Interior%20Design%20Inquiry&body=Hello%20Amara%20Team%2C%0A%0AI%20am%20interested%20in%20your%20interior%20design%20services.%20Please%20contact%20me%20to%20discuss%20my%20project.%0A%0AThank%20you."
                aria-label="Email"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#9B9284] transition-opacity hover:opacity-70"
              >
                <Mail width={20} height={14} color="#4A4A40" />
              </a>
              <a
                href="https://www.linkedin.com/company/amarainteriordesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#9B9284] transition-opacity hover:opacity-70"
              >
                <Linkedin width={16} height={16} color="#4A4A40" />
              </a>
              <a
                href="https://www.instagram.com/amara.interior.design/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#9B9284] transition-opacity hover:opacity-70"
              >
                <Instagram width={16} height={16} color="#4A4A40" />
              </a>
              <a
                href="https://wa.me/971585487150"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#9B9284] transition-opacity hover:opacity-70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#4A4A40">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
            </div>
          </div>

          {/* City Times — centered across full width */}
          <div className="mx-auto mt-[40px] flex w-full max-w-[340px] justify-between pt-[20px]">
            {CITIES.map((item) => (
              <div className="flex items-baseline gap-[8px]" key={item.title}>
                <p className="font-sans text-[14px] leading-[20px] font-normal tracking-[-0.4px] text-[#9B9284]">
                  {now && formatTimeForOffset(now, item.offset)}
                </p>
                <p className="font-sans text-[14px] leading-[20px] font-medium tracking-[-0.6px] text-[#4A4A40]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
