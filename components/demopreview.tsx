// components/DemoPreview.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { 
  Play,
  Pause,
  Volume2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Circle
} from 'lucide-react';

interface DemoPreviewProps {
  isDark: boolean;
}

const Demopreview: React.FC<DemoPreviewProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'screenshots'>('video');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [audioWaves, setAudioWaves] = useState<number[]>([]);

  // Audio wave animation
  useEffect(() => {
    if (activeTab === 'audio' && isPlaying) {
      const interval = setInterval(() => {
        setAudioWaves(Array.from({ length: 40 }, () => Math.random() * 100));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioWaves(Array.from({ length: 40 }, () => 20));
    }
  }, [activeTab, isPlaying]);

  const screenshots = [
    { id: 1, title: "Dashboard Overview", color: "from-cyan-500 to-blue-600" },
    { id: 2, title: "Call Analytics", color: "from-purple-500 to-pink-600" },
    { id: 3, title: "Performance Metrics", color: "from-green-500 to-emerald-600" },
    { id: 4, title: "AI Feedback", color: "from-orange-500 to-red-600" }
  ];

  const tabs = [
    { id: 'video' as const, label: 'Video Demo', icon: Play },
    { id: 'audio' as const, label: 'Audio Preview', icon: Volume2 },
    { id: 'screenshots' as const, label: 'Screenshots', icon: Maximize2 }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className={`py-14 md:py-18 lg:py-22 ${isDark ? 'bg-linear-to-b from-slate-900 to-slate-950' : 'bg-linear-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
            <Play className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              See It In Action
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Experience The Platform
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Watch how our AI-powered platform transforms your sales training
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : isDark
                    ? 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 border border-slate-700'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Preview Container */}
        <div className="max-w-5xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden ${
            isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-gray-200'
          } shadow-2xl`}>
            
            {/* Video Tab */}
            {activeTab === 'video' && (
              <div className="relative aspect-video bg-linear-to-br from-slate-800 to-slate-900">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full ${
                      isDark ? 'bg-slate-800' : 'bg-gray-100'
                    } flex items-center justify-center group hover:scale-110 transition-transform duration-300 cursor-pointer`}
                    onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? (
                        <Pause className="w-12 h-12 text-cyan-500" />
                      ) : (
                        <Play className="w-12 h-12 text-cyan-500 ml-1" />
                      )}
                    </div>
                    <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {isPlaying ? 'Playing Demo Video...' : 'Click to Play Demo'}
                    </p>
                  </div>
                </div>

                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-cyan-500/20"
                        style={{
                          animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                          animationDelay: `${(i % 10) * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Video Controls */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t ${
                  isDark ? 'from-slate-900/90 to-transparent' : 'from-white/90 to-transparent'
                }`}>
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                      {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                    </button>
                    <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                        style={{ width: isPlaying ? '45%' : '0%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">2:45</span>
                  </div>
                </div>
              </div>
            )}

            {/* Audio Tab */}
            {activeTab === 'audio' && (
              <div className="relative aspect-video bg-linear-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center p-8">
                <div className="w-full max-w-3xl">
                  {/* Play Button */}
                  <div className="text-center mb-12">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-20 h-20 mx-auto rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50"
                    >
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" />
                      ) : (
                        <Play className="w-10 h-10 text-white ml-1" />
                      )}
                    </button>
                    <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {isPlaying ? 'Playing Sample Conversation...' : 'Listen to AI Voice Sample'}
                    </p>
                  </div>

                  {/* Audio Wave Visualization */}
                  <div className="flex items-center justify-center gap-1 h-32">
                    {audioWaves.map((height, index) => (
                      <div
                        key={index}
                        className="w-1.5 rounded-full bg-linear-to-t from-purple-500 to-pink-500 transition-all duration-100"
                        style={{
                          height: `${height}%`,
                          opacity: isPlaying ? 0.4 + (height / 200) : 0.3
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Audio Progress */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>0:00</span>
                      <span>1:30</span>
                    </div>
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300"
                        style={{ width: isPlaying ? '60%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Screenshots Tab */}
            {activeTab === 'screenshots' && (
              <div className="relative aspect-video bg-linear-to-br from-slate-800 to-slate-900">
                {/* Screenshot Display */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className={`relative w-full h-full rounded-2xl bg-linear-to-br ${screenshots[currentSlide].color} flex items-center justify-center overflow-hidden`}>
                    {/* Placeholder Content */}
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Maximize2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-medium mb-2">{screenshots[currentSlide].title}</h3>
                      <p className="text-white/80">Screenshot {currentSlide + 1} of {screenshots.length}</p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${
                    isDark ? 'bg-slate-800/80 hover:bg-slate-700' : 'bg-white/80 hover:bg-white'
                  } backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg`}
                >
                  <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                </button>
                <button
                  onClick={nextSlide}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${
                    isDark ? 'bg-slate-800/80 hover:bg-slate-700' : 'bg-white/80 hover:bg-white'
                  } backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg`}
                >
                  <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-8 h-2 rounded-full bg-white'
                          : 'w-2 h-2 rounded-full bg-white/50 hover:bg-white/70'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Stats Below Preview */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Watch Time', value: '2.5K+ hrs' },
              { label: 'Active Users', value: '10K+' },
              { label: 'Success Rate', value: '94%' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl ${
                  isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-medium bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demopreview;