import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Search } from 'lucide-react';
import { Project } from '../types';

// Data derived from user's GitHub repository structure: https://github.com/rabdul585/Abdul_AI
const projects: Project[] = [
  {
    id: 'gen-ai-app',
    title: 'GEN_AI_App',
    description: 'A dedicated generative AI application showcasing experimental integrations with various GenAI models and workflows.',
    tech: ['GenAI', 'Python', 'LLMs'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/GEN_AI_App',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=1'
  },
  {
    id: 'kg-rag',
    title: 'Knowledge Graph RAG',
    description: 'Advanced experiments combining Knowledge Graphs with Retrieval-Augmented Generation (RAG) pipelines for structured context retrieval.',
    tech: ['RAG', 'Knowledge Graph', 'Python', 'Vector DB'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/KG_RAG',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=2'
  },
  {
    id: 'rag-learn',
    title: 'RAG Learning & Demos',
    description: 'A comprehensive collection of demonstrations and experiments focused on learning and implementing Retrieval-Augmented Generation systems.',
    tech: ['RAG', 'Embeddings', 'Python', 'LangChain'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/RAG_Learn',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=3'
  },
  {
    id: 'streamlit',
    title: 'Streamlit Applications',
    description: 'Interactive web application demos built using Streamlit, designed for rapid data visualization and AI tool prototyping.',
    tech: ['Streamlit', 'Python', 'Web App', 'Data Viz'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/Streamlit',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=4'
  },
  {
    id: 'flask-apps',
    title: 'Flask Web Apps',
    description: 'Backend server and web application experiments built using the Flask framework, focusing on API development.',
    tech: ['Flask', 'Python', 'REST API', 'Backend'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/flask',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=5'
  },
  {
    id: 'pyautogui',
    title: 'UI Automation (PyAutoGUI)',
    description: 'Scripts for automating user interface interactions using Python\'s PyAutoGUI library, streamlining repetitive tasks.',
    tech: ['PyAutoGUI', 'Automation', 'Python', 'RPA'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/pyautogui',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=6'
  },
  {
    id: 'jasonprompt',
    title: 'Jasonprompt',
    description: 'A repository focused on prompt engineering templates and JSON-structured prompt designs for optimizing LLM outputs.',
    tech: ['JSON', 'Prompt Engineering', 'LLM'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/Jasonprompt',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=7'
  },
  {
    id: 'python-chal',
    title: 'Python Challenges',
    description: 'A collection of Python scripts, notebooks, and coding challenges (including BMI and Age calculators) for continuous learning.',
    tech: ['Python', 'Jupyter', 'Algorithms'],
    link: 'https://github.com/rabdul585/Abdul_AI/tree/main/PythonChal',
    image: 'https://picsum.photos/800/600?grayscale&blur=2&random=8'
  }
];

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.tech.some(t => t.toLowerCase().includes(term))
    );
  });

  return (
    <section id="projects" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-xl"
            >
              A mix of generative AI experiments, RAG pipelines, automation tools, and learning resources.
              All hosted on my GitHub.
            </motion.p>
          </div>
          
          <motion.a 
            href="https://github.com/rabdul585"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors font-medium"
          >
            View GitHub Profile <ExternalLink size={18} />
          </motion.a>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative max-w-md"
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search projects by keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all focus:ring-1 focus:ring-primary-500/50"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col"
                >
                  {/* Image Placeholder with Gradient Overlay */}
                  <div className="h-48 overflow-hidden relative shrink-0">
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                       loading="lazy"
                     />
                     <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
                        <Code size={16} className="text-white" />
                     </div>
                  </div>

                  <div className="p-6 relative z-20 -mt-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10"
                      >
                        <Github size={16} />
                        Repo
                      </a>
                      
                      {project.livePreview ? (
                        <a 
                          href={project.livePreview}
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary-600/20 hover:bg-primary-600/30 text-primary-400 text-sm font-medium transition-colors border border-primary-500/20"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 text-slate-600 text-sm font-medium cursor-not-allowed opacity-50 border border-white/5"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500"
              >
                <Search size={48} className="mb-4 opacity-20" />
                <p className="text-lg">No projects found matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-primary-400 hover:text-primary-300 text-sm font-medium"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;