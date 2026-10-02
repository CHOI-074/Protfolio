// ==========================================
// [File: src/data/mockData.js] - 프로필 콘텐츠 (프로젝트는 projects.js)
// ==========================================
import Choi from '../assets/image/Choi_image.jpg';

export const PROFILE_DATA = {
  name: '최창연',
  nameEn: 'ChangYun Choi',
  jobTitle: 'AI · ML Engineer',
  focus: '추천 시스템 · LLM 애플리케이션',
  headline: '모델을 서비스 안에서 동작하게 만드는 엔지니어',
  description:
    '사용자 행동 데이터로 "지금 필요한 것"을 고르는 추천 시스템과, 문서 근거로만 답하는 LLM 애플리케이션을 만듭니다. 금융 도메인에서 Implicit ALS 하이브리드 추천과 RAG 파이프라인을 설계·구현했고, Spring·Vue 풀스택 경험으로 모델 결과가 API와 화면까지 닿는 경로를 직접 연결합니다.',
  email: 'portfolio0704@naver.com',
  github: 'https://github.com/CHOI-074',
  location: 'Seoul, Korea',
  profileImage: Choi,
};

// 일하는 방식 — 각 항목은 실제 저장소에 근거가 있는 것만
export const PRINCIPLES = [
  {
    title: '측정하지 않은 숫자는 쓰지 않습니다',
    body: '"어떻게 측정했나요?"에 답할 수 없는 성과는 적지 않습니다. 평가 프로토콜을 먼저 고정하고, 미완성 범위는 README에 그대로 밝힙니다.',
    ref: { label: 'UZET 평가 문서', href: 'https://github.com/CHOI-074/uzet-widget-recommender/blob/main/docs/evaluation.md' },
  },
  {
    title: '튜닝 값은 코드 밖에 둡니다',
    body: '가중치·반감기·맥락 규칙을 전부 설정 파일로 분리해, 실험할 때 코드를 고치지 않고 기획자도 규칙을 읽을 수 있게 합니다.',
    ref: { label: 'scoring.yaml', href: 'https://github.com/CHOI-074/uzet-widget-recommender/blob/main/config/scoring.yaml' },
  },
  {
    title: '감이 아니라 실험으로 정합니다',
    body: '청크 크기 하나도 300/500/800을 같은 조건에서 비교해 정했고, 그 과정에서 전처리가 더 큰 병목이라는 걸 발견했습니다.',
    ref: { label: '청크 실험 코드', href: 'https://github.com/CHOI-074/RAG-lab/blob/main/chunk_experiment.py' },
  },
];

export const NOW = [
  { title: 'UZET 추천 엔진 재구현', body: 'ALS 학습 · 하이브리드 스코어러 · Redis 저장소 구현, 이후 ablation 평가' },
  { title: 'RAG 평가셋 구축', body: '50문항 · gold span 라벨링 · Recall@5 / MRR 벤치마크' },
];

export const SKILLS = [
  { area: 'AI / ML', list: ['Implicit ALS', 'Hybrid Re-ranking', 'RAG', 'FAISS', 'sentence-transformers', 'OpenAI · Gemini API'] },
  { area: 'Data', list: ['Python', 'pandas', 'SQL', 'Jupyter', 'Geopandas'] },
  { area: 'Backend', list: ['Spring', 'FastAPI', 'MyBatis', 'MySQL', 'REST API', 'pytest'] },
  { area: 'Frontend', list: ['Vue.js', 'React', 'Tailwind CSS'] },
];

export const CERTIFICATIONS = [
  { title: 'KDT 해커톤 장관상', sub: '슬기로운 은퇴생활', year: '2025' },
  { title: 'NH농협 AI 아이디어 경진대회 장려상', sub: 'UZET', year: '2025' },
  { title: '빅데이터분석기사', sub: '자격증', year: '' },
  { title: 'SQLD', sub: '자격증', year: '' },
  { title: "KB IT's Your Life 6기", sub: '풀스택 교육과정', year: '2025' },
];
