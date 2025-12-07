import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialLink?: string;
  skills?: string[];
  image?: string;
}

const certifications: Certification[] = [
  {
    id: 'langchain',
    title: 'Langchain Developer',
    issuer: 'Social Eagle.AI',
    date: 'Nov 2025',
    image: 'https://ui-avatars.com/api/?name=SE&background=random'
  },
  {
    id: 'python-ai',
    title: 'Python for AI',
    issuer: 'Social Eagle',
    date: 'Nov 2025',
    image: 'https://ui-avatars.com/api/?name=SE&background=random'
  },
  {
    id: 'python-automate',
    title: 'Python to Automate and Protype using AI',
    issuer: 'Udemy',
    date: 'Nov 2025',
    skills: ['Flask', 'FastAPI', 'Supabase', 'Payment Gateways', 'Google OAuth'],
    image: 'https://ui-avatars.com/api/?name=UD&background=A435F0&color=fff'
  },
  {
    id: 'github',
    title: 'Github End-to-End',
    issuer: 'Udemy',
    date: 'Sep 2025',
    skills: ['GitHub'],
    image: 'https://ui-avatars.com/api/?name=UD&background=A435F0&color=fff'
  },
  {
    id: 'n8n',
    title: 'N8N automation with LLM and langchain',
    issuer: 'Udemy',
    date: 'Sep 2025',
    skills: ['n8n', 'Automation', 'LangChain'],
    image: 'https://ui-avatars.com/api/?name=UD&background=A435F0&color=fff'
  },
  {
    id: 'product-owner',
    title: 'Agile Product Owner',
    issuer: 'LinkedIn',
    date: 'Jul 2025',
    skills: ['Agile Project Management', 'Product Owner'],
    image: 'https://ui-avatars.com/api/?name=LI&background=0077B5&color=fff'
  },
  {
    id: 'python-workshop',
    title: '3hr Workshop Certificate Python',
    issuer: 'Be10x',
    date: 'Jun 2025',
    credentialId: '57'
  },
  {
    id: 'scrum-master',
    title: 'Agile Scrum Master',
    issuer: 'Simplilearn',
    date: 'May 2024',
    skills: ['Agile Scrum Master']
  },
  {
    id: 'genai',
    title: 'Generative AI',
    issuer: 'Great Learning',
    date: 'Apr 2024',
    skills: ['Generative AI']
  },
  {
    id: 'ai-llm',
    title: 'Artificial Intelligence and LLM integration',
    issuer: 'Udemy',
    date: 'Feb 2024',
    skills: ['AI', 'LLM']
  },
  {
    id: 'intro-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Coursera',
    date: 'Feb 2024',
    credentialId: 'LQJUYVRXJ7PB',
    credentialLink: 'https://www.coursera.org/account/accomplishments/verify/LQJUYVRXJ7PB',
    skills: ['Artificial Intelligence (AI)']
  },
  {
    id: 'azure',
    title: 'Microsoft Certified Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Mar 2022',
    credentialId: '992788519'
  },
  {
    id: 'figma',
    title: 'Create High-Fidelity Designs and Prototypes in Figma',
    issuer: 'Google',
    date: 'Oct 2021',
    credentialId: 'GX4B5AZHXK28',
    skills: ['Project Management', 'Leadership']
  },
  {
    id: 'ux-design',
    title: 'Google UX Design Specialization',
    issuer: 'Coursera',
    date: 'Oct 2021',
    credentialId: '57HU3KSU6UZD'
  },
  {
    id: 'tech-writing',
    title: 'Technical Writing',
    issuer: 'Coursera',
    date: 'Sep 2021',
    credentialId: 'KYMMESHC4TZL'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Licenses & Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Continuous learning is part of my DNA. Here are the credentials backing my expertise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all hover:bg-white/[0.07] flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 text-white font-bold overflow-hidden">
                    {cert.image ? (
                        <img src={cert.image} alt={cert.issuer} className="w-full h-full object-cover opacity-80" />
                    ) : (
                        <Award size={20} className="text-primary-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm leading-tight group-hover:text-primary-400 transition-colors">
                        {cert.issuer}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                        <Calendar size={10} />
                        <span>Issued {cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-slate-200 mb-2 leading-snug">
                {cert.title}
              </h4>

              {cert.credentialId && (
                <div className="text-xs text-slate-500 font-mono mb-3 bg-black/20 inline-block px-2 py-1 rounded self-start">
                    ID: {cert.credentialId}
                </div>
              )}

              {cert.skills && (
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary-500/10 text-secondary-400 border border-secondary-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {cert.credentialLink && (
                  <a 
                    href={cert.credentialLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-4 flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300 transition-colors self-start"
                  >
                      Show Credential <ExternalLink size={10} />
                  </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;