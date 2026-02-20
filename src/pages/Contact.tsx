import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Calendar, Briefcase, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const WHATSAPP_URL = "https://wa.me/2349041110004?text=Hello%20Pillar%20Point%20Homes%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20Lekki%20Smart%20City%20investments.%20Could%20you%20provide%20more%20details%3F";

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
    <PageTransition>
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
                  <h4 className="font-bold text-midnight uppercase tracking-[0.2em] text-xs mb-2">Lagos Headquarters</h4>
                  <p className="text-midnight/60 font-sans tracking-wide">Beechwood Estate, Plot 25B Kiyawa Close, Off College Cres, Ibeju Lekki, Lagos.</p>
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
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="double-border-btn w-full flex items-center justify-center gap-3 bg-green-600 border-green-500"
              >
                <WhatsAppIcon className="w-5 h-5" />
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

      {/* Google Maps Section */}
      <section className="mt-32 max-w-7xl mx-auto px-6">
        <div className="relative h-[500px] rounded-[4rem] overflow-hidden border border-midnight/10 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728212137644!2d3.8242!3d6.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf90000000000%3A0x0!2zNsKwMjUnNDAuOCJOIDPCsDQ5JzI3LjEiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pillar Point Homes Location"
            className="grayscale contrast-125 brightness-90"
          ></iframe>
          
          <div className="absolute top-10 left-10 flex flex-col gap-4 pointer-events-none">
            <div className="bg-midnight/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
              <Clock className="text-white" size={18} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Mon - Sat: 9AM - 6PM</span>
            </div>
            <div className="bg-midnight/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
              <Briefcase className="text-white" size={18} />
              <span className="text-white text-xs font-bold uppercase tracking-widest">RC 1751472</span>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
