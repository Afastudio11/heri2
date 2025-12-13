import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BUSINESS_UNITS, CORE_VALUES, CLIENTS, CONTACT_INFO } from './constants';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Instagram, Linkedin, ExternalLink, Quote, Layers } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-skyled-navy mb-6">About The Company</h2>
                <div className="w-20 h-1.5 bg-skyled-accent mb-8"></div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Skyled Pro Indonesia is a leading group of companies renowned for expertise and innovation. We handle every aspect of business support, from creating exceptional events to providing strategic consulting for sustainability.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  By leveraging the latest technology and a team of experienced professionals, Skyled Pro Indonesia is dedicated to delivering unforgettable experiences tailored to the unique vision and needs of each client.
                </p>
                
                <div className="grid gap-4">
                  {CORE_VALUES.map((val, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                      <div className="p-2 bg-white rounded-lg text-skyled-blue shadow-sm">
                        {val.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-skyled-navy">{val.title}</h4>
                        <p className="text-sm text-gray-500">{val.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-skyled-navy to-skyled-accent rounded-[40px] transform rotate-3 opacity-10"></div>
                <div className="bg-slate-100 p-8 rounded-[40px] relative z-10 border border-white shadow-xl">
                  <h3 className="text-2xl font-bold text-skyled-navy mb-6">Vision & Mission</h3>
                  
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-skyled-accent mb-2 block">Our Vision</span>
                    <p className="text-gray-700 italic border-l-4 border-skyled-gold pl-4">
                      "To be the leading name in the industry by prioritizing innovation, creativity, and high quality, creating inspiring experiences for every client."
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-skyled-accent mb-4 block">Our Mission</span>
                    <ul className="space-y-3">
                      {['Deliver High-Quality Services', 'Realize Client Visions', 'Create Unforgettable Experiences', 'Maintain Ethical Standards', 'Adapt and Innovate'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 size={18} className="text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section id="business" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-skyled-blue font-bold tracking-widest uppercase text-sm">Our Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-skyled-navy mt-2 mb-6">Three Pillars of Excellence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We operate through three specialized divisions, each dedicated to providing top-tier solutions in their respective fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BUSINESS_UNITS.map((unit) => (
              <div key={unit.id} className="group bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Header Color Block */}
                <div className={`h-2 ${unit.color}`}></div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl ${unit.bgLight} ${unit.textColor} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                    {unit.icon}
                  </div>
                  
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{unit.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-skyled-navy mb-4">{unit.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                    {unit.description}
                  </p>

                  <div className="mt-auto">
                    <h5 className="font-semibold text-gray-900 mb-4 text-sm border-b border-gray-100 pb-2">Key Services</h5>
                    <ul className="space-y-3">
                      {unit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className={`mt-1 w-1.5 h-1.5 rounded-full ${unit.color}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <a href="#contact" className={`flex items-center justify-between w-full font-bold ${unit.textColor} group-hover:opacity-80`}>
                    Consult Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Clients Section */}
      <section id="portfolio" className="py-20 bg-white border-y border-gray-100 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-skyled-navy">Trusted By Leading Organizations</h2>
         </div>
         
         <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex gap-12 animate-scroll w-max py-4">
              {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                <div key={i} className="flex items-center gap-2 px-8 py-4 bg-slate-50 rounded-full border border-slate-100 shadow-sm min-w-[200px] justify-center">
                   <div className="w-2 h-2 rounded-full bg-skyled-accent"></div>
                   <span className="font-bold text-gray-500 text-lg whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Track Record</span>
                 <h2 className="text-4xl font-bold mb-6">Delivering Excellence on National & International Scale</h2>
                 <p className="text-gray-400 mb-8 text-lg">
                   From high-level ministerial meetings to large-scale outdoor festivals, our portfolio showcases our versatility and commitment to quality.
                 </p>
                 <div className="space-y-6">
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                       <h3 className="text-xl font-bold text-skyled-light mb-2">ASEAN Blue Economy Forum</h3>
                       <p className="text-gray-300 text-sm">Full event management for ASEAN Economic Ministers meeting, including gala dinners and VVIP handling.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                       <h3 className="text-xl font-bold text-skyled-light mb-2">MotoGP Mandalika Side Events</h3>
                       <p className="text-gray-300 text-sm">Crowd management and multimedia support for international sporting events.</p>
                    </div>
                 </div>
              </div>
              <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Event Conference" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-8 left-8 right-8 z-20">
                    <Quote className="text-amber-400 mb-4 h-8 w-8" />
                    <p className="text-lg font-medium italic text-white mb-4">
                      "Skyled Pro Indonesia delivered exceptional quality and professionalism for our international summit. Truly a reliable partner."
                    </p>
                    <p className="text-sm text-gray-300 font-bold uppercase tracking-wider">— Ministry Representative</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-skyled-navy mb-8">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-500 mb-12">
              Whether you need to organize a mega-event, design a sustainability roadmap, or produce custom merchandise, Skyled Pro Indonesia is your one-stop solution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
               <div className="p-8 bg-skyled-navy text-white rounded-[32px] flex flex-col items-center justify-center">
                  <Phone size={40} className="mb-4 text-skyled-light" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-lg opacity-80">{CONTACT_INFO.phone1}</p>
                  <p className="text-lg opacity-80">{CONTACT_INFO.phone2}</p>
               </div>
               <div className="p-8 bg-slate-100 text-skyled-navy rounded-[32px] flex flex-col items-center justify-center border border-gray-200">
                  <Mail size={40} className="mb-4 text-skyled-blue" />
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-lg text-gray-600">{CONTACT_INFO.email}</p>
                  <p className="text-lg text-gray-600">{CONTACT_INFO.email2}</p>
               </div>
            </div>

            <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-3 bg-skyled-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-skyled-blue hover:scale-105 transition-all">
               Get In Touch <ExternalLink size={20} />
            </a>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                         <div className="bg-white text-skyled-navy p-2 rounded-lg">
                           <Layers size={24} />
                        </div>
                        <span className="text-2xl font-bold">Skyled Pro Indonesia</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        An integrated holding company providing world-class Event Management, Strategic Consulting, and Creative Production services across Indonesia.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-skyled-blue transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-skyled-blue transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-lg">Divisions</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-skyled-light transition-colors">Skyled Pro Event</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Skyled Consulting</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Skyled Production</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><MapPin size={16}/> Indonesia</li>
                        <li className="flex items-center gap-2"><Phone size={16}/> {CONTACT_INFO.phone1}</li>
                        <li className="flex items-center gap-2"><Mail size={16}/> {CONTACT_INFO.email}</li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; 2025 CV Skyled Pro Indonesia. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Building Trust, Ensuring Sustainability.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;