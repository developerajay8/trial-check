// components/ContactForm.tsx
"use client";
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Building } from 'lucide-react';

interface ContactFormProps {
  isDark: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 2000);
  };

  const subjects = [
    'General Inquiry',
    'Sales Question',
    'Technical Support',
    'Partnership',
    'Feature Request',
    'Other'
  ];

  return (
    <section id="contact-form" className={`py-16 md:py-24 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Send Us a Message
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <div className={`rounded-3xl ${
          isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-gray-200'
        } p-8 sm:p-10 shadow-2xl`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Name *
              </label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl ${
                    isDark 
                      ? 'bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:border-cyan-500' 
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                  } outline-none transition-colors duration-300`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address *
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl ${
                    isDark 
                      ? 'bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:border-cyan-500' 
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                  } outline-none transition-colors duration-300`}
                />
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Company (Optional)
              </label>
              <div className="relative">
                <Building className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl ${
                    isDark 
                      ? 'bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:border-cyan-500' 
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                  } outline-none transition-colors duration-300`}
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Subject *
              </label>
              <div className="relative">
                <MessageSquare className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl appearance-none cursor-pointer ${
                    isDark 
                      ? 'bg-slate-800 border border-slate-700 text-white focus:border-cyan-500' 
                      : 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-cyan-500'
                  } outline-none transition-colors duration-300`}
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us how we can help you..."
                className={`w-full px-4 py-3.5 rounded-xl resize-none ${
                  isDark 
                    ? 'bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:border-cyan-500' 
                    : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                } outline-none transition-colors duration-300`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;