export interface Property {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  priceAr: string;
  priceEn: string;
  priceNum: number;
  districtAr: string;
  districtEn: string;
  cityAr: string;
  cityEn: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  image: string;
  type: 'villa' | 'apartment' | 'duplex' | 'commercial' | 'land';
  purpose: 'sale' | 'rent';
  featured: boolean;
}

export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  contentAr: string;
  contentEn: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export interface FeatureItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  image: string;
}
