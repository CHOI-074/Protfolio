import React from 'react';
import { ArrowRight, ArrowUpRight, Award, Github, Mail, MapPin, Activity, PenLine } from 'lucide-react';
import { PROFILE_DATA, PRINCIPLES, NOW, SKILLS, CERTIFICATIONS } from '../data/mockData';
import { PROJECTS } from '../data/projects';
import { StatusPill } from './ui';

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mb-10">
    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{eyebrow}</div>
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
  </div>
);

const ProjectCard = ({ p, idx }) => {
  const hasStudy = p.sections.length > 0;
  const Wrapper = hasStudy ? 'a' : 'div';
  return (
    <Wrapper
      {...(hasStudy ? { href: `#/projects/${p.slug}` } : {})}
      className={`group flex flex-col md:flex-row gap-8 md:gap-12 items-center ${idx % 2 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2">
        <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-xl ${p.color} transition-transform duration-500 ${hasStudy ? 'group-hover:scale-[1.02]' : ''}`}>
          {p.image ? (
            <img src={p.image} alt={`${p.title} 대표 화면`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col justify-center gap-3 p-8 font-mono text-xs text-violet-900/70">
              <div className="text-sm font-sans font-bold text-violet-950 mb-2">{p.title}</div>
              {['PDF → pypdf', 'chunk 500 / overlap 50', 'ko-sroberta → FAISS', 'Top-3 → Gemini 2.5 Flash'].map((t) => (
                <div key={t} className="bg-white/70 rounded-md px-3 py-2 w-fit">{t}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-mono text-sm text-gray-400">{String(idx + 1).padStart(2, '0')}</span>
          <span className={`text-sm font-semibold ${p.accent}`}>{p.category}</span>
          <StatusPill status={p.status} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h3>
        <p className="text-gray-800 font-medium mb-4">{p.subtitle}</p>
        <p className="text-gray-600 leading-relaxed mb-5">{p.summary}</p>
        {p.meta?.length > 1 && (
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-5">
            {p.meta.slice(1, 3).map((m) => (
              <div key={m.k}><dt className="text-gray-400 inline">{m.k} </dt><dd className="text-gray-700 inline">{m.v}</dd></div>
            ))}
          </dl>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((t) => <span key={t} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md">{t}</span>)}
        </div>
        {hasStudy && (
          <span className="inline-flex items-center gap-2 text-sm font-bold text-black border-b border-black pb-0.5">
            케이스 스터디 읽기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </div>
    </Wrapper>
  );
};

const Home = () => (
  <>
    {/* Intro */}
    <section id="top" className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_280px] gap-12 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-4">{PROFILE_DATA.jobTitle} · {PROFILE_DATA.focus}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {PROFILE_DATA.name}<span className="text-gray-300">.</span><br />
            <span className="text-2xl md:text-4xl font-bold text-gray-600">{PROFILE_DATA.headline}</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">{PROFILE_DATA.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#/projects" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-5 py-3 rounded-full hover:bg-black">
              프로젝트 보기 <ArrowRight size={16} />
            </a>
            <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-300 font-semibold px-5 py-3 rounded-full hover:border-gray-900">
              <Github size={16} /> GitHub
            </a>
            <a href={PROFILE_DATA.velog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-300 font-semibold px-5 py-3 rounded-full hover:border-gray-900">
              <PenLine size={16} /> 기술 블로그
            </a>
            <a href={`mailto:${PROFILE_DATA.email}`} className="inline-flex items-center gap-2 border border-gray-300 font-semibold px-5 py-3 rounded-full hover:border-gray-900">
              <Mail size={16} /> 연락하기
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={PROFILE_DATA.profileImage} alt={PROFILE_DATA.name} className="w-full aspect-[4/5] object-cover rounded-3xl shadow-xl" />
          <p className="flex items-center gap-2 text-sm text-gray-500 mt-4"><MapPin size={14} /> {PROFILE_DATA.location}</p>
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="How I work" title="일하는 방식" />
        <div className="grid md:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col">
              <span className="font-mono text-sm text-gray-400 mb-3">0{i + 1}</span>
              <h3 className="font-bold text-lg text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-1">{p.body}</p>
              <a href={p.ref.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
                근거: {p.ref.label} <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="Projects" title="프로젝트" />
        <div className="space-y-24">
          {PROJECTS.map((p, i) => <ProjectCard key={p.slug} p={p} idx={i} />)}
        </div>
      </div>
    </section>

    {/* Now + Skills + Awards */}
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        <div>
          <SectionTitle eyebrow="Now" title="지금 하는 일" />
          <ul className="space-y-4">
            {NOW.map((n) => (
              <li key={n.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 font-semibold text-gray-900"><Activity size={16} className="text-amber-500" />{n.title}</div>
                <p className="text-sm text-gray-600 mt-2">{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle eyebrow="Skills" title="기술" />
          <div className="space-y-5">
            {SKILLS.map((s) => (
              <div key={s.area}>
                <div className="text-sm font-semibold text-gray-500 mb-2">{s.area}</div>
                <div className="flex flex-wrap gap-2">
                  {s.list.map((x) => <span key={x} className="px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-800 rounded-full">{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="Awards" title="수상 · 자격" />
          <ul className="space-y-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c.title} className="flex items-start justify-between gap-4 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <span className="flex gap-3">
                  <Award size={16} className="text-gray-400 mt-0.5 shrink-0" />
                  <span><span className="block text-sm font-semibold text-gray-900">{c.title}</span><span className="block text-xs text-gray-500">{c.sub}</span></span>
                </span>
                {c.year && <span className="font-mono text-xs text-gray-400">{c.year}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default Home;
