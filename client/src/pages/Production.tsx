import { Link } from 'wouter';
import { Shirt, Award, Package, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const textileProducts = [
  { name: "T-Shirt Custom", description: "Ribuan T-Shirt untuk klien di seluruh Indonesia.", materials: ["Cotton Combed 20S, 24S, 30S"], printing: ["Plastisol", "DTF"] },
  { name: "Hoodie Custom", description: "Bahan fleece berkualitas tinggi yang lembut dan hangat.", materials: ["Cotton Fleece"], printing: ["Plastisol", "DTF"] },
  { name: "Almamater", description: "Bahan American Drill dengan desain elegan.", materials: ["American Drill"], printing: ["Bordir"] },
  { name: "Jersey", description: "Desain modern dengan teknologi pengeringan cepat.", materials: ["Dry Fit"], printing: ["Sublimation"] }
];

const merchandiseProducts = [
  { name: "Tumbler Custom", features: ["Tahan Suhu", "Sablon Awet"] },
  { name: "Handuk Custom", features: ["100% Cotton", "Menyerap Baik"] },
  { name: "Lanyard", features: ["Polyester", "Kuat & Nyaman"] },
  { name: "Medali & Plakat", features: ["Akrilik", "Perunggu"] }
];

const whyChooseUs = [
  { title: "Pengalaman", description: "Tim berpengalaman dengan hasil berkualitas" },
  { title: "Kreativitas", description: "Desain modern sesuai kebutuhan" },
  { title: "Kustomisasi", description: "Produk disesuaikan keinginan klien" },
  { title: "Profesional", description: "Proses produksi efisien dan tepat waktu" }
];

export default function Production() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <div className="bg-[#1F68F5] text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl py-12 md:py-20">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-6"><span className="text-sm font-semibold">Skyled Production</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Textile and Merchandise Custom</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Solusi lengkap untuk kebutuhan textile dan merchandise custom. Profesional, cepat, berkualitas tinggi.</p>
            <div className="flex flex-wrap gap-3">
              {["T-Shirt", "Hoodie", "Jersey", "Tumbler", "Merchandise"].map((tag, i) => <span key={i} className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Skyled Production?</h2></div>
          <div className="grid md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center"><CardContent className="p-6"><div className="w-12 h-12 bg-[#F5F8FF] rounded-full flex items-center justify-center mx-auto mb-4"><Star className="w-6 h-6 text-[#1F68F5]" /></div><h3 className="font-bold text-gray-900 mb-2">{item.title}</h3><p className="text-gray-600 text-sm">{item.description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F5F8FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4"><Shirt className="w-5 h-5" /><span className="font-semibold">Textile Product</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Produk Textile Custom</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {textileProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] p-6 text-white"><h3 className="text-xl font-bold">{product.name}</h3></div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div><p className="text-sm font-semibold text-gray-900 mb-2">Bahan</p>{product.materials.map((m, i) => <p key={i} className="text-sm text-gray-600">• {m}</p>)}</div>
                      <div><p className="text-sm font-semibold text-gray-900 mb-2">Teknik</p>{product.printing.map((p, i) => <p key={i} className="text-sm text-gray-600">• {p}</p>)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F5F8FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4"><Package className="w-5 h-5" /><span className="font-semibold">Merchandise</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Produk Merchandise Custom</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {merchandiseProducts.map((product, index) => (
              <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex flex-wrap gap-2">{product.features.map((f, i) => <span key={i} className="bg-[#F5F8FF] text-[#1F68F5] text-xs px-2 py-1 rounded-full">{f}</span>)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-[#1F68F5] rounded-full px-4 py-2 mb-4"><Award className="w-5 h-5" /><span className="font-semibold">Souvenir</span></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Souvenir Custom</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Note Book", "Flash Disk", "Pulpen", "Gantungan Kunci", "Pouch", "Custom Request"].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-full px-6 py-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#1F68F5]" /><span className="font-medium text-gray-800">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
