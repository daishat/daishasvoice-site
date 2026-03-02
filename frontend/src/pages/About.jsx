import React from 'react';
import { Mic2, Award, Heart, Sparkles } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f1ea]">About D'Aisha</h1>
          <p className="text-lg text-[#d4af37]">
            Authentic storytelling through voice
          </p>
        </div>

        {/* Main Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-8 space-y-6">
              <div className="space-y-4 text-[#c9c9c9] leading-relaxed">
                <p>
                  I'm D'Aisha, a professional voice actor specializing in commercial and animation work. My voice is warm, conversational, and naturally expressive—perfect for bringing authenticity and emotion to every project. Whether it's a relatable commercial, an energetic animation character, or heartfelt storytelling, I deliver performances that truly connect with audiences.
                </p>
                <p>
                  With rigorous training and a home studio equipped for broadcast-quality recordings, I'm committed to professionalism at every stage. I understand the nuances of pacing, tone, and emotion, and I work closely with clients to ensure each performance aligns perfectly with their creative vision.
                </p>
                <p>
                  Beyond the booth, I'm passionate about animation and character-driven storytelling. I believe every script has a heartbeat, and my goal is to amplify that emotional depth—whether it's making someone laugh, think, or feel deeply moved. Voice acting isn't just what I do; it's how I connect, communicate, and create memorable experiences.
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-[#1a1a1d] border-[#d4af37]/30 p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Mic2 className="w-6 h-6 text-[#d4af37]" />
                <h3 className="text-lg font-semibold text-[#f4f1ea]">Specialties</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#c9c9c9]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Commercial Voice Over</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Animation & Character Work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Conversational Delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Emotional Storytelling</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-[#1a1a1d] border-[#d4af37]/30 p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-[#d4af37]" />
                <h3 className="text-lg font-semibold text-[#f4f1ea]">Values</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#c9c9c9]">
                <li className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-[#d4af37] mt-0.5" />
                  <span>Authenticity in every performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] mt-0.5" />
                  <span>Professional excellence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mic2 className="w-4 h-4 text-[#d4af37] mt-0.5" />
                  <span>Creative collaboration</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Studio & Technical Info */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#f4f1ea] text-center">Studio & Technical Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#d4af37]">Studio Setup</h3>
              <ul className="space-y-2 text-sm text-[#c9c9c9]">
                <li>• Broadcast-quality home studio</li>
                <li>• Professional recording equipment</li>
                <li>• Acoustically treated space</li>
                <li>• Source Connect compatible</li>
                <li>• Zoom session ready</li>
              </ul>
            </Card>

            <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#d4af37]">File Delivery</h3>
              <ul className="space-y-2 text-sm text-[#c9c9c9]">
                <li>• WAV & MP3 formats</li>
                <li>• 24-hour turnaround standard</li>
                <li>• Rush delivery available</li>
                <li>• Revisions included</li>
                <li>• Clean, edited files</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#f4f1ea]">Let's Create Something Amazing</h3>
            <p className="text-[#c9c9c9]">
              Ready to bring your project to life? Get in touch today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-me">
              <Button className="bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1d] font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105">
                Book D'Aisha
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
