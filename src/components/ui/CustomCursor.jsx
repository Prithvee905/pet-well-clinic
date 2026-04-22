import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <style>{`
        body, a, button, [role="button"] {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          .custom-cursor-wrapper {
            display: none !important;
          }
          body, a, button, [role="button"] {
            cursor: auto !important;
          }
        }
      `}</style>

      <div className="custom-cursor-wrapper pointer-events-none fixed inset-0 z-[9999]">
        {/* Main Cursor Dot */}
        <motion.div
          className="fixed left-0 top-0 w-3 h-3 bg-primary rounded-full z-[100]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
            opacity: isVisible ? 1 : 0,
          }}
        />

        {/* Outer Ring / Interaction Effect */}
        <motion.div
          className="fixed left-0 top-0 border-2 border-primary rounded-full"
          animate={{
            width: isHovered ? 60 : 32,
            height: isHovered ? 60 : 32,
            backgroundColor: isHovered ? 'rgba(232, 62, 91, 0.1)' : 'rgba(232, 62, 91, 0)',
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 150 }}
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
            opacity: isVisible ? 0.4 : 0,
          }}
        />

        {/* Trace Dot (Trailing) */}
        <motion.div
          className="fixed left-0 top-0 w-1.5 h-1.5 bg-primary/40 rounded-full"
          style={{
            x: useSpring(cursorX, { damping: 40, stiffness: 300 }),
            y: useSpring(cursorY, { damping: 40, stiffness: 300 }),
            translateX: '-50%',
            translateY: '-50%',
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>
    </>
  );
}
