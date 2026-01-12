import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';
import Home from './pages/Home';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import MyCourses from './pages/dashboard/MyClasses';
import GradingPage from './pages/dashboard/Grading';

function App() {
  return (
    <Router>
      <Routes>
        {/* Điều hướng mặc định về trang login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<MyCourses />} />
        <Route path="/teacher/grading" element={<GradingPage />} />
        
        {/* Route cho trang không tồn tại */}
        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
