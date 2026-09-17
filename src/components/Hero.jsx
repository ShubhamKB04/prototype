import React, { useState, useEffect, useRef } from 'react';
import { Shield, Users, Server, Cloud, Laptop, Lock, ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);
  const heroRef = useRef(null);
  const requestRef = useRef();

  // Handle smooth mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      // Use requestAnimationFrame for smooth updates
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const nodes = [
    { id: 'users', label: 'USERS', icon: Users, angle: -30, radius: 180, tooltip: 'Workforce identity' },
    { id: 'apps', label: 'APPLICATIONS', icon: Server, angle: 30, radius: 220, tooltip: 'Secure application access' },
    { id: 'devices', label: 'DEVICES', icon: Laptop, angle: 90, radius: 160, tooltip: 'Endpoint visibility' },
    { id: 'cloud', label: 'CLOUD', icon: Cloud, angle: 150, radius: 220, tooltip: 'Cloud infrastructure' },
    { id: 'pam', label: 'PRIVILEGED ACCESS', icon: Lock, angle: 210, radius: 180, tooltip: 'Privileged identity protection' },
    { id: 'api', label: 'API', icon: Activity, angle: 270, radius: 140, tooltip: 'Machine identities' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-subtle-cyber"
    >
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center flex-grow relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="animate-fade-in-up mt-12 lg:mt-0 order-2 lg:order-1 relative z-20">
          <p className="eyebrow mb-6">IdentityShield</p>
          <h1 className="heading-hero mb-6 text-textSecondary">
            SECURE EVERY <span className="text-textPrimary">IDENTITY.</span><br />
            CONTROL EVERY <span className="text-accent drop-shadow-sm">ACCESS.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6 tracking-tight">
            ONE-STOP SOLUTION FOR ALL IAM PROBLEMS.
          </h2>
          <p className="body-large mb-10 max-w-xl">
            IdentityShield helps organizations secure identities, simplify access, reduce privilege risk and build a modern IAM foundation across users, applications and systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <button className="btn-primary group rounded-sm shadow-md hover:shadow-lg">
              Talk to an IAM Expert
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group rounded-sm">
              Explore IAM Solutions
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform opacity-0 -translate-x-2 group-hover:opacity-100 transition-all" />
            </button>
          </div>

          <div className="text-xs font-bold text-textSecondary tracking-[0.2em] uppercase">
            IDENTITY <span className="text-accent mx-2">•</span> 
            ACCESS <span className="text-accent mx-2">•</span> 
            PRIVILEGE <span className="text-accent mx-2">•</span> 
            GOVERNANCE
          </div>
        </div>

        {/* RIGHT SIDE - INTERACTIVE VISUALIZATION */}
        <div className="relative h-[400px] sm:h-[450px] lg:h-[600px] flex justify-center items-center order-1 lg:order-2 animate-fade-in-up delay-200">
          
          {/* Responsive Scale Wrapper */}
          <div className="absolute inset-0 flex justify-center items-center scale-[0.65] sm:scale-[0.8] md:scale-90 lg:scale-100">
            {/* Parallax Container */}
            <div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ 
                transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow pointer-events-none"></div>
            
            {/* Rings */}
            <div className="absolute w-[300px] h-[300px] border border-borderLight rounded-full pointer-events-none"></div>
            <div className="absolute w-[450px] h-[450px] border border-borderLight border-dashed rounded-full opacity-50 pointer-events-none" style={{ transform: `rotate(${mousePos.x * 10}deg)` }}></div>
            
            {/* Central Node */}
            <div className="absolute z-30 flex flex-col items-center justify-center">
              <div className="text-[10px] font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 bg-card border border-borderLight rounded-full shadow-sm">
                IAM CONTROL
              </div>
              <div className="w-28 h-28 bg-card border border-accent rounded-full flex flex-col items-center justify-center shadow-lg relative group cursor-default">
                <div className="absolute inset-0 rounded-full border border-accent/30 animate-[ping_3s_ease-in-out_infinite]"></div>
                <Shield className="w-8 h-8 text-accent mb-2" />
                <span className="text-[10px] font-bold text-textPrimary tracking-wider">IDENTITYSHIELD</span>
              </div>
            </div>

            {/* Orbiting Nodes */}
            {nodes.map((node) => {
              const rad = node.angle * (Math.PI / 180);
              const x = Math.cos(rad) * node.radius;
              const y = Math.sin(rad) * node.radius;
              const isHovered = hoveredNode === node.id;
              
              return (
                <div key={node.id} className="absolute z-20" style={{ transform: `translate(${x}px, ${y}px)` }}>
                  
                  {/* Connection Line */}
                  <svg className="absolute top-1/2 left-1/2 -z-10 pointer-events-none" style={{ overflow: 'visible' }}>
                    <line 
                      x1="0" y1="0" 
                      x2={-x} y2={-y} 
                      stroke={isHovered ? "var(--color-accent)" : "var(--color-border-strong)"} 
                      strokeWidth={isHovered ? "2" : "1"}
                      strokeDasharray="4 4"
                      className="transition-colors duration-300"
                    />
                    
                    {/* Animated Signal */}
                    {(node.id === 'users' || node.id === 'apps') && (
                      <circle r="3" fill="var(--color-accent)" className="animate-signal">
                        <animateMotion dur="4s" repeatCount="indefinite" path={`M 0 0 L ${-x} ${-y}`} />
                      </circle>
                    )}
                  </svg>

                  {/* Node */}
                  <div 
                    className={`relative w-14 h-14 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 transform
                      ${isHovered 
                        ? 'bg-card border-accent shadow-md scale-110' 
                        : 'bg-bgPrimary border-borderStrong hover:border-textSecondary'
                      } border
                    `}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <node.icon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-accent' : 'text-textSecondary'}`} />
                    
                    {/* Label */}
                    <span className={`absolute -bottom-6 whitespace-nowrap text-[9px] font-bold tracking-widest transition-colors duration-300
                      ${isHovered ? 'text-textPrimary' : 'text-textSecondary'}
                    `}>
                      {node.label}
                    </span>

                    {/* Tooltip */}
                    <div className={`absolute top-full mt-8 whitespace-nowrap bg-card border border-borderLight text-textPrimary text-xs py-1.5 px-3 rounded-sm pointer-events-none transition-all duration-300 shadow-lg
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                    `}>
                      {node.tooltip}
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM HERO SIGNAL */}
      <div className="w-full border-t border-b border-borderLight bg-bgSecondary/80 py-3 mt-12 overflow-hidden relative z-10 hidden md:block">
        <div className="flex justify-center gap-8 text-[11px] font-bold text-textSecondary tracking-[0.2em] uppercase w-full">
          <span>IDENTITY GOVERNANCE</span>
          <span className="text-accent opacity-80">•</span>
          <span>PRIVILEGED ACCESS</span>
          <span className="text-accent opacity-80">•</span>
          <span>SINGLE SIGN-ON</span>
          <span className="text-accent opacity-80">•</span>
          <span>MULTI-FACTOR AUTH</span>
          <span className="text-accent opacity-80">•</span>
          <span>IDENTITY THREAT RESPONSE</span>
          <span className="text-accent opacity-80">•</span>
          <span>ZERO TRUST</span>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] font-bold text-textSecondary tracking-widest uppercase mb-2">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-8 bg-borderLight relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[fade-in-up_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
