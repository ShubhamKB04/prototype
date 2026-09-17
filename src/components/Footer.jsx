import React, { useState } from 'react';
import { Shield, ArrowRight, ChevronDown } from 'lucide-react';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const navGroups = [
    {
      title: 'SOLUTIONS',
      links: ['Identity Governance', 'Privileged Access Management', 'SSO & Authentication', 'Identity Lifecycle', 'Identity Threat Response', 'Access Governance']
    },
    {
      title: 'SERVICES',
      links: ['IAM Consulting', 'IAM Implementation', 'IAM Integration', 'IAM Assessment', 'Managed IAM']
    },
    {
      title: 'INDUSTRIES',
      links: ['Banking', 'Healthcare', 'Technology', 'Manufacturing', 'Retail', 'Education', 'Government']
    },
    {
      title: 'RESOURCES',
      links: ['Insights', 'Case Studies', 'IAM Guides', 'FAQs']
    }
  ];

  const visualNodes = ['IDENTITY', 'ACCESS', 'PRIVILEGE', 'GOVERNANCE'];

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer className="bg-bgPrimary relative overflow-hidden">
      
      {/* AREA 01: FOOTER CTA */}
      <div className="border-t border-borderLight py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container-wide relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="eyebrow mb-6 text-accent">READY TO TAKE CONTROL?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-8 leading-tight">
              BUILD A MORE<br/>
              <span className="text-textSecondary">STRUCTURED IDENTITY STRATEGY.</span>
            </h2>
            <p className="body-base text-textSecondary mb-12 max-w-2xl mx-auto text-sm md:text-base">
              Explore how IdentityShield can help organizations approach identity, access, privilege and governance through a structured IAM strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="btn-primary group rounded-sm shadow-sm hover:shadow-md px-8 py-4 sm:w-auto text-sm md:text-base flex items-center justify-center">
                Talk to an IAM Expert
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-xs md:text-sm font-bold text-textSecondary tracking-widest uppercase hover:text-textPrimary transition-colors group flex items-center">
                Explore Solutions <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AREA 02 & 03: BRAND, NAV & CONTACT */}
      <div className="border-t border-borderLight py-20 relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* BRANDING (LEFT) */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm border border-borderStrong bg-card flex items-center justify-center flex-shrink-0 shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></div>
                  <Shield className="w-5 h-5 text-textPrimary relative z-10" />
                </div>
                <span className="text-xl font-bold tracking-tight text-textPrimary">IdentityShield</span>
              </div>
              
              <h3 className="text-[10px] font-bold text-accent tracking-widest uppercase mb-4">
                ONE-STOP SOLUTION FOR ALL IAM PROBLEMS.
              </h3>
              
              <p className="text-textSecondary text-sm leading-relaxed max-w-xs mb-10">
                IdentityShield brings identity, access, privilege and governance into a structured IAM approach.
              </p>

              {/* TECHNICAL IDENTITY VISUAL */}
              <div className="w-full h-32 relative bg-card border border-borderStrong rounded-sm overflow-hidden flex items-center justify-center shadow-sm">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                <span className="absolute top-2 left-2 text-[6px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong px-1 bg-bgSecondary">IAM CONTROL LAYER</span>
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                  <g style={{ transform: 'translate(20%, 50%)' }}>
                    {[0, 1, 2, 3].map((_, i) => (
                      <g key={i}>
                        <line x1="0" y1={(i - 1.5) * 15} x2="100" y2="0" stroke="var(--color-border-strong)" strokeWidth="0.5" />
                        <circle r="1" fill="var(--color-accent)" className="animate-[signal-travel_4s_infinite_linear]" style={{ animationDelay: `${i * 1.2}s` }}>
                           <animateMotion dur="4s" repeatCount="indefinite" path={`M 0 ${(i - 1.5) * 15} L 100 0`} />
                        </circle>
                      </g>
                    ))}
                  </g>
                </svg>
                
                <div className="absolute right-8 z-10 border border-accent/30 bg-bgSecondary p-1 rounded-sm shadow-sm">
                  <Shield className="w-3 h-3 text-accent" />
                </div>
              </div>
            </div>

            {/* NAVIGATION COLUMNS (CENTER) */}
            <div className="lg:col-span-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {navGroups.map((group, idx) => (
                <div key={idx} className="border-b border-borderLight md:border-none pb-4 md:pb-0">
                  {/* Mobile Accordion Toggle */}
                  <button 
                    onClick={() => toggleSection(group.title)}
                    className="w-full flex items-center justify-between md:hidden py-2"
                    aria-expanded={expandedSection === group.title}
                  >
                    <h4 className="text-[10px] font-bold text-textPrimary tracking-widest uppercase">{group.title}</h4>
                    <ChevronDown className={`w-4 h-4 text-textSecondary transition-transform duration-300 ${expandedSection === group.title ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Desktop Title */}
                  <h4 className="hidden md:block text-[10px] font-bold text-textPrimary tracking-widest uppercase mb-6">{group.title}</h4>
                  
                  {/* Links */}
                  <ul className={`md:flex flex-col gap-4 overflow-hidden transition-all duration-300 ${expandedSection === group.title ? 'max-h-96 mt-4' : 'max-h-0 md:max-h-96 mt-0 md:mt-0'}`}>
                    {group.links.map((link, i) => (
                      <li key={i}>
                        <button className="text-xs text-textSecondary hover:text-accent transition-all hover:translate-x-1 text-left">
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CONTACT / COMPANY (RIGHT) */}
            <div className="lg:col-span-3 flex flex-col bg-card border border-borderLight rounded-sm p-8 h-full shadow-sm">
              <h4 className="text-[10px] font-bold text-accent tracking-widest uppercase mb-4">LET'S TALK IAM.</h4>
              <p className="text-xs text-textSecondary leading-relaxed mb-8 flex-grow">
                Have an identity, access or privilege challenge? Start a conversation around your current IAM environment.
              </p>
              <button className="text-[10px] font-bold text-textPrimary tracking-widest uppercase flex items-center group w-fit pb-1 border-b border-accent/50 hover:border-accent transition-colors">
                Talk to an IAM Expert <ArrowRight className="w-3 h-3 ml-2 text-accent transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* AREA 04: BOTTOM BAR */}
      <div className="border-t border-borderLight py-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-textSecondary tracking-widest uppercase text-center md:text-left">
            © 2026 IDENTITYSHIELD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold text-textSecondary tracking-widest uppercase">
            <button className="hover:text-textPrimary transition-colors">PRIVACY</button>
            <button className="hover:text-textPrimary transition-colors">TERMS</button>
            <button className="hover:text-textPrimary transition-colors">SECURITY</button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
