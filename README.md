# 최창연 포트폴리오

AI · ML 엔지니어(추천 시스템 · LLM 애플리케이션) 지원용 포트폴리오 사이트입니다.

## 수록 프로젝트

| 프로젝트 | 분야 | 저장소 |
|---|---|---|
| UZET | 추천 시스템 (Implicit ALS + 맥락 부스팅) | [uzet-widget-recommender](https://github.com/CHOI-074/uzet-widget-recommender) |
| 슬기로운 은퇴생활 | LLM 애플리케이션 · KDT 해커톤 장관상 | [kdt-hackathon-2025](https://github.com/kdt-hackathon-2025/Frontend) |
| FINZ | 투자 성향 진단 · 콘텐츠 추천 · AI 챗봇 | [KB-PROJECT-FINZ](https://github.com/KB-PROJECT-FINZ) |
| 금융 문서 RAG 챗봇 | RAG (FAISS · Gemini) | [RAG-lab](https://github.com/CHOI-074/RAG-lab) |
| 지하철 역 최적 입지 분석 | 데이터 분석 · GIS | — |

## 구성

- 홈: 소개 · 일하는 방식(근거 링크 포함) · 프로젝트 · 지금 하는 일 · 기술 · 수상
- 케이스 스터디(`#/projects/:slug`): 문제 → 아키텍처 → 핵심 의사결정과 트레이드오프 → 실험 · 평가 → 트러블슈팅 → 한계 → 코드 위치

## 기술 스택

React 19 · Vite · Tailwind CSS · lucide-react

## 실행

```bash
npm install
npm run dev     # 로컬 개발 서버
npm run build   # dist/ 에 정적 빌드
```

프로필은 `src/data/mockData.js`, 프로젝트·케이스 스터디는 `src/data/projects.js`에서 수정합니다.
해시 라우팅이라 GitHub Pages 같은 정적 호스팅에서도 새로고침 시 404가 나지 않습니다.
