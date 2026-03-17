import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const badgeStyles = {
  green: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-400/30',
  purple: 'bg-violet-500/20 text-violet-400 border-violet-400/30',
};

const riskColors = {
  Low: 'text-emerald-400',
  Medium: 'text-yellow-400',
  'Medium–High': 'text-orange-400',
  High: 'text-red-400',
};

export default function RecommendationCard({ rec, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [stepsOpen, setStepsOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-navy-800 border border-white/10 rounded-2xl overflow-hidden"
      style={{ borderTop: `3px solid ${rec.color}` }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">{rec.icon}</div>
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <span className="text-slate-500 text-sm font-mono">#{rec.rank}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeStyles[rec.badgeColor]}`}>
                  {rec.badge}
                </span>
              </div>
              <h3 className="text-white font-bold text-xl leading-tight">{rec.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{rec.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-5">{rec.description}</p>

        {/* Rationale */}
        <div className="bg-white/5 rounded-xl p-4 mb-4">
          <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Strategic Rationale</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{rec.strategic_rationale}</p>
        </div>

        {/* Competitive Edge */}
        {rec.competitive_edge && (
          <div className="rounded-xl p-4 mb-4 border" style={{ backgroundColor: `${rec.color}10`, borderColor: `${rec.color}30` }}>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: rec.color }}>
              Competitive Edge vs Royal Mail &amp; Detrack
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">{rec.competitive_edge}</p>
          </div>
        )}

        {/* ROI Estimate */}
        {rec.roi_estimate && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-5 flex gap-3 items-start">
            <span className="text-emerald-400 text-lg flex-shrink-0">£</span>
            <div>
              <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">ROI Estimate</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{rec.roi_estimate}</p>
            </div>
          </div>
        )}

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">Advantages</h4>
            <ul className="space-y-2">
              {rec.pros.map((pro, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-slate-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">Considerations</h4>
            <ul className="space-y-2">
              {rec.cons.map((con, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-slate-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Implementation Steps — collapsible */}
        {rec.implementation_steps && (
          <div className="mb-5">
            <button
              onClick={() => setStepsOpen(!stepsOpen)}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3 text-left"
            >
              <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                Implementation Steps ({rec.implementation_steps.length})
              </h4>
              <motion.span
                animate={{ rotate: stepsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 text-sm"
              >
                ▾
              </motion.span>
            </button>
            <AnimatePresence>
              {stepsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <ol className="mt-3 space-y-2 pl-1">
                    {rec.implementation_steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                          style={{ backgroundColor: rec.color }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-slate-300 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Meta */}
        <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          {[
            { label: 'Timeframe', value: rec.timeframe, color: 'text-white' },
            { label: 'Investment', value: rec.investment, color: 'text-white' },
            { label: 'Risk', value: rec.risk, color: riskColors[rec.risk] || 'text-white' },
          ].map(({ label, value, color }) => (
            <div key={label} className="text-center bg-white/5 rounded-lg p-3">
              <div className="text-slate-500 text-xs mb-1">{label}</div>
              <div className={`font-semibold text-sm ${color}`}>{value}</div>
            </div>
          ))}
        </div>

        {/* KPIs */}
        <div className="mt-5 pt-5 border-t border-white/10">
          <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Key Performance Indicators</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {rec.kpis.map((kpi, i) => {
              const isObject = typeof kpi === 'object';
              return (
                <div key={i} className="bg-white/5 rounded-lg px-3 py-2.5 border border-white/5 flex items-center justify-between gap-2">
                  <span className="text-slate-400 text-xs">{isObject ? kpi.label : kpi}</span>
                  {isObject && (
                    <span className="text-xs font-semibold whitespace-nowrap" style={{ color: rec.color }}>
                      {kpi.target}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
