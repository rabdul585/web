import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Bot, Terminal, Coffee } from 'lucide-react';

const highlights = [
  { icon: BookOpen, label: "Technical Documentation", color: "text-blue-400" },
  { icon: Bot, label: "Automation & AI Workflows", color: "text-purple-400" },
  { icon: Terminal, label: "GenAI Prompt Engineering", color: "text-green-400" },
  { icon: Coffee, label: "Micro-SaaS Experiments", color: "text-orange-400" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Bridging the Gap Between <br/>
              <span className="text-secondary-400">Humans</span> and <span className="text-primary-500">Machines</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a Technical Writer and Automation Enthusiast with a deep passion for Generative AI. 
                My mission is simple: simplify complexity. Whether it's writing crystal-clear documentation 
                for intricate APIs or building autonomous agents that handle repetitive tasks, I thrive 
                at the intersection of communication and code.
              </p>
              <p>
                As an aspiring GenAI Architect, I am constantly experimenting with LLMs, 
                exploring how prompt engineering and RAG pipelines can solve real-world problems. 
                When I'm not coding or writing, you'll find me building micro-SaaS tools to test new ideas.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium text-slate-200">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-3xl opacity-20" />
             <div className="relative glass-card p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col gap-6">
                   <h3 className="text-xl font-bold text-white">Journey so far</h3>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white font-bold border border-white/10">2024</div>
                         <div>
                            <h4 className="text-white font-medium">Deep Dive into GenAI</h4>
                            <p className="text-sm text-slate-400">RAG, LLM, Langchain Developer, Python, Streamlit.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white font-bold border border-white/10">2022</div>
                         <div>
                            <h4 className="text-white font-medium">Individual Contributor</h4>
                            <p className="text-sm text-slate-400">Worked on various Documentation & SharePoint management.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white font-bold border border-white/10">2020</div>
                         <div>
                            <h4 className="text-white font-medium">Multi-disciplinary IC</h4>
                            <p className="text-sm text-slate-400">Manual QA, Automation QA, Technical Writing, and UX Design.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white font-bold border border-white/10">2019</div>
                         <div>
                            <h4 className="text-white font-medium">Team Lead</h4>
                            <p className="text-sm text-slate-400">Led Technical Writing team, managing 4 members.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-white font-bold border border-white/10">2015</div>
                         <div>
                            <h4 className="text-white font-medium">Career Start</h4>
                            <p className="text-sm text-slate-400">Started professional journey in Technical Writing.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;