// Revalidate every 300 seconds (5 minute)
export const revalidate = 300;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/pages/projects/Hero";
import Quote from "@/components/pages/projects/Quote";
import Contact from "@/components/common/Contact";
import Gallery from "@/components/pages/projects/Gallery";
import DiscoverProjects from "@/components/pages/projects/DiscoverProjects";
import { fetchAllProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Amara Interior Design",
  description:
    "Explore Amara Interior Design projects worldwide. Luxury residential & hospitality interiors in Miami, Dubai and beyond.",
  alternates: {
    canonical: "/projects",
  },
};

export default async function Projects() {
  let projects: Project[] = [];

  try {
    projects = await fetchAllProjects();
  } catch (error) {
    console.error("Failed to fetch projects from Firebase:", error);
  }

  // Gallery shows every active project; the layout extends in 4-tile batches.
  const galleryProjects = projects.filter((p) => !p.isSoon);

  // "Unfold the story" still only shows coming-soon projects, capped at 3.
  const discoverProjects = projects.filter((p) => p.isSoon).slice(0, 3);

  return (
    <>
      <Header />

      <Hero />

      <Quote />

      <Gallery projects={galleryProjects} />

      <DiscoverProjects projects={discoverProjects} />

      <Contact />

      <Footer />
    </>
  );
}
