import { LucideIcon } from 'lucide-react';

export interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  data: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  fullWidth?: boolean;
}