export const revalidate = 300;

import Header from "@/components/layout/Header";
import ImageFooter from "@/components/layout/ImageFooter";
import Hero from "@/components/pages/blog/Hero";
import Contact from "@/components/common/Contact";
import MainSection from "@/components/pages/blog/MainSection";
import { fetchAllBlogs } from "@/lib/blog";
import type { SerializedBlog } from "@/types/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, inspiration, and stories about luxury interior design, architecture, and procurement by Amara Interior Design. Trends from Miami, Dubai, and Paris.",
};

export default async function Blog() {
  // Fetch all blog articles from Firebase
  const blogs = await fetchAllBlogs();

  // Serialize blogs to remove Firebase Timestamps
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

      <ImageFooter image="/images/pages/blog/ocean2.png" />
    </>
  );
}
