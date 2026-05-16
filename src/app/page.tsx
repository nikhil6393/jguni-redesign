import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import CampusLife from "@/components/CampusLife";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Features />
      <CampusLife />
      <Research />
      <Testimonials />
      <Footer />
    </main>
  );
}
