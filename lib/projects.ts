import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import { Project } from "@/types/project";

/**
 * Fetches all projects from the Firestore 'projects' collection
 * @returns Promise<Project[]> - Array of all projects
 */
export async function fetchAllProjects(): Promise<Project[]> {
  if (!db) {
    console.warn("Firebase not configured. Returning empty projects.");
    return [];
  }
  try {
    const projectsRef = collection(db, "projects");

    // Create a query to order projects by createdAt timestamp (newest first)
    const q = query(projectsRef, orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(q);

    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data(),
      } as Project);
    });

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects from Firestore");
  }
}

/**
 * Fetches a single project by ID from the Firestore 'projects' collection
 * @param projectId - The ID of the project to fetch
 * @returns Promise<Project | null> - The project data or null if not found
 */
export async function fetchProjectById(projectId: string): Promise<Project | null> {
  if (!db) {
    console.warn("Firebase not configured. Cannot fetch project.");
    return null;
  }
  try {
    const { doc, getDoc } = await import("firebase/firestore");
    const projectRef = doc(db, "projects", projectId);
    const projectSnap = await getDoc(projectRef);

    if (projectSnap.exists()) {
      return {
        id: projectSnap.id,
        ...projectSnap.data(),
      } as Project;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Failed to fetch project from Firestore");
  }
}
