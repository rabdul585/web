import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, FileText, Zap, Layout, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'automation',
    title: 'AI Automation & Workflows',
    description: 'Custom n8n/Zapier workflows to automate your business processes. Connect APIs, handle data, and save time.',
    price: 'Starting at $500',
    icon: Zap
  },
  {
    id: 'tech-writing',
    title: 'Technical Documentation',
    description: 'High-quality API docs, user manuals, and technical blog posts designed to explain complex tech clearly.',
    price: 'Starting at $0.15/word',
    icon: FileText
  },
  {
    id: 'genai',
    title: 'GenAI Prompt Engineering',
    description: 'Optimization of LLM prompts for business use cases. RAG pipeline setup and custom AI agent prototyping.',
    price: 'Hourly or Project-based',
    icon: Cpu
  },
  {
    id: 'prototyping',
    title: 'Micro-SaaS Prototyping',
    description: 'Rapid development of MVP web applications using Python (FastAPI) and React. Turn ideas into working code.',
    price: 'Custom Quote',
    icon: Layout
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            How I Can Help
          </motion.h2>
          <p className="text-slate-400">Specialized services tailored to your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/5 hover:border-primary-500/30 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-secondary-400" size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6 h-20">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                  {service.price}
                </span>
                <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-primary-500 pb-0.5 hover:text-primary-400 transition-colors">
                Request a Custom Quote <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
