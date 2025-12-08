import React from 'react';
import { Briefcase, Command, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE_DATA, PROFILE_PROJECTS, SKILLS } from '../data/mockData';


// handleScrollToProject 함수를 props로 받습니다.
const ProfileView = ({ handleScrollToProject }) => (
  // 메인 컨테이너: 최대 너비 설정 및 중앙 정렬, 상하 패딩
  <div className="max-w-7xl mx-auto px-6 h-full py-12">
    {/* 프로필 카드 배경: 흐림 효과(backdrop-blur) 및 둥근 모서리, 경계선 적용 */}
    <div className="bg-gray-50/80 backdrop-blur rounded-3xl p-10 md:p-16 border border-gray-100 h-full flex flex-col lg:flex-row gap-12">
      
      {/* 1. 왼쪽 영역: 기본 정보 & 소개 (큰 화면에서 1/3 너비) */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
        
        {/* 프로필 이미지 전용 컨테이너 (mx-auto를 사용하여 항상 중앙 정렬) */}
        <div className="mb-6 mx-auto">
          <img 
            src={PROFILE_DATA.profileImage} 
            alt={PROFILE_DATA.name}
            className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        
        {/* 이름 및 직함 */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{PROFILE_DATA.name}</h2>
        <p className="text-xl font-medium text-blue-600 mb-6">{PROFILE_DATA.jobTitle}</p>
        
        {/* 연락처 정보 리스트 */}
        <div className="text-gray-600 space-y-3 mb-10 text-sm w-full">
          {/* 이메일 (lg:justify-start로 큰 화면에서는 왼쪽 정렬 복원) */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <Mail size={16} className="text-gray-400" />
            <span>{PROFILE_DATA.email}</span>
          </div>
          {/* 전화번호 */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <Phone size={16} className="text-gray-400" />
            <span>{PROFILE_DATA.phone}</span>
          </div>
          {/* 위치 */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <MapPin size={16} className="text-gray-400" />
            <span>{PROFILE_DATA.location}</span>
          </div>
        </div>

        {/* 자기 소개 (구분선 위쪽) */}
        <p className="text-gray-700 leading-relaxed text-md border-t pt-8 border-gray-200">
          {PROFILE_DATA.description}
        </p>
      </div>

      {/* 2. 오른쪽 영역: 스킬, 수상 이력 및 프로젝트 리스트 (큰 화면에서 2/3 너비) */}
      <div className="w-full lg:w-2/3 flex flex-col gap-12">
        
        {/* 스킬 섹션 */}
        <div>
          {/* 제목 */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase size={20} className="text-blue-600" />
            Technical Skills
          </h3>
          {/* 스킬 리스트 매핑 (SKILLS 데이터 사용) */}
          <div className="space-y-4">
            {SKILLS.map((skill, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                {/* 스킬 영역 이름 (Frontend, Backend 등) */}
                <span className="font-semibold text-gray-600 w-32 shrink-0">{skill.area}</span>
                {/* 개별 스킬 태그 */}
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

        {/* 수상 및 주요 프로젝트 섹션 */}
        <div>
          {/* 제목 */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Command size={20} className="text-blue-600" />
            Achievements & Key Projects
          </h3>
          {/* 프로젝트 리스트 매핑 (PROFILE_PROJECTS 데이터 사용) */}
          <ul className="space-y-6">
            {PROFILE_PROJECTS.map((proj) => (
              <li 
                key={proj.id} 
                className="border-b border-gray-100 pb-4 last:border-b-0 cursor-pointer hover:bg-gray-100/50 transition-colors p-2 -m-2 rounded-lg"
                onClick={() => handleScrollToProject(proj.id)} // 클릭 시 스크롤 함수 호출
              >
                {/* 제목과 연도 */}
                <div className="flex justify-between items-start">
                  {/* 제목과 뱃지를 flex로 묶어 같은 라인에 표시 */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-lg font-semibold text-gray-800">{proj.title}</span>
                    {/* proj.badge가 있을 경우 뱃지를 렌더링합니다. */}
                    {proj.badge && (
                      <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap 
                        ${proj.badge === '장관상 수상작' ? 'bg-yellow-500 text-white' : 'bg-blue-100 text-blue-700'}`}>
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-mono text-gray-500">{proj.year}</span>
                </div>
                {/* 상세 설명 */}
                <p className="text-sm text-gray-600 mt-1">{proj.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export default ProfileView;