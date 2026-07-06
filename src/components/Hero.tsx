import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, Building2, MapPin } from 'lucide-react';
import { ImagePlaceholders } from '../data/realEstateData';

interface HeroProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function Hero({ isArabic, isDarkMode }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[90vh] min-h-[650px] md:h-screen flex items-center overflow-hidden">
      
      {/* Background Image with Ken Burns / zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-[pulse_10s_infinite]"
          style={{ backgroundImage: `url(${ImagePlaceholders.HeroImage})` }}
          aria-label="Hero Image - Luxury Villa in Riyadh"
        />
        {/* Multi-layered luxury overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-ping" />
            <span>
              {isArabic ? 'على زاوية العقارية — خبرة منذ 2008' : 'On Corner Real Estate — Expertise Since 2008'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.2] sm:leading-[1.15] mb-6 tracking-tight font-sans"
          >
            {isArabic ? (
              <>
                نُحاكي <span className="text-luxury-gold">تطلعاتك</span>، ونُجسّد أحلامك العقارية على أرض الواقع
              </>
            ) : (
              <>
                Emulating your <span className="text-luxury-gold">aspirations</span>, and realizing your real estate dreams on the ground
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-light"
          >
            {isArabic 
              ? 'خبرة عقارية منذ عام 2008 في تقديم أفضل الحلول العقارية بمدينة الرياض بأسلوب يحاكي أرقى المعايير العالمية.' 
              : 'Real estate expertise since 2008 in delivering exceptional bespoke solutions in Riyadh with global luxury standards.'}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleScrollTo('#contact')}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-slate-950 font-bold px-8 py-4.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-base"
              id="hero-primary-cta"
            >
              <span>{isArabic ? 'احجز استشارة مجانية' : 'Book Free Consultation'}</span>
              {isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>
            <button
              onClick={() => handleScrollTo('#properties')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4.5 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-base"
              id="hero-secondary-cta"
            >
              <span>{isArabic ? 'تصفح العقارات الفاخرة' : 'Browse Luxury Properties'}</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Floating Trust Badge / Floating Widgets */}
      <div className="absolute bottom-8 right-4 left-4 sm:right-8 sm:left-auto z-10 max-w-xs hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glassmorphism-dark p-5 rounded-2xl border border-white/10 text-white shadow-2xl"
        >
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-luxury-gold/10 rounded-xl text-luxury-gold">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-mono">
                {isArabic ? 'أبرز أحياء الرياض' : 'Riyadh Prime Districts'}
              </p>
              <h4 className="text-sm font-bold text-white mb-2">
                {isArabic ? 'الملقا • حطين • الياسمين • الهدا' : 'Malqa • Hittin • Yasmin • Hada'}
              </h4>
              <p className="text-xs text-luxury-gold font-semibold flex items-center gap-1">
                <MapPin size={12} />
                <span>{isArabic ? 'خيارات سكنية واستثمارية حصرية' : 'Exclusive residential & investment options'}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Quote Widget (Left Side on Desktop) */}
      <div className="absolute bottom-8 left-4 sm:left-8 sm:right-auto z-10 max-w-xs hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="glassmorphism-dark p-5 rounded-2xl border border-white/10 text-white shadow-2xl"
        >
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-luxury-gold/10 rounded-xl text-luxury-gold">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-mono">
                {isArabic ? 'ثقة مستدامة' : 'Sustained Trust'}
              </p>
              <h4 className="text-sm font-bold text-white mb-1">
                {isArabic ? '"نحن الزاوية.. خبرة تُلبي ثقتك منذ 2008"' : '"We are the Corner.. Expertise meeting your trust since 2008"'}
              </h4>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Arrow Down indicator at the very bottom center */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer" onClick={() => handleScrollTo('#search')}>
        <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono">
          {isArabic ? 'اسحب للأسفل' : 'Scroll Down'}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 rounded-full bg-luxury-gold"
        />
        <div className="w-[1px] h-6 bg-gradient-to-b from-luxury-gold to-transparent" />
      </div>

    </section>
  );
}
