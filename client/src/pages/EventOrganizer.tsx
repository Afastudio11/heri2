import { Link } from 'wouter';
import { ArrowLeft, Users, Shield, Camera, Monitor, Mic, Lightbulb, Tv, Radio, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const manPowerServices = [
  {
    category: "Event Management",
    items: ["Event Manager", "Assistant Event Manager", "Flow Manager", "Assistant Flow Manager", "Stage Manager", "Production Assistant", "Technical Crew", "Props Master"]
  },
  {
    category: "Crowd Management",
    items: ["Crowd Manager", "Security Supervisor", "Security Personnel", "Ticketing and Control Crew", "First Aid and Medical Personnel", "Crowd Flow Coordinator"]
  },
  {
    category: "Special Officer",
    items: ["Volunteer Coordinator", "Notetaker (English & Indonesia)", "Liaison Officer (English & Indonesia)", "Translator (English & Indonesia)"]
  }
];

const eventServices = [
  { title: "Visual Work", icon: <Tv className="w-8 h-8" />, items: ["Motion Graphic", "3D Model", "Augmented Reality", "Virtual Stage", "Video Editing"] },
  { title: "Stage Production", icon: <Lightbulb className="w-8 h-8" />, items: ["Stage Concepting", "Construction and Rigging", "Decoration", "LED Wall", "Backdrop"] },
  { title: "Multi Camera", icon: <Camera className="w-8 h-8" />, items: ["Camera", "Jimmy Jib", "Switcher", "Event Documentation", "Drone"] },
  { title: "Screen & Lighting", icon: <Monitor className="w-8 h-8" />, items: ["Greenscreen", "LED Aputure", "Par LED", "Moving Beam", "Decorative Lighting"] },
  { title: "Multimedia & Streaming", icon: <Radio className="w-8 h-8" />, items: ["Media Server PC", "NDI System", "Internet Provider", "Visual Jockey", "LED Mapping"] },
  { title: "Sound System", icon: <Mic className="w-8 h-8" />, items: ["Speaker Monitor up to 100K Watt", "Line Array", "Sound Mixer", "Wireless Mic", "In-ear Monitor"] }
];

const portfolioEvents = [
  "ASEAN Blue Economy Forum", "UNESCO Global Geopark Youth Forum", "Side Event MotoGP Mandalika",
  "Kementerian Kominfo - Insight Sharing", "Peluncuran Roadmap Blue Economy - Bappenas",
  "Run for Geopark Indonesia", "Dinner Under The Stars", "Women and Girls at Climate Change Frontline"
];

export default function EventOrganizer() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="bg-[#1F68F5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <div className="max-w-4xl py-12 md:py-20">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold">Skyled Pro Indonesia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Event Man Power and Production
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Event organizer dan perusahaan produksi terkemuka yang dikenal karena keahlian dan inovasi dalam menciptakan event berkualitas tinggi.
            </p>
            <div className="flex flex-wrap gap-3">
              {[{ title: "Fokus Klien", icon: <Users className="w-5 h-5" /> }, { title: "Kreativitas", icon: <Lightbulb className="w-5 h-5" /> }, { title: "Integritas", icon: <Shield className="w-5 h-5" /> }].map((v, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  {v.icon}<span className="font-medium">{v.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Penyedia Tenaga Kerja</h2>
            <p className="text-lg text-gray-600">Personel profesional dan berpengalaman</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {manPowerServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] p-6 text-white"><h3 className="text-xl font-bold">{service.category}</h3></div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#1F68F5] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Event</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventServices.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F5F8FF] rounded-lg flex items-center justify-center text-[#1F68F5] mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-1">{service.items.map((item, idx) => <li key={idx} className="text-gray-600 text-sm">• {item}</li>)}</ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">New Media Art</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Mixed Reality", "Interactive Media", "180° Photobooth", "360 Spin Booth"].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6"><Star className="w-8 h-8 text-[#1F68F5] mx-auto mb-3" /><p className="font-semibold text-gray-900">{item}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio Event</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioEvents.map((event, index) => (
              <div key={index} className="bg-[#FAFAFA] rounded-lg p-4 border border-gray-100"><p className="text-gray-800 font-medium text-sm">{event}</p></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
