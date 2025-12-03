import { motion } from "framer-motion";
import { Linkedin, Mail, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Talk.</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Interested in discussing opportunities? Let's connect about CRM/ERP roles, consulting engagements, or collaborative projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://www.linkedin.com/in/devansh-parikh-975a5a175" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white mb-3">
                <Linkedin className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
              <p className="font-semibold text-center text-sm group-hover:text-primary transition-colors">Devansh Parikh</p>
            </a>
            
            <a 
              href="mailto:devanshparikh15@gmail.com"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-400 mb-1">Email</p>
              <p className="font-semibold text-center text-sm group-hover:text-primary transition-colors">devanshparikh15@gmail.com</p>
            </a>
            
            <a 
              href="https://github.com/DevanshParikh15" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white mb-3">
                <Github className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-400 mb-1">GitHub</p>
              <p className="font-semibold text-center text-sm group-hover:text-primary transition-colors">DevanshParikh15</p>
            </a>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-400 mb-1">Location</p>
              <p className="font-semibold text-center text-sm">Calgary, Alberta, Canada</p>
            </div>
          </div>
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Devansh Parikh. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
