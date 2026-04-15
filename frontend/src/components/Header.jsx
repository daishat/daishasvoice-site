import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from './ui/button';
import PhoneReveal from './PhoneReveal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/demos', label: 'Demos' },
    { path: '/videos', label: 'Videos' },
    { path: '/about', label: 'About' },
    { path: '/book-me', label: 'Book Me' },
    { path: '/contact', label: 'Contact Me' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1d]/95 backdrop-blur-sm border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <h1 className="text-2xl md:text-3xl font-bold text-[#d4af37] transition-all duration-300 group-hover:text-[#c9a961]">
              D'Aisha Voice
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#d4af37] whitespace-nowrap ${
                  isActive(link.path) ? 'text-[#d4af37]' : 'text-[#f4f1ea]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="mailto:daishasvoice@outlook.com"
              className="flex items-center space-x-2 text-sm text-[#f4f1ea] hover:text-[#d4af37] transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>daishasvoice@outlook.com</span>
            </a>
            <PhoneReveal iconOnly={true} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f4f1ea] hover:text-[#d4af37] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#d4af37]/20 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors duration-300 hover:text-[#d4af37] ${
                  isActive(link.path) ? 'text-[#d4af37]' : 'text-[#f4f1ea]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:daishasvoice@outlook.com"
              className="flex items-center space-x-2 py-2 text-base text-[#f4f1ea] hover:text-[#d4af37] transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>daishasvoice@outlook.com</span>
            </a>
            <div className="py-2">
              <PhoneReveal iconOnly={true} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
