import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function ScoreBar({ score, max = 5, color }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className="h-2 w-full rounded-full transition-all"
          style={{
            backgroundColor: i < score ? color : 'rgba(255,255,255,0.1)',
          }}
        />
      ))}
    </div>
  );
}

export default function TechCard({ tech, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-navy-800 border rounded-xl p-6 relative overflow-hidden ${
        tech.highlighted ? 'border-pink-400/40 shadow-lg shadow-pink-500/10' : 'border-white/10'
      }`}
    >
      {tech.highlighted && (
        <div className="absolute top-3 right-3 bg-pink-500/20 text-pink-400 text-xs font-bold px-2 py-1 rounded-full border border-pink-400/30">
          ★ Recommended
        </div>
      )}
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl">{tech.icon}</span>
        <div>
          <h3 className="font-bold text-white text-lg leading-tight">{tech.name}</h3>
          <p className="text-slate-400 text-sm">{tech.shortDesc}</p>
        </div>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">{tech.description}</p>
      <div className="space-y-3">
        {[
          { label: 'Cost Efficiency', score: tech.costScore },
          { label: 'Tracking Accuracy', score: tech.accuracyScore },
          { label: 'Range', score: tech.rangeScore },
          { label: 'Automation', score: tech.automationScore },
        ].map(({ label, score }) => (
          <div key={label}>
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>{label}</span>
              <span>{score}/5</span>
            </div>
            <ScoreBar score={score} color={tech.color} />
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
        <div>
          <span className="text-slate-500">Best for</span>
          <p className="text-slate-300 mt-0.5">{tech.bestFor}</p>
        </div>
        <div>
          <span className="text-slate-500">Limitations</span>
          <p className="text-slate-300 mt-0.5">{tech.limitations}</p>
        </div>
      </div>
    </motion.div>
  );
}
