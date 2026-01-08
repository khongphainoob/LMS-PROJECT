import React from 'react';
import {
  Users,
  ClipboardList,
  CheckSquare,
  TrendingUp,
  CalendarClock,
  BookOpen,
  Bell,
  Target,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import TeacherLayout from '../../layouts/TeacherLayout';

const TeacherDashboard: React.FC = () => {
  const stats = [
    { label: 'Lớp đang dạy', value: '6', icon: <BookOpen size={22} />, delta: '+1 lớp mới', tone: 'teal' },
    { label: 'Học sinh đang theo học', value: '182', icon: <Users size={22} />, delta: '+12 tuần này', tone: 'orange' },
    { label: 'Bài tập cần chấm', value: '24', icon: <CheckSquare size={22} />, delta: '12 quá hạn 24h', tone: 'rose' },
    { label: 'Bài tập đã giao', value: '48', icon: <ClipboardList size={22} />, delta: '5 chờ đăng', tone: 'indigo' }
  ];

  const efficiency = [
    { label: 'Tỉ lệ hoàn thành bài tập', value: '86%', detail: 'trong 7 ngày gần nhất' },
    { label: 'Điểm trung bình các lớp', value: '7.8/10', detail: 'ổn định, không giảm' },
    { label: 'Tỉ lệ nộp đúng hạn', value: '91%', detail: 'tăng 6% so với tuần trước' }
  ];

  const weeklySchedule = [
    { time: 'Hôm nay · 09:00', title: 'Lớp 10A1 - Toán', type: 'Dạy trực tiếp', room: 'P.204', color: 'bg-teal-100 text-teal-700' },
    { time: 'Hôm nay · 14:00', title: 'Chấm bài - Hóa 12A2', type: 'Grading', room: 'Online', color: 'bg-rose-100 text-rose-700' },
    { time: 'Ngày mai · 08:00', title: 'Lớp 11A3 - Lý', type: 'Dạy trực tiếp', room: 'P.105', color: 'bg-indigo-100 text-indigo-700' },
    { time: 'Ngày mai · 15:30', title: 'Họp tổ chuyên môn', type: 'Meeting', room: 'P.301', color: 'bg-amber-100 text-amber-700' }
  ];

  const todos = [
    { text: 'Xuất báo cáo tiến độ tuần', done: false },
    { text: 'Đăng bài tập chương 3 cho 10A1', done: false },
    { text: 'Phản hồi 8 tin nhắn của phụ huynh', done: false },
    { text: 'Chấm 12 bài thực hành Hóa 12A2', done: true }
  ];

  const activity = [
    { time: '5 phút trước', text: '12 học sinh 10A1 đã nộp Assignment 3', tone: 'teal' },
    { time: '30 phút trước', text: 'Bạn đã đăng thông báo nhắc học từ vựng tuần 4', tone: 'indigo' },
    { time: 'Hôm qua', text: 'Hoàn tất chấm 18/24 bài Lý 11A3', tone: 'rose' }
  ];

  return (
    <TeacherLayout title="Dashboard LMS">
      {/* Top KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {stats.map(card => (
          <div key={card.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 flex items-center gap-4 hover:shadow-md transition">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                card.tone === 'teal' ? 'bg-teal-100 text-teal-700' :
                card.tone === 'orange' ? 'bg-amber-100 text-amber-700' :
                card.tone === 'rose' ? 'bg-rose-100 text-rose-700' : 'bg-indigo-100 text-indigo-700'
              }`}
            >
              {card.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs font-semibold text-teal-600">{card.delta}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Efficiency + Workload */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-teal-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">Hiệu quả giảng dạy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {efficiency.map(item => (
              <div key={item.label} className="p-4 rounded-xl bg-teal-50 border border-teal-100">
                <p className="text-sm font-semibold text-teal-800">{item.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{item.value}</p>
                <p className="text-xs text-teal-700 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-700">Tiến độ chấm bài</p>
                <span className="text-xs font-semibold text-rose-600">24 bài cần chấm</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-gradient-to-r from-rose-400 to-orange-400" />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-700">Tỉ lệ điểm đạt ≥7</p>
                <span className="text-xs font-semibold text-emerald-600">72%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-gradient-to-r from-emerald-400 to-teal-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <CalendarClock className="text-indigo-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">Lịch tuần</h2>
          </div>
          <div className="space-y-3">
            {weeklySchedule.map(slot => (
              <div key={slot.title + slot.time} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">{slot.title}</p>
                  <span className={`text-[11px] px-2 py-1 rounded-full font-semibold ${slot.color}`}>{slot.type}</span>
                </div>
                <p className="text-xs text-gray-600">{slot.time}</p>
                <p className="text-xs text-gray-500">{slot.room}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Todo + Activity + Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-amber-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">To-do hôm nay</h2>
          </div>
          <div className="space-y-3">
            {todos.map(item => (
              <label key={item.text} className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/50 cursor-pointer transition">
                <input type="checkbox" checked={item.done} readOnly className="mt-1 accent-teal-600" />
                <div>
                  <p className={`text-sm font-semibold ${item.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{item.text}</p>
                  <p className="text-[11px] text-gray-500">Ưu tiên cao</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-teal-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">Hoạt động gần đây</h2>
          </div>
          <div className="space-y-3">
            {activity.map(item => (
              <div key={item.text} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm font-semibold text-gray-800">{item.text}</p>
                <p className={`text-xs font-semibold ${item.tone === 'teal' ? 'text-teal-600' : item.tone === 'indigo' ? 'text-indigo-600' : 'text-rose-600'}`}>{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-rose-600" size={20} />
            <h2 className="text-lg font-bold text-gray-900">Thông báo</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-sm text-rose-800 font-semibold">12 bài cần chấm trước 23:59 hôm nay.</div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-sm text-amber-800 font-semibold">Cập nhật lịch phòng P.204 sáng mai.</div>
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-sm text-indigo-800 font-semibold">3 tin nhắn mới từ phụ huynh lớp 11A3.</div>
          </div>
          <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-500 transition">
            <MessageSquare size={16} /> Xem hộp thư
          </button>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default TeacherDashboard;
