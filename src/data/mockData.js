// ==========================================
// [File: src/data/mockData.js]
// ==========================================
import uzetImage from '../assets/image/uzet_main.png';

export const HIGHLIGHT_PROJECTS = [
  {
    id: 1,
    title: "UZET",
    category: "AI & FinTech",
    description: "사용자 행동 패턴과 금융 데이터를 분석하여 개인 맞춤형 기능을 실시간으로 추천하는 AI 위젯입니다. Implicit ALS와 하이브리드 모델을 적용해 최적의 UX를 제공합니다.",
    tags: ["Python FastAPI", "Implicit ALS", "Spring"],
    color: "bg-emerald-50",
    image: uzetImage,
    objectFit: "contain"
  },
  {
    id: 2,
    title: "Task Orchestrator",
    category: "SaaS Application",
    description: "실시간 협업이 가능한 프로젝트 관리 도구입니다. WebSocket을 이용한 즉각적인 상태 동기화와 드래그 앤 드롭 칸반 보드를 지원합니다.",
    tags: ["React", "Socket.io", "Redux"],
    color: "bg-slate-50",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    category: "Data Viz",
    description: "복잡한 암호화폐 데이터를 실시간으로 시각화하는 대시보드입니다. WebGL 기반 차트 라이브러리를 사용하여 대량의 데이터도 부드럽게 렌더링합니다.",
    tags: ["TypeScript", "Three.js", "GraphQL"],
    color: "bg-gray-50",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  
];

export const ALL_PROJECTS = [
  ...HIGHLIGHT_PROJECTS,
  {
    id: 4,
    title: "AI Chat Interface",
    category: "AI Integration",
    description: "자연어 처리 모델을 연동한 챗봇 인터페이스입니다. 스트리밍 응답 처리를 통해 실제 대화하는 듯한 사용자 경험을 제공합니다.",
    tags: ["OpenAI API", "React Query", "Vercel"],
    color: "bg-orange-50/50",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
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