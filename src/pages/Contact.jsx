import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  PawPrint,
} from 'lucide-react';
import { clinicInfo } from '@/data/siteConfig';
import Button from '@/components/ui/Button';

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    content: clinicInfo.phone,
    action: { href: `tel:${clinicInfo.phone}`, label: 'Make a Call' },
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Quick chat with our team',
    action: {
      href: `https://wa.me/${clinicInfo.whatsapp}`,
      label: 'Chat on WhatsApp',
    },
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Mail,
    title: 'Email',
    content: clinicInfo.email,
    action: { href: `mailto:${clinicInfo.email}`, label: 'Send Email' },
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Petwell Clinic – Get in Touch</title>
        <meta
          name="description"
          content="Contact Petwell Clinic via phone, WhatsApp, or email. Visit our clinic or book an appointment online. We're always here for your pet."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <PawPrint className="absolute top-[18%] right-[8%] w-10 h-10 text-white/[0.05] rotate-12" />
        </div>
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              We'd love to hear from you. Reach out through any channel — we're here for you and your pet.
            </p>
            <div className="mt-5 h-1 w-16 rounded-full bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-bg-blush">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-border-soft shadow-[var(--shadow-card)] text-center hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">{card.content}</p>
                <a
                  href={card.action.href}
                  target={card.action.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  {card.action.label} →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Info + Map Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border-soft shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-semibold text-text-dark mb-6">
                Visit Our Clinic
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-dark">
                      Clinic Address
                    </p>
                    <a 
                      href={clinicInfo.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-muted mt-0.5 hover:text-primary transition-colors block"
                    >
                      {clinicInfo.address}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-dark">
                      Clinic Hours
                    </p>
                    <div className="text-sm text-text-muted mt-0.5 space-y-0.5">
                      <p>Mon – Fri: {clinicInfo.hours.weekdays}</p>
                      <p>Saturday: {clinicInfo.hours.saturday}</p>
                      <p>Sunday: {clinicInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Friendly message */}
                <div className="bg-bg-pink-soft rounded-xl p-4 mt-4">
                  <p className="text-sm text-text-muted leading-relaxed">
                    🐾 Have a question about your pet? Don't hesitate to reach
                    out — our team is always happy to help. Walk-ins are welcome,
                    but appointments are recommended for the best experience.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button to="/book" size="md">
                  Book Appointment
                </Button>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-border-soft shadow-[var(--shadow-card)] h-full min-h-[450px]"
            >
              <iframe
                src={clinicInfo.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Petwell Clinic Location"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
