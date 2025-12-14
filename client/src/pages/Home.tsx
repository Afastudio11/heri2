import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import About from '@/components/About';
import BusinessUnits from '@/components/BusinessUnits';
import Rewards from '@/components/Rewards';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <BusinessUnits />
      <Rewards />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
