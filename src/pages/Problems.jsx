import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import { problemsContent } from '../content/problems';

function PageHeader({ title, subtitle, intro }) {
  return (
    <div className="pt-24 pb-16 px-4 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-3">Industry Analysis</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-xl text-slate-300 mb-6 font-light">{subtitle}</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 leading-relaxed">{intro}</motion.p>
      </div>
    </div>
  );
}

function SectionHeader({ title, icon, narrative, color = 'red' }) {
  const colorClasses = {
    red: 'text-red-400',
    orange: 'text-orange-400',
    blue: 'text-sky-400',
    purple: 'text-violet-400',
    green: 'text-emerald-400',
  };
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-white`}
        >{title}</motion.h2>
      </div>
      {narrative && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-3xl leading-relaxed"
        >{narrative}</motion.p>
      )}
    </div>
  );
}

function PointsGrid({ points, color = 'red' }) {
  const bulletColors = {
    red: 'text-red-400',
    orange: 'text-orange-400',
    blue: 'text-sky-400',
    purple: 'text-violet-400',
    green: 'text-emerald-400',
  };
  const bullet = bulletColors[color] || bulletColors.red;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {points.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-navy-800 border border-white/10 rounded-xl p-5 flex gap-3"
        >
          <span className="text-2xl flex-shrink-0">{p.icon}</span>
          <div>
            <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
            <p className="text-slate-400 text-sm">{p.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CostTable({ table, highlight }) {
  return (
    <div className="mt-6">
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              {table.headers.map((h, i) => (
                <th key={i} className={`px-4 py-3 font-semibold text-slate-300 ${i === 0 ? 'text-left' : 'text-right'}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-white/5 transition-colors ${row.highlight ? 'bg-red-950/20' : 'hover:bg-white/3'}`}
              >
                <td className={`px-4 py-3 text-left ${row.highlight ? 'text-red-200 font-medium' : 'text-slate-300'}`}>{row.scenario}</td>
                <td className="px-4 py-3 text-right text-slate-400">{row.consumer}</td>
                <td className={`px-4 py-3 text-right font-semibold ${row.highlight ? 'text-red-400' : 'text-orange-400'}`}>{row.retailer}</td>
                <td className="px-4 py-3 text-right text-slate-400">{row.carrier}</td>
                <td className={`px-4 py-3 text-right font-bold ${row.highlight ? 'text-red-300' : 'text-white'}`}>{row.total}</td>
              </tr>
            ))}
            <tr className="bg-white/5 border-t border-white/20">
              <td className="px-4 py-3 text-left text-white font-bold">Total by Stakeholder</td>
              <td className="px-4 py-3 text-right text-slate-300 font-bold">{table.totals.consumer}</td>
              <td className="px-4 py-3 text-right text-orange-400 font-bold">{table.totals.retailer}</td>
              <td className="px-4 py-3 text-right text-slate-300 font-bold">{table.totals.carrier}</td>
              <td className="px-4 py-3 text-right text-white font-bold">{table.totals.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {highlight && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 bg-red-950/30 border border-red-500/30 rounded-xl px-5 py-4"
        >
          <span className="text-red-400 font-semibold text-sm">⚠ Key finding: </span>
          <span className="text-red-200 text-sm">{highlight}</span>
        </motion.div>
      )}
    </div>
  );
}

function CrossBorderBreakdown({ breakdown }) {
  const severityColors = { high: 'text-orange-400', medium: 'text-yellow-400' };
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {breakdown.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-navy-800 border border-white/10 rounded-xl p-5"
        >
          <div className={`text-2xl font-black mb-1 ${severityColors[item.severity]}`}>{item.percentage}</div>
          <div className="text-white font-semibold text-sm mb-1">{item.category}</div>
          <p className="text-slate-400 text-xs">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Problems() {
  const { title, subtitle, intro, statsBar, sections } = problemsContent;

  const failureSection = sections.find(s => s.id === 'failure-crisis');
  const trackingSection = sections.find(s => s.id === 'tracking-gap');
  const crossBorderSection = sections.find(s => s.id === 'cross-border');
  const costTableSection = sections.find(s => s.id === 'cost-table');
  const brandSection = sections.find(s => s.id === 'brand-damage');
  const envSection = sections.find(s => s.id === 'environmental');

  return (
    <div className="min-h-screen">
      <PageHeader title={title} subtitle={subtitle} intro={intro} />

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-navy-800/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statsBar.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">

        {/* Delivery Failure Crisis */}
        <section>
          <SectionHeader title={failureSection.title} icon={failureSection.icon} narrative={failureSection.narrative} color={failureSection.color} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {failureSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
          <PointsGrid points={failureSection.points} color={failureSection.color} />
        </section>

        {/* Tracking Gap */}
        <section>
          <SectionHeader title={trackingSection.title} icon={trackingSection.icon} narrative={trackingSection.narrative} color={trackingSection.color} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {trackingSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
          <PointsGrid points={trackingSection.points} color={trackingSection.color} />
        </section>

        {/* Cross-Border Complexity */}
        <section>
          <SectionHeader title={crossBorderSection.title} icon={crossBorderSection.icon} narrative={crossBorderSection.narrative} color={crossBorderSection.color} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
            {crossBorderSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
          <CrossBorderBreakdown breakdown={crossBorderSection.breakdown} />
        </section>

        {/* Cost Table */}
        <section className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8">
          <SectionHeader title={costTableSection.title} icon={costTableSection.icon} narrative={costTableSection.narrative} color={costTableSection.color} />
          <p className="text-slate-500 text-xs mb-2">Source: {costTableSection.source}</p>
          <CostTable table={costTableSection.table} highlight={costTableSection.highlight} />
        </section>

        {/* Brand Damage */}
        <section>
          <SectionHeader title={brandSection.title} icon={brandSection.icon} narrative={brandSection.narrative} color={brandSection.color} />
          <PointsGrid points={brandSection.points} color={brandSection.color} />
        </section>

        {/* Environmental */}
        <section className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-8">
          <SectionHeader title={envSection.title} icon={envSection.icon} narrative={envSection.narrative} color={envSection.color} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {envSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </section>

      </div>
    </div>
  );
}
