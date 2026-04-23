import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Programas from "@/components/Programas";
import Beneficios from "@/components/Beneficios";
import Testimonios from "@/components/Testimonios";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="inicio"><Hero /></section>
      <section id="como-funciona"><ComoFunciona /></section>
      <section id="programas"><Programas /></section>
      <section id="beneficios"><Beneficios /></section>
      <section id="testimonios"><Testimonios /></section>
      <section id="contacto"><CTA /></section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
