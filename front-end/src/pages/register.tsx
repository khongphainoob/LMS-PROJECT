import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập đăng ký thành công
    console.log('Registering with:', { role, fullName, email, password });
    navigate('/login');
  };
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center p-4 font-sans">
      {/* Main Card */}
      <div className="max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side - Dark Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-orange-100 to-amber-200 p-12 text-teal-900 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background Shapes */}
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-orange-300/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <img 
                src={logo} 
                alt="TOMOSA Logo" 
                className="w-28 h-28 object-contain drop-shadow-xl" 
              />
              <div className="flex flex-col justify-center">
                <span className="text-3xl font-bold tracking-[0.15em] leading-none mb-2 text-teal-900">TOMOSA</span>
                <span className="text-sm tracking-[0.35em] text-teal-700 font-semibold uppercase pl-1">Acquire to Aspire</span>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight text-teal-900">
              Join Us <br /> Today!
            </h2>
            <p className="text-teal-800 max-w-xs mb-8 font-medium">
                Create your account to start your journey with TOMOSA. Unlock exclusive features and content.
            </p>

            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-teal-500 shadow-lg"></div>
              <div className="w-4 h-4 rounded-full bg-orange-400 shadow-lg"></div>
              <div className="w-4 h-4 rounded-full bg-teal-800 shadow-lg"></div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <p className="text-teal-800 font-medium">Already have an account?</p>
            <a href="/login" className="text-teal-900 font-bold hover:underline">Log in now</a>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6 md:hidden">
              <img 
                src={logo} 
                alt="TOMOSA Logo" 
                className="w-16 h-16 object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-teal-900 tracking-wider">TOMOSA</span>
                <span className="text-[10px] tracking-widest text-teal-600 font-bold uppercase">Acquire to Aspire</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-teal-900 mb-2">Create Account</h3>
            <p className="text-gray-500">Sign up to get started</p>
          </div>

          <div className="flex p-1 bg-gray-50 rounded-xl mb-6 border border-gray-200">
            <button
              type="button"
              className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                role === 'student' 
                  ? 'bg-teal-600 text-white shadow-md transform scale-105' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-teal-600'
              }`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button
              type="button"
              className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                role === 'teacher' 
                  ? 'bg-rose-500 text-white shadow-md transform scale-105' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-rose-500'
              }`}
              onClick={() => setRole('teacher')}
            >
              Teacher
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="yourmail@mail.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all mt-4"
            >
              REGISTER
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or register with</span>
              </div>
            </div>

            <button 
              type="button"
              className="w-full py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
