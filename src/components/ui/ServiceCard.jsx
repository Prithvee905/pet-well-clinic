import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  // Tilt Effect Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation (subtle -5 to 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to range -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative bg-white rounded-[2rem] p-8 border border-border-soft shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500 cursor-default"
    >
      {/* Icon with 3D Pop */}
      <div
        style={{ transform: 'translateZ(50px)' }}
        className="w-16 h-16 rounded-2xl bg-bg-pink-soft flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"
      >
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-all duration-500 group-hover:scale-110" />
      </div>

      {/* Content with 3D Depth */}
      <div style={{ transform: 'translateZ(30px)' }}>
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
