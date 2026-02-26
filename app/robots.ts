import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amarainteriordesign.com";

  let disallow: string[] = [];
  try {
    const { fetchAllProjects } = await import("@/lib/projects");
    const projects = await fetchAllProjects();
    disallow = (projects || []).filter((p) => p.isSoon).map((p) => `/projects/${p.id}`);
  } catch {
    // If Firestore is unreachable, fall back to no project disallow rules
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
