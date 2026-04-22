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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-bg-blush pt-[80px] pb-6 lg:pb-0">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.06] to-accent/[0.04]" />
        <div className="absolute -bottom-[15%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/[0.05] to-primary/[0.03]" />
        <PawPrint className="absolute top-[15%] right-[8%] w-8 h-8 text-primary/[0.07] rotate-12" />
        <PawPrint className="absolute top-[60%] left-[5%] w-6 h-6 text-primary/[0.06] -rotate-12" />
        <PawPrint className="absolute bottom-[25%] right-[15%] w-10 h-10 text-primary/[0.05] rotate-45" />
        <Heart className="absolute top-[25%] left-[12%] w-5 h-5 text-primary/[0.06]" />
      </div>

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center gap-6">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Clinic badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-5 border border-border-soft shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
              <span className="text-[12px] font-semibold text-text-muted uppercase tracking-wider">
                Accepting New Patients
              </span>
            </motion.div>

            <h1 className="text-[2rem] sm:text-4xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-text-dark leading-[1.15] mb-4">
              Compassionate{' '}
              <span className="text-primary">Veterinary Care</span>{' '}
              for Every Paw
            </h1>

            <p className="text-[15px] sm:text-lg text-text-muted leading-relaxed max-w-xl mb-5 lg:mb-8">
              {clinicInfo.name} offers trusted veterinary consultations,
              diagnostics, grooming, and emergency support for your beloved
              pets.
            </p>

            {/* CTA Buttons — desktop only */}
            <div className="hidden lg:flex flex-row items-center gap-4 mb-8">
              <Button to="/book" size="md">
                Book Appointment
              </Button>
              <Button
                href={`tel:${clinicInfo.phone}`}
                variant="secondary"
                size="md"
                icon={Phone}
              >
                Call Now
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2.5">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border-soft shadow-sm"
                >
                  <badge.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-[11px] sm:text-[12px] font-semibold text-text-dark whitespace-nowrap">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-full">
              {/* Main Image Card */}
              <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden border-2 border-white shadow-xl bg-gradient-to-b from-primary/5 to-accent/5">
                <img
                  src="/images/doctor-swathi.png"
                  alt="Dr. Swathi - Veterinarian at Petwell Clinic"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>

              {/* Floating accent cards */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-2 sm:-left-4 bg-white rounded-xl px-3 py-2 shadow-lg border border-border-soft flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary fill-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-dark">1000+</p>
                  <p className="text-[9px] text-text-muted">Happy Pets</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-2 -right-2 sm:-right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-border-soft flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-dark">Trusted</p>
                  <p className="text-[9px] text-text-muted">Verified Care</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons — mobile only, below image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="lg:hidden flex flex-row items-center justify-center gap-3"
          >
            <Button to="/book" size="sm">
              Book Appointment
            </Button>
            <Button
              href={`tel:${clinicInfo.phone}`}
              variant="secondary"
              size="sm"
              icon={Phone}
            >
              Call Now
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
