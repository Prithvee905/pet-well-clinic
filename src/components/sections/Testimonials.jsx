import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="What Pet Parents Say"
          subtitle="Hear from families who trust Petwell Clinic with the health and happiness of their beloved companions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
