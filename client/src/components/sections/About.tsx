import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background (decorative gradients only) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-justify"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About Me</h2>
          <div className="text-xl md:text-2xl text-slate-600 leading-relaxed space-y-6">
            <p>
              I am a CRM and ERP specialist with 3+ years of experience turning messy business processes into clear, scalable systems. I have worked across Microsoft Dynamics 365, Business Central, Power Platform, and Salesforce, helping teams fix broken workflows, automate manual work, and deliver systems that people actually want to use.
            </p>
            <p>
              My background spans both Microsoft and Salesforce ecosystems, where I have supported enterprise CRM and ERP implementations, system integrations, reporting, and process optimization. I am comfortable working with business stakeholders and technical teams to ensure solutions are practical, scalable, and aligned with real business needs.
            </p>
            <p>
              My core strength is simple: I understand what the business is asking for, I understand what the technology can realistically deliver, and I know how to connect the two without unnecessary complexity.
            </p>
            <p>
              I am actively seeking opportunities where I can apply my consulting mindset, hands-on CRM expertise, and strategic thinking to deliver high-impact CRM and ERP initiatives. I am open to roles in consulting, project or product management, solution architecture, or client-facing leadership across Microsoft and Salesforce environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
