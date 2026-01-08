import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
  <div className="bg-teal-900 text-white p-6 rounded-2xl shadow-md flex justify-between items-center hover:shadow-lg transition-shadow border border-teal-800">
    <span className="font-medium text-teal-100/80 text-lg">{label} :</span>
    <span className="font-bold text-2xl tracking-wider">{value}</span>
  </div>
);

export default StatCard;
