import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import WarningMarquee from './components/WarningMarquee';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

function LandingPage() {
  return (
    <>
      <Hero />
      <WarningMarquee />
      <Features />
      <Timeline />
      <Testimonials />
      <CTASection />
      <Footer />
      <StickyMobileBar />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-txt overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<><Privacy /><Footer /></>} />
          <Route path="/terms" element={<><Terms /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
