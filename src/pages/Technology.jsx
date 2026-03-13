import { motion } from 'framer-motion';
import TechCard from '../components/TechCard';
import { technologyContent } from '../content/technology';

const scoreColors = {
  1: 'text-red-400 bg-red-400/10',
  2: 'text-orange-400 bg-orange-400/10',
  3: 'text-yellow-400 bg-yellow-400/10',
  4: 'text-emerald-400 bg-emerald-400/10',
  5: 'text-sky-400 bg-sky-400/10',
};

export default function Technology() {
  const { title, subtitle, intro, currentState, technologies } = technologyContent;

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">Deep Dive</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-xl text-slate-300 mb-6 font-light">{subtitle}</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 leading-relaxed">{intro}</motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Current State */}
        <section>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-3">{currentState.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-400 mb-8 max-w-3xl leading-relaxed">{currentState.summary}</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentState.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3 bg-navy-800 border border-red-500/20 rounded-xl p-4"
              >
                <span className="text-red-400 mt-0.5">✗</span>
                <div>
                  <div className="text-white font-semibold text-sm">{point.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{point.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology Cards */}
        <section>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-8">The Six Technologies</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech, i) => (
              <TechCard key={tech.id} tech={tech} index={i} />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-8">Comparison Matrix</motion.h2>
          <div className="bg-navy-800 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left px-5 py-4 text-slate-400 font-semibold">Technology</th>
                    <th className="text-center px-4 py-4 text-slate-400 font-semibold">Cost</th>
                    <th className="text-center px-4 py-4 text-slate-400 font-semibold">Accuracy</th>
                    <th className="text-center px-4 py-4 text-slate-400 font-semibold">Indoor</th>
                    <th className="text-center px-4 py-4 text-slate-400 font-semibold">Automation</th>
                    <th className="text-center px-4 py-4 text-slate-400 font-semibold">Range</th>
                    <th className="text-center px-4 py-4 text-slate-400 font-semibold">Overall</th>
                  </tr>
                </thead>
                <tbody>
                  {technologies.map((tech, i) => {
                    const indoorScore = tech.indoorPerformance === 'Excellent' ? 5
                      : tech.indoorPerformance === 'Good' ? 4
                      : tech.indoorPerformance === 'Medium' ? 3
                      : tech.indoorPerformance === 'Poor' ? 1 : 2;
                    const overall = Math.round((tech.costScore + tech.accuracyScore + tech.rangeScore + tech.automationScore) / 4);
                    return (
                      <tr key={tech.id} className={`border-b border-white/5 ${tech.highlighted ? 'bg-pink-500/5' : i % 2 === 0 ? '' : 'bg-white/2'}`}>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <span>{tech.icon}</span>
                            <div>
                              <div className="text-white font-medium">{tech.name}</div>
                              {tech.highlighted && <span className="text-pink-400 text-xs">★ Recommended</span>}
                            </div>
                          </div>
                        </td>
                        {[tech.costScore, tech.accuracyScore,
                          Math.round((tech.rangeScore + indoorScore) / 2),
                          tech.automationScore, tech.rangeScore, overall].map((score, j) => (
                          <td key={j} className="px-4 py-4 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${scoreColors[score]}`}>
                              {score}/5
                            </span>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
