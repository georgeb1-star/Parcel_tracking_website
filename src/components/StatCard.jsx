import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function parseValue(value) {
  const str = String(value);
  const match = str.match(/^([£+\-]?)([\d,.]+)([BMK%]?)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: str, raw: str, isNumeric: false };
  return {
    prefix: match[1] || '',
    number: parseFloat(match[2].replace(/,/g, '')),
    suffix: match[3] + (match[4] || ''),
    raw: str,
    isNumeric: true,
  };
}

function AnimatedNumber({ value, duration = 2000 }) {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView || !parsed.isNumeric) return;
    let start = null;
    const target = parsed.number;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, parsed.number, duration]);

  if (!parsed.isNumeric) return <span ref={ref}>{value}</span>;

  const formatted = display.toLocaleString('en-GB', { maximumFractionDigits: 1 });

  return (
    <span ref={ref}>
      {parsed.prefix}{formatted}{parsed.suffix}
    </span>
  );
}

const colorMap = {
  accent: 'from-sky-400/20 to-sky-600/5 border-sky-400/30 text-sky-400',
  green: 'from-emerald-400/20 to-emerald-600/5 border-emerald-400/30 text-emerald-400',
  red: 'from-red-400/20 to-red-600/5 border-red-400/30 text-red-400',
  purple: 'from-violet-400/20 to-violet-600/5 border-violet-400/30 text-violet-400',
  blue: 'from-blue-400/20 to-blue-600/5 border-blue-400/30 text-blue-400',
  orange: 'from-orange-400/20 to-orange-600/5 border-orange-400/30 text-orange-400',
  yellow: 'from-yellow-400/20 to-yellow-600/5 border-yellow-400/30 text-yellow-400',
};

export default function StatCard({ value, label, sublabel, note, color = 'accent', large = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const colors = colorMap[color] || colorMap.accent;
  const textColor = colors.split(' ').find(c => c.startsWith('text-'));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br ${colors} border rounded-xl p-6 ${large ? 'p-8' : ''}`}
    >
      <div className={`font-black stat-glow mb-1 ${large ? 'text-6xl' : 'text-4xl'} ${textColor}`}>
        <AnimatedNumber value={value} />
      </div>
      <div className="text-white font-semibold text-sm mt-2 leading-tight">{label}</div>
      {sublabel && <div className="text-slate-400 text-xs mt-1">{sublabel}</div>}
      {note && <div className="text-slate-500 text-xs mt-2 italic border-t border-white/10 pt-2">{note}</div>}
    </motion.div>
  );
}
