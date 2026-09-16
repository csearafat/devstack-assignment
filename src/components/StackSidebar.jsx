import React from 'react';

const StackSidebar = ({ stackItems, onRemove, onClearAll }) => {
  return (
    <aside id="my-stack" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>Your Stack</span>
        </h2>
        <span className="text-xs font-bold px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
          {stackItems.length} Selected
        </span>
      </div>

      {/* Conditional Rendering: Empty State vs Stack Items */}
      {stackItems.length === 0 ? (
        <div className="text-center py-10 px-4 border border-dashed border-slate-800 rounded-xl">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
            ⚡
          </div>
          <p className="text-sm font-semibold text-slate-300">Your Stack is Empty</p>
          <p className="text-xs text-slate-500 mt-1">
            Click "Add to Stack" on any card to start building your tech suite.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {/* List of Added Items */}
          <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3 custom-scrollbar">
            {stackItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-900 p-1.5 rounded-lg border border-slate-700/40 flex items-center justify-center">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{item.name}</h4>
                    <span className="text-[11px] text-slate-400">{item.category}</span>
                  </div>
                </div>

                {/* Single Item Remove Button */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="w-7 h-7 rounded-lg bg-slate-700/50 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 flex items-center justify-center text-xs font-bold transition-colors"
                  title="Remove from stack"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onClearAll}
            className="w-full mt-4 py-2.5 px-4 text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl hover:bg-rose-500/20 transition-all"
          >
            Clear Entire Stack
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;