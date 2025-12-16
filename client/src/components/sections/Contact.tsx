import { motion } from "framer-motion";
import { Linkedin, Mail, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background (decorative gradients only) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
      </div>
      
      {/* Background Decoration */}
      

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Talk.</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Interested in discussing opportunities? Let's connect about CRM/ERP roles, consulting engagements, or collaborative projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://www.linkedin.com/in/devansh-parikh-975a5a175" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white hover:bg-slate-900 border border-slate-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white mb-3">
                <Linkedin className="w-6 h-6" />
              </div>
              <p className="text-base text-slate-600 group-hover:text-slate-300 mb-1">LinkedIn</p>
              <p className="font-semibold text-center text-base text-slate-900 group-hover:text-white transition-colors">Devansh Parikh</p>
            </a>
            
            <a 
              href="mailto:devanshparikh15@gmail.com"
              className="flex flex-col items-center p-6 rounded-xl bg-white hover:bg-slate-900 border border-slate-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-base text-slate-600 group-hover:text-slate-300 mb-1">Email</p>
              <p className="font-semibold text-center text-base text-slate-900 group-hover:text-white transition-colors">devanshparikh15@gmail .com</p>
            </a>
            
            <a 
              href="https://github.com/DevanshParikh15" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white hover:bg-slate-900 border border-slate-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white mb-3">
                <Github className="w-6 h-6" />
              </div>
              <p className="text-base text-slate-600 group-hover:text-slate-300 mb-1">GitHub</p>
              <p className="font-semibold text-center text-base text-slate-900 group-hover:text-white transition-colors">DevanshParikh15</p>
            </a>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-white hover:bg-slate-900 border border-slate-200 transition-all group">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-base text-slate-600 group-hover:text-slate-300 mb-1">Location</p>
              <p className="font-semibold text-center text-base text-slate-900 group-hover:text-white">Calgary, Alberta, Canada</p>
            </div>
          </div>
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-500 text-base">
          {/* Copyright removed per design preference */}
        </footer>
      </div>
    </section>
  );
}
