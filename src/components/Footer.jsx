import React from 'react';

import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer id='contact' className="bg-blue-600 py-6 text-white text-center px-4 md:px-8">
      <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="#" className="hover:text-blue-200">
          <FaLinkedin size={24} />
        </a>
        <span>|</span>
        <a href="#" className="hover:text-blue-200">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
