import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github, FileCode2, Lightbulb, Wrench, Scale } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Flow, StatusPill } from './ui';

const H = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-24 text-2xl font-bold text-gray-900 mb-6">{children}</h2>
);

const Table = ({ s }) => (
  <>
    {s.intro && <p className="text-gray-600 mb-4">{s.intro}</p>}
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[560px] text-sm text-left">
        <thead className="bg-gray-50 text-gray-500">
          <tr>{s.head.map((h) => <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {s.rows.map((r, i) => (
            <tr key={i} className={s.highlightRow === i ? 'bg-blue-50/60 font-medium' : ''}>
              {r.map((c, j) => (
                <td key={j} className={`px-4 py-3 align-top ${j === 0 ? (s.mono ? 'font-mono text-gray-900 whitespace-nowrap' : 'font-medium text-gray-900') : 'text-gray-700'}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {s.note && <p className="text-sm text-gray-500 mt-3">{s.note}</p>}
  </>
);

const Section = ({ s, base }) => {
  switch (s.type) {
    case 'prose':
      return s.body.map((p, i) => <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">{p}</p>);
    case 'table':
      return <Table s={s} />;
    case 'formula':
      return (
        <>
          <pre className="bg-gray-900 text-gray-100 rounded-xl p-5 text-sm overflow-x-auto"><code>{s.code}</code></pre>
          {s.note && <p className="text-sm text-gray-500 mt-3 leading-relaxed">{s.note}</p>}
        </>
      );
    case 'flow':
      return (
        <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100">
          <Flow lanes={s.lanes} />
          {s.caption && <p className="text-sm text-gray-600 mt-6 leading-relaxed">{s.caption}</p>}
        </div>
      );
    case 'list':
      return (
        <>
          {s.intro && <p className="text-gray-600 mb-4">{s.intro}</p>}
          <ul className="space-y-3">
            {s.items.map((it, i) => (
              <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </>
      );
    case 'decisions':
      return (
        <div className="grid gap-4">
          {s.items.map((d) => (
            <article key={d.q} className="border border-gray-200 rounded-2xl p-6 bg-white">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <Lightbulb size={18} className="text-blue-600 mt-0.5 shrink-0" />{d.q}
              </h3>
              <p className="text-gray-700 leading-relaxed">{d.why}</p>
              {d.tradeoff && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed flex gap-2">
                  <Scale size={16} className="mt-0.5 shrink-0" /><span><b className="text-gray-700">트레이드오프 </b>{d.tradeoff}</span>
                </p>
              )}
            </article>
          ))}
        </div>
      );
    case 'troubleshoot':
      return s.items.map((t) => (
        <article key={t.title} className="border border-gray-200 rounded-2xl overflow-hidden">
          <h3 className="font-bold text-gray-900 px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
            <Wrench size={16} className="text-gray-500" />{t.title}
          </h3>
          <dl className="divide-y divide-gray-100">
            {[['상황', t.situation], ['원인', t.cause], ['해결', t.fix], ['배운 점', t.learn]].filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="grid sm:grid-cols-[88px_1fr] gap-1 sm:gap-4 px-6 py-4">
                <dt className="text-sm font-semibold text-gray-500">{k}</dt>
                <dd className="text-gray-700 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </article>
      ));
    case 'code':
      return (
        <ul className="grid sm:grid-cols-2 gap-3">
          {s.items.map((c) => (
            <li key={c.path}>
              <a href={(s.base || base) + c.path} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors group">
                <FileCode2 size={18} className="text-gray-400 group-hover:text-gray-900 mt-0.5 shrink-0" />
                <span className="min-w-0">
                  <span className="block font-mono text-sm text-gray-900 break-all">{c.path}</span>
                  <span className="block text-sm text-gray-500">{c.d}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const CaseStudy = ({ project }) => {
  const withStudy = PROJECTS.filter((p) => p.sections.length);
  const idx = withStudy.findIndex((p) => p.slug === project.slug);
  const next = withStudy[(idx + 1) % withStudy.length];

  return (
    <article className="pt-24 pb-24">
      {/* Header */}
      <header className={`${project.color} border-b border-gray-100`}>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <a href="#/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8">
            <ArrowLeft size={16} /> 전체 프로젝트
          </a>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-sm font-bold ${project.accent}`}>{project.category}</span>
            <StatusPill status={project.status} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">{project.title}</h1>
          <p className="text-xl text-gray-700 font-medium mb-6">{project.subtitle}</p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">{project.summary}</p>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {project.meta.map((m) => (
              <div key={m.k} className="bg-white/70 rounded-xl p-4 border border-white">
                <dt className="text-xs font-semibold text-gray-400 mb-1">{m.k}</dt>
                <dd className="text-sm font-medium text-gray-900">{m.v}</dd>
              </div>
            ))}
          </dl>

          {project.links?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-black">
                  <Github size={16} /> {l.label} <ExternalLink size={14} className="opacity-60" />
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Highlights */}
      {project.highlights && (
        <div className="max-w-6xl mx-auto px-6 -mt-px">
          <div className="grid sm:grid-cols-3 border-x border-b border-gray-100 rounded-b-2xl bg-white">
            {project.highlights.map((h) => (
              <div key={h.k} className="p-6 border-b sm:border-b-0 sm:border-r last:border-0 border-gray-100">
                <div className="text-2xl font-extrabold text-gray-900">{h.v}</div>
                <div className="text-sm text-gray-500 mt-1">{h.k}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Body + TOC */}
      <div className="max-w-6xl mx-auto px-6 mt-16 lg:grid lg:grid-cols-[180px_1fr] lg:gap-16">
        <nav aria-label="목차" className="hidden lg:block">
          <ul className="sticky top-28 space-y-2 text-sm">
            {project.sections.map((s) => (
              <li key={s.id}><a href={`#/projects/${project.slug}/${s.id}`} className="text-gray-500 hover:text-black">{s.title}</a></li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0 space-y-16">
          {project.sections.map((s) => (
            <section key={s.id}>
              <H id={s.id}>{s.title}</H>
              <Section s={s} />
            </section>
          ))}
        </div>
      </div>

      {/* Next */}
      {next && next.slug !== project.slug && (
        <div className="max-w-6xl mx-auto px-6 mt-24">
          <a href={`#/projects/${next.slug}`} className="flex items-center justify-between gap-6 border-t border-gray-200 pt-8 group">
            <span>
              <span className="block text-sm text-gray-400 mb-1">다음 케이스 스터디</span>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">{next.title}</span>
            </span>
            <ArrowRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </article>
  );
};

export default CaseStudy;
