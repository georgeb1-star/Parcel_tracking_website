import { useState } from 'react';
import { motion } from 'framer-motion';
import { gsmContent } from '../content/gsm';

const badgeColors = {
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  sky: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  yellow: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
};

const glowColors = {
  emerald: 'border-emerald-500/30 shadow-emerald-500/10',
  sky: 'border-sky-500/40 shadow-sky-500/10',
  purple: 'border-purple-500/30 shadow-purple-500/10',
};

const arcColors = {
  sky: { dot: 'bg-sky-400', line: 'bg-sky-400/30', text: 'text-sky-400' },
  purple: { dot: 'bg-purple-400', line: 'bg-purple-400/30', text: 'text-purple-400' },
  emerald: { dot: 'bg-emerald-400', line: 'bg-emerald-400/30', text: 'text-emerald-400' },
};

function HardwareCard({ hw, index }) {
  const [open, setOpen] = useState(false);
  const colors = glowColors[hw.badgeColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className={`bg-[#0d1424] border rounded-2xl overflow-hidden shadow-lg ${colors}`}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${badgeColors[hw.badgeColor]}`}>
            {hw.badge}
          </span>
          <span className="text-2xl">{hw.icon}</span>
        </div>
        <h3 className="text-white text-xl font-black mb-1">{hw.name}</h3>
        <p className="text-slate-400 text-sm">{hw.tagline}</p>
      </div>

      {/* Specs */}
      <div className="px-6 pb-4 grid grid-cols-2 gap-2 text-xs">
        {[
          { label: 'Network', value: hw.network },
          { label: 'GPS', value: hw.gps },
          { label: 'MCU', value: hw.mcu },
          { label: 'Battery life', value: hw.batteryLife },
        ].map(s => (
          <div key={s.label} className="bg-white/5 rounded-lg p-2.5">
            <div className="text-slate-500 mb-0.5">{s.label}</div>
            <div className="text-white font-medium leading-tight">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Pros/Cons */}
      <div className="px-6 pb-4 grid grid-cols-2 gap-3">
        <div>
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Pros</div>
          <ul className="space-y-1">
            {hw.pros.map((p, i) => (
              <li key={i} className="text-slate-300 text-xs flex gap-1.5">
                <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">Cons</div>
          <ul className="space-y-1">
            {hw.cons.map((c, i) => (
              <li key={i} className="text-slate-300 text-xs flex gap-1.5">
                <span className="text-red-400 mt-0.5 shrink-0">✗</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOM toggle */}
      <div className="border-t border-white/10">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-3 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <span className="font-medium">Bill of Materials</span>
          <div className="flex items-center gap-3">
            <span className={`text-lg font-black ${badgeColors[hw.badgeColor].split(' ')[0]}`}>{hw.total}</span>
            <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
          </div>
        </button>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-5"
          >
            <table className="w-full text-xs">
              <tbody className="divide-y divide-white/5">
                {hw.bom.map((item, i) => (
                  <tr key={i}>
                    <td className="py-1.5 text-slate-400">{item.part}</td>
                    <td className="py-1.5 text-right text-white font-mono font-medium">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/20">
                  <td className="pt-2 text-white font-bold">Total</td>
                  <td className={`pt-2 text-right font-black font-mono text-base ${badgeColors[hw.badgeColor].split(' ')[0]}`}>{hw.total}</td>
                </tr>
              </tfoot>
            </table>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function GsmTracker() {
  const { title, subtitle, intro, stats, warning, hardware, architecture, simPlans, firmware, dataPayload } = gsmContent;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="pt-24 pb-16 px-4 border-b border-white/10 relative overflow-hidden">
        {/* Background pulse rings */}
        <div className="absolute top-12 right-8 opacity-10 pointer-events-none">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="absolute rounded-full border border-emerald-400"
              style={{
                width: `${i * 80}px`,
                height: `${i * 80}px`,
                top: `${-(i * 40) + 40}px`,
                left: `${-(i * 40) + 40}px`,
                animation: `ping ${1.5 + i * 0.5}s cubic-bezier(0,0,0.2,1) infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
          <div className="w-4 h-4 rounded-full bg-emerald-400 relative z-10" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Hardware Guide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-xl text-slate-300 mb-6 font-light"
          >
            {subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-400 leading-relaxed max-w-3xl"
          >
            {intro}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0d1424] border border-white/10 rounded-xl p-5 text-center"
            >
              <div className="text-4xl font-black text-emerald-400 mb-1" style={{ textShadow: '0 0 30px rgba(52,211,153,0.4)' }}>
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm">{s.label}</div>
              <div className="text-slate-500 text-xs mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning banner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="flex gap-4 bg-amber-400/5 border border-amber-400/30 rounded-xl p-5"
        >
          <span className="text-amber-400 text-xl shrink-0">⚠</span>
          <div>
            <div className="text-amber-400 font-bold text-sm mb-1">{warning.label}</div>
            <div className="text-slate-300 text-sm leading-relaxed">{warning.text}</div>
          </div>
        </motion.div>

        {/* Hardware Cards */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-2"
          >
            Hardware Options
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-8"
          >
            Three builds ranked by price. Click "Bill of Materials" on any card to see the full parts breakdown.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hardware.map((hw, i) => <HardwareCard key={hw.id} hw={hw} index={i} />)}
          </div>
        </section>

        {/* Architecture Flow */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-2"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-10"
          >
            Five-step signal chain from satellite to your dashboard.
          </motion.p>

          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-start gap-0">
            {architecture.map((step, i) => {
              const c = arcColors[step.color];
              return (
                <div key={i} className="flex items-start flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex-1 text-center px-2"
                  >
                    <div className={`w-14 h-14 rounded-2xl border bg-[#0d1424] flex items-center justify-center text-2xl mx-auto mb-3 ${c.text} border-current/30`}>
                      {step.icon}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${c.text}`}>
                      Step {step.step}
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{step.label}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{step.detail}</div>
                  </motion.div>
                  {i < architecture.length - 1 && (
                    <div className="flex flex-col items-center pt-7 shrink-0 w-6">
                      <div className="w-full h-px bg-white/20 relative">
                        <span className="absolute -right-1 -top-1.5 text-white/30 text-xs">›</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden space-y-3">
            {architecture.map((step, i) => {
              const c = arcColors[step.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 bg-[#0d1424] border border-white/10 rounded-xl p-4"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg shrink-0 ${c.text} border-current/30 bg-current/5`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${c.text}`}>Step {step.step}</div>
                    <div className="text-white font-semibold text-sm">{step.label}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{step.detail}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Data Payload */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-2"
          >
            Data Payload
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-6"
          >
            Each tracker fires a lightweight HTTP POST every 5 minutes — under 300 bytes including headers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#080d18] border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="text-slate-500 text-xs ml-2 font-mono">tracker firmware → traccar server</span>
            </div>
            <pre className="p-5 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto whitespace-pre">
              {dataPayload}
            </pre>
          </motion.div>
        </section>

        {/* SIM Plans */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-2"
          >
            SIM & Data Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-8"
          >
            A tracker sending every 5 minutes uses ~4 MB/month. Any of these plans is more than enough.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {simPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0d1424] border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-black text-lg">{plan.name}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${badgeColors[plan.tagColor]}`}>
                    {plan.tag}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { label: 'Upfront', value: plan.price },
                    { label: 'Recurring', value: plan.recurring },
                    { label: 'Data', value: plan.data },
                    { label: 'Coverage', value: plan.coverage },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span className="text-slate-500">{row.label}</span>
                      <span className="text-white font-medium text-right max-w-[55%]">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-xs text-slate-400 leading-relaxed">
                  {plan.note}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Firmware & Tools */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-2"
          >
            Firmware & Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-8"
          >
            All open-source. The full stack from chip to dashboard costs £0 in software.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {firmware.map((fw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-[#0d1424] border border-white/10 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <span className="text-sky-400 text-sm font-black">{fw.name[0]}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{fw.name}</div>
                  <div className="text-slate-400 text-xs mt-1 leading-relaxed">{fw.desc}</div>
                  <div className="text-slate-600 text-xs mt-1.5 font-mono">{fw.lang}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-900/30 to-sky-900/20 border border-emerald-500/20 rounded-2xl p-8 text-center"
        >
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-white text-2xl font-black mb-3">Ready to track for real?</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6 leading-relaxed">
            Order an A9G dev board (~£5), a 1NCE SIM (~£11), and a 18650 battery pack (~£3).
            Flash the TinyGSM firmware, point it at a free Traccar instance, and your first parcel
            is live-tracked in under an afternoon.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://www.traccar.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Get Traccar <span>→</span>
            </a>
            <a
              href="https://github.com/vshymanskyy/TinyGSM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              TinyGSM on GitHub
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
