import React, { useState } from 'react';
import { ArrowRight, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    areaOfInterest: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interests = [
    'Identity Governance',
    'Privileged Access Management',
    'SSO & Authentication',
    'Identity Lifecycle',
    'Identity Threat Response',
    'Access Governance',
    'IAM Assessment',
    'Other'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.areaOfInterest) newErrors.areaOfInterest = 'Please select an area of interest';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate network request for prototype realism
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 800);
    }
  };

  const visualNodes = ['IDENTITY', 'ACCESS', 'PRIVILEGE', 'GOVERNANCE'];

  return (
    <section id="contact" className="py-32 bg-bgPrimary border-t border-borderLight relative overflow-hidden">
      
      {/* SECTION INTRO */}
      <div className="container-wide mb-24 animate-fade-in-up text-center md:text-left relative z-20">
        <p className="eyebrow mb-4 text-accent">START THE CONVERSATION</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="heading-section max-w-3xl text-textPrimary">
            YOUR IDENTITY ENVIRONMENT<br/>
            <span className="text-textSecondary">DESERVES A CLEARER APPROACH.</span>
          </h2>
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <p className="body-base text-sm mb-4 text-center md:text-left text-textSecondary">
              Tell us where your identity, access or privilege environment needs attention. We can start by understanding the current landscape, challenges and objectives.
            </p>
            <span className="text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong bg-card shadow-sm px-2 py-1 rounded-sm">IDENTITY • ACCESS • PRIVILEGE • GOVERNANCE</span>
          </div>
        </div>
      </div>

      <div className="container-wide mb-24 relative z-20">
         <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
            
            {/* LEFT: CTA STATEMENT & CONCEPTUAL VISUAL */}
            <div className="relative flex flex-col justify-between">
               
               <div className="mb-16">
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6 leading-tight">
                   LET'S UNDERSTAND<br/>
                   <span className="text-textSecondary">YOUR IAM LANDSCAPE.</span>
                 </h3>
                 <p className="text-sm md:text-base text-textSecondary leading-relaxed max-w-md">
                   Whether the challenge is fragmented identity infrastructure, privileged access, lifecycle management, authentication or identity governance, the first step is understanding the environment.
                 </p>
               </div>

               {/* CONCEPTUAL VISUAL */}
               <div className="bg-card border border-borderLight rounded-sm p-8 h-[350px] relative overflow-hidden flex items-center justify-center shadow-sm">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                  <div className="absolute top-4 left-4 text-[7px] font-bold text-textSecondary tracking-widest uppercase border border-borderStrong bg-bgSecondary px-2 py-1 rounded-sm z-10 shadow-sm">
                    CONCEPTUAL IAM CONTROL MODEL
                  </div>

                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                    <g style={{ transform: 'translate(50%, 50%)' }}>
                      {visualNodes.map((node, i) => {
                        const rad = (i * 90 - 135) * (Math.PI / 180);
                        const x = Math.cos(rad) * 100;
                        const y = Math.sin(rad) * 100;
                        return (
                          <g key={i}>
                            <line x1="0" y1="0" x2={x} y2={y} stroke="var(--color-border-strong)" strokeWidth="1" />
                            <circle r="1.5" fill="var(--color-accent)" className="animate-[signal-travel_3s_infinite_linear]" style={{ animationDelay: `${i * 0.75}s` }}>
                               <animateMotion dur="3s" repeatCount="indefinite" path={`M ${x} ${y} L 0 0`} />
                            </circle>
                          </g>
                        )
                      })}
                    </g>
                  </svg>

                  {/* Center Node */}
                  <div className="absolute z-20 flex flex-col items-center">
                     <div className="w-16 h-16 rounded-sm border border-accent bg-bgSecondary flex items-center justify-center relative shadow-sm">
                       <div className="absolute inset-0 border border-accent/20 animate-pulse rounded-sm"></div>
                       <Shield className="w-6 h-6 text-accent" />
                     </div>
                     <span className="text-[8px] font-bold text-textPrimary tracking-widest uppercase mt-3 px-2 py-1 bg-card border border-borderStrong rounded-sm shadow-sm">
                       IDENTITYSHIELD
                     </span>
                  </div>

                  {/* Outer Nodes */}
                  {visualNodes.map((node, i) => {
                    const rad = (i * 90 - 135) * (Math.PI / 180);
                    const x = Math.cos(rad) * 100;
                    const y = Math.sin(rad) * 100;
                    return (
                      <div 
                        key={i}
                        className="absolute z-10 flex flex-col items-center"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        <div className="w-2 h-2 rounded-full border border-accent bg-card mb-2 shadow-sm"></div>
                        <span className="text-[7px] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-sm border border-borderStrong bg-card text-textSecondary shadow-sm">
                          {node}
                        </span>
                      </div>
                    )
                  })}
               </div>

            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="bg-card border border-borderLight rounded-sm p-8 md:p-12 relative overflow-hidden shadow-sm">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
               
               {isSubmitted ? (
                 <div className="h-full min-h-[450px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                   <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                     <CheckCircle2 className="w-8 h-8 text-accent" />
                   </div>
                   <h3 className="text-2xl font-bold text-textPrimary mb-4">THANK YOU.</h3>
                   <p className="text-textSecondary text-sm mb-8 max-w-xs">
                     YOUR REQUEST HAS BEEN CAPTURED LOCALLY FOR THIS PROTOTYPE.
                   </p>
                   <span className="text-[8px] font-bold text-accent tracking-widest uppercase border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-sm">
                     CONTACT FORM — PROTOTYPE EXPERIENCE
                   </span>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10" noValidate aria-live="polite">
                   <div className="grid md:grid-cols-2 gap-6">
                     {/* Full Name */}
                     <div className="flex flex-col gap-2">
                       <label htmlFor="fullName" className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">
                         Full Name <span className="text-accent">*</span>
                       </label>
                       <input 
                         type="text" 
                         id="fullName"
                         name="fullName"
                         value={formData.fullName}
                         onChange={handleChange}
                         aria-invalid={errors.fullName ? "true" : "false"}
                         className={`bg-card border ${errors.fullName ? 'border-[#ff4444]' : 'border-borderStrong focus:border-accent'} rounded-sm px-4 py-3 text-sm text-textPrimary outline-none transition-colors focus:bg-bgSecondary`}
                       />
                       {errors.fullName && <span className="text-[10px] text-[#ff4444] flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1"/>{errors.fullName}</span>}
                     </div>

                     {/* Work Email */}
                     <div className="flex flex-col gap-2">
                       <label htmlFor="workEmail" className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">
                         Work Email <span className="text-accent">*</span>
                       </label>
                       <input 
                         type="email" 
                         id="workEmail"
                         name="workEmail"
                         value={formData.workEmail}
                         onChange={handleChange}
                         aria-invalid={errors.workEmail ? "true" : "false"}
                         className={`bg-card border ${errors.workEmail ? 'border-[#ff4444]' : 'border-borderStrong focus:border-accent'} rounded-sm px-4 py-3 text-sm text-textPrimary outline-none transition-colors focus:bg-bgSecondary`}
                       />
                       {errors.workEmail && <span className="text-[10px] text-[#ff4444] flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1"/>{errors.workEmail}</span>}
                     </div>
                   </div>

                   {/* Company */}
                   <div className="flex flex-col gap-2">
                     <label htmlFor="company" className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">
                       Company <span className="text-accent">*</span>
                     </label>
                     <input 
                       type="text" 
                       id="company"
                       name="company"
                       value={formData.company}
                       onChange={handleChange}
                       aria-invalid={errors.company ? "true" : "false"}
                       className={`bg-card border ${errors.company ? 'border-[#ff4444]' : 'border-borderStrong focus:border-accent'} rounded-sm px-4 py-3 text-sm text-textPrimary outline-none transition-colors focus:bg-bgSecondary`}
                     />
                     {errors.company && <span className="text-[10px] text-[#ff4444] flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1"/>{errors.company}</span>}
                   </div>

                   {/* Area of Interest */}
                   <div className="flex flex-col gap-2">
                     <label htmlFor="areaOfInterest" className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">
                       Area of Interest <span className="text-accent">*</span>
                     </label>
                     <select 
                       id="areaOfInterest"
                       name="areaOfInterest"
                       value={formData.areaOfInterest}
                       onChange={handleChange}
                       aria-invalid={errors.areaOfInterest ? "true" : "false"}
                       className={`bg-card border ${errors.areaOfInterest ? 'border-[#ff4444]' : 'border-borderStrong focus:border-accent'} rounded-sm px-4 py-3 text-sm text-textPrimary outline-none transition-colors focus:bg-bgSecondary appearance-none cursor-pointer`}
                     >
                       <option value="" disabled>Select an area</option>
                       {interests.map(interest => (
                         <option key={interest} value={interest}>{interest}</option>
                       ))}
                     </select>
                     {errors.areaOfInterest && <span className="text-[10px] text-[#ff4444] flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1"/>{errors.areaOfInterest}</span>}
                   </div>

                   {/* Message */}
                   <div className="flex flex-col gap-2 mb-4">
                     <label htmlFor="message" className="text-[9px] font-bold text-textSecondary tracking-widest uppercase">
                       Message (Optional)
                     </label>
                     <textarea 
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       rows="3"
                       className="bg-card border border-borderStrong focus:border-accent rounded-sm px-4 py-3 text-sm text-textPrimary outline-none transition-colors focus:bg-bgSecondary resize-none"
                     ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="btn-primary group rounded-sm shadow-sm hover:shadow-md w-full py-4 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? 'PROCESSING...' : (
                       <span className="flex items-center justify-center">
                         TALK TO AN IAM EXPERT <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                       </span>
                     )}
                   </button>
                 </form>
               )}
            </div>

         </div>
      </div>

      {/* TRUST STRIP */}
      <div className="container-wide mb-16 relative z-10">
         <div className="border-t border-b border-borderLight py-8 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
               {['DISCOVER', 'UNDERSTAND', 'DESIGN', 'CONTROL', 'EVOLVE'].map((label, i) => (
                 <div key={i} className="flex items-center gap-8">
                   <span className="text-[10px] font-bold tracking-widest uppercase text-textSecondary">{label}</span>
                   {i < 4 && <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-borderStrong"></div>}
                 </div>
               ))}
            </div>
            <p className="text-[10px] text-textSecondary tracking-widest uppercase text-center max-w-lg">
              A structured IAM conversation starts with understanding the environment.
            </p>
         </div>
      </div>

      {/* BOTTOM MESSAGE */}
      <div className="container-wide pt-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-textPrimary mb-4 leading-tight">
            IDENTITY COMPLEXITY IS A BUSINESS PROBLEM,<br/>
            <span className="text-textSecondary">NOT JUST A TECHNOLOGY PROBLEM.</span>
          </h2>
          <p className="body-base text-sm text-textSecondary">
            A strong IAM strategy connects identity, access, privilege, governance and operational requirements.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CTA;
