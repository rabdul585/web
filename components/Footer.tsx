import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Abdul Rahman. All rights reserved.
        </p>
        
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Designed with <Heart size={14} className="text-red-500 fill-red-500" /> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
