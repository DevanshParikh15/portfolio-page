import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Devansh specializes in <span className="font-semibold text-primary">Microsoft Dynamics 365</span>—particularly Customer Service, Field Service, and Business Central. 
            He helps organizations modernize operations, improve service delivery, and streamline end-to-end processes. 
            With experience across enterprise consulting, AI product development, and CRM implementation, he brings a blend of 
            technical, functional, and business strategy skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
