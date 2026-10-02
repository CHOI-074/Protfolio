import React, { useState } from 'react';
import ProfileView from './ProfileView';
import FeaturedWorksSlider from './FeaturedWorksSlider';

const HeroSection = ({ handleScrollToProject }) => {
  const [mode, setMode] = useState('profile');

  const tabClass = (active) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 w-1/2 sm:w-auto ${
      active ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-800'
    }`;

  return (
    <div id="top" className="relative w-full overflow-hidden bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">Portfolio</h2>
          <div className="flex items-center bg-gray-100/50 p-1 rounded-full w-full sm:w-auto">
            <button onClick={() => setMode('profile')} className={tabClass(mode === 'profile')}>Profile</button>
            <button onClick={() => setMode('featured')} className={tabClass(mode === 'featured')}>Featured Works</button>
          </div>
        </div>
        {mode === 'featured' && (
          <div className="mt-4 md:mt-0">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Project Highlights</h2>
            <div className="h-0.5 w-12 bg-black"></div>
          </div>
        )}
      </div>

      {mode === 'profile' ? (
        <ProfileView handleScrollToProject={handleScrollToProject} />
      ) : (
        <FeaturedWorksSlider handleScrollToProject={handleScrollToProject} />
      )}
    </div>
  );
};

export default HeroSection;
