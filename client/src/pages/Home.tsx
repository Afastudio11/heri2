import Header from '@/components/Header';
import HeroNew from '@/components/HeroNew';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import TrackRecord from '@/components/TrackRecord';
import TrustBar from '@/components/TrustBar';
import AboutNew from '@/components/AboutNew';
import CTAContact from '@/components/CTAContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      <Header />
      <HeroNew />
      <Services />
      <Stats />
      <TrackRecord />
      <TrustBar />
      <AboutNew />
      <CTAContact />
      <Footer />
    </div>
  );
}
