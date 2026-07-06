import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/realEstateData';

interface ServicesProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

// Icon mapper to dynamically load Lucide icons
const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  // Safe cast to access icon components
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

export default function Services({ isArabic, isDarkMode }: ServicesProps) {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
        >
          {isArabic ? 'خدماتنا الاستثنائية' : 'Our Bespoke Services'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl sm:text-4xl font-black mt-4 font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {isArabic ? 'حلول عقارية متكاملة ومرخصة' : 'Comprehensive Licensed Property Solutions'}
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
            ? 'نقدم منظومة متكاملة من الخدمات المعتمدة من الهيئة العامة للعقار في المملكة العربية السعودية لنضمن لعملائنا تجربة مريحة وعوائد مجزية.' 
            : 'We deliver a holistic system of certified services accredited by the Real Estate General Authority in KSA to secure smooth journeys and rich yields.'}
        </motion.p>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            key={service.id}
            className={`p-8 rounded-3xl transition-all duration-500 border group ${
              isDarkMode 
                ? 'bg-slate-900/40 border-slate-800/80 hover:border-luxury-gold/50 hover:bg-slate-900/60 shadow-xl shadow-black/10' 
                : 'bg-white border-slate-100 hover:border-luxury-gold/40 hover:shadow-2xl hover:shadow-slate-100/50 shadow-md shadow-slate-100/10'
            }`}
          >
            {/* Service Icon inside a golden border box */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl border transition-colors duration-500 ${
                isDarkMode 
                  ? 'bg-slate-950 border-slate-800 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-slate-950 group-hover:border-luxury-gold' 
                  : 'bg-slate-50 border-slate-100 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-slate-950 group-hover:border-luxury-gold'
              }`}>
                <IconRenderer name={service.iconName} className="w-6 h-6" />
              </div>
              <span className={`text-4xl font-black opacity-10 select-none group-hover:text-luxury-gold group-hover:opacity-20 transition-all duration-500 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Service title */}
            <h3 className={`text-xl font-bold font-sans group-hover:text-luxury-gold transition-colors duration-300 mb-3 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {isArabic ? service.titleAr : service.titleEn}
            </h3>

            {/* Service Description */}
            <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {isArabic ? service.descriptionAr : service.descriptionEn}
            </p>

            {/* Animated Learn More Anchor / Link styling */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-luxury-gold cursor-pointer" onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>{isArabic ? 'اطلب الخدمة الآن' : 'Inquire Now'}</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                {isArabic ? '←' : '→'}
              </span>
            </div>

          </motion.article>
        ))}
      </div>

    </section>
  );
}
