import React from 'react';
import { BookOpen, Clock, MoreVertical } from 'lucide-react';

interface CourseProgressCardProps {
  title: string;
  code: string;
  hoursLeft: number;
  progress: number;
  color?: 'teal' | 'orange' | 'blue' | 'rose';
}

const CourseProgressCard: React.FC<CourseProgressCardProps> = ({ 
  title, 
  code, 
  hoursLeft, 
  progress, 
  color = 'teal' 
}) => {
  
  const colorClasses = {
    teal: {
      bg: 'bg-teal-100',
      text: 'text-teal-600',
      bar: 'bg-teal-500',
      progressText: 'text-teal-600'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      bar: 'bg-orange-500',
      progressText: 'text-orange-600'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      bar: 'bg-blue-500',
      progressText: 'text-blue-600'
    },
    rose: {
      bg: 'bg-rose-100',
      text: 'text-rose-600',
      bar: 'bg-rose-500',
      progressText: 'text-rose-600'
    }
  };

  const currentTheme = colorClasses[color] || colorClasses.teal;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 ${currentTheme.bg} ${currentTheme.text} rounded-xl`}>
          <BookOpen size={24} />
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{code}</p>
      
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Clock size={16} />
        <span>{hoursLeft} Hours Left</span>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
        <div 
          className={`${currentTheme.bar} h-2 rounded-full transition-all duration-500`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-gray-500">Progress</span>
        <span className={currentTheme.progressText}>{progress}%</span>
      </div>
    </div>
  );
};

export default CourseProgressCard;
