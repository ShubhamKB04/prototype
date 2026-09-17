import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, UserPlus, Fingerprint, GitPullRequest, LayoutGrid, Activity, RotateCw, UserMinus, ShieldCheck } from 'lucide-react';

const IdentityLifecycle = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 1,
      title: 'JOIN',
      heading: 'START WITH THE RIGHT IDENTITY.',
      whatHappens: 'A new employee, contractor or other identity enters the organization.',
      capabilities: ['Identity creation', 'HR-driven workflows', 'Initial role assignment', 'Identity data validation'],
      whyItMatters: 'A consistent onboarding process creates a clearer starting point for identity governance.',
      relatedControls: ['IDENTITY DATA', 'GOVERNANCE'],
      icon: UserPlus,
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full relative p-4 gap-4">
           <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-borderStrong bg-card flex items-center justify-center mb-1 shadow-sm">
                 <UserPlus className="w-4 h-4 text-textSecondary" />
              </div>
              <span className="text-[7px] text-textSecondary tracking-widest uppercase">PERSON</span>
           </div>
           <div className="w-12 h-[1px] bg-borderStrong relative">
              <div className="absolute top-0 left-0 h-full w-full bg-accent animate-[signal-travel_2s_infinite]"></div>
           </div>
           <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-sm border border-accent bg-card flex items-center justify-center mb-1 shadow-sm">
                 <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[7px] font-bold text-textPrimary tracking-widest uppercase">IDENTITY</span>
           </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'VERIFY',
      heading: 'KNOW WHO IS REQUESTING ACCESS.',
      whatHappens: 'The identity is authenticated and relevant access context is evaluated.',
      capabilities: ['Authentication', 'MFA', 'Identity verification', 'Access policies'],
      whyItMatters: 'Authentication is a foundational control for modern identity access.',
      relatedControls: ['ACCESS', 'POLICY'],
      icon: Fingerprint,
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full relative p-4 gap-4">
           <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-sm border border-borderStrong bg-card flex items-center justify-center mb-1">
                 <ShieldCheck className="w-4 h-4 text-textSecondary" />
              </div>
              <span className="text-[7px] text-textSecondary tracking-widest uppercase">IDENTITY</span>
           </div>
           <div className="w-12 h-[1px] bg-borderStrong relative">
              <div className="absolute top-0 left-0 h-full w-full bg-accent animate-[signal-travel_2s_infinite]"></div>
           </div>
           <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-accent bg-card flex items-center justify-center mb-1 shadow-sm">
                 <Fingerprint className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[7px] font-bold text-textPrimary tracking-widest uppercase">VERIFIED</span>
           </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'PROVISION',
      heading: 'GIVE THE RIGHT ACCESS FROM DAY ONE.',
      whatHappens: 'Applications, systems and resources are assigned based on identity and role.',
      capabilities: ['Automated provisioning', 'Role-based access', 'Application assignment', 'Lifecycle workflows'],
      whyItMatters: 'Structured provisioning can reduce manual administration and support consistent access processes.',
      relatedControls: ['IDENTITY DATA', 'ACCESS', 'GOVERNANCE'],
      icon: GitPullRequest,
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full relative p-4 gap-3">
           <div className="w-8 h-8 rounded-sm border border-borderStrong bg-card flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-textSecondary" />
           </div>
           <div className="w-6 h-[1px] bg-accent opacity-50"></div>
           <div className="px-2 py-1 border border-accent bg-card rounded-sm text-[8px] text-accent shadow-sm">
              ROLE
           </div>
           <div className="w-6 h-[1px] bg-accent opacity-50"></div>
           <div className="flex flex-col gap-1">
              <div className="w-4 h-2 bg-accent"></div>
              <div className="w-4 h-2 bg-accent"></div>
              <div className="w-4 h-2 bg-accent"></div>
           </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'ACCESS',
      heading: 'MAKE ACCESS SIMPLE AND CONTROLLED.',
      whatHappens: 'The identity accesses approved applications and resources.',
      capabilities: ['SSO', 'MFA', 'Conditional access', 'Access policies', 'Application access'],
      whyItMatters: 'Organizations need access experiences that balance usability with security controls.',
      relatedControls: ['ACCESS', 'POLICY'],
      icon: LayoutGrid,
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full relative p-4 gap-4">
           <div className="w-8 h-8 rounded-sm border border-borderStrong bg-card flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-textSecondary" />
           </div>
           <div className="w-10 h-[1px] bg-borderStrong relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-1 bg-bgSecondary text-[6px] text-accent border border-accent rounded-sm z-10">POLICY</div>
              <div className="absolute top-0 left-0 h-full w-full bg-accent animate-[signal-travel_2s_infinite]"></div>
           </div>
           <div className="w-10 h-10 rounded-sm border border-accent bg-card flex items-center justify-center shadow-sm">
              <LayoutGrid className="w-5 h-5 text-accent" />
           </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'MONITOR',
      heading: 'UNDERSTAND IDENTITY ACTIVITY.',
      whatHappens: 'Identity activity and access signals are monitored for unusual or important events.',
      capabilities: ['Identity monitoring', 'Risk signals', 'Activity visibility', 'Investigation support'],
      whyItMatters: 'Visibility into identity activity can help security teams investigate relevant signals.',
      relatedControls: ['MONITORING'],
      icon: Activity,
      Visual: () => (
        <div className="flex flex-col items-center justify-center w-full h-full relative p-4">
           <div className="flex justify-between w-full max-w-[120px] mb-4 relative">
              <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-borderStrong -z-10">
                 <div className="w-full h-full bg-accent animate-[signal-travel_2s_infinite]"></div>
              </div>
              <div className="w-6 h-6 rounded-sm border border-borderStrong bg-card flex items-center justify-center"><ShieldCheck className="w-3 h-3 text-textSecondary"/></div>
              <div className="w-6 h-6 rounded-full border border-accent bg-card flex items-center justify-center shadow-sm"><Activity className="w-3 h-3 text-accent"/></div>
           </div>
           <div className="text-[8px] text-accent tracking-widest uppercase border border-accent/30 px-2 py-0.5 rounded-sm bg-card">
              VISIBILITY
           </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'CHANGE',
      heading: 'ACCESS SHOULD EVOLVE WITH THE ROLE.',
      whatHappens: 'Responsibilities, teams or permissions change over time.',
      capabilities: ['Role changes', 'Access reviews', 'Entitlement updates', 'Policy updates', 'Lifecycle workflows'],
      whyItMatters: 'Identity access should reflect changing organizational responsibilities.',
      relatedControls: ['ACCESS', 'GOVERNANCE'],
      icon: RotateCw,
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full relative p-4 gap-4">
           <div className="flex flex-col gap-1 opacity-50">
              <div className="w-4 h-2 bg-borderStrong"></div>
              <div className="w-4 h-2 bg-borderStrong"></div>
              <div className="w-4 h-2 bg-borderStrong"></div>
           </div>
           <div className="w-8 h-[1px] bg-borderStrong relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-card border border-accent p-0.5 z-10 shadow-sm"><RotateCw className="w-2 h-2 text-accent animate-spin-slow" /></div>
           </div>
           <div className="flex flex-col gap-1">
              <div className="w-4 h-2 bg-accent shadow-sm"></div>
              <div className="w-4 h-2 bg-accent shadow-sm"></div>
              <div className="w-4 h-2 bg-borderStrong"></div>
           </div>
        </div>
      )
    },
    {
      id: 7,
      title: 'OFFBOARD',
      heading: 'END ACCESS WHEN THE RELATIONSHIP ENDS.',
      whatHappens: 'An employee, contractor or other identity leaves the organization.',
      capabilities: ['Deprovisioning', 'Account disablement', 'Application access removal', 'Credential revocation', 'Lifecycle tracking'],
      whyItMatters: 'Timely offboarding is an important part of identity lifecycle governance.',
      relatedControls: ['ACCESS', 'GOVERNANCE'],
      icon: UserMinus,
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full relative p-4 gap-4">
           <div className="w-8 h-8 rounded-sm border border-borderStrong bg-card flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-textSecondary" />
           </div>
           <div className="w-12 h-[1px] bg-borderStrong relative">
              <div className="absolute top-0 left-0 h-full w-full bg-textSecondary/30 animate-[signal-travel_2s_infinite]"></div>
           </div>
           <div className="w-10 h-10 rounded-full border border-textSecondary bg-card flex items-center justify-center shadow-sm">
              <UserMinus className="w-5 h-5 text-textSecondary" />
           </div>
        </div>
      )
    }
  ];

  const current = stages[activeStage];
  const allControls = ['IDENTITY DATA', 'ACCESS', 'POLICY', 'PRIVILEGE', 'MONITORING', 'GOVERNANCE'];

  const handleNext = () => setActiveStage((prev) => (prev + 1) % stages.length);
  const handlePrev = () => setActiveStage((prev) => (prev - 1 + stages.length) % stages.length);

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-24 animate-fade-in-up">
        <p className="eyebrow mb-4 text-center md:text-left">THE IDENTITY LIFECYCLE</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section text-center md:text-left text-textPrimary">
            EVERY IDENTITY<br/>
            <span className="text-textSecondary">HAS A LIFECYCLE.</span>
          </h2>
          <p className="body-base max-w-md text-center md:text-left text-sm">
            From onboarding to offboarding, identity changes continuously. A modern IAM strategy needs visibility and control across every stage.
          </p>
        </div>
      </div>

      {/* MAIN INTERACTIVE LIFECYCLE */}
      <div className="container-wide mb-12">
        <div className="bg-card border border-borderLight rounded-sm p-8 md:p-12 relative overflow-hidden shadow-sm">
          
          {/* Desktop/Tablet Horizontal Lifecycle */}
          <div className="hidden md:block relative w-full mb-16">
            <div className="absolute top-[20px] left-[40px] right-[40px] h-[2px] bg-borderStrong z-0">
               {/* Animated progression signal up to active stage */}
               <div 
                 className="h-full bg-gradient-to-r from-transparent via-accent to-accent transition-all duration-500 ease-in-out"
                 style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
               >
                 <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-sm"></div>
               </div>
            </div>
            
            <div className="flex justify-between relative z-10">
              {stages.map((stage, idx) => {
                const isActive = idx === activeStage;
                const isPast = idx < activeStage;
                return (
                  <button 
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className="flex flex-col items-center group relative w-20"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 mb-4
                      ${isActive 
                        ? 'bg-bgSecondary border-accent shadow-sm scale-110' 
                        : isPast 
                          ? 'bg-card border-accent/50'
                          : 'bg-card border-borderStrong group-hover:border-accent/50 group-hover:scale-105'
                      }
                    `}>
                      <span className={`text-[10px] font-bold font-mono transition-colors ${isActive || isPast ? 'text-accent' : 'text-textSecondary'}`}>0{stage.id}</span>
                    </div>
                    <span className={`text-[9px] font-bold tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Lifecycle */}
          <div className="md:hidden flex flex-col gap-6 mb-12 relative pl-8">
            <div className="absolute top-0 bottom-0 left-[20px] w-[2px] bg-borderStrong z-0">
               <div 
                 className="w-full bg-gradient-to-b from-transparent via-accent to-accent transition-all duration-500 ease-in-out"
                 style={{ height: `${(activeStage / (stages.length - 1)) * 100}%` }}
               >
                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-sm"></div>
               </div>
            </div>
            
            {stages.map((stage, idx) => {
              const isActive = idx === activeStage;
              const isPast = idx < activeStage;
              return (
                <button 
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className="flex items-center gap-6 group relative text-left"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 absolute -left-[20px] transform -translate-x-1/2 z-10
                    ${isActive 
                      ? 'bg-bgSecondary border-accent shadow-sm scale-110' 
                      : isPast 
                        ? 'bg-card border-accent/50'
                        : 'bg-card border-borderStrong group-hover:border-accent/50'
                    }
                  `}>
                    <span className={`text-[10px] font-bold font-mono transition-colors ${isActive || isPast ? 'text-accent' : 'text-textSecondary'}`}>0{stage.id}</span>
                  </div>
                  <span className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* LIFECYCLE CONTROL BAR */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-8 border-t border-borderLight mb-12">
            {allControls.map((control) => {
              const isRelevant = current.relatedControls.includes(control);
              return (
                <div key={control} className={`px-3 py-1.5 border rounded-sm text-[8px] font-bold tracking-widest uppercase transition-all duration-500
                  ${isRelevant 
                    ? 'border-accent bg-bgSecondary text-accent shadow-sm' 
                    : 'border-borderStrong bg-card text-textSecondary'
                  }
                `}>
                  {control}
                </div>
              );
            })}
          </div>

          {/* DETAIL PANEL */}
          <div className="bg-card border border-borderLight shadow-sm rounded-sm relative overflow-hidden animate-fade-in-up" key={current.id}>
            
            {/* Top Bar with Number & Navigation */}
            <div className="flex justify-between items-center p-6 border-b border-borderLight bg-bgSecondary">
              <div className="flex items-center gap-4">
                <div className="text-xs font-bold text-accent tracking-widest font-mono">STAGE 0{current.id} / 07</div>
                <div className="hidden sm:block text-[10px] font-bold text-textPrimary tracking-[0.2em] uppercase pl-4 border-l border-borderStrong">{current.title}</div>
              </div>
              <div className="flex gap-4">
                <button onClick={handlePrev} className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="Previous stage">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={handleNext} className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="Next stage">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold text-textPrimary mb-8 leading-tight">{current.heading}</h3>
                
                <div className="space-y-8 mb-8">
                  <div>
                    <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-2">WHAT HAPPENS</h4>
                    <p className="text-sm text-textSecondary leading-relaxed">{current.whatHappens}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-2">WHY IT MATTERS</h4>
                    <p className="text-sm text-textSecondary leading-relaxed">{current.whyItMatters}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col border-l border-borderLight pl-0 lg:pl-12">
                <div className="mb-10 w-full h-32 bg-bgSecondary border border-borderStrong rounded-sm relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                  <current.Visual />
                </div>

                <div>
                  <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-4">IDENTITYSHIELD CAPABILITIES</h4>
                  <ul className="space-y-3">
                    {current.capabilities.map((cap, i) => (
                      <li key={i} className="text-xs text-textSecondary flex items-center">
                        <div className="w-1.5 h-1.5 border border-accent mr-3 rounded-sm opacity-70"></div>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* LIFECYCLE INSIGHT & CTA */}
      <div className="container-wide text-center pt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
          IDENTITY DOESN'T STAND STILL.<br/>
          <span className="text-accent">YOUR IAM STRATEGY SHOULDN'T EITHER.</span>
        </h2>
        <p className="body-base max-w-2xl mx-auto mb-10 text-sm">
          Identity changes as people, applications, responsibilities and access requirements change. Effective lifecycle governance keeps identity processes aligned with those changes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Talk to an IAM Expert
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
            Explore Identity Lifecycle <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default IdentityLifecycle;
