import React, { useState } from 'react';
import SearchBar from './SearchBar';

function HeroSection() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <section id="home" className="bg-gray-100 pt-20 pb-10 px-4 md:px-8 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
        Find Your Dream Job
      </h2>
      <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg">
        Connecting talented individuals with top employers
      </p>
      <button
        onClick={() => setShowSearchBar(!showSearchBar)}
        className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        Get Started
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden mt-6 ${
          showSearchBar ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
        }`}
      >
        <SearchBar />
      </div>
    </section>
  );
}

export default HeroSection;
