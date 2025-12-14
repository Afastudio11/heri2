import { Globe2, Briefcase, Shirt, Users, Lightbulb, ShieldCheck } from 'lucide-react';

export const BUSINESS_UNITS = [
  {
    id: 'events',
    title: "Event Organizer",
    subtitle: "Skyled Pro Indonesia",
    description: "A leading event organizer handling every aspect of planning, design, and execution. We specialize in MICE, Crowd Management, and high-quality production.",
    features: ["MICE & Corporate Events", "Crowd & Flow Management", "Multimedia & Streaming", "Stage & Visual Production"],
    icon: <Globe2 size={40} />,
    color: "bg-blue-600",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    link: "/event-organizer"
  },
  {
    id: 'consulting',
    title: "Consulting",
    subtitle: "Skyled Pro Consulting",
    description: "Your strategic partner for building trust and business sustainability. We bridge the gap between Social License to Operate (SLO), CSR, and ESG.",
    features: ["SLO (Social License to Operate)", "CSR & CCR Strategies", "ESG Roadmap & Reporting", "Social Mapping & Research"],
    icon: <Briefcase size={40} />,
    color: "bg-amber-500",
    textColor: "text-amber-600",
    bgLight: "bg-amber-50",
    link: "/consulting"
  },
  {
    id: 'production',
    title: "Production",
    subtitle: "Skyled Production",
    description: "High-quality custom textile and merchandise solutions. Professional, fast, and customized to elevate your brand identity.",
    features: ["Custom Textiles (Uniforms, Jerseys)", "Corporate Merchandise", "Printing Services", "Souvenirs & Gifts"],
    icon: <Shirt size={40} />,
    color: "bg-teal-500",
    textColor: "text-teal-600",
    bgLight: "bg-teal-50",
    link: "/production"
  }
];

export const CORE_VALUES = [
  {
    title: "Client Focus",
    description: "We prioritize your vision and satisfaction above all else.",
    icon: <Users size={32} />
  },
  {
    title: "Creativity",
    description: "Innovative solutions tailored to unique needs and challenges.",
    icon: <Lightbulb size={32} />
  },
  {
    title: "Integrity",
    description: "Maintaining the highest ethical and professional standards.",
    icon: <ShieldCheck size={32} />
  }
];

export const CLIENTS = [
  "Kementerian Kominfo", "PLN", "ASEAN Indonesia 2023", "Bappenas", 
  "ITDC", "Pertamina Mandalika", "BNI Life", "Bank BRI", 
  "Islamic Relief Worldwide", "UNESCO Global Geopark", "Kementerian BUMN"
];

export const CONTACT_INFO = {
  address: "Indonesia",
  phone1: "+62 878 8318 4796",
  phone2: "0896 3096 3302",
  email: "cv.skyledproindonesia@gmail.com",
  email2: "FDLpradana@gmail.com"
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Business Units', href: '#business' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICE_LINKS = [
  { name: 'Event Organizer', href: '/event-organizer' },
  { name: 'Consulting', href: '/consulting' },
  { name: 'Production', href: '/production' },
];
