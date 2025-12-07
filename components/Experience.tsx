import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 'bounteous',
    role: 'Associate Delivery Manager',
    company: 'Bounteous',
    period: 'May 2022 - Present',
    description: 'Leading end-to-end content management and QA leadership. Overseeing creation of User Guides, Release Notes, and technical documentation. Managing manual and automation QA activities, coordinating test planning, and collaborating with cross-functional teams to ensure timely delivery of high-quality features.'
  },
  {
    id: 'cognizant',
    role: 'Technical Writer',
    company: 'Cognizant',
    period: 'Mar 2019 - May 2022',
    description: 'Developed 3 new User Guides and online help for the Softvision Suite product in the Retail domain, serving 132 clients across the country.'
  },
  {
    id: 'capgemini-lead',
    role: 'Team Lead',
    company: 'Capgemini',
    period: 'Dec 2017 - Mar 2019',
    description: 'Managed a team of 5 writers for complex product documentation. Implemented Single-Sourcing, XML, and DITA strategies. Improved documentation quality by 15% through RCAs and training. Collaborated with SMEs to ensure technical accuracy.'
  },
  {
    id: 'capgemini-writer',
    role: 'Technical Writer',
    company: 'Capgemini',
    period: 'May 2015 - Dec 2017',
    description: 'Authored User and Installation guides using FrameMaker, RoboHelp, and MS Office. Interpreted engineering drawings for technical reports and managed Technical Data Queries (TDQ) in conformity to customer standards.'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Experience</h2>
          <p className="text-slate-400">My professional journey and milestones.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-500/20 transition-colors ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                       <Briefcase size={16} className="text-primary-400" />
                       <span className="text-sm font-mono text-primary-400">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-secondary-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty Space for Grid alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;