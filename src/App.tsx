import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Home from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import Contact from './pages/Contact';

const LOGO_URL = "https://res.cloudinary.com/djfqa4llc/image/upload/v1771626333/imgi_2_336815376_603226418328153_6483497326909802276_n_yhrqcy.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-header scrolled py-3' : 'glass-header py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Pillar Point Homes" className="h-12 w-12 object-cover rounded-full border border-white/20" />
          <span className={`font-display text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-midnight'}`}>
            PILLAR POINT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                location.pathname === link.path 
                  ? (isScrolled ? 'text-white underline underline-offset-8' : 'text-midnight underline underline-offset-8') 
                  : (isScrolled ? 'text-white/70 hover:text-white' : 'text-midnight/70 hover:text-midnight')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="double-border-btn text-xs uppercase tracking-widest">
            Invest Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-white' : 'text-midnight'} /> : <Menu className={isScrolled ? 'text-white' : 'text-midnight'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-midnight text-white p-10 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-display uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="double-border-btn w-full text-center"
            >
              Invest Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-midnight text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
      <div className="col-span-1 md:col-span-2">
        <img src={LOGO_URL} alt="Pillar Point Homes" className="h-20 w-20 object-cover rounded-full mb-6 border border-white/20" />
        <h2 className="font-display text-3xl mb-4">Pillar Point Homes</h2>
        <p className="text-white/60 max-w-md leading-relaxed">
          Building Africa’s No. 1 Premier Real Estate Legacy. We specialize in Smart City developments, land banking, and premium estates across the most strategic corridors in Lagos.
        </p>
      </div>
      <div>
        <h3 className="font-semibold uppercase tracking-widest mb-6 text-sm">Navigation</h3>
        <ul className="flex flex-col gap-4 text-white/60">
          <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/properties" className="hover:text-white transition-colors">Properties</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold uppercase tracking-widest mb-6 text-sm">Contact Hub</h3>
        <ul className="flex flex-col gap-4 text-white/60">
          <li className="flex items-center gap-3"><MapPin size={18} /> Lekki, Lagos, Nigeria</li>
          <li className="flex items-center gap-3"><Phone size={18} /> +234 800 PILLAR</li>
          <li className="flex items-center gap-3"><Mail size={18} /> info@pillarpointhomes.com</li>
        </ul>
        <div className="flex gap-4 mt-8">
          <a href="https://www.instagram.com/pillarpointhomes/" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-white/60 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://web.facebook.com/people/Pillar-Point-Homes/" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-white/60 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/pillar-point-homes/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-white/60 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://www.youtube.com/@pillarpointhomes" target="_blank" rel="noopener noreferrer">
            <Youtube className="text-white/60 hover:text-white cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs uppercase tracking-widest">
      <p>© 2026 Pillar Point Homes. RC 1751472. All Rights Reserved.</p>
      <div className="flex gap-8">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-8 text-center">
      <p className="font-space text-[10px] text-white/40 uppercase tracking-[0.3em]">
        POWERED BY <a href="https://netnovatelabs.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NETNOVATELABS</a>
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Concierge */}
        <motion.a 
          href="https://wa.me/2349041110004?text=Hello%20Pillar%20Point%20Homes%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20Lekki%20Smart%20City%20investments.%20Could%20you%20provide%20more%20details%3F" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ width: '60px' }}
          whileHover={{ width: '280px' }}
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white h-[60px] rounded-full shadow-2xl flex items-center justify-start overflow-hidden group px-[18px] transition-all duration-300"
        >
          <MessageCircle size={24} className="shrink-0" />
          <span className="ml-4 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Speak with a Consultant
          </span>
        </motion.a>
      </div>
    </Router>
  );
}
