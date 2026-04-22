import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { clinicInfo } from '@/data/siteConfig';

const contactItems = [
  {
    icon: Phone,
    title: 'Call Us',
    content: clinicInfo.phone,
    href: `tel:${clinicInfo.phone}`,
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Chat with us',
    href: `https://wa.me/${clinicInfo.whatsapp}`,
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Clinic Hours',
    content: `Mon–Fri: ${clinicInfo.hours.weekdays}`,
    sub: `Sat: ${clinicInfo.hours.saturday}`,
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: clinicInfo.address,
    color: 'bg-accent/20 text-amber-600',
  },
];

export default function ContactPreview() {
  return (
    <section className="section-padding bg-bg-blush">
      <div className="container-main">
        <SectionHeading
          title="Get in Touch"
          subtitle="We're here for your pet. Reach out through any of these channels — we'd love to hear from you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-border-soft shadow-[var(--shadow-card)] text-center hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-text-dark mb-1">
                {item.title}
              </h4>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-sm text-text-muted">{item.content}</p>
              )}
              {item.sub && (
                <p className="text-xs text-text-light mt-0.5">{item.sub}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-border-soft shadow-[var(--shadow-card)] h-[280px] md:h-[320px] bg-gradient-to-br from-bg-pink-soft to-bg-blue-soft flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin className="w-8 h-8 text-primary/40 mx-auto mb-2" />
            <p className="text-sm text-text-muted font-medium">
              Map embed will appear here
            </p>
            <p className="text-xs text-text-light mt-1">
              {clinicInfo.address}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
