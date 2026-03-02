import React from 'react';
import { Play, Mic2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Demos = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f1ea]">Voice Demos</h1>
          <p className="text-lg text-[#c9c9c9] max-w-2xl mx-auto">
            Listen to my commercial and animation work. Each demo showcases versatility, emotion, and professional quality.
          </p>
        </div>

        {/* Commercial Demo */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#d4af37] p-3 rounded-lg">
              <Play className="w-6 h-6 text-[#1a1a1d]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f4f1ea]">Commercial Demo</h2>
              <p className="text-sm text-[#d4af37]">Conversational | Relatable | Trustworthy</p>
            </div>
          </div>

          <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-8 space-y-4">
            <audio
              controls
              className="w-full"
              style={{
                filter: 'sepia(20%) saturate(70%) hue-rotate(25deg)',
              }}
            >
              <source src="https://customer-assets.emergentagent.com/job_daisha-books/artifacts/p40qrhvj_D%27Aisha%20Tolbert%20C3.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <div className="pt-4 space-y-3">
              <p className="text-[#c9c9c9] leading-relaxed">
                This commercial reel showcases my ability to deliver warm, conversational, and natural performances that connect with audiences. From relatable storytelling to trustworthy brand messaging, I bring authenticity to every script.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TV Commercials', 'Radio Ads', 'Digital Marketing', 'Brand Voice'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#1a1a1d] text-[#d4af37] text-xs rounded-full border border-[#d4af37]/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Animation Demo */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#c9a961] p-3 rounded-lg">
              <Mic2 className="w-6 h-6 text-[#1a1a1d]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f4f1ea]">Animation Demo</h2>
              <p className="text-sm text-[#c9a961]">Dynamic | Character-Driven | Expressive</p>
            </div>
          </div>

          <Card className="bg-[#2d2d30] border-[#c9a961]/30 p-8 space-y-4">
            <div className="text-center py-12 space-y-4">
              <div className="inline-block bg-[#d4af37]/10 p-6 rounded-full">
                <Mic2 className="w-12 h-12 text-[#d4af37]" />
              </div>
              <p className="text-lg text-[#c9c9c9]">
                Animation demo coming soon!
              </p>
              <p className="text-sm text-[#999] max-w-md mx-auto">
                Currently recording character work showcasing dynamic range, emotional versatility, and expressive storytelling perfect for animated projects.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-[#c9c9c9] leading-relaxed">
                My animation work brings characters to life with dynamic performances, emotional depth, and expressive range. Whether it's heroic protagonists, quirky sidekicks, or villainous antagonists, I deliver memorable character voices.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Character Voices', 'Animated Series', 'Video Games', 'Children\'s Content'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#1a1a1d] text-[#c9a961] text-xs rounded-full border border-[#c9a961]/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#f4f1ea]">Ready to Work Together?</h3>
            <p className="text-[#c9c9c9]">
              Let's bring your project to life with professional voice acting.
            </p>
          </div>
          <Link to="/book-me">
            <Button className="bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1d] font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105">
              <Mic2 className="w-5 h-5 mr-2" />
              Book D'Aisha
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demos;
