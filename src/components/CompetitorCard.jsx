import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const severityColors = {
  critical: 'text-red-400',
  high: 'text-orange-400',
  medium: 'text-yellow-400',
};

export default function CompetitorCard({ competitor, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-navy-800 border border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10" style={{ borderTop: `3px solid ${competitor.color}` }}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{competitor.logo}</span>
            <div>
              <h3 className="text-white font-bold text-xl">{competitor.name}</h3>
              <span className="text-slate-400 text-sm">{competitor.type}</span>
            </div>
          </div>
          <div className="text-right text-xs text-slate-500">
            <div>{competitor.scale}</div>
            <div>Est. {competitor.founded}</div>
          </div>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">{competitor.overview}</p>
        <div className="mt-3 inline-block bg-white/5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 italic">
          "{competitor.tagline}"
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        <div className="p-6">
          <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>✓</span> Strengths
          </h4>
          <ul className="space-y-3">
            {competitor.strengths.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
                <div>
                  <span className="text-white text-sm font-medium">{s.point}</span>
                  <p className="text-slate-400 text-xs mt-0.5">{s.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <h4 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>✗</span> Weaknesses
          </h4>
          <ul className="space-y-3">
            {competitor.weaknesses.map((w, i) => (
              <li key={i} className="flex gap-2">
                <span className={`mt-0.5 flex-shrink-0 ${severityColors[w.severity]}`}>•</span>
                <div>
                  <span className="text-white text-sm font-medium">{w.point}</span>
                  <p className="text-slate-400 text-xs mt-0.5">{w.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scores */}
      <div className="p-6 border-t border-white/10 bg-white/2">
        <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Capability Scores</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.entries(competitor.scores).map(([dimension, score]) => (
            <div key={dimension} className="bg-white/5 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-slate-400 text-xs">{dimension}</span>
                <span className="text-white text-xs font-bold">{score}/5</span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: i < score ? competitor.color : 'rgba(255,255,255,0.1)' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="p-6 border-t border-white/10 bg-navy-700/30">
        <h4 className="text-white font-semibold text-sm mb-2">Strategic Verdict</h4>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">{competitor.verdict}</p>
        <div className="bg-sky-400/10 border border-sky-400/30 rounded-lg px-4 py-3">
          <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider">Ascent Opportunity: </span>
          <span className="text-sky-300 text-sm">{competitor.opportunity}</span>
        </div>
      </div>
    </motion.div>
  );
}
