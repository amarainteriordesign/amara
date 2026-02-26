"use client";
import { SerializedBlog } from "@/types/blog";
import Carousel from "@/components/common/Carousel";
import { useState, useCallback, useMemo } from "react";
import Link from "next/link";

export default function OtherBlogs({ blogs }: { blogs: SerializedBlog[] }) {
  const [selectedBlog, setSelectedBlog] = useState<SerializedBlog | null>(null);

  const handleSlideChange = useCallback(
    (slide: { id: string }, _index: number) => {
      const actualBlog = blogs.find((blog) => blog.id === slide.id);
      if (actualBlog) {
        setSelectedBlog(actualBlog);
      }
    },
    [blogs],
  );

  const slides = useMemo(() => {
    return blogs.map((blog) => ({
      id: blog.id,
      img: blog.previewImageUrl,
      alt: blog.title,
    }));
  }, [blogs]);

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center px-[20px] pb-[55px] max-sm:pb-[54px]">
        <h3 className="text-bg-img bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[9px] text-center font-serif text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:pb-[16px] max-sm:text-[24px] max-sm:leading-[28px] max-sm:tracking-[-0.6]">
          Discover more articles
        </h3>
        <p className="text-center font-sans text-[14px] leading-[18px] font-normal tracking-[0.4px] text-[#262626] uppercase">
          Reflections on spaces, culture, and craft
        </p>
      </div>

      <Carousel slides={slides} onSlideChange={handleSlideChange} />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-[71px] pt-[23px] pb-[305px] max-md:px-[20px] max-md:pb-[158px] max-sm:px-[12px]">
        <p className="mb-[40px] text-center font-serif text-[14px] leading-[18px] font-normal tracking-[0.4px] text-[#262626] uppercase">
          {selectedBlog?.title}
        </p>

        <Link
          href={`/news/${selectedBlog?.slug}`}
          className="flex h-[40px] items-center justify-center rounded-[20px] border-[1px] border-[#262626] px-[16px] text-center text-[12px] leading-[18px] font-medium tracking-[0.2px] text-[#262626] uppercase"
        >
          DISCOVER ARTICLE
        </Link>
      </div>
    </section>
  );
}
