import React from 'react';

interface CourseCardProps {
  title: string;
  code: string;
  icon: React.ReactNode;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, code, icon, color }) => (
  <div className={`${color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group cursor-pointer`}>
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
    
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-all">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 leading-tight">{title}</h3>
        <p className="text-teal-100/80 text-xs font-medium tracking-wide">{code}</p>
      </div>
    </div>
    
    <div className="mt-6 flex items-center gap-2 text-xs font-medium text-teal-100/60 group-hover:text-teal-50 transition-colors">
      <span>View Course</span>
      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  </div>
);

export default CourseCard;
