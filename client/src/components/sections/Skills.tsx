import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Dynamics 365",
    skills: ["Business Central", "Customer Service", "Field Service"],
    color: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    title: "Salesforce",
    skills: ["Administration", "Service Cloud", "Field Service Lightning"],
    color: "bg-sky-50 text-sky-700 border-sky-100"
  },
  {
    title: "Business Roles",
    skills: ["Product Owner", "Business Analyst"],
    color: "bg-violet-50 text-violet-700 border-violet-100"
  },
  {
    title: "Tech Skills",
    skills: ["CRM Configuration", "Automation & Workflow Design", "Power Platform (Power BI, Power Apps, Power Automate)", "Data Integration & Migration"],
    color: "bg-slate-50 text-slate-700 border-slate-200"
  },
  {
    title: "Soft Skills",
    skills: ["Requirements Gathering", "Stakeholder Management", "Agile Delivery"],
    color: "bg-emerald-50 text-emerald-700 border-emerald-100"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for delivering enterprise-grade solutions.
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
              <h3 className="min-w-[140px] text-lg font-bold text-slate-900">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${category.color} transition-transform hover:scale-105 cursor-default`}
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
