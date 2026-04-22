import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Programas from "@/components/Programas";
import Beneficios from "@/components/Beneficios";
import Testimonios from "@/components/Testimonios";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ComoFunciona />
      <Programas />
      <Beneficios />
      <Testimonios />
      <CTA />
      <Footer />
    </main>
  );
}