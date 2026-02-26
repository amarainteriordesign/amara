export const revalidate = 300;

import Header from "@/components/layout/Header";
import ImageFooter from "@/components/layout/ImageFooter";
import Hero from "@/components/pages/news/Hero";
import Contact from "@/components/common/Contact";
import MainSection from "@/components/pages/news/MainSection";
import { fetchAllBlogs } from "@/lib/blog";
import type { SerializedBlog } from "@/types/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Insights, inspiration, and stories about luxury interior design, architecture, and procurement by Amara Interior Design. Trends from Miami, Dubai, and Paris.",
  alternates: {
    canonical: "/news",
  },
};

export default async function News() {
  const blogs = await fetchAllBlogs();

  const serializedBlogs: SerializedBlog[] = blogs.map((blog) => ({
    ...blog,
    createdAt: blog.createdAt?.toDate?.()?.toISOString() || blog.createdAt.toString(),
    updatedAt: blog.updatedAt?.toDate?.()?.toISOString() || blog.updatedAt.toString(),
    publishedAt: blog.publishedAt?.toDate?.()?.toISOString() || blog.publishedAt?.toString(),
  }));

  return (
    <>
      <Header />

      <Hero />

      <MainSection blogs={serializedBlogs} />

      <Contact />

      <ImageFooter image="/images/pages/news/ocean2.png" />
    </>
  );
}
