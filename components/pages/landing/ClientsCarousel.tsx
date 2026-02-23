"use client";
import Image from "next/image";

const CLIENTS = [
  { src: "/images/clients/aria_amara-interior-design-procurement-miami-dubai.webp", alt: "Aria Reserve Miami", className: "" },
  { src: "/images/clients/astonmartin_amara-interior-design-procurement-miami-dubai.webp", alt: "Aston Martin Residences", className: "" },
  { src: "/images/clients/bloom_amara-interior-design-procurement-miami-dubai.webp", alt: "Bloom Pilates", className: "" },
  { src: "/images/clients/cervera_amara-interior-design-procurement-miami-dubai.webp", alt: "Cervera Real Estate", className: "!px-[25px] max-sm:!px-[15px]" },
  { src: "/images/clients/emaar_amara-interior-design-procurement-miami-dubai.webp", alt: "Emaar", className: "" },
  { src: "/images/clients/fortune_amara-interior-design-procurement-miami-dubai.webp", alt: "Fortune International Realty" },
  { src: "/images/clients/globalty_amara-interior-design-procurement-miami-dubai.webp", alt: "Globalty Investment" },
  { src: "/images/clients/hh_amara-interior-design-procurement-miami-dubai.webp", alt: "H&H Properties" },
  { src: "/images/clients/missoni_amara-interior-design-procurement-miami-dubai.webp", alt: "Missoni Baia Miami Residences" },
  { src: "/images/clients/mrc_amara-interior-design-procurement-miami-dubai.webp", alt: "Mr. C Residences" },
  { src: "/images/clients/padel_amara-interior-design-procurement-miami-dubai.webp", alt: "Padel One" },
  { src: "/images/clients/saas_amara-interior-design-procurement-miami-dubai.webp", alt: "Saas Properties" },
  { src: "/images/clients/sothebys_amara-interior-design-procurement-miami-dubai.webp", alt: "Sotheby's International Realty" },
  { src: "/images/clients/village_amara-interior-design-procurement-miami-dubai.webp", alt: "The Village at Coral Gables" },
  { src: "/images/clients/well_amara-interior-design-procurement-miami-dubai.webp", alt: "The Well" },
];

export default function ClientsCarousel() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="w-full overflow-hidden bg-[#f1ebdf] py-[50px] max-sm:py-[30px]">
      <div className="relative w-full">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-[2] w-[80px] bg-gradient-to-r from-[#f1ebdf] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-[2] w-[80px] bg-gradient-to-l from-[#f1ebdf] to-transparent" />
        <div className="flex animate-scroll items-center">
          {doubled.map((client, i) => (
            <div
              key={i}
              className={`flex h-[80px] shrink-0 items-center justify-center px-[50px] max-sm:h-[55px] max-sm:px-[30px] ${client.className || ""}`}
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={80}
                className="h-full w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
