import Header from "@/components/layout/Header";
import Hero from "@/components/pages/philosophy/Hero";
import ImageFooter from "@/components/layout/ImageFooter";
import Design from "@/components/pages/philosophy/Design";
import Moments from "@/components/pages/philosophy/Moments";
import Quote from "@/components/pages/philosophy/Quote";
import Build from "@/components/pages/philosophy/Build";
import Rhythm from "@/components/pages/philosophy/Rhythm";
import Contact from "@/components/common/Contact";
import ExpandingImage from "@/components/common/ExpandingImage";
import Principles from "@/components/pages/philosophy/Principles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophie",
  description:
    "Notre approche place l’écoute, la matière et la lumière au cœur du projet. Découvrez la philosophie d’Amara et les principes qui guident notre design.",
};

export default function Philosophy() {
  return (
    <>
      <Header isDark={true} />

      <div className="w-full bg-[#1A1A1E]">
        <Hero />

        <Design />

        <ExpandingImage
          linkTo="/studio"
          quote="Before drawing lines or choosing textures, we listen. To your story, your rhythm, your
        needs. The best design feels right because it comes from something true. From that truth, we
        shape spaces that carry meaning, where every line follows a purpose, and every material
        choice speaks softly of who you are."
        />

        <Moments />

        <Quote />

        <Build />

        <Rhythm />

        <Principles />

        <Contact />

        <ImageFooter
          isDarkHeaderByDefault={true}
          addDarkHeader={true}
          image="/images/pages/philosophy/footer.png"
        />
      </div>
    </>
  );
}
