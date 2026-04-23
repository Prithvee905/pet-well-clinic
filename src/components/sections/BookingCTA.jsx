import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark" />
      {/* Decorative paws */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PawPrint className="absolute top-[10%] right-[5%] w-16 h-16 text-white/[0.06] rotate-12" />
        <PawPrint className="absolute bottom-[15%] left-[8%] w-12 h-12 text-white/[0.05] -rotate-12" />
        <PawPrint className="absolute top-[50%] right-[20%] w-8 h-8 text-white/[0.04] rotate-45" />
      </div>

      <div className="container-main relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-4 leading-tight">
            Give Your Pet the Care <br className="hidden sm:block" />
            They Deserve
          </h2>
          <p className="!text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8">
            Schedule a visit at Petwell Clinic and experience compassionate,
            expert veterinary care for your beloved companion.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Button to="/book" variant="white" size="lg">
              Schedule a Visit
            </Button>
            <Button
              href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
