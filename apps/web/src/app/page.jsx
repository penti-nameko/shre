import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TrustedBy from "../components/TrustedBy";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#121212]">
      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* TRUSTED BY SECTION */}
      <TrustedBy />

      {/* FEATURES SECTION */}
      <Features />

      {/* STATISTICS SECTION */}
      <Statistics />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}