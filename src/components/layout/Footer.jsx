import { Link } from 'react-router-dom';
import {
  PawPrint,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  CirclePlay,
  Heart,
} from 'lucide-react';
import { navigation, clinicInfo } from '@/data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer */}
      <div className="container-main section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold font-[var(--font-heading)]">
                {clinicInfo.name}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {clinicInfo.subtitle}. Trusted by pet parents for compassionate,
              professional veterinary care.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: clinicInfo.social.instagram },
                { icon: ExternalLink, href: clinicInfo.social.facebook },
                { icon: CirclePlay, href: clinicInfo.social.youtube },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white/90">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white/90">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href={`tel:${clinicInfo.phone}`} className="hover:text-primary transition-colors">{clinicInfo.phone}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="hover:text-primary transition-colors">{clinicInfo.email}</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a 
                  href={clinicInfo.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  {clinicInfo.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-white/90">
              Clinic Hours
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white/80">{clinicInfo.hours.weekdays}</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white/80">{clinicInfo.hours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/80">{clinicInfo.hours.sunday}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col md:flex-row items-center justify-between py-5 gap-3 text-xs text-gray-500">
          <p>
            © {currentYear} {clinicInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" />{' '}
            for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
