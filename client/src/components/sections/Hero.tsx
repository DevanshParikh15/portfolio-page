import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { RESUME_LINK } from "@/config/resume";
import headshot from "@assets/Screenshot_2024-11-18_at_11.17.33_AM_1764716108785.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background (logos only, no photographic backgrounds) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/assets/microsoft.svg" alt="" className="section-bg-logo absolute top-8 left-8 w-36" data-default-opacity="0.25" style={{ filter: 'saturate(1.2) brightness(1.15)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
      </div>
        {/* Background (decorative gradients only) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
        </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-lg font-semibold tracking-wide w-fit mx-auto lg:mx-0 border border-green-200">
            🔍 Currently Open to Opportunities
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span
              style={{
                background: 'linear-gradient(90deg, var(--ms-blue), var(--ms-sky))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="bg-clip-text"
            >
              Digital Transformation Consultant
            </span>
          </h1>

          <h1 className="text-2xl lg:text-4xl font-bold leading-tight tracking-tight">
            <span
              style={{
                background: 'linear-gradient(90deg, var(--ms-sky), var(--ms-yellow))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="bg-clip-text"
            >
              Microsoft Dynamics 365 & Power Platform Ecosystem
            </span>
          </h1>

          <h1 className="text-xl lg:text-2xl font-bold leading-tight tracking-tight">
            <span
              style={{
                background: 'linear-gradient(90deg, var(--ms-green), var(--ms-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="bg-clip-text"
            >
              Seeking New Role across CRM, ERP, Consulting, and Digital Transformation...
            </span>
          </h1>

          {/* <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            CRM/ERP specialist ready to drive digital transformation. Expertise in Dynamics 365, Salesforce, and end-to-end implementation strategy.
          </p>*/}
          
          
           
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto lg:mr-0"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-[2rem] border-2 border-primary/20 z-0" />
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[2rem] bg-blue-50 z-0" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-white">
              <img 
                src={headshot} 
                alt="Devansh Parikh" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold">Skilled Microsoft</p>
                <p className="text-base font-bold text-slate-900">CRM & ERP Professional</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
