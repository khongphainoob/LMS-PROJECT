import React from 'react';
import { Users, Layers, CheckCircle2, Sparkles } from 'lucide-react';

export const GradingHeader: React.FC = () => (
  <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 text-white flex items-center justify-center shadow-lg">
        <Sparkles size={28} />
      </div>
      <div>
        <p className="text-sm font-semibold text-teal-700">Chấm bài theo lớp</p>
        <h2 className="text-2xl font-bold text-gray-900">2 phiên: Tự luận & Trắc nghiệm</h2>
        <p className="text-sm text-gray-600">Chọn lớp, phiên chấm, học sinh, tải barem và ảnh. Mỗi lần bấm chấm bài sẽ reset ảnh đã tải lên.</p>
      </div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
      <InfoPill icon={<Users size={16} />} label="Theo lớp" value="10A1 · 11A3 · 12A2" />
      <InfoPill icon={<Layers size={16} />} label="Chia phiên" value="Sáng · Chiều · Tối" />
      <InfoPill icon={<CheckCircle2 size={16} />} label="Reset ảnh" value="Sau mỗi lần chấm" />
    </div>
  </div>
);

const InfoPill: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
    <span className="text-teal-600">{icon}</span>
    <div>
      <p className="text-[11px] font-semibold text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default GradingHeader;
