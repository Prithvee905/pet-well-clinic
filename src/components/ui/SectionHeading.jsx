import { motion } from 'framer-motion';

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${light ? 'text-white' : 'text-text-dark'
          }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${centered ? 'mx-auto' : ''
            } ${light ? 'text-white/80' : 'text-text-muted'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 rounded-full ${light ? 'bg-white/40' : 'bg-primary'
          } ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
}
