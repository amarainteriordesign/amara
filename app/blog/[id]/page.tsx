export const revalidate = 300;

import Header from "@/components/layout/Header";
import ImageFooter from "@/components/layout/ImageFooter";
import InsideBlogSection from "@/components/pages/blog/InsideBlogSection";
import { fetchAllBlogs, fetchBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Blog, SerializedBlog } from "@/types/blog";
import OtherBlogs from "@/components/pages/blog/OtherBlogs";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const blog = await fetchBlogBySlug(id);

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
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
      title: "Blog Post",
      description: "Read our latest blog post.",
    };
  }
}

export default async function InsideBlog({ params }: BlogPageProps) {
  let blog: Blog | null = null;

  try {
    const { id } = await params;
    blog = await fetchBlogBySlug(id);
  } catch (error) {
    console.error("Failed to fetch blog from Firebase:", error);
  }

  // If blog doesn't exist, show 404 page
  if (!blog) {
    notFound();
  }

  // Convert Firebase Timestamps to plain objects for Client Components
  const serializedBlog: SerializedBlog = {
    ...blog,
    createdAt: blog.createdAt?.toDate?.()?.toISOString() || blog.createdAt.toString(),
    updatedAt: blog.updatedAt?.toDate?.()?.toISOString() || blog.updatedAt.toString(),
    publishedAt: blog.publishedAt?.toDate?.()?.toISOString() || blog.publishedAt?.toString(),
  };

  // Fetch all blogs except the current one
  const allBlogs = await fetchAllBlogs();
  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id);

  // Serialize related blogs to remove Firebase Timestamps
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

      <ImageFooter image={serializedBlog.footerImageUrl || "/images/pages/blog/ocean2.png"} />
    </>
  );
}
