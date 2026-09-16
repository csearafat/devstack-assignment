import React from 'react';

const Navbar = ({ selectedCount = 0 }) => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 rounded-xl shadow-lg shadow-blue-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              DevStack
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#technologies" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Technologies
            </a>
            <a href="#my-stack" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              My Stack
            </a>
          </div>

          {/* Selected Stack Badge Counter */}
          <div className="flex items-center gap-3">
            <a 
              href="#my-stack"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg border border-slate-700 transition-all text-sm font-medium"
            >
              <span>Selected Stack</span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                {selectedCount}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;