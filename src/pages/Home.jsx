import PageTransition from "../components/PageTransition";

import Hero from "../components/Hero";
import NewCollection from "../components/NewCollection";
import ColorSection from "../components/ColorSection";
import Discover from "../components/Discover";
import Highlights from "../components/Highlights";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import RecentlyViewed from "../components/RecentlyViewed";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <PageTransition>
      <SEO title="MAVILA — Street Luxury" description="MAVILA Street Luxury. Design premium, conforto e identidade urbana." />
      <Hero />
      <NewCollection />
      <ColorSection />
      <Discover />
      <Highlights />
      <Experience />
      <RecentlyViewed />
      <Newsletter />
      <Footer />
    </PageTransition>
  );
}