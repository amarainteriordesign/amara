"use client";
import Image from "next/image";
import { Project } from "@/types/project";
import Quote from "../design/Quote";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy({ project }: { project: Project }) {
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
      gsap.set(".philosophy-anim-img-1", {
        yPercent: -20,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".philosophy-anim-container-1",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(".philosophy-anim-img-1", {
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
      gsap.set(".philosophy-anim-container-2", {
        yPercent: isColumn ? 0 : 10,
        duration: 0,
      });

      gsap.set(".philosophy-anim-img-2", {
        yPercent: isColumn ? -20 : -10,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".philosophy-anim-container-2",
        start: "top bottom",
        end: "bottom bottom-=300px",
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(".philosophy-anim-img-2", {
            yPercent: isColumn ? -20 + 15 * progress : -10 + 8 * progress,
            duration: 0,
          });

          if (!isColumn) {
            gsap.set(".philosophy-anim-container-2", {
              yPercent: 10 - 10 * progress,
              duration: 0,
            });
          }
        },
      });
    });

    return () => {
      context2Ref.current?.revert();
    };
  }, [isColumn]);

  return (
    <>
      <section className="w-full">
        <div className="flex w-full flex-col items-center justify-center px-[16px] py-[195px] max-md:py-[144px]">
          <h3 className="text-bg-img bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] font-serif text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:pb-[7px] max-sm:text-[22px] max-sm:tracking-[-0.6px]">
            {project?.designTitle || "Our Design Philosophy"}
          </h3>

          <p className="pb-[68px] text-center font-sans text-[12px] leading-[20px] font-normal tracking-[0.3px] text-[#262626] uppercase max-sm:pb-[27px]">
            {project?.designSubtitle || "Behind the PROJECT"}
          </p>

          <p className="text-gradient-vertical max-w-[565px] text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-0.8px] max-sm:max-w-[311px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[-0.4px]">
            {project?.designDescription ||
              `Rooted in Mayan heritage and shaped by the rhythm of the jungle, the design invites
          balance through calm geometry, native textures, and open-air transitions. Spaces unfold
          gently, guided by light and breeze, where each line honors what came before. Blending
          ancestral echoes with modern restraint, it finds harmony in the dialogue between past and
          present. More than a home, it’s a sanctuary where history, nature, and stillness breathe
          together.`}
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[1440px] items-start justify-center gap-[25px] px-[25px] pb-[192px] max-md:flex-col-reverse max-md:gap-[96px] max-md:px-0 max-sm:pt-[15px] max-sm:pb-[100px]">
          <div className="philosophy-anim-container-1 flex w-full max-w-[calc(100%-12.5px)] flex-col items-start gap-[25px] max-md:max-w-[74vw] max-md:self-end max-md:px-[16px] max-sm:max-w-[292px] max-sm:gap-[16px]">
            <div className="max-xmd:h-[856px] h-[908px] w-full overflow-hidden max-sm:h-[364px]">
              <Image
                src={project.secondHalfImage1Url}
                alt="Interior design detail Amara luxury project"
                width={1000}
                height={1200}
                className="philosophy-anim-img-1 h-[120%] w-full object-cover"
              />
            </div>

            <p className="tranking-[3%] font-serif text-[14px] leading-[21px] font-normal text-[#1A1A1E]">
              {project.secondHalfImage1Text}
            </p>
          </div>

          <div className="philosophy-anim-container-2 flex w-full max-w-[calc(100%-12.5px)] flex-col items-start gap-[25px] pt-[315px] max-md:max-w-full max-md:pt-0 max-sm:gap-[16px]">
            <div className="max-xmd:h-[771px] h-[1008px] w-full overflow-hidden max-md:h-screen max-sm:h-[738px]">
              <Image
                src={project.secondHalfImage2Url}
                alt="Bespoke interior design showcase Amara Miami Dubai"
                width={1000}
                height={1200}
                className="philosophy-anim-img-2 h-[110%] w-full object-cover"
              />
            </div>

            <p
              className="max-xmd:max-w-[379px] tranking-[3%] max-w-[446px] text-start font-serif text-[14px] leading-[21px] font-normal text-[#1A1A1E]"
              dangerouslySetInnerHTML={{ __html: project.secondHalfImage2Text }}
            ></p>
          </div>
        </div>

        {/* <Image
          src={project?.secondFullWidthImageUrl}
          alt="Full width interior design showcase Amara Miami Dubai"
          width={2000}
          height={1000}
          className="max-sm: h-full h-screen w-full object-cover max-md:mx-[16px] max-md:h-[68vh] max-md:max-w-[74vw] max-sm:h-[508px] max-sm:max-w-[292px]"
        /> */}
      </section>

      <Quote leaveEarly={true} />
    </>
  );
}
