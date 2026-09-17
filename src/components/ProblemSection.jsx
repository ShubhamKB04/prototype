import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, AlertCircle, LayoutDashboard, Database, KeySquare, MonitorSmartphone, Cloud, Users, Briefcase, FileCode } from 'lucide-react';

const ProblemSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const problems = [
    {
      id: 1,
      title: 'IDENTITY SPRAWL',
      heading: 'TOO MANY IDENTITIES. TOO LITTLE VISIBILITY.',
      desc: 'Organizations manage employees, contractors, partners, service accounts and applications across increasingly complex environments.',
      indicators: ['Visibility', 'Lifecycle', 'Governance'],
      icon: Users,
      details: {
        problem: 'Identity information is distributed across multiple systems without a single source of truth.',
        matters: 'Poor visibility makes lifecycle management and access governance significantly harder and error-prone.',
        need: 'Centralized identity visibility and automated, controlled lifecycle processes.'
      }
    },
    {
      id: 2,
      title: 'ACCESS COMPLEXITY',
      heading: 'WHO HAS ACCESS TO WHAT?',
      desc: 'Users often accumulate access across applications, cloud resources and systems over time, making access difficult to understand and control.',
      indicators: ['Permissions', 'Access Reviews', 'Least Privilege'],
      icon: LayoutDashboard,
      details: {
        problem: 'Permissions are granted but rarely revoked, leading to dangerously over-provisioned access profiles.',
        matters: 'Excessive access dramatically increases the blast radius of any potential security incident.',
        need: 'Automated access reviews, certification campaigns, and strict least-privilege enforcement.'
      }
    },
    {
      id: 3,
      title: 'PRIVILEGED RISK',
      heading: 'POWERFUL ACCESS CREATES POWERFUL RISK.',
      desc: 'Privileged accounts can provide access to critical systems and sensitive resources, making strong controls and monitoring essential.',
      indicators: ['Privilege', 'Monitoring', 'Protection'],
      icon: KeySquare,
      details: {
        problem: 'Unmanaged and unmonitored administrative accounts are the primary target for advanced attackers.',
        matters: 'Compromised privileged credentials can lead to rapid lateral movement and complete network takeover.',
        need: 'Secure credential vaulting, rapid rotation, and continuous session monitoring.'
      }
    }
  ];

  const questions = [
    "Do you know who has access to your critical applications?",
    "Can you quickly revoke access when someone leaves?",
    "Can you identify excessive privileges?",
    "Are your access reviews manual?",
    "Can you see identity-related risk across your environment?"
  ];

  const nodes = [
    { label: 'Employees', icon: Users, top: '10%', left: '20%' },
    { label: 'Contractors', icon: Briefcase, top: '15%', left: '70%' },
    { label: 'Partners', icon: Users, top: '40%', left: '10%' },
    { label: 'Service Accounts', icon: FileCode, top: '60%', left: '80%' },
    { label: 'Applications', icon: LayoutDashboard, top: '80%', left: '30%' },
    { label: 'Devices', icon: MonitorSmartphone, top: '75%', left: '60%' },
    { label: 'Cloud Resources', icon: Cloud, top: '35%', left: '85%' },
  ];

  return (
    <section className="py-32 bg-bgPrimary relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide relative z-10 mb-24 text-center animate-fade-in-up">
        <p className="eyebrow mb-4">THE IDENTITY CHALLENGE</p>
        <h2 className="heading-section mb-6">
          IDENTITY IS EVERYWHERE.<br/>
          <span className="text-textSecondary">CONTROL ISN'T.</span>
        </h2>
        <p className="body-base max-w-2xl mx-auto">
          Modern organizations have thousands of identities, applications and access relationships. Without centralized visibility and control, identity becomes one of the biggest sources of security and operational complexity.
        </p>
      </div>

      {/* ABSTRACT IDENTITY SPRAWL VISUALIZATION */}
      <div className="container-wide relative h-[300px] md:h-[400px] mb-24 animate-fade-in-up delay-100">
        <div className="absolute inset-0 bg-card border border-borderLight rounded-lg overflow-hidden">
          
          {/* Scattered Nodes */}
          {nodes.map((node, i) => (
            <div 
              key={i} 
              className="absolute flex flex-col items-center justify-center animate-[pulse-glow_5s_ease-in-out_infinite]"
              style={{ top: node.top, left: node.left, animationDelay: `${i * 0.5}s` }}
            >
              <div className="w-8 h-8 rounded-full bg-bgSecondary border border-borderStrong flex items-center justify-center mb-1 shadow-md">
                <node.icon className="w-3.5 h-3.5 text-textSecondary" />
              </div>
              <span className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">{node.label}</span>
            </div>
          ))}

          {/* Connectors (Background Grid/Lines) */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
            <line x1="20%" y1="10%" x2="70%" y2="15%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="20%" y1="10%" x2="10%" y2="40%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="70%" y1="15%" x2="85%" y2="35%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="10%" y1="40%" x2="30%" y2="80%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="85%" y1="35%" x2="80%" y2="60%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="30%" y1="80%" x2="60%" y2="75%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="60%" y1="75%" x2="80%" y2="60%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="20%" y1="10%" x2="60%" y2="75%" stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          </svg>

          {/* Visual Equation overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bgPrimary/70 backdrop-blur-sm z-10 p-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-bold text-textPrimary tracking-[0.1em] text-center mb-6">
              <span className="px-4 py-2 border border-borderLight bg-card shadow-sm rounded-sm">TOO MANY IDENTITIES</span>
              <span className="text-accent">+</span>
              <span className="px-4 py-2 border border-borderLight bg-card shadow-sm rounded-sm">TOO MANY APPLICATIONS</span>
              <span className="text-accent">+</span>
              <span className="px-4 py-2 border border-borderLight bg-card shadow-sm rounded-sm">TOO MANY PERMISSIONS</span>
            </div>
            <div className="text-accent mb-4">↓</div>
            <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-textPrimary uppercase drop-shadow-sm">
              IDENTITY COMPLEXITY
            </div>
          </div>

        </div>
      </div>

      {/* CORE PROBLEMS CARDS */}
      <div className="container-wide mb-32">
        <div className="grid lg:grid-cols-3 gap-6">
          {problems.map((prob) => {
            const isExpanded = expandedCard === prob.id;
            return (
              <div 
                key={prob.id}
                onClick={() => setExpandedCard(isExpanded ? null : prob.id)}
                className={`group cursor-pointer bg-card border transition-all duration-500 rounded-sm relative overflow-hidden flex flex-col shadow-sm
                  ${isExpanded 
                    ? 'border-accent shadow-md' 
                    : 'border-borderLight card-hover hover-lift'
                  }
                `}
              >
                {/* Highlight top line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] transition-colors duration-300 ${isExpanded ? 'bg-accent' : 'bg-transparent group-hover:bg-accent/50'}`}></div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-sm border transition-colors duration-300 ${isExpanded ? 'border-accent bg-accent/10' : 'border-borderLight group-hover:border-accent group-hover:bg-accent/10'}`}>
                        <prob.icon className={`w-4 h-4 transition-colors duration-300 ${isExpanded ? 'text-accent' : 'text-textSecondary group-hover:text-accent'}`} />
                      </div>
                      <span className="text-[10px] font-bold text-textSecondary tracking-widest uppercase">{prob.title}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-textPrimary mb-4 leading-tight">{prob.heading}</h3>
                  
                  {/* Default Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-0 opacity-0 mb-0' : 'max-h-96 opacity-100 mb-8'}`}>
                    <p className="text-sm text-textSecondary mb-8 leading-relaxed">
                      {prob.desc}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-auto">
                      {prob.indicators.map(ind => (
                        <span key={ind} className="text-[9px] font-bold bg-bgSecondary border border-borderStrong text-textSecondary px-2 py-1 uppercase tracking-widest group-hover:border-accent/30 group-hover:text-textPrimary transition-colors">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 mb-8 mt-4' : 'max-h-0 opacity-0 m-0'}`}>
                    <div className="space-y-6">
                      <div>
                        <div className="text-[9px] font-bold text-accent tracking-widest uppercase mb-1">THE PROBLEM</div>
                        <p className="text-sm text-textPrimary">{prob.details.problem}</p>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-textSecondary tracking-widest uppercase mb-1">WHY IT MATTERS</div>
                        <p className="text-sm text-textSecondary">{prob.details.matters}</p>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold text-textSecondary tracking-widest uppercase mb-1">WHAT ORGANIZATIONS NEED</div>
                        <p className="text-sm text-textSecondary">{prob.details.need}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`mt-auto pt-6 border-t transition-colors duration-300 flex justify-between items-center text-xs font-bold uppercase tracking-widest ${isExpanded ? 'border-accent/30 text-accent' : 'border-borderLight text-textPrimary group-hover:text-accent'}`}>
                    {isExpanded ? 'Close details' : 'Explore the challenge'}
                    {isExpanded ? <ChevronDown className="w-4 h-4 transform rotate-180" /> : <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROBLEM -> IMPACT FLOW */}
      <div className="container-wide mb-32">
        <div className="border border-borderLight bg-card p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 shadow-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center w-full justify-between gap-4">
            <div className="flex flex-col items-center group">
              <span className="text-[10px] font-bold text-textSecondary tracking-[0.15em] mb-2 group-hover:text-textPrimary transition-colors uppercase">IDENTITY SPRAWL</span>
              <div className="w-2 h-2 bg-borderStrong group-hover:bg-accent rounded-full transition-colors"></div>
            </div>
            
            <div className="hidden md:block flex-grow h-[1px] bg-borderLight relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[signal-travel_3s_infinite_linear]"></div>
              </div>
            </div>
            <div className="md:hidden w-[1px] h-8 bg-borderLight"></div>

            <div className="flex flex-col items-center group">
              <span className="text-[10px] font-bold text-textSecondary tracking-[0.15em] mb-2 group-hover:text-textPrimary transition-colors uppercase">ACCESS COMPLEXITY</span>
              <div className="w-2 h-2 bg-borderStrong group-hover:bg-accent rounded-full transition-colors"></div>
            </div>

            <div className="hidden md:block flex-grow h-[1px] bg-borderLight relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[signal-travel_3s_infinite_linear] delay-1000"></div>
              </div>
            </div>
            <div className="md:hidden w-[1px] h-8 bg-borderLight"></div>

            <div className="flex flex-col items-center group">
              <span className="text-[10px] font-bold text-textSecondary tracking-[0.15em] mb-2 group-hover:text-textPrimary transition-colors uppercase">PRIVILEGED EXPOSURE</span>
              <div className="w-2 h-2 bg-borderStrong group-hover:bg-accent rounded-full transition-colors"></div>
            </div>

            <div className="hidden md:block flex-grow h-[1px] bg-borderLight relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-[signal-travel_3s_infinite_linear] delay-2000"></div>
              </div>
            </div>
            <div className="md:hidden w-[1px] h-8 bg-borderLight flex flex-col items-center justify-end"><ArrowRight className="w-3 h-3 text-borderStrong transform rotate-90" /></div>

            <div className="flex flex-col items-center bg-bgSecondary border border-accent/30 px-6 py-4 rounded-sm shadow-sm">
              <AlertCircle className="w-5 h-5 text-accent mb-2" />
              <span className="text-[10px] font-bold text-textPrimary tracking-[0.15em] uppercase">OPERATIONAL & SECURITY CHALLENGES</span>
            </div>
          </div>
        </div>
      </div>

      {/* IAM QUESTIONS */}
      <div className="container-wide mb-32">
        <h3 className="text-[11px] font-bold text-accent tracking-[0.2em] uppercase mb-8 border-l-2 border-accent pl-4">ASK YOURSELF:</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
          {questions.map((q, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveQuestion(activeQuestion === idx ? null : idx)}
              className="group text-left bg-card border border-borderLight p-6 hover:border-accent/50 transition-all duration-300 w-full shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-borderStrong group-hover:bg-accent rounded-full transition-colors flex-shrink-0"></div>
                <div className="text-lg md:text-xl font-medium text-textPrimary group-hover:text-accent transition-colors">
                  {q}
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-500 pl-6 ${activeQuestion === idx ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0 m-0'}`}>
                <p className="text-sm text-textSecondary border-l border-accent/30 pl-4 py-1">
                  IdentityShield helps organizations address this challenge through centralized identity, access and governance capabilities.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* VISUAL TRANSITION TO SOLUTIONS */}
      <div className="container-wide text-center pt-24 border-t border-borderLight">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-textPrimary">
          THE PROBLEM IS COMPLEX.<br/>
          <span className="text-accent">YOUR IDENTITY STRATEGY DOESN'T HAVE TO BE.</span>
        </h2>
        
        <a href="#solutions" className="inline-flex flex-col items-center group text-textSecondary hover:text-textPrimary transition-colors cursor-pointer">
          <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4">EXPLORE THE IDENTITYSHIELD APPROACH</span>
          <div className="w-[1px] h-12 bg-borderStrong relative overflow-hidden group-hover:bg-textSecondary">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[fade-in-up_1.5s_ease-in-out_infinite]"></div>
          </div>
        </a>
      </div>

    </section>
  );
};

export default ProblemSection;
