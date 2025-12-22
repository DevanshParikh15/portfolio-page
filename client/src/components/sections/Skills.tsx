import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "CRM & ERP Platforms",
    skills: [
      "Salesforce — Admin",
      "Salesforce — Service Cloud",
      "Salesforce — Field Service Lightning (FSL)",
      "Microsoft Dynamics 365 & Business Central",
    ],
    color: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    title: "Platform Capabilities",
    skills: [
      "Service Operations, Case Management & Field Service",
      "Business Central Functional Configuration & Development",
      "Workflow Automation, Reporting & Data Modeling",
    ],
    color: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
  {
    title: "Tools",
    skills: ["Power Apps", "Power Automate", "Power BI", "Salesforce Platform", "Salesforce Data Loader"],
    color: "bg-slate-50 text-slate-700 border-slate-200",
  },
  {
    title: "Consulting & Functional Skills",
    skills: ["Functional Consultant | Product Owner | Business Analyst", "Requirements Gathering & Stakeholder Management"],
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background (decorative gradients only) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {/*A comprehensive toolkit for delivering enterprise-grade solutions.*/}
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all bg-slate-50/50"
            >
              <h3 className="min-w-[140px] text-xl font-bold text-slate-900">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-4 py-2 rounded-full text-base font-medium border ${category.color} transition-transform hover:scale-105 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
