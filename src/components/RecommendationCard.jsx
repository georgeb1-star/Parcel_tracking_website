import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
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
        <div className="bg-white/5 rounded-xl p-4 mb-5">
          <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Strategic Rationale</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{rec.strategic_rationale}</p>
        </div>

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
          <div className="flex flex-wrap gap-2">
            {rec.kpis.map((kpi, i) => (
              <span key={i} className="bg-white/5 text-slate-300 text-xs px-3 py-1.5 rounded-full border border-white/10">
                {kpi}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
