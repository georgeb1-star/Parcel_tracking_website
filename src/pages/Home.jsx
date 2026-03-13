import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import StatCard from '../components/StatCard';
import { heroContent } from '../content/hero';

function HeroStat({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl font-black text-sky-400 stat-glow mb-2">{stat.value}</div>
      <div className="text-white font-semibold text-sm">{stat.label}</div>
      <div className="text-slate-500 text-xs mt-1">{stat.sublabel}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #818cf8, transparent)' }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-sky-400/10 border border-sky-400/30 text-sky-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight"
          >
            {heroContent.headline.split(' ').slice(0, 2).join(' ')}
            <span className="block gradient-text">{heroContent.headline.split(' ').slice(2).join(' ')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-300 font-light mb-4 max-w-3xl mx-auto"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {heroContent.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to={heroContent.ctaLink}
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 text-lg"
            >
              {heroContent.cta}
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="w-6 h-9 border-2 border-slate-600 rounded-full flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-sky-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-800/50 border-y border-white/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {heroContent.heroStats.map((stat, i) => (
              <HeroStat key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Explore the Full Analysis</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Five sections. One strategic picture. Start anywhere — or follow the story from market to recommendation.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/market', icon: '📊', title: 'Market Landscape', desc: 'Consumer stats, retailer needs, and the theft crisis driving change', color: '#38bdf8' },
              { to: '/technology', icon: '🛰️', title: 'Technology', desc: 'Six tracking technologies compared across cost, range, and automation', color: '#a78bfa' },
              { to: '/competitors', icon: '🔍', title: 'Competitors', desc: 'Royal Mail and Detrack — where they win, where they fail, where Ascent wins', color: '#f472b6' },
              { to: '/recommendations', icon: '🎯', title: 'Recommendations', desc: 'Three strategic options, ranked and verdict-ready', color: '#34d399' },
            ].map((card, i) => (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={card.to}
                  className="block bg-navy-800 border border-white/10 hover:border-white/20 rounded-xl p-6 h-full transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-sky-400 transition-colors">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                  <div className="mt-4 text-sky-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <span>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
