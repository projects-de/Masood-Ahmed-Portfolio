import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
