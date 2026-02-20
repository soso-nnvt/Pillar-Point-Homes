import React from 'react';
import { motion } from 'motion/react';
import { Quote, Award, Users, Building2, CheckCircle2 } from 'lucide-react';
import { BlurImage } from '../components/BlurImage';

const About = () => {
  return (
    <div className="pt-32">
      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-midnight/40 uppercase tracking-[0.3em] text-sm font-semibold mb-6">Our Legacy</h2>
            <h1 className="font-display text-5xl md:text-7xl text-midnight mb-8 leading-[1.1]">
              Pioneering the <br />
              <span className="italic">Future of Lagos</span> <br />
              Real Estate.
            </h1>
            <p className="text-midnight/60 text-lg leading-relaxed mb-10">
              Founded on the principles of integrity, security, and visionary urban planning, Pillar Point Homes has emerged as the premier destination for strategic land banking in Nigeria. We don't just sell plots; we architect the foundations of Africa's most advanced smart cities.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-3xl text-midnight mb-2">10+</h4>
                <p className="text-xs uppercase tracking-widest text-midnight/40 font-bold">Years of Excellence</p>
              </div>
              <div>
                <h4 className="font-display text-3xl text-midnight mb-2">RC 1751472</h4>
                <p className="text-xs uppercase tracking-widest text-midnight/40 font-bold">Verified Corporate Entity</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
              <BlurImage 
                src="https://res.cloudinary.com/djfqa4llc/image/upload/v1771627533/Real-Estate-Expert-Educates-on-Rent-to-Own_of4k09.jpg" 
                alt="Real Estate Expert" 
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-midnight text-white p-12 rounded-[2rem] hidden md:block max-w-xs">
              <Quote className="text-white/20 mb-4" size={40} />
              <p className="font-display text-xl leading-relaxed italic">
                "Our mission is to bridge the gap between aspiration and ownership."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO's Corner */}
      <section className="bg-midnight py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white/40 uppercase tracking-[0.3em] text-sm font-semibold mb-12"
              >
                The Visionary
              </motion.h2>
              
              <div className="space-y-12">
                {[
                  "We don’t just sell land—we build futures.",
                  "Integrity is the only currency that never devalues.",
                  "Lagos is the heartbeat of African commerce; we provide the foundation.",
                  "Real estate is the most secure bridge to generational wealth."
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6 items-start"
                  >
                    <span className="text-white/20 font-display text-4xl">0{i+1}</span>
                    <p className="font-display text-3xl md:text-4xl text-white font-light italic leading-tight">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-20"
              >
                <h3 className="text-white font-display text-3xl mb-1">Ayodele Momodu</h3>
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">CEO & Founder, Pillar Point Homes</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/10">
                <BlurImage 
                  src="https://res.cloudinary.com/djfqa4llc/image/upload/v1771627837/624319819_18085709801157354_973060275119910842_n.jpg_jlclkt.jpg" 
                  alt="Ayodele Momodu" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar Stats Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-midnight/40 uppercase tracking-[0.3em] text-sm font-semibold mb-4">By The Numbers</h2>
            <p className="font-display text-4xl md:text-5xl text-midnight">A Decade of Impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Community Members", value: "31.4K+", icon: Users, desc: "A growing network of smart investors across the globe." },
              { label: "Landmark Projects", value: "99+", icon: Building2, desc: "Successfully delivered estates and smart city phases." },
              { label: "RC Verification", value: "1751472", icon: Award, desc: "Fully registered and compliant with Nigerian corporate laws." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-gray-50 rounded-[3rem] border border-midnight/5 text-center hover:bg-midnight hover:text-white transition-all duration-500 group"
              >
                <stat.icon size={48} className="mx-auto mb-8 text-midnight group-hover:text-white transition-colors" />
                <h3 className="font-display text-5xl mb-4">{stat.value}</h3>
                <h4 className="text-sm uppercase tracking-widest font-bold mb-6 opacity-60">{stat.label}</h4>
                <p className="text-sm leading-relaxed opacity-40 group-hover:opacity-70">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 bg-midnight rounded-[4rem] p-12 md:p-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-white/40 uppercase tracking-[0.3em] text-sm font-semibold mb-8">Our Core Values</h2>
              <div className="space-y-10">
                {[
                  { title: "Radical Transparency", desc: "We provide full documentation and legal verification for every square inch of land we sell." },
                  { title: "Future-Proof Planning", desc: "Our smart cities are designed with 50-year urban growth projections in mind." },
                  { title: "Investor-First Mindset", desc: "We prioritize capital appreciation and exit strategies for our community members." }
                ].map((value, i) => (
                  <div key={i} className="flex gap-6">
                    <CheckCircle2 className="text-white shrink-0" size={28} />
                    <div>
                      <h3 className="font-display text-2xl mb-2">{value.title}</h3>
                      <p className="text-white/50 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-white/10 flex items-center justify-center animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-midnight p-4">
                    <Award size={32} />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-midnight p-4">
                    <ShieldCheck size={32} />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://res.cloudinary.com/djfqa4llc/image/upload/v1771626333/imgi_2_336815376_603226418328153_6483497326909802276_n_yhrqcy.jpg" alt="Logo" className="h-24 w-24 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ShieldCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default About;
