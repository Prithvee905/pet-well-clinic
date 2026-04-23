import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import SmoothScroll from '@/components/layout/SmoothScroll';

import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import BookAppointment from '@/pages/BookAppointment';
import Contact from '@/pages/Contact';

import FloatingActions from '@/components/ui/FloatingActions';
import AutoBookingModal from '@/components/ui/AutoBookingModal';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/book" element={<BookAppointment />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <AutoBookingModal />
            <FloatingActions />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  );
}
