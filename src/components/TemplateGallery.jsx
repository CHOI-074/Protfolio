// ==========================================
// [File: src/components/TemplateGallery.jsx]
// ==========================================
import React from 'react';
import { Palette, Layers, ExternalLink } from 'lucide-react';
import { TEMPLATES } from '../data/mockData';

const TemplateGallery = () => {
  return (
    <section className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 text-gray-900 mb-6">
            <Palette size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Design Templates
          </h2>
          <p className="text-lg text-gray-500">
            실용적이고 모던한 UI 키트와 웹 템플릿 컬렉션입니다.<br/>
            모든 템플릿은 반응형을 지원하며 커스터마이징이 용이합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {TEMPLATES.map((template) => (
            <div key={template.id} className="group cursor-pointer">
              <div className={`w-full aspect-[4/3] rounded-2xl mb-6 relative overflow-hidden ${template.bg}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-105 transition-transform duration-500">
                  <Layers size={48} />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                    Preview <ExternalLink size={14} />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-500">{template.type}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded ${template.price === 'Free' ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
                  {template.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;