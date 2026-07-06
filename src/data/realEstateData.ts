import { Property, Service, Testimonial, FAQItem, FeatureItem, GalleryItem } from '../types';

// ==========================================
// IMAGE PLACEHOLDERS
// Organized clearly to be easily replaced when official assets are uploaded.
// ==========================================
export const ImagePlaceholders = {
  // Hero section background image
  HeroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
  
  // Property listing images (6 featured properties)
  PropertyImage1: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80', // Villa in Al Malqa
  PropertyImage2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', // Penthouse in Hittin
  PropertyImage3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', // Duplex in Al Yasmin
  PropertyImage4: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80', // Mansion in Al Hada
  PropertyImage5: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', // Townhouse in Al Muhammadiyah
  PropertyImage6: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // Office in Al Nakheel

  // About us background/illustration images
  AboutImage1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', // Team/Meeting Room Interior (corresponds to input_file_0)
  AboutImage2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // Office Building Exterior (corresponds to input_file_1)

  // Gallery images (Luxury masonry items)
  GalleryImage1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  GalleryImage2: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
  GalleryImage3: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
  GalleryImage4: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  GalleryImage5: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
  GalleryImage6: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
};

export const properties: Property[] = [
  {
    id: 'prop-1',
    titleAr: 'فيلا مودرن فاخرة مع مسبح خاص',
    titleEn: 'Luxury Modern Villa with Private Pool',
    descriptionAr: 'فيلا بتصميم عصري استثنائي في أرقى أحياء شمال الرياض، تتميز بمسطحات خضراء، ومسبح خاص، وتجهيزات ذكية متكاملة ومصعد داخلي.',
    descriptionEn: 'Exceptionally designed modern villa in Riyadh’s most prestigious northern district, featuring lush landscaping, private pool, smart home integration, and an internal elevator.',
    priceAr: '8,500,000 ر.س',
    priceEn: '8,500,000 SAR',
    priceNum: 8500000,
    districtAr: 'حي الملقا',
    districtEn: 'Al Malqa',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    bedrooms: 5,
    bathrooms: 6,
    area: 450,
    image: ImagePlaceholders.PropertyImage1,
    type: 'villa',
    purpose: 'sale',
    featured: true
  },
  {
    id: 'prop-2',
    titleAr: 'بنتهاوس فاخر بإطلالة بانورامية',
    titleEn: 'Luxury Penthouse with Panoramic Views',
    descriptionAr: 'بنتهاوس راقٍ في مشروع سكني مغلق بحي حطين، يضم تراس واسع بإطلالات خلابة على مركز الملك عبد الله المالي، تشطيبات فاخرة وتصميم معاصر.',
    descriptionEn: 'Elegant penthouse in a gated residential project in Hittin, boasting a spacious terrace with breathtaking views of KAFD, ultra-luxury finishes, and contemporary design.',
    priceAr: '4,200,000 ر.س',
    priceEn: '4,200,000 SAR',
    priceNum: 4200000,
    districtAr: 'حي حطين',
    districtEn: 'Hittin',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    bedrooms: 3,
    bathrooms: 4,
    area: 280,
    image: ImagePlaceholders.PropertyImage2,
    type: 'apartment',
    purpose: 'sale',
    featured: true
  },
  {
    id: 'prop-3',
    titleAr: 'دوبلكس أنيق بتشطيبات راقية',
    titleEn: 'Elegant Duplex with Premium Finishes',
    descriptionAr: 'دوبلكس متطور في حي الياسمين يتميز بتوزيع مثالي للمساحات، فناء خارجي واسع، تكييف مركزي، وموقف خاص لسيارتين.',
    descriptionEn: 'Sophisticated duplex in Al Yasmin featuring ideal space distribution, a wide private courtyard, central AC, and private parking for two vehicles.',
    priceAr: '3,800,000 ر.س',
    priceEn: '3,800,000 SAR',
    priceNum: 3800000,
    districtAr: 'حي الياسمين',
    districtEn: 'Al Yasmin',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    image: ImagePlaceholders.PropertyImage3,
    type: 'duplex',
    purpose: 'sale',
    featured: true
  },
  {
    id: 'prop-4',
    titleAr: 'قصر ملكي كلاسيكي في حي الهدا',
    titleEn: 'Grand Classical Mansion in Al Hada',
    descriptionAr: 'قصر رائع بنمط كلاسيكي متميز بالقرب من حي السفارات، يحتوي على مجالس ضيافة ضخمة، ملحق خارجي، حدائق غناء ومسبح أولمبي.',
    descriptionEn: 'Stunning classic-style mansion near the Diplomatic Quarter, featuring expansive formal reception halls, external guest pavilion, lush gardens, and an Olympic-sized pool.',
    priceAr: '24,000,000 ر.س',
    priceEn: '24,000,000 SAR',
    priceNum: 24000000,
    districtAr: 'حي الهدا',
    districtEn: 'Al Hada',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    bedrooms: 6,
    bathrooms: 8,
    area: 1200,
    image: ImagePlaceholders.PropertyImage4,
    type: 'villa',
    purpose: 'sale',
    featured: true
  },
  {
    id: 'prop-5',
    titleAr: 'تاون هاوس ذكي بتصميم عصري',
    titleEn: 'Smart Townhouse with Modern Aesthetics',
    descriptionAr: 'تاون هاوس عصري متكامل مع نظام تحكم ذكي كامل في حي المحمدية، صالة مفتوحة بأسقف مرتفعة وموقع حيوي مميز.',
    descriptionEn: 'Ultra-modern townhouse integrated with full smart home automation in Al Muhammadiyah, boasting high-ceiling open living areas and a highly desirable location.',
    priceAr: '4,900,000 ر.س',
    priceEn: '4,900,000 SAR',
    priceNum: 4900000,
    districtAr: 'حي المحمدية',
    districtEn: 'Al Muhammadiyah',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    bedrooms: 4,
    bathrooms: 5,
    area: 300,
    image: ImagePlaceholders.PropertyImage5,
    type: 'duplex',
    purpose: 'sale',
    featured: true
  },
  {
    id: 'prop-6',
    titleAr: 'مكتب تجاري فاخر في مبنى حديث',
    titleEn: 'Premium Commercial Office in Modern Building',
    descriptionAr: 'مقر تجاري متميز في حي النخيل مجهز بالكامل للشركات الراقية، واجهات زجاجية واسعة، إطلالات ممتازة، وخدمة أمن ومواقف متطورة.',
    descriptionEn: 'Outstanding commercial space in Al Nakheel fully optimized for upscale firms, featuring floor-to-ceiling glass facades, prime location, and professional security & parking infrastructure.',
    priceAr: '12,000,000 ر.س',
    priceEn: '12,000,000 SAR',
    priceNum: 12000000,
    districtAr: 'حي النخيل',
    districtEn: 'Al Nakheel',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    bedrooms: 4, // Represents office suites
    bathrooms: 3,
    area: 500,
    image: ImagePlaceholders.PropertyImage6,
    type: 'commercial',
    purpose: 'sale',
    featured: true
  }
];

