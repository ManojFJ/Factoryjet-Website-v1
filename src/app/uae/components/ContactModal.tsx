import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 sm:zoom-in duration-200 max-h-[90vh] flex flex-col">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white flex justify-between items-start flex-shrink-0">
          <div>
            <h3 className="text-2xl font-bold">Get a Quote</h3>
            <p className="text-blue-100 text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" required className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" required className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" required className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base">
                  <option value="website">Website Design</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="amc">AMC Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base">
                  <option value="under15k">Under AED 15k</option>
                  <option value="15-30k">AED 15k - 30k</option>
                  <option value="30-80k">AED 30k - 80k</option>
                  <option value="80k+">AED 80k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={3} className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-base"></textarea>
            </div>

            <button type="submit" className="w-full btn-primary bg-secondary hover:bg-orange-600 text-white py-3.5 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2">
              Submit Request <ArrowRight size={20} />
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Your information is secure. We reply within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;