import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  isArabic: boolean;
  setIsArabic: (val: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Header({ isArabic, setIsArabic, isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { labelAr: 'الرئيسية', labelEn: 'Home', href: '#home' },
    { labelAr: 'من نحن', labelEn: 'About Us', href: '#about' },
    { labelAr: 'خدماتنا', labelEn: 'Services', href: '#services' },
    { labelAr: 'العقارات', labelEn: 'Properties', href: '#properties' },
    { labelAr: 'لماذا نحن', labelEn: 'Why Us', href: '#why-us' },
    { labelAr: 'آراء العملاء', labelEn: 'Testimonials', href: '#testimonials' },
    { labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ', href: '#faq' },
    { labelAr: 'تواصل معنا', labelEn: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className={`hidden md:block py-2 text-xs border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-950 text-slate-400 border-slate-800' 
          : 'bg-slate-900 text-slate-300 border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6" dir="ltr">
            <a href="tel:+966500080103" className="flex items-center gap-2 hover:text-luxury-gold transition-colors">
              <Phone size={14} className="text-luxury-gold" />
              <span>+966 50 008 0103</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-luxury-gold" />
              <span>{isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
            </div>
          </div>
          <div>
            <span className="text-luxury-gold font-medium">
              {isArabic 
                ? 'خبرة عقارية نُباهي بها منذ عام 2008' 
                : 'Real Estate Expertise We Pride Ourselves On Since 2008'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-slate-950/95 border-b border-slate-800 shadow-lg shadow-black/30 backdrop-blur-md' 
            : 'bg-white/95 border-b border-slate-100 shadow-md shadow-slate-100/30 backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="transition-transform duration-300 hover:scale-102">
                <Logo isDarkMode={isDarkMode} isArabic={isArabic} layout="horizontal" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 gap-4 items-center">
              {/* Note: since RTL is active, space-x can cause issues, we use custom margin or gap */}
              <div className="flex gap-1 xl:gap-2 items-center">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-3 py-2 text-[14px] font-medium rounded-lg transition-all duration-300 relative group ${
                      isDarkMode 
                        ? 'text-slate-300 hover:text-white' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{isArabic ? item.labelAr : item.labelEn}</span>
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </a>
                ))}
              </div>
            </nav>

            {/* Utilities (Language, Theme, CTA) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switch */}
              <button
                onClick={() => setIsArabic(!isArabic)}
                className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold ${
                  isDarkMode 
                    ? 'border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                title={isArabic ? 'Switch to English' : 'التحويل للعربية'}
                id="btn-lang-switch"
              >
                <Globe size={16} className="text-luxury-gold" />
                <span>{isArabic ? 'English' : 'العربية'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2.5 rounded-xl border transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                id="btn-theme-toggle"
              >
                {isDarkMode ? <Sun size={16} className="text-luxury-gold" /> : <Moon size={16} className="text-slate-500" />}
              </button>

              {/* Main Call to Action */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-slate-950 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 flex items-center gap-2 transform hover:-translate-y-0.5"
                id="cta-nav"
              >
                {isArabic ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              </a>
            </div>

            {/* Mobile menu button and quick toggles */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Quick Language Toggle */}
              <button
                onClick={() => setIsArabic(!isArabic)}
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-600'
                }`}
                id="btn-lang-mobile"
              >
                <Globe size={16} className="text-luxury-gold" />
              </button>

              {/* Quick Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg border transition-all duration-300 ${
                  isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-600'
                }`}
                id="btn-theme-mobile"
              >
                {isDarkMode ? <Sun size={16} className="text-luxury-gold" /> : <Moon size={16} />}
              </button>

              {/* Burger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'text-slate-200 hover:bg-slate-900' : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-expanded={isOpen}
                id="btn-burger-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden border-b overflow-hidden ${
                isDarkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'
              }`}
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isDarkMode 
                        ? 'text-slate-300 hover:bg-slate-900 hover:text-white' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    {isArabic ? item.labelAr : item.labelEn}
                  </a>
                ))}
                
                {/* Mobile Call to Action */}
                <div className="pt-4 border-t border-slate-800 mt-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    className="block w-full text-center bg-luxury-gold hover:bg-luxury-gold-dark text-slate-950 py-3.5 rounded-xl font-bold transition-all duration-300"
                    id="cta-mobile"
                  >
                    {isArabic ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
