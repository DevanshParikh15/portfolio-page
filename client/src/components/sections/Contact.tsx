import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Talk.</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-md">
              Interested in discussing opportunities? Let's connect about CRM/ERP roles, consulting engagements, or collaborative projects. I'm actively reviewing opportunities now.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.linkedin.com/in/devansh-parikh-975a5a175" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Connect on LinkedIn</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">Devansh Parikh</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Me</p>
                  <p className="font-semibold">devansh@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white border-none shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <Textarea id="message" placeholder="How can I help you?" className="bg-slate-50 border-slate-200 min-h-[120px]" />
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Devansh Parikh. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
