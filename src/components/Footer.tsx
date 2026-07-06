import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function Footer({ isArabic, isDarkMode }: FooterProps) {
  
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors duration-500 relative ${
      isDarkMode 
        ? 'bg-slate-950 border-slate-900 text-slate-400' 
        : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }} className="inline-block transition-transform duration-300 hover:scale-102">
              <Logo isDarkMode={true} isArabic={isArabic} layout="horizontal" />
            </a>
            
            <p className="text-xs sm:text-sm leading-relaxed font-light">
              {isArabic 
                ? 'نصنع مستقبلك العقاري في مدينة الرياض بخبرة متراكمة منذ عام 2008، ونلبي تطلعاتك بأرقى معايير الفخامة والشفافية التامة.' 
                : 'Crafting your real estate future in Riyadh with premium expertise accumulated since 2008, meeting your aspirations with top luxury and transparency.'}
            </p>

            {/* Licensing & Registration details (adds immense credibility for SA clients!) */}
            <div className="flex gap-2.5 items-center p-3 rounded-xl bg-white/5 border border-white/10 max-w-xs">
              <ShieldCheck className="text-luxury-gold flex-shrink-0" size={18} />
              <div className="text-[10px] leading-snug text-slate-400">
                <p className="font-bold text-white">{isArabic ? 'مؤسسة مرخصة بالكامل' : 'Fully Licensed Agency'}</p>
                <p>{isArabic ? 'ترخيص الهيئة العامة للعقار' : 'Real Estate General Authority License'}</p>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-mono">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { ar: 'من نحن', en: 'About Us', id: '#about' },
                { ar: 'خدماتنا العقارية', en: 'Our Services', id: '#services' },
                { ar: 'العقارات المميزة', en: 'Featured Listings', id: '#properties' },
                { ar: 'لماذا تختارنا', en: 'Why Choose Us', id: '#why-us' },
                { ar: 'آراء عملائنا', en: 'Client Testimonials', id: '#testimonials' },
                { ar: 'الأسئلة الشائعة', en: 'FAQ Accordion', id: '#faq' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.id}
                    onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
                    className="hover:text-luxury-gold transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="text-luxury-gold text-[10px]">♦</span>
                    <span>{isArabic ? link.ar : link.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services List */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-mono">
              {isArabic ? 'خدماتنا المعتمدة' : 'Accredited Services'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { ar: 'بيع العقارات السكنية', en: 'Residential Sales' },
                { ar: 'شراء العقارات والاستثمار', en: 'Acquisitions & Investment' },
                { ar: 'تأجير الوحدات الفاخرة', en: 'Luxury Property Leasing' },
                { ar: 'إدارة الأملاك والمحافظ', en: 'Portfolio Property Management' },
                { ar: 'تسويق المشاريع المبتكرة', en: 'Innovative Project Marketing' },
                { ar: 'الاستشارات والتقييم العقاري', en: 'Advisory & Evaluation' }
              ].map((srv, i) => (
                <li key={i} className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-slate-600 text-xs">▪</span>
                  <span>{isArabic ? srv.ar : srv.en}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-mono">
              {isArabic ? 'معلومات المكتب' : 'Office Details'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="text-luxury-gold flex-shrink-0 mt-0.5" size={16} />
                <span className="leading-relaxed">
                  {isArabic 
                    ? 'الأفلاج، حي الدريهمية، الرياض 12796، المملكة العربية السعودية' 
                    : 'Al Aflaj, Ad Duraihimiyah, Riyadh 12796, Saudi Arabia'}
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="text-luxury-gold flex-shrink-0" size={16} />
                <a href="tel:+966500080103" className="hover:text-luxury-gold transition-colors" dir="ltr">
                  +966 50 008 0103
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="text-luxury-gold flex-shrink-0" size={16} />
                <a href="mailto:info@oncorner.com" className="hover:text-luxury-gold transition-colors">
                  info@oncorner.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Copyright & Social Row */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          
          {/* Copyright content */}
          <div className="text-center md:text-right" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <p>
              {isArabic ? (
                <>
                  جميع الحقوق محفوظة © {currentYear} لشركة <span className="text-white font-semibold">على زاوية للخدمات العقارية</span>.
                </>
              ) : (
                <>
                  Copyright © {currentYear} <span className="text-white font-semibold">On Corner Real Estate Services</span>. All Rights Reserved.
                </>
              )}
            </p>
            <p className="text-slate-600 mt-1">
              {isArabic 
                ? 'تطوير موقع عقاري تجريبي متميز — جاهز للتخصيص الكامل للمستندات والشهادات والصور الرسمية.' 
                : 'Premium demo property website development — ready for custom official credentials & branding.'}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
              { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
              { icon: <Facebook size={16} />, href: '#', label: 'Facebook' }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.href}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-luxury-gold hover:text-slate-950 text-white transition-all duration-300 border border-white/5"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
