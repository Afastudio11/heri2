import { useState } from 'react';

const portfolioItems = [
  {
    id: "01",
    category: "International Event",
    title: "ASEAN Blue Economy Forum",
    subtitle: "Pertemuan Menteri Ekonomi ASEAN",
    desc: "Manajemen event lengkap untuk pertemuan tingkat menteri ASEAN, termasuk roundtable discussion.",
    location: "Belitung, Bangka Belitung",
    tags: ["Minister Meeting", "Gala Dinner", "VVIP Handling"]
  },
  {
    id: "02",
    category: "Sports Event",
    title: "Side Event MotoGP Mandalika",
    subtitle: "Mandalika International Circuit",
    desc: "Dukungan multimedia dan manajemen kerumunan untuk event olahraga internasional di Sirkuit Mandalika.",
    location: "Lombok, NTB",
    tags: ["Crowd Management", "Multimedia Support", "Production"]
  },
  {
    id: "03",
    category: "International Forum",
    title: "UNESCO Global Geopark Youth Forum",
    subtitle: "The 1st UNESCO Global Geopark Youth Forum",
    desc: "Penyelenggaraan forum pemuda global UNESCO dengan peserta internasional, termasuk tur edukatif.",
    location: "Gunung Batur, Bali & Belitung",
    tags: ["Youth Forum", "Geoventure", "Island Hopping"]
  },
  {
    id: "04",
    category: "Government Event",
    title: "Insight Sharing Session Kominfo",
    subtitle: "Transformasi Digital di 6 Sektor Strategis",
    desc: "Penyelenggaraan sesi berbagi wawasan Kementerian Kominfo tentang transformasi digital.",
    location: "Jakarta",
    tags: ["Ministry Event", "Digital Transformation", "Panel Discussion"]
  },
  {
    id: "05",
    category: "Sports Event",
    title: "Run for Geopark Indonesia",
    subtitle: "Geoventure",
    desc: "Event lari bertema geopark dengan rute melewati destinasi wisata alam Indonesia yang menakjubkan.",
    location: "Belitung",
    tags: ["Running Event", "Geopark Tour", "Eco Tourism"]
  },
  {
    id: "06",
    category: "Government Event",
    title: "Peluncuran Buku Roadmap Blue Economy",
    subtitle: "Bappenas",
    desc: "Upacara peluncuran buku Roadmap Blue Economy oleh Bappenas dengan kehadiran pejabat tinggi.",
    location: "Jakarta",
    tags: ["Book Launch", "Bappenas", "Blue Economy"]
  }
];

const categories = ["Semua", "International Event", "Government Event", "Sports Event", "International Forum"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredItems = activeFilter === "Semua" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white relative" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">PORTFOLIO</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Event Yang Telah Kami Tangani
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dari pertemuan tingkat menteri hingga festival internasional, kami telah dipercaya menangani berbagai event prestisius.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-300'
              }`}
              data-testid={`button-portfolio-filter-${idx}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden" data-testid={`card-portfolio-${item.id}`}>
              <div className="absolute top-0 left-0 w-full h-32 bg-blue-500 -z-10 group-hover:h-full transition-all duration-500 ease-in-out"></div>
              
              <div className="flex justify-between items-start mb-12">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
                <span className="text-5xl font-bold text-white/20">{item.id}</span>
              </div>

              <div className="group-hover:text-white transition-colors duration-300">
                <h3 className="text-xl font-bold mb-1 leading-tight text-white group-hover:text-white md:text-gray-900">{item.title}</h3>
                <p className="text-xs text-blue-200 group-hover:text-blue-100 md:text-blue-600 mb-4">{item.subtitle}</p>
                
                <p className="text-sm text-white/80 group-hover:text-white/90 md:text-gray-500 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-xs opacity-80 mb-6">
                  <span className="font-bold">📍 {item.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 group-hover:bg-white/20 group-hover:text-white text-gray-600 text-[10px] rounded">
                      {tag}
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
