import React, { useState } from 'react';
import { ArrowRight, User, Shield, Monitor, LayoutGrid, Key, Activity, AlertTriangle, AlertCircle, Search, ChevronRight, Eye, ShieldCheck, Database, Server } from 'lucide-react';

const AISection = () => {
  const [activeContext, setActiveContext] = useState(0);
  const [activePipelineStep, setActivePipelineStep] = useState(3); // Default to AI Analysis

  const contextLayers = [
    {
      id: 1,
      title: 'USER',
      desc: 'Understand which identity is associated with an activity or access event.',
      example: { label1: 'Identity', val1: 'Employee / Contractor', label2: 'Status', val2: 'Authenticated' },
      icon: User
    },
    {
      id: 2,
      title: 'ROLE',
      desc: 'Identity roles can provide additional context when evaluating access activity.',
      example: { label1: 'Role', val1: 'Finance Analyst', label2: 'Access', val2: 'Financial Application' },
      icon: Shield
    },
    {
      id: 3,
      title: 'DEVICE',
      desc: 'Device information can add another layer of context around an identity event.',
      example: { label1: 'Device', val1: 'Managed Endpoint', label2: 'Status', val2: 'Known Device' },
      icon: Monitor
    },
    {
      id: 4,
      title: 'APPLICATION',
      desc: 'Understanding which application is involved can help connect identity activity to business access.',
      example: { label1: 'Application', val1: 'Business Application', label2: 'Access', val2: 'Authenticated' },
      icon: LayoutGrid
    },
    {
      id: 5,
      title: 'PRIVILEGE',
      desc: 'Privilege level can help distinguish ordinary access from higher-impact administrative activity.',
      example: { label1: 'Access Type', val1: 'Privileged', label2: 'Control', val2: 'Additional Verification' },
      icon: Key
    },
    {
      id: 6,
      title: 'ACTIVITY',
      desc: 'Identity activity can provide behavioral context around authentication and access events.',
      example: { label1: 'Event', val1: 'Authentication', label2: 'Context', val2: 'Recent Access Activity' },
      icon: Activity
    }
  ];

  const pipelineSteps = [
    { id: 'IDENTITY EVENT', desc: 'An authentication, access or identity-related event occurs.' },
    { id: 'IDENTITY CONTEXT', desc: 'Relevant identity attributes provide additional context.' },
    { id: 'CORRELATION', desc: 'Related signals can be viewed together.' },
    { id: 'AI-ASSISTED ANALYSIS', desc: 'AI can help summarize or organize available context for investigation.' },
    { id: 'INVESTIGATION', desc: 'Security teams can review the available information and determine appropriate action.' }
  ];

  const currentLayer = contextLayers[activeContext];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up text-center md:text-left">
        <p className="eyebrow mb-4 text-accent">AI + IDENTITY CONTEXT</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <h2 className="heading-section text-textPrimary">
            AI IS ONLY AS USEFUL<br/>
            <span className="text-textSecondary">AS THE CONTEXT BEHIND IT.</span>
          </h2>
          <p className="body-base max-w-lg text-sm text-textSecondary">
            Identity activity provides important context about users, access, privilege and behavior. Combining identity context with security signals can help teams investigate events with greater clarity.
          </p>
        </div>
      </div>

      {/* PRIMARY SPLIT VISUALIZATION */}
      <div className="container-wide mb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* LEFT: WITHOUT CONTEXT */}
          <div className="bg-card border border-borderLight shadow-sm rounded-sm p-8 md:p-12 relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-6 left-6 flex items-center gap-2 text-[9px] font-bold text-textSecondary tracking-[0.2em] uppercase">
               <div className="w-1.5 h-1.5 bg-textSecondary rounded-full"></div>
               WITHOUT IDENTITY CONTEXT
            </div>

            <div className="flex flex-col items-center justify-center h-full min-h-[350px] relative">
               
               {/* Disconnected Signals */}
               <div className="w-full relative h-[250px] mb-8">
                 {[
                   { t: 'ALERT', x: '10%', y: '10%', o: 0.8 },
                   { t: 'ALERT', x: '80%', y: '20%', o: 0.6 },
                   { t: 'LOGIN', x: '40%', y: '80%', o: 0.7 },
                   { t: 'ACCESS', x: '15%', y: '60%', o: 0.5 },
                   { t: 'API', x: '70%', y: '70%', o: 0.9 },
                   { t: 'DEVICE', x: '50%', y: '20%', o: 0.4 },
                   { t: 'NETWORK', x: '85%', y: '45%', o: 0.5 }
                 ].map((sig, i) => (
                   <div key={i} className="absolute border border-red-500/30 bg-red-50 text-[8px] text-red-600 px-2 py-1 rounded-sm shadow-sm" style={{ top: sig.y, left: sig.x, opacity: sig.o }}>
                     <AlertCircle className="w-2 h-2 inline-block mr-1 opacity-50"/> {sig.t}
                   </div>
                 ))}

                 {/* Disconnected Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                   <path d="M 50 50 Q 150 100 200 80" stroke="#EF4444" strokeWidth="1" fill="none" strokeDasharray="2 4" />
                   <path d="M 60 150 Q 100 100 200 180" stroke="var(--color-text-secondary)" strokeWidth="1" fill="none" strokeDasharray="1 3" />
                   <path d="M 220 50 Q 150 150 250 180" stroke="var(--color-text-secondary)" strokeWidth="1" fill="none" strokeDasharray="3 6" />
                 </svg>
               </div>

               <div className="flex items-center gap-4 border border-red-500/20 bg-red-50 px-4 py-2 rounded-sm shadow-sm">
                 <AlertTriangle className="w-4 h-4 text-red-500/80" />
                 <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-red-600 tracking-widest uppercase">HIGH SIGNAL</span>
                   <span className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">LOW CONTEXT</span>
                 </div>
               </div>
            </div>
          </div>

          {/* RIGHT: WITH CONTEXT */}
          <div className="bg-card border border-accent rounded-sm p-8 md:p-12 relative overflow-hidden animate-fade-in-up shadow-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="absolute top-6 left-6 flex items-center gap-2 text-[9px] font-bold text-accent tracking-[0.2em] uppercase">
               <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
               WITH IDENTITY CONTEXT
            </div>

            <div className="flex flex-col justify-center h-full min-h-[350px] relative z-10 pt-8">
               
               {/* Context Inputs */}
               <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                 {['USER', 'ROLE', 'DEVICE', 'APPLICATION', 'PRIVILEGE', 'LOCATION', 'ACTIVITY'].map((label, i) => (
                   <div key={i} className="border border-borderLight bg-bgSecondary text-[7px] md:text-[8px] text-textSecondary px-2 py-1.5 rounded-sm flex items-center shadow-sm">
                     <div className="w-1 h-1 bg-accent rounded-full mr-2 opacity-50"></div> {label}
                   </div>
                 ))}
               </div>

               <div className="flex justify-center mb-8">
                 <div className="h-8 w-[1px] bg-accent relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-accent animate-[signal-travel_2s_infinite]"></div>
                 </div>
               </div>

               {/* Central Transformation Flow */}
               <div className="flex flex-col items-center gap-4">
                 <div className="border border-accent bg-card px-4 py-2 rounded-sm text-[9px] font-bold text-accent tracking-widest uppercase shadow-sm flex items-center gap-2">
                   <ShieldCheck className="w-3 h-3" /> IDENTITYSHIELD
                 </div>
                 <div className="h-4 w-[1px] bg-accent/50"></div>
                 <div className="text-[8px] text-textPrimary font-bold tracking-widest uppercase px-3 py-1 bg-bgSecondary border border-borderStrong rounded-sm shadow-sm">
                   IDENTITY CONTEXT
                 </div>
                 <div className="h-4 w-[1px] bg-accent/50"></div>
                 <div className="text-[8px] text-textPrimary font-bold tracking-widest uppercase px-3 py-1 bg-bgSecondary border border-borderStrong rounded-sm shadow-sm">
                   SECURITY SIGNAL
                 </div>
                 <div className="h-4 w-[1px] bg-accent/50"></div>
                 <div className="text-[9px] text-textPrimary font-bold tracking-widest uppercase px-4 py-2 bg-card border border-accent rounded-sm shadow-sm">
                   INVESTIGATION
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CONTEXT LAYERS */}
      <div className="container-wide mb-24 relative z-10">
         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Context Selector */}
            <div className="lg:col-span-5 flex flex-col gap-2">
               {contextLayers.map((layer, i) => (
                 <button
                   key={i}
                   onClick={() => setActiveContext(i)}
                   className={`flex items-center justify-between p-4 border rounded-sm transition-all duration-300 group shadow-sm
                     ${activeContext === i ? 'bg-card border-accent' : 'bg-bgSecondary border-borderLight hover:bg-card hover:border-borderStrong'}
                   `}
                 >
                   <div className="flex items-center gap-4">
                     <span className={`text-[10px] font-bold font-mono ${activeContext === i ? 'text-accent' : 'text-textSecondary'}`}>0{layer.id}</span>
                     <span className={`text-xs font-bold tracking-widest uppercase ${activeContext === i ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>{layer.title}</span>
                   </div>
                   <layer.icon className={`w-4 h-4 ${activeContext === i ? 'text-accent' : 'text-textSecondary group-hover:text-textPrimary'}`} />
                 </button>
               ))}

               {/* CONTEXT SCORE INDICATOR */}
               <div className="mt-8 p-6 bg-card border border-borderLight shadow-sm rounded-sm">
                  <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-4 block">CONTEXT LAYERS SHOWN</span>
                  <div className="flex flex-wrap gap-2">
                    {contextLayers.map((layer, i) => (
                      <div key={i} className={`text-[7px] font-bold tracking-[0.1em] px-2 py-1 border rounded-sm transition-colors uppercase
                        ${activeContext === i ? 'bg-bgSecondary border-accent text-accent' : 'bg-card border-borderStrong text-textSecondary'}
                      `}>
                        {layer.title}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* Context Detail Panel */}
            <div className="lg:col-span-7 bg-card border border-borderLight shadow-sm rounded-sm relative overflow-hidden animate-fade-in-up" key={currentLayer.title}>
               <div className="p-6 border-b border-borderLight bg-bgSecondary flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <currentLayer.icon className="w-5 h-5 text-accent" />
                    <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">{currentLayer.title} CONTEXT</span>
                  </div>
               </div>
               
               <div className="p-8 md:p-12 flex flex-col h-full">
                  <p className="text-sm md:text-base text-textSecondary leading-relaxed mb-12 flex-grow">
                    {currentLayer.desc}
                  </p>
                  
                  <div className="border border-borderStrong bg-bgSecondary rounded-sm p-6 relative">
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                     <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-6 block">EXAMPLE CONTEXT</span>
                     
                     <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                           <span className="text-[9px] font-bold text-accent tracking-widest uppercase block mb-1">{currentLayer.example.label1}</span>
                           <span className="text-sm text-textPrimary">{currentLayer.example.val1}</span>
                        </div>
                        <div>
                           <span className="text-[9px] font-bold text-accent tracking-widest uppercase block mb-1">{currentLayer.example.label2}</span>
                           <span className="text-sm text-textPrimary">{currentLayer.example.val2}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* AI ANALYSIS FLOW & INSIGHT PANEL */}
      <div className="container-wide mb-32 relative z-10">
         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* AI Analysis Flow */}
            <div className="lg:col-span-5 flex flex-col">
               <h3 className="text-xl font-bold text-textPrimary mb-8">AI ANALYSIS PIPELINE</h3>
               <div className="flex flex-col gap-4 relative">
                  
                  <div className="absolute top-6 bottom-6 left-5 w-[1px] bg-borderStrong z-0"></div>

                  {pipelineSteps.map((step, i) => {
                    const isActive = activePipelineStep === i;
                    return (
                      <button 
                        key={i}
                        onClick={() => setActivePipelineStep(i)}
                        className="flex items-start text-left gap-6 group relative z-10"
                      >
                         <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors mt-1 shadow-sm
                           ${isActive ? 'border-accent bg-bgSecondary' : 'border-borderStrong bg-card group-hover:border-accent/50'}
                         `}>
                           {isActive ? <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div> : <div className="w-1.5 h-1.5 bg-textSecondary/50 rounded-full"></div>}
                         </div>
                         <div className="flex flex-col py-2">
                           <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 transition-colors ${isActive ? 'text-accent' : 'text-textSecondary group-hover:text-textPrimary'}`}>
                             {step.id}
                           </span>
                           <div className={`text-xs text-textSecondary transition-all duration-300 overflow-hidden ${isActive ? 'max-h-24 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                             {step.desc}
                           </div>
                         </div>
                      </button>
                    )
                  })}
               </div>
            </div>

            {/* AI Insight Panel (Premium Technical Panel) - LIGHT THEME */}
            <div className="lg:col-span-7 bg-card border border-borderLight rounded-sm relative overflow-hidden flex flex-col shadow-sm">
               <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
               
               <div className="p-4 border-b border-borderLight bg-bgSecondary flex justify-between items-center">
                  <div className="flex items-center gap-3">
                     <Eye className="w-4 h-4 text-accent" />
                     <span className="text-[10px] font-bold text-textPrimary tracking-[0.2em] uppercase">CONTEXTUAL IDENTITY ANALYSIS</span>
                  </div>
                  <span className="hidden sm:block text-[7px] font-bold text-red-600 tracking-widest uppercase border border-red-500/30 px-2 py-1 rounded-sm bg-red-50">CONCEPTUAL UI — NOT LIVE SECURITY TELEMETRY</span>
               </div>
               <span className="sm:hidden text-[7px] font-bold text-red-600 tracking-widest uppercase border-b border-borderLight px-4 py-2 bg-red-50 text-center">CONCEPTUAL UI — NOT LIVE SECURITY TELEMETRY</span>

               <div className="p-6 md:p-8 flex-grow relative z-10">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                     {[
                       { l: 'EVENT', v: 'Suspicious authentication activity' },
                       { l: 'IDENTITY', v: 'User-047' },
                       { l: 'ROLE', v: 'Finance' },
                       { l: 'APPLICATION', v: 'Business Application' },
                       { l: 'PRIVILEGE', v: 'Standard' },
                       { l: 'DEVICE', v: 'Managed' },
                       { l: 'CONTEXT', v: 'Recent authentication activity' },
                     ].map((item, i) => (
                       <div key={i} className="flex flex-col border-l-2 border-borderStrong pl-3">
                          <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase mb-1">{item.l}</span>
                          <span className="text-xs font-mono text-textPrimary truncate">{item.v}</span>
                       </div>
                     ))}
                  </div>

                  <div className="border border-accent/30 bg-bgSecondary p-6 rounded-sm relative shadow-sm">
                     <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                     <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                       <Search className="w-3 h-3" /> AI-ASSISTED SUMMARY
                     </span>
                     <p className="text-sm text-textSecondary leading-relaxed">
                       "The event is associated with a known identity accessing a business application from a managed device. Additional review may be appropriate based on surrounding activity and organizational policy."
                     </p>
                  </div>
               </div>
            </div>

         </div>
      </div>

      {/* AI PRINCIPLES & TRUST MESSAGE */}
      <div className="container-wide border-t border-borderLight pt-24 pb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-6">
            AI SHOULD HELP SECURITY TEAMS<br/>
            <span className="text-textSecondary">UNDERSTAND MORE.</span><br/>
            <span className="text-accent">NOT ASSUME MORE.</span>
          </h2>
          <p className="body-base max-w-2xl mx-auto text-sm text-textSecondary">
            IdentityShield's approach to AI focuses on bringing identity context into security workflows while keeping investigation and decision-making with the appropriate teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {[
            { t: 'CONTEXT OVER ASSUMPTION', d: 'Use available identity information rather than unsupported conclusions.' },
            { t: 'ASSISTANCE OVER AUTOMATION', d: 'AI can support analysts without replacing human review.' },
            { t: 'EVIDENCE OVER NOISE', d: 'Relevant identity context can help teams investigate security events.' }
          ].map((prin, i) => (
            <div key={i} className="text-center">
               <div className="w-8 h-8 rounded-sm bg-card border border-borderStrong shadow-sm mx-auto mb-4 flex items-center justify-center">
                 <ShieldCheck className="w-4 h-4 text-accent" />
               </div>
               <h3 className="text-xs font-bold text-textPrimary tracking-widest uppercase mb-3">{prin.t}</h3>
               <p className="text-xs text-textSecondary leading-relaxed">{prin.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Talk to an IAM Expert
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
            Explore Identity Security <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default AISection;
