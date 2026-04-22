import { motion } from 'framer-motion';
import { Phone, PawPrint, Stethoscope, ScanLine, Heart, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { clinicInfo } from '@/data/siteConfig';

const badges = [
  { icon: Stethoscope, label: 'Experienced Care' },
  { icon: ScanLine, label: 'Modern Diagnostics' },
  { icon: Heart, label: 'Friendly Support' },
  { icon: ShieldCheck, label: 'Emergency Help' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-bg-blush pt-[80px]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft circle */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.04]" />
        <div className="absolute -bottom-[15%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/[0.05] to-primary/[0.03]" />
        {/* Paw prints scatter */}
        <PawPrint className="absolute top-[15%] right-[8%] w-8 h-8 text-primary/[0.07] rotate-12" />
        <PawPrint className="absolute top-[60%] left-[5%] w-6 h-6 text-primary/[0.06] -rotate-12" />
        <PawPrint className="absolute bottom-[25%] right-[15%] w-10 h-10 text-primary/[0.05] rotate-45" />
        <Heart className="absolute top-[25%] left-[12%] w-5 h-5 text-primary/[0.06]" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Clinic badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 bg-white rounded-full px-5 py-2.5 mb-8 border border-border-soft shadow-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-soft" />
              <span className="text-[13px] font-semibold text-text-muted uppercase tracking-wider">
                Accepting New Patients
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-text-dark leading-[1.12] mb-5">
              Compassionate{' '}
              <span className="text-primary">Veterinary Care</span>{' '}
              for Every Paw
            </h1>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-8">
              {clinicInfo.name} offers trusted veterinary consultations,
              diagnostics, grooming, and emergency support for your beloved
              pets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full max-w-sm sm:max-w-none">
              <Button to="/book" size="lg" className="w-full sm:w-auto">
                Book Appointment
              </Button>
              <Button
                href={`tel:${clinicInfo.phone}`}
                variant="secondary"
                size="lg"
                icon={Phone}
                className="w-full sm:w-auto"
              >
                Call Now
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-border-soft shadow-sm hover:border-primary/30 transition-colors"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-[13px] font-semibold text-text-dark">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-full">
              {/* Main Image Card */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/4] rounded-[2rem] overflow-hidden border-2 border-white shadow-xl">
                <img
                  src="/images/doctor-swathi.png"
                  alt="Dr. Swathi - Veterinarian at Petwell Clinic"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/40 to-transparent" />
              </div>

              {/* Floating accent cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border-soft flex items-center gap-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-dark">1000+</p>
                  <p className="text-[10px] text-text-muted">Happy Pets</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-3 -right-3 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border-soft flex items-center gap-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-dark">Trusted</p>
                  <p className="text-[10px] text-text-muted">Verified Care</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
