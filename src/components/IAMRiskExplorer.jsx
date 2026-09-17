import React, { useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Shield, CheckCircle2, ChevronDown } from 'lucide-react';

const IAMRiskExplorer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [activeCapability, setActiveCapability] = useState(null);

  const questions = [
    {
      id: 1,
      q: 'HOW CLEAR IS YOUR VIEW OF WHO HAS ACCESS TO CRITICAL APPLICATIONS?',
      options: ['A — HIGHLY VISIBLE', 'B — PARTIALLY VISIBLE', 'C — LIMITED VISIBILITY', 'D — WE ARE STILL BUILDING THIS VIEW'],
      capability: 'IDENTITY GOVERNANCE'
    },
    {
      id: 2,
      q: 'HOW ARE PRIVILEGED ACCOUNTS CURRENTLY CONTROLLED?',
      options: ['A — CENTRALLY GOVERNED AND MONITORED', 'B — CONTROLLED ACROSS SOME SYSTEMS', 'C — MOSTLY MANUAL', 'D — VARIES BY ENVIRONMENT'],
      capability: 'PRIVILEGED ACCESS'
    },
    {
      id: 3,
      q: 'HOW CONSISTENT IS ACCESS REMOVAL WHEN SOMEONE LEAVES?',
      options: ['A — STANDARDIZED AND WORKFLOW-DRIVEN', 'B — STANDARDIZED FOR SOME SYSTEMS', 'C — MOSTLY MANUAL', 'D — VARIES BY APPLICATION'],
      capability: 'IDENTITY LIFECYCLE'
    },
    {
      id: 4,
      q: 'HOW CONSISTENT IS AUTHENTICATION ACROSS YOUR APPLICATION ENVIRONMENT?',
      options: ['A — CENTRALIZED', 'B — MOSTLY CENTRALIZED', 'C — MIXED', 'D — HIGHLY FRAGMENTED'],
      capability: 'SSO & AUTHENTICATION'
    },
    {
      id: 5,
      q: 'HOW EASILY CAN YOUR SECURITY TEAM CONNECT AN IDENTITY TO A SECURITY EVENT?',
      options: ['A — IDENTITY CONTEXT IS READILY AVAILABLE', 'B — AVAILABLE ACROSS SOME SYSTEMS', 'C — REQUIRES MANUAL INVESTIGATION', 'D — IDENTITY CONTEXT IS LIMITED'],
      capability: 'IDENTITY THREAT RESPONSE'
    },
    {
      id: 6,
      q: 'HOW WELL DO ACCESS CONTROLS ADAPT WHEN A USER\'S ROLE CHANGES?',
      options: ['A — AUTOMATED WORKFLOWS HANDLE MOST CHANGES', 'B — STANDARDIZED PROCESSES EXIST', 'C — MANY CHANGES ARE MANUAL', 'D — PROCESSES VARY BY SYSTEM'],
      capability: 'ACCESS GOVERNANCE'
    }
  ];

  const capabilityDetails = {
    'IDENTITY GOVERNANCE': { focus: 'identity visibility, entitlements, access reviews, policy governance', next: 'Review identity visibility, entitlement management and access certification processes.', why: 'Organizations often need consistent visibility into identities, roles and entitlements across their environment.', approach: 'Identity governance capabilities can support access visibility, entitlement management and access review workflows.' },
    'PRIVILEGED ACCESS': { focus: 'privileged accounts, JIT access, approval workflows, monitoring', next: 'Review privileged account controls, approval workflows and monitoring practices.', why: 'Privileged identities represent high-impact access that requires specialized controls and monitoring.', approach: 'Privileged access management provides controls for credential vaulting, session monitoring and JIT access.' },
    'IDENTITY LIFECYCLE': { focus: 'joiner workflows, mover workflows, leaver workflows, access removal', next: 'Review joiner, mover and leaver workflows across critical applications.', why: 'Manual provisioning and deprovisioning can lead to delays, errors and lingering access rights.', approach: 'Identity lifecycle automation connects identity changes to access provisioning and deprovisioning.' },
    'SSO & AUTHENTICATION': { focus: 'centralized authentication, application access, federation, authentication consistency', next: 'Review authentication consistency and application access patterns.', why: 'Fragmented authentication experiences can increase friction and complicate access policy enforcement.', approach: 'Centralized SSO and adaptive MFA provide consistent authentication controls across the enterprise.' },
    'IDENTITY THREAT RESPONSE': { focus: 'identity context, security signals, investigation, identity activity', next: 'Review how identity context connects with security investigation workflows.', why: 'Security signals without identity context can be difficult to investigate and correlate.', approach: 'Connecting identity context with security signals supports more informed investigation and response.' },
    'ACCESS GOVERNANCE': { focus: 'role changes, entitlement updates, policy controls, access reviews', next: 'Review role changes, entitlement updates and access review processes.', why: 'As roles change, access rights often accumulate, leading to excessive permissions.', approach: 'Access governance provides mechanisms to review, update and certify access based on changing roles.' }
  };

  const handleAnswer = (val) => {
    setAnswers({ ...answers, [currentStep]: val });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
    setActiveCapability(null);
  };

  const getResultCategory = (answerIndex) => {
    if (answerIndex === 0 || answerIndex === 1) return 'ESTABLISHED AREA';
    if (answerIndex === 2) return 'AREA TO EXPLORE';
    return 'AREA FOR FURTHER REVIEW';
  };

  const getResults = () => {
    const results = [];
    questions.forEach((q, i) => {
      const ansLabel = answers[i];
      if (ansLabel) {
        const answerIndex = q.options.indexOf(ansLabel);
        results.push({
          capability: q.capability,
          category: getResultCategory(answerIndex)
        });
      }
    });
    return results;
  };

  const activeNodes = ['GOVERNANCE', 'ACCESS', 'LIFECYCLE', 'PRIVILEGE', 'AUTHENTICATION', 'VISIBILITY'];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden min-h-screen">
      
      <div className="container-wide mb-16 animate-fade-in-up">
        <p className="eyebrow mb-4 text-center md:text-left">IAM RISK EXPLORER</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section text-center md:text-left text-textPrimary">
            HOW MATURE IS YOUR<br/>
            <span className="text-textSecondary">IDENTITY ENVIRONMENT?</span>
          </h2>
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <p className="body-base text-sm mb-4 text-center md:text-left text-textSecondary">
              Explore a few questions about identity, access and privilege to identify areas that may deserve closer attention.
            </p>
            <span className="text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong px-2 py-1 rounded-sm bg-card shadow-sm">CONCEPTUAL SELF-ASSESSMENT — NOT A FORMAL SECURITY AUDIT</span>
          </div>
        </div>
      </div>

      {!showResults ? (
        <div className="container-wide relative z-10 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT: QUESTION PANEL */}
            <div className="flex flex-col">
               <div className="mb-8">
                 <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] font-bold text-accent tracking-widest font-mono">QUESTION 0{currentStep + 1} / 0{questions.length}</span>
                 </div>
                 <div className="flex items-center gap-2 mb-2">
                   {questions.map((_, i) => (
                     <div key={i} className={`flex-1 h-1 rounded-full transition-colors duration-500 ${i <= currentStep ? 'bg-accent' : 'bg-borderStrong'}`}></div>
                   ))}
                 </div>
               </div>

               <div className="bg-card border border-borderLight rounded-sm p-8 md:p-12 mb-8 flex-grow shadow-sm">
                 <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-10 leading-tight">{questions[currentStep].q}</h3>
                 
                 <div className="flex flex-col gap-3">
                   {questions[currentStep].options.map((opt, i) => {
                     const isSelected = answers[currentStep] === opt;
                     return (
                       <button
                         key={i}
                         onClick={() => handleAnswer(opt)}
                         className={`text-left p-4 border rounded-sm transition-all duration-300 flex items-center justify-between group shadow-sm
                           ${isSelected ? 'bg-bgSecondary border-accent' : 'bg-bgPrimary border-borderStrong hover:bg-bgSecondary'}
                         `}
                       >
                         <span className={`text-xs font-bold tracking-widest transition-colors ${isSelected ? 'text-textPrimary' : 'text-textSecondary group-hover:text-textPrimary'}`}>{opt}</span>
                         {isSelected && <div className="w-2 h-2 rounded-full bg-accent"></div>}
                       </button>
                     );
                   })}
                 </div>
               </div>

               <div className="flex justify-between items-center">
                 <button 
                   onClick={handlePrev} 
                   disabled={currentStep === 0}
                   className={`flex items-center text-[10px] font-bold tracking-widest uppercase transition-colors
                     ${currentStep === 0 ? 'text-textSecondary opacity-50 cursor-not-allowed' : 'text-textSecondary hover:text-textPrimary'}
                   `}
                 >
                   <ChevronLeft className="w-4 h-4 mr-1" /> BACK
                 </button>
                 <button 
                   onClick={handleNext} 
                   disabled={!answers[currentStep]}
                   className={`flex items-center text-[10px] font-bold tracking-widest uppercase transition-colors
                     ${!answers[currentStep] ? 'text-textSecondary opacity-50 cursor-not-allowed' : 'text-accent hover:text-textPrimary'}
                   `}
                 >
                   {currentStep === questions.length - 1 ? 'VIEW RESULTS' : 'NEXT'} <ChevronRight className="w-4 h-4 ml-1" />
                 </button>
               </div>
            </div>

            {/* RIGHT: IDENTITY VISUALIZATION */}
            <div className="bg-card border border-borderLight rounded-sm p-8 flex flex-col justify-center items-center h-[500px] lg:h-auto relative overflow-hidden shadow-sm">
               <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
               
               <div className="text-[9px] font-bold text-textSecondary tracking-[0.2em] uppercase absolute top-6 left-6">
                 IAM CONTROL AREAS
               </div>

               <div className="relative w-full h-[400px] flex items-center justify-center">
                 
                 <div className="absolute inset-0 flex items-center justify-center scale-[0.7] sm:scale-90 md:scale-100">
                   {/* Connecting Lines */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                     <g style={{ transform: 'translate(50%, 50%)' }}>
                       {activeNodes.map((node, i) => {
                         const rad = (i * 60) * (Math.PI / 180);
                         const x = Math.cos(rad) * 140;
                         const y = Math.sin(rad) * 140;
                         const isActive = questions[currentStep].capability.includes(node) || (node === 'AUTHENTICATION' && questions[currentStep].capability.includes('SSO'));
                         return (
                           <g key={i}>
                             <line x1="0" y1="0" x2={x} y2={y} stroke={isActive ? "var(--color-accent)" : "var(--color-border-strong)"} strokeWidth="1" className="transition-all duration-500" />
                             {isActive && (
                               <circle r="2" fill="var(--color-accent)" className="animate-[signal-travel_2s_infinite_linear]">
                                  <animateMotion dur="2s" repeatCount="indefinite" path={`M 0 0 L ${x} ${y}`} />
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
                     <span className="text-[8px] font-bold text-textPrimary tracking-widest uppercase mt-3 px-2 py-1 bg-card border border-borderStrong rounded-sm shadow-sm">IDENTITYSHIELD</span>
                   </div>

                   {/* Surrounding Nodes */}
                   {activeNodes.map((node, i) => {
                     const rad = (i * 60) * (Math.PI / 180);
                     const x = Math.cos(rad) * 140;
                     const y = Math.sin(rad) * 140;
                     const isActive = questions[currentStep].capability.includes(node) || (node === 'AUTHENTICATION' && questions[currentStep].capability.includes('SSO'));
                     
                     return (
                       <div 
                         key={i}
                         className="absolute z-10 flex flex-col items-center transition-all duration-500"
                         style={{ transform: `translate(${x}px, ${y}px)` }}
                       >
                         <div className={`w-3 h-3 rounded-full border mb-2 transition-colors duration-500
                           ${isActive ? 'bg-accent border-accent shadow-sm' : 'bg-card border-borderStrong'}
                         `}></div>
                         <span className={`text-[7px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm border transition-colors duration-500
                           ${isActive ? 'text-accent border-accent/50 bg-bgSecondary shadow-sm' : 'text-textSecondary border-transparent bg-transparent'}
                         `}>
                           {node}
                         </span>
                       </div>
                     )
                   })}
                 </div>
               </div>
               
               {/* Context Label */}
               <div className="absolute bottom-6 w-full text-center">
                 <span className="text-[9px] font-bold text-accent tracking-widest uppercase px-4 py-2 border border-accent/30 rounded-sm bg-bgSecondary shadow-sm">
                   {questions[currentStep].capability}
                 </span>
               </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="container-wide relative z-10 animate-fade-in-up">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">YOUR IAM EXPLORATION</h2>
             <p className="text-sm text-textSecondary leading-relaxed">
               Based on the areas you explored, these capabilities may deserve closer attention.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* LEFT: RESULTS MATRIX */}
            <div className="flex flex-col gap-4">
              <div className="text-[9px] font-bold text-textSecondary tracking-[0.2em] uppercase mb-2">IAM CAPABILITY AREAS</div>
              {getResults().slice(0, 3).map((res, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCapability(activeCapability === res.capability ? null : res.capability)}
                  className={`text-left p-6 border rounded-sm transition-all duration-300 flex flex-col group shadow-sm
                    ${activeCapability === res.capability ? 'bg-card border-accent' : 'bg-bgSecondary border-borderLight hover:bg-card'}
                  `}
                >
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${activeCapability === res.capability ? 'text-textPrimary' : 'text-textPrimary'}`}>
                      {res.capability}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-textSecondary transition-transform duration-300 ${activeCapability === res.capability ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${res.category === 'ESTABLISHED AREA' ? 'bg-textSecondary' : res.category === 'AREA TO EXPLORE' ? 'bg-accent' : 'bg-red-500'}`}></div>
                    <span className={`text-[9px] font-bold tracking-widest uppercase ${res.category === 'ESTABLISHED AREA' ? 'text-textSecondary' : res.category === 'AREA TO EXPLORE' ? 'text-accent' : 'text-red-500'}`}>
                      {res.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* RIGHT: CAPABILITY DETAILS */}
            <div className="bg-card border border-borderLight shadow-sm rounded-sm p-8 min-h-[300px]">
               {activeCapability ? (
                 <div className="animate-fade-in-up">
                   <h3 className="text-lg font-bold text-textPrimary tracking-widest uppercase mb-8 pb-4 border-b border-borderLight">
                     {activeCapability}
                   </h3>
                   
                   <div className="space-y-8">
                     <div>
                       <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">WHY IT MAY DESERVE ATTENTION</h4>
                       <p className="text-sm text-textSecondary leading-relaxed">
                         {capabilityDetails[activeCapability].why}
                       </p>
                     </div>
                     <div>
                       <h4 className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3">IDENTITYSHIELD APPROACH</h4>
                       <p className="text-sm text-textPrimary leading-relaxed">
                         {capabilityDetails[activeCapability].approach}
                       </p>
                     </div>
                   </div>
                 </div>
               ) : (
                 <div className="flex items-center justify-center h-full opacity-50 text-center flex-col gap-4">
                   <Shield className="w-8 h-8 text-textSecondary" />
                   <span className="text-[9px] font-bold text-textSecondary tracking-[0.2em] uppercase">SELECT AN AREA TO VIEW DETAILS</span>
                 </div>
               )}
            </div>

          </div>

          {/* POSSIBLE NEXT STEP */}
          <div className="max-w-3xl mx-auto mt-16 p-8 border border-accent/30 bg-bgSecondary rounded-sm text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mb-4 block">POSSIBLE NEXT STEP</span>
            <p className="text-sm text-textPrimary leading-relaxed">
              {getResults().length > 0 ? capabilityDetails[getResults().find(r => r.category !== 'ESTABLISHED AREA')?.capability || getResults()[0].capability].next : 'Discuss your IAM strategy with an expert.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
              Talk to an IAM Expert
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
              Explore Identity Security <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="text-center mt-12">
            <button onClick={handleRestart} className="text-[9px] font-bold text-textSecondary hover:text-textPrimary tracking-widest uppercase transition-colors">
              RESTART EXPLORATION
            </button>
          </div>

        </div>
      )}

      {/* TRUST MESSAGE */}
      <div className="container-wide mt-24 pt-8 border-t border-borderLight text-center">
        <span className="text-[8px] font-bold text-textSecondary tracking-widest uppercase">
          THIS EXPLORATION IS DESIGNED TO SUPPORT DISCUSSION.<br/>IT IS NOT A SECURITY AUDIT, RISK SCORE OR COMPLIANCE ASSESSMENT.
        </span>
      </div>

    </section>
  );
};

export default IAMRiskExplorer;
