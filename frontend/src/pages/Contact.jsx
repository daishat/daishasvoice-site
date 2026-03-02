import React, { useState } from 'react';
import { Mail, Twitter, Linkedin, Send, CheckCircle2, AlertCircle, Instagram } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { createContactMessage } from '../utils/api';
import PhoneReveal from '../components/PhoneReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Call real API
    const result = await createContactMessage(formData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f1ea]">Get In Touch</h1>
          <p className="text-lg text-[#c9c9c9] max-w-2xl mx-auto">
            Have questions or want to discuss a project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#f4f1ea] mb-4">Contact Information</h3>
                <p className="text-sm text-[#999] mb-6">Business inquiries only</p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:hello@daishavoice.com"
                    className="flex items-center space-x-3 text-[#c9c9c9] hover:text-[#d4af37] transition-colors duration-300 group"
                  >
                    <div className="bg-[#d4af37]/10 p-3 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#999]">Email</p>
                      <p className="text-sm font-medium">hello@daishavoice.com</p>
                      <p className="text-xs text-[#999] mt-0.5">Response within 24–48 hours</p>
                    </div>
                  </a>
                  
                  <div className="pt-2">
                    <PhoneReveal />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/20">
                <h4 className="text-sm font-semibold text-[#f4f1ea] mb-4">Follow My Work</h4>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://x.com/DAishaVoice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4af37]/10 p-3 rounded-lg text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] transition-all duration-300"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daishasvoice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4af37]/10 p-3 rounded-lg text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/daishasvoice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4af37]/10 p-3 rounded-lg text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@daishas_voices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4af37]/10 p-3 rounded-lg text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1a1a1d] border-[#d4af37]/30 p-6 space-y-3">
              <h4 className="text-lg font-semibold text-[#f4f1ea]">Response Time</h4>
              <p className="text-sm text-[#c9c9c9]">
                I typically respond to all inquiries within 24 hours during business days.
              </p>
              <p className="text-xs text-[#999] pt-2">
                For urgent projects, please mention it in your message.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="text-red-400 font-medium">Error</p>
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#f4f1ea]">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-[#1a1a1d] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#f4f1ea]">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-[#1a1a1d] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#f4f1ea]">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-[#1a1a1d] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#f4f1ea]">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="bg-[#1a1a1d] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                      placeholder="Tell me more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1d] font-semibold py-6 text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-block bg-[#d4af37]/10 p-6 rounded-full">
                    <CheckCircle2 className="w-12 h-12 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f4f1ea]">Message Sent!</h3>
                  <p className="text-[#c9c9c9] max-w-md mx-auto">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
