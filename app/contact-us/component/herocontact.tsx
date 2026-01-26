
// components/ContactHero.tsx
"use client";
import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

interface ContactHeroProps {
  isDark: boolean;
}

const Herocontact: React.FC<ContactHeroProps> = ({ isDark }) => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@uptraino.ai",
      color: "cyan"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "San Francisco, CA",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; gradient: string }> = {
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-500', gradient: 'from-cyan-500 to-blue-500' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', gradient: 'from-purple-500 to-pink-500' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500', gradient: 'from-green-500 to-emerald-500' }
    };
    return colors[color];
  };

  return (
    <section className={`pt-24 md:pt-32 pb-16 md:pb-24 ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              We're Here to Help
            </span>
          </div>

          {/* Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colorClasses = getColorClasses(method.color);

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDark 
                    ? 'bg-slate-900/50 border border-slate-800 hover:border-slate-700' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                } p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative text-center">
                  {/* Icon */}
                  <div className="mb-4 inline-flex">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {method.title}
                  </h3>

                  {/* Value */}
                  <p className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {method.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Herocontact;