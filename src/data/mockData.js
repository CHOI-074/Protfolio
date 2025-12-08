// ==========================================
// [File: src/data/mockData.js]
// ==========================================
import uzetImage from '../assets/image/uzet_main.png';
import KDTimage from '../assets/image/KDT_main.png';
import finzImage from '../assets/image/Finz_main.png';
import subwayImage from '../assets/image/subway_main.png';

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
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
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