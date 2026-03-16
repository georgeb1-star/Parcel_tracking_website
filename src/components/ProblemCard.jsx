import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const colorMap = {
  red: {
    border: '#ef4444',
    badge: 'bg-red-500/20 text-red-400 border border-red-500/30',
    icon: 'bg-red-500/20',
    bullet: 'text-red-400',
  },
  orange: {
    border: '#f97316',
    badge: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    icon: 'bg-orange-500/20',
    bullet: 'text-orange-400',
  },
  blue: {
    border: '#38bdf8',
    badge: 'bg-sky-500/20 text-sky-400 border border-sky-500/30',
    icon: 'bg-sky-500/20',
    bullet: 'text-sky-400',
  },
  purple: {
    border: '#a78bfa',
    badge: 'bg-violet-500/20 text-violet-400 border border-violet-500/30',
    icon: 'bg-violet-500/20',
    bullet: 'text-violet-400',
  },
  green: {
    border: '#22c55e',
    badge: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    icon: 'bg-emerald-500/20',
    bullet: 'text-emerald-400',
  },
};

export default function ProblemCard({ icon, title, stat, description, color = 'red', index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const colors = colorMap[color] || colorMap.red;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-navy-800 border border-white/10 rounded-xl p-5 flex flex-col gap-3"
      style={{ borderTop: `3px solid ${colors.border}` }}
    >
      <div className="flex items-start gap-3">
        <div className={`${colors.icon} rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm leading-tight">{title}</h4>
          {stat && (
            <div className={`inline-block mt-1.5 text-xs font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
              {stat}
            </div>
          )}
        </div>
      </div>
      {description && (
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
