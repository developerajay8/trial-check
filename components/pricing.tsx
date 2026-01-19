// components/Pricing.tsx
"use client";
import React, { useState } from 'react';
import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';

interface PricingProps {
  isDark: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isDark }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for beginners",
      monthlyPrice: 29,
      yearlyPrice: 290,
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "50 AI practice sessions/month",
        "Basic performance analytics",
        "3 customer personas",
        "Email support",
        "Mobile app access",
        "Basic performance analytics",
        "3 customer personas"
      ],
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Most popular choice",
      monthlyPrice: 79,
      yearlyPrice: 790,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Unlimited AI practice sessions",
        "Advanced analytics & insights",
        "10+ customer personas",
        "Priority support",
        "Mobile & desktop access",
        "Custom scenarios",
        "Progress tracking",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large teams",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      gradient: "from-orange-500 to-red-500",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Custom AI training",
        "Dedicated account manager",
        "API access",
        "SSO & advanced security",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <section className={`py-14 md:py-18 lg:py-22 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4">
            <Crown className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Simple Pricing
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Plan
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Select the perfect plan for your sales training needs
          </p>

          {/* Billing Toggle */}
          <div className={`inline-flex items-center gap-3 p-1.5 rounded-xl ${
            isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-gray-200'
          }`}>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-500 rounded text-xs">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredCard === index;
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-sm font-medium shadow-lg`}>
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Glow Effect */}
                {plan.popular && (
                  <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                )}

                {/* Card */}
                <div
                  className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                    plan.popular 
                      ? `${isDark ? 'bg-slate-900 border-2' : 'bg-white border-2'} border-purple-500/50`
                      : isDark 
                        ? 'bg-slate-900/50 border border-slate-800 hover:border-slate-700' 
                        : 'bg-white border border-gray-200 hover:border-gray-300'
                  } ${plan.popular ? 'shadow-2xl shadow-purple-500/20' : 'shadow-xl'}`}
                  style={{
                    transform: isHovered ? 'translateY(-8px)' : plan.popular ? 'translateY(0)' : 'translateY(0)',
                  }}
                >
                  {/* Content */}
                  <div className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg ${
                        isHovered ? 'scale-110' : 'scale-100'
                      } transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Plan Name & Description */}
                    <h3 className={`text-2xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-5xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          ${price}
                        </span>
                        <span className={`text-lg ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          ${(price / 12).toFixed(0)}/month billed annually
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105`
                        : isDark
                          ? 'bg-slate-800 text-white hover:bg-slate-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      Get Started
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`} />
                    </button>

                    {/* Features */}
                    <div className="mt-8 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Gradient */}
                  <div className={`h-1 bg-gradient-to-r ${plan.gradient}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        {/* <div className="text-center mt-12">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;