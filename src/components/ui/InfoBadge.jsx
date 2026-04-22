import { motion } from 'framer-motion';
import {
  Stethoscope,
  ScanLine,
  Heart,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  PawPrint,
} from 'lucide-react';

const iconMap = {
  stethoscope: Stethoscope,
  scan: ScanLine,
  heart: Heart,
  shield: ShieldCheck,
  sparkles: Sparkles,
  calendar: CalendarCheck,
  paw: PawPrint,
};

export default function InfoBadge({ icon, label, index = 0, variant = 'default' }) {
  const Icon = iconMap[icon] || Heart;

  if (variant === 'trust') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 border border-border-soft shadow-sm"
      >
        <div className="w-8 h-8 rounded-full bg-bg-pink-soft flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-medium text-text-dark">{label}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-border-soft shadow-[var(--shadow-card)]"
    >
      <div className="w-12 h-12 rounded-xl bg-bg-pink-soft flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="text-sm font-semibold text-text-dark text-center">{label}</span>
    </motion.div>
  );
}
