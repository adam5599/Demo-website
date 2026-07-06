import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { features } from '../data/realEstateData';

interface WhyChooseUsProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

export default function WhyChooseUs({ isArabic, isDarkMode }: WhyChooseUsProps) {
  return (
    <section id="why-us" className={`py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950/40' : 'bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (Why Us copy) - 5 cols */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
              {isArabic ? 'التميز العقاري' : 'Real Estate Distinction'}
            </span>
            
            <h2 className={`text-3xl sm:text-4xl font-black font-sans leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {isArabic 
                ? 'لماذا يختار النخبة شركة على زاوية العقارية؟' 
                : 'Why Do High-Net-Worth Clients Choose On Corner?'}
            </h2>

            <div className="w-12 h-1.5 bg-luxury-gold rounded-full" />

            <p className={`text-sm sm:text-base leading-relaxed font-light ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {isArabic 
                ? 'منذ عام 2008 ونحن نبني الجسور العقارية التي تربط بين طموحات عملائنا والواقع في مدينة الرياض. نحن نؤمن بأن كل عميل يستحق أعلى مستويات الخدمة والاهتمام بالتفاصيل.' 
                : 'Since 2008, we have been building real estate bridges connecting our clients’ ambitions to reality in Riyadh. We believe every partner deserves the absolute highest levels of tailored service.'}
            </p>

            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-100 shadow-sm'
            }`}>
              <p className="text-luxury-gold font-bold text-lg mb-2 font-sans">
                {isArabic ? 'رؤيتنا العقارية' : 'Our Real Estate Vision'}
              </p>
              <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {isArabic 
                  ? 'أن نكون الخيار المفضل والزاوية الآمنة لكل مستثمر ومشتري يبحث عن الثقة والفرص العقارية النادرة بأعلى مستويات الجودة الاحترافية.' 
                  : 'To stand out as the preferred choice and the secure corner for every investor or homebuyer seeking integrity and off-market opportunities.'}
              </p>
            </div>
          </div>

          {/* Right Column (Feature Cards Grid) - 7 cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                key={feat.id}
                className={`p-6 rounded-3xl border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-luxury-gold/40 shadow-xl' 
                    : 'bg-white border-slate-100 hover:border-luxury-gold/30 hover:shadow-2xl hover:shadow-slate-100/50 shadow-md'
                }`}
              >
                <div className="flex gap-4 items-start">
                  {/* Icon wrap */}
                  <div className="p-3 bg-luxury-gold/10 rounded-xl text-luxury-gold">
                    <IconRenderer name={feat.iconName} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold font-sans ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {isArabic ? feat.titleAr : feat.titleEn}
                    </h3>
                    <p className={`text-[10px] sm:text-xs mt-1.5 font-light leading-relaxed ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {isArabic ? feat.descriptionAr : feat.descriptionEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
