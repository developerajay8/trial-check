// components/PerfectFor.tsx
"use client";
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Briefcase, 
  Users, 
  Target,
  ArrowRight
} from 'lucide-react';

interface PerfectForProps {
  isDark: boolean;
}

const Perfectfor: React.FC<PerfectForProps> = ({ isDark }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    {
      icon: TrendingUp,
      title: "Affiliate Marketers",
      description: "Perfect your product pitches and conversion strategies",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      borderGlow: "shadow-cyan-500/50"
    },
    {
      icon: Briefcase,
      title: "Freelancers",
      description: "Master client negotiations and value communication",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      borderGlow: "shadow-purple-500/50"
    },
    {
      icon: Users,
      title: "Network Marketers",
      description: "Practice recruitment calls and team building",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      borderGlow: "shadow-green-500/50"
    },
    {
      icon: Target,
      title: "Sales Professionals",
      description: "Refine closing techniques and objection handling",
      color: "orange",
      gradient: "from-orange-500 to-yellow-500",
      borderGlow: "shadow-orange-500/50"
    }
  ];

  return (
    <section className={`py-14 md:py-18 lg:py-22 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Perfect For
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Designed for sales professionals at every level
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Animated Border Container */}
                <div className={`absolute -inset-0.5 bg-linear-to-b ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 ${isHovered ? category.borderGlow : ''}`}></div>
                
                {/* Card */}
                <div
                  className={`relative rounded-2xl overflow-hidden ${
                    isDark 
                      ? 'bg-slate-900 border border-slate-800' 
                      : 'bg-gray-50 border border-gray-200'
                  } transition-all duration-500`}
                  style={{
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Top Gradient Bar */}
                  <div 
                    className={`h-1 bg-linear-to-r ${category.gradient}`}
                  ></div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    {/* Icon with Glow */}
                    <div className="mb-6 relative">
                      <div className={`w-16 h-16 rounded-2xl ${
                        isDark ? 'bg-slate-800' : 'bg-white'
                      } flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <Icon 
                          className={`w-8 h-8 transition-all duration-500`}
                          style={{
                            filter: isHovered ? `drop-shadow(0 0 8px ${category.color === 'cyan' ? '#06b6d4' : category.color === 'purple' ? '#a855f7' : category.color === 'green' ? '#10b981' : '#f97316'})` : 'none'
                          }}
                        />
                      </div>
                      {/* Icon Glow Background */}
                      <div 
                        className={`absolute inset-0 w-16 h-16 rounded-2xl bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-medium mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>

                    {/* Learn More Link */}
                    {/* <div className="flex items-center gap-2 group/link">
                      <span 
                        className={`text-sm font-medium bg-linear-to-r ${category.gradient} bg-clip-text transition-all duration-300`}
                        style={{
                          color: isHovered ? 'transparent' : isDark ? '#9ca3af' : '#6b7280'
                        }}
                      >
                        Learn More
                      </span>
                      <ArrowRight 
                        className={`w-4 h-4 transition-all duration-500`}
                        style={{
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          opacity: isHovered ? 1 : 0.5
                        }}
                      />
                    </div> */}
                  </div>

                  {/* Bottom Gradient Overlay on Hover */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Perfectfor;