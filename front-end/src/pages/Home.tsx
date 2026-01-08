import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to LifeBOX</h1>
      <p className="text-gray-600">You are successfully logged in!</p>
      <a href="/login" className="mt-6 text-blue-500 hover:underline">Back to Login</a>
    </div>
  );
};

export default Home;
