import { Users, Shield, Lightbulb, CheckCircle, Tv, Camera, Monitor, Mic, Radio, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import eventOrganizerHero from '@assets/Event_Organizer_1765872247503.png';

import bappenas from '../assets/clients/bappenas.png';
import kemenpppa from '../assets/clients/kemenpppa.png';
import unesco from '../assets/clients/unesco.png';
import asean from '../assets/clients/asean.png';
import kominfo from '../assets/clients/kominfo.png';
import kemenparekraf from '../assets/clients/kemenparekraf.png';

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

const trustedClients = [
  { name: "Bappenas", logo: bappenas },
  { name: "Kemen PPPA", logo: kemenpppa },
  { name: "UNESCO", logo: unesco },
  { name: "ASEAN", logo: asean },
  { name: "Kominfo", logo: kominfo },
  { name: "Kemenparekraf", logo: kemenparekraf },
];

const testimonials = [
  { quote: "The entire process went smoothly. The event was a tight timeline and it was handled professionally. Saved a lot of money.", author: "Jenny Wilson", role: "Event Director" },
  { quote: "Skyled menghandle acara kami dengan sangat profesional. Semua berjalan lancar sesuai timeline.", author: "Ahmad Rizky", role: "Project Manager" }
];

export default function EventOrganizer() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16">
            <div>
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Skyled Event Organizer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Event Organizer.<br />
                <span className="text-[#1F68F5]">Layanan Profesional.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Kelola event Anda dengan mudah bersama solusi manajemen event profesional kami. Aman, terpercaya, dan dirancang untuk kebutuhan spesifik Anda.
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
                    <p className="font-semibold text-gray-900 text-sm">Tim Profesional</p>
                    <p className="text-xs text-gray-500">Staff berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Kualitas Terjamin</p>
                    <p className="text-xs text-gray-500">Praktik terbaik dijamin</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img src={eventOrganizerHero} alt="Event Organizer" className="w-full max-w-md object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">Dipercaya oleh instansi terkemuka</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {trustedClients.map((client, idx) => (
                <div key={idx} className="h-10 md:h-12 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-full w-auto object-contain max-w-[100px] md:max-w-[120px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F68F5] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <p className="text-5xl md:text-6xl font-bold mb-2">+89%</p>
                <p className="text-white/80">Tingkat Kepuasan Klien</p>
              </div>
              <div className="text-white">
                <p className="text-5xl md:text-6xl font-bold mb-2">100+</p>
                <p className="text-white/80">Events Sukses</p>
              </div>
              <div className="text-white">
                <p className="text-5xl md:text-6xl font-bold mb-2">#1</p>
                <p className="text-white/80">Event Organizer Profesional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              MAN POWER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Penyedia Tenaga Kerja</h2>
            <p className="text-lg text-gray-600">Personel profesional dan berpengalaman untuk event Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {manPowerServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] p-6 text-white">
                    <h3 className="text-xl font-bold">{service.category}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#1F68F5] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
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

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Event Production</h2>
            <p className="text-lg text-gray-600">Solusi lengkap untuk kebutuhan produksi event Anda</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventServices.map((service, index) => (
              <Card key={index} className="border border-gray-100 bg-white hover:border-[#1F68F5] hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#F0F5FF] group-hover:bg-[#1F68F5] rounded-xl flex items-center justify-center text-[#1F68F5] group-hover:text-white mb-5 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1F68F5] rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
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
