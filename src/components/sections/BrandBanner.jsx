import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

export default function BrandBanner() {
  return (
    <div className="bg-secondary py-5 overflow-hidden">
      <div className="container-main">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 text-center"
        >
          <PawPrint className="w-5 h-5 text-white/40 hidden sm:block" />
          <h2 className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase">
            Professional Care for Your Purr-fect Friend
          </h2>
          <PawPrint className="w-5 h-5 text-white/40 hidden sm:block" />
        </motion.div>
      </div>
    </div>
  );
}
