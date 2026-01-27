import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const ServicesIntro: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white border-t border-light">
        <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center font-heading">
                Comprehensive Web Development Services for New York Businesses
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-8 rounded-full"></div>
        </FadeIn>
    </div>
  );
};