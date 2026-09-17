import React, { useState } from 'react';
import { Shield, ArrowRight, Activity, Users, Database, LayoutGrid, Cloud, Lock, CheckCircle2, Hexagon, CircleDot } from 'lucide-react';

const IdentityEngine = () => {
  const [activeDomain, setActiveDomain] = useState(0);
  const [activeFlow, setActiveFlow] = useState(0);

  const domains = [
    {
      id: 1,
      title: 'USERS & WORKFORCE',
      subtitle: 'IDENTITY FOUNDATION',
      desc: 'Organizations manage identities across employees, contractors and other workforce populations.',
      capabilities: ['Identity lifecycle', 'Authentication', 'Access governance', 'Role management', 'Identity visibility'],
      icon: Users,
      angle: 210
    },
    {
      id: 2,
      title: 'APPLICATIONS',
      subtitle: 'APPLICATION ACCESS',
      desc: 'Connect identities to business applications through centralized authentication and access policies.',
      capabilities: ['SSO', 'Application access', 'Federation', 'Access policies', 'Provisioning'],
      icon: LayoutGrid,
      angle: 330
    },
    {
      id: 3,
      title: 'CLOUD & INFRASTRUCTURE',
      subtitle: 'MODERN INFRASTRUCTURE ACCESS',
      desc: 'Identity extends beyond traditional applications into cloud platforms and infrastructure.',
      capabilities: ['Cloud identity', 'Access controls', 'Privileged access', 'Identity policies', 'Visibility'],
      icon: Cloud,
      angle: 90
    },
    {
      id: 4,
      title: 'DIRECTORIES',
      subtitle: 'IDENTITY SOURCES',
      desc: 'Identity data often originates from multiple directories and systems.',
      capabilities: ['Directory integration', 'Identity synchronization', 'Identity data', 'Provisioning', 'Lifecycle workflows'],
      icon: Database,
      angle: 150
    },
    {
      id: 5,
      title: 'PRIVILEGED ACCESS',
      subtitle: 'HIGH-IMPACT ACCESS',
      desc: 'Privileged identities require additional controls and visibility.',
      capabilities: ['PAM', 'JIT access', 'Credential controls', 'Session monitoring', 'Approval workflows'],
      icon: Lock,
      angle: 270
    },
    {
      id: 6,
      title: 'SECURITY SIGNALS',
      subtitle: 'IDENTITY SECURITY CONTEXT',
      desc: 'Identity activity can provide useful context for security investigation and response.',
      capabilities: ['Identity monitoring', 'Risk signals', 'Activity visibility', 'Investigation', 'Identity threat response'],
      icon: Activity,
      angle: 30
    }
  ];

  const flows = [
    { id: 'CONNECT', desc: 'Bring relevant identity systems and domains into the operating model.' },
    { id: 'NORMALIZE', desc: 'Create consistent identity and access context across connected sources.' },
    { id: 'GOVERN', desc: 'Apply policies, roles and governance processes.' },
    { id: 'CONTROL', desc: 'Manage authentication, access and privilege.' },
    { id: 'MONITOR', desc: 'Observe identity activity and relevant security signals.' }
  ];

  const currentDomain = domains[activeDomain];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-4 text-accent">THE IDENTITYSHIELD ENGINE</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section text-textPrimary">
            ONE IDENTITY LAYER.<br/>
            <span className="text-textSecondary">CONNECTED ACCESS.</span>
          </h2>
          <p className="body-base max-w-md text-sm text-textSecondary">
            Identity environments span users, applications, infrastructure and security systems. IdentityShield brings these identity and access domains into a unified operating view.
          </p>
        </div>
      </div>

      <div className="container-wide mb-24 relative z-10">
        <div className="grid xl:grid-cols-12 gap-8 xl:gap-12">
          
          {/* MAIN ARCHITECTURE VISUAL (DESKTOP) - LIGHT ENTERPRISE THEME */}
          <div className="hidden xl:block xl:col-span-8 bg-card border border-borderLight rounded-sm relative overflow-hidden h-[600px] animate-fade-in-up shadow-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            {/* DATA FLOW LABELS */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
               {['IDENTITIES', 'POLICY', 'ACCESS', 'VISIBILITY'].map((label, i) => (
                 <div key={label} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                   <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-textPrimary">{label}</span>
                 </div>
               ))}
            </div>

            {/* TECHNICAL STATUS PANEL */}
            <div className="absolute bottom-6 left-6 border border-borderStrong bg-bgSecondary p-4 rounded-sm shadow-sm">
               <span className="text-[8px] font-bold text-accent tracking-widest uppercase mb-3 block">CONCEPTUAL ARCHITECTURE VIEW</span>
               <div className="space-y-2">
                 {[
                   { label: 'IDENTITY SOURCES', status: 'CONNECTED' },
                   { label: 'ACCESS POLICIES', status: 'ACTIVE' },
                   { label: 'PRIVILEGED CONTROLS', status: 'MONITORED' },
                   { label: 'IDENTITY SIGNALS', status: 'VISIBLE' }
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center gap-8 text-[9px] font-bold tracking-widest uppercase">
                     <span className="text-textSecondary">{stat.label}</span>
                     <span className="text-textPrimary flex items-center"><CircleDot className="w-2 h-2 text-accent mr-2" /> {stat.status}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* CONNECTING LINES & SIGNALS */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <g style={{ transform: 'translate(50%, 50%)' }}>
                  {domains.map((dom, i) => {
                    const rad = dom.angle * (Math.PI / 180);
                    const x = Math.cos(rad) * 220;
                    const y = Math.sin(rad) * 220;
                    const isActive = activeDomain === i;
                    
                    return (
                      <g key={i}>
                        <line x1="0" y1="0" x2={x} y2={y} stroke={isActive ? "var(--color-accent)" : "var(--color-border-strong)"} strokeWidth={isActive ? "2" : "1"} className={`transition-all duration-300 ${!isActive && 'opacity-50'}`} />
                        {isActive && (
                          <circle r="3" fill="var(--color-accent)" className="animate-[signal-travel_2s_infinite_linear]">
                             <animateMotion dur="2s" repeatCount="indefinite" path={`M ${x} ${y} L 0 0`} />
                          </circle>
                        )}
                        {isActive && (
                          <circle r="3" fill="var(--color-accent)" className="animate-[signal-travel_2s_infinite_linear]" style={{ animationDelay: '1s' }}>
                             <animateMotion dur="2s" repeatCount="indefinite" path={`M 0 0 L ${x} ${y}`} />
                          </circle>
                        )}
                      </g>
                    )
                  })}
                </g>
              </svg>

              {/* CENTER DOMAIN */}
              <div className="absolute z-30 flex flex-col items-center">
                <span className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 bg-card border border-accent/30 rounded-sm shadow-sm">UNIFIED IAM CONTROL PLANE</span>
                <div className="w-24 h-24 rounded-full border border-accent bg-bgSecondary flex items-center justify-center shadow-sm relative">
                  <div className="absolute inset-0 rounded-full border border-accent/50 animate-[ping_4s_ease-in-out_infinite]"></div>
                  <Shield className="w-6 h-6 text-accent mb-1" />
                  <span className="text-[8px] font-bold text-textPrimary tracking-widest absolute bottom-4">IDENTITYSHIELD</span>
                </div>
              </div>

              {/* ORBITING DOMAINS */}
              {domains.map((dom, i) => {
                const rad = dom.angle * (Math.PI / 180);
                const x = Math.cos(rad) * 220;
                const y = Math.sin(rad) * 220;
                const isActive = activeDomain === i;
                
                return (
                  <button 
                    key={i}
                    onClick={() => setActiveDomain(i)}
                    className={`absolute z-20 flex flex-col items-center gap-2 group transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}`}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div className={`w-12 h-12 rounded-sm border flex items-center justify-center transition-colors shadow-sm
                      ${isActive ? 'bg-bgSecondary border-accent' : 'bg-card border-borderStrong group-hover:border-accent/50'}
                    `}>
                      <dom.icon className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-textSecondary group-hover:text-textPrimary'}`} />
                    </div>
                    <span className={`text-[9px] font-bold tracking-[0.1em] uppercase whitespace-nowrap bg-card/90 px-2 py-1 rounded-sm border ${isActive ? 'text-textPrimary border-borderStrong shadow-sm' : 'text-textSecondary border-transparent'}`}>
                      {dom.title}
                    </span>
                  </button>
                )
              })}

            </div>
          </div>

          {/* MOBILE DOMAINS LIST (VISIBLE ONLY lg-) */}
          <div className="xl:hidden flex flex-col gap-3">
             <div className="flex flex-col items-center text-center mb-8">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <span className="text-[10px] font-bold text-accent tracking-widest uppercase mb-1">UNIFIED IAM CONTROL PLANE</span>
                <span className="text-sm font-bold text-textPrimary tracking-widest uppercase">IDENTITYSHIELD</span>
             </div>
             {domains.map((dom, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDomain(i)}
                  className={`w-full text-left p-4 border rounded-sm flex items-center justify-between transition-colors shadow-sm
                    ${activeDomain === i ? 'bg-card border-accent' : 'bg-bgSecondary border-borderLight hover:bg-card hover:border-borderStrong'}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold font-mono ${activeDomain === i ? 'text-accent' : 'text-textSecondary'}`}>0{dom.id}</span>
                    <span className={`text-xs font-bold tracking-widest uppercase ${activeDomain === i ? 'text-textPrimary' : 'text-textSecondary'}`}>{dom.title}</span>
                  </div>
                </button>
             ))}
          </div>

          {/* DETAIL PANEL (RIGHT SIDE DESKTOP / BOTTOM MOBILE) - LIGHT ENTERPRISE THEME */}
          <div className="xl:col-span-4 bg-card border border-borderLight rounded-sm flex flex-col overflow-hidden animate-fade-in-up shadow-sm" key={currentDomain.title}>
            <div className="p-6 border-b border-borderLight bg-bgSecondary flex items-center justify-between">
               <span className="text-[10px] font-bold font-mono text-accent">DOMAIN 0{currentDomain.id} / 06</span>
               <currentDomain.icon className="w-5 h-5 text-accent" />
            </div>
            
            <div className="p-8 md:p-10 flex-grow">
               <h4 className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mb-4">{currentDomain.subtitle}</h4>
               <h3 className="text-2xl font-bold text-textPrimary mb-6">{currentDomain.title}</h3>
               <p className="text-sm text-textSecondary leading-relaxed mb-10">
                 {currentDomain.desc}
               </p>

               <h4 className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mb-4">IDENTITYSHIELD CAPABILITIES</h4>
               <ul className="space-y-3">
                 {currentDomain.capabilities.map((cap, i) => (
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

      {/* SECONDARY INTERACTIVE FLOW - LIGHT THEME */}
      <div className="container-wide mb-16 relative z-10 animate-fade-in-up">
         <div className="bg-bgSecondary border border-borderLight rounded-sm p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
               
               {/* Connecting Background Line for Desktop */}
               <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-borderStrong -z-10 transform -translate-y-1/2">
                  <div className="h-full bg-gradient-to-r from-accent/10 via-accent to-accent/10 opacity-50 w-full animate-pulse-glow"></div>
               </div>

               {flows.map((flow, i) => {
                 const isActive = activeFlow === i;
                 return (
                   <button 
                     key={i}
                     onClick={() => setActiveFlow(i)}
                     className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-4 group flex-1 w-full relative z-10 bg-bgSecondary md:bg-transparent"
                   >
                     <div className={`w-12 h-12 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 md:mb-4 shadow-sm
                       ${isActive ? 'bg-card border-accent scale-110' : 'bg-bgPrimary border-borderStrong group-hover:border-accent/50 group-hover:scale-105'}
                     `}>
                       <span className={`text-[10px] font-bold tracking-widest ${isActive ? 'text-accent' : 'text-textSecondary'}`}>0{i+1}</span>
                     </div>
                     <div className="flex flex-col">
                        <span className={`text-xs font-bold tracking-widest uppercase transition-colors md:mb-2 ${isActive ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                          {flow.id}
                        </span>
                        <div className={`text-[10px] text-textSecondary transition-all duration-300 overflow-hidden text-left md:text-center ${isActive ? 'max-h-24 opacity-100 mt-2 md:mt-0' : 'max-h-0 opacity-0 md:max-h-24 md:opacity-100 md:mt-0'}`}>
                          {flow.desc}
                        </div>
                     </div>
                   </button>
                 )
               })}

            </div>
         </div>
      </div>

    </section>
  );
};

export default IdentityEngine;
