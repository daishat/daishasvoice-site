import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, Mail, Twitter, Linkedin, Play, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import PhoneReveal from '../components/PhoneReveal';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f4f1ea] leading-tight">
                D'Aisha Voice
              </h1>
              <p className="text-lg md:text-xl text-[#d4af37] font-semibold">
                Voice Actor | Commercial • Animation • Narration
              </p>
              <p className="text-lg md:text-xl text-[#c9c9c9] max-w-xl mx-auto lg:mx-0">
                Authentic. Expressive. Memorable.
              </p>
              <p className="text-base text-[#999] max-w-xl mx-auto lg:mx-0">
                Bringing scripts to life with heart and range.
              </p>
            </div>

            {/* Contact Info - Prominent */}
            <div className="bg-[#2d2d30] border border-[#d4af37]/30 rounded-lg p-6 space-y-4">
              <p className="text-sm text-[#d4af37] font-semibold uppercase tracking-wide">Get In Touch</p>
              <div className="space-y-2">
                <a
                  href="mailto:daishasvoice@outlook.com"
                  className="flex items-center justify-center lg:justify-start space-x-3 text-lg text-[#f4f1ea] hover:text-[#d4af37] transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">daishasvoice@outlook.com</span>
                </a>
                <p className="text-xs text-[#999] text-center lg:text-left lg:pl-8">
                  Response within 24–48 hours
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <PhoneReveal />
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-2">
                <a
                  href="https://x.com/DAishaVoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-all duration-300 hover:scale-110"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daishasvoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/daishasvoice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@daishas_voices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9c9c9] hover:text-[#d4af37] transition-all duration-300 hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/demos">
                <Button className="bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1d] font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Play className="w-5 h-5 mr-2" />
                  Listen to Demos
                </Button>
              </Link>
              <Link to="/book-me">
                <Button className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Mic2 className="w-5 h-5 mr-2" />
                  Book D'Aisha
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_daisha-books/artifacts/71nlfpkt_20260223_103607.jpg"
                alt="D'Aisha Voice - Professional Voice Actor"
                className="relative rounded-lg shadow-2xl w-full max-w-md object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audio Demo Section */}
      <section className="py-20 px-6 bg-[#2d2d30]/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f4f1ea]">Featured Demo</h2>
            <p className="text-lg text-[#c9c9c9]">
              Commercial Reel - Conversational, Relatable, Trustworthy
            </p>
          </div>
          
          <Card className="bg-[#1a1a1d] border-[#d4af37]/30 p-8">
            <audio
              controls
              className="w-full"
              style={{
                filter: 'sepia(20%) saturate(70%) hue-rotate(25deg)',
              }}
            >
              <source src="https://customer-assets.emergentagent.com/job_daisha-books/artifacts/p40qrhvj_DAisha%20Tolbert%20C3.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Card>

          <Link to="/demos">
            <Button className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] font-semibold px-8 py-4 text-base transition-all duration-300">
              Explore All Demos
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f4f1ea]">Voice Over Services</h2>
            <p className="text-lg text-[#c9c9c9]">
              Professional voice acting for diverse projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Commercials', desc: 'TV, radio, and digital advertising' },
              { title: 'Animation', desc: 'Character voices and storytelling' },
              { title: 'Social Media', desc: 'Instagram, TikTok, YouTube content' },
              { title: 'Brand Campaigns', desc: 'Corporate and promotional content' },
              { title: 'Explainer Videos', desc: 'Educational and instructional content' },
              { title: 'Video Games', desc: 'Character dialogue and narration' }
            ].map((service, index) => (
              <Card key={index} className="bg-[#2d2d30] border-[#d4af37]/20 p-6 hover:border-[#d4af37] transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-2">{service.title}</h3>
                <p className="text-[#c9c9c9]">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
