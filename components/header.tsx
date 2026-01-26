"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Sun, Moon, Menu, X } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDark ? "bg-slate-950/80" : "bg-white/80"
      } backdrop-blur-md border-b ${
        isDark ? "border-slate-800" : "border-gray-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg ${
                isDark ? "bg-cyan-500" : "bg-cyan-600"
              } flex items-center justify-center`}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-lg font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Uptraino AI
            </span>
          </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/solutions"
              className={`text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Solutions
            </Link>

            <Link
              href="/pricing"
              className={`text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Pricing
            </Link>

            <Link
              href="/about-us"
              className={`text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              className={`text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Contact-us
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? "bg-slate-800 text-gray-300 hover:text-white"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900"
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/login"
              className={`hidden md:block px-4 py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Log in
            </Link>

            <Link
              href="/contact-us#contact-form"
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors"
            >
              Try it now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              isDark ? "border-slate-800" : "border-gray-200"
            }`}
          >
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Solutions
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Pricing
            </Link>

            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Contact US
            </Link>

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors`}
            >
              Log in
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