export const services: Service[] = [
  {
    id: 'srv-1',
    titleAr: 'بيع العقارات',
    titleEn: 'Property Sales',
    descriptionAr: 'تسويق عقاراتكم باحترافية عالية وشبكة علاقات واسعة للوصول إلى المشتري المثالي بأفضل قيمة سوقية.',
    descriptionEn: 'Marketing your properties with premium professionalism and an extensive network to reach the ideal buyer at the absolute best market value.',
    iconName: 'Home'
  },
  {
    id: 'srv-2',
    titleAr: 'شراء العقارات',
    titleEn: 'Property Acquisitions',
    descriptionAr: 'نساعدكم في العثور على عقار أحلامكم أو فرصتكم الاستثمارية التالية بناءً على دراسات وتحليلات دقيقة للسوق.',
    descriptionEn: 'We guide you in finding your dream property or next investment opportunity backed by rigorous market research and expert analysis.',
    iconName: 'Search'
  },
  {
    id: 'srv-3',
    titleAr: 'تأجير العقارات',
    titleEn: 'Property Leasing',
    descriptionAr: 'حلول تأجيرية مرنة ومتكاملة تضمن اختيار المستأجرين الملائمين وتحقيق عوائد مجزية ومستقرة.',
    descriptionEn: 'Flexible and comprehensive leasing solutions ensuring the selection of reliable tenants while securing stable, attractive yields.',
    iconName: 'Key'
  },
  {
    id: 'srv-4',
    titleAr: 'إدارة الأملاك',
    titleEn: 'Property Management',
    descriptionAr: 'إدارة شاملة لعقاراتكم تشمل الصيانة، العقود، تحصيل الإيجارات، ورعاية المستأجرين لراحة بال تامة وعوائد مستدامة.',
    descriptionEn: 'Comprehensive management covering maintenance, contracts, rent collection, and tenant relations for complete peace of mind and sustainable returns.',
    iconName: 'Briefcase'
  },
  {
    id: 'srv-5',
    titleAr: 'الاستثمار العقاري',
    titleEn: 'Real Estate Investment',
    descriptionAr: 'تقديم محافظ وفرص استثمارية واعدة في مدينة الرياض تحقق نمواً رأسمالياً وعوائد تشغيلية ممتازة.',
    descriptionEn: 'Presenting highly lucrative investment portfolios and opportunities in Riyadh with high potential for capital growth and exceptional rental returns.',
    iconName: 'TrendingUp'
  },
  {
    id: 'srv-6',
    titleAr: 'الاستشارات العقارية',
    titleEn: 'Real Estate Consulting',
    descriptionAr: 'استشارات قانونية وفنية ومالية من خبراء مرخصين لمساعدتكم في اتخاذ القرارات العقارية بثقة تامة.',
    descriptionEn: 'Legal, technical, and financial advisory from certified experts to empower your real estate decisions with complete confidence.',
    iconName: 'FileText'
  }
];

