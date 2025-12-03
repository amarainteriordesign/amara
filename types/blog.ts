import { Timestamp } from "firebase/firestore";

export interface Blog {
  // Document ID from Firestore
  id: string;

  // Preview Section
  previewImageUrl: string;
  previewDescription: string;
  previewTitle: string;

  // SEO Management
  metaUrl: string;
  metaTitle: string;
  metaDescription: string;

  // Blog Content
  heroImageUrl: string;
  title: string;
  description1: string;
  description1Title: string;
  description2: string;
  description2Title: string;
  image1Url: string;
  secondDescription1: string;
  secondDescription1Title: string;
  secondDescription2: string;
  secondDescription2Title: string;
  footerImageUrl: string;

  // System Fields
  slug: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt?: Timestamp; // Optional field
}

// Serialized version for Client Components (with string dates instead of FirestoreTimestamps)
export interface SerializedBlog extends Omit<Blog, "createdAt" | "updatedAt" | "publishedAt"> {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}
