import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Salesforce Certifications",
    items: [
      { title: "Salesforce Certified Admin", issuer: "Salesforce" },
      { title: "Salesforce Certified Agentforce Specialist", issuer: "Salesforce" },
      { title: "Salesforce Certified Service Cloud Consultant", issuer: "Salesforce" },
      { title: "Salesforce Certified Platform Developer", issuer: "Salesforce" },
    ],
  },
  {
    name: "Microsoft Certifications",
    items: [
      { title: "Microsoft Certified: Business Central Functional Consultant", issuer: "Microsoft" },
      { title: "Microsoft Certified: Business Central Developer", issuer: "Microsoft" },
    ],
  },
  {
    name: "Functional / Other",
    items: [
      { title: "SAFe Certified Product Manager", issuer: "Scaled Agile" },
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      {/* Background (decorative gradients only) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {/*Validated expertise across leading enterprise platforms.*/}
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{cat.name}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.items.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <Card className="h-full cursor-pointer group border-slate-200 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          {cert.issuer === "Microsoft" ? <BadgeCheck className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1 text-base md:text-lg">{cert.title}</h4>
                          <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">{cert.issuer}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
