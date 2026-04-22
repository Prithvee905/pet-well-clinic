import { motion } from 'framer-motion';

export default function GalleryItem({ item, index = 0, onClick }) {
  const hasImage = !!item.image;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, scale: 1.02 }}
      onClick={onClick}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border-soft shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
    >
      {hasImage ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        /* Placeholder Content */
        <div className="absolute inset-0 bg-gradient-to-br from-bg-pink-soft to-bg-blue-soft flex flex-col items-center justify-center p-4">
          <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {item.emoji}
          </span>
          <span className="text-sm font-medium text-text-muted text-center">
            {item.title}
          </span>
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white text-sm font-semibold">{item.title}</span>
      </div>
    </motion.div>
  );
}
