import { useState } from 'react';

import galaDinner1 from '../assets/portfolio/gala_dinner_1.jpg';
import galaDinner2 from '../assets/portfolio/gala_dinner_2.jpg';
import ministerMeeting1 from '../assets/portfolio/minister_meeting_1.jpg';
import ministerMeeting2 from '../assets/portfolio/minister_meeting_2.jpg';
import ministerMeeting3 from '../assets/portfolio/minister_meeting_3.jpg';
import afternoonTea from '../assets/portfolio/afternoon_tea.jpg';
import launchingRoadmap1 from '../assets/portfolio/launching_roadmap_1.jpg';
import launchingRoadmap2 from '../assets/portfolio/launching_roadmap_2.jpg';
import unescoGeopark from '../assets/portfolio/unesco_geopark.jpg';
import marineCamp1 from '../assets/portfolio/marine_camp_1.jpg';
import marineCamp2 from '../assets/portfolio/marine_camp_2.jpg';
import ikaUnitirta1 from '../assets/portfolio/ika_unitirta_1.jpg';
import ikaUnitirta2 from '../assets/portfolio/ika_unitirta_2.jpg';
import kotaLayakAnak1 from '../assets/portfolio/kota_layak_anak_1.jpg';
import kotaLayakAnak2 from '../assets/portfolio/kota_layak_anak_2.jpg';
import kotaLayakAnak3 from '../assets/portfolio/kota_layak_anak_3.jpg';
import womenClimate1 from '../assets/portfolio/women_climate_1.jpg';
import womenClimate2 from '../assets/portfolio/women_climate_2.jpg';
import womenClimate3 from '../assets/portfolio/women_climate_3.jpg';
import womenClimate4 from '../assets/portfolio/women_climate_4.jpg';
import transformasiDigital1 from '../assets/portfolio/transformasi_digital_1.jpg';
import transformasiDigital2 from '../assets/portfolio/transformasi_digital_2.jpg';

const portfolioItems = [
  {
    id: "01",
    category: "International Event",
    title: "ASEAN Blue Economy Forum",
    subtitle: "Pertemuan Menteri Ekonomi ASEAN",
    desc: "Manajemen event lengkap untuk pertemuan tingkat menteri ASEAN, termasuk gala dinner, minister meeting, dan afternoon tea.",
    location: "Belitung, Bangka Belitung",
    tags: ["Minister Meeting", "Gala Dinner", "VVIP Handling"],
    images: [galaDinner1, galaDinner2, ministerMeeting1, ministerMeeting2, ministerMeeting3, afternoonTea]
  },
  {
    id: "02",
    category: "Government Event",
    title: "Peluncuran Roadmap Blue Economy Indonesia",
    subtitle: "Bappenas - Indonesia Blue Economy Roadmap",
    desc: "Upacara peluncuran buku Roadmap Blue Economy Indonesia oleh Bappenas dengan kehadiran pejabat tinggi negara.",
    location: "Jakarta",
    tags: ["Book Launch", "Bappenas", "Blue Economy"],
    images: [launchingRoadmap1, launchingRoadmap2]
  },
  {
    id: "03",
    category: "International Forum",
    title: "UNESCO Global Geopark Youth Forum",
    subtitle: "The 1st UNESCO Global Geopark Youth Forum",
    desc: "Penyelenggaraan forum pemuda global UNESCO dengan peserta internasional, termasuk marine camp dan tur edukatif.",
    location: "Gunung Batur, Bali & Belitung",
    tags: ["Youth Forum", "Marine Camp", "Geoventure"],
    images: [unescoGeopark, marineCamp1, marineCamp2]
  },
  {
    id: "04",
    category: "Government Event",
    title: "IKA UNITIRTA",
    subtitle: "Ikatan Alumni Universitas Sultan Ageng Tirtayasa",
    desc: "Penyelenggaraan acara alumni UNITIRTA dengan rangkaian kegiatan networking dan sesi berbagi pengalaman.",
    location: "Banten",
    tags: ["Alumni Event", "University", "Networking"],
    images: [ikaUnitirta1, ikaUnitirta2]
  },
  {
    id: "05",
    category: "Government Event",
    title: "Penganugerahan Kota Layak Anak",
    subtitle: "Kementerian Pemberdayaan Perempuan dan Perlindungan Anak",
    desc: "Penyelenggaraan acara penganugerahan Kota Layak Anak oleh Kemen PPPA dengan kehadiran pejabat tinggi.",
    location: "Jakarta",
    tags: ["Award Ceremony", "Kemen PPPA", "Government Event"],
    images: [kotaLayakAnak1, kotaLayakAnak2, kotaLayakAnak3]
  },
  {
    id: "06",
    category: "International Event",
    title: "Women and Girls at the Frontline of Climate Change",
    subtitle: "Gender Mainstreaming & Climate Change Adaptation in Indonesia",
    desc: "Forum internasional tentang peran perempuan dalam adaptasi perubahan iklim, dengan fokus pada gender mainstreaming dan pemberdayaan perempuan di Indonesia. Diselenggarakan secara hybrid pada 24 November 2022 di Jakarta.",
    location: "Jakarta, Indonesia",
    tags: ["Climate Change", "Gender Mainstreaming", "International Forum"],
    images: [womenClimate1, womenClimate2, womenClimate3, womenClimate4]
  },
  {
    id: "07",
    category: "Government Event",
    title: "Transformasi Digital di 6 Sektor Strategis",
    subtitle: "Kementerian Komunikasi dan Informatika",
    desc: "Insight Sharing Session tentang Transformasi Digital di 6 Sektor Strategis yang diselenggarakan oleh Direktorat Ekonomi Digital, Direktorat Jenderal Aplikasi Informatika, Kementerian Komunikasi dan Informatika pada 24 Oktober 2022 di Jakarta.",
    location: "Jakarta",
    tags: ["Digital Transformation", "Kemenkominfo", "Insight Sharing"],
    images: [transformasiDigital1, transformasiDigital2]
  }
];

const categories = ["Semua", "International Event", "Government Event", "International Forum"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedDescs, setExpandedDescs] = useState<string[]>([]);

  const filteredItems = activeFilter === "Semua" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openGallery = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  };

  const toggleDesc = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDescs(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const isDescExpanded = (id: string) => expandedDescs.includes(id);

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
            <div 
              key={item.id} 
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer" 
              data-testid={`card-portfolio-${item.id}`}
              onClick={() => openGallery(item)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 leading-tight text-gray-900">{item.title}</h3>
                <p className="text-xs text-blue-600 mb-3">{item.subtitle}</p>
                
                <p className={`text-sm text-gray-500 mb-2 leading-relaxed ${!isDescExpanded(item.id) ? 'line-clamp-2' : ''}`}>
                  {item.desc}
                </p>
                
                {item.desc.length > 100 && (
                  <button 
                    onClick={(e) => toggleDesc(item.id, e)}
                    className="text-blue-600 text-xs font-medium mb-4 hover:underline"
                  >
                    {isDescExpanded(item.id) ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya'}
                  </button>
                )}

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <span className="font-medium">📍 {item.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="relative flex-1 flex items-center justify-center">
              <img 
                src={selectedItem.images[currentImageIndex]} 
                alt={`${selectedItem.title} - ${currentImageIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              
              {selectedItem.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">{selectedItem.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {currentImageIndex + 1} / {selectedItem.images.length}
              </p>
            </div>
            
            {selectedItem.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                {selectedItem.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      idx === currentImageIndex ? 'border-blue-500 scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
