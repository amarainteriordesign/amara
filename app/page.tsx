import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Studio from "@/components/pages/home/Studio";
import Projects from "@/components/pages/home/Projects";
import ImageFooter from "@/components/layout/ImageFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Amara imagine des espaces d’architecture et d’intérieur où le calme, la matière et la lumière composent des lieux à vivre durables.",
};

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Studio />

      <Services />

      <Projects />

      <ImageFooter addDarkHeader={true} image="/images/pages/home/footer.png" />
    </>
  );
}
