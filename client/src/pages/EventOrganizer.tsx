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
  {
    title: "Visual Work",
    icon: <Tv className="w-8 h-8" />,
    items: ["Motion Graphic", "3D Model", "Aximmetry & Camera Tracker", "Augmented Reality", "Virtual Stage", "Video Editing", "3D Stage Mockup & Layout"]
  },
  {
    title: "Stage Production",
    icon: <Lightbulb className="w-8 h-8" />,
    items: ["Stage Concepting", "Construction and Rigging", "Decoration", "LED Wall", "Project Mapping", "Electrical Installation", "Backdrop"]
  },
  {
    title: "Multi Camera",
    icon: <Camera className="w-8 h-8" />,
    items: ["Camera", "Jimmy Jib", "Switcher", "Event Documentation", "Video & Photo", "Drone"]
  },
  {
    title: "Screen & Lighting",
    icon: <Monitor className="w-8 h-8" />,
    items: ["Greenscreen / Bluescreen", "LED Aputure / Kino", "Par LED", "Moving Beam", "Fresnel", "Bee Eye", "Mini Brute", "LED Stripe", "Decorative Lighting"]
  },
  {
    title: "Multimedia & Streaming",
    icon: <Radio className="w-8 h-8" />,
    items: ["Media Server PC", "Multimedia Peripherals", "NDI System", "Zoom Account", "Internet Provider", "Visual Jockey", "LED & Projector Mapping", "Visual Distribution", "TV & Matador"]
  },
  {
    title: "Sound System",
    icon: <Mic className="w-8 h-8" />,
    items: ["Speaker Monitor up to 100.000 Watt", "Line Array, Column, etc", "Sound Mixer", "Mic, Clip on, Skin Tone, Goose Neck", "In-ear Monitor", "Audio Peripherals"]
  }
];

const newMediaArt = [
  "Mixed Reality",
  "Interactive Media Installation",
  "180 Degrees Photobooth",
  "360 Spin Booth"
];

const portfolioEvents = [
  "Insight Sharing Session: Transformasi Digital - Kementerian Kominfo",
  "ASEAN Blue Economy Forum - ASEAN Meeting for Economic Ministers",
  "Roundtable Discussion for Blue Economy",
  "Dinner Under The Stars - Private Gala Dinner",
  "Minister Meeting - ASEAN Blue Economy Forum",
  "Side Event MotoGP - Mandalika International Circuit Lombok",
  "Peluncuran Buku Roadmap Blue Economy - Bappenas",
  "Women and Girls at the Frontline of Climate Change",
  "Run for Geopark Indonesia - Geoventure",
  "The 1st UNESCO Global Geopark Youth Forum - Gunung Batur, Bali",
  "UNESCO Global Geopark Youth Forum - Belitung"
];

const coreValues = [
  { title: "Fokus Klien", icon: <Users className="w-6 h-6" /> },
  { title: "Kreativitas", icon: <Lightbulb className="w-6 h-6" /> },
  { title: "Integritas", icon: <Shield className="w-6 h-6" /> }
];

export default function EventOrganizer() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Event Man Power and Production
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Event organizer dan perusahaan produksi terkemuka yang dikenal karena keahlian dan inovasi dalam menciptakan event berkualitas tinggi yang luar biasa.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  {value.icon}
                  <span className="font-medium">{value.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Penyedia Tenaga Kerja</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami menyediakan kebutuhan Anda dengan personel yang profesional dan berpengalaman
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {manPowerServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
                    <h3 className="text-xl font-bold">{service.category}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{item}</span>
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

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Event</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Solusi produksi lengkap untuk event Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventServices.map((service, index) => (
              <Card key={index} className="border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{service.title}</h3>
                  <ul className="space-y-1">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-slate-600 text-sm">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">New Media Art</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pengalaman interaktif dan imersif dengan teknologi terdepan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newMediaArt.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-slate-900">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portfolio Event Kami</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami memberikan kualitas terbaik untuk klien kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-slate-800 font-medium">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
