import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, TrendingUp, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

import { BlurImage } from '../components/BlurImage';

const LOGO_URL = "https://res.cloudinary.com/djfqa4llc/image/upload/v1771626333/imgi_2_336815376_603226418328153_6483497326909802276_n_yhrqcy.jpg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const HERO_BG = "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627533/casa-venta-residencial-el-tigre-nuevo-nayarit-vista-lagos_b3ffcb.jpg";
  const LEKKI_PLOT = "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627143/Real-estate-developer-in-Lagos-1024x1024.png.bv.webp_imq0jf.webp";
  const ARAROMI_PHASE1 = "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627326/zylushomespCwmqaAysDzk11-1024x575_st5g8r.jpg";

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row">
        {/* Left Panel - Fixed-ish */}
        <div className="w-full md:w-1/2 bg-midnight flex flex-col justify-center px-6 md:px-20 py-20 z-10 relative">
          {/* Subtle Overlay for text pop */}
          <div className="absolute inset-0 bg-midnight/20 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 relative z-10 md:mb-12"
          >
            <img src={LOGO_URL} alt="Pillar Point Logo" className="h-20 w-20 md:h-32 md:w-32 object-cover rounded-full border-2 border-white/20" />
          </motion.div>
          
          <div className="md:pr-[20%] relative z-10">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-4xl md:text-7xl text-white leading-[1.1] mb-8"
            >
              Building Africa’s <br />
              <span className="italic font-normal">No. 1 Premier</span> <br />
              Real Estate Legacy.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white/60 text-lg max-w-md mb-10 leading-relaxed"
            >
              Secure your future with strategic land banking and smart city investments in the heart of Lagos's most explosive growth corridors.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/properties" className="double-border-btn group">
                Explore Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Panel - Scrolling Gallery with Featured Background */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden">
          <BlurImage 
            src={HERO_BG} 
            alt="Featured Estate" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-midnight/20" /> {/* 20% Midnight Cobalt Overlay */}
          
          <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4 animate-vertical-scroll opacity-40">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-[400px] w-full overflow-hidden rounded-lg">
                <img 
                  src={`https://picsum.photos/seed/lagos${i}/800/1200`} 
                  alt="Lagos Skyline" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-midnight/50 pointer-events-none" />
        </div>
      </section>

      {/* Land Banking Explainer - Horizontal Scroll */}
      <section className="bg-midnight py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            The Investment Philosophy
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white font-light leading-[1.1] max-w-4xl"
          >
            Land banking is the ultimate hedge against inflation. In Lagos, land doesn't just appreciate; it <span className="italic">multiplies</span> in value.
          </motion.div>
        </div>

        <div className="flex gap-8 px-6 overflow-x-auto hide-scrollbar pb-10">
          {[
            { title: "Security", desc: "RC 1751472 Verified. Every plot is legally secured and documented.", icon: Shield },
            { title: "Growth", desc: "Strategic positioning in New Lekki & Araromi Smart City corridors.", icon: TrendingUp },
            { title: "Vision", desc: "We don't just sell land; we build the infrastructure for future generations.", icon: Map },
            { title: "Legacy", desc: "Join 31.4K+ members building wealth through Pillar Point.", icon: Shield },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <item.icon className="text-white mb-6" size={40} />
              <h3 className="text-white text-2xl font-display mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Spotlight Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-midnight/40 uppercase tracking-[0.3em] text-sm font-semibold mb-4">Featured Developments</h2>
              <p className="font-display text-4xl md:text-5xl text-midnight leading-[1.1]">The Smart City Frontier</p>
            </div>
            <Link to="/properties" className="hidden md:flex items-center gap-2 text-midnight font-semibold border-b-2 border-midnight pb-1">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: "New Lekki Smart City", location: "Lekki Corridor", img: LEKKI_PLOT },
              { name: "Araromi Smart City", location: "Ibeju-Lekki", img: ARAROMI_PHASE1 },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="relative aspect-video group overflow-hidden rounded-3xl cursor-pointer"
              >
                <BlurImage 
                  src={project.img} 
                  alt={project.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-12 w-full">
                  <p className="text-white/60 uppercase tracking-widest text-xs mb-2">{project.location}</p>
                  <h3 className="text-white font-display text-4xl mb-6">{project.name}</h3>
                  <Link to="/properties" className="double-border-btn opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-midnight py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Community Members", value: "31.4K+" },
            { label: "Landmark Projects", value: "99+" },
            { label: "RC Verification", value: "1751472" },
            { label: "ROI Potential", value: "300%+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-white font-display text-4xl md:text-5xl mb-2">{stat.value}</p>
              <p className="text-white/40 uppercase tracking-widest text-[10px] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
