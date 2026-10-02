// ==========================================
// [File: src/data/projects.js] - 프로젝트 & 케이스 스터디 콘텐츠
// 원칙: 저장소·커밋으로 확인되는 내용만 적는다. 측정하지 않은 숫자는 쓰지 않는다.
// ==========================================
import uzetImage from '../assets/image/uzet_main.png';
import KDTimage from '../assets/image/KDT_main.png';
import finzImage from '../assets/image/Finz_main.png';
import subwayImage from '../assets/image/subway_main.jpg';

// section.type: prose | table | flow | decisions | troubleshoot | formula | list | code
export const PROJECTS = [
  // ------------------------------------------------------------------ UZET
  {
    slug: 'uzet',
    title: 'UZET',
    subtitle: 'Implicit ALS + 실시간 맥락 하이브리드 위젯 추천 엔진',
    category: 'Recommender System',
    image: uzetImage,
    color: 'bg-emerald-50',
    accent: 'text-emerald-700',
    status: { label: '재구현 진행 중', tone: 'amber' },
    badge: 'NH농협 AI 아이디어 경진대회 장려상',
    summary:
      '금융 앱 사용자가 "지금" 쓸 확률이 높은 기능 N개를 고르는 문제. 장기 선호(Implicit ALS)와 단기 맥락(급여일·장중·로밍 규칙)을 하나의 점수로 결합하고, 모델은 오프라인에서만 돌리는 서빙 구조를 설계했습니다.',
    tags: ['Implicit ALS', 'Hybrid Re-ranking', 'FastAPI', 'Redis', 'pytest'],
    meta: [
      { k: '기간', v: '2025.10 – 12 (원본) · 2026 개인 재구현' },
      { k: '팀', v: '2인' },
      { k: '역할', v: '추천 엔진 설계·구현 담당' },
      { k: '성과', v: '농협 AI 아이디어 경진대회 장려상' },
    ],
    links: [{ label: '추천 엔진 저장소', href: 'https://github.com/CHOI-074/uzet-widget-recommender' }],
    highlights: [
      { v: '4개 항', k: 'ALS · Context · Recency − Fatigue 결합 점수' },
      { v: '6개', k: 'YAML로 정의한 맥락 규칙 (급여일·장중·로밍…)' },
      { v: '0개', k: '코드에 하드코딩된 튜닝 값' },
    ],
    sections: [
      {
        id: 'problem',
        title: '문제',
        type: 'prose',
        body: [
          '금융 앱의 메뉴는 깊습니다. 자주 쓰는 기능이 5-Depth 안쪽에 있으면 사용자는 같은 경로를 매번 헤맵니다. 그렇다고 모든 기능을 첫 화면에 늘어놓으면 아무것도 눈에 들어오지 않습니다.',
          '그래서 질문을 "이 사용자가 지금 쓸 확률이 높은 위젯 6개를 어떻게 고를까?"로 좁혔습니다. 여기에는 속도가 다른 두 종류의 신호가 섞여 있습니다.',
        ],
      },
      {
        id: 'signals',
        title: '신호 분리',
        type: 'table',
        head: ['신호', '성격', '예시', '담당'],
        rows: [
          ['장기 선호', '느리게 변함', '이 사람은 평소 환전을 자주 쓴다', 'Implicit ALS (배치)'],
          ['단기 맥락', '빠르게 변함', '오늘은 급여일, 지금은 장중', '규칙 기반 부스팅 (요청 시점)'],
        ],
      },
      {
        id: 'scoring',
        title: '스코어링',
        type: 'formula',
        code: 'final(u, w, ctx) = α·ALS_norm(u,w) + β·Context(w,ctx) + γ·Recency(u,w) − δ·Fatigue(u,w)',
        note: 'α=1.00 · β=0.40 · γ=0.25 · δ=0.30 / Recency 반감기 72시간 / 노출 후 미클릭 5회에서 피로도 포화 / 같은 카테고리 최대 3개. 모든 값은 config/scoring.yaml 에만 존재합니다.',
      },
      {
        id: 'architecture',
        title: '아키텍처',
        type: 'flow',
        lanes: [
          {
            name: '오프라인 배치',
            steps: [
              { t: '행동 로그', d: '클릭 · 노출 이벤트' },
              { t: '신뢰도 변환', d: 'c = 1 + α·r' },
              { t: 'Implicit ALS', d: '유저·위젯 잠재 요인' },
              { t: '후보 사전계산', d: '유저당 Top-50' },
              { t: 'CandidateStore', d: 'File / Redis' },
            ],
          },
          {
            name: '온라인 요청',
            steps: [
              { t: 'GET /recommend', d: 'user · now · flags' },
              { t: '후보 조회', d: '모델 추론 없음' },
              { t: '재랭킹', d: 'Context + Recency − Fatigue' },
              { t: '다양성 제한', d: '카테고리당 최대 3' },
              { t: 'Top-6 응답', d: '항별 기여도 parts 포함' },
            ],
          },
        ],
        caption: '"추천을 실시간으로 계산한다"가 아니라 "실시간 요소만 실시간으로 반영한다". 요청 경로에서 무거운 연산을 빼서 지연시간과 장애 범위를 줄였습니다.',
      },
      {
        id: 'decisions',
        title: '핵심 의사결정',
        type: 'decisions',
        items: [
          {
            q: '명시적 평점 MF 대신 Implicit ALS',
            why: '사용자는 위젯에 별점을 주지 않습니다. 클릭하지 않은 것이 "싫어서"인지 "몰라서"인지 구분할 수 없고, 안 본 항목이 압도적 다수입니다. Hu·Koren·Volinsky(2008) 방식으로 선호(p)와 신뢰도(c)를 분리해, 관측되지 않은 0까지 손실에 포함했습니다.',
            tradeoff: '한쪽 행렬을 고정하면 닫힌 해를 갖는 최소제곱 문제가 되어 병렬화가 쉽습니다. 대신 순서·시점 정보는 담지 못해 맥락 항으로 보완했습니다.',
          },
          {
            q: '맥락은 학습 모델이 아닌 YAML 규칙으로',
            why: '맥락 라벨이 붙은 학습 데이터가 없었고, 금융 도메인에서는 "왜 이 위젯이 떴는가"를 설명할 수 있어야 했습니다. 규칙은 기획자도 읽고 고칠 수 있습니다.',
            tradeoff: '규칙이 늘면 상호작용을 사람이 관리하기 어렵습니다. 다음 단계는 규칙을 피처로 넣은 랭킹 모델(LambdaMART 등)입니다.',
          },
          {
            q: '저장소를 인터페이스로 추상화하고 계약 테스트 공유',
            why: 'Redis 없이도 개발·테스트가 가능하도록 파일 구현과 Redis 구현이 같은 계약을 따르게 했습니다. 같은 테스트를 두 구현에 돌립니다.',
            tradeoff: '인터페이스가 하나 더 생기지만, 운영 저장소 교체가 서빙 로직에 영향을 주지 않습니다.',
          },
          {
            q: '응답에 항별 기여도(parts) 노출',
            why: '최종 점수만 주면 디버깅도, 기획 설명도 어렵습니다. 각 항의 기여도를 함께 반환해 "급여일이라 월급관리가 올라왔다"를 응답만 보고 확인할 수 있게 했습니다.',
          },
        ],
      },
      {
        id: 'rules',
        title: '맥락 규칙',
        type: 'table',
        mono: true,
        head: ['규칙', '조건', '부스팅 위젯 (가중치)'],
        rows: [
          ['payday', '25일 ±1일', '월급관리 1.0 · 적금 0.7 · 자동이체 0.6'],
          ['market_open', '평일 09:00–15:30', '주식현황 1.0 · 관심종목 0.8 · 지수 0.5'],
          ['card_due_soon', '카드 결제일(14일) D-3', '결제예정금액 1.0 · 카드실적 0.6'],
          ['roaming', '해외 IP / 로밍 플래그', '환전 1.0 · 해외송금 0.8 · 환율 0.6'],
          ['month_end', '25일 이후', '공과금 0.8 · 관리비 0.7'],
          ['business_morning', '평일 09:00–12:00', '사업자계좌 0.6 · 세금계산서 0.5'],
        ],
      },
      {
        id: 'evaluation',
        title: '평가 설계',
        type: 'list',
        intro: '측정 전에는 성능 숫자를 쓰지 않는다는 원칙으로, 평가 방법을 먼저 고정했습니다.',
        items: [
          '분할: 유저별 시간상 마지막 클릭 1건을 홀드아웃하는 leave-one-out (랜덤 분할은 미래 정보 누수)',
          '지표: Recall@10 · NDCG@10 · Coverage@10 — 정확도만 보면 인기 위젯만 추천하는 모델이 이김',
          '기준선: 인기순 → ALS 단독 → +Context → +Recency − Fatigue 순으로 항을 하나씩 더하는 ablation',
          '예상 리스크: Context를 넣으면 오프라인 Recall이 오히려 떨어질 수 있음 (홀드아웃 시점과 평가 시점의 맥락 불일치). 나오면 숨기지 않고 원인을 기록',
          '지연시간: 평균이 아닌 p50 / p95 / p99로 File·Redis 백엔드 비교',
        ],
      },
      {
        id: 'status',
        title: '현재 상태',
        type: 'table',
        head: ['영역', '상태'],
        rows: [
          ['설정 · 페르소나 기반 합성 로그 생성기 · 파일 저장소 · API 경로', '구현 완료'],
          ['테스트 명세 (config · datagen · context · scorer · store · evaluator)', '작성 완료'],
          ['ALS 학습 · 후보 사전계산 · 하이브리드 스코어러 · Redis 저장소', '구현 진행 중'],
          ['신규 유저 콜드 스타트 폴백', '미구현 (API가 501 반환)'],
        ],
        note: '공개 저장소의 README와 평가 문서에도 미완성 범위를 그대로 적어 두었습니다.',
      },
      {
        id: 'limits',
        title: '한계',
        type: 'list',
        items: [
          '합성 데이터: 페르소나로 심어 둔 구조를 모델이 되찾는 구성이라 계절성·이벤트·취향 변화가 없습니다.',
          '급여일을 25일로 고정했습니다. 실제로는 입금 내역에서 유저별로 추정해야 합니다.',
          '실제 CTR 개선은 A/B 테스트 없이는 알 수 없습니다.',
        ],
      },
      {
        id: 'code',
        title: '코드에서 볼 곳',
        type: 'code',
        base: 'https://github.com/CHOI-074/uzet-widget-recommender/blob/main/',
        items: [
          { path: 'config/scoring.yaml', d: '가중치·맥락 규칙 전부' },
          { path: 'src/store/candidate_store.py', d: '저장소 인터페이스' },
          { path: 'src/datagen/log_generator.py', d: '혼합 분포 기반 합성 로그' },
          { path: 'docs/evaluation.md', d: '평가 프로토콜' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ RAG
  {
    slug: 'rag',
    title: '금융 문서 RAG 챗봇',
    subtitle: 'PDF 근거 기반 질의응답 · 청크 사이즈 실험',
    category: 'LLM Application · RAG',
    image: null,
    color: 'bg-violet-50',
    accent: 'text-violet-700',
    status: { label: '평가셋 구축 중', tone: 'amber' },
    summary:
      '사업보고서·약관처럼 긴 금융 PDF에서 근거를 찾아 답하는 RAG 파이프라인을 처음부터 구현했습니다. 청크 크기 실험에서 "청크 크기만큼 PDF 전처리가 중요하다"는 결론을 얻었고, 지금은 정성 비교를 정량 평가로 바꾸는 중입니다.',
    tags: ['ko-sroberta-multitask', 'FAISS', 'Gemini 2.5 Flash', 'pypdf', 'Streamlit'],
    meta: [
      { k: '기간', v: '2026' },
      { k: '팀', v: '개인' },
      { k: '역할', v: '전 과정 설계·구현' },
      { k: '최적 설정', v: 'chunk 500 · overlap 50 · Top-3' },
    ],
    links: [{ label: 'RAG-lab 저장소', href: 'https://github.com/CHOI-074/RAG-lab' }],
    highlights: [
      { v: '3가지', k: 'chunk_size 비교 (300 / 500 / 800)' },
      { v: '500', k: '유일하게 핵심 본문을 1순위로 검색' },
      { v: '50문항', k: '구축 중인 평가셋 (Recall@5 · MRR)' },
    ],
    sections: [
      {
        id: 'architecture',
        title: '파이프라인',
        type: 'flow',
        lanes: [
          {
            name: '인덱싱',
            steps: [
              { t: 'PDF 업로드', d: 'pypdf 텍스트 추출' },
              { t: '청킹', d: '500자 · overlap 50' },
              { t: '임베딩', d: 'ko-sroberta-multitask' },
              { t: 'FAISS', d: 'IndexFlatL2' },
            ],
          },
          {
            name: '질의',
            steps: [
              { t: '질문', d: '같은 모델로 임베딩' },
              { t: '검색', d: 'L2 최근접 Top-3' },
              { t: '프롬프트', d: '[문서] 근거로만 답변' },
              { t: 'Gemini 2.5 Flash', d: '근거 없으면 거절' },
            ],
          },
        ],
      },
      {
        id: 'decisions',
        title: '핵심 의사결정',
        type: 'decisions',
        items: [
          {
            q: '한국어 문장 임베딩 모델 사용',
            why: '대상 문서가 한국어 금융 문서라 영어 위주 소형 모델 대신 한국어 STS로 학습된 jhgan/ko-sroberta-multitask를 사용했습니다.',
          },
          {
            q: '근사 검색 대신 IndexFlatL2',
            why: '문서 1건당 청크가 수십 개 수준이라 정확 검색 비용이 무시할 만합니다. 근사 인덱스(IVF·HNSW)를 쓰면 실험 결과에 근사 오차라는 변수가 하나 더 생깁니다.',
            tradeoff: '멀티 문서·대용량으로 가면 Qdrant 등 벡터 DB로 옮길 계획입니다.',
          },
          {
            q: '"문서에서 찾을 수 없습니다" 거절 지시',
            why: '금융 문서 질의에서는 그럴듯한 오답이 무응답보다 위험합니다. 컨텍스트 밖 지식으로 답하지 않도록 거절 문구를 프롬프트에 명시했습니다.',
          },
          {
            q: 'LLM은 Gemini 2.5 Flash 무료 티어',
            why: '실험을 반복할수록 호출 비용이 누적되는 개인 프로젝트라, 성능 대비 비용으로 선택했습니다. 생성 모듈을 분리해 두어 교체가 쉽습니다.',
          },
        ],
      },
      {
        id: 'experiment',
        title: '청크 사이즈 실험',
        type: 'table',
        mono: true,
        intro: '동일 PDF · 동일 질문 · overlap 50 고정, chunk_size만 바꿔 상위 3개 청크를 비교했습니다.',
        head: ['chunk_size', '청크 수', '평균 길이', '검색 결과'],
        rows: [
          ['300', '34', '294', '잘게 쪼개져 상위에 서로 다른 주제가 섞임'],
          ['500', '19', '487', '1순위에 핵심 본문이 잡힘'],
          ['800', '12', '742', '상위가 목차에 치우치고 노이즈 증가'],
        ],
        highlightRow: 1,
      },
      {
        id: 'insight',
        title: '예상 못 한 발견',
        type: 'prose',
        body: [
          '검색 결과에 목차 번호·전화번호·아이콘 텍스트 같은 레이아웃 노이즈가 계속 섞였습니다. 디자인된 발간물 PDF라 본문 외 텍스트가 그대로 추출된 것입니다. 청크 크기를 아무리 바꿔도 추출 텍스트 자체가 지저분하면 검색 품질에 한계가 있었습니다.',
          '결론: 청크 크기만큼 PDF 전처리(노이즈 제거)가 중요합니다.',
        ],
      },
      {
        id: 'honest',
        title: '이 실험의 한계',
        type: 'list',
        items: [
          '질문 1개에 대한 정성 비교입니다. 일반화된 결론이 아니라 "이 문서에서는 500이 나았다"입니다.',
          '청킹이 문자 수 기준 고정 윈도우라 문장 중간에서 잘립니다.',
          '그래서 다음 단계를 정량 평가로 잡았습니다.',
        ],
      },
      {
        id: 'troubleshoot',
        title: '트러블슈팅',
        type: 'troubleshoot',
        items: [
          {
            title: '환경 문제로 임베딩·생성 단계가 실행되지 않음',
            situation: '가상환경 충돌, Gemini SDK 패키지 이름 혼동(google-genai vs google-generativeai), 모델 로딩 시 Hugging Face 네트워크 접근 문제가 겹쳤습니다.',
            fix: '가상환경을 정리하고, 생성 모듈을 현행 google-genai SDK로 통일했으며, 모델을 받아 둔 뒤 HF_HUB_OFFLINE · TRANSFORMERS_OFFLINE 플래그로 오프라인 로딩하도록 바꿨습니다.',
            learn: '재현 가능한 실행 환경이 실험 결과의 전제 조건이라는 점.',
          },
        ],
      },
      {
        id: 'next',
        title: '다음 단계',
        type: 'list',
        items: [
          '50문항 평가셋 + Recall@5 · MRR 벤치마크',
          '라벨은 청크 ID가 아닌 정답 문자열(gold span) 매칭으로 — 청크 ID 라벨은 청크 크기를 바꾸면 무효가 되어 청크 비교 실험과 양립하지 않음',
          '문장·문단 경계 청킹, Hybrid Search(키워드+의미), Re-ranking',
          '임베딩 모델 파인튜닝(PyTorch), Qdrant + Docker 배포와 GitHub Actions CI/CD',
          '답변에 출처(페이지·청크) 표시',
        ],
      },
      {
        id: 'code',
        title: '코드에서 볼 곳',
        type: 'code',
        base: 'https://github.com/CHOI-074/RAG-lab/blob/main/',
        items: [
          { path: 'chunk_experiment.py', d: '청크 사이즈 비교 실험' },
          { path: 'embedder.py', d: '임베딩 · FAISS 인덱스 · 검색' },
          { path: 'generator.py', d: '근거 한정 프롬프트' },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 슬기로운 은퇴생활
  {
    slug: 'retire',
    title: '슬기로운 은퇴생활',
    subtitle: '수도권 은퇴자의 지방 정착·일자리 매칭 플랫폼',
    category: 'LLM Application · 해커톤',
    image: KDTimage,
    color: 'bg-teal-50',
    accent: 'text-teal-700',
    status: { label: 'KDT 해커톤 장관상', tone: 'gold' },
    badge: 'KDT 해커톤 장관상',
    summary:
      '성향 테스트를 바탕으로 정착 지역과 일자리를 추천하고, Perplexity(최신 정보 검색)와 ChatGPT(정리·리포트)를 잇는 이중 파이프라인으로 근거 있는 지역 리포트를 만드는 서비스입니다. 저는 일자리 탐색 흐름 프론트엔드를 맡았습니다.',
    tags: ['Vue.js', 'Kakao Map API', 'OpenAI', 'Perplexity', 'Spring'],
    meta: [
      { k: '기간', v: '2025.08.23 – 09.01 (해커톤)' },
      { k: '팀', v: '6인' },
      { k: '역할', v: '프론트엔드 — 일자리 탐색 흐름 · 공통 레이아웃' },
      { k: '성과', v: 'KDT 해커톤 장관상' },
    ],
    links: [{ label: '프론트엔드 저장소', href: 'https://github.com/kdt-hackathon-2025/Frontend' }],
    highlights: [
      { v: '장관상', k: 'KDT 해커톤' },
      { v: 'Kakao Map', k: '지역 지도 시각화 연동' },
      { v: '23 커밋', k: '프론트 저장소 기여 (merge 제외)' },
    ],
    sections: [
      {
        id: 'service',
        title: '서비스 흐름',
        type: 'flow',
        lanes: [
          {
            name: '추천 리포트',
            steps: [
              { t: '성향 테스트', d: '정착 선호 파악' },
              { t: 'Perplexity', d: '최신 지역 정보 검색' },
              { t: 'ChatGPT', d: '정리 · 맞춤 리포트' },
              { t: '추천', d: '정착 지역 · 일자리' },
            ],
          },
        ],
        caption: '검색 단계와 생성 단계를 분리해, 생성 모델이 학습 시점 이후의 지역 정보를 지어내지 않도록 했습니다. (팀 설계)',
      },
      {
        id: 'role',
        title: '내가 한 일',
        type: 'list',
        items: [
          '프론트엔드 초기 프레임워크 구성, 전역 화면 크기·하단 내비게이션 등 공통 레이아웃',
          '일자리 탐색 → 지역별 일자리 → 일자리 상세로 이어지는 화면 흐름 구현',
          '연봉 범위 슬라이더 필터, 강원 지역 지도 컴포넌트(Kakao Map) 연동',
          '시연 직전 진입 시 원주 지역 기본 선택, 지도 비율·폰트 등 마감 품질 수정',
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ FINZ
  {
    slug: 'finz',
    title: 'FINZ',
    subtitle: 'MZ세대 금융 입문 · 모의투자 플랫폼',
    category: 'FinTech · Personalization',
    image: finzImage,
    color: 'bg-sky-50',
    accent: 'text-sky-700',
    status: { label: '완료', tone: 'gray' },
    summary:
      '투자 성향 진단 결과로 학습 콘텐츠와 종목 추천을 개인화하는 금융 입문 플랫폼입니다. PM으로 기획을 주도하면서 인증·세션, 투자 성향 진단, 성향별 콘텐츠 추천, 챗봇 화면 연동을 직접 구현했습니다.',
    tags: ['Spring Legacy', 'MyBatis', 'MySQL (RDS)', 'Vue.js', 'Pinia', 'OpenAI API'],
    meta: [
      { k: '기간', v: '2025.07 – 08' },
      { k: '팀', v: '8인 (KB IT\'s Your Life 6기)' },
      { k: '역할', v: 'PM · 인증 / 성향 진단 / 콘텐츠 추천' },
      { k: '기여', v: '백엔드 41 · 프론트 54 커밋 (merge 제외)' },
    ],
    links: [
      { label: '백엔드 저장소', href: 'https://github.com/KB-PROJECT-FINZ/FINZ-Back-End-' },
      { label: '프론트엔드 저장소', href: 'https://github.com/KB-PROJECT-FINZ/FINZ-Front-End-' },
    ],
    highlights: [
      { v: '16유형', k: '2지선다 투자 성향 분류' },
      { v: '2개 저장소', k: '백엔드·프론트 양쪽 구현' },
      { v: 'PM', k: '기획 · 서비스 설계 주도' },
    ],
    sections: [
      {
        id: 'flow',
        title: '개인화 흐름',
        type: 'flow',
        lanes: [
          {
            name: '사용자 여정',
            steps: [
              { t: '회원가입', d: '이메일 인증' },
              { t: '성향 진단', d: '2지선다 → 16유형' },
              { t: '유형 저장', d: 'user.risk_type' },
              { t: '콘텐츠 추천', d: '성향별 학습 콘텐츠' },
              { t: '퀴즈 · 모의투자', d: '크레딧 · 챗봇' },
            ],
          },
        ],
        caption: '성향 유형 하나가 콘텐츠 · 종목 추천 · 챗봇 · 성향별 랭킹까지 이어지는 개인화의 공통 키입니다.',
      },
      {
        id: 'role',
        title: '내가 구현한 것',
        type: 'table',
        head: ['영역', '백엔드 (Spring · MyBatis)', '프론트엔드 (Vue)'],
        rows: [
          ['인증', 'AuthController · 이메일 인증(MailService) · 회원가입 검증', '로그인 · 회원가입 · 계정 찾기 · 세션 기반 로그인 상태 유지'],
          ['성향 진단', 'risk_type ↔ investment_types 매핑 · 유형명 조회 API', '진단 · 결과 · 재검사 페이지, 마이페이지 연동'],
          ['콘텐츠 추천', '학습 콘텐츠 DB 연동 · 성향별 조회', '성향별 추천 콘텐츠 페이지 · 홈 오늘의 퀴즈'],
          ['챗봇', '—', 'ChatBox 화면 · 백엔드 챗봇 API 연동'],
        ],
      },
      {
        id: 'pm',
        title: 'PM으로서',
        type: 'list',
        items: [
          '대학생·취준생을 1차 타깃으로 잡고 "학습 → 퀴즈 → 모의투자" 순으로 진입 장벽을 낮추는 흐름을 설계',
          '인증 · 성향 진단 · 콘텐츠 추천처럼 여러 화면이 공유하는 사용자 상태를 맡아 백엔드와 프론트 양쪽을 연결',
        ],
      },
      {
        id: 'constraint',
        title: '발견한 제약',
        type: 'troubleshoot',
        items: [
          {
            title: '한국투자증권 Open API의 계정당 단일 세션',
            situation: '계정 1개당 세션이 1개만 허용되어, 여러 사용자가 같은 계정으로 시세를 호출하면 먼저 접속한 쪽이 끊기고 동시 접속 시세 수신이 불가능했습니다.',
            cause: '외부 API의 인증·세션 정책이 다중 사용자 서비스 구조와 맞지 않음.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ Metro
  {
    slug: 'metro',
    title: '지하철 역 최적 입지 분석',
    subtitle: '공공 데이터 · GIS · AHP 기반 입지 선정',
    category: 'Data Analysis · GIS',
    image: subwayImage,
    color: 'bg-indigo-50',
    accent: 'text-indigo-700',
    status: { label: '완료', tone: 'gray' },
    summary:
      '인구·상권·교통 공공 데이터와 GIS로 신규 지하철역 후보지를 평가했습니다. AHP로 기준별 가중치를 정해 정량적 입지 점수를 만들고 지도로 시각화했습니다.',
    tags: ['Python', 'JMP', 'Geopandas', 'QGIS'],
    meta: [{ k: '기간', v: '2023' }],
    sections: [],
  },
];

export const findProject = (slug) => PROJECTS.find((p) => p.slug === slug);
