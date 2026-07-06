import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/realEstateData';

interface FAQProps {
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function FAQ({ isArabic, isDarkMode }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={`py-24 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950/40' : 'bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-luxury-gold px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
          >
            {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl sm:text-4xl font-black mt-4 font-sans ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          >
            {isArabic ? 'استفسارات يطرحها عملاؤنا' : 'Inquiries Raised By Our Clients'}
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
              ? 'إجابات تفصيلية من وكلائنا العقاريين لمساعدتك في فهم الإجراءات واتخاذ القرار السليم.' 
              : 'Detailed answers from our professional real estate advisors to help you understand processes and decide wisely.'}
          </motion.p>
        </div>

        {/* FAQ Items Grid/Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDarkMode 
                      ? 'bg-slate-900 border-luxury-gold/50 shadow-lg shadow-black/20' 
                      : 'bg-white border-luxury-gold/40 shadow-md shadow-slate-100'
                    : isDarkMode
                      ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
                }`}
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full p-6 text-right flex justify-between items-center gap-4 cursor-pointer outline-none"
                  style={{ direction: isArabic ? 'rtl' : 'ltr' }}
                  id={`btn-faq-trigger-${faq.id}`}
                >
                  <span className={`text-sm sm:text-base font-bold font-sans transition-colors duration-300 flex items-center gap-3 ${
                    isOpen ? 'text-luxury-gold' : isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    <HelpCircle size={18} className="text-luxury-gold flex-shrink-0" />
                    <span>{isArabic ? faq.questionAr : faq.questionEn}</span>
                  </span>
                  
                  {/* Icon rotation */}
                  <div className={`p-1.5 rounded-lg border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-luxury-gold border-luxury-gold text-slate-950 rotate-180' 
                      : isDarkMode 
                        ? 'border-slate-800 text-slate-400' 
                        : 'border-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`px-6 pb-6 pt-1 text-xs sm:text-sm font-light leading-relaxed border-t ${
                        isDarkMode ? 'border-slate-800/60 text-slate-400' : 'border-slate-100 text-slate-600'
                      }`}>
                        {isArabic ? faq.answerAr : faq.answerEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
