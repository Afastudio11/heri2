import { Quote } from 'lucide-react';

const PROJECTS = [
  {
    title: "ASEAN Blue Economy Forum",
    description: "Full event management for ASEAN Economic Ministers meeting, including gala dinners and VVIP handling."
  },
  {
    title: "MotoGP Mandalika Side Events",
    description: "Crowd management and multimedia support for international sporting events."
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-slate-900 text-white relative" data-testid="section-featured">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Track Record</span>
            <h2 className="text-4xl font-bold mb-6">Delivering Excellence on National & International Scale</h2>
            <p className="text-gray-400 mb-8 text-lg">
              From high-level ministerial meetings to large-scale outdoor festivals, our portfolio showcases our versatility and commitment to quality.
            </p>
            <div className="space-y-6">
              {PROJECTS.map((project, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md"
                  data-testid={`card-project-${idx}`}
                >
                  <h3 className="text-xl font-bold text-skyled-light mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Event Conference" 
              className="w-full h-full object-cover"
              data-testid="img-featured-project"
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
  );
}
