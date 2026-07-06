import React, { useState } from 'react';
import { Search, MapPin, Building2, DollarSign, BedDouble, RotateCcw } from 'lucide-react';

interface Filters {
  type: string;
  city: string;
  district: string;
  priceRange: string;
  bedrooms: string;
}

interface SearchSectionProps {
  isArabic: boolean;
  isDarkMode: boolean;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  onSearch: () => void;
}

export default function SearchSection({ isArabic, isDarkMode, filters, setFilters, onSearch }: SearchSectionProps) {
  const [localFilters, setLocalFilters] = useState<Filters>({ ...filters });

  const handleSelectChange = (key: keyof Filters, value: string) => {
    const updated = { ...localFilters, [key]: value };
    setLocalFilters(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(localFilters);
    onSearch();
    // Scroll to properties section
    const element = document.querySelector('#properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    const reset = {
      type: 'all',
      city: 'all',
      district: 'all',
      priceRange: 'all',
      bedrooms: 'all'
    };
    setLocalFilters(reset);
    setFilters(reset);
    onSearch();
  };

  const propertyTypes = [
    { value: 'all', ar: 'جميع الأنواع', en: 'All Types' },
    { value: 'villa', ar: 'فيلا / قصر', en: 'Villa / Mansion' },
    { value: 'apartment', ar: 'شقة / بنتهاوس', en: 'Apartment / Penthouse' },
    { value: 'duplex', ar: 'دوبلكس / تاون هاوس', en: 'Duplex / Townhouse' },
    { value: 'commercial', ar: 'تجاري', en: 'Commercial' }
  ];

  const cities = [
    { value: 'all', ar: 'كل المدن', en: 'All Cities' },
    { value: 'Riyadh', ar: 'الرياض', en: 'Riyadh' }
  ];

  const districts = [
    { value: 'all', ar: 'جميع الأحياء', en: 'All Districts' },
    { value: 'Al Malqa', ar: 'حي الملقا', en: 'Al Malqa' },
    { value: 'Hittin', ar: 'حي حطين', en: 'Hittin' },
    { value: 'Al Yasmin', ar: 'حي الياسمين', en: 'Al Yasmin' },
    { value: 'Al Hada', ar: 'حي الهدا', en: 'Al Hada' },
    { value: 'Al Muhammadiyah', ar: 'حي المحمدية', en: 'Al Muhammadiyah' },
    { value: 'Al Nakheel', ar: 'حي النخيل', en: 'Al Nakheel' }
  ];

  const priceRanges = [
    { value: 'all', ar: 'جميع النطاقات', en: 'All Price Ranges' },
    { value: 'under-4m', ar: 'أقل من 4 مليون ر.س', en: 'Under 4M SAR' },
    { value: '4m-8m', ar: 'من 4 إلى 8 مليون ر.س', en: '4M - 8M SAR' },
    { value: '8m-15m', ar: 'من 8 إلى 15 مليون ر.س', en: '8M - 15M SAR' },
    { value: 'over-15m', ar: 'أكثر من 15 مليون ر.س', en: 'Over 15M SAR' }
  ];

  const bedroomOptions = [
    { value: 'all', ar: 'جميع الغرف', en: 'All Bedrooms' },
    { value: '3', ar: '3 غرف نوم', en: '3 Bedrooms' },
    { value: '4', ar: '4 غرف نوم', en: '4 Bedrooms' },
    { value: '5', ar: '5 غرف أو أكثر', en: '5+ Bedrooms' }
  ];

  return (
    <section id="search" className="relative z-20 -mt-16 sm:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-300 border ${
        isDarkMode 
          ? 'bg-slate-900/90 border-slate-800 shadow-black/40' 
          : 'bg-white/95 border-slate-100 shadow-slate-200/50'
      } backdrop-blur-xl`}>
        
        {/* Search header tabs or helper text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-200/10">
          <div>
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {isArabic ? 'ابحث عن عقارك المثالي في الرياض' : 'Search for Your Ideal Property in Riyadh'}
            </h3>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {isArabic 
                ? 'استخدم أدوات التصفية المتقدمة لتضييق نطاق البحث والعثور على ما يناسب تطلعاتك.' 
                : 'Use advanced filtering options to narrow down your search and find what fits your vision.'}
            </p>
          </div>
          
          <button
            onClick={handleReset}
            className={`flex items-center gap-2 text-xs font-semibold py-2 px-4 rounded-xl border transition-all duration-300 ${
              isDarkMode 
                ? 'border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white' 
                : 'border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-950'
            }`}
          >
            <RotateCcw size={14} />
            <span>{isArabic ? 'إعادة تعيين البحث' : 'Reset Search'}</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          
          {/* Property Type Filter */}
          <div className="flex flex-col gap-2">
            <label className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <Building2 size={14} className="text-luxury-gold" />
              <span>{isArabic ? 'نوع العقار' : 'Property Type'}</span>
            </label>
            <div className="relative">
              <select
                value={localFilters.type}
                onChange={(e) => handleSelectChange('type', e.target.value)}
                className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none appearance-none ${
                  isDarkMode 
                    ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                }`}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              >
                {propertyTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isArabic ? opt.ar : opt.en}
                  </option>
                ))}
              </select>
              <div className={`pointer-events-none absolute inset-y-0 flex items-center px-3 text-slate-500 ${
                isArabic ? 'left-0' : 'right-0'
              }`}>
                ▼
              </div>
            </div>
          </div>

          {/* District Filter */}
          <div className="flex flex-col gap-2">
            <label className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <MapPin size={14} className="text-luxury-gold" />
              <span>{isArabic ? 'الحي (شمال الرياض)' : 'District (Riyadh)'}</span>
            </label>
            <div className="relative">
              <select
                value={localFilters.district}
                onChange={(e) => handleSelectChange('district', e.target.value)}
                className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none appearance-none ${
                  isDarkMode 
                    ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                }`}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              >
                {districts.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isArabic ? opt.ar : opt.en}
                  </option>
                ))}
              </select>
              <div className={`pointer-events-none absolute inset-y-0 flex items-center px-3 text-slate-500 ${
                isArabic ? 'left-0' : 'right-0'
              }`}>
                ▼
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col gap-2">
            <label className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <DollarSign size={14} className="text-luxury-gold" />
              <span>{isArabic ? 'نطاق السعر' : 'Price Range'}</span>
            </label>
            <div className="relative">
              <select
                value={localFilters.priceRange}
                onChange={(e) => handleSelectChange('priceRange', e.target.value)}
                className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none appearance-none ${
                  isDarkMode 
                    ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                }`}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              >
                {priceRanges.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isArabic ? opt.ar : opt.en}
                  </option>
                ))}
              </select>
              <div className={`pointer-events-none absolute inset-y-0 flex items-center px-3 text-slate-500 ${
                isArabic ? 'left-0' : 'right-0'
              }`}>
                ▼
              </div>
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div className="flex flex-col gap-2">
            <label className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <BedDouble size={14} className="text-luxury-gold" />
              <span>{isArabic ? 'غرف النوم' : 'Bedrooms'}</span>
            </label>
            <div className="relative">
              <select
                value={localFilters.bedrooms}
                onChange={(e) => handleSelectChange('bedrooms', e.target.value)}
                className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-300 outline-none appearance-none ${
                  isDarkMode 
                    ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                }`}
                style={{ direction: isArabic ? 'rtl' : 'ltr' }}
              >
                {bedroomOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isArabic ? opt.ar : opt.en}
                  </option>
                ))}
              </select>
              <div className={`pointer-events-none absolute inset-y-0 flex items-center px-3 text-slate-500 ${
                isArabic ? 'left-0' : 'right-0'
              }`}>
                ▼
              </div>
            </div>
          </div>

          {/* Submit Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-slate-950 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer text-sm"
              id="btn-search-submit"
            >
              <Search size={18} />
              <span>{isArabic ? 'ابحث الآن' : 'Search Now'}</span>
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
