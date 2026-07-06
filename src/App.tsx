import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import Logo from './components/Logo';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import FeaturedProperties from './components/FeaturedProperties';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { properties } from './data/realEstateData';
import { Property } from './types';

interface Filters {
  type: string;
  city: string;
  district: string;
  priceRange: string;
  bedrooms: string;
}

export default function App() {
  const [isArabic, setIsArabic] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [filters, setFilters] = useState<Filters>({
    type: 'all',
    city: 'all',
    district: 'all',
    priceRange: 'all',
    bedrooms: 'all'
  });

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  // Synchronize document direction and language code
  useEffect(() => {
    if (isArabic) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [isArabic]);

  // Synchronize dark class on document root for standard Tailwind dark mode support
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Simulate premium initial luxury loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Filter evaluation logic
  const handleSearch = () => {
    const filtered = properties.filter((prop) => {
      // 1. Property Type
      if (filters.type !== 'all' && prop.type !== filters.type) return false;
      
      // 2. City
      if (filters.city !== 'all' && prop.cityEn !== filters.city) return false;
      
      // 3. District
      if (filters.district !== 'all' && prop.districtEn !== filters.district) return false;
      
      // 4. Bedrooms
      if (filters.bedrooms !== 'all') {
        const bedCount = parseInt(filters.bedrooms);
        if (bedCount === 5) {
          if (prop.bedrooms < 5) return false;
        } else {
          if (prop.bedrooms !== bedCount) return false;
        }
      }
      
      // 5. Price Ranges
      if (filters.priceRange !== 'all') {
        if (filters.priceRange === 'under-4m' && prop.priceNum >= 4000000) return false;
        if (filters.priceRange === '4m-8m' && (prop.priceNum < 4000000 || prop.priceNum > 8000000)) return false;
        if (filters.priceRange === '8m-15m' && (prop.priceNum < 8000000 || prop.priceNum > 15000000)) return false;
        if (filters.priceRange === 'over-15m' && prop.priceNum <= 15000000) return false;
      }
      
      return true;
    });

    setFilteredProperties(filtered);
  };

  // Re-run filter automatically whenever filters state updates
  useEffect(() => {
    handleSearch();
  }, [filters]);

  return (
    <>
      {/* Luxury Loading Intro */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-slate-950 z-[9999] flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center max-w-sm px-6 text-center">
              {/* Brand Logo with luxurious entry animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mb-2"
              >
                <Logo isDarkMode={true} isArabic={isArabic} layout="vertical" />
              </motion.div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-24 h-[1px] bg-luxury-gold mt-4 origin-center"
              />
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[10px] text-luxury-gold/70 mt-3 font-semibold flex items-center gap-1.5"
              >
                <Sparkles size={12} className="animate-pulse" />
                <span>{isArabic ? 'نُحاكي تطلعاتك منذ 2008...' : 'Emulating your aspirations since 2008...'}</span>
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Container */}
      <div className={`min-h-screen transition-colors duration-500 font-sans ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}>
        
        {/* Navigation bar (sticky) */}
        <Header 
          isArabic={isArabic} 
          setIsArabic={setIsArabic} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />

        {/* Hero Banner Area */}
        <Hero isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Interactive Properties Search Engine */}
        <SearchSection 
          isArabic={isArabic} 
          isDarkMode={isDarkMode} 
          filters={filters} 
          setFilters={setFilters} 
          onSearch={handleSearch} 
        />

        {/* Six Premium Listings and Detail Overlay Panels */}
        <FeaturedProperties 
          isArabic={isArabic} 
          isDarkMode={isDarkMode} 
          filteredProperties={filteredProperties} 
        />

        {/* About Corporate Section & Statistics Panels */}
        <About isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Specialized Bespoke Service Matrices */}
        <Services isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Corporate Distinctions & Visions Cards */}
        <WhyChooseUs isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Luxury Masonry Grid Showcase & Slideshow overlays */}
        <Gallery isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Saudi Investors Testimonials Sliding Desk */}
        <Testimonials isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Interactive Advisory FAQ Accordions */}
        <FAQ isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Comprehensive Call & Contact Form desk */}
        <Contact isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Footer Area with Official accreditation elements */}
        <Footer isArabic={isArabic} isDarkMode={isDarkMode} />

        {/* Floating Fast Access desks & back-to-top */}
        <FloatingActions isArabic={isArabic} />

      </div>
    </>
  );
}
