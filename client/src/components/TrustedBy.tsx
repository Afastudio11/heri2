import bniLife from '../assets/clients/bni_life.png';
import pertamina from '../assets/clients/pertamina.png';
import itdc from '../assets/clients/itdc.png';
import bappenas from '../assets/clients/bappenas.png';
import asean from '../assets/clients/asean.png';
import kemenparekraf from '../assets/clients/kemenparekraf.png';
import kemenpppa from '../assets/clients/kemenpppa.png';
import kominfo from '../assets/clients/kominfo.png';
import unesco from '../assets/clients/unesco.png';
import bri from '../assets/clients/bri.png';

const clientsRow1 = [
  { name: "ASEAN", logo: asean },
  { name: "Bappenas", logo: bappenas },
  { name: "ITDC Property", logo: itdc },
  { name: "Pertamina", logo: pertamina },
  { name: "BNI Life", logo: bniLife },
];

const clientsRow2 = [
  { name: "Bank BRI", logo: bri },
  { name: "Kemenparekraf", logo: kemenparekraf },
  { name: "Kemen PPPA", logo: kemenpppa },
  { name: "Kominfo", logo: kominfo },
  { name: "UNESCO", logo: unesco },
];

export default function TrustedBy() {
  return (
    <section className="w-full py-12 bg-white border-b border-gray-100 overflow-hidden" data-testid="section-trusted">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-400 text-sm font-medium text-center mb-8">Dipercaya oleh instansi terkemuka</p>
      </div>
      
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex flex-col gap-6">
          <div className="flex animate-marquee-left">
            {[...clientsRow1, ...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, i) => (
              <div 
                key={i} 
                className="h-12 md:h-14 flex items-center justify-center mx-8 flex-shrink-0"
                data-testid={`logo-client-row1-${i}`}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-full w-auto object-contain max-w-[120px] md:max-w-[140px]"
                />
              </div>
            ))}
          </div>
          
          <div className="flex animate-marquee-right">
            {[...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, i) => (
              <div 
                key={i} 
                className="h-12 md:h-14 flex items-center justify-center mx-8 flex-shrink-0"
                data-testid={`logo-client-row2-${i}`}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-full w-auto object-contain max-w-[120px] md:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
