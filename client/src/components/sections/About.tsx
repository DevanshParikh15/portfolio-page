import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Me</h2>
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
            <p>
              I'm a CRM & ERP specialist with proven expertise in <span className="font-semibold text-primary">Microsoft Dynamics 365</span> implementation and consulting. I've successfully led digital transformations across Customer Service, Field Service, and Business Central modules, helping organizations streamline operations and boost customer engagement.
            </p>
            <p>
              My background includes hands-on experience with <span className="font-semibold text-sky-600">Salesforce Service Cloud</span> and Field Service Lightning, enabling me to architect solutions in multi-CRM environments. I'm passionate about bridging the gap between business needs and technical implementation.
            </p>
            <p>
              <span className="text-green-600 font-semibold">I'm actively seeking a role</span> where I can leverage my consulting background, technical skills, and strategic vision to drive enterprise CRM/ERP projects. I'm open to opportunities in consulting, project management, solutions architecture, or client success leadership.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
