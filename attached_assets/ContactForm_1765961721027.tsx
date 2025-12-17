import React from 'react';
import { User, Phone, MapPin, PenTool, ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left decoration or Text */}
        <div className="hidden md:block w-1/2">
             <div className="relative rounded-[3rem] overflow-hidden h-[600px]">
                <img src="https://picsum.photos/800/1000?random=99" alt="Contact Us" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-3xl font-bold mb-2">Let's Build Together</h3>
                    <p className="opacity-90">Reach out to start your dream project today.</p>
                </div>
             </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
          
          <form className="space-y-6">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <User size={18} />
                </div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
            </div>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Phone size={18} />
                </div>
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
            </div>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <MapPin size={18} />
                </div>
                <input 
                    type="text" 
                    placeholder="Address" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
            </div>

            <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                    <PenTool size={18} />
                </div>
                <textarea 
                    placeholder="Type Your Message" 
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                ></textarea>
            </div>

            <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Send Message <ArrowRight size={20} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;