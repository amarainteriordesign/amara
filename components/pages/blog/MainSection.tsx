import Gallery from "@/components/pages/blog/Gallery";
import { SerializedBlog } from "@/types/blog";
import Image from "next/image";

export default function MainSection({ blogs }: { blogs: SerializedBlog[] }) {
  const blogLists = (blogs || []).reduce(
    (acc: SerializedBlog[][], curr: SerializedBlog, i: number) => {
      const listIndex = Math.floor(i / 6);
      if (!acc[listIndex]) {
        acc[listIndex] = [];
      }

      acc[listIndex].push(curr);
      return acc;
    },
    [],
  );

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[20px] pt-[40px] max-sm:px-[12px] max-sm:pt-[82px]">
      <div className="max-xmd:pl-0 max-xmd:gap-[60px] flex w-full items-center justify-center gap-[160px] pb-[221px] pl-[100px] max-md:flex-col max-sm:gap-[48px] max-sm:pb-[116px]">
        <Image
          src="/images/pages/blog/drawing.png"
          alt="Architectural sketch Amara Interior Design blog"
          height={320}
          width={320}
          className="object-cover"
        />

        <p className="max-xmd:max-w-[540px] max-w-[595px] font-serif text-[14px] leading-[21px] font-normal tracking-[0.4px] text-[#262626] max-sm:max-w-full max-sm:leading-[19px] max-sm:tracking-[-0.4px]">
          Behind every space lies a story, of intention, of place, of people. This journal is where
          we share what inspires us, what grounds us, and what moves us forward. From design
          philosophies to quiet rituals, we gather insights that shape how we create.
          <br />
          <br />
          Here, you’ll find reflections on our projects, the materials we love, the questions we
          ask, and the trends we observe. It’s a space for curiosity, connection, and conversation,
          an ongoing exploration of the world through Amara’s eyes.
        </p>
      </div>

      {blogLists.map((blogList, i) => (
        <Gallery data={blogList} key={i} />
      ))}
    </section>
  );
}
