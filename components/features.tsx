// components/Features.tsx
"use client";
import React, { useState } from 'react';
import { 
  Mic, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Repeat,
  Lightbulb
} from 'lucide-react';

interface FeaturesProps {
  isDark: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isDark }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Mic,
      title: "Real-time Voice Conversations",
      description: "Practice with natural AI voice interactions",
      color: "cyan"
    },
    {
      icon: BarChart3,
      title: "Detailed Call Analytics",
      description: "Get comprehensive performance metrics",
      color: "purple"
    },
    {
      icon: Users,
      title: "Multiple Customer Personas",
      description: "Train with different personality types",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Monitor improvement over time",
      color: "green"
    },
    {
      icon: Repeat,
      title: "Unlimited Practice Sessions",
      description: "Practice as much as you need",
      color: "orange"
    },
    {
      icon: Lightbulb,
      title: "Personalized Suggestions",
      description: "AI-powered improvement recommendations",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; gradient: string; glow: string; border: string }> = {
      cyan: { icon: 'text-cyan-500', gradient: 'from-cyan-500/10 to-transparent', glow: 'bg-cyan-500/20', border: 'bg-cyan-500' },
      purple: { icon: 'text-purple-500', gradient: 'from-purple-500/10 to-transparent', glow: 'bg-purple-500/20', border: 'bg-purple-500' },
      blue: { icon: 'text-blue-500', gradient: 'from-blue-500/10 to-transparent', glow: 'bg-blue-500/20', border: 'bg-blue-500' },
      green: { icon: 'text-green-500', gradient: 'from-green-500/10 to-transparent', glow: 'bg-green-500/20', border: 'bg-green-500' },
      orange: { icon: 'text-orange-500', gradient: 'from-orange-500/10 to-transparent', glow: 'bg-orange-500/20', border: 'bg-orange-500' },
      pink: { icon: 'text-pink-500', gradient: 'from-pink-500/10 to-transparent', glow: 'bg-pink-500/20', border: 'bg-pink-500' }
    };
    return colors[color];
  };

  return (
    <section className={`py-14 md:py-18 lg:py-22 ${isDark ? 'bg-linear-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Everything You Need
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Powerful Features
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to become a sales expert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = getColorClasses(feature.color);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDark 
                    ? 'bg-slate-900/30 border border-slate-800/50 hover:border-slate-700/50' 
                    : 'bg-white/50 border border-gray-200/50 hover:border-gray-300/50'
                } backdrop-blur-sm transition-all duration-500 hover:shadow-xl`}
                style={{
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-linear-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Icon Container */}
                  <div className="mb-5 relative">
                    <div className={`w-12 h-12 rounded-xl ${
                      isDark ? 'bg-slate-800/50' : 'bg-gray-100/50'
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>
                    {/* Glow effect */}
                    <div 
                      className={`absolute inset-0 w-12 h-12 rounded-xl ${colorClasses.glow} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Border Animation - Ab sabhi cards me */}
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 ${colorClasses.border} transition-all duration-500`}
                  style={{
                    width: isHovered ? '100%' : '0%'
                  }}
                ></div>

                {/* Corner Accent */}
                <div 
                  className={`absolute top-0 right-0 w-20 h-20 ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        {/* <div className="text-center mt-12 md:mt-16">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} mb-4`}>
            Join thousands of sales professionals improving their skills daily
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105">
            Explore All Features
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Features;