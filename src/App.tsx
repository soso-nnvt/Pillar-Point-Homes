import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react';
import Home from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppIcon } from './components/WhatsAppIcon';

const LOGO_URL = "https://res.cloudinary.com/djfqa4llc/image/upload/v1771626333/imgi_2_336815376_603226418328153_6483497326909802276_n_yhrqcy.jpg";
const WHATSAPP_URL = "https://wa.me/2349041110004?text=Hello%20Pillar%20Point%20Homes%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20Lekki%20Smart%20City%20investments.%20Could%20you%20provide%20more%20details%3F";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
};

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
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
          <button 
            className="md:hidden z-[60] relative" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={isScrolled ? 'text-white' : 'text-midnight'} size={32} />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-10 pt-32 text-white h-screen w-screen"
            style={{ backgroundColor: '#000165' }}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="double-border-btn w-64 text-center mt-4"
                >
                  Invest Now
                </Link>
              </motion.div>
            </div>

            <div className="flex flex-col items-center gap-8 w-full">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-2">The Physical Hub</p>
                <p className="text-xs uppercase tracking-widest text-white/60 max-w-[280px] leading-relaxed font-sans">
                  Beechwood Estate, Plot 25B Kiyawa Close, Off College Cres, Ibeju Lekki, Lagos.
                </p>
              </div>
              
              <div className="flex gap-8">
                <a href="https://www.instagram.com/pillarpointhomes/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-white/60 hover:text-white transition-colors" size={24} />
                </a>
                <a href="https://web.facebook.com/people/Pillar-Point-Homes/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="text-white/60 hover:text-white transition-colors" size={24} />
                </a>
                <a href="https://www.linkedin.com/company/pillar-point-homes/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-white/60 hover:text-white transition-colors" size={24} />
                </a>
                <a href="https://www.youtube.com/@pillarpointhomes" target="_blank" rel="noopener noreferrer">
                  <Youtube className="text-white/60 hover:text-white transition-colors" size={24} />
                </a>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">RC 1751472</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
      <p className="font-space text-[10px] text-white/80 font-bold uppercase tracking-[0.3em]">
        POWERED BY <a href="https://netnovatelabs.com.ng" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:opacity-100 opacity-80 transition-opacity hover:underline decoration-[#D4AF37] underline-offset-4">NETNOVATELABS</a>
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProgressBar />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Concierge */}
        <motion.a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ width: '60px' }}
          whileHover={{ width: '280px' }}
          className="fixed bottom-8 right-8 z-50 bg-midnight text-white h-[60px] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-start overflow-hidden group px-[18px] transition-all duration-300 border border-white/10"
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0" />
          <span className="ml-4 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Speak with a Consultant
          </span>
        </motion.a>
      </div>
    </Router>
  );
}
