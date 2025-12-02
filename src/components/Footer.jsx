// ==========================================
// [File: src/components/Footer.jsx]
// ==========================================
import React from 'react';

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h4 className="font-bold text-xl tracking-tight mb-2">DEV.ARCHIVE</h4>
        <p className="text-sm text-gray-400">Built with React & Tailwind CSS</p>
      </div>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <a href="#" className="hover:text-black transition-colors">GitHub</a>
        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-black transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;