import { Link } from 'wouter';
import { ArrowLeft, Shirt, Award, Package, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const textileProducts = [
  {
    name: "T-Shirt Custom",
    description: "Kami telah memproduksi ribuan T-Shirt untuk client kami yang tersebar di seluruh Indonesia.",
    materials: ["Cotton Combed 20S, 24S, 30S", "Cotton Cardet"],
    printing: ["Plastisol", "DTF"]
  },
  {
    name: "Hoodie Custom",
    description: "Tingkatkan gaya dan kenyamanan Anda dengan Hoodie Custom kami, terbuat dari bahan fleece berkualitas tinggi yang lembut dan hangat.",
    materials: ["Cotton Fleece"],
    printing: ["Plastisol", "DTF"]
  },
  {
    name: "Almamater",
    description: "Almamater terbuat dari bahan American Drill yang kuat dan benang katun berkualitas tinggi. Desain elegan dan jahitan rapi.",
    materials: ["American Drill"],
    printing: ["Benang Katun (Bordir)"]
  },
  {
    name: "Jersey (Football, Cycling, Running)",
    description: "Desain modern dan fit yang pas menjadikannya pilihan ideal untuk olahraga. Teknologi pengeringan cepat.",
    materials: ["Dry Fit"],
    printing: ["Sublimation"]
  }
];

const merchandiseProducts = [
  {
    name: "Tumbler Custom",
    features: ["Tahan Suhu", "Sablon Awet", "Bahan Kuat"],
    description: "Menawarkan daya tahan dan isolasi suhu yang unggul, menjaga minuman Anda tetap panas atau dingin lebih lama."
  },
  {
    name: "Handuk Custom",
    features: ["100% Cotton", "Benang Katun (Bordir)", "Menyerap dengan Baik"],
    description: "Terbuat dari bahan yang lembut dan menyerap dengan baik, handuk ini menawarkan keleluasaan dan kualitas superior."
  },
  {
    name: "Lanyard",
    features: ["Polyester", "Digital Printing", "Kuat & Nyaman"],
    description: "Tingkatkan profesionalisme dan visibilitas Anda dengan Lanyard Custom kami yang kuat dan nyaman."
  },
  {
    name: "Medali & Plakat",
    features: ["Akrilik", "Perunggu", "Kayu"],
    description: "Rayakan pencapaian dengan Medali dan Plakat Custom kami yang elegan dan tahan lama."
  }
];

const souvenirs = [
  "Note Book",
  "Flash Disk",
  "Pulpen",
  "Gantungan Kunci",
  "Pouch",
  "Dan Lainnya (By Request)"
];

const clients = [
  "Kementerian Kominfo",
  "ASEAN Indonesia 2023",
  "Bappenas",
  "UNESCO Global Geopark",
  "Dan banyak lagi..."
];

const whyChooseUs = [
  { title: "Pengalaman dan Profesionalisme", description: "Tim berpengalaman dengan hasil berkualitas tinggi" },
  { title: "Pendekatan Kreatif dan Inovatif", description: "Desain modern sesuai kebutuhan Anda" },
  { title: "Pelayanan Kustomisasi", description: "Produk disesuaikan dengan keinginan klien" },
  { title: "Cepat dan Professional", description: "Proses produksi yang efisien dan tepat waktu" }
];

export default function Production() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <div className="max-w-4xl py-12 md:py-20">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold">Skyled Production</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Textile and Merchandise Custom
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Solusi lengkap untuk kebutuhan textile dan merchandise custom perusahaan Anda. Profesional, cepat, dan berkualitas tinggi.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">T-Shirt</span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">Hoodie</span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">Jersey</span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">Tumbler</span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">Merchandise</span>
            </div>
            <a href="#contact">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full">
                Pesan Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Skyled Production?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-4">
              <Shirt className="w-5 h-5" />
              <span className="font-semibold">Textile Product</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Produk Textile Custom</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {textileProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-6 text-white">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 mb-2">Bahan Kain</p>
                        {product.materials.map((material, idx) => (
                          <p key={idx} className="text-sm text-slate-600">• {material}</p>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 mb-2">Teknik Cetak</p>
                        {product.printing.map((print, idx) => (
                          <p key={idx} className="text-sm text-slate-600">• {print}</p>
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

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-4">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Merchandise Product</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Produk Merchandise Custom</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchandiseProducts.map((product, index) => (
              <Card key={index} className="border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-teal-700 rounded-full px-4 py-2 mb-4">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Souvenir Product</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Souvenir Custom</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Berikan kesan yang tak terlupakan dengan Souvenir Custom kami. Dirancang dengan perhatian pada detail dan kualitas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {souvenirs.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-full px-6 py-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Klien Kami</h2>
            <p className="text-lg text-slate-600">Dipercaya oleh berbagai instansi dan perusahaan</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-slate-100 rounded-lg px-6 py-3">
                <span className="font-medium text-slate-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Membuat Produk Custom Anda?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Hubungi kami untuk konsultasi dan penawaran terbaik untuk kebutuhan textile dan merchandise Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6289630963302" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                WhatsApp: 0896 3096 3302
              </Button>
            </a>
            <a href="mailto:cv.skyledproindonesia@gmail.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                Email Kami
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
