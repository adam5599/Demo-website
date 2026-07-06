import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Percent } from 'lucide-react';
import { ImagePlaceholders } from '../data/realEstateData';

interface AboutProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function About({ isArabic, isDarkMode }: AboutProps) {
  
  const stats = [
    { 
      id: 'stat-1', 
      num: '18+', 
      labelAr: 'عاماً من الخبرة', 
      labelEn: 'Years Experience', 
      descAr: 'تأسسنا عام 2008 في قلب العاصمة الرياض.', 
      descEn: 'Established in 2008 in the heart of Riyadh.',
      icon: <Award className="text-luxury-gold" size={24} /> 
    },
    { 
      id: 'stat-2', 
      num: '500+', 
      labelAr: 'عقار تم بيعه', 
      labelEn: 'Properties Sold', 
      descAr: 'فلل فاخرة، قصور ومشاريع سكنية راقية.', 
      descEn: 'Luxury villas, mansions, and high-end residential.',
      icon: <ShieldCheck className="text-luxury-gold" size={24} /> 
    },
    { 
      id: 'stat-3', 
      num: '1200+', 
      labelAr: 'عميل سعيد', 
      labelEn: 'Satisfied Clients', 
      descAr: 'بنينا معهم شراكات مستدامة مبنية على الثقة.', 
      descEn: 'We built sustainable partnerships on trust.',
      icon: <Users className="text-luxury-gold" size={24} /> 
    },
    { 
      id: 'stat-4', 
      num: '98%', 
      labelAr: 'نسبة الرضا والولاء', 
      labelEn: 'Satisfaction Rate', 
      descAr: 'جودة خدماتنا تترجمها ثقة عملائنا المستمرة.', 
      descEn: 'Our service quality proven by ongoing client trust.',
      icon: <Percent className="text-luxury-gold" size={24} /> 
    }
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950/40' : 'bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visual Collage (corresponds to input_file_0 & input_file_1) */}
          <div className="relative order-2 lg:order-1">
            
            {/* Main Image (Office Exterior Building - corresponds to input_file_1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] w-full md:w-[85%] border border-slate-200/10"
            >
              <img
                src={ImagePlaceholders.AboutImage2}
                alt="Office Building Exterior Placeholder - SuperOffice Riyadh"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              {/* Image Identifier Caption */}
              <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                <span>{isArabic ? 'المقر الرئيسي — الرياض' : 'Main Headquarters - Riyadh'}</span>
              </div>
            </motion.div>

            {/* Overlapping Secondary Image (Meeting Room Interior - corresponds to input_file_0) */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 left-0 md:left-4 w-[65%] md:w-[50%] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-950 hidden sm:block"
            >
              <img
                src={ImagePlaceholders.AboutImage1}
                alt="Meeting Room Interior Placeholder - On Corner Real Estate"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              {/* Image Identifier Caption */}
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-lg border border-white/5 text-[10px] text-white flex items-center gap-1">
                <span>{isArabic ? 'صالة الاستقبال والاجتماعات' : 'Meeting Room Area'}</span>
              </div>
            </motion.div>

            {/* Accent Floating Year Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-10 right-0 md:right-10 glassmorphism-dark p-6 rounded-2xl border border-white/10 text-center shadow-xl hidden sm:block"
            >
              <span className="text-4xl font-black text-luxury-gold tracking-tight font-sans">2008</span>
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-1">
                {isArabic ? 'عام التأسيس' : 'Founding Year'}
              </p>
            </motion.div>

          </div>

          {/* Right Column: Copywriting & Stats */}
          <div className="space-y-8 order-1 lg:order-2">
            
            {/* Sub-header badge */}
            <div className="flex">
              <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
                {isArabic ? 'من نحن' : 'Who We Are'}
              </span>
            </div>

            {/* Core headline */}
            <h2 className={`text-3xl sm:text-4xl font-black font-sans leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {isArabic 
                ? 'خبرة عقارية راسخة وشفافية مطلقة تُلبي تطلعاتك' 
                : 'Deeply Rooted Real Estate Expertise & Absolute Integrity'}
            </h2>

            {/* Elegant horizontal line separator */}
            <div className="w-12 h-1.5 bg-luxury-gold rounded-full" />

            {/* Copywriting */}
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed font-light ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                {isArabic ? (
                  <>
                    تأسست شركة <span className="font-bold text-luxury-gold">على زاوية للخدمات العقارية</span> في مدينة الرياض عام 2008، لنكون الشريك الأكثر موثوقية في صياغة المشهد العقاري الحديث. على مدار أكثر من عقد ونصف، عملنا بشغف والتزام لتقديم أرقى الحلول العقارية السكنية والتجارية والاستثمارية التي تحاكي أرقى معايير الفخامة والاحترافية.
                  </>
                ) : (
                  <>
                    Established in Riyadh in 2008, <span className="font-bold text-luxury-gold">On Corner Real Estate Services</span> has grown to become the most trusted partner shaping modern property services. For over a decade and a half, we have dedicated ourselves with passion and absolute commitment to delivering premium residential, commercial, and investment portfolios with unmatched luxury.
                  </>
                )}
              </p>
              <p>
                {isArabic ? (
                  <>
                    نحن لا نقدم مجرد عقارات، بل نصنع تجارب حياتية استثنائية ونرعى ثقة عملائنا بفضل معرفتنا العميقة والتفصيلية بأحياء شمال الرياض الراقية، ملتزمين بالنزاهة والوضوح والسرعة لضمان تحقيق أعلى قيمة لشركائنا.
                  </>
                ) : (
                  <>
                    We do not simply offer properties; we craft exceptional living experiences and build deep lifelong trust with our clients. Backed by extensive local knowledge of Northern Riyadh’s premium districts, we remain committed to transparency, responsiveness, and premium execution.
                  </>
                )}
              </p>
            </div>

            {/* Trust Quote */}
            <blockquote className="border-r-4 border-luxury-gold pr-4 italic py-1 font-sans text-sm">
              <p className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {isArabic ? '"نحن الزاوية.. خبرة تُلبي ثقتك منذ 2008"' : '"We are the Corner.. Expertise meeting your trust since 2008"'}
              </p>
              <footer className="text-xs text-luxury-gold mt-1">
                {isArabic ? '— الإدارة العامة، على زاوية العقارية' : '— Executive Management, On Corner Real Estate'}
              </footer>
            </blockquote>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-slate-900/40 border-slate-800/80 hover:border-luxury-gold/50' 
                      : 'bg-white border-slate-100 hover:border-luxury-gold/40 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-black text-luxury-gold tracking-tight font-sans">
                      {stat.num}
                    </span>
                    <div className="p-1.5 bg-luxury-gold/5 rounded-lg text-luxury-gold">
                      {stat.icon}
                    </div>
                  </div>
                  <h4 className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {isArabic ? stat.labelAr : stat.labelEn}
                  </h4>
                  <p className={`text-[10px] mt-1 font-light leading-snug ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {isArabic ? stat.descAr : stat.descEn}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
