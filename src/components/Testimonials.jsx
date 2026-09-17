import React, { useState } from 'react';
import { ArrowRight, Shield, CheckCircle2, CircleDot } from 'lucide-react';

const Testimonials = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeEngagementStep, setActiveEngagementStep] = useState(0);

  const principles = [
    {
      id: 1,
      title: 'UNDERSTAND THE ENVIRONMENT',
      headline: 'START WITH THE IDENTITY LANDSCAPE.',
      desc: 'Before defining an IAM approach, organizations need visibility into identities, applications, directories, access paths, privileged accounts and existing processes.',
      focus: ['IDENTITIES', 'APPLICATIONS', 'DIRECTORIES', 'ACCESS', 'PRIVILEGE', 'LIFECYCLE'],
      perspective: 'Discovery and assessment help establish the current environment and identify areas that may require deeper analysis.',
      node: 'ENVIRONMENT'
    },
    {
      id: 2,
      title: 'ALIGN WITH THE BUSINESS',
      headline: 'IAM SHOULD SUPPORT HOW THE ORGANIZATION OPERATES.',
      desc: 'Identity controls need to account for business roles, operational workflows, application requirements and organizational responsibilities.',
      focus: ['BUSINESS ROLES', 'WORKFLOWS', 'APPLICATIONS', 'POLICIES', 'RESPONSIBILITIES', 'USER EXPERIENCE'],
      perspective: 'IAM architecture should be aligned with organizational requirements rather than implemented as an isolated technical layer.',
      node: 'BUSINESS'
    },
    {
      id: 3,
      title: 'BUILD FOR OPERATIONS',
      headline: 'A SOLUTION ONLY MATTERS IF TEAMS CAN OPERATE IT.',
      desc: 'IAM programs involve people, processes and technology. Operational ownership, workflows, monitoring and governance are important parts of a sustainable identity strategy.',
      focus: ['OWNERSHIP', 'WORKFLOWS', 'AUTOMATION', 'MONITORING', 'GOVERNANCE', 'OPERATIONS'],
      perspective: 'Implementation planning should consider how identity processes will operate after technology is deployed.',
      node: 'OPERATIONS'
    },
    {
      id: 4,
      title: 'MEASURE WHAT MATTERS',
      headline: 'FOCUS ON USEFUL OUTCOMES.',
      desc: 'IAM programs can involve many technical controls. The useful question is how those controls support visibility, governance, access management and operational processes.',
      focus: ['VISIBILITY', 'GOVERNANCE', 'ACCESS', 'PRIVILEGE', 'LIFECYCLE', 'SECURITY CONTEXT'],
      perspective: 'Success criteria should be defined around the organization\'s actual IAM objectives and operating model.',
      node: 'OUTCOMES'
    }
  ];

  const engagementSteps = [
    { step: 'DISCOVER', desc: 'Understand the existing identity environment.' },
    { step: 'ASSESS', desc: 'Identify relevant IAM processes, controls and areas for deeper analysis.' },
    { step: 'DESIGN', desc: 'Define an architecture and operating approach aligned with requirements.' },
    { step: 'IMPLEMENT', desc: 'Translate the agreed approach into technical and operational workflows.' },
    { step: 'OPTIMIZE', desc: 'Review processes and evolve the identity environment as requirements change.' }
  ];

  const visualNodes = ['ENVIRONMENT', 'BUSINESS', 'OPERATIONS', 'OUTCOMES'];

  const currentPrin = principles[activePrinciple];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-4 text-accent">CLIENT PERSPECTIVE</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section max-w-2xl text-textPrimary">
            IAM ENGAGEMENTS<br/>
            <span className="text-textSecondary">SHOULD START WITH UNDERSTANDING.</span>
          </h2>
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <p className="body-base text-sm mb-4 text-center md:text-left text-textSecondary">
              Identity environments are different. A useful IAM engagement begins by understanding the existing identity landscape, business requirements and operational constraints before defining the path forward.
            </p>
            <span className="text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong bg-card shadow-sm px-2 py-1 rounded-sm">ENGAGEMENT PRINCIPLES</span>
          </div>
        </div>
      </div>

      <div className="container-wide mb-24 relative z-10">
         
         {/* DESKTOP/TABLET: HORIZONTAL SELECTOR */}
         <div className="flex flex-col lg:flex-row gap-4 mb-12">
            {principles.map((prin, i) => {
              const isActive = activePrinciple === i;
              return (
                <button
                  key={i}
                  onClick={() => setActivePrinciple(i)}
                  className={`flex-1 text-left p-6 border rounded-sm transition-all duration-300 relative group shadow-sm
                    ${isActive ? 'bg-bgSecondary border-accent' : 'bg-bgPrimary border-borderStrong hover:border-accent/50'}
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                     <span className={`text-[10px] font-bold font-mono transition-colors ${isActive ? 'text-accent' : 'text-textSecondary'}`}>0{prin.id}</span>
                     <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                       {prin.title}
                     </span>
                  </div>
                </button>
              )
            })}
         </div>

         {/* DETAIL + VISUALIZATION */}
         <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 animate-fade-in-up">
            
            {/* Detail Panel */}
            <div className="lg:col-span-7 bg-card border border-borderLight shadow-sm rounded-sm p-8 md:p-12 relative overflow-hidden flex flex-col">
               <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
               
               <h3 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8 leading-tight">{currentPrin.headline}</h3>
               
               <p className="text-sm text-textSecondary leading-relaxed mb-10">
                 {currentPrin.desc}
               </p>

               <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <div>
                     <span className="text-[8px] font-bold text-textSecondary tracking-[0.2em] uppercase mb-4 block">FOCUS AREAS</span>
                     <div className="flex flex-wrap gap-2">
                       {currentPrin.focus.map((foc, i) => (
                         <div key={i} className="text-[8px] font-bold tracking-widest uppercase px-3 py-1.5 border border-borderStrong rounded-sm bg-bgSecondary text-textSecondary">
                           {foc}
                         </div>
                       ))}
                     </div>
                  </div>
                  <div>
                     <span className="text-[8px] font-bold text-accent tracking-widest uppercase mb-4 block">ENGAGEMENT PERSPECTIVE</span>
                     <p className="text-sm text-textPrimary leading-relaxed border-l border-accent/50 pl-4">
                       {currentPrin.perspective}
                     </p>
                  </div>
               </div>
            </div>

            {/* Interactive Visual */}
            <div className="lg:col-span-5 bg-card border border-borderLight shadow-sm rounded-sm p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
               
               <div className="absolute top-4 left-4 text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong bg-bgSecondary shadow-sm px-2 py-1 rounded-sm">
                 CONCEPTUAL ENGAGEMENT FOCUS
               </div>

               <div className="relative w-full h-[300px] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                    <g style={{ transform: 'translate(50%, 50%)' }}>
                      {visualNodes.map((node, i) => {
                        const rad = (i * 90 - 45) * (Math.PI / 180);
                        const x = Math.cos(rad) * 110;
                        const y = Math.sin(rad) * 110;
                        const isActive = currentPrin.node === node;
                        return (
                          <g key={i}>
                            <line x1="0" y1="0" x2={x} y2={y} stroke={isActive ? "var(--color-accent)" : "var(--color-border-strong)"} strokeWidth="1" className="transition-all duration-500" strokeDasharray={isActive ? "none" : "2 4"} />
                            {isActive && (
                              <circle r="2" fill="var(--color-accent)" className="animate-[signal-travel_2s_infinite_linear]">
                                 <animateMotion dur="2s" repeatCount="indefinite" path={`M ${x} ${y} L 0 0`} />
                              </circle>
                            )}
                          </g>
                        )
                      })}
                    </g>
                  </svg>

                  {/* Center Node */}
                  <div className="absolute z-20 flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full border border-accent bg-bgSecondary flex items-center justify-center shadow-sm relative">
                       <Shield className="w-6 h-6 text-accent" />
                     </div>
                     <span className="text-[8px] font-bold text-textPrimary tracking-widest uppercase mt-3 px-2 py-1 bg-card border border-borderStrong shadow-sm rounded-sm">
                       IDENTITYSHIELD
                     </span>
                  </div>

                  {/* Outer Nodes */}
                  {visualNodes.map((node, i) => {
                    const rad = (i * 90 - 45) * (Math.PI / 180);
                    const x = Math.cos(rad) * 110;
                    const y = Math.sin(rad) * 110;
                    const isActive = currentPrin.node === node;
                    return (
                      <div 
                        key={i}
                        className="absolute z-10 flex flex-col items-center transition-all duration-500"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        <div className={`w-3 h-3 rounded-sm border transition-colors duration-500 mb-2 transform rotate-45 shadow-sm
                          ${isActive ? 'bg-accent border-accent' : 'bg-card border-borderStrong'}
                        `}></div>
                        <span className={`text-[7px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm border transition-colors duration-500 shadow-sm
                          ${isActive ? 'text-white border-accent bg-accent' : 'text-textSecondary border-borderStrong bg-card'}
                        `}>
                          {node}
                        </span>
                      </div>
                    )
                  })}
               </div>
            </div>

         </div>
      </div>

      {/* CLIENT JOURNEY / ENGAGEMENT FRAMEWORK */}
      <div className="container-wide mb-24 relative z-10">
         <div className="bg-card border border-borderLight shadow-sm rounded-sm p-8 md:p-12 overflow-hidden flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
               <span className="text-[10px] font-bold text-accent tracking-widest uppercase">TYPICAL ENGAGEMENT FRAMEWORK</span>
               <span className="text-xs text-textSecondary max-w-sm text-left md:text-right">The exact engagement model can vary depending on organizational requirements, existing architecture and scope.</span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-4 mb-8 relative z-10">
               {engagementSteps.map((step, i) => {
                 const isActive = activeEngagementStep === i;
                 return (
                   <React.Fragment key={i}>
                     <button
                       onClick={() => setActiveEngagementStep(i)}
                       className={`flex-1 flex lg:flex-col items-center lg:items-start gap-4 p-4 lg:p-6 border rounded-sm transition-all text-left shadow-sm
                         ${isActive ? 'bg-bgSecondary border-accent' : 'bg-bgPrimary border-borderStrong hover:border-accent/50'}
                       `}
                     >
                        <div className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-accent' : 'bg-textSecondary opacity-50'}`}></div>
                        <span className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-textPrimary' : 'text-textSecondary'}`}>{step.step}</span>
                     </button>
                     {i < engagementSteps.length - 1 && (
                       <div className="hidden lg:flex items-center justify-center text-textSecondary opacity-30">
                         <ArrowRight className="w-5 h-5" />
                       </div>
                     )}
                   </React.Fragment>
                 )
               })}
            </div>

            <div className="bg-bgSecondary border border-borderStrong rounded-sm p-6 relative z-10 text-center shadow-sm">
               <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-2 block">{engagementSteps[activeEngagementStep].step} OBJECTIVE</span>
               <p className="text-sm text-textPrimary">{engagementSteps[activeEngagementStep].desc}</p>
            </div>
         </div>
      </div>

      {/* BOTTOM MESSAGE & CTA */}
      <div className="container-wide pt-12 border-t border-borderLight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6 leading-tight">
            YOUR IDENTITY ENVIRONMENT IS UNIQUE.<br/>
            <span className="text-textSecondary">YOUR IAM ENGAGEMENT SHOULD REFLECT THAT.</span>
          </h2>
          <p className="body-base text-sm text-textSecondary">
            IdentityShield focuses on understanding the environment first, then shaping the appropriate identity, access and governance approach.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
            Explore Our Approach <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
