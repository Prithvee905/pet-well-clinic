import { Helmet } from 'react-helmet-async';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import AboutPreview from '@/components/sections/AboutPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Testimonials from '@/components/sections/Testimonials';
import BookingCTA from '@/components/sections/BookingCTA';
import ContactPreview from '@/components/sections/ContactPreview';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Petwell Clinic – Compassionate Veterinary Care for Every Paw</title>
        <meta
          name="description"
          content="Petwell Clinic offers trusted veterinary consultations, vaccinations, diagnostics, grooming, and emergency pet care. Book your visit today for compassionate care."
        />
      </Helmet>

      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <BookingCTA />
      <ContactPreview />
    </>
  );
}
