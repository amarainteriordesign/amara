export const revalidate = 300;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pages/news/Hero";
import Contact from "@/components/common/Contact";
import MainSection from "@/components/pages/news/MainSection";
import { fetchAllBlogs } from "@/lib/blog";
import type { SerializedBlog } from "@/types/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Amara Interior Design",
  description:
    "Insights and inspiration on luxury interior design, architecture and procurement by Amara. Design trends from Miami, Dubai & Paris.",
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

      <Footer />
    </>
  );
}
