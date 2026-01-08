import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Layers, BookOpenCheck, ClipboardList, CheckSquare } from 'lucide-react';
import TeacherLayout from '../../layouts/TeacherLayout';

const MyCourses: React.FC = () => {
  const navigate = useNavigate();

  const classControls = [
    { name: 'Lớp 10A1', subject: 'Toán', current: 28, max: 35, progress: 78 },
    { name: 'Lớp 11A3', subject: 'Lý', current: 26, max: 32, progress: 64 },
    { name: 'Lớp 12A2', subject: 'Hóa', current: 30, max: 30, progress: 82 }
  ];

  const goClass = (cls: string, section?: string) => {
    const base = `/teacher/classes/${encodeURIComponent(cls)}`;
    navigate(section ? `${base}/${section}` : base);
  };

  return (
    <TeacherLayout title="Lớp học">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-teal-700 uppercase tracking-widest">Quản lý theo lớp</p>
          <p className="text-lg text-gray-600">Tạo lớp, phân công bài học, bài tập và chấm bài cho từng lớp.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate('/teacher/classes/create')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-500 transition"
          >
            <PlusCircle size={18} />
            Tạo lớp mới
          </button>
          <button
            onClick={() => navigate('/teacher/classes')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-teal-700 font-semibold border border-teal-200 hover:border-teal-400 hover:shadow-sm transition"
          >
            <Layers size={18} />
            Xem tất cả lớp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {classControls.map(cls => (
          <div key={cls.name} className="p-5 bg-white rounded-2xl shadow-sm border border-teal-50 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-bold text-teal-800">{cls.name}</p>
                <p className="text-xs text-teal-500">{cls.subject} · {cls.current}/{cls.max} học sinh</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-700">{cls.progress}%</span>
            </div>
            <div className="w-full h-2 mb-4 bg-teal-50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-400 to-teal-400" style={{ width: `${cls.progress}%` }} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
              <button
                onClick={() => goClass(cls.name, 'lessons')}
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-teal-50 text-teal-700 hover:bg-teal-100 transition"
              >
                <BookOpenCheck size={16} />
                Bài học
              </button>
              <button
                onClick={() => goClass(cls.name, 'assignments')}
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-100 transition"
              >
                <ClipboardList size={16} />
                Bài tập
              </button>
              <button
                onClick={() => goClass(cls.name, 'grading')}
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
              >
                <CheckSquare size={16} />
                Chấm bài
              </button>
            </div>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
};

export default MyCourses;
