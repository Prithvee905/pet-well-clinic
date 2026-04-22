import { motion } from 'framer-motion';
import {
  Heart,
  Sparkles,
  ScanLine,
  CalendarCheck,
  PawPrint,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: Heart,
    title: 'Caring & Experienced Team',
    desc: 'Our dedicated veterinary team brings years of compassionate experience to every consultation.',
  },
  {
    icon: Sparkles,
    title: 'Clean & Pet-Friendly Clinic',
    desc: 'A hygienic, welcoming environment designed to keep your pet calm and comfortable.',
  },
  {
    icon: ScanLine,
    title: 'Advanced Diagnostics',
    desc: 'Modern imaging and diagnostic tools for accurate, timely health assessments.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Appointments',
    desc: 'Book online or call us — getting your pet the care they need has never been simpler.',
  },
  {
    icon: PawPrint,
    title: 'Personalized Attention',
    desc: 'Every pet is unique. We tailor our care to your pet\'s specific needs and personality.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="Why Pet Parents Choose Us"
          subtitle="Because every pet deserves expert care delivered with kindness and precision."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group p-6 rounded-2xl border border-border-soft bg-bg-blush hover:bg-white hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                <reason.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold text-text-dark mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
