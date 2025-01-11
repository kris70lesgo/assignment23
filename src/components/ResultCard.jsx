import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ResultCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <img src="/result-icon.svg" alt="Result" className="w-16 h-16" />
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">Your Result!</h2>
          <p className="text-gray-600">All your insights & details in one place</p>
        </div>
      </div>

      <div className="bg-light-purple p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500 text-xl" />
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">YOU'VE PASSED!</span>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-600">ACCURACY</span>
            <div className="text-green-500 font-bold">76%</div>
          </div>
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold">136</span>
          <span className="text-gray-500">/240</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <img src="/avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <div className="text-sm text-gray-600">Top Score</div>
              <div className="font-bold">230<span className="text-gray-500">/240</span></div>
            </div>
          </div>
          <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded">
            92% ACCURACY
          </div>
        </div>
        <div className="text-sm text-gray-600">By Parth Akotkar</div>
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
        Practice more
      </button>
    </div>
  );
};

export default ResultCard;