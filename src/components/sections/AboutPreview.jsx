import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Stethoscope } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const stats = [
  { icon: Heart, label: 'Trusted Pet Care', value: '1000+' },
  { icon: Stethoscope, label: 'Compassionate Consults', value: '5000+' },
  { icon: Sparkles, label: 'Modern Clinic Support', value: '100%' },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-bg-blush">
      <div className="container-main">
        {/* Mobile Heading */}
        <div className="lg:hidden">
          <SectionHeading
            title="Meet Dr. Swathi"
            subtitle="Dedicated to the well-being of every pet that walks through our doors."
            centered={false}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Doctor Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-[400px] mx-auto rounded-[2rem] overflow-hidden border-2 border-white shadow-xl">
              <img
                src="/images/doctor-swathi.png"
                alt="Dr. Swathi - Veterinary Surgeon at Petwell Clinic"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 md:right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border-soft flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold text-text-dark">
                Friendly Neighborhood Care
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Desktop Heading */}
            <div className="hidden lg:block">
              <SectionHeading
                title="Meet Dr. Swathi"
                subtitle="Dedicated to the well-being of every pet that walks through our doors."
                centered={false}
              />
            </div>

            <p className="text-text-muted leading-relaxed mb-4">
              With years of compassionate veterinary experience, Dr. Swathi
              founded Petwell Clinic with a simple mission — to provide gentle,
              expert medical care that every pet deserves. Her approach combines
              clinical precision with genuine warmth, making every visit a
              comfortable experience for both pets and their parents.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              From routine wellness checkups to complex diagnostics, Dr. Swathi
              and her team ensure that your beloved companions receive
              personalized attention and the highest standard of veterinary
              support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 rounded-xl bg-white border border-border-soft"
                >
                  <stat.icon className={`w-5 h-5 mx-auto mb-1.5 ${i === 1 ? 'text-sea-blue' : 'text-secondary'}`} />
                  <p className="text-lg font-bold text-text-dark">{stat.value}</p>
                  <p className="text-[11px] text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
