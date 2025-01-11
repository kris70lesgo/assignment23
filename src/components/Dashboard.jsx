import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import ResultCard from './ResultCard';

const data = [
  { slot: 1, accuracy: 85 },
  { slot: 2, accuracy: 45 },
  { slot: 3, accuracy: 35 },
  { slot: 4, accuracy: 65 },
  { slot: 5, accuracy: 55 },
  { slot: 6, accuracy: 45 },
  { slot: 7, accuracy: 75 },
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <ResultCard />
      </div>
      
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Performance Analysis</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="slot" />
                <YAxis />
                <Bar dataKey="accuracy" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Response Time</h3>
            <div className="flex items-center space-x-2">
              <div className="text-4xl font-bold text-green-500">60%</div>
              <div className="text-sm text-gray-600">
                Ans took <span className="text-red-500">2min</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Suggestions</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Easy</span>
                <span className="text-green-500">40sec</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Medium</span>
                <span className="text-yellow-500">1.5min</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Hard</span>
                <span className="text-red-500">3min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;