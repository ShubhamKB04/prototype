import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Network, Activity, Users, Lock, Key, ShieldCheck, Fingerprint, GitMerge } from 'lucide-react';

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: '01',
      category: 'IDENTITY GOVERNANCE',
      heading: 'KNOW WHO HAS ACCESS. KNOW WHY.',
      desc: 'Establish visibility and governance across identities, roles, permissions and access reviews.',
      capabilities: [
        'Identity lifecycle governance',
        'Role and entitlement management',
        'Access certification',
        'Segregation of duties',
        'Policy-based governance',
        'Audit visibility'
      ],
      clientValue: ['Improve access visibility', 'Support governance processes', 'Reduce unnecessary access', 'Simplify audit preparation'],
      cta: 'EXPLORE IDENTITY GOVERNANCE',
      icon: Network,
      Visual: () => (
        <div className="relative w-full h-48 md:h-64 flex flex-col items-center justify-center">
          <div className="flex gap-12 mb-8">
            <div className="flex flex-col items-center group">
              <div className="w-10 h-10 rounded-full border border-accent bg-card flex items-center justify-center z-10 shadow-sm">
                <Users className="w-4 h-4 text-accent" />
              </div>
              <span className="text-[9px] mt-2 text-textPrimary font-bold tracking-widest">USERS</span>
            </div>
          </div>
          <div className="absolute top-[35%] w-[1px] h-8 bg-accent">
            <div className="w-full h-1/2 bg-card animate-[signal-travel_2s_infinite]"></div>
          </div>
          <div className="flex gap-8">
            {['ROLES', 'POLICIES', 'REVIEWS'].map((item, i) => (
              <div key={item} className="flex flex-col items-center">
                <div className="w-24 h-1 border-t border-borderStrong absolute top-[52%] -z-10"></div>
                <div className="px-3 py-1.5 border border-borderStrong bg-bgSecondary text-[9px] font-bold text-textSecondary tracking-widest">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: '02',
      category: 'PRIVILEGED ACCESS',
      heading: 'PROTECT YOUR MOST POWERFUL ACCESS.',
      desc: 'Control and monitor privileged identities and high-impact access to critical systems.',
      capabilities: [
        'Privileged account management',
        'Least-privilege controls',
        'Session monitoring',
        'Credential protection',
        'Just-in-time access',
        'Privileged access workflows'
      ],
      clientValue: ['Secure critical infrastructure', 'Prevent lateral movement', 'Monitor admin sessions', 'Protect credentials'],
      cta: 'EXPLORE PRIVILEGED ACCESS',
      icon: Lock,
      Visual: () => (
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="px-3 py-2 border border-borderStrong bg-bgSecondary text-[9px] text-textSecondary tracking-widest flex items-center">
              <Users className="w-3 h-3 mr-2" /> ADMIN
            </div>
            <div className="flex-1 h-[1px] bg-borderStrong max-w-[60px] relative">
               <div className="absolute left-0 w-1/3 h-full bg-accent animate-[signal-travel_2s_infinite]"></div>
            </div>
            <div className="w-14 h-14 rounded-full border border-accent bg-card flex items-center justify-center shadow-sm animate-pulse-glow">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1 h-[1px] bg-borderStrong max-w-[60px] relative">
               <div className="absolute left-0 w-1/3 h-full bg-accent animate-[signal-travel_2s_infinite_0.5s]"></div>
            </div>
            <div className="px-3 py-2 border border-borderStrong bg-bgSecondary text-[9px] text-textSecondary tracking-widest flex items-center">
               SERVER <ServerIcon className="w-3 h-3 ml-2" />
            </div>
          </div>
          <div className="absolute top-[70%] text-[8px] text-accent tracking-widest uppercase border border-accent/30 px-2 py-0.5 rounded-sm bg-bgSecondary">
            JIT APPROVAL + MONITORING
          </div>
        </div>
      )
    },
    {
      id: '03',
      category: 'SSO & AUTHENTICATION',
      heading: 'ONE IDENTITY. SEAMLESS ACCESS.',
      desc: 'Simplify secure access across enterprise applications with modern authentication experiences.',
      capabilities: [
        'Single Sign-On',
        'Multi-Factor Authentication',
        'Adaptive authentication',
        'Application access',
        'Federation',
        'Authentication policies'
      ],
      clientValue: ['Frictionless login', 'Stronger authentication', 'Reduced password fatigue', 'Centralized access'],
      cta: 'EXPLORE AUTHENTICATION',
      icon: Key,
      Visual: () => (
        <div className="relative w-full h-48 md:h-64 flex flex-col items-center justify-center">
           <div className="w-12 h-12 rounded-sm border border-accent bg-card flex items-center justify-center mb-6 shadow-sm">
             <Fingerprint className="w-6 h-6 text-accent" />
           </div>
           <div className="flex gap-8 items-center">
             <div className="w-[1px] h-8 bg-borderStrong absolute top-[45%] left-[30%] rotate-45 -z-10"></div>
             <div className="w-[1px] h-8 bg-accent absolute top-[45%] left-[50%] -z-10 animate-pulse-glow"></div>
             <div className="w-[1px] h-8 bg-borderStrong absolute top-[45%] right-[30%] -rotate-45 -z-10"></div>
             
             <div className="px-3 py-2 border border-borderStrong bg-bgSecondary text-[9px] text-textSecondary tracking-widest">APP 1</div>
             <div className="px-3 py-2 border border-accent/30 bg-card text-[9px] text-textPrimary tracking-widest drop-shadow-sm">APP 2</div>
             <div className="px-3 py-2 border border-borderStrong bg-bgSecondary text-[9px] text-textSecondary tracking-widest">APP 3</div>
           </div>
        </div>
      )
    },
    {
      id: '04',
      category: 'IDENTITY THREAT RESPONSE',
      heading: 'SEE IDENTITY RISK BEFORE IT ESCALATES.',
      desc: 'Bring identity activity and security signals together to help teams investigate suspicious identity behavior.',
      capabilities: [
        'Identity monitoring',
        'Risk signals',
        'Suspicious activity detection',
        'Investigation workflows',
        'Identity-focused response',
        'Security visibility'
      ],
      clientValue: ['Detect compromised accounts', 'Speed up investigations', 'Automate response actions', 'Enhance SOC visibility'],
      cta: 'EXPLORE IDENTITY THREAT RESPONSE',
      icon: Activity,
      Visual: () => (
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
          <div className="flex items-center w-full max-w-sm justify-between px-8 relative">
            <div className="absolute top-1/2 left-10 right-10 h-[1px] bg-borderStrong -z-10">
              <div className="h-full w-1/4 bg-accent animate-[signal-travel_2s_infinite]"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-borderStrong bg-bgSecondary flex items-center justify-center mb-2"><Activity className="w-4 h-4 text-textSecondary" /></div>
              <span className="text-[8px] text-textSecondary tracking-widest">SIGNAL</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-sm border border-accent bg-card flex items-center justify-center mb-2 shadow-sm">
                <AlertCircleIcon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-[8px] text-textPrimary font-bold tracking-widest">DETECTION</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-borderStrong bg-bgSecondary flex items-center justify-center mb-2"><ShieldCheck className="w-4 h-4 text-textSecondary" /></div>
              <span className="text-[8px] text-textSecondary tracking-widest">RESPONSE</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: '05',
      category: 'IDENTITY LIFECYCLE',
      heading: 'FROM JOINER TO LEAVER.',
      desc: 'Streamline identity lifecycle processes across employees, contractors and other identities.',
      capabilities: [
        'Automated provisioning',
        'Deprovisioning',
        'Joiner/Mover/Leaver workflows',
        'Application access',
        'Role changes',
        'Lifecycle visibility'
      ],
      clientValue: ['Accelerate onboarding', 'Ensure clean offboarding', 'Reduce manual helpdesk tickets', 'Maintain compliance'],
      cta: 'EXPLORE IDENTITY LIFECYCLE',
      icon: GitMerge,
      Visual: () => (
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
           <div className="flex w-full max-w-sm justify-between relative px-4">
             <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-borderStrong -z-10">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 animate-pulse-glow"></div>
             </div>
             {['JOIN', 'MOVE', 'LEAVE'].map((phase, i) => (
                <div key={phase} className="flex flex-col items-center bg-transparent px-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border mb-2 ${i === 1 ? 'border-accent bg-card shadow-sm' : 'border-borderStrong bg-bgSecondary'}`}>
                    <span className={`text-[10px] font-bold ${i === 1 ? 'text-accent' : 'text-textSecondary'}`}>0{i+1}</span>
                  </div>
                  <span className={`text-[9px] font-bold tracking-widest ${i === 1 ? 'text-textPrimary' : 'text-textSecondary'}`}>{phase}</span>
                </div>
             ))}
           </div>
        </div>
      )
    },
    {
      id: '06',
      category: 'ZERO TRUST',
      heading: 'NEVER TRUST. ALWAYS VERIFY.',
      desc: 'Build identity-aware access controls around the principle of continuously verifying users, devices and access context.',
      capabilities: [
        'Identity verification',
        'Least privilege',
        'Continuous evaluation',
        'Device context',
        'Access policies',
        'Conditional access'
      ],
      clientValue: ['Implement modern security architecture', 'Secure remote work', 'Reduce attack surface', 'Enforce granular access'],
      cta: 'EXPLORE ZERO TRUST',
      icon: ShieldCheck,
      Visual: () => (
        <div className="relative w-full h-48 md:h-64 flex flex-col items-center justify-center">
           <div className="flex gap-4 mb-8">
             <div className="px-3 py-1.5 border border-borderStrong bg-bgSecondary text-[9px] font-bold text-textSecondary tracking-widest">USER</div>
             <div className="px-3 py-1.5 border border-borderStrong bg-bgSecondary text-[9px] font-bold text-textSecondary tracking-widest">DEVICE</div>
             <div className="px-3 py-1.5 border border-borderStrong bg-bgSecondary text-[9px] font-bold text-textSecondary tracking-widest">CONTEXT</div>
           </div>
           <div className="w-[1px] h-6 bg-accent mb-4">
             <div className="w-full h-full bg-accent animate-pulse-glow"></div>
           </div>
           <div className="px-4 py-2 rounded-sm border border-accent bg-card text-accent text-[10px] font-bold tracking-widest shadow-sm flex items-center">
              CONTINUOUS VERIFICATION
           </div>
        </div>
      )
    }
  ];

  const current = solutions[activeSolution];

  const handleNext = () => setActiveSolution((prev) => (prev + 1) % solutions.length);
  const handlePrev = () => setActiveSolution((prev) => (prev - 1 + solutions.length) % solutions.length);

  return (
    <section id="solutions" className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-24 animate-fade-in-up">
        <p className="eyebrow mb-4 text-center md:text-left">THE IDENTITYSHIELD APPROACH</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section text-center md:text-left text-textPrimary">
            ONE PLATFORM.<br/>
            EVERY IDENTITY.<br/>
            <span className="text-textSecondary">EVERY ACCESS.</span>
          </h2>
          <p className="body-base max-w-md text-center md:text-left">
            IdentityShield brings identity governance, access management, privileged security and identity protection together into a unified IAM strategy.
          </p>
        </div>
      </div>

      {/* PRIMARY CENTRAL VISUAL */}
      <div className="container-wide mb-32 hidden md:block animate-fade-in-up delay-100">
        <div className="relative w-full max-w-4xl mx-auto h-[350px] flex items-center justify-center border border-borderLight rounded-lg bg-card overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Center */}
          <div className="absolute z-30 flex flex-col items-center">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-2 px-3 py-1 bg-card border border-accent/30 rounded-full">UNIFIED IAM</span>
            <div className="w-20 h-20 rounded-full border border-accent bg-card flex items-center justify-center shadow-sm relative">
              <div className="absolute inset-0 rounded-full border border-accent/40 animate-[ping_4s_ease-in-out_infinite]"></div>
              <span className="text-[8px] font-bold text-textPrimary tracking-wider">IDENTITYSHIELD</span>
            </div>
          </div>

          {/* Connection Lines & Labels */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
            <g style={{ transform: 'translate(50%, 50%)' }}>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = angle * (Math.PI / 180);
                const x1 = Math.cos(rad) * 45;
                const y1 = Math.sin(rad) * 45;
                const x2 = Math.cos(rad) * 150;
                const y2 = Math.sin(rad) * 150;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-border-strong)" strokeWidth="1" />
                );
              })}
            </g>
          </svg>

          {[
            { label: 'IDENTITY GOVERNANCE', angle: 0 },
            { label: 'PRIVILEGED ACCESS', angle: 60 },
            { label: 'SSO', angle: 120 },
            { label: 'MFA', angle: 180 },
            { label: 'THREAT RESPONSE', angle: 240 },
            { label: 'LIFECYCLE', angle: 300 }
          ].map((node, i) => {
            const rad = node.angle * (Math.PI / 180);
            const x = Math.cos(rad) * 170;
            const y = Math.sin(rad) * 170;
            return (
              <div key={i} className="absolute z-20 text-[9px] font-bold text-textSecondary tracking-widest uppercase bg-bgPrimary px-2 py-1 border border-borderStrong" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                {node.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* MASTER / DETAIL LAYOUT */}
      <div className="container-wide mb-32 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* NAVIGATION (LEFT) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolution(idx)}
                className={`text-left w-full flex items-center justify-between p-5 border-l-2 transition-all duration-300
                  ${activeSolution === idx 
                    ? 'border-accent bg-card shadow-sm' 
                    : 'border-transparent bg-transparent hover:bg-bgSecondary'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-bold font-mono transition-colors ${activeSolution === idx ? 'text-accent' : 'text-textSecondary'}`}>{sol.id}</span>
                  <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${activeSolution === idx ? 'text-textPrimary' : 'text-textSecondary'}`}>
                    {sol.category}
                  </span>
                </div>
                {activeSolution === idx && <ChevronRight className="w-4 h-4 text-accent" />}
              </button>
            ))}
          </div>

          {/* DETAIL CONTENT (RIGHT) */}
          <div className="lg:col-span-8 bg-card border border-borderLight rounded-sm relative overflow-hidden flex flex-col shadow-sm">
            
            {/* Top Bar with Number & Navigation */}
            <div className="flex justify-between items-center p-6 border-b border-borderLight bg-bgSecondary">
              <div className="text-xs font-bold text-accent tracking-widest font-mono">
                {current.id} / 06
              </div>
              <div className="flex gap-4">
                <button onClick={handlePrev} className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="Previous solution">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={handleNext} className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="Next solution">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dynamic Content Body */}
            <div className="p-8 md:p-12 flex-grow animate-fade-in-up" key={current.id}>
              <div className="grid xl:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6 leading-tight">{current.heading}</h3>
                  <p className="text-textSecondary mb-10 leading-relaxed text-sm">{current.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-[10px] font-bold text-textPrimary tracking-widest uppercase mb-4 block border-l-2 border-accent pl-3">KEY CAPABILITIES</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {current.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start text-xs text-textSecondary">
                          <span className="text-accent mr-2 mt-0.5 opacity-70">+</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* Dynamic Visual */}
                  <div className="w-full bg-bgSecondary border border-borderLight rounded-sm mb-6 flex-grow flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                    <current.Visual />
                  </div>

                  <div className="bg-bgSecondary p-5 border border-borderLight rounded-sm">
                    <span className="text-[9px] font-bold text-textPrimary tracking-widest uppercase mb-3 block">CLIENT VALUE:</span>
                    <ul className="space-y-2">
                      {current.clientValue.map((val, i) => (
                        <li key={i} className="text-xs text-textSecondary flex items-center">
                          <div className="w-1 h-1 bg-borderStrong rounded-full mr-3"></div>
                          {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <button className="text-[11px] font-bold text-accent tracking-widest uppercase hover:text-textPrimary transition-colors flex items-center group">
                  {current.cta} <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ENTERPRISE VALUE BAR */}
      <div className="container-wide mb-32 hidden md:block">
        <div className="flex justify-between items-center border-y border-borderLight py-6 px-4">
          {['VISIBILITY', 'GOVERNANCE', 'AUTOMATION', 'LEAST PRIVILEGE', 'SECURITY', 'CONTROL'].map((val, i) => (
            <div key={val} className="text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 text-textSecondary">
              {val}
            </div>
          ))}
        </div>
      </div>

      {/* TRANSITION */}
      <div className="container-wide text-center pt-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textPrimary">
          YOUR IAM ENVIRONMENT IS UNIQUE.<br/>
          <span className="text-accent">YOUR SECURITY APPROACH SHOULD BE TOO.</span>
        </h2>
        <p className="body-base max-w-2xl mx-auto mb-10">
          IdentityShield helps organizations build an IAM strategy around their identity landscape, applications, users and security requirements.
        </p>
        <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md">
          Talk to an IAM Expert
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
};

// Dummy icons components for missing ones
const ServerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);
const AlertCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
);


export default Solutions;
