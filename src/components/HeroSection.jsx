import React, { useState } from 'react';
import ProfileView from './ProfileView';
import FeaturedWorksSlider from './FeaturedWorksSlider';

// handleScrollToProject 함수를 props로 받습니다.
const HeroSection = ({ handleScrollToProject }) => {
  // 모드 상태: 'profile' 또는 'featured'
  const [mode, setMode] = useState('profile'); 

  return (
    <div className="relative w-full overflow-hidden bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
        
        {/* 모드 선택 탭 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">Developer Archive</h2>
          <div className="flex items-center bg-gray-100/50 p-1 rounded-full w-full sm:w-auto">
            <button
              onClick={() => setMode('profile')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 w-1/2 sm:w-auto ${
                mode === 'profile' 
                  ? 'bg-white text-black shadow-sm' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setMode('featured')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 w-1/2 sm:w-auto ${
                mode === 'featured' 
                  ? 'bg-white text-black shadow-sm' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Featured Works
            </button>
          </div>
        </div>
        
        {/* Featured Works 모드일 때만 표시되는 부가 정보 */}
        {mode === 'featured' && (
          <div className="mt-4 md:mt-0">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Project Highlights</h2>
            <div className="h-0.5 w-12 bg-black"></div>
          </div>
        )}
        
      </div>

      {/* 렌더링 영역: handleScrollToProject를 ProfileView로 전달 */}
      {mode === 'profile' ? <ProfileView handleScrollToProject={handleScrollToProject} /> : <FeaturedWorksSlider />}
      
    </div>
  );
};


export default HeroSection;