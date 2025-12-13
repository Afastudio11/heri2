import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BusinessUnits from '@/components/BusinessUnits';
import ClientsShowcase from '@/components/ClientsShowcase';
import FeaturedProjects from '@/components/FeaturedProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <About />
      <BusinessUnits />
      <ClientsShowcase />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  );
}
