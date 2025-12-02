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
              Devansh is a CRM & ERP specialist with deep expertise in <span className="font-semibold text-primary">Microsoft Dynamics 365</span>—particularly Customer Service, Field Service, and Business Central. He helps organizations modernize service operations, optimize field processes, and improve customer engagement through scalable, well-designed business applications. Beyond Dynamics, he brings hands-on experience in <span className="font-semibold text-sky-600">Salesforce Service Cloud</span> and Field Service Lightning, enabling him to bridge multi-CRM environments and support hybrid enterprise ecosystems.
            </p>
            <p>
              With a background spanning consulting, AI-driven product development, and business application research, Devansh blends functional design, technical understanding, and strategic problem-solving to deliver solutions that match real business needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
