import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Bot, X } from 'lucide-react';
import { clinicInfo } from '@/data/siteConfig';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group relative"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-white text-text-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border-soft">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* AI Chat Bot Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert('AI Chat coming soon!')}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group relative"
      >
        <Bot className="w-7 h-7" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-white text-text-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border-soft">
          Ask AI Assistant
        </span>
      </motion.button>
    </div>
  );
}
