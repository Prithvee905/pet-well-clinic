import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary text-white shadow-md',
  secondary: 'bg-white text-primary border-2 border-primary',
  outline: 'bg-transparent text-primary border-2 border-border-soft',
  white: 'bg-white text-text-dark border border-border-soft',
  accent: 'bg-secondary text-white shadow-md',
};

const sizes = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
};

function MagneticContent({ children, variant, size, className = '', ...props }) {
  const ref = useRef(null);

  // Motion values for magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the movement
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Check if it's touch input or desktop (very tiny hint on all)
    // Strength reduced significantly for better stability
    const strength = 0.1;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const needsFullWidth = className.includes('w-full') || className.includes('flex-1');
  const baseClasses = `relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-300 cursor-pointer select-none overflow-hidden group ${variants[variant]} ${sizes[size]} ${needsFullWidth ? 'w-full' : ''}`;

  const { className: _unused, ...restProps } = props;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex ${needsFullWidth ? 'w-full' : ''}`}
    >
      <div className={baseClasses} {...restProps}>
        {/* Light Sweep Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] skew-x-[-25deg]"
            whileHover={{ x: '200%' }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>

        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none" />

        {children}
      </div>
    </motion.div>
  );
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon,
  ...props
}) {
  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
    </>
  );

  const sharedProps = { variant, size, className, ...props };
  const needsFlex = className.includes('flex-1');
  const needsFullWidth = className.includes('w-full') || needsFlex;
  const wrapperClasses = `${needsFlex ? 'flex-1' : 'inline-flex'} ${needsFullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={wrapperClasses}>
        <MagneticContent {...sharedProps}>{content}</MagneticContent>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={wrapperClasses}>
        <MagneticContent {...sharedProps}>{content}</MagneticContent>
      </a>
    );
  }

  return (
    <div className={wrapperClasses}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="w-full h-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MagneticContent {...sharedProps}>{content}</MagneticContent>
      </button>
    </div>
  );
}
