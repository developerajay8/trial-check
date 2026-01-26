"use client";
import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Sparkles, 
  Award,
  TrendingUp,
  Heart,
  Zap,
  Globe
} from 'lucide-react';

interface AboutHeroProps {
  isDark?: boolean;
}

const AboutHero: React.FC<AboutHeroProps> = ({ isDark = true }) => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users", gradient: "from-cyan-500 to-blue-500" },
    { icon: Globe, value: "120+", label: "Countries", gradient: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "300%", label: "Growth Rate", gradient: "from-orange-500 to-red-500" },
    { icon: Award, value: "4.9/5", label: "Customer Rating", gradient: "from-green-500 to-emerald-500" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Empowering sales teams to reach their full potential"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your success is our top priority"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with AI technology"
    }
  ];

  return (
    <section className={`relative py-14 md:py-18 lg:py-22 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-10'}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px),
                             linear-gradient(90deg, ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              About SalesAI
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Transforming Sales
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Through AI Innovation
            </span>
          </h1>

          {/* Description */}
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We're on a mission to revolutionize how sales professionals train and excel. 
            Founded in 2020, we've helped thousands of teams achieve unprecedented success 
            through intelligent AI-powered practice sessions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Join Our Team
            </button>
            <button className={`px-8 py-3.5 rounded-xl font-medium transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800 text-white hover:bg-slate-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}>
              Our Story
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isHovered = hoveredStat === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isDark ? 'bg-slate-900/50 hover:bg-slate-900' : 'bg-gray-50 hover:bg-gray-100'
                  } border ${isDark ? 'border-slate-800' : 'border-gray-200'} ${
                    isHovered ? 'scale-105 shadow-xl' : ''
                  }`}
                >
                  {/* Glow Effect on Hover */}
                  {isHovered && (
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-30`}></div>
                  )}
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center transition-transform duration-300 ${
                      isHovered ? 'scale-110 rotate-6' : ''
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Value */}
                    <div className={`text-3xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-900/50 border border-slate-800 hover:border-slate-700' 
                    : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
                } shadow-xl group`}
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Team Image Section */}
        <div className="mt-16">
          <div className={`relative rounded-3xl overflow-hidden ${
            isDark ? 'bg-slate-900' : 'bg-gray-100'
          } border ${isDark ? 'border-slate-800' : 'border-gray-200'} shadow-2xl`}>
            {/* Placeholder for team image */}
            <div className="aspect-video w-full flex items-center justify-center">
              <div className={`text-center p-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Team Photo / Office Image</p>
                <p className="text-sm mt-2">Replace this with your actual team image</p>
              </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;