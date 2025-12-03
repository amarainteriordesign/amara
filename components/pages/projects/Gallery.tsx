import Project from "@/components/common/Project";
import { Project as ProjectType } from "@/types/project";

export default function Gallery({ projects }: { projects: ProjectType[] }) {
  // Projects are already sorted and allocated by the parent page
  const availableProjects = projects;

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[126px] px-[20px] max-md:gap-[13px]">
      {/* First featured project */}
      {availableProjects[0] && (
        <div className="h-[1013px] w-full max-w-[864px] max-md:h-[85vh] max-md:max-w-full max-sm:h-[537px]">
          <Project
            src={availableProjects[0].previewImageUrl || availableProjects[0].mainImageUrl}
            alt={availableProjects[0].title}
            width={864}
            height={1013}
            location={availableProjects[0].location}
            title={availableProjects[0].title}
            href={`/projects/${availableProjects[0].id}`}
            isSoon={availableProjects[0].isSoon}
          />
        </div>
      )}

      <div className="max-slg:h-[950px] relative flex h-[1250px] w-full flex-col gap-[13px] max-md:h-fit">
        <div className="max-xmd:gap-[40px] flex w-full items-start justify-center gap-[93px] max-md:flex-col max-md:gap-[13px]">
          {availableProjects[1] && (
            <div className="max-xmd:h-[415px] max-xmd:max-w-[392px] h-[593px] w-full max-w-[561px] max-md:h-[70vh] max-md:max-w-full max-sm:h-[352px]">
              <Project
                src={availableProjects[1].mainImageUrl}
                location={availableProjects[1].location}
                title={availableProjects[1].title}
                href={`/projects/${availableProjects[1].id}`}
                width={1000}
                height={1000}
                alt={availableProjects[1].title}
                isSoon={availableProjects[1].isSoon}
              />
            </div>
          )}

          {availableProjects[2] && (
            <div className="max-xmd:h-[256px] max-xmd:max-w-[343px] h-[367px] w-full max-w-[491px] max-md:h-[70vh] max-md:max-w-full max-sm:h-[352px]">
              <Project
                src={availableProjects[2].mainImageUrl}
                location={availableProjects[2].location}
                title={availableProjects[2].title}
                href={`/projects/${availableProjects[2].id}`}
                width={1000}
                height={850}
                alt={availableProjects[2].title}
                tined={true}
                isSoon={availableProjects[2].isSoon}
              />
            </div>
          )}
        </div>

        <div className="max-xmd:top-[340px] max-xmd:gap-[40px] absolute top-[503px] flex w-full items-end justify-center gap-[95px] max-md:static max-md:flex-col max-md:gap-[13px]">
          {availableProjects[3] && (
            <div className="max-xmd:h-[294px] max-xmd:max-w-[340px] mb-[86px] h-[420px] w-full max-w-[487px] max-md:mb-0 max-md:h-[70vh] max-md:max-w-full max-sm:h-[352px]">
              <Project
                src={availableProjects[3].mainImageUrl}
                location={availableProjects[3].location}
                title={availableProjects[3].title}
                href={`/projects/${availableProjects[3].id}`}
                width={1000}
                height={850}
                alt={availableProjects[3].title}
                tined={true}
                isSoon={availableProjects[3].isSoon}
              />
            </div>
          )}

          {availableProjects[4] && (
            <div className="max-xmd:max-w-[494px] max-xmd:h-[500px] h-[715px] w-full max-w-[707px] max-md:h-[70vh] max-md:max-w-full max-sm:h-[352px]">
              <Project
                src={availableProjects[4].mainImageUrl}
                location={availableProjects[4].location}
                title={availableProjects[4].title}
                href={`/projects/${availableProjects[4].id}`}
                width={1200}
                height={1050}
                alt={availableProjects[4].title}
                isSoon={availableProjects[4].isSoon}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
