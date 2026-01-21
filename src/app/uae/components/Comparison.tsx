import React from 'react';
import { Check, X, Minus, ArrowRightLeft } from 'lucide-react';

interface ComparisonProps {
  onOpenModal: () => void;
}

const Comparison: React.FC<ComparisonProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-navy text-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold mb-4">Why We Are The Best Website Design Company</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare FactoryJet against a typical <strong>low cost website design company</strong> or expensive traditional <strong>web design firms</strong>.
          </p>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="lg:hidden flex justify-center items-center gap-2 text-xs text-gray-400 mb-4 animate-pulse">
          <ArrowRightLeft size={14} />
          <span>Scroll horizontally to compare</span>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 sm:p-6 text-left w-1/4">Feature</th>
                <th className="p-4 sm:p-6 text-center w-1/4 bg-white/5 rounded-t-xl border-t border-x border-white/10">
                  <span className="text-lg font-bold text-white block">FactoryJet UAE</span>
                  <span className="text-xs text-secondary font-medium uppercase tracking-wider">Best Value</span>
                </th>
                <th className="p-4 sm:p-6 text-center w-1/4 text-gray-400">
                  <span className="font-bold block">Traditional Agencies</span>
                  <span className="text-xs">High Cost</span>
                </th>
                <th className="p-4 sm:p-6 text-center w-1/4 text-gray-400">
                  <span className="font-bold block">Freelancers</span>
                  <span className="text-xs">High Risk</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                { label: "Cost Strategy", fj: "Affordable & Transparent", trad: "Expensive Retainers", free: "Hidden Costs" },
                { label: "Delivery Speed", fj: "2-4 Weeks (AI-Powered)", trad: "3-6 Months", free: "Unpredictable" },
                { label: "Reliability", fj: "99.9% Uptime SLA", trad: "Variable", free: "Low Reliability" },
                { label: "Technology", fj: "Next.js, React, Modern", trad: "Legacy Wordpress", free: "Outdated Templates" },
                { label: "Support", fj: "24/7 Dedicated Team", trad: "Business Hours Only", free: "Ghosting Risk" },
                { label: "Scalability", fj: "Enterprise Ready", trad: "Costly to Scale", free: "Limited" },
              ].map((row, idx) => (
                <tr key={idx} className="group hover:bg-white/5 transition-colors">
                  <td className="p-4 sm:p-6 font-medium text-gray-300">{row.label}</td>
                  <td className="p-4 sm:p-6 text-center bg-white/5 border-x border-white/10">
                    <span className="font-bold text-secondary">{row.fj}</span>
                  </td>
                  <td className="p-4 sm:p-6 text-center text-gray-400">{row.trad}</td>
                  <td className="p-4 sm:p-6 text-center text-gray-500">{row.free}</td>
                </tr>
              ))}
              <tr>
                <td className="p-4 sm:p-6 font-medium text-gray-300">Target Audience</td>
                <td className="p-4 sm:p-6 text-center bg-white/5 border-x border-b border-white/10 rounded-b-xl">
                  <div className="flex flex-col gap-1 text-xs text-gray-300">
                    <span>Small Business</span>
                    <span>Real Estate</span>
                    <span>E-Commerce</span>
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-center text-gray-500">Large Corps</td>
                <td className="p-4 sm:p-6 text-center text-gray-500">Micro Projects</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <p className="text-base lg:text-lg text-gray-300 mb-6 px-4">
            Looking for a <strong>cheap website developer near me</strong> that doesn't compromise on quality? 
            <br className="hidden md:block" />
            FactoryJet offers the premium quality of top <strong>web design agencies</strong> at prices accessible to SMBs.
          </p>
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;