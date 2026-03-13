import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-white">Ascent System</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Parcel Tracking Technologies — Strategic Analysis 2025.
              Prepared for internal strategic planning.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Overview' },
                { path: '/market', label: 'Market Landscape' },
                { path: '/technology', label: 'Technology Landscape' },
                { path: '/competitors', label: 'Competitor Analysis' },
                { path: '/recommendations', label: 'Recommendations' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Report</h4>
            <p className="text-slate-400 text-sm">UK Parcel Tracking Technologies</p>
            <p className="text-slate-500 text-xs mt-1">Strategic Analysis 2025</p>
            <p className="text-slate-500 text-xs mt-4">4.2B parcels · £376.6M at risk · 6 technologies compared</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-xs">© 2025 Ascent System. Strategic Intelligence Report.</p>
        </div>
      </div>
    </footer>
  );
}
