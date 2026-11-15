import Navbar from "../components/Navbar"
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import ProjectSection from "@/components/Project/ProjectSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <ProjectSection />
    <ContactSection />
    <Footer />
    </>
  );
}
