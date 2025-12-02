import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Calgary",
    degree: "Master of Management",
    location: "Calgary, Canada",
    period: "August 2024 – August 2025",
    details: [
      "Awarded Haskayne Entrance Scholarship (CAD $5,000) for academic excellence & leadership potential.",
      "Relevant Coursework: IT Management, Business Analytics, Technologies for Innovation."
    ]
  },
  {
    institution: "Gujarat Technological University",
    degree: "B.E. in Computer Engineering",
    location: "India",
    period: "July 2017 – July 2021",
    details: [
      "Achieved top 10% ranking in Microsoft’s national “Future Ready Talent” program (25,000+ participants).",
      "Relevant Coursework: Database Management Systems, Artificial Intelligence, Cloud Computing, Object-Oriented Programming (Python, Java, C++)"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                  <span className="text-sm font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100 w-fit mt-2 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-lg text-slate-700 font-medium mb-1 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-slate-400" />
                  {edu.degree}
                </h4>
                <p className="text-sm text-slate-500 mb-4">{edu.location}</p>
                
                <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 leading-relaxed">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
