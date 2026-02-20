import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Calendar, Briefcase, Clock } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Smart City Plots',
    budget: '₦5M - ₦20M',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent. A Priority Concierge will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-midnight/40 uppercase tracking-[0.3em] text-sm font-semibold mb-6">The Concierge</h2>
            <h1 className="font-display text-5xl md:text-7xl text-midnight mb-8 leading-tight">
              Begin Your <br />
              <span className="italic">Investment Journey</span>
            </h1>
            <p className="text-midnight/60 text-lg leading-relaxed mb-12 max-w-lg">
              Our priority consultants are ready to guide you through the complexities of the Lagos real estate market. Secure your legacy today.
            </p>

            <div className="space-y-10 mb-16">
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-2xl bg-midnight/5 flex items-center justify-center text-midnight shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight uppercase tracking-widest text-xs mb-2">Lagos Headquarters</h4>
                  <p className="text-midnight/60">Plot 12, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-2xl bg-midnight/5 flex items-center justify-center text-midnight shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight uppercase tracking-widest text-xs mb-2">Priority Line</h4>
                  <p className="text-midnight/60">+234 800 PILLAR (745527)</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-2xl bg-midnight/5 flex items-center justify-center text-midnight shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-midnight uppercase tracking-widest text-xs mb-2">Email Inquiry</h4>
                  <p className="text-midnight/60">concierge@pillarpointhomes.com</p>
                </div>
              </div>
            </div>

            <div className="bg-midnight p-10 rounded-[3rem] text-white">
              <h3 className="font-display text-2xl mb-4">Instant Consultation</h3>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                Prefer a quicker response? Connect directly with our investment team on WhatsApp for real-time property updates and site visit scheduling.
              </p>
              <a 
                href="https://wa.me/2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="double-border-btn w-full flex items-center justify-center gap-3 bg-green-600 border-green-500"
              >
                <MessageCircle size={20} />
                WhatsApp Consultant
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-[4rem] shadow-2xl shadow-midnight/5 border border-midnight/5 p-8 md:p-16"
          >
            <h3 className="font-display text-3xl text-midnight mb-10">Priority Inquiry Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none"
                    placeholder="+234 ..."
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Investment Interest</label>
                  <select 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none appearance-none"
                    value={formState.interest}
                    onChange={(e) => setFormState({...formState, interest: e.target.value})}
                  >
                    <option>Smart City Plots</option>
                    <option>Buy It Back Schemes</option>
                    <option>Premium Estates</option>
                    <option>Commercial Land</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Preferred Inspection Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none"
                      value={formState.date}
                      onChange={(e) => setFormState({...formState, date: e.target.value})}
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-midnight/20 pointer-events-none" size={20} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Investment Budget</label>
                  <select 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none appearance-none"
                    value={formState.budget}
                    onChange={(e) => setFormState({...formState, budget: e.target.value})}
                  >
                    <option>₦5M - ₦20M</option>
                    <option>₦20M - ₦50M</option>
                    <option>₦50M - ₦100M</option>
                    <option>₦100M+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-midnight/40 ml-1">Additional Requirements</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-midnight transition-all outline-none resize-none"
                  placeholder="Tell us more about your investment goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="double-border-btn w-full py-5 text-lg group">
                Submit Priority Inquiry
                <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
              
              <p className="text-center text-[10px] text-midnight/30 uppercase tracking-widest font-bold">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Stylized Map Section */}
      <section className="mt-32 max-w-7xl mx-auto px-6">
        <div className="relative h-[500px] rounded-[4rem] overflow-hidden group">
          <img 
            src="https://res.cloudinary.com/djfqa4llc/image/upload/v1771627533/casa-venta-residencial-el-tigre-nuevo-nayarit-vista-lagos_b3ffcb.jpg" 
            alt="Lagos Map" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-midnight/40" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-sm border border-midnight/10"
            >
              <div className="h-20 w-20 bg-midnight rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-display text-2xl text-midnight mb-2">The Lagos Hub</h3>
              <p className="text-midnight/60 text-sm mb-8">
                Visit our experience center in Lekki Phase 1 to view physical site models and documentation.
              </p>
              <button className="text-midnight font-bold uppercase tracking-widest text-xs border-b-2 border-midnight pb-1 hover:text-midnight/70 transition-colors">
                Get Directions
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-10 flex gap-4">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
              <Clock className="text-white" size={18} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Mon - Sat: 9AM - 6PM</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
              <Briefcase className="text-white" size={18} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">RC 1751472</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
