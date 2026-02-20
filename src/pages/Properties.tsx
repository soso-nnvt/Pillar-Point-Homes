import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { MapPin, TrendingUp, ShieldCheck, ChevronRight, Info } from 'lucide-react';
import { BlurImage } from '../components/BlurImage';
import PageTransition from '../components/PageTransition';

const properties = [
  {
    id: 1,
    name: "New Lekki Smart City Phase 1",
    location: "Lekki Corridor, Lagos",
    tier: "Smart City Plots",
    price: "₦15,000,000",
    roi: "250%",
    img: "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627143/Real-estate-developer-in-Lagos-1024x1024.png.bv.webp_imq0jf.webp",
    data: [
      { val: 10 }, { val: 15 }, { val: 25 }, { val: 40 }, { val: 65 }, { val: 100 }
    ],
    features: ["C of O Title", "Smart Infrastructure", "24/7 Power"]
  },
  {
    id: 2,
    name: "Araromi Smart City",
    location: "Ibeju-Lekki, Lagos",
    tier: "Smart City Plots",
    price: "₦8,500,000",
    roi: "400%",
    img: "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627326/zylushomespCwmqaAysDzk11-1024x575_st5g8r.jpg",
    data: [
      { val: 5 }, { val: 12 }, { val: 20 }, { val: 35 }, { val: 60 }, { val: 120 }
    ],
    features: ["Gazette Title", "Eco-Friendly", "Waterfront Access"]
  },
  {
    id: 3,
    name: "The Pillar Buy-Back Scheme",
    location: "Strategic Locations",
    tier: "Buy It Back Schemes",
    price: "₦5,000,000 Min",
    roi: "45% Annual",
    img: "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627533/cf0bf90016e314294fb4a765a237221fl-b574619593rd-w960_h720_fe1w0q.jpg",
    data: [
      { val: 20 }, { val: 25 }, { val: 32 }, { val: 40 }, { val: 48 }, { val: 58 }
    ],
    features: ["Guaranteed Exit", "Fixed Returns", "Secured Assets"]
  },
  {
    id: 4,
    name: "Victoria Island Premium Estates",
    location: "VI, Lagos",
    tier: "Premium Estates",
    price: "₦150,000,000",
    roi: "120%",
    img: "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627414/661e39652a6cb7ab105b3bc5cdb31510a25d98f7_kf3lqa.jpg",
    data: [
      { val: 80 }, { val: 85 }, { val: 92 }, { val: 98 }, { val: 105 }, { val: 115 }
    ],
    features: ["Governor's Consent", "Ultra-Luxury", "Prime Location"]
  },
  {
    id: 5,
    name: "Epe Smart City Plots",
    location: "Epe, Lagos",
    tier: "Smart City Plots",
    price: "₦4,500,000",
    roi: "500%",
    img: "https://res.cloudinary.com/djfqa4llc/image/upload/v1771627531/Screenshot_202024-10-03_20125334.png_uv0m2o.webp",
    data: [
      { val: 2 }, { val: 8 }, { val: 18 }, { val: 35 }, { val: 70 }, { val: 150 }
    ],
    features: ["Registered Survey", "Fast Appreciation", "New Airport Proximity"]
  }
];

const ROIChart = ({ data }: { data: any[] }) => (
  <div className="h-16 w-32">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line 
          type="monotone" 
          dataKey="val" 
          stroke="#000165" 
          strokeWidth={2} 
          dot={false} 
          isAnimationActive={true}
        />
        <YAxis hide domain={['dataMin', 'dataMax']} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Properties = () => {
  const [filter, setFilter] = useState('All');
  const tiers = ['All', 'Buy It Back Schemes', 'Smart City Plots', 'Premium Estates'];

  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(p => p.tier === filter);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-midnight mb-6 leading-[1.1]"
          >
            Investment Portfolio
          </motion.h1>
          <p className="text-midnight/60 text-lg max-w-2xl mb-10">
            Curated real estate opportunities designed for maximum capital appreciation and long-term wealth preservation.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase transition-all border ${
                  filter === t 
                    ? 'bg-midnight text-white border-midnight' 
                    : 'bg-white text-midnight/60 border-midnight/10 hover:border-midnight/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((prop) => (
              <motion.div
                layout
                key={prop.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-midnight/5 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <BlurImage 
                    src={prop.img} 
                    alt={prop.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-midnight">
                    {prop.tier}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-midnight text-white p-3 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-green-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">ROI Potential</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-display font-bold">{prop.roi}</span>
                      <ROIChart data={prop.data} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-midnight/40 text-xs font-semibold uppercase tracking-widest mb-3">
                    <MapPin size={14} /> {prop.location}
                  </div>
                  <h3 className="font-display text-2xl text-midnight mb-6 leading-tight group-hover:text-midnight/80 transition-colors">
                    {prop.name}
                  </h3>
                  
                  <div className="space-y-3 mb-8">
                    {prop.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-midnight/60">
                        <ShieldCheck size={16} className="text-midnight" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-midnight/5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 mb-1">Starting From</p>
                      <p className="text-xl font-display font-bold text-midnight">{prop.price}</p>
                    </div>
                    <button className="h-12 w-12 rounded-full bg-midnight text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Site Map Section */}
        <section className="bg-midnight rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white/40 uppercase tracking-[0.3em] text-sm font-semibold mb-4">Development Progress</h2>
              <h3 className="font-display text-4xl md:text-5xl mb-8 leading-[1.1]">Interactive Site Map: <br /> New Lekki Corridor</h3>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Experience the growth of Lagos's most ambitious smart city project. Click on hotspots to view live drone footage and development milestones.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Phase 1: Infrastructure", status: "95% Complete" },
                  { label: "Phase 2: Residential Hub", status: "60% Complete" },
                  { label: "Phase 3: Commercial District", status: "Planning" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group cursor-crosshair">
              <img 
                src="https://picsum.photos/seed/drone/1200/1000" 
                alt="Drone View" 
                className="rounded-3xl w-full h-[500px] object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />
              {/* Simulated Hotspots */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/4 left-1/3 h-6 w-6 bg-white rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="h-2 w-2 bg-midnight rounded-full" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-midnight text-[10px] font-bold px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Main Gate House
                </div>
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute bottom-1/3 right-1/4 h-6 w-6 bg-white rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="h-2 w-2 bg-midnight rounded-full" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-midnight text-[10px] font-bold px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Smart Power Hub
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors rounded-3xl" />
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center gap-3">
                <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Live Drone Feed</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </PageTransition>
  );
};

export default Properties;
