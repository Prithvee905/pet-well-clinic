import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import BookingCTA from '@/components/sections/BookingCTA';
import { services } from '@/data/services';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Veterinary Services – Petwell Clinic</title>
        <meta
          name="description"
          content="Explore Petwell Clinic's comprehensive veterinary services including vaccination, checkups, surgery, grooming, diagnostics, and emergency pet care."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.04]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/[0.03]" />
        </div>
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Veterinary Services
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              Comprehensive care for your pet's health, comfort, and happiness — all under one roof.
            </p>
            <div className="mt-5 h-1 w-16 rounded-full bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-bg-blush">
        <div className="container-main">
          <SectionHeading
            title="Everything Your Pet Needs"
            subtitle="From preventive care to emergency support, explore our full range of veterinary services."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
