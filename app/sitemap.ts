import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const toDateSafe = (v: unknown): Date => {
    const maybe = v as { toDate?: () => Date } | Date | undefined;
    if (maybe && typeof (maybe as { toDate?: () => Date }).toDate === "function") {
      return (maybe as { toDate: () => Date }).toDate();
    }
    if (maybe instanceof Date) return maybe;
    return new Date();
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const { fetchAllProjects } = await import("@/lib/projects");
    const { fetchAllBlogs } = await import("@/lib/blog");
    const projects = await fetchAllProjects();
    const blogs = await fetchAllBlogs();

    const projectEntries: MetadataRoute.Sitemap = (projects || [])
      .filter((p) => !p.isSoon) // exclude coming soon
      .map((p) => ({
        url: `${baseUrl}/projects/${p.id}`,
        lastModified: toDateSafe(p.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }));

    const blogEntries: MetadataRoute.Sitemap = (blogs || []).map((b) => ({
      url: `${baseUrl}/blog/${b.slug || b.id}`,
      lastModified: toDateSafe(b.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

    dynamicRoutes = [...projectEntries, ...blogEntries];
  } catch (e) {
    // Firestore may be offline locally; continue with static routes only
  }

  return [...staticRoutes, ...dynamicRoutes];
}
