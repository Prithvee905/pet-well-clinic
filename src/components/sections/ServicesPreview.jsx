import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          title="Our Veterinary Services"
          subtitle="From preventive care to emergencies, we offer comprehensive services to keep your pet healthy, happy, and cared for."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.slice(0, 4).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button to="/services" variant="outline" icon={ArrowRight}>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
