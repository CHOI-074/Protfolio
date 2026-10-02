import React from 'react';
import { PROFILE_DATA } from '../data/mockData';

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-16">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-center md:text-left">
        <h4 className="font-bold text-xl tracking-tight mb-2">CHANGYUN CHOI</h4>
        <p className="text-sm text-gray-400">AI · ML Engineer — 추천 시스템 · LLM 애플리케이션</p>
      </div>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
        <a href={PROFILE_DATA.velog} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Velog</a>
        <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-black transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
