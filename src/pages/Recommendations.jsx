import { motion } from 'framer-motion';
import RecommendationCard from '../components/RecommendationCard';
import { recommendationsContent } from '../content/recommendations';

export default function Recommendations() {
  const { title, subtitle, intro, summaryStats, verdict, recommendations, decisionMatrix, implementationRoadmap } = recommendationsContent;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="pt-24 pb-16 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-3">Strategic Output</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-xl text-slate-300 mb-6 font-light">{subtitle}</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 leading-relaxed">{intro}</motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        {/* Summary Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {summaryStats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Verdict Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500/20 to-sky-500/10 border border-emerald-500/30 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">{verdict.headline}</h2>
              <p className="text-slate-300 leading-relaxed text-lg">{verdict.body}</p>
            </div>
          </div>
        </motion.div>

        {/* Recommendation Cards */}
        <div className="space-y-8">
          {recommendations.map((rec, i) => (
            <RecommendationCard key={rec.id} rec={rec} index={i} />
          ))}
        </div>

        {/* Decision Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-800 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">{decisionMatrix.title}</h2>
          <p className="text-slate-400 text-sm mb-8">{decisionMatrix.subtitle}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 text-xs uppercase tracking-wider pb-3 pr-4 font-medium">Recommendation</th>
                  {decisionMatrix.criteria.map((c) => (
                    <th key={c} className="text-center text-slate-400 text-xs uppercase tracking-wider pb-3 px-2 font-medium min-w-[90px]">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {decisionMatrix.rows.map((row) => (
                  <tr key={row.id} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
                        <span className="text-white font-medium text-sm">{row.label}</span>
                      </div>
                    </td>
                    {row.scores.map((score, i) => (
                      <td key={i} className="py-3 px-2 text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className="w-2 h-2 rounded-full transition-colors"
                              style={{ backgroundColor: dot <= score ? row.color : 'rgba(255,255,255,0.1)' }}
                            />
                          ))}
                        </div>
                        <span className="text-slate-500 text-xs mt-1 block">{score}/5</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Implementation Roadmap */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-800 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-8">{implementationRoadmap.title}</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10 hidden sm:block"></div>
            <div className="space-y-8">
              {implementationRoadmap.phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative sm:pl-16"
                >
                  <div
                    className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full items-center justify-center text-white font-bold text-sm border-4 border-navy-900"
                    style={{ backgroundColor: phase.color }}
                  >
                    {i + 1}
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="font-bold text-white">{phase.phase}: {phase.title}</span>
                      <span className="text-xs px-2 py-1 rounded-full border" style={{ color: phase.color, borderColor: `${phase.color}50`, backgroundColor: `${phase.color}15` }}>
                        {phase.timeframe}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {phase.actions.map((action, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-300">
                          <span style={{ color: phase.color }}>→</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
