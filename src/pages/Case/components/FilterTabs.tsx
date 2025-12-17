import React from 'react';
import { motion } from 'framer-motion';
import { CategoryFilter } from '../types';
import { CATEGORIES } from '../constants';

interface FilterTabsProps {
  selected: CategoryFilter;
  onSelect: (category: CategoryFilter) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <div className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex">
        {CATEGORIES.map((category) => {
          const isSelected = selected === category;
          return (
            <button
              key={category}
              onClick={() => onSelect(category as CategoryFilter)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors z-10 ${
                isSelected ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};