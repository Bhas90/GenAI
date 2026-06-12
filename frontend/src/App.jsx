import FloatingCall from "./components/FloatingCall";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import LeadPopup from "./components/LeadPopup";
import SEO from "./components/SEO";
import StickyFooter from "./components/StickyFooter";
import StickyHeader from "./components/StickyHeader";
import Contact from "./sections/Contact";
import Countdown from "./sections/Countdown";
import Curriculum from "./sections/Curriculum";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Trainer from "./sections/Trainer";
import WhyAI from "./sections/WhyAI";


function App() {
  return (
    <>
    <SEO/>
      <StickyHeader />
      <Hero />
      <WhyAI/>
      <Countdown/>
      <Curriculum/>
      <Projects/>
      <Trainer/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <FloatingCall/>
      <FloatingWhatsapp/>
      <StickyFooter/>
      <LeadPopup/>
    </>
  );
}

export default App;