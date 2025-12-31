import React from 'react';
import { MapPin } from 'lucide-react';

const LocalSEOSection: React.FC = () => (
  <section className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4 lg:mb-6">
            Serving All of Delhi NCR
          </h2>
          <p className="text-slate mb-6 lg:mb-8 text-sm lg:text-base">
            Local Website Design Experts with Deep Understanding of NCR's Business Landscape
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Gurgaon</h4>
              <p className="text-sm text-gray-600">
                Cyber City, Golf Course Rd, DLF, Sohna Rd, Udyog Vihar
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Noida</h4>
              <p className="text-sm text-gray-600">Sector 62, 18, 63, Greater Noida, Film City</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Delhi</h4>
              <p className="text-sm text-gray-600">CP, South Delhi, Nehru Place, Dwarka, Rohini</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-jet-blue mb-2">Faridabad & Ghaziabad</h4>
              <p className="text-sm text-gray-600">NIT, Industrial Area, Indirapuram, Vaishali</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
            <MapPin className="mr-2 text-jet-orange flex-shrink-0" />
            Office: WeWork, Two Horizon Center, Golf Course Road, Sector 43, Gurugram
          </div>
        </div>
        <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
          {/* Simulated Map */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-2 text-gray-300" />
              <p>Google Map Embed: Delhi NCR Region</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocalSEOSection;
