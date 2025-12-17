import React from 'react';
import { TEAM } from '../constants';
import { UserCircle2 } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-sm mb-3">The People Behind the Tech</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Meet Our Leaders</h3>
          <p className="max-w-2xl mx-auto text-slate-600">A remote-first, global team of 60+ experts passionate about SMB success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TEAM.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-slate-100 ring-4 ring-white shadow-lg">
                 {/* Placeholder for team image */}
                 <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform duration-500">
                    <UserCircle2 className="w-20 h-20 text-slate-400" />
                 </div>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900">{member.role}</h4>
              <p className="text-jetBlue font-medium text-sm mb-3">{member.experience} Experience</p>
              
              <div className="inline-block bg-slate-50 px-4 py-2 rounded-lg text-xs text-slate-600 max-w-xs mx-auto">
                {member.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;