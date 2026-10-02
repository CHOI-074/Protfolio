import React from 'react';
import { Github, FileText } from 'lucide-react';
import { ALL_PROJECTS } from '../data/mockData';

const pad = (n) => String(n).padStart(2, '0');

const ProjectList = ({ projectRefs }) => {
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-20 border-b border-gray-100 pb-6">
          <h3 className="text-3xl font-bold text-gray-900">All Projects</h3>
          <span className="font-mono text-sm text-gray-400">Total {ALL_PROJECTS.length}</span>
        </div>

        <div className="space-y-32">
          {ALL_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className={`flex flex-col md:flex-row gap-16 items-center group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* 이미지 영역 */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center p-0 md:p-12">
                <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 border border-gray-100/50">
                  {project.image ? (
                    <>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </>
                  ) : (
                    <div className={`w-full h-full ${project.color} flex flex-col items-center justify-center gap-4 text-gray-500`}>
                      <FileText size={48} strokeWidth={1.5} />
                      <span className="font-semibold text-gray-700">{project.title}</span>
                      <span className="font-mono text-xs">{project.category}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 텍스트 영역 */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="font-mono text-sm text-gray-400 mb-4">
                  {pad(idx + 1)} / {pad(ALL_PROJECTS.length)} · {project.category}
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-black border-b border-black pb-0.5 w-fit hover:text-gray-600 hover:border-gray-600 transition-colors"
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
