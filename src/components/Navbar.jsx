import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC to close menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navigation = [
    {
      name: 'Solutions',
      items: [
        'Identity Governance',
        'Privileged Access Management',
        'Single Sign-On',
        'Multi-Factor Authentication',
        'Identity Threat Detection',
        'Identity Lifecycle Management'
      ]
    },
    {
      name: 'Services',
      items: [
        'IAM Consulting',
        'IAM Implementation',
        'IAM Integration',
        'IAM Assessment',
        'Managed IAM'
      ]
    },
    {
      name: 'Industries',
      items: [
        'Banking',
        'Healthcare',
        'Technology',
        'Manufacturing',
        'Retail',
        'Education',
        'Government'
      ]
    },
    {
      name: 'Resources',
      items: [
        'Insights',
        'Case Studies',
        'IAM Guides',
        'FAQs'
      ]
    },
    {
      name: 'About',
      items: []
    }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-bgPrimary/90 backdrop-blur-md border-b border-borderLight shadow-sm' 
            : 'bg-transparent py-6'
        } ${!isScrolled && mobileMenuOpen ? 'bg-bgPrimary' : ''}`}
      >
        <div className={`container-wide flex justify-between items-center ${isScrolled ? 'py-4' : ''}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-sm bg-card border border-borderLight flex items-center justify-center group-hover:border-accent transition-colors shadow-sm">
              <Shield className="w-5 h-5 text-textPrimary group-hover:text-accent transition-colors" />
            </div>
            <span className="text-xl font-bold tracking-tight text-textPrimary">
              IdentityShield
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((nav) => (
              <div 
                key={nav.name}
                className="relative group"
                onMouseEnter={() => nav.items.length > 0 && setActiveDropdown(nav.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors py-2">
                  {nav.name}
                  {nav.items.length > 0 && (
                    <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all" />
                  )}
                </button>
                
                {/* Dropdown */}
                {nav.items.length > 0 && activeDropdown === nav.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-borderLight shadow-lg p-2 rounded-sm animate-fade-in-up">
                    <div className="absolute top-0 left-4 -mt-[1px] w-8 h-[1px] bg-accent"></div>
                    {nav.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="block px-4 py-3 text-sm text-textSecondary hover:text-textPrimary hover:bg-bgSecondary transition-colors rounded-sm"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">
              Contact Us
            </a>
            <a href="#" className="btn-primary group">
              Talk to an Expert
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-textSecondary hover:text-accent transition-colors border border-borderLight hover:border-accent/50 rounded-sm bg-card shadow-sm"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Right Icons (Theme Toggle + Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-textSecondary hover:text-accent transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-textPrimary p-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bgPrimary lg:hidden pt-24 overflow-y-auto pb-12 h-[100dvh]">
          <div className="container-wide flex flex-col gap-6 h-full">
            <div className="flex-grow flex flex-col gap-6">
              {navigation.map((nav) => (
                <div key={nav.name} className="border-b border-borderLight pb-4">
                  {nav.items.length > 0 ? (
                    <div className="space-y-4">
                      <div className="text-lg font-bold text-textPrimary">{nav.name}</div>
                      <div className="pl-4 flex flex-col gap-3 border-l border-borderLight">
                        {nav.items.map((item, idx) => (
                          <a 
                            key={idx} 
                            href="#" 
                            className="text-textSecondary hover:text-accent transition-colors text-sm py-2 block min-h-[44px]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href="#" 
                      className="text-lg font-bold text-textPrimary hover:text-accent transition-colors block py-2 min-h-[44px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {nav.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 mt-6 pb-6">
              <a 
                href="#" 
                className="btn-secondary w-full min-h-[44px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="btn-primary w-full group min-h-[44px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
