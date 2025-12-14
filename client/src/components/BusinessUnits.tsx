import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { BUSINESS_UNITS } from '@/lib/constants';

export default function BusinessUnits() {
  return (
    <section id="business" className="py-24 bg-slate-50" data-testid="section-business">
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
            <div 
              key={unit.id} 
              className="group bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-business-${unit.id}`}
            >
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
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${unit.color} flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <Link 
                  href={unit.link} 
                  className={`flex items-center justify-between gap-2 w-full font-bold ${unit.textColor} group-hover:opacity-80 transition-opacity`}
                  data-testid={`link-consult-${unit.id}`}
                >
                  Lihat Detail <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
