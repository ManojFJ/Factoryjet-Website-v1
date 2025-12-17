
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, TrendingDown, ChevronRight, MapPin } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseCardProps {
  data: CaseStudy;
  onClick?: () => void;
}

export const CaseCard: React.FC<CaseCardProps> = ({ data, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Extract the primary metric
  const primaryMetric = data.metrics[0];

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02, z: 50 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative w-full mb-8 cursor-pointer perspective-1000"
    >
      <div 
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-[0_20px_50px_-12px_rgba(0,82,204,0.15)] transition-shadow duration-300 h-full flex flex-col"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-64 w-full bg-slate-100">
           <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-slate-100/50">
              {data.category}
            </span>
             <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
               <MapPin size={10} /> {data.location}
            </span>
          </div>
          
          <motion.img
            src={data.image}
            alt={data.client}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ArrowUpRight size={24} />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                {data.client}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                {data.snippet}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
             {/* Data Ink Minimalist Stat */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                  {primaryMetric.label}
                </span>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border w-fit ${
                  primaryMetric.trend === 'up' 
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-700' 
                    : 'bg-blue-50 border-blue-100 text-blue-700'
                }`}>
                  {primaryMetric.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="font-mono font-bold text-lg tracking-tight">
                    {primaryMetric.value}
                  </span>
                </div>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <div className="text-primary font-medium text-sm flex items-center gap-1">
                  View <ChevronRight size={16} />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {data.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
