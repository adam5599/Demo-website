import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/realEstateData';

interface GalleryProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function Gallery({ isArabic, isDarkMode }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive unique categories dynamically
  const categories = [
    { id: 'all', ar: 'الكل', en: 'All' },
    { id: 'Luxury Villas', ar: 'فلل فاخرة', en: 'Luxury Villas' },
    { id: 'Interior Design', ar: 'تصميم داخلي', en: 'Interior Design' },
    { id: 'Pool & Exterior', ar: 'خارجية ومسابح', en: 'Pool & Exterior' },
    { id: 'Classical Mansions', ar: 'قصور وتصاميم كلاسيكية', en: 'Classical Mansions' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryEn === activeCategory;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % filteredItems.length));
  };

  return (
    <section id="gallery" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
        >
          {isArabic ? 'معرض الصور الفاخرة' : 'Luxury Gallery'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl sm:text-4xl font-black mt-4 font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {isArabic ? 'لقطات من أرقى مشاريعنا العقارية' : 'Snapshots From Our Premium Projects'}
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
            ? 'تصفح التفاصيل المعمارية الاستثنائية والتشطيبات الراقية لوحداتنا السكنية المتميزة بمدينة الرياض.' 
            : 'Browse the exceptional architectural craft, high-end details, and bespoke finishes across Riyadh.'}
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-luxury-gold text-slate-950 shadow-md shadow-luxury-gold/10'
                : isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-100 shadow-sm'
            }`}
          >
            {isArabic ? cat.ar : cat.en}
          </button>
        ))}
      </div>

      {/* Modern Masonry/Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-video lg:aspect-square group cursor-pointer border border-slate-200/10 shadow-md"
            >
              <img
                src={item.image}
                alt={isArabic ? item.titleAr : item.titleEn}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] text-luxury-gold font-bold uppercase tracking-widest mb-1 font-mono">
                  {isArabic ? item.categoryAr : item.categoryEn}
                </span>
                <h4 className="text-white text-base font-bold font-sans">
                  {isArabic ? item.titleAr : item.titleEn}
                </h4>
                <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-xl text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Lightbox Slider */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
            
            {/* Close trigger backdrop */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className={`absolute top-6 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all z-20 hover:scale-105 ${
                isArabic ? 'left-6' : 'right-6'
              }`}
              id="btn-close-lightbox"
            >
              <X size={20} />
            </button>

            {/* Slide Navigation - Previous */}
            <button
              onClick={handlePrev}
              className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all z-20 ${
                isArabic ? 'right-6' : 'left-6'
              }`}
              aria-label="Previous image"
              id="btn-lightbox-prev"
            >
              {isArabic ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </button>

            {/* Slide Navigation - Next */}
            <button
              onClick={handleNext}
              className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all z-20 ${
                isArabic ? 'left-6' : 'right-6'
              }`}
              aria-label="Next image"
              id="btn-lightbox-next"
            >
              {isArabic ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </button>

            {/* Active Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] z-10 flex flex-col items-center gap-4"
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={isArabic ? filteredItems[lightboxIndex].titleAr : filteredItems[lightboxIndex].titleEn}
                className="max-w-full max-h-[75vh] rounded-2xl object-contain border border-white/10 shadow-2xl"
              />
              <div className="text-center text-white max-w-xl">
                <span className="text-xs text-luxury-gold uppercase tracking-wider font-semibold font-mono">
                  {isArabic ? filteredItems[lightboxIndex].categoryAr : filteredItems[lightboxIndex].categoryEn}
                </span>
                <h4 className="text-lg font-bold mt-1 font-sans">
                  {isArabic ? filteredItems[lightboxIndex].titleAr : filteredItems[lightboxIndex].titleEn}
                </h4>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
