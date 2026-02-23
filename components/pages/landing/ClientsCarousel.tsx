"use client";
import Image from "next/image";

const CLIENTS = [
  { src: "/images/clients/aston-martin.webp", alt: "Aston Martin Residences" },
  { src: "/images/clients/bloom-pilates.webp", alt: "Bloom Pilates" },
  { src: "/images/clients/emaar.webp", alt: "Emaar" },
  { src: "/images/clients/fortune-realty.webp", alt: "Fortune International Realty" },
  { src: "/images/clients/globalty.webp", alt: "Globalty Investment" },
  { src: "/images/clients/missoni-baia.webp", alt: "Missoni Baia" },
  { src: "/images/clients/mr-c-residence.webp", alt: "Mr. C Residences" },
  { src: "/images/clients/padel-one.webp", alt: "Padel One" },
  { src: "/images/clients/sothebys-realty.webp", alt: "Sotheby's International Realty" },
];

export default function ClientsCarousel() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="w-full overflow-hidden bg-[#f1ebdf] py-[50px] max-sm:py-[30px]">
      <div className="relative w-full">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-[2] w-[80px] bg-gradient-to-r from-[#f1ebdf] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-[2] w-[80px] bg-gradient-to-l from-[#f1ebdf] to-transparent" />
        <div className="flex animate-scroll items-center gap-[70px] max-sm:gap-[45px]">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex h-[80px] w-[200px] shrink-0 items-center justify-center max-sm:h-[55px] max-sm:w-[150px]"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={80}
                className="h-full w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
