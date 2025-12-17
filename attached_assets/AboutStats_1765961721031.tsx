import React from 'react';
import { Target, Users, Clock, Star } from 'lucide-react';

const AboutStats: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Left Label */}
          <div className="lg:w-1/4">
            <div className="flex items-start gap-3">
               <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600">
                  <Target size={20} />
               </div>
               <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide max-w-[150px]">
                 Passionate About Building and Design Excellence
               </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed mb-12">
              We are a team of skilled professionals dedicated to providing innovative construction management, 3D design, and interior design services. With a focus on collaboration and client satisfaction.
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600 mb-1">200+</span>
                <span className="text-slate-500 text-sm font-medium">Client Deal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600 mb-1">7+</span>
                <span className="text-slate-500 text-sm font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600 mb-1">24h</span>
                <span className="text-slate-500 text-sm font-medium">Service</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600 mb-1">5.0</span>
                <span className="text-slate-500 text-sm font-medium">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                    <img 
                        src={`https://picsum.photos/400/400?random=${item + 20}`} 
                        alt="Project Thumbnail" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;