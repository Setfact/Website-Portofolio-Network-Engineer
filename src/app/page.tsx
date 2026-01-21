import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NetworkGrid from "@/components/ui/NetworkGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated Network Background */}
      <NetworkGrid />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Hero />

      {/* Section Divider */}
      <div className="section-divider" />

      <About />

      <div className="section-divider" />

      <Skills />

      <div className="section-divider" />

      <Projects />

      <div className="section-divider" />

      <Achievements />

      <div className="section-divider" />

      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
