import React from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  CalendarClock,
  Users,
  NotebookText,
  FolderOpen,
  ClipboardList,
  CheckSquare,
  MessageSquare,
  BarChart3,
  Bell,
  LogOut,
  Search,
  Settings
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

interface TeacherLayoutProps {
  children: React.ReactNode;
  title?: string;
  userName?: string;
}

const TeacherLayout: React.FC<TeacherLayoutProps> = ({ 
  children, 
  title = "Dashboard", 
  userName = "Alex" 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/teacher-dashboard', icon: <LayoutDashboard size={20} />, hint: 'Tổng quan nhanh' },
    { label: 'Lớp học', path: '/teacher/classes', icon: <GraduationCap size={20} />, hint: 'Tạo và quản lý lớp' },
    { label: 'Lịch học', path: '/teacher/timetable', icon: <CalendarClock size={20} />, hint: 'Quản lý lịch theo lớp' },
    { label: 'Học sinh', path: '/teacher/students', icon: <Users size={20} />, hint: 'Hồ sơ và nhóm' },
    { label: 'Bài học', path: '/teacher/lessons', icon: <NotebookText size={20} />, hint: 'Kế hoạch giảng dạy' },
    { label: 'Tài liệu học tập', path: '/teacher/resources', icon: <FolderOpen size={20} />, hint: 'Kho tài liệu cho từng lớp' },
    { label: 'Bài tập / Assignment', path: '/teacher/assignments', icon: <ClipboardList size={20} />, hint: 'Giao và theo dõi bài tập' },
    { label: 'Chấm bài / Grading', path: '/teacher/grading', icon: <CheckSquare size={20} />, hint: 'Chấm điểm theo lớp' },
    { label: 'Thông báo / Tin nhắn', path: '/teacher/messages', icon: <MessageSquare size={20} />, hint: 'Thông báo nhanh cho lớp' },
    { label: 'Báo cáo & Thống kê', path: '/teacher/reports', icon: <BarChart3 size={20} />, hint: 'Hiệu suất từng lớp' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 bg-teal-900 text-white flex flex-col rounded-r-[2.5rem] shadow-2xl my-4 ml-4 h-[calc(100vh-2rem)] relative z-20">
        {/* Logo Area */}
        <div className="p-8 flex items-center gap-4">
          <div className="w-20 h-20 bg-white p-2 rounded-xl shadow-lg flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-wider text-white">TOMOSA</span>
            <span className="text-[10px] text-teal-200 tracking-widest uppercase">Education</span>
          </div>
        </div>
        
        {/* User Profile Mini */}
        <div className="mx-6 mb-8 p-4 bg-teal-700/40 rounded-2xl flex items-center gap-4 border border-teal-600/50 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white/20">
            T
          </div>
          <div>
            <p className="text-sm font-bold text-white">Hi, {userName}</p>
            <p className="text-xs text-teal-200 font-medium">ID: T-8829</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 space-y-3 overflow-y-auto custom-scrollbar pb-6">
          {navItems.map(item => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              hint={item.hint}
              active={isActive(item.path)}
              onClick={() => navigate(item.path)}
            />
          ))}

          <div className="pt-4 mt-6 border-t border-teal-800/60">
            <NavItem
              icon={<Settings size={20} />}
              label="Cấu hình"
              hint="Quyền và thông báo"
              active={isActive('/teacher/settings')}
              onClick={() => navigate('/teacher/settings')}
            />
          </div>
        </nav>

        {/* Logout */}
        <div className="p-6">
          <button 
            onClick={() => navigate('/login')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-teal-100 hover:bg-rose-500/10 hover:text-rose-400 transition-all group"
          >
            <LogOut size={20} className="group-hover:translate-x-1 transition-transform"/>
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto h-screen bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-4xl font-bold text-teal-800 mb-2">{title}</h1>
              <p className="text-gray-500 text-lg">Welcome Back, <span className="font-bold text-teal-600">{userName}</span></p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block mr-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2.5 bg-white rounded-xl border-none shadow-sm focus:ring-2 focus:ring-teal-500 w-64 text-sm"
                />
              </div>
              <button className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:bg-teal-50 text-gray-600 transition-all relative">
                <Bell size={22}/>
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
          </header>

          {/* Page Content */}
          {children}
        </div>
      </main>
    </div>
  );
};

// Helper Components
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  hint?: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, hint, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
      active
        ? 'bg-white text-teal-900 font-bold shadow-lg shadow-teal-900/20'
        : 'text-teal-50 hover:bg-white/5 hover:text-white hover:pl-5'
    }`}>
    <span className={`${active ? 'text-teal-700' : 'text-teal-200 group-hover:text-white'}`}>
      {icon}
    </span>
    <div className="flex flex-col items-start">
      <span className="text-sm font-semibold leading-tight">{label}</span>
      {hint && <span className="text-[11px] text-teal-200/80 leading-tight">{hint}</span>}
    </div>
  </button>
);

export default TeacherLayout;
