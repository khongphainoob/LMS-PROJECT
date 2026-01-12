import React from 'react';
import TeacherLayout from '../../layouts/TeacherLayout';
import GradingHeader from '../../components/grading/GradingHeader';
import GradingSection from '../../components/grading/GradingSection';
import type { GradingOptions, SectionPreset } from '../../components/grading/GradingSection';

const classOptions = ['10A1 - Toán', '11A3 - Vật lý', '12A2 - Hóa học'];
const sessionOptions = ['Phiên sáng', 'Phiên chiều', 'Tối muộn', 'Tạo phiên mới'];
const studentOptions = ['Nguyễn Minh Anh', 'Trần Hải Đăng', 'Lê Thu Trang', 'Phạm Quang Huy'];

const gradingOptions: GradingOptions = {
  classes: classOptions,
  sessions: sessionOptions,
  students: studentOptions
};

const presets: SectionPreset[] = [
  { title: 'Chấm bài tự luận', subtitle: 'Theo barem chi tiết và ảnh bài làm', accent: 'from-teal-500 to-emerald-500', badge: 'Tự luận' },
  { title: 'Chấm bài trắc nghiệm', subtitle: 'Quét ảnh đáp án, chấm theo barem chung', accent: 'from-indigo-500 to-sky-500', badge: 'Trắc nghiệm' }
];

const GradingPage: React.FC = () => (
  <TeacherLayout title="Chấm bài" userName="Teacher">
    <div className="space-y-8">
      <GradingHeader />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <GradingSection preset={presets[0]} options={gradingOptions} />
        <GradingSection preset={presets[1]} options={gradingOptions} />
      </div>
    </div>
  </TeacherLayout>
);

export default GradingPage;
