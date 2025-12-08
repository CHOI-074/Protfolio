// ==========================================
// [File: src/components/ProjectList.jsx]
// ==========================================
import React from 'react';
import { Layout, Github, Monitor } from 'lucide-react';
import { ALL_PROJECTS } from '../data/mockData';

const ProjectList = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-20 border-b border-gray-100 pb-6">
          <h3 className="text-3xl font-bold text-gray-900">All Projects</h3>
          <span className="font-mono text-sm text-gray-400">Total {ALL_PROJECTS.length}</span>
        </div>

        <div className="space-y-32">
          {ALL_PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`flex flex-col md:flex-row gap-16 items-center group ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 md:p-12">
                  <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700 border border-gray-100/50">
                    {project.image ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                      </>
                    ) : (
                      // 이미지가 없을 때의 대체 화면
                      <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-4 text-gray-300">
                        <Monitor size={48} />
                        <span className="font-mono text-sm">UI Preview</span>
                      </div>
                    )}
                  </div>
                </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="font-mono text-sm text-gray-400 mb-4">0{idx + 1} / 0{ALL_PROJECTS.length}</div>
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
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex gap-6">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                    View Project
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-black transition-colors">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;