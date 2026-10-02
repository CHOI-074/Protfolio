import React from 'react';
import { Command, Github } from 'lucide-react';
import { PROFILE_DATA } from '../data/mockData';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <Command size={16} />
          </div>
          <span className="font-bold text-lg tracking-tight">CHANGYUN CHOI</span>
        </a>

        {/* Menu */}
        <div className="hidden sm:flex items-center bg-gray-100/50 p-1 rounded-full text-sm font-medium">
          <a href="#top" className="px-4 py-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-white transition-all">Profile</a>
          <a href="#projects" className="px-4 py-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-white transition-all">Projects</a>
        </div>

        {/* Social / Contact */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-black transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
