import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Users, Shield, Key, GitMerge, Activity, FileCode, CheckCircle2, AlertCircle } from 'lucide-react';

const IAMProblemFinder = () => {
  const [activeId, setActiveId] = useState(0);

  const challenges = [
    {
      title: 'TOO MANY IDENTITIES',
      desc: 'Employees, contractors, partners and service accounts are spread across multiple systems and applications.',
      approach: 'Create centralized identity visibility and lifecycle governance across the organization.',
      capabilities: ['Identity Governance', 'Identity Lifecycle', 'Access Reviews', 'Provisioning', 'Deprovisioning'],
      cta: 'EXPLORE IDENTITY GOVERNANCE',
      Visual: () => (
        <div className="flex flex-col items-center justify-center w-full h-full relative p-4">
          <div className="flex justify-between w-full max-w-[200px] mb-8 relative">
            <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-borderStrong -z-10">
               <div className="w-1/2 h-full bg-accent animate-[signal-travel_2s_infinite]"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-bgSecondary border border-borderStrong flex items-center justify-center"><Users className="w-3 h-3 text-textSecondary"/></div>
            <div className="w-6 h-6 rounded-full bg-bgSecondary border border-borderStrong flex items-center justify-center"><FileCode className="w-3 h-3 text-textSecondary"/></div>
            <div className="w-6 h-6 rounded-full bg-bgSecondary border border-borderStrong flex items-center justify-center"><Key className="w-3 h-3 text-textSecondary"/></div>
          </div>
          <div className="w-[1px] h-6 bg-accent mb-2"></div>
          <div className="w-12 h-12 rounded-sm bg-card border border-accent flex items-center justify-center shadow-sm mb-2">
            <Shield className="w-6 h-6 text-accent"/>
          </div>
          <span className="text-[8px] font-bold tracking-widest text-textPrimary">CENTRALIZED VISIBILITY</span>
        </div>
      )
    },
    {
      title: 'EXCESSIVE ACCESS',
      desc: 'Users may accumulate permissions across applications and systems as their responsibilities change.',
      approach: 'Establish clearer access policies, reviews and least-privilege controls.',
      capabilities: ['Access Governance', 'Role Management', 'Access Reviews', 'Least Privilege', 'Policy Management'],
      cta: 'EXPLORE ACCESS GOVERNANCE',
      Visual: () => (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-8 h-8 rounded-full bg-bgSecondary border border-borderStrong flex items-center justify-center">
               <Users className="w-4 h-4 text-textSecondary"/>
            </div>
            <div className="flex gap-1">
               {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 bg-borderStrong rounded-full"></div>)}
            </div>
          </div>
          <div className="w-full max-w-[150px] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mb-4"></div>
          <div className="px-3 py-1.5 border border-accent bg-card flex items-center gap-2 rounded-sm shadow-sm">
             <CheckCircle2 className="w-3 h-3 text-accent" />
             <span className="text-[8px] font-bold tracking-widest text-textPrimary">POLICY CONTROL</span>
          </div>
        </div>
      )
    },
    {
      title: 'PRIVILEGED RISK',
      desc: 'Administrative and privileged identities can have powerful access to critical infrastructure and systems.',
      approach: 'Strengthen privileged access controls, monitoring and approval workflows.',
      capabilities: ['PAM', 'JIT Access', 'Credential Protection', 'Session Monitoring', 'Privileged Workflows'],
      cta: 'EXPLORE PRIVILEGED ACCESS',
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full p-4 relative gap-3">
          <div className="flex flex-col items-center">
             <div className="w-8 h-8 bg-bgSecondary border border-accent/50 rounded-sm flex items-center justify-center mb-1"><Users className="w-4 h-4 text-textPrimary"/></div>
             <span className="text-[7px] text-textSecondary tracking-widest">ADMIN</span>
          </div>
          <div className="w-8 h-[1px] bg-borderStrong relative">
             <div className="absolute top-0 left-0 w-full h-full bg-accent animate-[signal-travel_2s_infinite]"></div>
          </div>
          <div className="flex flex-col items-center">
             <div className="px-2 py-1 bg-card border border-accent rounded-sm shadow-sm mb-1 text-[8px] font-bold text-accent">JIT APPROVAL</div>
             <span className="text-[7px] text-textSecondary tracking-widest">MONITORED</span>
          </div>
          <div className="w-8 h-[1px] bg-borderStrong"></div>
          <div className="w-8 h-8 bg-bgSecondary border border-borderStrong rounded-sm flex items-center justify-center"><Activity className="w-4 h-4 text-textSecondary"/></div>
        </div>
      )
    },
    {
      title: 'MANUAL LIFECYCLES',
      desc: 'Manual joiner, mover and leaver processes can create delays and inconsistent access changes.',
      approach: 'Streamline identity lifecycle workflows across employees and other identities.',
      capabilities: ['Joiner/Mover/Leaver', 'Provisioning', 'Deprovisioning', 'Workflow Automation', 'Lifecycle Visibility'],
      cta: 'EXPLORE IDENTITY LIFECYCLE',
      Visual: () => (
        <div className="flex items-center justify-between w-full max-w-[220px] mx-auto h-full p-4 relative">
           <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-borderStrong -z-10">
              <div className="w-full h-full bg-gradient-to-r from-accent/10 via-accent to-accent/10 opacity-50"></div>
           </div>
           {['JOIN', 'MOVE', 'CHANGE', 'LEAVE'].map((step, i) => (
             <div key={step} className="flex flex-col items-center group">
                <div className={`w-3 h-3 rounded-full border border-borderStrong bg-bgSecondary mb-2 ${i === 1 ? 'border-accent bg-accent shadow-sm' : ''}`}></div>
                <span className={`text-[7px] tracking-widest ${i === 1 ? 'text-textPrimary font-bold' : 'text-textSecondary'}`}>{step}</span>
             </div>
           ))}
        </div>
      )
    },
    {
      title: 'FRAGMENTED AUTHENTICATION',
      desc: 'Users may encounter different authentication experiences across enterprise applications.',
      approach: 'Centralize authentication experiences and apply consistent access policies.',
      capabilities: ['SSO', 'MFA', 'Federation', 'Authentication Policies', 'Application Access'],
      cta: 'EXPLORE SSO & AUTHENTICATION',
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full p-4 gap-6">
           <div className="w-10 h-10 rounded-full bg-card border border-accent flex items-center justify-center shadow-sm">
              <Key className="w-4 h-4 text-accent"/>
           </div>
           <div className="flex flex-col gap-2 relative">
             <div className="absolute top-1/2 -left-4 w-4 h-[1px] bg-accent"></div>
             <div className="w-12 h-4 border border-borderStrong bg-bgSecondary rounded-sm"></div>
             <div className="w-12 h-4 border border-accent/50 bg-card rounded-sm"></div>
             <div className="w-12 h-4 border border-borderStrong bg-bgSecondary rounded-sm"></div>
           </div>
        </div>
      )
    },
    {
      title: 'LIMITED IDENTITY VISIBILITY',
      desc: 'Identity activity can be difficult to understand when signals are distributed across applications, systems and security tools.',
      approach: 'Bring identity-related signals together to support investigation and security visibility.',
      capabilities: ['Identity Monitoring', 'Risk Signals', 'Identity Analytics', 'Detection', 'Investigation'],
      cta: 'EXPLORE IDENTITY THREAT RESPONSE',
      Visual: () => (
        <div className="flex items-center justify-center w-full h-full p-4 gap-4">
           <div className="flex flex-col gap-1">
              <div className="w-6 h-1 bg-borderStrong"></div>
              <div className="w-6 h-1 bg-borderStrong"></div>
              <div className="w-6 h-1 bg-accent animate-pulse"></div>
           </div>
           <div className="w-8 h-[1px] bg-borderStrong relative"><div className="absolute top-0 left-0 w-full h-full bg-accent animate-[signal-travel_2s_infinite]"></div></div>
           <div className="w-10 h-10 rounded-sm bg-card border border-accent flex flex-col items-center justify-center shadow-sm">
              <AlertCircle className="w-4 h-4 text-accent mb-1"/>
           </div>
        </div>
      )
    }
  ];

  const current = challenges[activeId];

  const handleNext = () => setActiveId((prev) => (prev + 1) % challenges.length);
  const handlePrev = () => setActiveId((prev) => (prev - 1 + challenges.length) % challenges.length);

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up">
        <p className="eyebrow mb-4 text-center md:text-left">FIND YOUR IAM CHALLENGE</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section text-center md:text-left text-textPrimary">
            WHERE DOES YOUR<br/>
            IDENTITY STRATEGY NEED<br/>
            <span className="text-textSecondary">THE MOST CONTROL?</span>
          </h2>
          <p className="body-base max-w-md text-center md:text-left">
            Every organization has a different identity landscape. Select the challenge that most closely matches your environment to explore the relevant IAM capabilities.
          </p>
        </div>
      </div>

      <div className="container-wide mb-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* LEFT: SELECTOR */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {challenges.map((chal, idx) => (
              <button
                key={idx}
                onClick={() => setActiveId(idx)}
                className={`text-left w-full flex items-center justify-between p-6 border transition-all duration-300 rounded-sm group
                  ${activeId === idx 
                    ? 'border-accent bg-card shadow-sm' 
                    : 'border-borderLight bg-bgSecondary hover:bg-card hover:border-borderStrong hover:translate-x-1'
                  }
                `}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xs font-bold font-mono transition-colors ${activeId === idx ? 'text-accent' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-sm md:text-base font-bold tracking-widest uppercase transition-colors ${activeId === idx ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                    {chal.title}
                  </span>
                </div>
                {activeId === idx && <div className="w-2 h-2 rounded-full bg-accent"></div>}
              </button>
            ))}
          </div>

          {/* RIGHT: DYNAMIC RESULT PANEL */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Progress & Nav */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-accent tracking-widest font-mono">CHALLENGE 0{activeId + 1} / 06</span>
                <div className="flex gap-1">
                  {challenges.map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeId ? 'bg-accent' : 'bg-borderStrong'}`}></div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={handlePrev} className="text-[10px] font-bold text-textSecondary hover:text-textPrimary tracking-widest uppercase transition-colors flex items-center" aria-label="Previous challenge">
                  <ChevronLeft className="w-4 h-4 mr-1" /> PREVIOUS
                </button>
                <button onClick={handleNext} className="text-[10px] font-bold text-textSecondary hover:text-textPrimary tracking-widest uppercase transition-colors flex items-center" aria-label="Next challenge">
                  NEXT CHALLENGE <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Panel Content */}
            <div className="bg-card border border-borderLight shadow-sm rounded-sm flex-grow flex flex-col relative overflow-hidden animate-fade-in-up" key={current.title}>
              
              <div className="p-8 md:p-12 flex-grow flex flex-col">
                <div className="mb-10">
                   <h3 className="text-2xl font-bold text-textPrimary mb-2">{current.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-10">
                  <div>
                    <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">WHAT IT CAN LOOK LIKE</h4>
                    <p className="text-textSecondary text-sm leading-relaxed mb-8">{current.desc}</p>
                    
                    <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">IDENTITYSHIELD APPROACH</h4>
                    <p className="text-textPrimary text-sm leading-relaxed">{current.approach}</p>
                  </div>
                  
                  <div className="flex flex-col">
                    <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">CAPABILITIES</h4>
                    <ul className="space-y-3 mb-8">
                      {current.capabilities.map((cap, i) => (
                        <li key={i} className="text-xs text-textSecondary flex items-center">
                           <div className="w-1.5 h-1.5 border border-accent mr-3 rounded-sm"></div>
                           {cap}
                        </li>
                      ))}
                    </ul>

                    {/* Small Interactive Visual */}
                    <div className="mt-auto h-32 bg-bgSecondary border border-borderStrong rounded-sm relative overflow-hidden flex items-center justify-center">
                       <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                       <current.Visual />
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-borderLight flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                     <span className="text-[9px] font-bold text-textSecondary tracking-widest uppercase block mb-1">NEXT STEP</span>
                  </div>
                  <button className="text-xs font-bold text-accent tracking-widest uppercase hover:text-textPrimary transition-colors flex items-center group">
                    {current.cta} <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PERSONALIZATION & CTA */}
      <div className="container-wide text-center pt-12 border-t border-borderLight">
        <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
          YOUR IDENTITY LANDSCAPE IS UNIQUE.<br/>
          <span className="text-accent">YOUR IAM APPROACH SHOULD REFLECT IT.</span>
        </h2>
        <p className="body-base max-w-2xl mx-auto mb-10 text-sm">
          Use this exploration as a starting point for understanding which identity capabilities may be relevant to your environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Talk to an IAM Expert
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
            Explore All IAM Solutions <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default IAMProblemFinder;
