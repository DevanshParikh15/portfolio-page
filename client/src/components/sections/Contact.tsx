import { motion } from "framer-motion";
import { Linkedin, Mail, Github, MapPin } from "lucide-react";
import background from "@assets/generated_images/contact_section_background.jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background} 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-3" 
        />
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl z-0" />

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
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
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
              <p className="font-semibold text-center text-base text-slate-900 group-hover:text-white transition-colors">devanshparikh15@gmail.com</p>
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

        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-slate-500 text-base">
          <p>© {new Date().getFullYear()} Devansh Parikh. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
