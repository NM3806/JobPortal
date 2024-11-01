import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;