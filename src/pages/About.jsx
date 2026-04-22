import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Heart,
  Sparkles,
  Award,
  Shield,
  Users,
  PawPrint,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    desc: 'Every animal is treated with gentleness and respect, as if they were our own.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    desc: 'Honest communication about your pet\'s health, treatment options, and costs.',
  },
  {
    icon: Sparkles,
    title: 'Modern & Clean',
    desc: 'A hygienic, well-equipped clinic that meets the highest standards of care.',
  },
];

const trustReasons = [
  { icon: Award, label: 'Experienced & Qualified' },
  { icon: Users, label: 'Family-Friendly' },
  { icon: PawPrint, label: 'Pet-First Approach' },
  { icon: Heart, label: 'Genuine Care' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Petwell Clinic – Meet Dr. Swathi</title>
        <meta
          name="description"
          content="Learn about Petwell Clinic and Dr. Swathi's compassionate approach to veterinary care. Discover our philosophy, values, and commitment to your pet's well-being."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <PawPrint className="absolute top-[15%] right-[10%] w-12 h-12 text-white/[0.05] rotate-12" />
          <PawPrint className="absolute bottom-[20%] left-[8%] w-10 h-10 text-white/[0.04] -rotate-12" />
        </div>
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About Petwell Clinic
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              Where compassionate veterinary care meets modern expertise.
            </p>
            <div className="mt-5 h-1 w-16 rounded-full bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* About Dr. Swathi */}
      <section className="section-padding bg-bg-blush">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] max-w-[420px] mx-auto rounded-[2rem] overflow-hidden border-2 border-white shadow-xl">
                <img
                  src="/images/doctor-swathi.png"
                  alt="Dr. Swathi - Veterinary Surgeon & Founder of Petwell Clinic"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-2 md:right-6 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border-soft flex items-center gap-2"
              >
                <Award className="w-5 h-5 text-accent" />
                <span className="text-xs font-semibold text-text-dark">
                  Experienced Veterinarian
                </span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SectionHeading
                title="Meet Dr. Swathi"
                subtitle="Founder & Lead Veterinarian"
                centered={false}
              />

              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Dr. Swathi has dedicated her career to ensuring every pet
                  receives gentle, expert medical care. With a deep
                  understanding of animal health and a genuine love for animals,
                  she founded Petwell Clinic to create a space where pets feel
                  safe and their owners feel confident.
                </p>
                <p>
                  Her clinical approach blends modern veterinary science with a
                  compassionate touch. Whether it's a routine vaccination, a
                  complex diagnostic procedure, or an emergency situation, Dr.
                  Swathi treats every case with the same dedication and
                  attention to detail.
                </p>
                <p>
                  Beyond clinical expertise, Dr. Swathi believes in building
                  lasting relationships with pet families. She takes the time to
                  explain every condition, discuss all treatment options, and
                  ensure that pet parents are always informed and comfortable
                  with the care plan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            title="Our Philosophy"
            subtitle="At Petwell Clinic, we believe that exceptional veterinary care is built on three pillars."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-bg-blush border border-border-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-bg-blush">
        <div className="container-main">
          <SectionHeading
            title="Why Pet Parents Trust Us"
            subtitle="Petwell Clinic is built on a foundation of trust, expertise, and genuine care."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustReasons.map((reason, i) => (
              <motion.div
                key={reason.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 text-center border border-border-soft shadow-[var(--shadow-card)]"
              >
                <reason.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-text-dark">
                  {reason.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/book" size="lg">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
