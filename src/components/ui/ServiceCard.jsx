import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-[2rem] p-8 border border-border-soft shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500 cursor-default h-full"
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl bg-bg-pink-soft flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"
      >
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-all duration-500 group-hover:scale-110" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      {/* Decorative Blob */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}

