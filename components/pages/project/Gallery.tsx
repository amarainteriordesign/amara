"use client";
import Image from "next/image";
import { Project } from "@/types/project";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@/hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

interface GalleryProps {
  project: Project;
}

export default function Gallery({ project }: GalleryProps) {
  const screenSize = useWindowSize();
  const [isColumn, setsColumn] = useState(false);
  useEffect(() => {
    const isNewColumn = screenSize.width < 960;
    if (isNewColumn !== isColumn) {
      setsColumn(isNewColumn);
    }
  }, [screenSize, isColumn]);

  const context1Ref = useRef<gsap.Context>(null);
  useGSAP(() => {
    context1Ref.current?.revert();

    context1Ref.current = gsap.context(() => {
      gsap.set(".gallery-image-anim-1", {
        yPercent: -20,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".gallery-image-anim-wrapper-1",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(".gallery-image-anim-1", {
            yPercent: -20 + 15 * progress,
            duration: 0,
          });
        },
      });
    });

    return () => {
      context1Ref.current?.revert();
    };
  });

  const context2Ref = useRef<gsap.Context>(null);
  useGSAP(() => {
    context2Ref.current?.revert();

    context2Ref.current = gsap.context(() => {
      gsap.set(".gallery-image-anim-2", {
        yPercent: -20,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".gallery-image-anim-wrapper-2",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(".gallery-image-anim-2", {
            yPercent: -20 + 15 * progress,
            duration: 0,
          });
        },
      });
    });

    return () => {
      context2Ref.current?.revert();
    };
  });

  const context3Ref = useRef<gsap.Context>(null);
  useGSAP(() => {
    context3Ref.current?.revert();

    context3Ref.current = gsap.context(() => {
      gsap.set(".gallery-image-anim-container-3", {
        yPercent: isColumn ? 0 : 10,
        duration: 0,
      });

      gsap.set(".gallery-image-anim-3", {
        yPercent: isColumn ? -20 : -10,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: isColumn ? ".gallery-image-anim-container-3" : ".gallery-image-anim-wrapper-2",
        start: "top bottom",
        end: "bottom bottom-=300px",
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(".gallery-image-anim-3", {
            yPercent: isColumn ? -20 + 15 * progress : -10 + 8 * progress,
            duration: 0,
          });

          if (!isColumn) {
            gsap.set(".gallery-image-anim-container-3", {
              yPercent: 10 - 10 * progress,
              duration: 0,
            });
          }
        },
      });
    });

    return () => {
      context3Ref.current?.revert();
    };
  }, [isColumn]);

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-[16px] pb-[62px] max-sm:pb-[100px]">
        <div className="flex w-full items-start justify-center gap-[89px] max-md:w-[80vw] max-md:flex-col-reverse max-md:gap-[20px] max-sm:max-w-[310px] max-sm:gap-[14px]">
          <p className="max-xmd:max-w-[379px] max-sm:tracking-0 max-w-[446px] font-serif text-[14px] leading-[18px] font-normal tracking-[0.7px] text-[#000] max-md:max-w-full max-sm:text-[12px]">
            {project.description2}
          </p>

          <div className="max-xmd:h-[935px] gallery-image-anim-wrapper-1 max-xmd:max-w-[681] h-[1100px] w-full max-w-[802px] overflow-hidden max-md:h-[75vh] max-md:max-w-full max-sm:h-[352px]">
            <Image
              src={project.secondImageUrl}
              alt={project.description2}
              width={802}
              height={1100}
              className="gallery-image-anim-1 h-[120%] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <Image
        src={project.fullWidthImageUrl}
        alt={project.title}
        width={2000}
        height={1000}
        className="h-full h-screen w-full object-cover"
      />

      <div className="gallery-image-anim-wrapper-2 mx-auto flex w-full max-w-[1440px] items-start justify-center gap-[25px] px-[25px] pt-[116px] pb-[256px] max-md:flex-col-reverse max-md:gap-[96px] max-sm:pt-[15px] max-sm:pb-[100px]">
        <div className="flex w-full max-w-[calc(100%-12.5px)] flex-col items-start gap-[25px] max-md:max-w-[74vw] max-md:self-end max-sm:max-w-[292px] max-sm:gap-[16px]">
          <div className="max-xmd:h-[771px] h-[908px] w-full overflow-hidden max-sm:h-[508px]">
            <Image
              src={project.halfImage1Url}
              alt={project.halfImage1Subtext}
              width={1000}
              height={1400}
              className="gallery-image-anim-2 h-[120%] w-full object-cover"
            />
          </div>

          <p
            className="max-sm:tracking-0 font-serif text-[14px] leading-[18px] font-normal tracking-[0.7px] text-[#000] max-sm:text-[12px]"
            dangerouslySetInnerHTML={{
              __html: project.halfImage1Subtext.replace(/\n/g, "<br />"),
            }}
          ></p>
        </div>

        <div className="gallery-image-anim-container-3 flex w-full max-w-[calc(100%-12.5px)] flex-col items-center gap-[107px] max-md:max-w-full max-md:items-start max-md:gap-[76px]">
          <p
            className="max-xmd:max-w-[379px] max-sm:tracking-0 max-w-[446px] pt-[19px] font-serif text-[14px] leading-[21px] font-normal tracking-[0.7px] text-[#000] max-md:pt-0 max-sm:max-w-full max-sm:text-[12px] max-sm:leading-[22px]"
            dangerouslySetInnerHTML={{
              __html: project.halfImage2Text.replace(/\n/g, "<br />"),
            }}
          ></p>

          <div className="flex w-full flex-col items-start gap-[25px] max-md:max-w-[74vw] max-sm:max-w-[292px]">
            <div className="max-xmd:h-[856px] h-[1008px] overflow-hidden max-sm:h-[364px]">
              <Image
                src={project.halfImage2Url}
                alt={project.halfImage2Subtext}
                width={683}
                height={1008}
                className="gallery-image-anim-3 h-[110%] w-full object-cover"
              />
            </div>

            <p
              className="max-sm:tracking-0 font-serif text-[14px] leading-[21px] font-normal tracking-[0.7px] text-[#000] max-sm:text-[12px] max-sm:leading-[22px]"
              dangerouslySetInnerHTML={{
                __html: project.halfImage2Subtext.replace(/\n/g, "<br />"),
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}
