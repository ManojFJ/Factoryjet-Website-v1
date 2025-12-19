import React from 'react';
import { MapPin, Globe, Building } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
             <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Where We're Located</h2>
             
             <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-jetBlue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Headquarters: Bangalore, India</h3>
                    <p className="text-slate-600 font-medium">FactoryJet Technologies Pvt. Ltd.</p>
                    <p className="text-slate-600 mt-1">
                      [Address Line 1]<br/>
                      [Address Line 2]<br/>
                      Bangalore, Karnataka 560XXX, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Regional Presence</h3>
                    <ul className="text-slate-600 mt-2 list-disc list-inside">
                      <li>Mumbai Office</li>
                      <li>Delhi Office</li>
                      <li>Remote team members across India</li>
                    </ul>
                  </div>
                </div>

                 <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Service Coverage</h3>
                    <ul className="text-slate-600 mt-2 list-disc list-inside">
                      <li>All of India (remote and on-site)</li>
                      <li>Southeast Asia</li>
                      <li>Emerging markets globally</li>
                    </ul>
                  </div>
                </div>
             </div>
          </div>

          {/* Abstract Map Visualization */}
          <div className="relative h-[400px] bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200">
            {/* Simple CSS Pattern to simulate map */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            
            {/* Bangalore Pin */}
            <div className="absolute top-[60%] left-[45%] flex flex-col items-center group cursor-pointer">
              <div className="relative flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jetBlue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-jetBlue border-2 border-white"></span>
              </div>
              <div className="mt-2 bg-white px-3 py-1 rounded shadow-lg text-xs font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">Bangalore (HQ)</div>
            </div>

             {/* Mumbai Pin */}
             <div className="absolute top-[50%] left-[35%] flex flex-col items-center group cursor-pointer">
               <div className="w-4 h-4 bg-slate-400 rounded-full border-2 border-white"></div>
               <div className="mt-1 bg-white px-2 py-1 rounded shadow text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">Mumbai</div>
            </div>

            {/* Delhi Pin */}
            <div className="absolute top-[35%] left-[40%] flex flex-col items-center group cursor-pointer">
               <div className="w-4 h-4 bg-slate-400 rounded-full border-2 border-white"></div>
               <div className="mt-1 bg-white px-2 py-1 rounded shadow text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">Delhi</div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium text-slate-500 border border-slate-200 shadow-sm">
              Interactive Map Unavailable in Preview
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;