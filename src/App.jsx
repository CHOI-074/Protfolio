// ==========================================
// [File: src/App.jsx] - 메인 애플리케이션 컴포넌트
// ==========================================
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
// 올바른 경로로 컴포넌트들을 임포트합니다.
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // 수정된 HeroSection 임포트
import ProjectList from './components/ProjectList';
import TemplateGallery from './components/TemplateGallery';
import Footer from './components/Footer';


// NOTE: ProfileView 및 FeaturedWorksSlider는 HeroSection 내부에서 임포트되므로 App.jsx에서는 필요 없습니다.

const App = () => {
  const [activeTab, setActiveTab] = useState('projects');
  // 프로젝트 ID를 키로 하여 해당 DOM 엘리먼트를 저장할 Ref 객체
  const projectRefs = useRef({}); // useRef 초기화
  
  // 프로젝트 스크롤 함수 정의
  const handleScrollToProject = (projectId) => {
    // 1. activeTab을 'projects'로 변경하여 ProjectList가 화면에 표시되게 함
    setActiveTab('projects');

    // 2. 탭 전환 후 스크롤이 실행되도록 약간의 지연 시간을 줌 (DOM 렌더링 대기)
    setTimeout(() => {
      // projectRefs.current가 정의되어 있는지 확인
      const element = projectRefs.current[projectId];
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' // 화면 상단에 맞춥니다.
        });
      } else {
        // ProjectList에서 참조를 찾을 수 없는 경우 ID가 불일치하거나 렌더링이 안 된 상태입니다.
        console.error(`Project element with ID ${projectId} not found in refs.`);
      }
    }, 100); // 100ms 지연
  };
  
  // 탭 변경 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <>
      {/* 폰트 및 기본 스타일 정의 */}
      <style>{`
        /* Pretendard 폰트 로드 */
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
              {/* HeroSection에 스크롤 함수를 전달 */}
              <HeroSection handleScrollToProject={handleScrollToProject} /> 
              {/* ProjectList에 프로젝트 Ref 객체를 전달 */}
              <ProjectList projectRefs={projectRefs} />
            </>
          ) : (
            // Templates 탭 활성화 시 TemplateGallery 표시
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