import { Routes, Route } from "react-router-dom";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import DataDeletion from "./components/DataDeletion";

import SEO from "./components/SEO";
import StickyHeader from "./components/StickyHeader";
import StickyFooter from "./components/StickyFooter";

import Hero from "./sections/Hero";
import WhyAI from "./sections/WhyAI";
import Countdown from "./sections/Countdown";
import Curriculum from "./sections/Curriculum";
import Projects from "./sections/Projects";
import Trainer from "./sections/Trainer";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

import FloatingCall from "./components/FloatingCall";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import LeadPopup from "./components/LeadPopup";

function HomePage() {
  return (
    <>
      <SEO />
      <StickyHeader />

      <Hero />
      <WhyAI />
      <Countdown />
      <Curriculum />
      <Projects />
      <Trainer />
      <Testimonials />
      <FAQ />
      <Contact />

      <FloatingCall />
      <FloatingWhatsapp />
      <StickyFooter />
      <LeadPopup />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms-and-conditions"
        element={<TermsConditions />}
      />

      <Route
        path="/data-deletion"
        element={<DataDeletion />}
      />
    </Routes>
  );
}

export default App;