import React from 'react';
import { Play, Film } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Videos = () => {
  // Sample video structure - you can add your actual videos here
  const videos = [
    {
      id: 1,
      title: 'Commercial Reel Showcase',
      description: 'A compilation of my best commercial voice work',
      thumbnail: 'https://via.placeholder.com/400x225/2d2d30/d4af37?text=Commercial+Reel',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1', // Replace with your video
      category: 'Commercial'
    },
    {
      id: 2,
      title: 'Animation Voice Acting Demo',
      description: 'Character voices and animation samples',
      thumbnail: 'https://via.placeholder.com/400x225/2d2d30/d4af37?text=Animation+Demo',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2', // Replace with your video
      category: 'Animation'
    },
    {
      id: 3,
      title: 'Behind the Scenes',
      description: 'A look at my recording process',
      thumbnail: 'https://via.placeholder.com/400x225/2d2d30/d4af37?text=Behind+Scenes',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3', // Replace with your video
      category: 'Behind the Scenes'
    },
    // Add more videos as needed
  ];

  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-[#d4af37]/10 p-4 rounded-full mb-4">
            <Film className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f1ea]">Video Portfolio</h1>
          <p className="text-lg text-[#c9c9c9] max-w-2xl mx-auto">
            Watch my voice acting work come to life. From commercial reels to behind-the-scenes content.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="bg-[#2d2d30] border-[#d4af37]/30 overflow-hidden group hover:border-[#d4af37] transition-all duration-300">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-[#1a1a1d] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#d4af37] p-4 rounded-full">
                    <Play className="w-6 h-6 text-[#1a1a1d]" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs rounded-full border border-[#d4af37]/30">
                  {video.category}
                </span>
                <h3 className="text-xl font-semibold text-[#f4f1ea] group-hover:text-[#d4af37] transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-[#c9c9c9]">
                  {video.description}
                </p>
                <button
                  onClick={() => {
                    // Open video in modal or new tab
                    window.open(video.videoUrl, '_blank');
                  }}
                  className="flex items-center space-x-2 text-[#d4af37] hover:text-[#c9a961] transition-colors duration-300 text-sm font-medium"
                >
                  <Play className="w-4 h-4" />
                  <span>Watch Video</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="bg-[#1a1a1d] border-[#d4af37]/30 p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#f4f1ea]">More Videos Coming Soon</h3>
            <p className="text-[#c9c9c9] max-w-2xl mx-auto">
              I'm regularly updating my portfolio with new projects. Follow me on social media to stay updated with my latest work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/demos">
                <Button className="bg-[#d4af37] hover:bg-[#c9a961] text-[#1a1a1d] font-semibold px-8 py-4">
                  Listen to Audio Demos
                </Button>
              </Link>
              <Link to="/book-me">
                <Button className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1d] font-semibold px-8 py-4">
                  Book D'Aisha
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Videos;
