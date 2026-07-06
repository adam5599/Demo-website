import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BedDouble, Bath, Maximize2, MapPin, X, Phone, MessageSquare, Check, Mail, ShieldAlert } from 'lucide-react';
import { Property } from '../types';
import { properties } from '../data/realEstateData';

interface FeaturedPropertiesProps {
  isArabic: boolean;
  isDarkMode: boolean;
  filteredProperties: Property[];
}

export default function FeaturedProperties({ isArabic, isDarkMode, filteredProperties }: FeaturedPropertiesProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [contactSuccess, setContactSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', phone: '', msg: '' });

  // Secondary tab filtering (by type) if search wasn't triggered
  const displayedProperties = filteredProperties.filter((prop) => {
    if (activeTab === 'all') return true;
    return prop.type === activeTab;
  });

  const propertyTypes = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'villa', labelAr: 'فلل وقصور', labelEn: 'Villas & Mansions' },
    { id: 'apartment', labelAr: 'شقق وبنتهاوس', labelEn: 'Apartments' },
    { id: 'duplex', labelAr: 'دوبلكس وتاون هاوس', labelEn: 'Duplexes' },
    { id: 'commercial', labelAr: 'تجاري', labelEn: 'Commercial' }
  ];

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setFormData({ name: '', phone: '', msg: '' });
      setSelectedProperty(null);
    }, 2500);
  };

  return (
    <section id="properties" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
        >
          {isArabic ? 'عقاراتنا المميزة' : 'Our Featured Properties'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl sm:text-4xl font-black mt-4 font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {isArabic ? 'استكشف أرقى العقارات في الرياض' : 'Explore the Most Luxurious Properties in Riyadh'}
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
            ? 'مجموعة منتقاة بعناية من الفلل والقصور والشقق الفاخرة التي تلبي تطلعات النخبة وتوفر أفضل الفرص الاستثمارية.' 
            : 'A handpicked curation of villas, mansions, and luxury apartments satisfying elite standards and delivering outstanding yields.'}
        </motion.p>
      </div>

      {/* Property Type Filtering Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {propertyTypes.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-luxury-gold text-slate-950 shadow-md shadow-luxury-gold/20'
                : isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-100 shadow-sm'
            }`}
          >
            {isArabic ? tab.labelAr : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      {displayedProperties.length === 0 ? (
        <div className={`text-center py-16 rounded-2xl border ${
          isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50 border-slate-200'
        }`}>
          <ShieldAlert className="mx-auto text-luxury-gold mb-4" size={48} />
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {isArabic ? 'لم نجد عقارات تطابق بحثك' : 'No properties matched your search'}
          </h3>
          <p className={`text-xs mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {isArabic ? 'يرجى تجربة إعادة تعيين مرشحات البحث لعرض جميع العقارات.' : 'Try resetting search filters to display all premium options.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProperties.map((prop) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                key={prop.id}
                className={`group rounded-3xl overflow-hidden transition-all duration-500 flex flex-col h-full border ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-800/80 shadow-2xl shadow-black/20' 
                    : 'bg-white border-slate-100 shadow-lg shadow-slate-100/40'
                }`}
              >
                {/* Property Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={isArabic ? prop.titleAr : prop.titleEn}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-md text-luxury-gold px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {prop.type === 'villa' && (isArabic ? 'فيلا فاخرة' : 'Luxury Villa')}
                    {prop.type === 'apartment' && (isArabic ? 'شقة راقية' : 'Premium Apartment')}
                    {prop.type === 'duplex' && (isArabic ? 'دوبلكس ذكي' : 'Smart Duplex')}
                    {prop.type === 'commercial' && (isArabic ? 'تجاري مميز' : 'Prime Commercial')}
                  </div>
                  
                  {/* Rent / Sale Badge */}
                  <div className="absolute top-4 left-4 bg-luxury-gold text-slate-950 px-3 py-1 rounded-lg text-[10px] font-bold">
                    {prop.purpose === 'sale' ? (isArabic ? 'للبيع' : 'For Sale') : (isArabic ? 'للإيجار' : 'For Lease')}
                  </div>

                  {/* Price overlay at bottom of image */}
                  <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5">
                    <span className="text-luxury-gold font-black text-lg">
                      {isArabic ? prop.priceAr : prop.priceEn}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-xs text-luxury-gold font-bold mb-3">
                    <MapPin size={14} />
                    <span>{isArabic ? `${prop.districtAr}، ${prop.cityAr}` : `${prop.districtEn}, ${prop.cityEn}`}</span>
                  </div>

                  <h3 className={`text-lg font-bold leading-snug group-hover:text-luxury-gold transition-colors duration-300 mb-2 font-sans ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {isArabic ? prop.titleAr : prop.titleEn}
                  </h3>

                  <p className={`text-xs line-clamp-2 mb-6 font-light ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {isArabic ? prop.descriptionAr : prop.descriptionEn}
                  </p>

                  {/* Technical Specs row */}
                  <div className={`grid grid-cols-3 gap-2 py-4 border-t border-b mb-6 text-xs font-semibold ${
                    isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
                  }`}>
                    <div className="flex flex-col items-center gap-1">
                      <BedDouble size={16} className="text-luxury-gold" />
                      <span>{prop.bedrooms} {isArabic ? 'غرف' : 'Beds'}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-r border-l border-slate-200/10">
                      <Bath size={16} className="text-luxury-gold" />
                      <span>{prop.bathrooms} {isArabic ? 'دورات' : 'Baths'}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Maximize2 size={16} className="text-luxury-gold" />
                      <span>{prop.area} {isArabic ? 'م²' : 'sqm'}</span>
                    </div>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => setSelectedProperty(prop)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 mt-auto flex items-center justify-center gap-2 border cursor-pointer ${
                      isDarkMode 
                        ? 'border-slate-800 bg-slate-900/40 text-white hover:bg-luxury-gold hover:text-slate-950 hover:border-luxury-gold' 
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-luxury-gold hover:text-slate-950 hover:border-luxury-gold hover:shadow-lg hover:shadow-luxury-gold/10'
                    }`}
                  >
                    <span>{isArabic ? 'عرض التفاصيل والطلب' : 'View Details & Inquire'}</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Premium Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className={`relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border z-10 max-h-[90vh] flex flex-col ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className={`absolute top-4 z-20 p-2 rounded-full backdrop-blur-md border hover:scale-110 transition-transform ${
                  isArabic ? 'left-4' : 'right-4'
                } ${
                  isDarkMode 
                    ? 'bg-slate-950/80 border-slate-800 text-white hover:bg-slate-800' 
                    : 'bg-white/80 border-slate-200 text-slate-800 hover:bg-slate-100'
                }`}
                id="btn-close-modal"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Hero image for the modal property */}
                <div className="relative h-64 sm:h-96 w-full">
                  <img
                    src={selectedProperty.image}
                    alt={isArabic ? selectedProperty.titleAr : selectedProperty.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Core details floating */}
                  <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-luxury-gold font-bold mb-1.5">
                        <MapPin size={14} />
                        <span>{isArabic ? `${selectedProperty.districtAr}، ${selectedProperty.cityAr}` : `${selectedProperty.districtEn}, ${selectedProperty.cityEn}`}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                        {isArabic ? selectedProperty.titleAr : selectedProperty.titleEn}
                      </h3>
                    </div>
                    <div className="bg-luxury-gold text-slate-950 px-5 py-2.5 rounded-2xl font-black text-xl shadow-lg">
                      {isArabic ? selectedProperty.priceAr : selectedProperty.priceEn}
                    </div>
                  </div>
                </div>

                {/* Modal main content grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Left Column (2 cols) - Details, Specs, Features */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className={`text-base font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {isArabic ? 'الوصف العقاري' : 'Property Description'}
                      </h4>
                      <p className={`text-sm leading-relaxed font-light ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {isArabic ? selectedProperty.descriptionAr : selectedProperty.descriptionEn}
                      </p>
                    </div>

                    {/* Technical details grid */}
                    <div className="border-t pt-6">
                      <h4 className={`text-base font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {isArabic ? 'المواصفات الأساسية' : 'Key Specifications'}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className={`p-4 rounded-2xl border text-center ${isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                          <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">{isArabic ? 'غرف النوم' : 'Bedrooms'}</p>
                          <p className="text-lg font-black text-luxury-gold">{selectedProperty.bedrooms}</p>
                        </div>
                        <div className={`p-4 rounded-2xl border text-center ${isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                          <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">{isArabic ? 'دورات المياه' : 'Bathrooms'}</p>
                          <p className="text-lg font-black text-luxury-gold">{selectedProperty.bathrooms}</p>
                        </div>
                        <div className={`p-4 rounded-2xl border text-center ${isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                          <p className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">{isArabic ? 'المساحة الإجمالية' : 'Total Area'}</p>
                          <p className="text-lg font-black text-luxury-gold">{selectedProperty.area} م²</p>
                        </div>
                      </div>
                    </div>

                    {/* Premium features checklist */}
                    <div className="border-t pt-6">
                      <h4 className={`text-base font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {isArabic ? 'المزايا والمرافق الراقية' : 'Premium Amenities'}
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold">
                        {[
                          { ar: 'أنظمة تحكم ذكية متكاملة', en: 'Smart home control systems' },
                          { ar: 'تكييف مركزي متطور (VRF)', en: 'Advanced central VRF AC' },
                          { ar: 'عزل حراري ومائي ممتاز', en: 'Premium thermo & hydro insulation' },
                          { ar: 'موقف خاص مظلل للسيارات', en: 'Private shaded parking slots' },
                          { ar: 'غرفة للعاملة المنزلية مع دورة مياه', en: "Maid's room with private bath" },
                          { ar: 'قريب من المدارس والمراكز الفاخرة', en: 'Near high-end schools & malls' }
                        ].map((amenity, i) => (
                          <div key={i} className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            <div className="p-1 rounded-full bg-luxury-gold/10 text-luxury-gold">
                              <Check size={14} />
                            </div>
                            <span>{isArabic ? amenity.ar : amenity.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column (1 col) - Request Inquiries Form */}
                  <div className="border-t md:border-t-0 md:border-r border-slate-200/10 md:pr-6">
                    <div className={`p-5 rounded-2xl border sticky top-0 ${
                      isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100'
                    }`}>
                      <h4 className={`text-base font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        <MessageSquare size={18} className="text-luxury-gold" />
                        <span>{isArabic ? 'طلب استفسار عقاري' : 'Request Property Info'}</span>
                      </h4>

                      {contactSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 p-4 rounded-xl text-center text-xs font-bold space-y-2 py-8"
                        >
                          <Check className="mx-auto text-emerald-500" size={32} />
                          <p>{isArabic ? 'شكراً لك! تم إرسال طلبك بنجاح.' : 'Thank you! Your request was sent.'}</p>
                          <p className="font-light text-[10px]">{isArabic ? 'سيتواصل معك أحد وكلائنا قريباً جداً.' : 'One of our advisors will contact you shortly.'}</p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleModalSubmit} className="space-y-4">
                          <div>
                            <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                              {isArabic ? 'الاسم بالكامل' : 'Full Name'}
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder={isArabic ? 'أ. أحمد المطيري' : 'e.g. John Doe'}
                              className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-semibold outline-none transition-all duration-300 ${
                                isDarkMode ? 'bg-slate-900 border-slate-800 text-white focus:border-luxury-gold' : 'bg-white border-slate-200 text-slate-800 focus:border-luxury-gold'
                              }`}
                            />
                          </div>

                          <div>
                            <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                              {isArabic ? 'رقم الهاتف (الواتساب)' : 'Phone Number (WhatsApp)'}
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder={isArabic ? '050 XXX XXXX' : '050 XXX XXXX'}
                              className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-semibold outline-none transition-all duration-300 ${
                                isDarkMode ? 'bg-slate-900 border-slate-800 text-white focus:border-luxury-gold' : 'bg-white border-slate-200 text-slate-800 focus:border-luxury-gold'
                              }`}
                              style={{ direction: 'ltr' }}
                            />
                          </div>

                          <div>
                            <label className={`block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                              {isArabic ? 'الرسالة (اختياري)' : 'Message (Optional)'}
                            </label>
                            <textarea
                              rows={2}
                              value={formData.msg}
                              onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                              placeholder={isArabic ? 'أرغب في الاستفسار عن تفاصيل المعاينة...' : 'I am interested in scheduling a viewing...'}
                              className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-semibold outline-none transition-all duration-300 ${
                                isDarkMode ? 'bg-slate-900 border-slate-800 text-white focus:border-luxury-gold' : 'bg-white border-slate-200 text-slate-800 focus:border-luxury-gold'
                              }`}
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-slate-950 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs"
                          >
                            <Mail size={16} />
                            <span>{isArabic ? 'إرسال طلب المعاينة' : 'Send Viewing Request'}</span>
                          </button>
                        </form>
                      )}

                      <div className="mt-4 pt-4 border-t border-slate-200/10 flex flex-col gap-2">
                        <a
                          href="https://wa.me/966500080103"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs"
                        >
                          <MessageSquare size={16} />
                          <span>{isArabic ? 'تواصل معنا عبر واتساب' : 'Contact via WhatsApp'}</span>
                        </a>
                        <a
                          href="tel:+966500080103"
                          className="w-full bg-slate-950/20 hover:bg-slate-950/35 border border-white/5 text-slate-400 font-bold py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs"
                        >
                          <Phone size={16} />
                          <span>+966 50 008 0103</span>
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
