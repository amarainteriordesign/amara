import Image from "next/image";
import { Project } from "@/types/project";

interface HeroProps {
  project: Project;
}

export default function Hero({ project }: HeroProps) {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[44px] px-[20px] pt-[127px] pb-[180px] max-sm:gap-[54px] max-sm:pt-[180px] max-sm:pb-[144px]">
      <div className="relative flex h-[785px] w-full flex-col items-center justify-center max-md:h-[549px] max-sm:h-[445px]">
        <Image
          src={project.mainImageUrl}
          alt={project.title}
          width={800}
          height={1200}
          priority
          className="h-full w-full max-w-[448px] object-cover max-md:max-w-[313px] max-sm:max-w-[254px]"
        />
        <h1 className="font-diranista absolute top-[50%] left-[50%] translate-[-50%] transform text-center text-[100px] leading-[99px] font-normal tracking-[-5px] whitespace-nowrap text-[#000000] max-md:text-[70px] max-md:tracking-[-3.5px] max-sm:text-[32px] max-sm:tracking-[-1.6px]">
          {project.title.toUpperCase()}
        </h1>
      </div>
      <p className="max-w-[674px] text-center font-serif text-[14px] leading-[18px] font-normal tracking-[0.7px] text-[#000] max-md:max-w-[471px] max-sm:max-w-[254px] max-sm:text-[12px]">
        {project.description}
      </p>
    </section>
  );
}
