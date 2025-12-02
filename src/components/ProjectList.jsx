// ==========================================
// [File: src/components/ProjectList.jsx]
// ==========================================
import React from 'react';
import { Layout, Github } from 'lucide-react';
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
              <div className="w-full md:w-3/5">
                <div className={`w-full aspect-[16/10] rounded-2xl overflow-hidden relative ${project.color} transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Layout size={64} className="text-black/5 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors cursor-pointer" />
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