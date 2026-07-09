import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Mail, MapPin, Check, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function Contact({ isArabic, isDarkMode }: ContactProps) {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    // Simulate submission and display elegant custom toast/modal
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      {/* Background soft ambient gold light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
        >
          {isArabic ? 'تواصل معنا' : 'Contact Us'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl sm:text-4xl font-black mt-4 font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          {isArabic ? 'ابدأ حواراً عقارياً متميزاً اليوم' : 'Begin a Premium Real Estate Dialogue Today'}
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
            ? 'سواء كنت ترغب في شراء منزل أحلامك، تسويق عقارك، أو استكشاف فرصة استثمارية واعدة، فريقنا يسعد بخدمتكم على مدار الساعة.' 
            : 'Whether you desire to acquire your dream home, market your estate, or secure a high-yield opportunity, our team is ready to assist you.'}
        </motion.p>
      </div>

      {/* Main Grid: Info & Map vs Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Info & Map) - 5 cols */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            
            <h3 className={`text-xl font-bold font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {isArabic ? 'تفاصيل الاتصال والمكتب الرئيسي' : 'Contact Details & Head Office'}
            </h3>

            {/* Phone Card */}
            <a 
              href="tel:+96877155997" 
              className={`p-5 rounded-2xl border transition-all duration-300 flex gap-4 items-start group ${
                isDarkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-luxury-gold/30' : 'bg-white border-slate-100 hover:border-luxury-gold/20 shadow-sm'
              }`}
            >
              <div className="p-3 bg-luxury-gold/10 rounded-xl text-luxury-gold group-hover:bg-luxury-gold group-hover:text-slate-950 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {isArabic ? 'رقم الهاتف المباشر' : 'Direct Phone Line'}
                </h4>
                <p className={`text-base font-black tracking-wide font-sans group-hover:text-luxury-gold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`} dir="ltr">
                  +966 50 008 0103
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/96877155997" 
              target="_blank" 
              rel="noreferrer"
              className={`p-5 rounded-2xl border transition-all duration-300 flex gap-4 items-start group ${
                isDarkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-emerald-500/30' : 'bg-white border-slate-100 hover:border-emerald-500/20 shadow-sm'
              }`}
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {isArabic ? 'خدمة العملاء (واتساب)' : 'Customer Service (WhatsApp)'}
                </h4>
                <p className={`text-base font-black tracking-wide font-sans group-hover:text-emerald-500 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`} dir="ltr">
                  +966 50 008 0103
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:info@oncorner.com" 
              className={`p-5 rounded-2xl border transition-all duration-300 flex gap-4 items-start group ${
                isDarkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-luxury-gold/30' : 'bg-white border-slate-100 hover:border-luxury-gold/20 shadow-sm'
              }`}
            >
              <div className="p-3 bg-luxury-gold/10 rounded-xl text-luxury-gold group-hover:bg-luxury-gold group-hover:text-slate-950 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                </h4>
                <p className={`text-base font-black tracking-wide font-sans group-hover:text-luxury-gold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  info@oncorner.com
                </p>
              </div>
            </a>

            {/* Address Card */}
            <div 
              className={`p-5 rounded-2xl border transition-all duration-300 flex gap-4 items-start ${
                isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-100 shadow-sm'
              }`}
            >
              <div className="p-3 bg-luxury-gold/10 rounded-xl text-luxury-gold">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {isArabic ? 'عنوان المكتب' : 'Office Location'}
                </h4>
                <p className={`text-sm font-semibold leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {isArabic 
                    ? 'الأفلاج، حي الدريهمية، الرياض 12796، المملكة العربية السعودية' 
                    : 'Al Aflaj, Ad Duraihimiyah, Riyadh 12796, Saudi Arabia'}
                </p>
              </div>
            </div>

          </div>

          {/* Styled Map Placeholder / Embed Map */}
          <div className={`rounded-3xl overflow-hidden border h-64 shadow-inner relative flex items-center justify-center ${
            isDarkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-100 border-slate-200'
          }`}>
            {/* Real OpenStreetMap or Google Maps Iframe, but styled to look beautiful! */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.1852509177113!2d46.6833!3d24.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038!2sAl+Aflaj%2C+Riyadh!5e0!3m2!1sen!2ssa!4v1545"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: isDarkMode ? 'invert(90%) hue-rotate(180deg) opacity(80%)' : 'grayscale(15%) opacity(90%)' }} 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="On Corner Real Estate Services Riyadh Location Map"
            />
            {/* Floating indicator */}
            <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-luxury-gold font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>{isArabic ? 'مقرنا في الرياض' : 'Riyadh Head Office'}</span>
            </div>
          </div>

        </div>

        {/* Right Column (Contact Form) - 7 cols */}
        <div className="lg:col-span-7">
          <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isDarkMode 
              ? 'bg-slate-900/40 border-slate-800/80 shadow-2xl shadow-black/20' 
              : 'bg-white border-slate-100 shadow-xl shadow-slate-100/20'
          }`}>
            
            <h3 className={`text-xl font-bold font-sans mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {isArabic ? 'طلب استشارة أو استفسار مجاني' : 'Request Free Advice or Inquire'}
            </h3>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-luxury-gold/5 border border-luxury-gold/20 rounded-2xl p-8 text-center space-y-4 flex flex-col items-center justify-center py-16"
              >
                <div className="p-4 bg-luxury-gold/10 text-luxury-gold rounded-full animate-bounce">
                  <Check size={40} />
                </div>
                <h4 className="text-xl font-black text-luxury-gold font-sans">
                  {isArabic ? 'تم استلام طلبكم بفخامة!' : 'Inquiry Received Elegantly!'}
                </h4>
                <p className={`text-sm max-w-md ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {isArabic 
                    ? 'شكراً لتواصلك مع على زاوية للخدمات العقارية. لقد تم توجيه طلبكم إلى مستشار عقاري مختص في منطقة الرياض، وسنقوم بالاتصال بكم هاتفياً خلال ساعتين بحد أقصى.' 
                    : 'Thank you for reaching out to On Corner. Your request has been forwarded to a premium advisor in Riyadh. We will dial back within two hours max.'}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-luxury-gold font-bold bg-luxury-gold/10 px-4 py-2 rounded-full">
                  <Sparkles size={14} />
                  <span>{isArabic ? 'سعداء بثقتكم بنا منذ 2008' : 'Delighted by your trust since 2008'}</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isArabic ? 'الاسم بالكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isArabic ? 'أ. فيصل السديري' : 'e.g. Faisal Al-Sudairy'}
                      className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold outline-none transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                          : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {isArabic ? 'رقم الهاتف (الجوال)' : 'Phone Number (Mobile)'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isArabic ? '050 XXX XXXX' : '050 XXX XXXX'}
                      className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold outline-none transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                          : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                      }`}
                      style={{ direction: 'ltr' }}
                    />
                  </div>

                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={isArabic ? 'client@example.com' : 'client@example.com'}
                    className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold outline-none transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                    }`}
                  />
                </div>

                {/* Message Content */}
                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {isArabic ? 'تفاصيل طلبك الاستشاري أو العقاري' : 'Consultation or Property Request Details'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isArabic ? 'أبحث عن فيلا سكنية بحي الملقا بمساحة تزيد عن 400 متر...' : 'I am looking for a residential villa in Al Malqa with an area exceeding 400 sqm...'}
                    className={`w-full py-3.5 px-4 rounded-xl border text-sm font-semibold outline-none transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-950 border-slate-800 text-white focus:border-luxury-gold' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-luxury-gold focus:bg-white'
                    }`}
                  />
                </div>

                {/* Submit button with golden look */}
                <button
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-slate-950 font-black py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer text-base"
                  id="btn-contact-submit"
                >
                  <Send size={18} />
                  <span>{isArabic ? 'إرسال طلب الاستشارة الفاخرة' : 'Send Premium Advice Request'}</span>
                </button>

                <p className={`text-[10px] text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {isArabic 
                    ? 'نحن نحترم خصوصية معلوماتك تماماً. سيتم التعامل مع بياناتك بسرية قانونية فائقة.' 
                    : 'We absolutely respect your privacy. Your data will be treated with top legal confidentiality.'}
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
