import React, { useEffect } from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/CountdownSection";
import CeremonySection from "./components/CeremonySection";
import EventsSection from "./components/EventsSection";
import KnowUsSection from "./components/KnowUsSection";
import GallerySection from "./components/GallerySection";
import VenueSection from "./components/VenueSection";
import RSVPSection from "./components/RSVPSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WishesSection from "./components/WishesSection";
import FamiliesSection from "./components/FamiliesSection";
import FamilyPage from "./components/FamilyPage";
import { weddingData } from "./data/mock";

const Home = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection couple={weddingData.couple} />
      <CountdownSection weddingDate={weddingData.weddingDate} />
      <CeremonySection 
        couple={weddingData.couple} 
        weddingDate={weddingData.weddingDate}
        venue={weddingData.venue}
      />
      <EventsSection events={weddingData.events} />
      <KnowUsSection couple={weddingData.couple} />
      <FamiliesSection families={weddingData.familiesDetailed} />
      <GallerySection images={weddingData.gallery} />
      <VenueSection venue={weddingData.venue} />
      <RSVPSection families={weddingData.families} />
      <ContactSection 
        invitee={weddingData.invitee}
        firm={weddingData.firm}
      />
      <WishesSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family/:side" element={<FamilyPage families={weddingData.familiesDetailed} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
