import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Monitor } from 'lucide-react';
// mockData.js에서 데이터를 임포트합니다.
import { HIGHLIGHT_PROJECTS } from '../data/mockData';

const FeaturedWorksSlider = () => {
  const [current, setCurrent] = useState(0);

  // 슬라이드 이동 로직
  const next = () => setCurrent((p) => (p + 1) % HIGHLIGHT_PROJECTS.length);
  const prev = () => setCurrent((p) => (p - 1 + HIGHLIGHT_PROJECTS.length) % HIGHLIGHT_PROJECTS.length);

  return (
    <>
      {/* 슬라이더 버튼 영역 */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-end items-end">
        <div className="flex gap-2">
          <button onClick={prev} className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 슬라이드 컨테이너 */}
      <div className="w-full relative h-[500px]">
        <div 
          className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {HIGHLIGHT_PROJECTS.map((project) => (
            <div key={project.id} className="min-w-full h-full px-6 flex justify-center">
              <div className={`w-full max-w-7xl h-full rounded-3xl ${project.color} flex flex-col md:flex-row overflow-hidden relative group`}>
                
                {/* 내용 영역 */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-white/20 text-xs font-bold text-gray-600 mb-6 w-fit">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 max-w-md">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-black font-bold group-hover:gap-4 transition-all">
                    Explore Case Study <ArrowRight size={18} />
                  </button>
                </div>

                {/* 시각적 영역 (이미지/플레이스홀더) */}
                <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 md:p-12">
                  <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 border border-gray-100/50">
                    {project.image ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className={`w-full h-full ${project.objectFit === 'contain' ? 'object-contain bg-white/50' : 'object-cover'}`}
                        />
                        {/* 오버레이 */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                      </>
                    ) : (
                      // 이미지가 없을 때의 대체 화면
                      <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-4 text-gray-300">
                        <Monitor size={48} />
                        <span className="font-mono text-sm">UI Preview</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedWorksSlider;