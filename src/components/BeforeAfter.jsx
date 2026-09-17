import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeftRight, ChevronRight, ChevronLeft, Activity, Users, Shield, Key, FileCode, CheckCircle2, AlertTriangle, Network } from 'lucide-react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCapability, setActiveCapability] = useState(null);
  const [mobileView, setMobileView] = useState('before'); // 'before' | 'after'

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    // Clamp between 10% and 90%
    const clamped = Math.max(10, Math.min(90, percent));
    setSliderPosition(clamped);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [isDragging]);

  const capabilities = [
    { id: '01', title: 'VISIBILITY', transform: 'UNCLEAR → VISIBLE', desc: 'Bring identity-related information into a more understandable view across users, applications and access.' },
    { id: '02', title: 'GOVERNANCE', transform: 'EXCESSIVE → GOVERNED', desc: 'Establish clear policies, roles and periodic reviews for all critical access.' },
    { id: '03', title: 'LIFECYCLE', transform: 'MANUAL → WORKFLOW-DRIVEN', desc: 'Automate joiner, mover and leaver workflows to reduce errors and delays.' },
    { id: '04', title: 'PRIVILEGE', transform: 'UNMANAGED → PROTECTED', desc: 'Vault credentials, monitor sessions and enforce JIT access for admin accounts.' },
    { id: '05', title: 'ACCESS', transform: 'FRAGMENTED → CENTRALIZED', desc: 'Apply consistent SSO and MFA policies across enterprise applications.' },
    { id: '06', title: 'MONITORING', transform: 'STATIC → MONITORED', desc: 'Correlate identity signals to detect anomalous behavior and respond faster.' },
  ];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-16 animate-fade-in-up text-center">
        <p className="eyebrow mb-4">THE IAM TRANSFORMATION</p>
        <h2 className="heading-section mb-6">
          FROM FRAGMENTED ACCESS<br/>
          <span className="text-textSecondary">TO CONTROLLED IDENTITY.</span>
        </h2>
        <p className="body-base max-w-2xl mx-auto mb-10 text-sm">
          See how an organization can move from disconnected identity processes toward a more structured IAM operating model.
        </p>
      </div>

      {/* MOBILE TOGGLE (Visible only on lg-) */}
      <div className="container-wide mb-8 lg:hidden flex justify-center">
        <div className="flex bg-bgSecondary border border-borderLight rounded-sm p-1 shadow-sm">
          <button 
            onClick={() => setMobileView('before')}
            className={`px-6 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-sm ${mobileView === 'before' ? 'bg-card text-textSecondary border border-borderStrong shadow-sm' : 'text-textSecondary opacity-70'}`}
          >
            BEFORE
          </button>
          <button 
            onClick={() => setMobileView('after')}
            className={`px-6 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-sm ${mobileView === 'after' ? 'bg-card text-accent border border-accent shadow-sm' : 'text-textSecondary opacity-70'}`}
          >
            IDENTITYSHIELD
          </button>
        </div>
      </div>

      {/* MAIN SLIDER COMPARISON */}
      <div className="container-wide mb-8">
        
        {/* Desktop Interactive Slider */}
        <div className="hidden lg:block relative h-[600px] w-full border border-borderLight bg-bgSecondary overflow-hidden rounded-sm select-none shadow-sm" ref={containerRef}>
          
          {/* RIGHT SIDE: AFTER (Background) */}
          <div className="absolute inset-0 bg-card flex justify-end">
            <div className="w-1/2 h-full flex flex-col p-12 justify-center relative">
               <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
               
               <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-center mb-12">
                    <h3 className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-2">IDENTITYSHIELD APPROACH</h3>
                    <p className="text-textPrimary font-bold text-sm tracking-widest uppercase">UNIFIED IAM CONTROL</p>
                  </div>
                  
                  {/* Centralized Visual */}
                  <div className="relative w-full h-[250px] flex items-center justify-center mb-12">
                    <div className="absolute z-20 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border border-accent bg-card flex items-center justify-center shadow-sm">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    
                    {/* Organized Connections */}
                    {[
                      { l: 'USERS', a: -60 }, { l: 'APPS', a: -120 }, { l: 'CLOUD', a: 180 }, 
                      { l: 'PAM', a: 60 }, { l: 'DEVICES', a: 120 }, { l: 'DIRS', a: 0 }
                    ].map((node, i) => {
                      const rad = node.a * (Math.PI / 180);
                      const x1 = Math.cos(rad) * 40;
                      const y1 = Math.sin(rad) * 40;
                      const x2 = Math.cos(rad) * 110;
                      const y2 = Math.sin(rad) * 110;
                      return (
                        <React.Fragment key={i}>
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 250">
                            <g transform="translate(150, 125)">
                              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-border-strong)" strokeWidth="1" />
                              {i % 2 === 0 && <circle r="2" fill="var(--color-accent)" className="animate-[signal-travel_3s_infinite_linear]"><animateMotion dur="3s" repeatCount="indefinite" path={`M ${x1} ${y1} L ${x2} ${y2}`} /></circle>}
                            </g>
                          </svg>
                          <div className="absolute text-[8px] font-bold text-textPrimary tracking-widest uppercase bg-bgSecondary px-2 py-1 border border-borderStrong rounded-sm shadow-sm" style={{ transform: `translate(calc(-50% + ${Math.cos(rad) * 130}px), calc(-50% + ${Math.sin(rad) * 130}px))` }}>
                            {node.l}
                          </div>
                        </React.Fragment>
                      )
                    })}
                  </div>

                  <ul className="space-y-3 w-full max-w-sm text-xs font-bold tracking-widest uppercase text-textSecondary">
                    {['CENTRALIZED IDENTITY VISIBILITY', 'GOVERNED ACCESS', 'LIFECYCLE WORKFLOWS', 'PRIVILEGED ACCESS CONTROLS', 'IDENTITY SIGNALS', 'POLICY-BASED ACCESS'].map((item, i) => (
                      <li key={i} className="flex items-center"><CheckCircle2 className="w-3 h-3 text-accent mr-3"/> {item}</li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* LEFT SIDE: BEFORE (Foreground Clipper) */}
          <div 
            className="absolute inset-0 bg-bgSecondary border-r border-borderLight"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <div className="w-[100vw] lg:w-[calc(100vw-min(100vw,1280px)+1280px)] max-w-none h-full relative" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}>
              <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col p-12 justify-center">
                  
                  <div className="text-center mb-12">
                    <h3 className="text-textSecondary font-bold text-xs uppercase tracking-[0.2em] mb-2">BEFORE</h3>
                    <p className="text-textSecondary font-bold text-sm tracking-widest uppercase opacity-80">FRAGMENTED IDENTITY ENVIRONMENT</p>
                  </div>

                  {/* Fragmented Visual */}
                  <div className="relative w-full h-[250px] mb-12">
                     <div className="absolute top-[20%] left-[20%] text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest">HR SYSTEM</div>
                     <div className="absolute top-[30%] left-[60%] text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest">APP A</div>
                     <div className="absolute top-[60%] left-[30%] text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest">CLOUD</div>
                     <div className="absolute top-[70%] left-[70%] text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest">ADMIN</div>
                     <div className="absolute top-[10%] left-[80%] text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest">APP B</div>
                     <div className="absolute top-[80%] left-[10%] text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest">USERS</div>

                     <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
                       <path d="M 50 50 Q 150 100 200 80" stroke="var(--color-border-strong)" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                       <path d="M 60 150 Q 100 100 200 180" stroke="var(--color-border-strong)" strokeWidth="1" fill="none" />
                       <path d="M 220 50 Q 150 150 250 180" stroke="var(--color-border-strong)" strokeWidth="1" fill="none" />
                       <path d="M 80 50 L 80 150" stroke="var(--color-border-strong)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                     </svg>
                     <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-textSecondary rounded-full animate-ping opacity-50"></div>
                  </div>

                  <ul className="space-y-3 w-full max-w-sm mx-auto text-xs font-bold tracking-widest uppercase text-textSecondary">
                    {['MULTIPLE IDENTITY SOURCES', 'FRAGMENTED ACCESS', 'MANUAL LIFECYCLES', 'UNCLEAR PRIVILEGES', 'LIMITED VISIBILITY', 'MANUAL REVIEWS'].map((item, i) => (
                      <li key={i} className="flex items-center"><AlertTriangle className="w-3 h-3 text-textSecondary mr-3 opacity-60"/> {item}</li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 flex items-center justify-center z-30 cursor-ew-resize group"
            style={{ left: `calc(${sliderPosition}% - 24px)`, width: '48px' }}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          >
            <div className="absolute top-0 bottom-0 w-[2px] bg-borderStrong group-hover:bg-accent transition-colors"></div>
            
            {/* Handle Button */}
            <div className="w-12 h-8 bg-card border border-borderStrong rounded-sm flex items-center justify-between px-2 shadow-md relative z-10 transition-transform group-hover:scale-105">
              <ChevronLeft className="w-3 h-3 text-textPrimary" />
              <div className="w-[1px] h-4 bg-borderLight"></div>
              <ChevronRight className="w-3 h-3 text-textPrimary" />
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-6 flex flex-col items-center w-[200px] pointer-events-none">
              <span className="text-[9px] font-bold tracking-[0.2em] text-textPrimary mb-1">IDENTITYSHIELD</span>
              <span className="text-[7px] text-textSecondary tracking-widest uppercase">← Drag to compare →</span>
            </div>
            
            {/* Top Percentage Label */}
            <div className="absolute top-6 flex items-center gap-2 pointer-events-none opacity-80 text-[8px] font-bold font-mono text-textSecondary">
              <span>BEFORE</span>
              <span>{Math.round(sliderPosition)}%</span>
              <span>AFTER</span>
            </div>
          </div>
        </div>

        {/* Mobile Vertical View (Visible only on lg-) */}
        <div className="lg:hidden flex flex-col border border-borderLight rounded-sm bg-bgSecondary p-6 animate-fade-in-up shadow-sm">
           {mobileView === 'before' ? (
             <div className="flex flex-col items-center">
               <div className="text-center mb-8">
                  <h3 className="text-textSecondary font-bold text-xs uppercase tracking-[0.2em] mb-2">BEFORE</h3>
                  <p className="text-textSecondary font-bold text-sm tracking-widest uppercase opacity-80">FRAGMENTED IDENTITY ENVIRONMENT</p>
                </div>
                <div className="w-full max-w-[250px] mb-8 relative h-32 border border-borderStrong flex flex-wrap gap-2 items-center justify-center p-4">
                  <div className="text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest shadow-sm">HR SYSTEM</div>
                  <div className="text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest shadow-sm">APP A</div>
                  <div className="text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest shadow-sm">CLOUD</div>
                  <div className="text-[8px] text-textSecondary border border-borderStrong bg-card px-2 py-1 tracking-widest shadow-sm">ADMIN</div>
                </div>
                <ul className="space-y-3 w-full text-xs font-bold tracking-widest uppercase text-textSecondary">
                  {['MULTIPLE IDENTITY SOURCES', 'FRAGMENTED ACCESS', 'MANUAL LIFECYCLES', 'UNCLEAR PRIVILEGES', 'LIMITED VISIBILITY', 'MANUAL REVIEWS'].map((item, i) => (
                    <li key={i} className="flex items-center"><AlertTriangle className="w-3 h-3 text-textSecondary mr-3 opacity-60"/> {item}</li>
                  ))}
                </ul>
             </div>
           ) : (
             <div className="flex flex-col items-center">
               <div className="text-center mb-8">
                  <h3 className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-2">IDENTITYSHIELD APPROACH</h3>
                  <p className="text-textPrimary font-bold text-sm tracking-widest uppercase">UNIFIED IAM CONTROL</p>
                </div>
                <div className="w-full max-w-[250px] mb-8 relative h-32 border border-borderLight bg-card flex items-center justify-center p-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full border border-accent bg-card shadow-sm flex items-center justify-center"><Shield className="w-4 h-4 text-accent" /></div>
                </div>
                <ul className="space-y-3 w-full text-xs font-bold tracking-widest uppercase text-textSecondary">
                  {['CENTRALIZED IDENTITY VISIBILITY', 'GOVERNED ACCESS', 'LIFECYCLE WORKFLOWS', 'PRIVILEGED ACCESS CONTROLS', 'IDENTITY SIGNALS', 'POLICY-BASED ACCESS'].map((item, i) => (
                    <li key={i} className="flex items-center"><CheckCircle2 className="w-3 h-3 text-accent mr-3"/> {item}</li>
                  ))}
                </ul>
             </div>
           )}
        </div>

      </div>

      {/* TRANSFORMATION METRICS ROW */}
      <div className="container-wide mb-32 hidden md:block">
        <div className="grid grid-cols-6 gap-2 border-y border-borderLight py-4">
          {capabilities.map((cap, i) => (
            <button 
              key={cap.id}
              onClick={() => setActiveCapability(activeCapability === i ? null : i)}
              className="group flex flex-col items-center text-center p-4 hover:bg-bgSecondary transition-colors rounded-sm"
            >
               <span className="text-[10px] font-bold text-accent tracking-widest font-mono mb-2">{cap.id}</span>
               <span className="text-[9px] font-bold tracking-[0.15em] text-textPrimary mb-3 uppercase">{cap.title}</span>
               <span className="text-[8px] text-textSecondary tracking-widest uppercase whitespace-nowrap group-hover:text-textPrimary transition-colors">{cap.transform}</span>
            </button>
          ))}
        </div>
        
        {/* Dynamic Explanation Panel */}
        <div className={`transition-all duration-300 overflow-hidden ${activeCapability !== null ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0 m-0'}`}>
           <div className="border border-accent/30 bg-bgSecondary p-4 text-center rounded-sm">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase mr-2">{activeCapability !== null ? capabilities[activeCapability].title : ''}:</span>
              <span className="text-xs text-textSecondary">{activeCapability !== null ? capabilities[activeCapability].desc : ''}</span>
           </div>
        </div>
      </div>

      {/* BOTTOM MESSAGE & CTA */}
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-6">
          THE GOAL ISN'T MORE<br/>
          <span className="text-textSecondary">IDENTITY TOOLS.</span><br/>
          <span className="text-accent">IT'S BETTER IDENTITY CONTROL.</span>
        </h2>
        <p className="body-base max-w-2xl mx-auto mb-10 text-sm">
          IdentityShield focuses on bringing identity, access, privilege and lifecycle capabilities together into a coherent IAM strategy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full sm:w-auto">
            Talk to an IAM Expert
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="text-xs font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
            Explore IdentityShield <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default BeforeAfter;
