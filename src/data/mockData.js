// ==========================================
// [File: src/data/mockData.js]
// *수정: PROFILE_DATA, SKILLS, PROFILE_PROJECTS에 export 키워드 추가*
// ==========================================
// NOTE: 로컬 이미지 경로는 이 환경에서 사용할 수 없으므로, 데이터 구조만 유지합니다.
//       (App.jsx에서 이 데이터들을 직접 정의하거나 URL을 사용해야 합니다.)
import uzetImage from '../assets/image/uzet_main.png';
import KDTimage from '../assets/image/KDT_main.png';
import finzImage from '../assets/image/Finz_main.png';
import subwayImage from '../assets/image/subway_main.png';
import Choi from '../assets/image/Choi_image.jpg';

// export 키워드 추가
export const PROFILE_DATA = {
  name: "최창연 (ChangYun Choi)",
  jobTitle: "Full-Stack Developer & Data Analyst",
  description: "데이터와 AI로 사용자 경험과 비즈니스 성과를 동시에 개선하는 Product를 만들고 있습니다. AI 기반 추천 시스템과 데이터 분석 역량을 활용해, 실제 서비스의 문제를 구체적으로 해결하는 데 주력합니다.",
  email: "portfolio0704@naver.com",
  phone: "010-3048-3452",
  location: "Seoul, Republic of Korea",
  profileImage: Choi,
};

// 2. 스킬 및 수상 리스트 (export 추가)
export const SKILLS = [
  { area: "Frontend", list: ["React", "Vue.js", "Tailwind CSS", "TypeScript"] },
  { area: "Backend", list: ["Spring Boot", "Python FastAPI", "Node.js/Express", "MySQL/PostgreSQL"] },
  { area: "AI/Data", list: ["Implicit ALS", "Generative AI (OpenAI, Gemini)", "Jupyter", "Pandas", "Geopandas"] },
];

// 3. Achievements & Key Projects: ID를 ALL_PROJECTS와 일치하도록 수정 (export 추가)
export const PROFILE_PROJECTS = [
  { 
    id: 2, // ALL_PROJECTS의 '슬기로운 은퇴생활' ID
    title: "슬기로운 은퇴생활", 
    year: "2025", 
    description: "5060 은퇴자를 위한 AI 기반 지역 정착 매칭 플랫폼 개발",
    badge: "KDT 해커톤 장관상 수상작"
  },
  { 
    id: 1, // ALL_PROJECTS의 'UZET' ID
    title: "UZET", 
    year: "2025", 
    description: "사용자 행동 패턴 및 금융 데이터 기반 개인 맞춤형 AI 위젯 서비스 구현",
    badge: "4등 / 266팀"
  },
  { 
    id: 3, // ALL_PROJECTS의 'FINZ' ID
    title: "FINZ", 
    year: "2025", 
    description: "MZ세대를 위한 AI 기반 맞춤형 금융 입문 플랫폼 개발 및 모의투자 시스템 구현" 
  },
  { 
    id: 4, // ALL_PROJECTS의 'Metro Site Analysis' ID
    title: "지하철 역 최적의 입지 분석 모델", 
    year: "2023", 
    description: "도시 공공 데이터와 GIS 기술을 활용한 최적 입지 선정 모델링 프로젝트 (AHP 기법)" 
  },
];

export const HIGHLIGHT_PROJECTS = [
  {
    id: 1,
    title: "UZET",
    category: "AI & FinTech",
    description: "사용자 행동 패턴과 금융 데이터를 분석하여 개인 맞춤형 기능을 실시간으로 추천하는 AI 위젯입니다. Implicit ALS와 하이브리드 모델을 적용해 최적의 UX를 제공합니다.",
    tags: ["Python FastAPI", "Implicit ALS", "Spring"],
    color: "bg-emerald-50",
    image: uzetImage,
    objectFit: "cover"
  },
{
    id: 2,
    title: "슬기로운 은퇴생활",
    category: "Social Impact & AI",
    description: "KDT 해커톤 장관상 수상작. 5060 은퇴자를 위한 AI 기반 지역 정착 매칭 플랫폼입니다. Perplexity와 ChatGPT를 결합한 이중 파이프라인으로 할루시네이션을 최소화한 맞춤형 리포트를 제공합니다.",
    tags: ["KDT 해커톤 장관상", "Generative AI", "Vue.js"],
    color: "bg-teal-50",
    image: KDTimage,
    objectFit: "cover" 
  },
  {
    id: 3,
    title: "FINZ",
    category: "FinTech & Edu",
    description: "MZ세대를 위한 AI 기반 맞춤형 금융 입문 플랫폼입니다. 실시간 시세 기반의 모의투자 시스템과 투자 성향 진단 알고리즘을 통해 자기주도적 금융 역량 강화를 지원합니다.",
    tags: ["Spring Legacy", "Vue.js", "OpenAI API"], 
    color: "bg-sky-50", 
    image: finzImage,
    objectFit: "cover"
  },
];

export const ALL_PROJECTS = [
  ...HIGHLIGHT_PROJECTS,
  {
    id: 4,
    title: "Metro Site Analysis",
    category: "Data Science & GIS",
    description: "도시 공공 데이터(인구, 상권, 교통)와 GIS 기술을 활용하여 최적의 지하철역 입지를 선정하는 분석 모델링 프로젝트입니다. AHP 기법을 통해 정량적 입지 점수를 도출하고 시각화했습니다.",
    tags: ["Python","JMP", "Geopandas", "QGIS"],
    color: "bg-indigo-50",
    image: subwayImage,
    objectFit: "cover"
  },
  {
    id: 5,
    title: "Developer Blog",
    category: "Static Site",
    description: "개발 지식을 공유하는 개인 기술 블로그입니다. MDX를 지원하여 코드 스니펫과 인터랙티브 컴포넌트를 글 내부에 삽입할 수 있습니다.",
    tags: ["Gatsby", "MDX", "Emotion"],
    color: "bg-blue-50/50",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    objectFit: "cover"
  }
];

export const TEMPLATES = [
  { id: 1, title: "Mono Folio", type: "Personal", price: "Free", bg: "bg-zinc-100" },
  { id: 2, title: "Startup Landing", type: "Business", price: "$49", bg: "bg-slate-100" },
  { id: 3, title: "Agency Grid", type: "Corporate", price: "$29", bg: "bg-neutral-100" },
  { id: 4, title: "Tech Documentation", type: "Docs", price: "Free", bg: "bg-stone-100" },
  { id: 5, title: "App Showcase", type: "Mobile", price: "$19", bg: "bg-red-50" },
  { id: 6, title: "Admin Starter", type: "Dashboard", price: "$39", bg: "bg-indigo-50" },
];