"use client";
import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Users, TrendingUp, Star } from 'lucide-react';

interface FinalCTAProps {
  isDark?: boolean;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ isDark = true }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
    { icon: Zap, value: "24/7", label: "Support" }
  ];

  return (
    <section className={`py-14 md:py-18 lg:py-22 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className={`relative rounded-3xl overflow-hidden ${
          isDark ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/80' : 'bg-gradient-to-br from-white/80 to-gray-50/80'
        } backdrop-blur-xl border ${isDark ? 'border-slate-700/50' : 'border-gray-200/50'} shadow-2xl`}>
          
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
          
          {/* Content Container */}
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge - Same as Pricing */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Limited Time Offer
                </span>
              </div>

              {/* Heading - Same size as Pricing h2 */}
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to Transform Your
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Sales Performance?
                </span>
              </h2>

              {/* Description - Same size as Pricing p */}
              <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Join thousands of sales professionals who are crushing their targets with AI-powered practice sessions
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                {/* Primary Button - Same styling as Pricing CTA */}
                <button
                  onMouseEnter={() => setHoveredButton('primary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredButton === 'primary' ? 'translate-x-1' : ''
                  }`} />
                </button>

                {/* Secondary Button */}
                <button
                  onMouseEnter={() => setHoveredButton('secondary')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`px-8 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    isDark 
                      ? 'bg-slate-800 text-white hover:bg-slate-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Watch Demo
                  <Zap className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredButton === 'secondary' ? 'rotate-12' : ''
                  }`} />
                </button>
              </div>

              {/* Trust Indicators - Same text-sm as Pricing */}
              <div className={`text-sm mb-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span>No credit card required</span>
                  <span>•</span>
                  <span>14-day free trial</span>
                  <span>•</span>
                  <span>Cancel anytime</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                        isDark ? 'hover:bg-slate-800/50' : 'hover:bg-gray-100/50'
                      }`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {stat.value}
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        </div>

        {/* Bottom Note - Same as Pricing */}
        {/* <div className="text-center mt-12">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            🔒 Enterprise-grade security • SOC 2 certified • GDPR compliant
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default FinalCTA;