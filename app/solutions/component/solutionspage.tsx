"use client";
import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Target,
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle,
  Users,
  BarChart,
  Award
} from 'lucide-react';

interface SolutionsPageProps {
  isDark?: boolean;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ isDark = true }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: Phone,
      title: "Cold Calling",
      description: "Master the art of cold calling with AI-powered simulations that mirror real-world scenarios",
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Realistic conversation scenarios",
        "Real-time feedback & scoring",
        "Industry-specific templates",
        "Tone & pitch analysis"
      ],
      stats: { value: "85%", label: "Success Rate" }
    },
    {
      icon: MessageSquare,
      title: "Objection Handling",
      description: "Learn to overcome objections confidently with personalized AI training sessions",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Common objection library",
        "Response strategies",
        "Confidence building",
        "Pattern recognition"
      ],
      stats: { value: "92%", label: "Conversion Rate" }
    },
    {
      icon: Target,
      title: "Closing Practice",
      description: "Perfect your closing techniques with advanced AI scenarios and expert guidance",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Multiple closing techniques",
        "Deal size optimization",
        "Negotiation tactics",
        "Success tracking"
      ],
      stats: { value: "3x", label: "Faster Closes" }
    }
  ];

  const benefits = [
    { icon: Zap, text: "Practice anytime, anywhere" },
    { icon: TrendingUp, text: "Track your progress in real-time" },
    { icon: Shield, text: "Safe environment to make mistakes" },
    // { icon: Award, text: "Proven methodology" }
  ];

  return (
    <div className={isDark ? 'bg-slate-950' : 'bg-white'}>
      {/* HERO SECTION */}
      <section className={`relative py-16 md:py-24 lg:py-32 overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
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
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                AI-Powered Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Sales Training Solutions
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Built for Modern Teams
              </span>
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Transform your sales team with comprehensive AI-powered training solutions 
              designed to improve performance, boost confidence, and close more deals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className={`px-8 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800 text-white hover:bg-slate-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Watch Demo
              </button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION CARDS SECTION */}
      <section className={`py-10 md:py-14 lg:pt-5 lg:pb-22 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
              <Target className="w-4 h-4 text-cyan-500" />
              <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                Our Solutions
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Choose Your Training Path
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Select the solution that matches your team's needs and start improving today
            </p>
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  {/* Card */}
                  <div
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                      isDark 
                        ? 'bg-slate-900/50 border border-slate-800 hover:border-slate-700' 
                        : 'bg-white border border-gray-200 hover:border-gray-300'
                    } shadow-xl hover:shadow-2xl`}
                    style={{
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    }}
                  >
                    {/* Content */}
                    <div className="p-8">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg ${
                          isHovered ? 'scale-110' : 'scale-100'
                        } transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className={`text-2xl font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {solution.title}
                      </h3>
                      <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {solution.description}
                      </p>

                      {/* Stats Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                        isDark ? 'bg-slate-800' : 'bg-gray-100'
                      }`}>
                        <BarChart className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {solution.stats.value}
                        </span>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {solution.stats.label}
                        </span>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center mt-0.5`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        isDark
                          ? 'bg-slate-800 text-white hover:bg-slate-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}>
                        Learn More
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        }`} />
                      </button>
                    </div>

                    {/* Bottom Gradient */}
                    <div className={`h-1 bg-gradient-to-r ${solution.gradient}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-12">
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Need a custom solution? We've got you covered.
            </p>
            <button className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contact Sales Team
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;