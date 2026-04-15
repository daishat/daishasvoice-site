import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f10] border-t border-[#d4af37]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#d4af37]">D'Aisha Voice</h3>
            <p className="text-sm text-[#c9c9c9]">
              Authentic. Expressive. Memorable.
            </p>
            <p className="text-xs text-[#999] pt-2">
              Studio Quality Audio | Remote Session Ready<br />
              Source Connect | Zoom | Clean Broadcast Audio
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#f4f1ea]">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/demos" className="text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300">
                Listen to Demos
              </Link>
              <Link to="/videos" className="text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300">
                Videos
              </Link>
              <Link to="/about" className="text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300">
                About
              </Link>
              <Link to="/book-me" className="text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300">
                Book Me
              </Link>
              <Link to="/contact" className="text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#f4f1ea]">Connect</h4>
            <div className="space-y-3">
              <a
                href="daishasvoice@outlook.com"
                className="flex items-center space-x-2 text-sm text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>daishasvoice@outlook.com</span>
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://x.com/DAishaVoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daishasvoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/daishasvoice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@daishas_voices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4af37]/20 pt-6 text-center">
          <p className="text-sm text-[#999]">
            © {new Date().getFullYear()} D'Aisha Voice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
