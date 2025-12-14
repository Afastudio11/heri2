import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { Rewards } from './components/Rewards';
import { Security } from './components/Security';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Rewards />
      <Security />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;