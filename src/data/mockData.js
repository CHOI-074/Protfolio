// ==========================================
// [File: src/data/mockData.js] - 사이트에 표시되는 모든 콘텐츠
// ==========================================
import uzetImage from '../assets/image/uzet_main.png';
import KDTimage from '../assets/image/KDT_main.png';
import finzImage from '../assets/image/Finz_main.png';
import subwayImage from '../assets/image/subway_main.jpg';
import Choi from '../assets/image/Choi_image.jpg';

export const PROFILE_DATA = {
  name: "최창연 (ChangYun Choi)",
  jobTitle: "AI · ML Engineer",
  focus: "추천 시스템 · LLM 애플리케이션",
  description:
    "사용자 행동 데이터로 '지금 필요한 것'을 고르는 추천 시스템과, 문서 근거로 답하는 LLM 애플리케이션을 만듭니다. 금융·농업 도메인에서 협업 필터링(Implicit ALS)과 RAG 파이프라인을 직접 설계·구현했고, Spring 백엔드 경험을 바탕으로 모델을 실제 서비스에 붙이는 데까지 책임집니다.",
  email: "portfolio0704@naver.com",
  github: "https://github.com/CHOI-074",
  location: "Seoul, Republic of Korea",
  profileImage: Choi,
};

// 스킬: 목표 직무(AI/ML) 관련 영역을 앞쪽에 배치
export const SKILLS = [
  { area: "AI / ML", list: ["Implicit ALS (협업 필터링)", "RAG", "FAISS", "sentence-transformers", "OpenAI · Gemini API"] },
  { area: "Data", list: ["Python", "pandas", "SQL", "Jupyter", "Geopandas"] },
  { area: "Backend", list: ["Spring", "FastAPI", "REST API", "JWT", "MyBatis", "MySQL"] },
  { area: "Frontend", list: ["Vue.js", "React", "Tailwind CSS"] },
];

export const CERTIFICATIONS = [
  { title: "KDT 해커톤 장관상 (7회)", year: "2025" },
  { title: "NH농협 AI 아이디어 경진대회 장려상", year: "2025" },
  { title: "빅데이터분석기사", year: "" },
  { title: "SQLD", year: "" },
];

// 프로필 화면의 'Key Projects' 목록 (id는 ALL_PROJECTS와 일치)
export const PROFILE_PROJECTS = [
  {
    id: 1,
    title: "UZET",
    year: "2025",
    description: "Implicit ALS + 실시간 맥락 부스팅 하이브리드 위젯 추천 엔진",
    badge: "농협 AI 경진대회 장려상",
  },
  {
    id: 2,
    title: "슬기로운 은퇴생활",
    year: "2025",
    description: "Perplexity·ChatGPT 이중 파이프라인 기반 은퇴자 지역 정착 매칭 플랫폼",
    badge: "KDT 해커톤 장관상",
  },
  {
    id: 3,
    title: "FINZ",
    year: "2025",
    description: "투자 성향 진단 · 성향별 콘텐츠 추천 · AI 챗봇 (PM)",
  },
  {
    id: 4,
    title: "금융 문서 RAG 챗봇",
    year: "2026",
    description: "PDF 근거 기반 질의응답, 청크 사이즈 비교 실험",
  },
  {
    id: 5,
    title: "지하철 역 최적 입지 분석",
    year: "2023",
    description: "공공 데이터 · GIS · AHP 기반 입지 선정 모델링",
  },
];

// 상단 'Featured Works' 슬라이더
export const HIGHLIGHT_PROJECTS = [
  {
    id: 1,
    title: "UZET",
    category: "Recommender System",
    description:
      "금융 앱 사용자가 '지금' 쓸 확률이 높은 기능을 위젯으로 추천합니다. 장기 선호는 Implicit ALS로, 급여일·장중·로밍 같은 단기 맥락은 규칙 기반 부스팅으로 반영해 하나의 점수로 결합했습니다. 추천 엔진 파트를 담당했습니다.",
    tags: ["Implicit ALS", "Hybrid Scoring", "FastAPI", "Spring"],
    color: "bg-emerald-50",
    image: uzetImage,
    url: "https://github.com/CHOI-074/uzet-widget-recommender",
  },
  {
    id: 2,
    title: "슬기로운 은퇴생활",
    category: "LLM Application",
    description:
      "KDT 해커톤 장관상 수상작. 5060 은퇴자를 지방 일자리·정착 정보와 연결하는 플랫폼입니다. Perplexity로 최신 정보를 검색하고 ChatGPT로 정리하는 이중 파이프라인으로 할루시네이션을 줄인 맞춤형 리포트를 제공합니다.",
    tags: ["Generative AI", "Prompt Pipeline", "Vue.js"],
    color: "bg-teal-50",
    image: KDTimage,
    url: "https://github.com/kdt-hackathon-2025/Frontend",
  },
  {
    id: 3,
    title: "FINZ",
    category: "FinTech · AI Chatbot",
    description:
      "MZ세대를 위한 금융 입문·모의투자 플랫폼. PM으로 기획을 주도하며 인증·세션, 투자 성향 진단, 성향별 콘텐츠 추천, AI 챗봇을 직접 구현했습니다. 한국투자증권 API의 계정당 단일 세션 제약을 해결한 경험이 있습니다.",
    tags: ["Spring Legacy", "Vue.js", "OpenAI API"],
    color: "bg-sky-50",
    image: finzImage,
    url: "https://github.com/KB-PROJECT-FINZ",
  },
];

export const ALL_PROJECTS = [
  ...HIGHLIGHT_PROJECTS,
  {
    id: 4,
    title: "금융 문서 RAG 챗봇",
    category: "LLM Application · RAG",
    description:
      "사업보고서·약관 같은 금융 PDF를 업로드하면 문서 내용을 근거로 답하는 챗봇입니다. chunk_size 300/500/800 비교 실험에서 500(overlap 50)만 유일하게 핵심 본문을 검색 1순위로 잡았고, 청크 크기만큼 PDF 레이아웃 노이즈 전처리가 중요하다는 점을 확인했습니다.",
    tags: ["sentence-transformers", "FAISS", "Gemini 2.5 Flash", "Streamlit"],
    color: "bg-violet-50",
    image: null,
    url: "https://github.com/CHOI-074/RAG-lab",
  },
  {
    id: 5,
    title: "지하철 역 최적 입지 분석",
    category: "Data Science · GIS",
    description:
      "도시 공공 데이터(인구, 상권, 교통)와 GIS를 활용해 최적의 지하철역 입지를 선정한 분석 프로젝트입니다. AHP 기법으로 정량적 입지 점수를 도출하고 지도로 시각화했습니다.",
    tags: ["Python", "JMP", "Geopandas", "QGIS"],
    color: "bg-indigo-50",
    image: subwayImage,
  },
];
