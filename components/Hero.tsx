import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const skills = [
  "Technical Writer",
  "QA Strategy",
  "GenAI Integrations (RAG, LLMs)",
  "Automation Engineer"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing Speed Logic
      if (isDeleting) {
        setTypingSpeed(50); // Faster when deleting
      } else {
        setTypingSpeed(100); // Normal typing speed
      }

      // Pause at the end of the word
      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Pause for 2 seconds before deleting
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause briefly before typing next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary-400 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              <span>Available for Hire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-4"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)", 
                    "0 0 10px rgba(255,255,255,0.2)", 
                    "0 0 0px rgba(255,255,255,0)"
                  ] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                Building the Future of
              </motion.span> <br />
              <motion.span
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 0px rgba(139, 92, 246, 0))", 
                    "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))", 
                    "drop-shadow(0 0 0px rgba(139, 92, 246, 0))"
                  ] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 pb-2 inline-block"
              >
                Automation & AI
              </motion.span>
            </motion.h1>

            {/* Typewriter Skills Animation */}
            <div className="h-10 mb-6 flex items-center justify-center md:justify-start">
              <span className="text-slate-400 mr-2 text-lg md:text-xl font-medium">I specialize in</span>
              <span className="text-lg md:text-2xl font-bold text-white font-mono">
                {text}
                <span className="animate-pulse ml-1 text-primary-500">|</span>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              I'm Abdul Rahman. I design intelligent workflows, build automation systems, 
              and craft documentation that empowers users to master complex tech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-dark-950 font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Visual/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative max-w-sm md:max-w-md w-full"
          >
            <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary-500/10 bg-slate-800">
               {/* GitHub Profile Picture */}
               <img 
                 src="https://github.com/rabdul585.png" 
                 alt="Abdul Rahman" 
                 className="w-full h-full object-cover"
               />
               
               {/* Floating Elements Animation */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-10 right-10 p-4 rounded-2xl glass-card border-white/20 shadow-lg"
               >
                 <div className="w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center text-secondary-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-12 left-8 p-4 rounded-2xl glass-card border-white/20 shadow-lg"
               >
                 <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden md:block"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;