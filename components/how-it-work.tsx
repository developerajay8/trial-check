// components/HowItWorks.tsx
"use client";
import React from 'react';
import { Mic, Brain, TrendingUp } from 'lucide-react';

interface HowItWorksProps {
  isDark: boolean;
}

const HowItWork: React.FC<HowItWorksProps> = ({ isDark }) => {
  const steps = [
    {
      icon: Mic,
      title: "Start a Conversation",
      description: "Choose your scenario and begin practicing with our AI-powered customer. Engage in realistic sales conversations anytime, anywhere.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "AI Analyzes Your Performance",
      description: "Our advanced AI listens and evaluates your pitch, objection handling, and communication skills in real-time with precision.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Get Instant Feedback",
      description: "Receive detailed insights and actionable recommendations to improve your technique and close more deals effectively.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className={`py-14 md:py-18 lg:py-22 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Simple Process
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How It Works
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Master your sales skills in three simple steps
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDark 
                    ? 'bg-slate-900/50 border border-slate-800 hover:border-slate-700' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                } transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Card Content */}
                <div className="relative p-6 sm:p-8 z-10">
                  {/* Step Number */}
                  <div className={`absolute top-6 right-6 text-6xl sm:text-7xl font-bold ${
                    isDark ? 'text-slate-800/50' : 'text-gray-100'
                  }`}>
                    0{index + 1}
                  </div>

                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-medium mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 md:mt-16">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105">
            Start Your Free Practice
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWork;