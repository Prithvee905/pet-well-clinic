import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  const hoverBg = index % 3 === 0 ? 'group-hover:bg-primary' : index % 3 === 1 ? 'group-hover:bg-secondary' : 'group-hover:bg-sea-blue';
  const hoverText = index % 3 === 0 ? 'group-hover:text-primary' : index % 3 === 1 ? 'group-hover:text-secondary' : 'group-hover:text-sea-blue';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-bg-blush rounded-2xl p-5 sm:p-6 border border-border-soft shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:bg-white transition-all duration-500 cursor-default h-full"
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 ${hoverBg} group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1`}
      >
        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-all duration-500 group-hover:scale-110" />
      </div>

      {/* Content */}
      <div>
        <h3 className={`text-base sm:text-lg font-bold text-text-dark mb-2 ${hoverText} transition-colors duration-300`}>
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