export const features: FeatureItem[] = [
  {
    id: 'feat-1',
    titleAr: 'خبرة منذ 2008',
    titleEn: 'Established Since 2008',
    descriptionAr: 'أكثر من عقد ونصف من الريادة والمعرفة المتعمقة بسوق العقارات في الرياض.',
    descriptionEn: 'Over a decade and a half of leadership and profound knowledge of Riyadh’s real estate landscape.',
    iconName: 'Award'
  },
  {
    id: 'feat-2',
    titleAr: 'فريق محترف',
    titleEn: 'Professional Team',
    descriptionAr: 'نخبة من المستشارين العقاريين المرخصين والملتزمين بتقديم خدمات رفيعة المستوى.',
    descriptionEn: 'An elite squad of licensed property consultants dedicated to providing high-end bespoke services.',
    iconName: 'Users'
  },
  {
    id: 'feat-3',
    titleAr: 'شفافية كاملة',
    titleEn: 'Absolute Transparency',
    descriptionAr: 'نؤمن بأن الصدق والوضوح هما أساس العلاقة المستدامة مع شركائنا وعملائنا.',
    descriptionEn: 'We firmly believe that honesty and clarity are the pillars of long-term partnerships with our clients.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'feat-4',
    titleAr: 'أفضل الفرص الاستثمارية',
    titleEn: 'Prime Investment Opportunities',
    descriptionAr: 'الوصول إلى صفقات حصرية وعقارات قبل طرحها في السوق العام لضمان أفضل العوائد.',
    descriptionEn: 'Access to exclusive, off-market deals and high-yield properties to ensure superior investment returns.',
    iconName: 'Sparkles'
  },
  {
    id: 'feat-5',
    titleAr: 'دعم متواصل',
    titleEn: 'Continuous Support',
    descriptionAr: 'مرافقة العميل في كل مرحلة، من المعاينة الأولى وحتى إفراغ الصك وما بعد البيع.',
    descriptionEn: 'Guiding you through every single step, from initial viewing to deed transfer and post-sale care.',
    iconName: 'Headphones'
  },
  {
    id: 'feat-6',
    titleAr: 'حلول مخصصة لكل عميل',
    titleEn: 'Tailored Client Solutions',
    descriptionAr: 'ندرس احتياجاتكم العقارية بدقة لتصميم استراتيجيات مخصصة تلبي تطلعاتكم تماماً.',
    descriptionEn: 'We carefully analyze your specific requirements to engineer custom strategies aligned with your aspirations.',
    iconName: 'Target'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    nameAr: 'م. عبد الرحمن الراجحي',
    nameEn: 'Eng. Abdulrahman Al-Rajhi',
    roleAr: 'مستثمر عقاري',
    roleEn: 'Real Estate Investor',
    contentAr: 'تعاملت مع شركة "على زاوية" لإدارة محفظتي العقارية في الرياض، ووجدت منهم احترافية فائقة في إدارة الأملاك ورفع العوائد الاستثمارية. خبرتهم التي تمتد منذ عام 2008 تظهر جلياً في جودة خدماتهم وسرعة استجابتهم.',
    contentEn: 'I partnered with On Corner to manage my real estate portfolio in Riyadh, and found supreme professionalism in property management and yield optimization. Their experience since 2008 is clearly reflected in their quality of service.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-2',
    nameAr: 'أ. سارة السديري',
    nameEn: 'Mrs. Sara Al-Sudairy',
    roleAr: 'سيدة أعمال',
    roleEn: 'Businesswoman',
    contentAr: 'شراء منزل العمر ليس قراراً سهلاً، ولكن فريق "على زاوية" رافقني بكل خطوة، وقدم لي النصح والمشورة بصدق وموضوعية حتى تملكنا الفيلا المناسبة في حي الملقا. أنصح بهم بشدة لكل من يبحث عن المصداقية والتميز.',
    contentEn: 'Buying a lifelong home is not easy, but On Corner team accompanied me at every step, offering objective advice until we secured the perfect villa in Al Malqa. I highly recommend them to anyone seeking integrity and luxury.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-3',
    nameAr: 'د. خالد القحطاني',
    nameEn: 'Dr. Khalid Al-Qahtani',
    roleAr: 'أستاذ جامعي',
    roleEn: 'University Professor',
    contentAr: 'تميزت تجربتي مع شركة على زاوية بالوضوح والسرعة في تملك دوبلكس أنيق بحي الياسمين. إجراءات التمويل والإفراغ تمت بسلاسة تامة بفضل فريقهم القانوني المحترف والمتمكن.',
    contentEn: 'My experience with On Corner was characterized by absolute clarity and speed in acquiring an elegant duplex in Al Yasmin. The financing and title transfer procedures went smoothly thanks to their highly capable team.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    questionAr: 'كيف أبدأ إجراءات شراء عقار معكم؟',
    questionEn: 'How do I start the property buying process with you?',
    answerAr: 'تبدأ العملية بحجز استشارة مجانية عبر موقعنا أو التواصل معنا هاتفياً. سيقوم مستشار عقاري متخصص بدراسة طلبكم وميزانيتكم، ثم عرض العقارات المناسبة ومرافقتكم في جولات المعاينة وحتى إتمام الإفراغ القانوني.',
    answerEn: 'The process begins by booking a free consultation through our website or contacting us directly. A dedicated real estate advisor will analyze your requirements and budget, present suitable options, accompany you on site visits, and guide you through the final deed transfer.'
  },
  {
    id: 'faq-2',
    questionAr: 'هل تقدمون استشارات عقارية وتمويلية مجانية؟',
    questionEn: 'Do you offer free real estate and financial consultations?',
    answerAr: 'نعم، نقدم استشارات أولية مجانية لجميع عملائنا لمساعدتهم في فهم اتجاهات السوق، وتحليل العوائد الاستثمارية المتوقعة، وربطهم بأفضل الجهات التمويلية المعتمدة في المملكة العربية السعودية.',
    answerEn: 'Yes, we provide free initial consultations to all our clients to help them grasp market trends, analyze expected investment returns, and connect them with the most reputable licensed financial institutions in Saudi Arabia.'
  },
  {
    id: 'faq-3',
    questionAr: 'ما هي المناطق الجغرافية التي تغطونها بخدماتكم؟',
    questionEn: 'What geographical areas do your services cover?',
    answerAr: 'نحن نركز بشكل رئيسي واحترافي على مدينة الرياض، لاسيما الأحياء الحيوية والراقية في شمال وشرق الرياض (مثل الملقا، حطين، الياسمين، الصحافة، النخيل، قرطبة وغيرها)، ونقدم خدماتنا للمستثمرين من كافة أنحاء المملكة وخارجها.',
    answerEn: 'We focus primarily and professionally on Riyadh city, particularly the vibrant and high-end northern and eastern districts (such as Al Malqa, Hittin, Al Yasmin, Al Sahafa, Al Nakheel, Qortuba, etc.), serving investors from all over the Kingdom and abroad.'
  },
  {
    id: 'faq-4',
    questionAr: 'هل تساعدون المستثمرين العقاريين في إدارة أملاكهم؟',
    questionEn: 'Do you assist real estate investors with property management?',
    answerAr: 'بكل تأكيد، إدارة الأملاك هي أحد ركائز خدماتنا الأساسية. ندير العقارات السكنية والتجارية نيابة عن ملاكها، بما يشمل تسويق الوحدات، تحصيل الإيجارات، الصيانة الدورية، وتجديد العقود لضمان تدفق نقدي مستقر وراحة بال تامة للمستثمر.',
    answerEn: 'Absolutely. Property management is one of our core pillars. We manage residential and commercial properties on behalf of landlords, including unit marketing, rent collection, periodic maintenance, and lease renewals to secure steady cash flow and absolute peace of mind.'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    titleAr: 'واجهة فيلا حديثة',
    titleEn: 'Modern Villa Facade',
    categoryAr: 'فلل فاخرة',
    categoryEn: 'Luxury Villas',
    image: ImagePlaceholders.GalleryImage1
  },
  {
    id: 'gal-2',
    titleAr: 'غرفة معيشة بأسلوب معاصر',
    titleEn: 'Contemporary Living Space',
    categoryAr: 'تصميم داخلي',
    categoryEn: 'Interior Design',
    image: ImagePlaceholders.GalleryImage2
  },
  {
    id: 'gal-3',
    titleAr: 'مسبح وتراس خارجي مذهل',
    titleEn: 'Stunning Pool & Outdoor Terrace',
    categoryAr: 'خارجية ومسابح',
    categoryEn: 'Pool & Exterior',
    image: ImagePlaceholders.GalleryImage3
  },
  {
    id: 'gal-4',
    titleAr: 'مطبخ ذكي متكامل',
    titleEn: 'Integrated Smart Kitchen',
    categoryAr: 'تصميم داخلي',
    categoryEn: 'Interior Design',
    image: ImagePlaceholders.GalleryImage4
  },
  {
    id: 'gal-5',
    titleAr: 'مدخل قصر كلاسيكي راقٍ',
    titleEn: 'Classic Mansion High-End Entryway',
    categoryAr: 'قصور وتصاميم كلاسيكية',
    categoryEn: 'Classical Mansions',
    image: ImagePlaceholders.GalleryImage5
  },
  {
    id: 'gal-6',
    titleAr: 'إطلالة ليلية على مسبح الفيلا',
    titleEn: 'Night View of Villa Pool Area',
    categoryAr: 'خارجية ومسابح',
    categoryEn: 'Pool & Exterior',
    image: ImagePlaceholders.GalleryImage6
  }
];
