import React from 'react';
import { FaHome, FaUsers, FaBullhorn, FaChartBar, FaClipboardCheck } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold">Firstbench</div>
          <div className="flex items-center space-x-6">
            <NavItem icon={<FaHome />} text="Dashboard" active />
            <NavItem icon={<FaUsers />} text="FirstGuru" />
            <NavItem icon={<FaBullhorn />} text="TownHall" />
            <NavItem icon={<FaChartBar />} text="AI Evaluation" />
            <NavItem icon={<FaClipboardCheck />} text="Performance" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <IoNotifications className="text-xl" />
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text, active }) => {
  return (
    <div className={`flex items-center space-x-2 cursor-pointer ${active ? 'text-cyan-400' : ''}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Navbar;