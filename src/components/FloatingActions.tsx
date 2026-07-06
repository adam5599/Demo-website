import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  isArabic: boolean;
}

export default function FloatingActions({ isArabic }: FloatingActionsProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-6 z-40 flex flex-col gap-3 ${
      isArabic ? 'left-6' : 'right-6'
    }`}>
      
      {/* Floating WhatsApp Action Button */}
      <motion.a
        href="https://wa.me/966500080103"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-colors flex items-center justify-center relative group"
        aria-label="Contact via WhatsApp"
        id="btn-floating-whatsapp"
      >
        <MessageSquare size={22} fill="currentColor" />
        {/* Tooltip */}
        <span className={`absolute bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-1/2 -translate-y-1/2 ${
          isArabic ? 'right-14' : 'left-14'
        }`}>
          {isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Contact'}
        </span>
      </motion.a>

      {/* Floating Call Action Button */}
      <motion.a
        href="tel:+966500080103"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full bg-luxury-gold text-slate-950 shadow-lg shadow-luxury-gold/30 hover:bg-luxury-gold-dark transition-colors flex items-center justify-center relative group"
        aria-label="Direct Call On Corner"
        id="btn-floating-call"
      >
        <Phone size={22} fill="currentColor" />
        {/* Tooltip */}
        <span className={`absolute bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-1/2 -translate-y-1/2 ${
          isArabic ? 'right-14' : 'left-14'
        }`}>
          {isArabic ? 'اتصال مباشر' : 'Direct Call'}
        </span>
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/80 text-white border border-white/10 hover:bg-slate-950 hover:border-luxury-gold transition-all duration-300 shadow-lg flex items-center justify-center"
            aria-label="Scroll Back to Top"
            id="btn-back-to-top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
