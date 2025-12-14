import { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

const PORTFOLIO_EVENTS = [
  {
    id: 1,
    title: "ASEAN Blue Economy Forum",
    subtitle: "Pertemuan Menteri Ekonomi ASEAN",
    description: "Manajemen event lengkap untuk pertemuan tingkat menteri ASEAN, termasuk roundtable discussion, gala dinner, dan penanganan VVIP.",
    category: "International Event",
    location: "Belitung, Bangka Belitung",
    highlights: ["Minister Meeting", "Gala Dinner", "VVIP Handling", "Airport Protocol"]
  },
  {
    id: 2,
    title: "Side Event MotoGP Mandalika",
    subtitle: "Mandalika International Circuit",
    description: "Dukungan multimedia dan manajemen kerumunan untuk event olahraga internasional di Sirkuit Internasional Mandalika.",
    category: "Sports Event",
    location: "Lombok, NTB",
    highlights: ["Crowd Management", "Multimedia Support", "Production"]
  },
  {
    id: 3,
    title: "UNESCO Global Geopark Youth Forum",
    subtitle: "The 1st UNESCO Global Geopark Youth Forum",
    description: "Penyelenggaraan forum pemuda global UNESCO dengan peserta internasional, termasuk tur edukatif dan aktivitas outdoor.",
    category: "International Forum",
    location: "Gunung Batur, Bali & Belitung",
    highlights: ["Youth Forum", "Geoventure", "Island Hopping"]
  },
  {
    id: 4,
    title: "Insight Sharing Session Kominfo",
    subtitle: "Transformasi Digital di 6 Sektor Strategis",
    description: "Penyelenggaraan sesi berbagi wawasan Kementerian Kominfo tentang transformasi digital di sektor strategis Indonesia.",
    category: "Government Event",
    location: "Jakarta",
    highlights: ["Ministry Event", "Digital Transformation", "Panel Discussion"]
  },
  {
    id: 5,
    title: "Run for Geopark Indonesia",
    subtitle: "Geoventure",
    description: "Event lari bertema geopark dengan rute melewati destinasi wisata alam Indonesia yang menakjubkan.",
    category: "Sports Event",
    location: "Belitung",
    highlights: ["Running Event", "Geopark Tour", "Eco Tourism"]
  },
  {
    id: 6,
    title: "Peluncuran Buku Roadmap Blue Economy",
    subtitle: "Bappenas",
    description: "Upacara peluncuran buku Roadmap Blue Economy oleh Bappenas dengan kehadiran pejabat tinggi negara.",
    category: "Government Event",
    location: "Jakarta",
    highlights: ["Book Launch", "Bappenas", "Blue Economy"]
  },
  {
    id: 7,
    title: "Women and Girls at the Frontline of Climate Change",
    subtitle: "International Conference",
    description: "Konferensi internasional tentang peran perempuan dalam menghadapi perubahan iklim dengan pembicara dari berbagai negara.",
    category: "International Event",
    location: "Indonesia",
    highlights: ["Climate Action", "Women Empowerment", "International"]
  },
  {
    id: 8,
    title: "Dinner Under The Stars",
    subtitle: "Private Gala Dinner",
    description: "Penyelenggaraan gala dinner privat dengan konsep outdoor mewah dan entertainment berkualitas tinggi.",
    category: "Private Event",
    location: "Belitung",
    highlights: ["Gala Dinner", "Entertainment", "Exclusive"]
  }
];

const CATEGORIES = ["Semua", "International Event", "Government Event", "Sports Event", "Private Event", "International Forum"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredEvents = activeCategory === "Semua" 
    ? PORTFOLIO_EVENTS 
    : PORTFOLIO_EVENTS.filter(e => e.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-50 to-white" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-skyled-accent font-bold tracking-widest uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="text-4xl font-bold text-skyled-navy mb-4">Event Yang Telah Kami Tangani</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dari pertemuan tingkat menteri hingga festival internasional, kami telah dipercaya menangani berbagai event prestisius.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-skyled-navy text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              data-testid={`button-portfolio-filter-${idx}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              data-testid={`card-portfolio-${event.id}`}
            >
              <div className="h-48 bg-gradient-to-br from-skyled-navy to-skyled-accent relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/20">{String(event.id).padStart(2, '0')}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-skyled-navy mb-1 group-hover:text-skyled-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-skyled-accent font-medium mb-3">{event.subtitle}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center text-gray-500 text-xs mb-4">
                  <MapPin size={14} className="mr-1" />
                  {event.location}
                </div>

                <div className="flex flex-wrap gap-2">
                  {event.highlights.slice(0, 3).map((h, i) => (
                    <span key={i} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
