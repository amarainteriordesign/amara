// Revalidate every 300 seconds (5 minute)
export const revalidate = 300;

import Header from "@/components/layout/Header";
import ImageFooter from "@/components/layout/ImageFooter";
import Hero from "@/components/pages/projects/Hero";
import Quote from "@/components/pages/projects/Quote";
import Contact from "@/components/common/Contact";
import Gallery from "@/components/pages/projects/Gallery";
import DiscoverProjects from "@/components/pages/projects/DiscoverProjects";
import { fetchAllProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Amara Interior Design projects worldwide. Luxury residential and hospitality interiors featuring authentic materials, natural light, and bespoke procurement in Miami, Dubai, and beyond.",
};

export default async function Projects() {
  let projects: Project[] = [];

  try {
    projects = await fetchAllProjects();
  } catch (error) {
    console.error("Failed to fetch projects from Firebase:", error);
  }

  // Sort projects: active first (isSoon: false), then coming soon (isSoon: true)
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.isSoon === b.isSoon) return 0;
    return a.isSoon ? 1 : -1;
  });

  // Allocate projects to sections
  // Gallery gets first 5 projects (active + coming soon if needed)
  const galleryProjects = sortedProjects.slice(0, 5);

  // DiscoverProjects gets remaining coming soon projects (not already in gallery)
  const usedProjectIds = new Set(galleryProjects.map((p) => p.id));
  const discoverProjects = sortedProjects
    .filter((p) => p.isSoon && !usedProjectIds.has(p.id))
    .slice(0, 3);

  return (
    <>
      <Header isDark={true} />

      <Hero />

      <Quote />

      <Gallery projects={galleryProjects} />

      <DiscoverProjects projects={discoverProjects} />

      <Contact />

      <ImageFooter isDarkHeaderByDefault={true} image="/images/pages/home/hero-2.png" />
    </>
  );
}
