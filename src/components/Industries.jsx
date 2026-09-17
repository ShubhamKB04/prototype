import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Shield, CheckCircle2, ChevronDown } from 'lucide-react';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeCapability, setActiveCapability] = useState(null);

  const industries = [
    {
      id: 1,
      title: 'BANKING & FINANCIAL SERVICES',
      shortTitle: 'BANKING',
      headline: 'PROTECTING ACCESS ACROSS HIGH-VALUE SYSTEMS.',
      environment: 'Financial organizations may operate across employees, contractors, branches, business applications, cloud environments and privileged infrastructure.',
      considerations: ['Privileged access', 'Application access', 'Identity governance', 'Segregation of duties', 'Access reviews', 'Third-party identities'],
      focus: ['IDENTITY GOVERNANCE', 'PRIVILEGED ACCESS', 'ACCESS CONTROL', 'IDENTITY LIFECYCLE'],
      visualNodes: ['WORKFORCE', 'APPLICATIONS', 'PRIVILEGE', 'GOVERNANCE', 'THIRD PARTIES']
    },
    {
      id: 2,
      title: 'HEALTHCARE',
      shortTitle: 'HEALTHCARE',
      headline: 'IDENTITY ACROSS PEOPLE, SYSTEMS AND SENSITIVE DATA.',
      environment: 'Healthcare environments can involve clinicians, administrative teams, contractors, devices and numerous applications.',
      considerations: ['Workforce identities', 'Application access', 'Privileged accounts', 'Lifecycle management', 'Access visibility', 'Third-party access'],
      focus: ['IDENTITY GOVERNANCE', 'LIFECYCLE', 'AUTHENTICATION', 'PRIVILEGED ACCESS'],
      visualNodes: ['CLINICIANS', 'APPLICATIONS', 'DEVICES', 'PRIVILEGE', 'DATA ACCESS']
    },
    {
      id: 3,
      title: 'TECHNOLOGY',
      shortTitle: 'TECHNOLOGY',
      headline: 'IDENTITY FOR CLOUD-FIRST ENVIRONMENTS.',
      environment: 'Technology organizations may manage distributed teams, cloud platforms, SaaS applications, developers and engineering infrastructure.',
      considerations: ['Cloud identities', 'Developer access', 'SaaS applications', 'Privileged access', 'API access', 'Rapid role changes'],
      focus: ['CLOUD IDENTITY', 'ACCESS GOVERNANCE', 'PRIVILEGED ACCESS', 'IDENTITY SECURITY'],
      visualNodes: ['DEVELOPERS', 'CLOUD', 'SAAS', 'APIs', 'PRIVILEGE']
    },
    {
      id: 4,
      title: 'MANUFACTURING',
      shortTitle: 'MANUFACTURING',
      headline: 'CONNECTING WORKFORCE AND OPERATIONAL ACCESS.',
      environment: 'Manufacturing environments can span corporate systems, operational technology, facilities and distributed workforce identities.',
      considerations: ['Workforce access', 'Shared environments', 'Privileged accounts', 'Remote access', 'Third-party access', 'Lifecycle changes'],
      focus: ['IDENTITY LIFECYCLE', 'PRIVILEGED ACCESS', 'ACCESS GOVERNANCE', 'IDENTITY VISIBILITY'],
      visualNodes: ['WORKFORCE', 'OT', 'REMOTE ACCESS', 'FACILITIES', 'PRIVILEGE']
    },
    {
      id: 5,
      title: 'RETAIL',
      shortTitle: 'RETAIL',
      headline: 'MANAGING IDENTITY AT ENTERPRISE SCALE.',
      environment: 'Retail organizations can manage large distributed workforces, stores, applications, suppliers and customer-facing systems.',
      considerations: ['Distributed workforce', 'Application access', 'Seasonal workers', 'Third-party identities', 'Privileged accounts', 'Access removal'],
      focus: ['LIFECYCLE', 'SSO', 'ACCESS GOVERNANCE', 'PRIVILEGED ACCESS'],
      visualNodes: ['STORES', 'WORKFORCE', 'APPLICATIONS', 'SUPPLIERS', 'ACCESS']
    },
    {
      id: 6,
      title: 'EDUCATION',
      shortTitle: 'EDUCATION',
      headline: 'BALANCING ACCESS AND IDENTITY ACROSS A DIVERSE COMMUNITY.',
      environment: 'Educational institutions may manage students, faculty, administrators, contractors and external collaborators across many applications.',
      considerations: ['Student identities', 'Faculty access', 'Application access', 'Identity lifecycle', 'External users', 'Privileged accounts'],
      focus: ['IDENTITY LIFECYCLE', 'SSO', 'ACCESS GOVERNANCE', 'IDENTITY VISIBILITY'],
      visualNodes: ['STUDENTS', 'FACULTY', 'APPLICATIONS', 'EXTERNAL USERS', 'ADMIN']
    },
    {
      id: 7,
      title: 'GOVERNMENT',
      shortTitle: 'GOVERNMENT',
      headline: 'GOVERNING ACCESS ACROSS COMPLEX PUBLIC ENVIRONMENTS.',
      environment: 'Government organizations may manage large identity populations, contractors, agencies, applications and infrastructure.',
      considerations: ['Workforce identity', 'Contractor access', 'Privileged access', 'Application access', 'Identity governance', 'Lifecycle controls'],
      focus: ['IDENTITY GOVERNANCE', 'PRIVILEGED ACCESS', 'LIFECYCLE', 'ACCESS CONTROL'],
      visualNodes: ['WORKFORCE', 'AGENCIES', 'CONTRACTORS', 'APPLICATIONS', 'INFRASTRUCTURE']
    }
  ];

  const capabilityDetails = {
    'PRIVILEGED ACCESS': 'Privileged identities may require additional controls, approval workflows and monitoring depending on the environment.',
    'IDENTITY GOVERNANCE': 'Governance processes can support visibility into identities, roles and entitlements.',
    'IDENTITY LIFECYCLE': 'Lifecycle workflows can help manage access changes as identities join, move or leave.',
    'ACCESS CONTROL': 'Consistent access controls help manage authentication and authorization across applications.',
    'LIFECYCLE': 'Lifecycle workflows can help manage access changes as identities join, move or leave.',
    'AUTHENTICATION': 'Centralized authentication can provide a consistent experience across applications.',
    'CLOUD IDENTITY': 'Cloud identity controls can help manage access to distributed infrastructure and platforms.',
    'ACCESS GOVERNANCE': 'Governance processes can support visibility into identities, roles and entitlements.',
    'IDENTITY SECURITY': 'Identity security context can assist teams in understanding access patterns and events.',
    'IDENTITY VISIBILITY': 'Consistent identity visibility can help organizations understand who has access to what.',
    'SSO': 'Single Sign-On (SSO) can help centralize authentication across the enterprise application portfolio.'
  };

  const handleNext = () => {
    setActiveIndustry((prev) => (prev + 1) % industries.length);
    setActiveCapability(null);
  };

  const handlePrev = () => {
    setActiveIndustry((prev) => (prev - 1 + industries.length) % industries.length);
    setActiveCapability(null);
  };

  const currentInd = industries[activeIndustry];

  return (
    <section id="industries" className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-4 text-accent">INDUSTRIES</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section text-textPrimary">
            IDENTITY SECURITY<br/>
            <span className="text-textSecondary">ACROSS COMPLEX ENVIRONMENTS.</span>
          </h2>
          <p className="body-base max-w-lg text-sm text-textSecondary">
            Every industry has different users, applications, regulatory considerations and access patterns. IdentityShield is designed around the identity challenges that organizations may face across diverse environments.
          </p>
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
                   <span className="text-[10px] font-bold font-mono text-accent mb-1">0{currentInd.id} / 0{industries.length}</span>
                   <span className="text-xs font-bold text-textPrimary tracking-widest uppercase">{currentInd.title}</span>
                 </div>
                 <button onClick={handleNext} className="p-2 text-textSecondary hover:text-textPrimary transition-colors">
                   <ChevronRight className="w-5 h-5" />
                 </button>
               </div>
            </div>

            {/* DESKTOP: VERTICAL NAVIGATION */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 relative">
               <div className="absolute top-0 bottom-0 left-[27px] w-[1px] bg-borderStrong z-0"></div>
               {industries.map((ind, i) => {
                 const isActive = activeIndustry === i;
                 return (
                   <button
                     key={i}
                     onClick={() => { setActiveIndustry(i); setActiveCapability(null); }}
                     className={`text-left p-4 rounded-sm flex items-center gap-6 group relative z-10 transition-all duration-300
                       ${isActive ? 'bg-card border border-borderLight shadow-sm' : 'bg-transparent border border-transparent hover:translate-x-2'}
                     `}
                   >
                     <div className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors
                       ${isActive ? 'bg-bgSecondary border border-accent shadow-sm' : 'bg-card border border-borderStrong group-hover:border-accent/50'}
                     `}>
                       <span className={`text-[9px] font-bold font-mono ${isActive ? 'text-accent' : 'text-textSecondary'}`}>0{ind.id}</span>
                     </div>
                     <span className={`text-xs font-bold tracking-widest uppercase transition-colors
                       ${isActive ? 'text-textPrimary' : 'text-textSecondary group-hover:text-accent'}
                     `}>
                       {ind.shortTitle}
                     </span>
                     {isActive && <ArrowRight className="w-4 h-4 text-accent ml-auto" />}
                   </button>
                 )
               })}
            </div>

            {/* RIGHT: DETAIL + VISUALIZATION */}
            <div className="lg:col-span-8 flex flex-col gap-8">
               
               {/* Visualization */}
               <div className="bg-card border border-borderLight shadow-sm rounded-sm h-[300px] md:h-[400px] relative overflow-hidden animate-fade-in-up">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                 
                 <div className="absolute top-4 left-4 text-[9px] font-bold text-textSecondary tracking-widest uppercase px-2 py-1 border border-borderStrong bg-bgSecondary shadow-sm rounded-sm">
                   ENVIRONMENT: {currentInd.shortTitle}
                 </div>
                 
                 <div className="relative w-full h-full flex items-center justify-center">
                    
                    {/* SVG Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                      <g style={{ transform: 'translate(50%, 50%)' }}>
                        {currentInd.visualNodes.map((node, i) => {
                          const rad = (i * (360 / currentInd.visualNodes.length)) * (Math.PI / 180);
                          const x = Math.cos(rad) * 120;
                          const y = Math.sin(rad) * 120;
                          return (
                            <g key={`${currentInd.id}-${i}`}>
                              <line x1="0" y1="0" x2={x} y2={y} stroke="var(--color-border-strong)" strokeWidth="1" />
                              <circle r="2" fill="var(--color-accent)" className="animate-[signal-travel_3s_infinite_linear]" style={{ animationDelay: `${i * 0.5}s` }}>
                                <animateMotion dur="3s" repeatCount="indefinite" path={`M 0 0 L ${x} ${y}`} />
                              </circle>
                            </g>
                          )
                        })}
                      </g>
                    </svg>

                    {/* Central Node */}
                    <div className="absolute z-20 flex flex-col items-center">
                       <div className="w-16 h-16 rounded-sm border border-accent bg-bgSecondary flex items-center justify-center shadow-sm relative">
                         <Shield className="w-6 h-6 text-accent" />
                       </div>
                       <span className="text-[8px] font-bold text-textPrimary tracking-widest uppercase mt-3 px-2 py-1 bg-card border border-borderStrong shadow-sm rounded-sm">
                         IDENTITYSHIELD
                       </span>
                    </div>

                    {/* Outer Nodes */}
                    {currentInd.visualNodes.map((node, i) => {
                      const rad = (i * (360 / currentInd.visualNodes.length)) * (Math.PI / 180);
                      const x = Math.cos(rad) * 120;
                      const y = Math.sin(rad) * 120;
                      return (
                        <div 
                          key={`${currentInd.id}-node-${i}`}
                          className="absolute z-10 flex flex-col items-center animate-fade-in-up"
                          style={{ transform: `translate(${x}px, ${y}px)` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-card border border-accent/50 mb-2 shadow-sm"></div>
                          <span className="text-[7px] font-bold text-textSecondary tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm border border-borderStrong bg-card shadow-sm">
                            {node}
                          </span>
                        </div>
                      )
                    })}

                 </div>
               </div>

               {/* Detail Panel */}
               <div className="bg-card border border-borderLight shadow-sm rounded-sm p-8 md:p-10 relative overflow-hidden animate-fade-in-up flex flex-col min-h-[400px]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                  
                  <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-4 block">INDUSTRY: {currentInd.title}</span>
                  <h3 className="text-2xl font-bold text-textPrimary mb-8 leading-tight">{currentInd.headline}</h3>
                  
                  <div className="mb-8">
                     <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-3 block">ENVIRONMENT</span>
                     <p className="text-sm text-textSecondary leading-relaxed">
                       {currentInd.environment}
                     </p>
                  </div>

                  <div className="mb-10">
                     <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-3 flex items-center">
                       TYPICAL IAM CONSIDERATIONS
                     </span>
                     <div className="flex flex-wrap gap-2">
                       {currentInd.considerations.map((cons, i) => (
                         <div key={i} className="text-[9px] font-bold text-textSecondary tracking-widest uppercase px-3 py-1.5 border border-borderStrong rounded-sm bg-bgSecondary">
                           {cons}
                         </div>
                       ))}
                     </div>
                  </div>

                  <div className="mt-auto border-t border-borderLight pt-8">
                     <span className="text-[8px] font-bold text-accent tracking-[0.2em] uppercase mb-4 block">IDENTITYSHIELD FOCUS</span>
                     <div className="flex flex-wrap gap-3">
                       {currentInd.focus.map((foc, i) => {
                         const isActive = activeCapability === foc;
                         return (
                           <button 
                             key={i}
                             onClick={() => setActiveCapability(isActive ? null : foc)}
                             className={`text-[9px] font-bold tracking-widest uppercase px-4 py-2 border rounded-sm transition-all
                               ${isActive ? 'bg-bgSecondary border-accent text-accent shadow-sm' : 'bg-card border-borderStrong text-textPrimary hover:border-accent/50'}
                             `}
                           >
                             {foc}
                           </button>
                         )
                       })}
                     </div>
                     
                     {/* Capability Explanation Panel */}
                     <div className={`mt-4 overflow-hidden transition-all duration-300 ${activeCapability ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-4 border border-borderStrong bg-bgSecondary rounded-sm shadow-sm relative">
                           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent/50 to-transparent"></div>
                           <p className="text-xs text-textSecondary leading-relaxed">
                             {activeCapability && (capabilityDetails[activeCapability] || 'This is a common IAM consideration in this environment that often requires specific controls or visibility.')}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* BOTTOM TRUST MESSAGE */}
      <div className="container-wide mt-24 border-t border-borderLight pt-16 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
            EVERY INDUSTRY HAS DIFFERENT IDENTITIES.<br/>
            <span className="text-accent">THE NEED FOR CONTROL IS UNIVERSAL.</span>
          </h2>
          <p className="body-base text-sm text-textSecondary">
            IdentityShield can be adapted around the identity, access and governance requirements of different organizational environments.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Talk to an IAM Expert
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

export default Industries;
