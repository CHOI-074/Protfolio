// ==========================================
// [File: src/App.jsx] - 해시 라우팅 (GitHub Pages 등 정적 호스팅에서 새로고침해도 동작)
//   #/                         홈
//   #/projects                 홈 > 프로젝트 섹션
//   #/projects/:slug           케이스 스터디
//   #/projects/:slug/:section  케이스 스터디 > 섹션
// ==========================================
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CaseStudy from './components/CaseStudy';
import { findProject } from './data/projects';

const BASE_TITLE = '최창연 | AI · ML Engineer Portfolio';

const parse = () => {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { parts };
};

const App = () => {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const [first, slug, section] = route.parts;
  const project = first === 'projects' && slug ? findProject(slug) : null;

  useEffect(() => {
    document.title = project ? `${project.title} — ${BASE_TITLE}` : BASE_TITLE;
    const target = project ? section : first === 'projects' ? 'projects' : null;
    requestAnimationFrame(() => {
      const el = target && document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0 });
    });
  }, [first, slug, section, project]);

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        body, html, * {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif !important;
        }
        pre, code, .font-mono, .font-mono * { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace !important; }
      `}</style>
      <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-900 selection:text-white">
        <Navbar />
        <main>{project ? <CaseStudy project={project} /> : <Home />}</main>
        <Footer />
      </div>
    </>
  );
};

export default App;
