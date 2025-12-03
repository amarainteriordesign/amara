import Project from "@/components/common/Project";
import { Project as ProjectType } from "@/types/project";

export default function DiscoverProjects({ projects }: { projects: ProjectType[] }) {
  // Projects are already filtered and allocated by the parent page
  const availableProjects = projects;

  // Don't render the section if there are no projects
  if (availableProjects.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-[20px]">
      <div className="flex flex-col items-center gap-[30px] py-[150px] max-sm:py-[103px]">
        <p className="text-gradient-vertical max-w-[565px] text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-0.8px] max-sm:max-w-[310px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[-0.5px]">
          Every project is a story layered with thought, material, and meaning. Step inside to
          experience how each space takes shape, from the first sketch to the final feeling.
        </p>
        <p className="text-normal font-sans text-[14px] leading-[18px] tracking-[0.2px] text-[#262626] uppercase">
          Unfold the story
        </p>
      </div>

      <div className="mb-[78px] h-[87vh] w-full max-w-[1272px] max-md:mb-[13px] max-md:h-[85vh] max-md:max-w-full max-sm:h-[537px]">
        <Project
          src={availableProjects[0].mainImageUrl}
          alt={availableProjects[0].title}
          width={1272}
          height={704}
          title={availableProjects[0].title}
          location={availableProjects[0].location}
          isSoon={true}
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1272px] flex-col justify-start max-md:justify-normal max-md:gap-[13px]">
        <div className="h-[76vh] w-[60%] max-w-[773px] max-md:h-[70vh] max-md:w-full max-md:max-w-full max-sm:h-[352px]">
          <Project
            src={availableProjects[1].mainImageUrl}
            alt={availableProjects[1].title}
            width={773}
            height={618}
            title={availableProjects[1].title}
            location={availableProjects[1].location}
            isSoon={true}
          />
        </div>

        <div className="absolute top-[50%] right-0 z-[2] h-[49vh] w-[42%] max-w-[545px] translate-y-[-50%] max-md:static max-md:top-0 max-md:h-[70vh] max-md:w-full max-md:max-w-full max-md:translate-y-0 max-sm:h-[352px]">
          <Project
            src={availableProjects[2].mainImageUrl}
            alt={availableProjects[2].title}
            width={545}
            height={401}
            tined={true}
            title={availableProjects[2].title}
            location={availableProjects[2].location}
            isSoon={true}
          />
        </div>
      </div>
    </section>
  );
}
