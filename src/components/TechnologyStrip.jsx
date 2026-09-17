import React, { useState } from 'react';
import { Shield } from 'lucide-react';

const TechnologyStrip = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 'idp', label: 'IDENTITY PROVIDERS', angle: 180, radius: 250 },
    { id: 'iga', label: 'IGA', angle: 225, radius: 200 },
    { id: 'pam', label: 'PAM', angle: 135, radius: 200 },
    { id: 'cloud', label: 'CLOUD', angle: 0, radius: 250 },
    { id: 'dir', label: 'DIRECTORIES', angle: 45, radius: 200 },
    { id: 'apps', label: 'APPLICATIONS', angle: 270, radius: 160 },
    { id: 'sec', label: 'SECURITY', angle: 315, radius: 200 },
  ];

  const technologies = [
    { name: 'Microsoft Entra ID', category: 'idp' },
    { name: 'Okta', category: 'idp' },
    { name: 'Ping Identity', category: 'idp' },
    { name: 'SailPoint', category: 'iga' },
    { name: 'Saviynt', category: 'iga' },
    { name: 'CyberArk', category: 'pam' },
    { name: 'BeyondTrust', category: 'pam' },
    { name: 'Delinea', category: 'pam' },
    { name: 'Microsoft Azure', category: 'cloud' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Google Cloud', category: 'cloud' },
    { name: 'Active Directory', category: 'dir' },
    { name: 'LDAP', category: 'dir' },
    { name: 'Enterprise Applications', category: 'apps' },
    { name: 'SaaS Applications', category: 'apps' },
    { name: 'Custom Applications', category: 'apps' },
    { name: 'SIEM', category: 'sec' },
    { name: 'SOC', category: 'sec' },
    { name: 'Security Analytics', category: 'sec' },
  ];

  return (
    <section className="py-24 bg-card border-y border-borderLight relative overflow-hidden">
      <div className="container-wide">
        
        {/* SECTION INTRO */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="eyebrow mb-4">TECHNOLOGY ECOSYSTEM</p>
          <h2 className="heading-section mb-6">
            BUILT FOR THE<br />
            <span className="text-textSecondary">TECHNOLOGY YOU ALREADY USE.</span>
          </h2>
          <p className="body-base max-w-2xl mx-auto mb-8">
            IdentityShield brings identity, access and security together across the applications, platforms and infrastructure that power modern organizations.
          </p>
          <div className="inline-block text-[10px] font-bold text-textSecondary tracking-widest uppercase border border-borderLight rounded-full px-4 py-1.5 bg-bgSecondary">
            IDENTITY <span className="text-accent mx-2">•</span> 
            ACCESS <span className="text-accent mx-2">•</span> 
            INTEGRATION
          </div>
        </div>

        {/* MAIN VISUAL (DESKTOP) */}
        <div className="hidden lg:flex relative h-[500px] justify-center items-center mb-20 animate-fade-in-up">
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <g style={{ transform: 'translate(50%, 50%)' }}>
              {categories.map((cat) => {
                const rad = cat.angle * (Math.PI / 180);
                const x = Math.cos(rad) * cat.radius;
                const y = Math.sin(rad) * cat.radius;
                const isActive = activeCategory === cat.id;
                const isHovered = activeCategory !== null;

                return (
                  <g key={`line-${cat.id}`}>
                    <line 
                      x1="0" y1="0" 
                      x2={x} y2={y} 
                      stroke={isActive ? "var(--color-accent)" : "var(--color-border-strong)"} 
                      strokeWidth={isActive ? "2" : "1"}
                      className={`transition-all duration-300 ${!isActive && isHovered ? 'opacity-30' : 'opacity-100'}`}
                    />
                    {/* Signal Animation on active line */}
                    {isActive && (
                      <circle r="3" fill="var(--color-accent)" className="animate-signal">
                        <animateMotion dur="3s" repeatCount="indefinite" path={`M ${x} ${y} L 0 0`} />
                      </circle>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Central Node */}
          <div className="absolute z-30 flex flex-col items-center justify-center">
            <div className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 bg-card border border-accent/30 rounded-full shadow-sm">
              UNIFIED IAM CONTROL
            </div>
            <div className="w-24 h-24 bg-card border border-accent rounded-full flex flex-col items-center justify-center shadow-lg relative group cursor-default">
              <div className="absolute inset-0 rounded-full border border-accent/50 animate-[ping_4s_ease-in-out_infinite]"></div>
              <Shield className="w-6 h-6 text-accent mb-1" />
              <span className="text-[9px] font-bold text-textPrimary tracking-wider">IDENTITYSHIELD</span>
            </div>
          </div>

          {/* Category Nodes */}
          {categories.map((cat) => {
            const rad = cat.angle * (Math.PI / 180);
            const x = Math.cos(rad) * cat.radius;
            const y = Math.sin(rad) * cat.radius;
            const isActive = activeCategory === cat.id;
            const isHovered = activeCategory !== null;

            return (
              <button 
                key={cat.id} 
                className={`absolute z-20 px-4 py-2 rounded-sm border transition-all duration-300 text-xs font-bold tracking-widest transform shadow-sm
                  ${isActive 
                    ? 'bg-card border-accent text-accent shadow-md scale-110' 
                    : 'bg-bgPrimary border-borderStrong text-textSecondary hover:border-textPrimary hover:text-textPrimary'
                  }
                  ${!isActive && isHovered ? 'opacity-40' : 'opacity-100'}
                `}
                style={{ 
                  transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                  transformOrigin: 'center'
                }}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
                onFocus={() => setActiveCategory(cat.id)}
                onBlur={() => setActiveCategory(null)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* MOBILE VISUAL & SELECTOR */}
        <div className="lg:hidden flex flex-col items-center mb-12 animate-fade-in-up">
          {/* Central Node Mobile */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-[9px] font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 bg-card border border-accent/30 rounded-full shadow-sm">
              UNIFIED IAM CONTROL
            </div>
            <div className="w-20 h-20 bg-card border border-accent rounded-full flex flex-col items-center justify-center shadow-md relative">
              <div className="absolute inset-0 rounded-full border border-accent/50 animate-[ping_4s_ease-in-out_infinite]"></div>
              <Shield className="w-5 h-5 text-accent mb-1" />
              <span className="text-[8px] font-bold text-textPrimary tracking-wider">IDENTITYSHIELD</span>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-3 py-2 rounded-sm border transition-all duration-300 text-[10px] font-bold tracking-widest shadow-sm
                  ${activeCategory === cat.id 
                    ? 'bg-card border-accent text-accent' 
                    : 'bg-bgPrimary border-borderStrong text-textSecondary'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY CARDS GRID */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in-up delay-200">
            {technologies.map((tech, idx) => {
              const isActive = activeCategory === tech.category;
              const isHovered = activeCategory !== null;
              
              return (
                <div 
                  key={idx} 
                  className={`bg-card border p-5 flex items-center justify-center text-center transition-all duration-500 rounded-sm card-hover hover-lift
                    ${isActive 
                      ? 'border-accent shadow-md' 
                      : 'border-borderLight shadow-sm'
                    }
                    ${!isActive && isHovered ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}
                  `}
                  onMouseEnter={() => setActiveCategory(tech.category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <span className={`font-semibold transition-colors duration-300 ${isActive ? 'text-textPrimary' : 'text-textSecondary'}`}>
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[10px] text-textSecondary mt-6 italic">
            * Technology examples shown for ecosystem illustration. Actual integrations may vary.
          </p>
        </div>

        {/* INTEGRATION FLOW & TRUST MESSAGE */}
        <div className="border-t border-borderLight pt-16 flex flex-col items-center animate-fade-in-up">
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16 text-xs font-bold text-textPrimary tracking-[0.2em]">
            <div className="flex flex-col items-center text-center group">
              <span className="text-accent mb-2 transition-all">CONNECT</span>
              <span className="text-[10px] text-textSecondary font-normal normal-case tracking-normal">Identities and applications</span>
            </div>
            <span className="text-borderStrong hidden md:block">→</span>
            <span className="text-borderStrong block md:hidden">↓</span>
            
            <div className="flex flex-col items-center text-center group">
              <span className="text-accent mb-2 transition-all">CONTROL</span>
              <span className="text-[10px] text-textSecondary font-normal normal-case tracking-normal">Access and privileges</span>
            </div>
            <span className="text-borderStrong hidden md:block">→</span>
            <span className="text-borderStrong block md:hidden">↓</span>
            
            <div className="flex flex-col items-center text-center group">
              <span className="text-accent mb-2 transition-all">SECURE</span>
              <span className="text-[10px] text-textSecondary font-normal normal-case tracking-normal">Every identity</span>
            </div>
            <span className="text-borderStrong hidden md:block">→</span>
            <span className="text-borderStrong block md:hidden">↓</span>
            
            <div className="flex flex-col items-center text-center group">
              <span className="text-accent mb-2 transition-all">MONITOR</span>
              <span className="text-[10px] text-textSecondary font-normal normal-case tracking-normal">Identity activity</span>
            </div>
          </div>

          <div className="text-center max-w-3xl">
            <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-4">
              YOUR TECHNOLOGY STACK <span className="text-accent">SHOULDN'T LIMIT YOUR IDENTITY STRATEGY.</span>
            </h3>
            <p className="body-base">
              IdentityShield is designed to fit into modern enterprise environments rather than forcing organizations to replace everything they already use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyStrip;
