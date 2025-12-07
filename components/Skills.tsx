import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages & Core", items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"] },
  { category: "AI & Automation", items: ["n8n", "Zapier", "Make", "LangChain", "OpenAI API", "Gemini API"] },
  { category: "Frameworks & Tools", items: ["React", "Flask", "FastAPI", "Tailwind CSS", "Git & GitHub", "Docker"] },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            The tools and technologies I use to build scalable automation and intuitive interfaces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.2 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-sm border border-white/5 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
