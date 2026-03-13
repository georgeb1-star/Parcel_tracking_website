import { motion } from 'framer-motion';
import CompetitorCard from '../components/CompetitorCard';
import { competitorsContent } from '../content/competitors';

export default function Competitors() {
  const { title, subtitle, intro, competitors, ascentPosition } = competitorsContent;

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-3">Competitive Intelligence</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-xl text-slate-300 mb-6 font-light">{subtitle}</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 leading-relaxed">{intro}</motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {competitors.map((competitor, i) => (
          <CompetitorCard key={competitor.id} competitor={competitor} index={i} />
        ))}

        {/* Ascent Position */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sky-500/10 to-purple-500/10 border border-sky-400/30 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-3">{ascentPosition.title}</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">{ascentPosition.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ascentPosition.advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-sky-400 text-lg mt-0.5">✦</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{adv.advantage}</h4>
                    <p className="text-slate-400 text-sm">{adv.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
