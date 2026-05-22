import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Modules from "@/components/Modules";
import FirstMinute from "@/components/FirstMinute";
import IMGateway from "@/components/IMGateway";
import Architecture from "@/components/Architecture";
import RevenueModel from "@/components/RevenueModel";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Pillars />
        <FirstMinute />
        <IMGateway />
        <Modules />
        <Architecture />
        <RevenueModel />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
