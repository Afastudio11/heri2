import { Shirt, Award, Package, CheckCircle, Quote, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { motion } from 'framer-motion';

import productionHero from '@assets/Production_1765871611867.png';
import imgTshirt from '@assets/Screenshot_2025-12-16_160655_1765876079884.png';
import imgHoodie from '@assets/Screenshot_2025-12-16_160704_1765876079883.png';
import imgAlmamater from '@assets/Screenshot_2025-12-16_160708_1765876079883.png';
import imgJersey from '@assets/Screenshot_2025-12-16_160713_1765876079883.png';
import imgTumbler from '@assets/Screenshot_2025-12-16_160719_1765876079883.png';
import imgLanyard from '@assets/Screenshot_2025-12-16_160725_1765876079884.png';
import imgMedal from '@assets/Screenshot_2025-12-16_160729_1765876079884.png';
import imgHanduk from '@assets/Screenshot_2025-12-16_160643_1765876079884.png';
import imgSouvenir from '@assets/Screenshot_2025-12-16_160742_1765876079884.png';

const textileProducts = [
  { name: "T-Shirt Custom", description: "Ribuan T-Shirt untuk klien di seluruh Indonesia.", materials: ["Cotton Combed 20S, 24S, 30S"], printing: ["Plastisol", "DTF"], image: imgTshirt },
  { name: "Hoodie Custom", description: "Bahan fleece berkualitas tinggi yang lembut dan hangat.", materials: ["Cotton Fleece"], printing: ["Plastisol", "DTF"], image: imgHoodie },
  { name: "Almamater", description: "Bahan American Drill dengan desain elegan.", materials: ["American Drill"], printing: ["Bordir"], image: imgAlmamater },
  { name: "Jersey", description: "Desain modern dengan teknologi pengeringan cepat.", materials: ["Dry Fit"], printing: ["Sublimation"], image: imgJersey }
];

const merchandiseProducts = [
  { name: "Tumbler Custom", features: ["Tahan Suhu", "Sablon Awet"], image: imgTumbler },
  { name: "Handuk Custom", features: ["100% Cotton", "Menyerap Baik"], image: imgHanduk },
  { name: "Lanyard", features: ["Polyester", "Kuat & Nyaman"], image: imgLanyard },
  { name: "Medali & Plakat", features: ["Akrilik", "Perunggu"], image: imgMedal }
];

const whyChooseUs = [
  { title: "Pengalaman", description: "Tim berpengalaman dengan hasil berkualitas", stat: "10+" },
  { title: "Kreativitas", description: "Desain modern sesuai kebutuhan", stat: "500+" },
  { title: "Kustomisasi", description: "Produk disesuaikan keinginan klien", stat: "100%" },
  { title: "Profesional", description: "Proses produksi efisien dan tepat waktu", stat: "98%" }
];

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
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
              
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="https://wa.me/6287883184796" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-2 h-auto rounded-full text-sm font-semibold">
                    Hubungi via WhatsApp
                  </Button>
                </a>
                <a href="mailto:cv.skyledproindonesia@gmail.com">
                  <Button variant="outline" className="border-gray-300 text-gray-700 px-5 py-2 h-auto rounded-full text-sm font-semibold hover:bg-gray-50">
                    Kirim Email
                  </Button>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Tim Ahli</p>
                    <p className="text-xs text-gray-500">Tim berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Kualitas Terjamin</p>
                    <p className="text-xs text-gray-500">Bahan premium</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={productionHero} alt="Production Services" className="w-full max-w-md object-contain" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollAnimation>
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
      </ScrollAnimation>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4">
                <Shirt className="w-5 h-5" />
                <span className="font-semibold">Textile Product</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Textile Custom</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Berbagai pilihan produk textile berkualitas tinggi dengan desain custom sesuai kebutuhan Anda</p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-6">
            {textileProducts.map((product, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group h-full">
                  <CardContent className="p-0">
                    <div className="p-6 flex items-center justify-center h-64 bg-[#ffffff]">
                      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4">
                <Package className="w-5 h-5" />
                <span className="font-semibold">Merchandise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Merchandise Custom</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Merchandise berkualitas untuk kebutuhan promosi dan event Anda</p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-4 gap-6">
            {merchandiseProducts.map((product, index) => (
              <ScrollAnimation key={index} delay={index * 0.05}>
                <Card className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-xl transition-all group cursor-pointer bg-white h-full">
                  <CardContent className="p-4">
                    <div className="rounded-xl p-4 mb-4 h-40 flex items-center justify-center bg-[#ffffff]">
                      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{product.name}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {product.features.map((f, i) => (
                        <span key={i} className="bg-[#F0F5FF] text-[#1F68F5] text-xs px-3 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#1F68F5] rounded-full px-4 py-2 mb-4">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Souvenir</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Souvenir Custom</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">Berbagai pilihan souvenir custom untuk acara spesial Anda. Kualitas terbaik dengan harga kompetitif.</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.1}>
            <div className="rounded-3xl p-8 mb-12 bg-[#ffffff]">
              <img src={imgSouvenir} alt="Souvenir Products" className="w-full max-w-4xl mx-auto object-contain" loading="lazy" />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <div className="grid lg:grid-cols-3 gap-6">
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
              <div className="bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-center">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="font-medium">Best Quality</p>
                <p className="text-white/70 text-sm mt-2">Garansi kualitas terbaik</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                TESTIMONIAL
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-lg bg-white h-full">
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
