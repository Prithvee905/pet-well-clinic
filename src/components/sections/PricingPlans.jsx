import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, Stethoscope, Scissors, HeartPulse } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const plans = [
  {
    icon: Stethoscope,
    name: 'Doctor Consultation',
    price: 399,
    originalPrice: 599,
    tag: 'Most Popular',
    features: [
      'Complete health assessment',
      'Diet & nutrition advice',
      'Vaccination guidance',
      'Follow-up support',
    ],
  },
  {
    icon: Scissors,
    name: 'Grooming & Bathing',
    price: 899,
    originalPrice: 1200,
    tag: 'Best Value',
    features: [
      'Full body bath & blow dry',
      'Nail cutting & filing',
      'Ear cleaning',
      'Coat brushing & styling',
    ],
  },
  {
    icon: HeartPulse,
    name: 'Full Health Checkup',
    price: 1299,
    originalPrice: 1800,
    tag: 'Comprehensive',
    features: [
      'Complete physical exam',
      'Blood work & diagnostics',
      'Ultrasound screening',
      'Detailed health report',
      'Personalized care plan',
    ],
  },
];

export default function PricingPlans() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector(':first-child')?.offsetWidth || 300;
    const scrollAmount = direction === 'left' ? -(cardWidth + 20) : (cardWidth + 20);
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="flex items-end justify-between mb-2">
          <SectionHeading
            title="Our Care Plans"
            subtitle="Affordable, transparent pricing so your pet gets the best care without surprises."
            centered={false}
          />
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

      {/* Horizontal scrolling cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-5 md:px-8 lg:px-[calc((100vw-1200px)/2+1.25rem)] scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className="flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[320px] snap-start"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-bg-blush rounded-2xl p-6 border border-border-soft hover:bg-white hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full flex flex-col"
            >
              {/* Tag */}
              <span className="inline-block self-start text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/15 rounded-full px-3 py-1 mb-4">
                {plan.tag}
              </span>

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-300">
                  <plan.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-text-dark">{plan.name}</h3>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-2.5 mb-5">
                <span className="text-3xl font-extrabold text-text-dark">₹{plan.price}</span>
                <span className="text-base text-text-light line-through">₹{plan.originalPrice}</span>
                <span className="text-[11px] font-semibold text-secondary bg-secondary/15 rounded-full px-2 py-0.5">
                  Save ₹{plan.originalPrice - plan.price}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border-soft mb-5" />

              {/* Features */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button to="/book" size="sm" variant="primary" className="w-full">
                Book Now
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
