import React from 'react';
import { Button } from './ui/Section';
import { useLeadCapture } from '../context/LeadCaptureContext';

const CTA: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <section id="cta" className="relative py-24 bg-gradient-to-br from-jet-blue to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
         <span className="text-sm font-bold tracking-wider uppercase mb-4 block text-blue-200">READY TO START?</span>
         <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Start Your E-Commerce Project Today</h2>
         <p className="text-xl text-blue-100 mb-8 leading-relaxed">
           Your store should be your best salesperson. Whether you're launching your first store, scaling to enterprise, or expanding globally—FactoryJet builds e-commerce that drives revenue.
         </p>
         
         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-3xl mx-auto mb-10 text-left text-base text-blue-50 font-medium justify-center">
            <div className="flex items-center gap-2"><span className="text-jet-green">✅</span> Free 30-minute consultation</div>
            <div className="flex items-center gap-2"><span className="text-jet-green">✅</span> Platform recommendation</div>
            <div className="flex items-center gap-2"><span className="text-jet-green">✅</span> Custom proposal in 48h</div>
            <div className="flex items-center gap-2"><span className="text-jet-green">✅</span> Fixed pricing—no surprises</div>
            <div className="flex items-center gap-2"><span className="text-jet-green">✅</span> Launch in weeks, not months</div>
         </div>
         
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
           <Button 
             variant="primary" 
             className="text-lg bg-jet-orange hover:bg-orange-600 border-none px-8 py-4 shadow-lg w-full sm:w-auto"
             onClick={() => openForm('Footer Audit Request')}
           >
             Get Your Free E-Commerce Audit
           </Button>
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <Button 
               variant="primary" 
               className="text-lg w-full sm:w-auto !bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-jet-blue hover:!border-white transition-colors duration-200"
               onClick={() => openForm('Consultation Call Request')}
             >
               Schedule A Call
             </Button>
           </div>
         </div>

         <div className="pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-center gap-8 text-sm text-blue-200">
           <p>📞 <strong>Call:</strong> (555) 123-4567</p>
           <p>📧 <strong>Email:</strong> ecommerce@factoryjet.com</p>
           <p>💬 <strong>Live Chat:</strong> Available 9am-6pm EST</p>
         </div>
      </div>
    </section>
  );
};

export default CTA;