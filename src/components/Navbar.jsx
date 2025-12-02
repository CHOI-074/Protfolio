// 1. 필요한 도구들을 가져옵니다 (Import)
import React from 'react';
import { Command, Github } from 'lucide-react'; // Navbar에서 쓰는 아이콘만 가져옵니다

// 2. 컴포넌트 본문 (작성하신 코드)
const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setActiveTab('projects')}
        >
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <Command size={16} />
          </div>
          <span className="font-bold text-lg tracking-tight">DEV.ARCHIVE</span>
        </div>

        {/* Menu Items */}
        <div className="flex items-center bg-gray-100/50 p-1 rounded-full">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'projects' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'templates' 
                ? 'bg-white text-black shadow-sm' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Templates
          </button>
        </div>

        {/* Social / Contact */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all">
            <Github size={20} />
          </a>
          <button className="text-sm font-semibold text-gray-900 border-b-2 border-transparent hover:border-black transition-all">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

// 3. 이 컴포넌트를 밖으로 내보냅니다 (Export)
export default Navbar;