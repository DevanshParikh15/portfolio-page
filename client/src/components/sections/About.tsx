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
              I am a <span className="text-green-600 font-semibold">CRM & ERP specialist </span><span className="font-semibold text-primary">with 3+ years of experience</span> who loves turning messy processes into smooth, scalable systems. I have worked across <span className="font-semibold text-primary">Salesforce and Microsoft Dynamics 365 (Business Central) </span> helping teams fix what’s broken, automate what’s manual, and build experiences that customers actually enjoy.
            </p>
                        <p>
              <span className="text-green-600 font-semibold">My strength is simple:</span> I understand what the business wants, I understand what the tech can do, and I know how to connect the two without overcomplicating things.
            </p>
            <p>
              <span className="text-green-600 font-semibold">I am actively seeking a role</span> where I can leverage my consulting background, technical skills, and strategic vision to drive enterprise CRM and ERP projects. I'm open to opportunities in consulting, product management, solutions architecture, or client success leadership.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
