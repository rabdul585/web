import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Generate random particles for the background effect
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      size: Math.random() > 0.5 ? 2 : 4
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, email, message } = formData;
    
    // Construct the formatted WhatsApp message
    const whatsappMessage = 
      `*New Inquiry from Portfolio*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n\n` +
      `*Message:*\n${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Using 91 prefix for India based on the number format, ensuring international reachability
    const whatsappUrl = `https://wa.me/919500455430?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[100px]"
        />

        {/* Bottom Left Blob */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-secondary-600/10 rounded-full blur-[100px]"
        />

        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -500,
              opacity: [0, 0.5, 0],
              x: (Math.random() - 0.5) * 50
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute bottom-0 bg-primary-400/30 rounded-full blur-[1px]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Let's Build Something <br/>
              <span className="text-primary-400">Intelligent</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg mb-8 leading-relaxed"
            >
              Whether you need to automate a workflow, document a complex API, or explore the possibilities of GenAI, I'm here to help.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <a href="mailto:rabdul585@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group border border-white/5 hover:border-primary-500/30">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Me</h4>
                  <p className="text-slate-400 text-sm">rabdul585@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/919500455430" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group border border-white/5 hover:border-primary-500/30">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">WhatsApp</h4>
                  <p className="text-slate-400 text-sm">+91 95004 55430</p>
                </div>
              </a>

              <div className="flex gap-4 mt-6">
                <a 
                  href="https://github.com/rabdul585" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abdul-rahman-585ar/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass-card border border-white/10 relative overflow-hidden"
            onSubmit={handleSubmit}
          >
            {/* Subtle glow inside form card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-[50px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold hover:shadow-lg hover:shadow-primary-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send via WhatsApp
                <Send size={18} />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;