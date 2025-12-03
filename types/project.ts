import { Timestamp } from "firebase/firestore";

export interface Project {
  id: string;
  createdAt: Timestamp;
  description: string;
  description2: string;
  designDescription: string;
  designSubtitle: string;
  designTitle: string;
  footerFullWidthImageUrl: string;
  fullWidthImageUrl: string;
  halfImage1Subtext: string;
  halfImage1Text: string;
  halfImage1Url: string;
  halfImage2Subtext: string;
  halfImage2Text: string;
  halfImage2Url: string;
  isSoon: boolean;
  location: string;
  mainImageUrl: string;
  previewImageUrl: string;
  secondFullWidthImageUrl: string;
  secondHalfImage1Text: string;
  secondHalfImage1Url: string;
  secondHalfImage2Text: string;
  secondHalfImage2Url: string;
  secondImageUrl: string;
  threeImages1Url: string;
  threeImages2Url: string;
  threeImages3Url: string;
  title: string;
  updatedAt: Timestamp;
}
