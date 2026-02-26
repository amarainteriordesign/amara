import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { Blog } from "@/types/blog";

/**
 * Fetches all published blog articles from the Firestore 'blogs' collection
 * @returns Promise<Blog[]> - Array of all published blog articles
 */
export async function fetchAllBlogs(): Promise<Blog[]> {
  if (!db) {
    console.warn("Firebase not configured. Returning empty blogs.");
    return [];
  }
  try {
    const blogsRef = collection(db, "blogs");

    // First, let's try without ordering to see if we get any results
    const querySnapshot = await getDocs(blogsRef);

    const blogs: Blog[] = [];
    querySnapshot.forEach((doc) => {
      blogs.push({
        id: doc.id,
        ...doc.data(),
      } as Blog);
    });

    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs from Firestore");
  }
}

/**
 * Fetches a single blog article by ID from the Firestore 'blogs' collection
 * @param blogId - The ID of the blog to fetch
 * @returns Promise<Blog | null> - The blog data or null if not found
 */
export async function fetchBlogById(blogId: string): Promise<Blog | null> {
  if (!db) {
    console.warn("Firebase not configured. Cannot fetch blog.");
    return null;
  }
  try {
    const { doc, getDoc } = await import("firebase/firestore");
    const blogRef = doc(db, "blogs", blogId);
    const blogSnap = await getDoc(blogRef);

    if (blogSnap.exists()) {
      return {
        id: blogSnap.id,
        ...blogSnap.data(),
      } as Blog;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw new Error("Failed to fetch blog from Firestore");
  }
}

/**
 * Fetches a single blog article by slug from the Firestore 'blogs' collection
 * @param slug - The slug of the blog to fetch
 * @returns Promise<Blog | null> - The blog data or null if not found
 */
export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  if (!db) {
    console.warn("Firebase not configured. Cannot fetch blog.");
    return null;
  }
  try {
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, where("slug", "==", slug));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
      } as Blog;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw new Error("Failed to fetch blog from Firestore");
  }
}
