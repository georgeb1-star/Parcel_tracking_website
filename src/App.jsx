import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Market from './pages/Market';
import Technology from './pages/Technology';
import Competitors from './pages/Competitors';
import Recommendations from './pages/Recommendations';
import Problems from './pages/Problems';
import GsmTracker from './pages/GsmTracker';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-navy-900">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/competitors" element={<Competitors />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/gsm-tracker" element={<GsmTracker />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
