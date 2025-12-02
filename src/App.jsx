// ==========================================
// [File: src/App.jsx]
// ==========================================
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProjectList from './components/ProjectList';
import TemplateGallery from './components/TemplateGallery';
import Footer from './components/Footer';

const App = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // 탭 변경 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        
        body, html, * {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
        }
      `}</style>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
        {/* 상단 네비게이션 */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* 메인 콘텐츠 영역 */}
        <main className="animate-fade-in">
          {activeTab === 'projects' ? (
            <>
              <HeroSlider />
              <ProjectList />
            </>
          ) : (
            <TemplateGallery />
          )}
        </main>

        {/* 하단 푸터 */}
        <Footer />
      </div>
    </>
  );
};

export default App;