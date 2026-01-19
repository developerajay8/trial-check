"use client";
import { useState } from "react";
import { Play, Sparkles } from "lucide-react";

interface HeroSectionProps {
  isDark: boolean;
}
const Herosection: React.FC<HeroSectionProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Sales Professionals');
  const categories: string[] = ['Affiliate Marketers', 'Freelancers', 'Network Marketers', 'Sales Professionals'];
    return (
        <section className={`min-h-screen flex items-center ${isDark ? 'bg-linear-to-b from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'} pt-16 md:pt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'} shadow-sm`}>
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              AI-Powered Sales Training
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Master Your Sales
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6">
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Conversation with </span>
            <span className="text-cyan-500">AI</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Practice unlimited sales calls with AI customers. Get instant feedback. Close more deals.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors shadow-lg shadow-cyan-500/20">
            Start Practicing Free
          </button>
          <button className={`w-full sm:w-auto px-8 py-3 rounded-lg border ${isDark ? 'border-slate-700 text-gray-300 hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors flex items-center justify-center gap-2`}>
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-cyan-500 text-white'
                  : isDark
                  ? 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Practice Session Card */}
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-2xl ${isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-gray-200'} shadow-2xl p-8 sm:p-12`}>
            <div className="flex flex-col items-center">
              {/* Waveform Animation */}
              <div className="mb-6 flex items-center gap-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500"></div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 ml-3">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'}`}
                      style={{
                        height: `${Math.random() * 40 + 10}px`,
                        opacity: 0.3 + Math.random() * 0.7,
                        animation: `pulse ${0.5 + Math.random()}s ease-in-out infinite`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Live AI Practice Session
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }
      `}</style>
    </section>
    );
}

export default Herosection;
