"use client";
import Link from "next/link";
import Image from "next/image";
import { SerializedBlog } from "@/types/blog";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

type GalleryProps = {
  data: SerializedBlog[];
};

export default function Gallery({ data }: GalleryProps) {
  const context = useRef<gsap.Context>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLElement>(".gallery-image-anim");
    if (!images?.length) return;

    context.current = gsap.context(() => {
      images.forEach((item) => {
        gsap.set(item, {
          yPercent: -20,
          duration: 0,
        });

        ScrollTrigger.create({
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(item, {
              yPercent: -20 + progress * 15,
              duration: 0,
            });
          },
        });
      });
    });

    return () => context.current?.revert();
  });

  return (
    <div className="w-full">
      {data[0] && (
        <div className="mx-auto flex w-full max-w-[625px] flex-col items-center gap-[15px] pb-[188px] max-md:pb-[50px] max-sm:max-w-full">
          <Link
            href={"/blog/" + data[0].metaUrl}
            className="open-cursor-item h-[720px] w-full overflow-hidden max-sm:h-[537px]"
          >
            <Image
              src={data[0].previewImageUrl}
              alt="Blog"
              width={625}
              height={720}
              className="gallery-image-anim h-[120%] w-full object-cover"
            />
          </Link>

          <p className="truncate-2-lines w-full font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
            <span className="uppercase">{data[0].previewTitle}</span>{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: data[0].previewDescription.replace(/\n/g, "<br />"),
              }}
            ></span>
          </p>
        </div>
      )}

      {data.length > 1 && (
        <div className="max-xmd:px-[20px] max-xmd:gap-[60px] flex w-full gap-[99px] pr-[93px] pb-[188px] pl-[49px] max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-[50px] max-md:px-0 max-md:pb-[50px]">
          <div className="max-xmd:gap-[100px] flex w-full flex-col items-start gap-[189px] max-md:items-center max-md:justify-center max-md:gap-[50px]">
            <div className="max-xmd:max-w-[450px] flex w-full max-w-[563px] flex-col items-center gap-[15px] max-md:max-w-[625px] max-sm:max-w-full">
              <Link
                href={"/blog/" + data[1].metaUrl}
                className="open-cursor-item max-xmd:h-[300px] h-[376px] w-full overflow-hidden max-md:h-[417px] max-sm:h-[352px]"
              >
                <Image
                  src={data[1].previewImageUrl}
                  alt="Blog"
                  width={563}
                  height={376}
                  className="gallery-image-anim h-[120%] w-full object-cover"
                />
              </Link>

              <p className="truncate-2-lines w-full font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
                <span className="uppercase">{data[1].previewTitle}</span>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: data[1].previewDescription.replace(/\n/g, "<br />"),
                  }}
                ></span>
              </p>
            </div>

            {data[3] && (
              <div className="max-xmd:max-w-[450px] flex w-full max-w-[563px] flex-col items-center gap-[15px] self-end max-md:max-w-[625px] max-md:self-center max-sm:max-w-full">
                <Link
                  href={"/blog/" + data[3].metaUrl}
                  className="open-cursor-item max-xmd:h-[292px] h-[365px] w-full overflow-hidden max-md:h-[417px] max-sm:h-[352px]"
                >
                  <Image
                    src={data[3].previewImageUrl}
                    alt="Blog"
                    width={563}
                    height={365}
                    className="gallery-image-anim h-[120%] w-full object-cover"
                  />
                </Link>

                <p className="truncate-2-lines w-full font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
                  <span className="uppercase">{data[3].previewTitle}</span>{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data[3].previewDescription.replace(/\n/g, "<br />"),
                    }}
                  ></span>
                </p>
              </div>
            )}
          </div>

          {data[2] && (
            <div className="max-xmd:max-w-[300px] max-xmd:pt-[40px] flex w-full max-w-[376px] flex-col items-center gap-[15px] pt-[86px] max-md:max-w-[625px] max-md:pt-0 max-sm:max-w-full">
              <Link
                href={"/blog/" + data[2].metaUrl}
                className="open-cursor-item max-xmd:h-[450px] h-[563px] w-full overflow-hidden max-md:h-[417px] max-sm:h-[352px]"
              >
                <Image
                  src={data[2].previewImageUrl}
                  alt="Blog"
                  width={376}
                  height={563}
                  className="gallery-image-anim h-[120%] w-full object-cover"
                />
              </Link>

              <p className="truncate-2-lines w-full font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
                <span className="uppercase">{data[2].previewTitle}</span>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: data[2].previewDescription.replace(/\n/g, "<br />"),
                  }}
                ></span>
              </p>
            </div>
          )}
        </div>
      )}

      {data.length > 4 && (
        <div className="max-xmd:px-[20px] flex w-full items-start justify-center gap-[98px] pb-[50px] max-md:flex-col max-md:items-center max-md:gap-[50px] max-md:px-0">
          {data[4] && (
            <div className="max-xmd:max-w-[322px] flex w-full max-w-[403px] flex-col items-center gap-[15px] max-md:max-w-[625px] max-sm:max-w-full">
              <Link
                href={"/blog/" + data[4].metaUrl}
                className="open-cursor-item max-xmd:h-[214px] h-[268px] w-full overflow-hidden max-md:h-[417px] max-sm:h-[352px]"
              >
                <Image
                  src={data[4].previewImageUrl}
                  alt="Blog"
                  width={403}
                  height={268}
                  className="gallery-image-anim h-[120%] w-full object-cover"
                />
              </Link>

              <p className="truncate-2-lines w-full font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
                <span className="uppercase">{data[4].previewTitle}</span>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: data[4].previewDescription.replace(/\n/g, "<br />"),
                  }}
                ></span>
              </p>
            </div>
          )}

          {data[5] && (
            <div className="max-xmd:max-w-[541px] max-xmd:pt-[65px] flex w-full max-w-[677px] flex-col items-center gap-[15px] pt-[134px] max-md:max-w-[625px] max-md:pt-0 max-sm:max-w-full">
              <Link
                href={"/blog/" + data[5].metaUrl}
                className="open-cursor-item max-xmd:h-[360px] h-[450px] w-full overflow-hidden max-md:h-[417px] max-sm:h-[352px]"
              >
                <Image
                  src={data[5].previewImageUrl}
                  alt="Blog"
                  width={677}
                  height={450}
                  className="gallery-image-anim h-[120%] w-full object-cover"
                />
              </Link>

              <p className="truncate-2-lines w-full font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
                <span className="uppercase">{data[5].previewTitle}</span>{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: data[5].previewDescription.replace(/\n/g, "<br />"),
                  }}
                ></span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
