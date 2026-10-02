// ==========================================
// [File: src/App.jsx] - 메인 애플리케이션 컴포넌트
// ==========================================
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

const App = () => {
  // 프로젝트 ID를 키로 해당 DOM 엘리먼트를 저장
  const projectRefs = useRef({});

  const handleScrollToProject = (projectId) => {
    const element = projectRefs.current[projectId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        html { scroll-behavior: smooth; }
        body, html, * {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif !important;
        }
        [id^="project-"] { scroll-margin-top: 96px; }
      `}</style>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
        <Navbar />
        <main>
          <HeroSection handleScrollToProject={handleScrollToProject} />
          <ProjectList projectRefs={projectRefs} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
