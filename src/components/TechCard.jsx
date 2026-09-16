import React from 'react';

const TechCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-xl">
      <div>
        {/* Card Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-slate-800/80 rounded-xl p-2.5 flex items-center justify-center border border-slate-700/50">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {tech.badge}
          </span>
        </div>

        {/* Name & Category */}
        <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
        <span className="inline-block text-xs font-medium text-slate-400 mb-3 bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-700/50">
          {tech.category}
        </span>

        {/* Description */}
        <p className="text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
          {tech.description}
        </p>
      </div>

      {/* Card Footer: Difficulty, Rating & Action Button */}
      <div>
        <div className="flex items-center justify-between text-xs font-medium text-slate-400 border-t border-slate-800 pt-4 mb-4">
          <span>Difficulty: <strong className="text-slate-200">{tech.difficulty}</strong></span>
          <span className="flex items-center gap-1 text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 px-4 text-sm font-semibold rounded-xl transition-all duration-200 ${
            isAdded
              ? 'bg-emerald-500/10 text-emerald-400 cursor-not-allowed border border-emerald-500/20'
              : 'brand-bg-gradient text-white hover:opacity-90 shadow-lg shadow-indigo-500/20 active:scale-[0.98]'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;