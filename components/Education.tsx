import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    school: 'Bharathiyar University',
    degree: 'MCA (AI)',
    year: '2025',
    grade: 'Grade: S',
    description: 'Master of Computer Applications with a specialization in Artificial Intelligence.'
  },
  {
    id: 2,
    school: 'University Chennai',
    degree: 'Master of Engineering (M.Eng.), CAD CAM',
    year: '2013 - 2015',
    grade: 'Grade: S',
    description: 'Advanced studies in Computer Aided Design and Manufacturing.'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-slate-400">Academic qualifications and certifications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} />
                </div>

                <div className="flex items-center gap-2 mb-2 text-sm text-secondary-400 font-mono">
                  <Calendar size={14} />
                  <span>{edu.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-300 font-medium mb-4">{edu.school}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {edu.description}
                </p>

                <div className="flex items-center gap-2 mt-auto">
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 flex items-center gap-1.5">
                    <Award size={12} />
                    {edu.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;