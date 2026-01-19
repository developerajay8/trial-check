"use client";
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  MapPin,
  Phone,
  Send,
  Heart,
  Zap
} from 'lucide-react';

interface FooterProps {
  isDark?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark = true }) => {
  const [email, setEmail] = useState('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "AI Training", href: "#training" },
        { name: "Analytics", href: "#analytics" },
        { name: "Integrations", href: "#integrations" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Press Kit", href: "#press" },
        { name: "Contact", href: "#contact" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "API Reference", href: "#api" },
        { name: "Status", href: "#status" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" },
        { name: "Security", href: "#security" }
      ]
    }
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", gradient: "from-blue-400 to-blue-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", gradient: "from-blue-600 to-blue-800" },
    { icon: Github, href: "#", label: "GitHub", gradient: "from-gray-600 to-gray-800" },
    { icon: Instagram, href: "#", label: "Instagram", gradient: "from-pink-500 to-purple-600" }
  ];

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <footer className={`relative ${isDark ? 'bg-slate-950' : 'bg-white'} border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section - Takes up more space */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  SalesAI
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 max-w-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Transform your sales team with AI-powered practice sessions. Master every conversation, close more deals, and achieve peak performance.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Subscribe to our newsletter
                </h3>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                      } border focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    className="px-4 py-2.5 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      onMouseEnter={() => setHoveredLink(social.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`w-10 h-10 rounded-lg ${
                        isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-gray-100 hover:bg-gray-200'
                      } flex items-center justify-center transition-all duration-300 ${
                        hoveredLink === social.label ? 'scale-110 shadow-lg' : ''
                      } group`}
                    >
                      <Icon className={`w-5 h-5 ${
                        isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                      } transition-colors`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key}>
                  <h3 className={`text-sm font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className={`text-sm transition-colors duration-200 inline-flex items-center gap-1 group ${
                            isDark 
                              ? 'text-gray-400 hover:text-cyan-400' 
                              : 'text-gray-600 hover:text-cyan-600'
                          }`}
                        >
                          {link.name}
                          <ArrowRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                            hoveredLink === link.name ? 'translate-x-1' : ''
                          }`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-6 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <p className="flex items-center gap-1">
                © 2026 SalesAI. Made with 
                <Heart className="w-4 h-4 text-red-500 inline-block animate-pulse" /> 
                in India
              </p>
            </div>

            {/* Contact Info */}
            <div className={`flex items-center gap-6 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <a href="mailto:hello@salesai.com" className="flex items-center gap-2 hover:text-cyan-500 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">hello@salesai.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-cyan-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 (234) 567-890</span>
              </a>
            </div>

            {/* Language/Region Selector */}
            <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <button className="flex items-center gap-2 hover:text-cyan-500 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>English (US)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;