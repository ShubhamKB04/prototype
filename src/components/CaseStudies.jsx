import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Shield, CheckCircle2, Search, ArrowDown } from 'lucide-react';

const CaseStudies = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeWorkstream, setActiveWorkstream] = useState(0);

  const scenarios = [
    {
      id: 1,
      title: 'FRAGMENTED ACCESS ENVIRONMENT',
      category: 'IDENTITY GOVERNANCE',
      scenario: 'A large organization operates across multiple business applications, directories and cloud environments. Access decisions are handled differently across teams, making it difficult to maintain a consistent view of identities and entitlements.',
      challenge: ['Fragmented identity sources', 'Inconsistent access processes', 'Limited entitlement visibility', 'Manual access reviews'],
      focus: ['IDENTITY GOVERNANCE', 'IDENTITY VISIBILITY', 'ACCESS REVIEWS', 'ENTITLEMENT MANAGEMENT'],
      approach: 'Establish a structured identity governance layer that brings identity and entitlement information into a more consistent operating model.',
      workstreams: [
        { step: 'DISCOVER', obj: 'Understand the current identity and access environment across connected directories and applications.' },
        { step: 'NORMALIZE', obj: 'Create a consistent view of identities and their current access rights.' },
        { step: 'GOVERN', obj: 'Establish structured policies and governance processes for requesting and approving access.' },
        { step: 'REVIEW', obj: 'Implement regular access certification workflows to maintain visibility.' }
      ],
      visualNodes: ['IDENTITY SOURCES', 'NORMALIZE', 'GOVERN', 'ACCESS REVIEW']
    },
    {
      id: 2,
      title: 'PRIVILEGED ACCESS COMPLEXITY',
      category: 'PRIVILEGED ACCESS',
      scenario: 'Administrative identities have access to critical systems across infrastructure, cloud environments and business applications. Privileged access processes vary between teams and environments.',
      challenge: ['Privileged account visibility', 'Shared administrative access', 'Manual approvals', 'Limited centralized monitoring'],
      focus: ['PRIVILEGED ACCESS', 'JIT ACCESS', 'APPROVAL WORKFLOWS', 'MONITORING'],
      approach: 'Create structured privileged access controls around administrative identities, approvals, temporary access and monitoring.',
      workstreams: [
        { step: 'DISCOVER', obj: 'Identify privileged accounts and administrative access patterns across the environment.' },
        { step: 'CLASSIFY', obj: 'Categorize systems and environments based on sensitivity and access requirements.' },
        { step: 'CONTROL', obj: 'Apply appropriate access and privilege controls, including vaulting and JIT access.' },
        { step: 'MONITOR', obj: 'Create visibility into relevant identity and access activity during privileged sessions.' }
      ],
      visualNodes: ['ADMIN', 'REQUEST', 'APPROVAL', 'JIT ACCESS', 'MONITOR']
    },
    {
      id: 3,
      title: 'IDENTITY LIFECYCLE GAPS',
      category: 'IDENTITY LIFECYCLE',
      scenario: 'Employee and contractor identities move across departments and applications. Access changes may not always follow a consistent process when roles change or identities leave.',
      challenge: ['Joiner workflows', 'Mover workflows', 'Leaver workflows', 'Manual provisioning', 'Delayed access changes'],
      focus: ['IDENTITY LIFECYCLE', 'PROVISIONING', 'DEPROVISIONING', 'WORKFLOW AUTOMATION'],
      approach: 'Create structured lifecycle workflows that connect identity events with provisioning, access changes and offboarding processes.',
      workstreams: [
        { step: 'JOIN', obj: 'Establish standardized workflows for creating identities and granting initial access.' },
        { step: 'MOVE', obj: 'Create processes to update access rights when roles or departments change.' },
        { step: 'CHANGE', obj: 'Implement policy-based provisioning for temporary or ad-hoc access requirements.' },
        { step: 'OFFBOARD', obj: 'Ensure consistent and timely access removal when identities leave the organization.' }
      ],
      visualNodes: ['IDENTITY EVENT', 'ROLE CHANGE', 'POLICY', 'PROVISION / DEPROVISION']
    },
    {
      id: 4,
      title: 'IDENTITY CONTEXT FOR SECURITY',
      category: 'IDENTITY THREAT RESPONSE',
      scenario: 'Security teams investigate authentication and access events across multiple systems. Connecting a security event to the relevant identity, role, device and access context may require investigation across multiple sources.',
      challenge: ['Identity context gaps', 'Disconnected security signals', 'Manual investigation', 'Limited correlation'],
      focus: ['IDENTITY CONTEXT', 'SECURITY SIGNALS', 'CORRELATION', 'INVESTIGATION'],
      approach: 'Connect identity context with relevant security signals to help security teams investigate events with additional identity information.',
      workstreams: [
        { step: 'CONNECT', obj: 'Integrate identity sources with security event monitoring systems.' },
        { step: 'ENRICH', obj: 'Provide additional identity context, such as role and privilege level, to security events.' },
        { step: 'CORRELATE', obj: 'Establish relationships between related authentication and access events.' },
        { step: 'INVESTIGATE', obj: 'Enable security teams to review available information and determine appropriate action.' }
      ],
      visualNodes: ['SECURITY EVENT', 'IDENTITY', 'ROLE', 'DEVICE', 'CONTEXT', 'INVESTIGATION']
    }
  ];

  const handleNext = () => {
    setActiveScenario((prev) => (prev + 1) % scenarios.length);
    setActiveWorkstream(0);
  };

  const handlePrev = () => {
    setActiveScenario((prev) => (prev - 1 + scenarios.length) % scenarios.length);
    setActiveWorkstream(0);
  };

  const currentScen = scenarios[activeScenario];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-4 text-accent">CASE STUDIES</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section max-w-2xl text-textPrimary">
            IAM CHALLENGES ARE COMPLEX.<br/>
            <span className="text-textSecondary">THE APPROACH SHOULD BE STRUCTURED.</span>
          </h2>
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <p className="body-base text-sm mb-4 text-center md:text-left text-textSecondary">
              Explore representative enterprise scenarios showing how identity, access and privilege challenges can be approached through a structured IAM strategy.
            </p>
            <span className="text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong px-2 py-1 rounded-sm bg-card shadow-sm">REPRESENTATIVE SCENARIOS — NOT CUSTOMER CASE STUDIES</span>
          </div>
        </div>
      </div>

      <div className="container-wide mb-24 relative z-10">
         <div className="grid lg:grid-cols-12 gap-8 xl:gap-12">
            
            {/* MOBILE: STACKED SELECTOR */}
            <div className="lg:hidden w-full mb-8">
               <div className="flex items-center justify-between bg-bgSecondary border border-borderLight p-4 rounded-sm shadow-sm">
                 <button onClick={handlePrev} className="p-2 text-textSecondary hover:text-textPrimary transition-colors">
                   <ChevronLeft className="w-5 h-5" />
                 </button>
                 <div className="flex flex-col items-center">
                   <span className="text-[10px] font-bold font-mono text-accent mb-1">0{currentScen.id} / 0{scenarios.length}</span>
                   <span className="text-[10px] font-bold text-textPrimary tracking-widest uppercase text-center max-w-[200px] truncate">{currentScen.title}</span>
                 </div>
                 <button onClick={handleNext} className="p-2 text-textSecondary hover:text-textPrimary transition-colors">
                   <ChevronRight className="w-5 h-5" />
                 </button>
               </div>
            </div>

            {/* DESKTOP: VERTICAL NAVIGATION */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 relative">
               <div className="absolute top-0 bottom-0 left-[27px] w-[1px] bg-borderStrong z-0"></div>
               {scenarios.map((scen, i) => {
                 const isActive = activeScenario === i;
                 return (
                   <button
                     key={i}
                     onClick={() => { setActiveScenario(i); setActiveWorkstream(0); }}
                     className={`text-left p-4 rounded-sm flex items-center gap-6 group relative z-10 transition-all duration-300
                       ${isActive ? 'bg-card border border-borderLight shadow-sm' : 'bg-transparent border border-transparent hover:translate-x-2'}
                     `}
                   >
                     <div className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors
                       ${isActive ? 'bg-bgSecondary border border-accent' : 'bg-card border border-borderStrong group-hover:border-accent/50'}
                     `}>
                       <span className={`text-[9px] font-bold font-mono ${isActive ? 'text-accent' : 'text-textSecondary'}`}>0{scen.id}</span>
                     </div>
                     <span className={`text-xs font-bold tracking-widest uppercase transition-colors max-w-[200px]
                       ${isActive ? 'text-textPrimary' : 'text-textSecondary group-hover:text-accent'}
                     `}>
                       {scen.title}
                     </span>
                     {isActive && <ArrowRight className="w-4 h-4 text-accent ml-auto" />}
                   </button>
                 )
               })}
            </div>

            {/* RIGHT: DETAIL + VISUALIZATION */}
            <div className="lg:col-span-8 flex flex-col gap-8">
               
               {/* Detail Panel */}
               <div className="bg-card border border-borderLight rounded-sm p-8 md:p-10 relative overflow-hidden animate-fade-in-up shadow-sm">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                  
                  <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-4 block">CATEGORY: {currentScen.category}</span>
                  <h3 className="text-2xl font-bold text-textPrimary mb-8 leading-tight">{currentScen.title}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                     <div className="space-y-8">
                        <div>
                           <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-3 block">SCENARIO</span>
                           <p className="text-sm text-textSecondary leading-relaxed">
                             {currentScen.scenario}
                           </p>
                        </div>
                        <div>
                           <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-3 flex items-center">
                             THE CHALLENGE
                           </span>
                           <ul className="space-y-3">
                             {currentScen.challenge.map((c, i) => (
                               <li key={i} className="flex items-start text-xs text-textSecondary">
                                 <div className="w-1.5 h-1.5 border border-borderStrong bg-card mr-3 mt-1 rounded-sm flex-shrink-0"></div>
                                 {c}
                               </li>
                             ))}
                           </ul>
                        </div>
                     </div>
                     <div className="space-y-8 border-t md:border-t-0 md:border-l border-borderStrong pt-8 md:pt-0 md:pl-8">
                        <div>
                           <span className="text-[8px] font-bold text-accent tracking-[0.2em] uppercase mb-4 block">IAM FOCUS</span>
                           <div className="flex flex-wrap gap-2">
                             {currentScen.focus.map((foc, i) => (
                               <div key={i} className="text-[8px] font-bold tracking-widest uppercase px-2 py-1 border border-borderStrong rounded-sm bg-bgSecondary text-textPrimary">
                                 {foc}
                               </div>
                             ))}
                           </div>
                        </div>
                        <div>
                           <span className="text-[8px] font-bold text-accent tracking-widest uppercase mb-3 block">IDENTITYSHIELD APPROACH</span>
                           <p className="text-sm text-textPrimary leading-relaxed">
                             {currentScen.approach}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Technical Visualization & Workstreams */}
               <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
                  
                  {/* Visualization */}
                  <div className="bg-card border border-borderLight rounded-sm p-8 min-h-[350px] relative overflow-hidden flex flex-col items-center justify-center shadow-sm">
                     <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                     <div className="absolute top-4 left-4 text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong bg-bgSecondary px-2 py-1 rounded-sm shadow-sm">
                       CONCEPTUAL WORKFLOW
                     </div>

                     <div className="flex flex-col items-center gap-4 mt-6 relative z-10 w-full max-w-[200px]">
                        {currentScen.visualNodes.map((node, i) => (
                           <React.Fragment key={i}>
                             <div className="w-full text-center py-2 px-4 border border-accent/30 bg-bgSecondary rounded-sm text-[8px] font-bold text-textPrimary tracking-widest uppercase shadow-sm">
                               {node}
                             </div>
                             {i < currentScen.visualNodes.length - 1 && (
                               <div className="h-6 w-[1px] bg-borderStrong relative">
                                 <div className="absolute top-0 left-0 w-full h-full bg-accent animate-[signal-travel_2s_infinite]"></div>
                               </div>
                             )}
                           </React.Fragment>
                        ))}
                     </div>
                  </div>

                  {/* Workstreams */}
                  <div className="bg-card border border-borderLight rounded-sm flex flex-col overflow-hidden shadow-sm">
                     <div className="p-6 border-b border-borderStrong bg-bgSecondary">
                        <span className="text-[9px] font-bold text-accent tracking-widest uppercase">POTENTIAL WORKSTREAMS</span>
                     </div>
                     <div className="p-6 flex-grow flex flex-col gap-2 relative">
                        <div className="absolute top-6 bottom-6 left-[39px] w-[1px] bg-borderStrong z-0"></div>
                        {currentScen.workstreams.map((ws, i) => {
                           const isActive = activeWorkstream === i;
                           return (
                             <button
                               key={i}
                               onClick={() => setActiveWorkstream(isActive ? -1 : i)}
                               className={`text-left p-4 border rounded-sm transition-all duration-300 relative z-10 flex flex-col shadow-sm
                                 ${isActive ? 'bg-bgSecondary border-accent' : 'bg-bgPrimary border-borderStrong hover:border-accent/50'}
                               `}
                             >
                               <div className="flex items-center gap-4">
                                 <div className={`w-6 h-6 rounded-sm border flex items-center justify-center flex-shrink-0 transition-colors
                                   ${isActive ? 'bg-accent border-accent text-white' : 'bg-card border-borderStrong text-textSecondary'}
                                 `}>
                                   <span className="text-[8px] font-bold font-mono">0{i+1}</span>
                                 </div>
                                 <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors
                                   ${isActive ? 'text-textPrimary' : 'text-textSecondary'}
                                 `}>
                                   {ws.step}
                                 </span>
                               </div>
                               <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                 <span className="text-[7px] font-bold text-accent tracking-widest uppercase mb-1 block">OBJECTIVE</span>
                                 <p className="text-xs text-textSecondary leading-relaxed">
                                   {ws.obj}
                                 </p>
                               </div>
                             </button>
                           )
                        })}
                     </div>
                  </div>

               </div>
            </div>

         </div>
      </div>

      {/* BOTTOM TRANSITION MESSAGE */}
      <div className="container-wide mt-24 pt-16 border-t border-borderLight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6 leading-tight">
            EVERY IAM ENVIRONMENT STARTS WITH A DIFFERENT PROBLEM.<br/>
            <span className="text-textSecondary">THE FIRST STEP IS UNDERSTANDING THE IDENTITY LANDSCAPE.</span>
          </h2>
          <p className="body-base text-sm text-textSecondary">
            IdentityShield approaches IAM through discovery, architecture, governance and implementation rather than a one-size-fits-all model.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Discuss Your IAM Environment
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
            Explore IAM Solutions <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default CaseStudies;
