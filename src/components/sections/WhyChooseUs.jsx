import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Sparkles,
  ScanLine,
  CalendarCheck,
  PawPrint,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  {
    icon: Heart,
    title: 'Caring & Experienced Team',
    desc: 'Our dedicated veterinary team brings years of compassionate experience to every consultation.',
  },
  {
    icon: ClipboardCheck,
    title: 'Evidence Based Pet Care',
    desc: 'We follow the latest veterinary research and evidence-based protocols to ensure the best outcomes for your pet.',
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector(':first-child')?.offsetWidth || 280;
    const scrollAmount = direction === 'left' ? -(cardWidth + 20) : (cardWidth + 20);
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="flex items-end justify-between mb-2">
          <SectionHeading
            title="Why Pet Parents Choose Us"
            subtitle="Because every pet deserves expert care delivered with kindness and precision."
            centered={false}
          />
          {/* Scroll arrows — desktop */}
          <div className="hidden md:flex items-center gap-2 mb-6">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-border-soft flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-border-soft flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-5 md:px-8 lg:px-[calc((100vw-1200px)/2+1.25rem)] scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {reasons.map((reason, i) => (
          <div
            key={reason.title}
            className="flex-shrink-0 w-[220px] sm:w-[260px] lg:w-[280px] snap-start"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group p-6 rounded-2xl border border-border-soft bg-bg-blush hover:bg-white hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full"
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
          </div>
        ))}
      </div>
    </section>
  );
}

