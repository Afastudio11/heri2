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

const clients = [
  { name: "ASEAN", logo: asean },
  { name: "Bappenas", logo: bappenas },
  { name: "ITDC Property", logo: itdc },
  { name: "Pertamina", logo: pertamina },
  { name: "BNI Life", logo: bniLife },
  { name: "Bank BRI", logo: bri },
  { name: "Kemenparekraf", logo: kemenparekraf },
  { name: "Kemen PPPA", logo: kemenpppa },
  { name: "Kominfo", logo: kominfo },
  { name: "UNESCO", logo: unesco },
];

export default function TrustedBy() {
  return (
    <section className="w-full py-12 bg-white border-b border-gray-100" data-testid="section-trusted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <p className="text-gray-400 text-sm font-medium">Dipercaya oleh instansi terkemuka</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="h-12 md:h-16 flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300"
                data-testid={`logo-client-${i}`}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-full w-auto object-contain max-w-[120px] md:max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
