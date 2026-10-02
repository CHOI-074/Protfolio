import React from 'react';
import { Award, Briefcase, Command, Github, Mail, MapPin } from 'lucide-react';
import { CERTIFICATIONS, PROFILE_DATA, PROFILE_PROJECTS, SKILLS } from '../data/mockData';

const ProfileView = ({ handleScrollToProject }) => (
  <div className="max-w-7xl mx-auto px-6 h-full py-12">
    <div className="bg-gray-50/80 backdrop-blur rounded-3xl p-8 md:p-16 border border-gray-100 h-full flex flex-col lg:flex-row gap-12">

      {/* 왼쪽: 기본 정보 & 소개 */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="mb-6 mx-auto">
          <img
            src={PROFILE_DATA.profileImage}
            alt={PROFILE_DATA.name}
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{PROFILE_DATA.name}</h1>
        <p className="text-xl font-semibold text-blue-600">{PROFILE_DATA.jobTitle}</p>
        <p className="text-sm font-medium text-gray-500 mb-6">{PROFILE_DATA.focus}</p>

        <div className="text-gray-600 space-y-3 mb-10 text-sm w-full">
          <a href={`mailto:${PROFILE_DATA.email}`} className="flex items-center gap-3 justify-center lg:justify-start hover:text-black">
            <Mail size={16} className="text-gray-400" />
            <span>{PROFILE_DATA.email}</span>
          </a>
          <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 justify-center lg:justify-start hover:text-black">
            <Github size={16} className="text-gray-400" />
            <span>github.com/CHOI-074</span>
          </a>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <MapPin size={16} className="text-gray-400" />
            <span>{PROFILE_DATA.location}</span>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed border-t pt-8 border-gray-200">
          {PROFILE_DATA.description}
        </p>
      </div>

      {/* 오른쪽: 스킬, 수상·자격, 주요 프로젝트 */}
      <div className="w-full lg:w-2/3 flex flex-col gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase size={20} className="text-blue-600" />
            Technical Skills
          </h3>
          <div className="space-y-4">
            {SKILLS.map((skill) => (
              <div key={skill.area} className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-600 w-32 shrink-0">{skill.area}</span>
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {skill.list.map((item) => (
                    <span key={item} className="px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-800 rounded-full shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award size={20} className="text-blue-600" />
            Awards & Certifications
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c.title} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm">
                <span className="font-medium text-gray-800">{c.title}</span>
                {c.year && <span className="font-mono text-gray-400">{c.year}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Command size={20} className="text-blue-600" />
            Key Projects
          </h3>
          <ul className="space-y-2">
            {PROFILE_PROJECTS.map((proj) => (
              <li key={proj.id}>
                <button
                  type="button"
                  onClick={() => handleScrollToProject(proj.id)}
                  className="w-full text-left border-b border-gray-100 p-3 rounded-lg hover:bg-gray-100/60 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-lg font-semibold text-gray-800">{proj.title}</span>
                      {proj.badge && (
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                            proj.badge.includes('장관상') ? 'bg-yellow-500 text-white' : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-mono text-gray-500">{proj.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{proj.description}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileView;
