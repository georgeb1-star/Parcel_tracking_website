import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import StatCard from '../components/StatCard';
import { marketContent } from '../content/market';

function PageHeader({ title, subtitle, intro }) {
  return (
    <div className="pt-24 pb-16 px-4 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-3">Analysis</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-xl text-slate-300 mb-6 font-light">{subtitle}</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 leading-relaxed">{intro}</motion.p>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-white/20 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold">{label}</p>
        <p className="text-sky-400 text-sm">{payload[0].value}B parcels</p>
      </div>
    );
  }
  return null;
};

export default function Market() {
  const { title, subtitle, intro, sections } = marketContent;
  const volumeSection = sections.find(s => s.id === 'volume');
  const consumerSection = sections.find(s => s.id === 'consumer');
  const retailerSection = sections.find(s => s.id === 'retailer');
  const crimeSection = sections.find(s => s.id === 'crime');
  const chartData = sections.find(s => s.id === 'chartData');

  return (
    <div className="min-h-screen">
      <PageHeader title={title} subtitle={subtitle} intro={intro} />

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Volume Section */}
        <section>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-3">{volumeSection.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-400 mb-8 max-w-3xl leading-relaxed">{volumeSection.narrative}</motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {volumeSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>

          {/* Chart */}
          <div className="bg-navy-800 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-6">UK Parcel Volume Growth (Billions)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData.parcelVolumeData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 5]} tickFormatter={v => `${v}B`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="parcels" radius={[4, 4, 0, 0]}>
                  {chartData.parcelVolumeData.map((entry, index) => (
                    <Cell key={index} fill={index === chartData.parcelVolumeData.length - 1 ? '#38bdf8' : '#1e3a5f'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Consumer Section */}
        <section>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-3">{consumerSection.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-400 mb-8 max-w-3xl leading-relaxed">{consumerSection.narrative}</motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {consumerSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </section>

        {/* Retailer Wants */}
        <section>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-3">{retailerSection.title}</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-400 mb-8 max-w-3xl leading-relaxed">{retailerSection.narrative}</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {retailerSection.wants.map((want, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-navy-800 border border-white/10 rounded-xl p-5 flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{want.icon}</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">{want.want}</h4>
                  <p className="text-slate-400 text-sm">{want.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Crime Section */}
        <section className="bg-red-950/30 border border-red-500/20 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">⚠️</span>
            <div>
              <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-2">{crimeSection.title}</motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-300 max-w-3xl leading-relaxed">{crimeSection.narrative}</motion.p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {crimeSection.stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
