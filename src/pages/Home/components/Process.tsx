import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: "Discovery", desc: "We analyze your goals, competitors, and audience to build a solid strategy." },
    { num: '02', title: "Design", desc: "We create wireframes and custom UI aligned with your brand identity." },
    { num: '03', title: "Develop", desc: "Our experts build the frontend and backend with clean, optimized code." },
    { num: '04', title: "Launch", desc: "After rigorous testing and SEO setup, we go live and help you grow." }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-jet-blue font-bold tracking-wide uppercase text-sm mb-3">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-jet-navy mb-6">
              From concept to launch in record time
            </h3>
            <p className="text-jet-slate text-lg mb-8 leading-relaxed">
              We've streamlined our workflow to deliver high-quality results without the typical agency delays.
              Our 7-step process ensures transparency and speed.
            </p>
            <button className="text-jet-blue font-bold hover:text-blue-700 flex items-center gap-2 group">
              See detailed timeline <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-display font-bold text-6xl text-jet-blue group-hover:scale-110 transition-transform select-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-jet-blue rounded-full flex items-center justify-center text-white font-bold mb-4 shadow-md shadow-blue-500/30">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold text-jet-navy mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
