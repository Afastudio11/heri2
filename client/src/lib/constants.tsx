import { Globe2, Briefcase, Shirt, Users, Lightbulb, ShieldCheck } from 'lucide-react';

export const BUSINESS_UNITS = [
  {
    id: 'events',
    title: "Event Organizer",
    subtitle: "Skyled Pro Indonesia",
    description: "Event organizer terkemuka yang menangani setiap aspek perencanaan, desain, dan eksekusi. Kami mengkhususkan diri dalam MICE, Crowd Management, dan produksi berkualitas tinggi.",
    features: ["MICE & Acara Korporat", "Manajemen Kerumunan & Alur", "Multimedia & Streaming", "Produksi Panggung & Visual"],
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
    description: "Mitra strategis Anda untuk membangun kepercayaan dan keberlanjutan bisnis. Kami menjembatani kesenjangan antara Social License to Operate (SLO), CSR, dan ESG.",
    features: ["SLO (Social License to Operate)", "Strategi CSR & CCR", "Roadmap & Pelaporan ESG", "Pemetaan Sosial & Riset"],
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
    description: "Solusi tekstil dan merchandise custom berkualitas tinggi. Profesional, cepat, dan dikustomisasi untuk mengangkat identitas brand Anda.",
    features: ["Tekstil Custom (Seragam, Jersey)", "Merchandise Korporat", "Layanan Percetakan", "Souvenir & Hadiah"],
    icon: <Shirt size={40} />,
    color: "bg-teal-500",
    textColor: "text-teal-600",
    bgLight: "bg-teal-50",
    link: "/production"
  }
];

export const CORE_VALUES = [
  {
    title: "Fokus Klien",
    description: "Kami mengutamakan visi dan kepuasan Anda di atas segalanya.",
    icon: <Users size={32} />
  },
  {
    title: "Kreativitas",
    description: "Solusi inovatif yang disesuaikan dengan kebutuhan dan tantangan unik.",
    icon: <Lightbulb size={32} />
  },
  {
    title: "Integritas",
    description: "Menjaga standar etika dan profesionalisme tertinggi.",
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
  phone: "+62 878 8318 4796",
  email: "contact@skyledpro.com"
};

export const NAV_LINKS = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang', href: '/#about' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Kontak', href: '/#contact' },
];

export const SERVICE_LINKS = [
  { name: 'Event Organizer', href: '/event-organizer' },
  { name: 'Consulting', href: '/consulting' },
  { name: 'Production', href: '/production' },
];
