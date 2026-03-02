import React, { useState } from 'react';
import { Mic2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { createBookingRequest } from '../utils/api';

const BookMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    budget: '',
    deadline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Call real API
    const result = await createBookingRequest(formData);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          projectType: '',
          budget: '',
          deadline: '',
          message: ''
        });
      }, 3000);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f1ea]">Book D'Aisha</h1>
          <p className="text-lg text-[#c9c9c9] max-w-2xl mx-auto">
            Ready to bring your project to life? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Project Types */}
        <Card className="bg-[#2d2d30] border-[#d4af37]/30 p-8">
          <h2 className="text-2xl font-bold text-[#f4f1ea] mb-6">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Commercials',
              'Animation',
              'Social Media Ads',
              'YouTube',
              'Explainer Videos',
              'Brand Campaigns',
              'Video Games',
              'E-Learning',
              'Audiobooks'
            ].map((type) => (
              <div key={type} className="flex items-center space-x-2 text-[#c9c9c9]">
                <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                <span className="text-sm">{type}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Booking Form */}
        <Card className="bg-[#1a1a1d] border-[#d4af37]/30 p-8">
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
                    className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#f4f1ea]">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                    placeholder="Your Company"
                  />
                </div>
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
                  className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-[#f4f1ea]">Project Type *</Label>
                  <Select onValueChange={(value) => handleSelectChange('projectType', value)} required>
                    <SelectTrigger className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea]">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2d2d30] border-[#d4af37]/30">
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="animation">Animation</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="explainer">Explainer Video</SelectItem>
                      <SelectItem value="brand-campaign">Brand Campaign</SelectItem>
                      <SelectItem value="video-game">Video Game</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-[#f4f1ea]">Budget Range</Label>
                  <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                    <SelectTrigger className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea]">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2d2d30] border-[#d4af37]/30">
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-plus">$2,500+</SelectItem>
                      <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className="text-[#f4f1ea]">Project Deadline</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#f4f1ea]">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-[#2d2d30] border-[#d4af37]/30 text-[#f4f1ea] focus:border-[#d4af37]"
                  placeholder="Tell me about your project... What's the tone? Who's the audience? Any specific direction or references?"
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
                    Send Booking Request
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="inline-block bg-[#d4af37]/10 p-6 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f4f1ea]">Request Received!</h3>
              <p className="text-[#c9c9c9] max-w-md mx-auto">
                Thank you for your interest! I'll review your project details and get back to you within 24 hours.
              </p>
            </div>
          )}
        </Card>

        {/* Additional Info */}
        <div className="text-center space-y-4 text-[#c9c9c9]">
          <p className="text-sm">
            Need to discuss your project first?{' '}
            <a href="mailto:hello@daishavoice.com" className="text-[#d4af37] hover:underline">
              Email me directly
            </a>
          </p>
          <p className="text-xs text-[#999]">
            Response within 24–48 hours | Rush delivery available
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookMe;
