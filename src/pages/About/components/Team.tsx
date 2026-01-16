import React from 'react';
import { TEAM } from '../constants';
import { UserCircle2 } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">The People Behind the Tech</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">Meet Our Leaders</h3>
          <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base px-4 md:px-0">A remote-first, global team of 60+ experts passionate about SMB success.</p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
  {TEAM.map((member, index) => (
    <div key={index} className="group text-center flex flex-col items-center">
      <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mb-4 md:mb-6 rounded-full overflow-hidden bg-slate-100 ring-2 md:ring-4 ring-white shadow-lg">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.role}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform duration-500">
            <UserCircle2 className="w-16 h-16 md:w-20 md:h-20 text-slate-400" />
          </div>
        )}
      </div>

      <h4 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 px-4">
        {member.role}
      </h4>
      
      <p className="text-jetBlue font-medium text-xs md:text-sm mt-1 md:mt-2 px-4">
        {member.experience} Experience
      </p>

      <div className="inline-block bg-slate-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[11px] md:text-xs text-slate-600 max-w-xs mx-auto mt-2 md:mt-3">
        {member.specialization}
      </div>

      {member.LinkedInUrl && (
        <a 
          href={member.LinkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 md:gap-2 mt-3 md:mt-4 px-4 py-2 md:px-5 md:py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-300 hover:shadow-md text-xs md:text-sm font-medium"
          aria-label={`Connect with ${member.role} on LinkedIn`}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="whitespace-nowrap">Connect on LinkedIn</span>
        </a>
      )}
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Team;