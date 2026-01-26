// components/SupportEmail.tsx
"use client";
import React from 'react';
import { Mail, Clock, Globe, Headphones } from 'lucide-react';

interface SupportEmailProps {
  isDark: boolean;
}

const SupportEmail: React.FC<SupportEmailProps> = ({ isDark }) => {
  const supportChannels = [
    {
      icon: Mail,
      title: "General Support",
      email: "support@uptraino.ai",
      description: "For general inquiries and questions",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      email: "tech@uptraino.ai",
      description: "For technical issues and bugs",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Sales & Partnerships",
      email: "sales@uptraino.ai",
      description: "For business inquiries",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              24/7 Support Available
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Direct Support Channels
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Reach out to our dedicated support team directly via email
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDark 
                    ? 'bg-slate-900/50 border border-slate-800 hover:border-slate-700' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                } p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${channel.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {channel.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {channel.description}
                  </p>

                  {/* Email */}
                  <a
                    href={`mailto:${channel.email}`}
                    className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${channel.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    {channel.email}
                    <Mail className="w-4 h-4" style={{ color: 'currentColor', WebkitTextFillColor: 'initial' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Response Time Info */}
        <div className={`max-w-4xl mx-auto rounded-2xl ${
          isDark ? 'bg-slate-900/30 border border-slate-800' : 'bg-white border border-gray-200'
        } p-8`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className={`text-3xl font-medium mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent`}>
                &lt; 2 hrs
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Average Response Time
              </p>
            </div>
            <div>
              <div className={`text-3xl font-medium mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                24/7
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Support Availability
              </p>
            </div>
            <div>
              <div className={`text-3xl font-medium mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}>
                98%
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportEmail;