
// components/PricingHero.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Check, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

interface PricingHeroProps {
  isDark: boolean;
}

const Heropricing: React.FC<PricingHeroProps> = ({ isDark }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    "No hidden fees",
    "Cancel anytime",
    "14-day free trial",
    "Money-back guarantee"
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: TrendingUp, value: "94%", label: "Success Rate" },
    { icon: Zap, value: "2.5M+", label: "Practice Sessions" }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className={`relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-white via-gray-50 to-white'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm flex items-center justify-center`}>
            <Sparkles className="w-6 h-6 text-cyan-500" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm flex items-center justify-center`}>
            <Zap className="w-6 h-6 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${
            isDark 
              ? 'bg-slate-800/50 border border-slate-700' 
              : 'bg-white border border-gray-200'
          } backdrop-blur-sm shadow-lg`}>
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping absolute"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Special Offer: Save 17% on Annual Plans
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-10">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Choose the perfect plan to accelerate your sales training journey
          </p>
        </div>

        {/* Rotating Features */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-500 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110 shadow-lg shadow-cyan-500/30'
                    : isDark
                      ? 'bg-slate-800/30 text-gray-400'
                      : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Check className={`w-4 h-4 ${activeFeature === index ? 'scale-110' : ''} transition-transform duration-300`} />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDark 
                    ? 'bg-slate-900/50 border border-slate-800' 
                    : 'bg-white border border-gray-200'
                } p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative text-center">
                  {/* Icon */}
                  <div className="inline-flex mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-3xl font-medium mb-1 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Trusted by sales professionals worldwide
          </p>
          <div className="flex items-center justify-center gap-2">
            {/* 5 Star Rating */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className={`ml-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              4.9/5 from 2,500+ reviews
            </span>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Heropricing;