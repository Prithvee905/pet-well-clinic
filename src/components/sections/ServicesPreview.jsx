import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesPreview() {
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
            title="Our Veterinary Services"
            subtitle="From preventive care to emergencies, we offer comprehensive services to keep your pet healthy, happy, and cared for."
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

      {/* Horizontal scrolling container — full bleed */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-5 md:px-8 lg:px-[calc((100vw-1200px)/2+1.25rem)] scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {services.map((service, i) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[220px] sm:w-[260px] lg:w-[300px] snap-start"
          >
            <ServiceCard service={service} index={i} />
          </div>
        ))}
      </div>

      <div className="container-main">
        <div className="text-center mt-8">
          <Button to="/services" variant="outline" icon={ArrowRight}>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

