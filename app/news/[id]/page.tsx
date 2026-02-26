export const revalidate = 300;

import Header from "@/components/layout/Header";
import ImageFooter from "@/components/layout/ImageFooter";
import InsideBlogSection from "@/components/pages/news/InsideBlogSection";
import { fetchAllBlogs, fetchBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Blog, SerializedBlog } from "@/types/blog";
import OtherBlogs from "@/components/pages/news/OtherBlogs";
import type { Metadata } from "next";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const blog = await fetchBlogBySlug(id);

    if (!blog) {
      return {
        title: "Article Not Found",
        description: "The requested article could not be found.",
      };
    }

    return {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription,
        images: [
          {
            url: blog.heroImageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription,
        images: [blog.heroImageUrl],
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "News Article",
      description: "Read our latest news article.",
    };
  }
}

export default async function InsideNews({ params }: NewsPageProps) {
  let blog: Blog | null = null;

  try {
    const { id } = await params;
    blog = await fetchBlogBySlug(id);
  } catch (error) {
    console.error("Failed to fetch article from Firebase:", error);
  }

  if (!blog) {
    notFound();
  }

  const serializedBlog: SerializedBlog = {
    ...blog,
    createdAt: blog.createdAt?.toDate?.()?.toISOString() || blog.createdAt.toString(),
    updatedAt: blog.updatedAt?.toDate?.()?.toISOString() || blog.updatedAt.toString(),
    publishedAt: blog.publishedAt?.toDate?.()?.toISOString() || blog.publishedAt?.toString(),
  };

  const allBlogs = await fetchAllBlogs();
  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id);

  const serializedRelatedBlogs: SerializedBlog[] = relatedBlogs.map((blog) => ({
    ...blog,
    createdAt: blog.createdAt?.toDate?.()?.toISOString() || blog.createdAt.toString(),
    updatedAt: blog.updatedAt?.toDate?.()?.toISOString() || blog.updatedAt.toString(),
    publishedAt: blog.publishedAt?.toDate?.()?.toISOString() || blog.publishedAt?.toString(),
  }));

  return (
    <>
      <Header />

      <InsideBlogSection blog={serializedBlog} />

      <OtherBlogs blogs={serializedRelatedBlogs} />

      <ImageFooter image={serializedBlog.footerImageUrl || "/images/pages/news/ocean2.webp"} />
    </>
  );
}
