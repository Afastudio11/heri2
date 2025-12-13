import { CLIENTS } from '@/lib/constants';

export default function ClientsShowcase() {
  const allClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  
  return (
    <section id="portfolio" className="py-20 bg-white border-y border-gray-100 overflow-hidden" data-testid="section-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-bold text-skyled-navy">Trusted By Leading Organizations</h2>
      </div>
      
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex gap-12 animate-scroll w-max py-4">
          {allClients.map((client, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-8 py-4 bg-slate-50 rounded-full border border-slate-100 shadow-sm min-w-[200px] justify-center"
              data-testid={`badge-client-${i}`}
            >
              <div className="w-2 h-2 rounded-full bg-skyled-accent flex-shrink-0"></div>
              <span className="font-bold text-gray-500 text-lg whitespace-nowrap">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
