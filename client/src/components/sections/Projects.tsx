import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import project1 from "@assets/generated_images/field_service_management_visualization.png";
import project2 from "@assets/generated_images/ai_integrated_with_crm_concept.png";
import project3 from "@assets/generated_images/sales_dashboard_and_automation_concept.png";

const projects = [
  {
    title: "D365 Field Service Optimization",
    description: "Improved scheduling, resource allocation, and service workflows for energy sector clients.",
    image: project1,
    tags: ["Dynamics 365", "Optimization", "Logistics"]
  },
  {
    title: "AI-enhanced CRM Prototype (Vosyn)",
    description: "Helped define use cases for CRM + AI integration, leading product development from concept to beta.",
    image: project2,
    tags: ["AI", "Product Development", "Strategy"]
  },
  {
    title: "SDR CRM Automation Research",
    description: "Identified where business apps can improve SDR conversion through targeted research and automation.",
    image: project3,
    tags: ["Automation", "Sales", "Research"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Delivering tangible value through technology and strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-slate-200 hover:border-primary/30 transition-all hover:shadow-xl group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
