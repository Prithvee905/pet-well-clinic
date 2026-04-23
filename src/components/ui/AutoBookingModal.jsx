import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Clock, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { clinicInfo } from '@/data/siteConfig';

export default function AutoBookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2.5 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen it in this session to avoid annoyance
      const hasSeen = sessionStorage.getItem('hasSeenBookingModal');
      if (!hasSeen) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenBookingModal', 'true');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-text-dark/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-border-soft"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-bg-blush flex items-center justify-center text-text-muted hover:text-primary transition-colors z-10 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-dark">Book an Appointment</h2>
                  <p className="text-sm text-text-muted">Special Offer for New Patients!</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-bg-blush rounded-2xl p-5 border border-border-soft">
                  <p className="text-[15px] text-text-dark font-medium leading-relaxed mb-4">
                    Get a professional doctor consultation for just <span className="text-primary font-bold text-lg">₹399</span> (Save ₹200).
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <ShieldCheck className="w-4 h-4 text-secondary" />
                      <span>Certified Professional Care</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>9:00 AM – 8:00 PM (Weekdays)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button to="/book" className="flex-1 py-4 text-lg" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Button>
                  <Button 
                    href={`tel:${clinicInfo.phone}`} 
                    variant="secondary" 
                    className="flex-1 py-4 text-lg"
                    icon={Phone}
                  >
                    Call Us
                  </Button>
                </div>
              </div>

              <p className="text-center text-xs text-text-light">
                Secure your slot today. We're looking forward to seeing your pet!
              </p>
            </div>

            {/* Decorative Paw Print */}
            <div className="absolute -bottom-6 -left-6 opacity-[0.03] rotate-12 pointer-events-none">
              <Calendar className="w-32 h-32 text-primary" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
