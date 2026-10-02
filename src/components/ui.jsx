// 공통 UI 조각: 상태 배지, 파이프라인 다이어그램
import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const TONES = {
  amber: 'bg-amber-50 text-amber-700 ring-amber-200',
  gold: 'bg-yellow-400 text-yellow-950 ring-yellow-500',
  gray: 'bg-gray-100 text-gray-600 ring-gray-200',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
};

export const StatusPill = ({ status }) =>
  status ? (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ${TONES[status.tone] || TONES.gray}`}>
      {status.tone === 'amber' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />}
      {status.label}
    </span>
  ) : null;

// lanes: [{ name, steps: [{t, d}] }]
export const Flow = ({ lanes }) => (
  <div className="space-y-6">
    {lanes.map((lane) => (
      <div key={lane.name}>
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{lane.name}</div>
        <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
          {lane.steps.map((s, i) => (
            <React.Fragment key={s.t}>
              <li className="flex-1 min-w-0 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                <div className="font-semibold text-gray-900 text-sm">{s.t}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono break-words">{s.d}</div>
              </li>
              {i < lane.steps.length - 1 && (
                <li aria-hidden className="flex items-center justify-center text-gray-300 shrink-0">
                  <ArrowRight size={16} className="hidden md:block" />
                  <ArrowDown size={16} className="md:hidden" />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>
    ))}
  </div>
);
