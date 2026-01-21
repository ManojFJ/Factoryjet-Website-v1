import React from 'react';

const steps = [
  { step: 1, title: "Discovery & Strategy", time: "Week 1-2", desc: "Understand business goals, analyze competition, identify target audience, define success metrics, create project roadmap." },
  { step: 2, title: "Design & Prototyping", time: "Week 2-4", desc: "Create wireframes, design mockups, develop clickable prototypes, gather feedback, finalize visual direction." },
  { step: 3, title: "Content Development", time: "Week 2-4", desc: "Strategic copywriting, SEO optimization, image sourcing, video integration, brand messaging alignment." },
  { step: 4, title: "Development & Build", time: "Week 4-10", desc: "Convert designs to code, implement functionality, integrate CMS, setup analytics, optimize performance." },
  { step: 5, title: "Testing & QA", time: "Week 9-11", desc: "Cross-browser testing, device testing, performance optimization, security audit, accessibility compliance." },
  { step: 6, title: "Launch & Deploy", time: "Week 11-12", desc: "Domain setup, SSL installation, DNS configuration, final backups, monitoring activation." },
  { step: 7, title: "Training & Handover", time: "Week 12-13", desc: "CMS training, documentation delivery, best practices guidance, ongoing support setup." },
  { step: 8, title: "Optimization & Support", time: "Ongoing", desc: "Performance monitoring, security updates, content updates, continuous improvement, monthly reporting." },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-navy">Our Proven 8-Step Development Process</h2>
        </div>

        <div className="relative">
          {/* Vertical Line: Left on mobile, Center on desktop */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content: Left margin on mobile to clear circle */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-primary/50 transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                     <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-bold rounded-full mb-2">{step.time}</span>
                     <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Number Circle: Left on mobile, Center on desktop */}
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 transform md:-translate-x-1/2 shadow-lg">
                  <span className="text-2xl font-extrabold text-navy">{step.step}</span>
                </div>
                
                {/* Empty Space for Grid Balance on Desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;