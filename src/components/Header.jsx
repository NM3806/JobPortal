import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">JobPortal</h1>
        <button 
          className="block md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <nav className={`flex-col md:flex-row md:flex ${isOpen ? "flex" : "hidden"} md:space-x-4 space-y-4 md:space-y-0`}>
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#features" className="hover:text-blue-200">Features</a>
          <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
