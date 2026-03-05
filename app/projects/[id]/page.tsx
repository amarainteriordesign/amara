export const revalidate = 300;

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Contact from "@/components/common/Contact";
import Hero from "@/components/pages/project/Hero";
import Gallery from "@/components/pages/project/Gallery";
import Philosophy from "@/components/pages/projects/Philosophy";
import { fetchProjectById } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Project } from "@/types/project";
import CarouselGallery from "@/components/pages/projects/CarouselGallery";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const project = await fetchProjectById(id);

    if (!project || project.isSoon) {
      return {
        title: "Project Unavailable",
        description: "This project is not currently available.",
      };
    }

    const title = project.title;
    const description =
      project.designDescription ||
      project.description ||
      project.description2 ||
      "An interior design project by Amara.";
    const image =
      project.previewImageUrl || project.mainImageUrl || project.fullWidthImageUrl || undefined;

    return {
      title,
      description,
      alternates: {
        canonical: `/projects/${id}`,
      },
      openGraph: {
        title,
        description,
        images: image
          ? [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch (error) {
    console.error("Failed to generate project metadata:", error);
    return {
      title: "Project",
      description: "Discover an interior design project by Amara.",
    };
  }
}

export default async function Project({ params }: ProjectPageProps) {
  let project: Project | null = null;

  try {
    const { id } = await params;
    project = await fetchProjectById(id);
  } catch (error) {
    console.error("Failed to fetch project from Firebase:", error);
  }

  // If project doesn't exist OR is marked as coming soon, show 404 page
  if (!project || project.isSoon) {
    notFound();
  }

  // Convert Firebase Timestamps to plain objects for Client Components
  const serializedProject = {
    ...project!,
    createdAt: project.createdAt?.toDate?.()?.toISOString() || project.createdAt,
    updatedAt: project.updatedAt?.toDate?.()?.toISOString() || project.updatedAt,
  } as Project;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amarainteriordesign.com";
  const projectUrl = `${siteUrl}/projects/${project.id}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <Hero project={serializedProject} />

      <Gallery project={serializedProject} />

      <CarouselGallery project={serializedProject} />

      <Philosophy project={serializedProject} />

      <Contact />

      <Footer />
    </>
  );
}
