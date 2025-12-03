import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import background from "@assets/generated_images/certifications.jpg";

const certifications = [
  { title: "Microsoft Certified: Business Central Functional Consultant", issuer: "Microsoft" },
  { title: "Microsoft Certified: Business Central Developer", issuer: "Microsoft" },
  { title: "Microsoft Certified: Customer Service Functional Consultant", issuer: "Microsoft" },
  { title: "Microsoft Certified: Field Service Functional Consultant", issuer: "Microsoft" },
  { title: "Salesforce Certified Administrator", issuer: "Salesforce" },
  { title: "Salesforce Certified Agentforce Specialist", issuer: "Salesforce" },
  { title: "SAFe Certified Product Manager", issuer: "Scaled Agile" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background} 
          alt="Certifications Background" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Validated expertise across leading enterprise platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full cursor-pointer group border-slate-200 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cert.issuer === "Microsoft" ? <BadgeCheck className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-base md:text-lg">{cert.title}</h3>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
