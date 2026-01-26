// components/FAQs.tsx
"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQsProps {
  isDark: boolean;
}

const FAQs: React.FC<FAQsProps> = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI practice system work?",
      answer: "Our AI-powered system simulates realistic sales conversations with intelligent customer personas. It listens to your pitch, responds naturally, and provides instant feedback on your performance. The AI analyzes your tone, objection handling, and closing techniques to help you improve."
    },
    {
      question: "Can I practice unlimited sessions?",
      answer: "Yes! With our Professional and Enterprise plans, you get unlimited AI practice sessions. The Starter plan includes 50 sessions per month, which is perfect for beginners. You can practice as much as you need to master your sales skills."
    },
    {
      question: "What customer personas are available?",
      answer: "We offer a diverse range of customer personas including skeptical buyers, budget-conscious customers, decision-makers, technical evaluators, and more. Each persona has unique characteristics, objections, and communication styles to prepare you for real-world scenarios."
    },
    {
      question: "How accurate is the AI feedback?",
      answer: "Our AI is trained on thousands of successful sales conversations and continuously learns from interactions. It provides detailed analytics on your performance including talk-to-listen ratio, objection handling, closing effectiveness, and emotional intelligence. The feedback is highly accurate and actionable."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available for both iOS and Android devices. You can practice on-the-go, access your performance analytics, and track your progress from anywhere. All plans include mobile access."
    },
    {
      question: "Can I use this for team training?",
      answer: "Absolutely! Our Professional and Enterprise plans include team collaboration features. You can track team performance, share best practices, create custom scenarios for your products/services, and monitor individual progress. Enterprise plans also include dedicated support and custom integrations."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 14-day free trial with no credit card required. If you're not completely satisfied after purchasing, we provide a 30-day money-back guarantee. Your success is our priority, and we're confident you'll see improvements in your sales skills."
    },
    {
      question: "Do you provide onboarding and training?",
      answer: "Yes! All plans include comprehensive onboarding resources including video tutorials, best practice guides, and sample scenarios. Enterprise customers receive dedicated onboarding sessions with our team and ongoing training support."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Common Questions
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to know about our platform
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-900/50 border border-slate-800' 
                    : 'bg-white border border-gray-200'
                } ${isOpen ? 'shadow-xl' : 'shadow-sm hover:shadow-lg'}`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left transition-colors duration-300"
                >
                  <span className={`text-base sm:text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-6 sm:px-8 pb-5 sm:pb-6 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
                      <p className="text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div className={`mt-12 text-center p-8 rounded-2xl ${
          isDark ? 'bg-slate-900/30 border border-slate-800' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-xl font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Still have questions?
          </h3>
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Can't find the answer you're looking for? Please reach out to our support team.
          </p>
          <a href="/contact-us#contact-form">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105">
            Contact Support
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;