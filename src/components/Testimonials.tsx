import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { testimonials } from '../data/realEstateData';

interface TestimonialsProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function Testimonials({ isArabic, isDarkMode }: TestimonialsProps) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play the carousel smoothly every 6 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
        >
          {isArabic ? 'آراء شركائنا وعملائنا' : 'Client Testimonials'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl sm:text-4xl font-black mt-4 font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {isArabic ? 'قصص نجاح نعتز بها' : 'Success Stories We Value'}
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-1 bg-luxury-gold mx-auto mt-4 rounded-full origin-center"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-sm mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}
        >
          {isArabic 
            ? 'نسعد بمشاركة آراء وتجارب عملائنا الكرام من مستثمرين وملاك، والتي تدفعنا دائماً لمواصلة التميز وتقديم الأفضل.' 
            : 'We are proud to share the feedback and experiences of our valued clients, which constantly inspire us to pursue perfection.'}
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto px-12">
        
        {/* Double Quotes Watermark */}
        <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-8 opacity-[0.03] text-luxury-gold pointer-events-none">
          <Quote size={200} />
        </div>

        {/* Slidable Content Card */}
        <div className="relative min-h-[320px] sm:min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isArabic ? -50 : 50 }}
              transition={{ duration: 0.4 }}
              className={`w-full p-8 sm:p-12 rounded-3xl border text-center ${
                isDarkMode 
                  ? 'bg-slate-900/40 border-slate-800/85 shadow-2xl shadow-black/20' 
                  : 'bg-white border-slate-100 shadow-xl shadow-slate-100/30'
              }`}
            >
              {/* Star Ratings */}
              <div className="flex justify-center gap-1 mb-6 text-luxury-gold">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#C9A227" stroke="#C9A227" />
                ))}
              </div>

              {/* Review Text */}
              <p className={`text-base sm:text-lg leading-relaxed font-light mb-8 italic ${
                isDarkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                "{isArabic ? testimonials[active].contentAr : testimonials[active].contentEn}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src={testimonials[active].avatar}
                  alt={isArabic ? testimonials[active].nameAr : testimonials[active].nameEn}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-luxury-gold shadow-md"
                />
                <div>
                  <h4 className={`text-sm sm:text-base font-bold font-sans ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {isArabic ? testimonials[active].nameAr : testimonials[active].nameEn}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-luxury-gold font-semibold uppercase tracking-wider mt-0.5">
                    {isArabic ? testimonials[active].roleAr : testimonials[active].roleEn}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full border transition-all duration-300 ${
            isArabic ? 'right-0' : 'left-0'
          } ${
            isDarkMode 
              ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white' 
              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950 shadow-md'
          }`}
          aria-label="Previous Testimonial"
          id="btn-testimonial-prev"
        >
          {isArabic ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        <button
          onClick={handleNext}
          className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full border transition-all duration-300 ${
            isArabic ? 'left-0' : 'right-0'
          } ${
            isDarkMode 
              ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white' 
              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950 shadow-md'
          }`}
          aria-label="Next Testimonial"
          id="btn-testimonial-next"
        >
          {isArabic ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>

      </div>

      {/* Pagination indicators / Dot selectors */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              active === i ? 'w-8 bg-luxury-gold' : 'w-2.5 bg-slate-200/20'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
            id={`btn-testimonial-dot-${i}`}
          />
        ))}
      </div>

    </section>
  );
}
