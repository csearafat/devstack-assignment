import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Build Your Custom Tech Stack
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Architect Modern Web Apps with the <br className="hidden sm:inline" />
          <span className="brand-text-gradient">Right Tech Suite</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore top-tier frontend frameworks, backend runtimes, databases, and DevOps tools. Mix, match, and organize your favorite tech stack seamlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#technologies"
            className="w-full sm:w-auto brand-bg-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all text-sm"
          >
            Explore Technologies
          </a>
          <a
            href="#my-stack"
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-all text-sm"
          >
            View My Stack
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;