import PageTransition from "../components/PageTransition";

import Hero from "../components/Hero";
import NewCollection from "../components/NewCollection";
import ColorSection from "../components/ColorSection";
import Discover from "../components/Discover";
import Highlights from "../components/Highlights";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <NewCollection />
      <ColorSection />
      <Discover />
      <Highlights />
      <Experience />
      <Footer />
    </PageTransition>
  );
}