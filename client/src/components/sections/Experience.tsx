import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import background from "@assets/generated_images/experience_section_background.jpg";

const experiences = [
  {
    company: "BreezeLearn Technologies",
    role: "Market Research Analyst",
    period: "January 2025 - April 2025",
    description: "Researched CRM & business applications for improving SDR operations. Identified use cases for lead generation, targeting, and client acquisition."
  },
  {
    company: "Vosyn",
    role: "AI Product Owner & Business Analyst",
    period: "November 2024 - April 2025",
    description: "Guided founders on integrating their AI tech into business applications. Led product development from concept to beta. Prioritized user stories, managed backlog, and aligned functional requirements."
  },
  {
    company: "Infosys",
    role: "System Engineer",
    period: "June 2022 - June 2024",
    description: "Helped major energy clients adopt D365 Field Service & Customer Service. Implemented Salesforce Service Cloud & Field Service Lightning. Improved user adoption and streamlined global workflows."
  },
  {
    company: "Microsoft",
    role: "Future Ready Talent Intern",
    period: "October 2021 – March 2022",
    description: "Explored cloud technologies and applied Microsoft tools to solve business challenges. Gained exposure to Azure fundamentals, Power Platform basics, and enterprise digital transformation scenarios."
  },
  {
    company: "CodeSpeedy",
    role: "Machine Learning Engineer",
    period: "2021",
    description: "Built machine learning models using Python, applying data preprocessing, feature engineering, and predictive analytics. Created articles and tutorials for the company’s platform, demonstrating technical topics in a simple, educational format."
  },
  {
    company: "CodeSpeedy",
    role: "Python Programmer",
    period: "2021",
    description: "Developed Python-based automation and computer vision projects, including text-to-speech and text detection tools. Published multiple projects for public use, showcasing strong problem-solving and creativity."
  },
  {
    company: "Hewlett Packard Enterprise",
    role: "Summer Trainee",
    period: "2020",
    description: "Completed a project-based internship focused on Python, machine learning, and data analysis. Built an end-to-end ML model for healthcare data, improving classification accuracy and supporting data-driven insights."
  },
  {
    company: "ASME",
    role: "Student Member",
    period: "2017–2018",
    description: "Participated in technical events, workshops, and outreach activities related to engineering and innovation. Contributed to student-led initiatives supporting technology awareness and academic collaboration."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white overflow-hidden relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background} 
          alt="Experience Background" 
          className="w-full h-full object-fill opacity-10" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Timeline</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                  <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                  <span className="text-base font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100 w-fit mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-xl text-slate-700 font-medium mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  {exp.role}
                </h4>
                <p className="text-slate-600 leading-relaxed bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
