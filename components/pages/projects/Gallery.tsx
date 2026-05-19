import Project from "@/components/common/Project";
import { Project as ProjectType } from "@/types/project";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function BatchRow({ batch }: { batch: ProjectType[] }) {
  const [a, b, c, d] = batch;
  const hasSecondRow = Boolean(c || d);

  return (
    <div
      className={
        "relative flex w-full flex-col gap-[13px] " +
        (hasSecondRow ? "md:h-[1250px] md:max-slg:h-[950px]" : "md:h-fit")
      }
    >
      <div className="flex w-full flex-col items-start justify-center gap-[13px] md:flex-row md:gap-[93px] md:max-xmd:gap-[40px]">
        {a && (
          <div className="h-[70vh] w-full max-sm:h-[352px] md:h-[593px] md:max-w-[561px] md:max-xmd:h-[415px] md:max-xmd:max-w-[392px]">
            <Project
              src={a.mainImageUrl}
              location={a.location}
              title={a.title}
              href={`/projects/${a.id}`}
              width={1000}
              height={1000}
              alt={a.title}
              isSoon={a.isSoon}
            />
          </div>
        )}

        {b && (
          <div className="h-[70vh] w-full max-sm:h-[352px] md:h-[367px] md:max-w-[491px] md:max-xmd:h-[256px] md:max-xmd:max-w-[343px]">
            <Project
              src={b.mainImageUrl}
              location={b.location}
              title={b.title}
              href={`/projects/${b.id}`}
              width={1000}
              height={850}
              alt={b.title}
              tined={true}
              isSoon={b.isSoon}
            />
          </div>
        )}
      </div>

      {(c || d) && (
        <div className="flex w-full flex-col items-end justify-center gap-[13px] md:absolute md:top-[503px] md:flex-row md:gap-[95px] md:max-xmd:top-[340px] md:max-xmd:gap-[40px]">
          {c && (
            <div className="h-[70vh] w-full max-sm:h-[352px] md:mb-[86px] md:h-[420px] md:max-w-[487px] md:max-xmd:h-[294px] md:max-xmd:max-w-[340px]">
              <Project
                src={c.mainImageUrl}
                location={c.location}
                title={c.title}
                href={`/projects/${c.id}`}
                width={1000}
                height={850}
                alt={c.title}
                tined={true}
                isSoon={c.isSoon}
              />
            </div>
          )}

          {d && (
            <div className="h-[70vh] w-full max-sm:h-[352px] md:h-[715px] md:max-w-[707px] md:max-xmd:h-[500px] md:max-xmd:max-w-[494px]">
              <Project
                src={d.mainImageUrl}
                location={d.location}
                title={d.title}
                href={`/projects/${d.id}`}
                width={1200}
                height={1050}
                alt={d.title}
                isSoon={d.isSoon}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Gallery({ projects }: { projects: ProjectType[] }) {
  if (projects.length === 0) return null;

  const [featured, ...rest] = projects;
  const batches = chunk(rest, 4);

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[13px] px-[20px] md:gap-[126px]">
      {featured && (
        <div className="h-[85vh] w-full max-sm:h-[537px] md:h-[1013px] md:max-w-[864px]">
          <Project
            src={featured.previewImageUrl || featured.mainImageUrl}
            alt={featured.title}
            width={864}
            height={1013}
            location={featured.location}
            title={featured.title}
            href={`/projects/${featured.id}`}
            isSoon={featured.isSoon}
          />
        </div>
      )}

      {batches.map((batch, i) => (
        <BatchRow key={i} batch={batch} />
      ))}
    </section>
  );
}
