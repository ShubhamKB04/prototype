import React, { useState } from 'react';
import { ArrowRight, Shield, ChevronDown, Activity, Settings, Users, Key, LayoutGrid } from 'lucide-react';

const Stats = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeControlLayer, setActiveControlLayer] = useState(1); // Default to 'GOVERN' for demonstration

  const capabilities = [
    {
      id: 1,
      title: 'IDENTITY GOVERNANCE',
      control: 'IDENTITY VISIBILITY',
      short: 'Understand identities, roles and entitlements across the environment.',
      why: 'Organizations may need consistent visibility into identities, roles and entitlements across multiple systems.',
      cover: ['Identity visibility', 'Entitlement management', 'Access reviews', 'Policy governance'],
      approach: 'Identity governance can provide structured processes for understanding and reviewing access across the identity environment.',
      node: 'IDENTITIES'
    },
    {
      id: 2,
      title: 'PRIVILEGED ACCESS',
      control: 'HIGH-IMPACT ACCESS',
      short: 'Manage and monitor access to sensitive systems and data.',
      why: 'Privileged accounts represent high-impact access that requires specialized controls and monitoring.',
      cover: ['Privileged accounts', 'JIT access', 'Approval workflows', 'Session monitoring'],
      approach: 'Privileged access management provides controls for credential vaulting, session monitoring and just-in-time access.',
      node: 'PRIVILEGE'
    },
    {
      id: 3,
      title: 'AUTHENTICATION',
      control: 'APPLICATION ACCESS',
      short: 'Provide consistent authentication controls across applications.',
      why: 'Fragmented authentication experiences can increase friction and complicate access policy enforcement.',
      cover: ['Centralized SSO', 'Adaptive MFA', 'Federation', 'Authentication policies'],
      approach: 'Centralized SSO and adaptive MFA provide consistent authentication controls across the enterprise application portfolio.',
      node: 'APPLICATIONS'
    },
    {
      id: 4,
      title: 'IDENTITY LIFECYCLE',
      control: 'ACCESS CHANGES',
      short: 'Manage access as identities join, move or leave the organization.',
      why: 'Manual provisioning and deprovisioning can lead to delays, errors and lingering access rights.',
      cover: ['Joiner workflows', 'Mover workflows', 'Leaver workflows', 'Access removal'],
      approach: 'Identity lifecycle automation connects identity changes to access provisioning and deprovisioning workflows.',
      node: 'LIFECYCLE'
    },
    {
      id: 5,
      title: 'IDENTITY THREAT RESPONSE',
      control: 'SECURITY SIGNALS',
      short: 'Connect identity context with security investigation workflows.',
      why: 'Security signals without identity context can be difficult to investigate and correlate.',
      cover: ['Identity context', 'Security signals', 'Investigation', 'Identity activity'],
      approach: 'Connecting identity context with security signals supports more informed investigation and response processes.',
      node: 'SECURITY'
    },
    {
      id: 6,
      title: 'ACCESS GOVERNANCE',
      control: 'POLICY CONTROLS',
      short: 'Review, update and certify access based on changing roles.',
      why: 'As roles change, access rights often accumulate, leading to excessive permissions.',
      cover: ['Role changes', 'Entitlement updates', 'Policy controls', 'Access reviews'],
      approach: 'Access governance provides mechanisms to review, update and certify access based on changing roles and organizational needs.',
      node: 'ACCESS'
    }
  ];

  const visualNodes = ['IDENTITIES', 'APPLICATIONS', 'PRIVILEGE', 'ACCESS', 'LIFECYCLE', 'SECURITY'];

  const controlLayers = [
    { id: 'IDENTIFY', obj: 'Understand who is requesting access and what they are trying to access.', role: 'Provide identity visibility and contextual data for access decisions.' },
    { id: 'GOVERN', obj: 'Define who should have access and under what conditions.', role: 'Support identity governance, entitlement visibility and policy-driven workflows.' },
    { id: 'CONTROL', obj: 'Enforce access policies and authentication requirements.', role: 'Manage authentication, adaptive controls and privilege boundaries.' },
    { id: 'MONITOR', obj: 'Observe identity activity and access patterns.', role: 'Provide visibility into authentication events and privileged sessions.' },
    { id: 'RESPOND', obj: 'Take action based on identity and security signals.', role: 'Enable security teams to investigate events with identity context.' }
  ];

  const currentCap = capabilities[activeCapability];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-24 animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-4 text-accent">IDENTITYSHIELD CAPABILITY</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section max-w-2xl text-textPrimary">
            ONE IDENTITY STRATEGY.<br/>
            <span className="text-textSecondary">MULTIPLE CONTROL SURFACES.</span>
          </h2>
          <p className="body-base max-w-md text-sm text-textSecondary">
            Identity environments span people, applications, infrastructure, privilege and security signals. IdentityShield brings these control areas into one structured IAM approach.
          </p>
        </div>
      </div>

      {/* CAPABILITY MODEL "STATS" (NO FAKE NUMBERS) */}
      <div className="container-wide mb-16 relative z-10">
        <span className="text-[9px] font-bold text-textSecondary tracking-widest uppercase mb-6 block text-center md:text-left">IDENTITYSHIELD CAPABILITY MODEL</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-b border-borderLight py-8">
          {[
            { num: '06', lbl: 'CORE IAM DOMAINS' },
            { num: '05', lbl: 'CONTROL LAYERS' },
            { num: '07', lbl: 'IDENTITY LIFECYCLE STAGES' },
            { num: '06', lbl: 'SECURITY CONTEXT LAYERS' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start group">
               <span className="text-4xl md:text-6xl font-black text-textPrimary mb-2 group-hover:text-accent transition-colors">{stat.num}</span>
               <span className="text-[10px] font-bold text-textSecondary tracking-widest uppercase text-center md:text-left">{stat.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide mb-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: CAPABILITY MATRIX LIST */}
          <div className="lg:col-span-7 flex flex-col gap-4">
             {capabilities.map((cap, i) => {
               const isActive = activeCapability === i;
               return (
                 <div 
                   key={i} 
                   className={`border rounded-sm transition-all duration-300 overflow-hidden
                     ${isActive ? 'bg-bgSecondary border-accent shadow-sm' : 'bg-card border-borderStrong hover:border-accent/50'}
                   `}
                 >
                   <button 
                     onClick={() => setActiveCapability(isActive ? -1 : i)}
                     className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                   >
                     <div className="flex flex-col gap-2">
                       <div className="flex items-center gap-4">
                         <span className={`text-[10px] font-bold font-mono ${isActive ? 'text-accent' : 'text-textSecondary'}`}>0{cap.id}</span>
                         <span className={`text-sm font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-textPrimary' : 'text-textPrimary'}`}>{cap.title}</span>
                       </div>
                       <div className="flex items-center gap-2 mt-1 sm:mt-0">
                         <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong bg-card px-2 py-0.5 rounded-sm shadow-sm">
                           CONTROL: {cap.control}
                         </span>
                       </div>
                     </div>
                     <div className="flex items-center justify-between sm:justify-end flex-grow gap-4">
                       <span className="text-xs text-textSecondary max-w-[200px] hidden sm:block">{cap.short}</span>
                       <ChevronDown className={`w-5 h-5 text-textSecondary transition-transform duration-300 flex-shrink-0 ${isActive ? 'rotate-180 text-accent' : ''}`} />
                     </div>
                   </button>
                   
                   <div className={`transition-all duration-500 ${isActive ? 'max-h-[500px] opacity-100 border-t border-borderStrong' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                         <div className="space-y-6">
                            <div>
                               <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">WHY IT MATTERS</h4>
                               <p className="text-sm text-textSecondary leading-relaxed">{cap.why}</p>
                            </div>
                            <div>
                               <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">IDENTITYSHIELD APPROACH</h4>
                               <p className="text-sm text-textPrimary leading-relaxed">{cap.approach}</p>
                            </div>
                         </div>
                         <div>
                            <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">WHAT IT CAN COVER</h4>
                            <ul className="space-y-3">
                              {cap.cover.map((item, idx) => (
                                <li key={idx} className="flex items-start text-xs text-textSecondary">
                                   <div className="w-1.5 h-1.5 border border-accent/50 mr-3 mt-1 rounded-sm flex-shrink-0"></div>
                                   {item}
                                </li>
                              ))}
                            </ul>
                         </div>
                      </div>
                   </div>
                 </div>
               )
             })}
          </div>

          {/* RIGHT: EDITORIAL TECHNICAL VISUALIZATION */}
          <div className="lg:col-span-5 relative">
             <div className="sticky top-24 bg-card border border-borderLight rounded-sm p-8 h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                  <g style={{ transform: 'translate(50%, 50%)' }}>
                    {visualNodes.map((node, i) => {
                      const rad = (i * 60) * (Math.PI / 180);
                      const isLeft = rad > Math.PI / 2 && rad < 3 * Math.PI / 2;
                      const x = Math.cos(rad) * (isLeft ? 130 : 130);
                      const y = Math.sin(rad) * (isLeft ? 180 : 180);
                      const isActive = currentCap && currentCap.node === node;
                      
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
                   <div className="w-16 h-16 rounded-sm border border-accent bg-bgSecondary flex items-center justify-center relative shadow-sm">
                     <div className="absolute inset-0 border border-accent/30 animate-ping rounded-sm"></div>
                     <Shield className="w-6 h-6 text-accent" />
                   </div>
                   <span className="text-[8px] font-bold text-textPrimary tracking-widest uppercase mt-3 px-3 py-1 bg-card border border-borderStrong shadow-sm rounded-sm">
                     IDENTITYSHIELD
                   </span>
                </div>

                {/* Outer Nodes */}
                {visualNodes.map((node, i) => {
                  const rad = (i * 60) * (Math.PI / 180);
                  const isLeft = rad > Math.PI / 2 && rad < 3 * Math.PI / 2;
                  const x = Math.cos(rad) * (isLeft ? 130 : 130);
                  const y = Math.sin(rad) * (isLeft ? 180 : 180);
                  const isActive = currentCap && currentCap.node === node;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute z-10 flex flex-col items-center transition-all duration-500"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <div className={`w-2 h-2 rounded-full border transition-colors duration-500 mb-2 shadow-sm
                        ${isActive ? 'bg-accent border-accent' : 'bg-card border-borderStrong'}
                      `}></div>
                      <span className={`text-[7px] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-sm border transition-colors duration-500 shadow-sm
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

      {/* CONTROL LAYERS HORIZONTAL MODEL */}
      <div className="container-wide mb-24 relative z-10">
         <div className="bg-card border border-borderLight rounded-sm p-8 md:p-12 overflow-hidden relative shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <span className="text-[9px] font-bold text-textSecondary tracking-widest uppercase mb-10 block text-center">IDENTITYSHIELD CONTROL MODEL</span>
            
            <div className="flex flex-col lg:flex-row gap-4 mb-12 relative z-10">
               {controlLayers.map((layer, i) => {
                 const isActive = activeControlLayer === i;
                 return (
                   <React.Fragment key={i}>
                     <button
                       onClick={() => setActiveControlLayer(i)}
                       className={`flex-1 flex lg:flex-col items-center lg:items-start gap-4 p-4 lg:p-6 border rounded-sm transition-all text-left shadow-sm
                         ${isActive ? 'bg-bgSecondary border-accent' : 'bg-bgPrimary border-borderStrong hover:border-accent/50'}
                       `}
                     >
                        <span className={`text-[10px] font-bold font-mono transition-colors ${isActive ? 'text-accent' : 'text-textSecondary'}`}>0{i+1}</span>
                        <span className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-textPrimary' : 'text-textSecondary'}`}>{layer.id}</span>
                     </button>
                     {i < controlLayers.length - 1 && (
                       <div className="hidden lg:flex items-center justify-center text-textSecondary opacity-50">
                         <ArrowRight className="w-5 h-5" />
                       </div>
                     )}
                   </React.Fragment>
                 )
               })}
            </div>

            <div className="bg-bgSecondary border border-borderStrong shadow-sm rounded-sm p-6 md:p-8 grid md:grid-cols-2 gap-8 relative z-10">
               <div>
                  <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">CONTROL OBJECTIVE</h4>
                  <p className="text-sm text-textPrimary">{controlLayers[activeControlLayer].obj}</p>
               </div>
               <div>
                  <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">IDENTITYSHIELD ROLE</h4>
                  <p className="text-sm text-textSecondary">{controlLayers[activeControlLayer].role}</p>
               </div>
            </div>
         </div>
      </div>

      {/* BOTTOM MESSAGE & CTA */}
      <div className="container-wide pt-12 border-t border-borderLight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6 leading-tight">
            IAM IS NOT A SINGLE CONTROL.<br/>
            <span className="text-textSecondary">IT IS A CONNECTED SYSTEM OF IDENTITIES, ACCESS, PRIVILEGE AND GOVERNANCE.</span>
          </h2>
          <p className="body-base text-sm text-textSecondary">
            IdentityShield approaches IAM as an interconnected control environment rather than a collection of isolated tools.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Talk to an IAM Expert
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

export default Stats;
