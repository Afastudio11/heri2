import { Shirt, Award, Package, CheckCircle, Star, ArrowRight, Quote, Coffee, Bath, Tag, Medal, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import productionHero from '@assets/Production_1765871611867.png';

const textileProducts = [
  { name: "T-Shirt Custom", description: "Ribuan T-Shirt untuk klien di seluruh Indonesia.", materials: ["Cotton Combed 20S, 24S, 30S"], printing: ["Plastisol", "DTF"] },
  { name: "Hoodie Custom", description: "Bahan fleece berkualitas tinggi yang lembut dan hangat.", materials: ["Cotton Fleece"], printing: ["Plastisol", "DTF"] },
  { name: "Almamater", description: "Bahan American Drill dengan desain elegan.", materials: ["American Drill"], printing: ["Bordir"] },
  { name: "Jersey", description: "Desain modern dengan teknologi pengeringan cepat.", materials: ["Dry Fit"], printing: ["Sublimation"] }
];

const merchandiseProducts = [
  { name: "Tumbler Custom", features: ["Tahan Suhu", "Sablon Awet"], icon: <Coffee className="w-8 h-8" /> },
  { name: "Handuk Custom", features: ["100% Cotton", "Menyerap Baik"], icon: <Bath className="w-8 h-8" /> },
  { name: "Lanyard", features: ["Polyester", "Kuat & Nyaman"], icon: <Tag className="w-8 h-8" /> },
  { name: "Medali & Plakat", features: ["Akrilik", "Perunggu"], icon: <Medal className="w-8 h-8" /> }
];

const whyChooseUs = [
  { title: "Pengalaman", description: "Tim berpengalaman dengan hasil berkualitas", stat: "10+" },
  { title: "Kreativitas", description: "Desain modern sesuai kebutuhan", stat: "500+" },
  { title: "Kustomisasi", description: "Produk disesuaikan keinginan klien", stat: "100%" },
  { title: "Profesional", description: "Proses produksi efisien dan tepat waktu", stat: "98%" }
];

const souvenirItems = ["Note Book", "Flash Disk", "Pulpen", "Gantungan Kunci", "Pouch", "Custom Request"];

const testimonials = [
  { quote: "Kualitas kaos dari Skyled sangat bagus. Sablon awet dan bahan nyaman dipakai. Sudah repeat order berkali-kali.", author: "Fitri Handayani", role: "Event Coordinator" },
  { quote: "Merchandise untuk event kami dibuat dengan sangat rapi dan tepat waktu. Highly recommended!", author: "Budi Santoso", role: "Marketing Manager" }
];

export default function Production() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16">
            <div>
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Skyled Production
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Textile & Merchandise.<br />
                <span className="text-[#1F68F5]">Premium Quality.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Solusi lengkap untuk kebutuhan textile dan merchandise custom. Profesional, cepat, berkualitas tinggi.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Button className="bg-[#1F68F5] hover:bg-[#1a5ad4] text-white px-6 py-6 rounded-full text-base font-semibold">
                  Pesan Sekarang
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 px-6 py-6 rounded-full text-base font-semibold hover:bg-gray-50">
                  Lihat Katalog <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Expert Team</p>
                    <p className="text-xs text-gray-500">Tim berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Quality Assured</p>
                    <p className="text-xs text-gray-500">Bahan premium</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img src={productionHero} alt="Production Services" className="w-full max-w-md object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F68F5] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="text-center text-white">
                  <p className="text-4xl md:text-5xl font-bold mb-2">{item.stat}</p>
                  <p className="font-medium mb-1">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4">
              <Shirt className="w-5 h-5" />
              <span className="font-semibold">Textile Product</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Textile Custom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Berbagai pilihan produk textile berkualitas tinggi dengan desain custom sesuai kebutuhan Anda</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {textileProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] group-hover:bg-[#1a5ad4] transition-colors p-6 text-white">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F0F5FF] rounded-xl p-4">
                        <p className="text-sm font-semibold text-[#1F68F5] mb-2">Bahan</p>
                        {product.materials.map((m, i) => (
                          <p key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                            {m}
                          </p>
                        ))}
                      </div>
                      <div className="bg-gray-100 rounded-xl p-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Teknik</p>
                        {product.printing.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Merchandise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Merchandise Custom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Merchandise berkualitas untuk kebutuhan promosi dan event Anda</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {merchandiseProducts.map((product, index) => (
              <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-xl transition-all group cursor-pointer bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F0F5FF] group-hover:bg-[#1F68F5] rounded-xl flex items-center justify-center text-[#1F68F5] group-hover:text-white mb-4 transition-colors">{product.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {product.features.map((f, i) => (
                      <span key={i} className="bg-[#F0F5FF] text-[#1F68F5] text-xs px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Souvenir</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Souvenir Custom</h2>
              <p className="text-gray-600 mb-8">Berbagai pilihan souvenir custom untuk acara spesial Anda. Kualitas terbaik dengan harga kompetitif.</p>
              <div className="grid grid-cols-2 gap-4">
                {souvenirItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[#F0F5FF] rounded-xl px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-[#1F68F5]" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1F68F5] rounded-2xl p-6 text-white flex flex-col justify-center">
                <p className="text-4xl font-bold mb-2">Zero</p>
                <p className="font-medium">Minimal Order</p>
                <p className="text-white/70 text-sm mt-2">Bisa pesan satuan sesuai kebutuhan</p>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">Zero</p>
                <p className="font-medium text-gray-900">Hidden Fees</p>
                <p className="text-gray-600 text-sm mt-2">Harga transparan, tanpa biaya tersembunyi</p>
              </div>
              <div className="col-span-2 bg-gray-900 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold mb-1">Best Quality</p>
                    <p className="text-white/70 text-sm">Garansi kualitas terbaik untuk setiap produk</p>
                  </div>
                  <div className="bg-[#1F68F5] rounded-xl px-4 py-2">
                    <p className="font-bold">Get Started</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              TESTIMONIAL
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#1F68F5] mb-4" />
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1F68F5] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-[#1F68F5] text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
