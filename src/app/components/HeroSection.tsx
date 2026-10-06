import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from './ThemeContext';

// Washington County Utah landscape images - rotating slideshow
// Featuring Zion National Park, Snow Canyon State Park, and Southern Utah landscapes
const heroImages = [
  "https://images.unsplash.com/photo-1443632864897-14973fa006cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxaaW9uJTIwTmF0aW9uYWwlMjBQYXJrfGVufDF8fHx8MTc2MTEyNjYzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1613533788304-646ce9c67584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTbm93JTIwQ2FueW9uJTIwU3RhdGUlMjBQYXJrfGVufDF8fHx8MTc2MTEyNjYzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1728330354565-0a5102768eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aGVybiUyMFV0YWglMjByZWQlMjByb2Nrc3xlbnwxfHx8fDE3NjExMjY2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1597983429749-c8a0a04d8dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVdGFoJTIwZGVzZXJ0JTIwY2FueW9ufGVufDF8fHx8MTc2MTEyNjYzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1627750739931-5dc0ddda04c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdCUyMEdlb3JnZSUyMFV0YWglMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxMDcyODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
];

interface QuickAccessItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href?: string;
}

interface HeroSectionProps {
  quickAccessItems: QuickAccessItem[];
  onSearch?: (query: string) => void;
}

export default function HeroSection({ quickAccessItems, onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isDarkMode } = useTheme();

  // Auto-rotate images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
        setIsTransitioning(false);
      }, 500);
      
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0
            }}
          >
            <ImageWithFallback
              src={image}
              alt="Washington County Utah scenic landscape"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Semi-transparent overlay with Primary Blue */}
       {/*<div className="absolute inset-0 bg-[#003366]/60 z-10" />*/ }
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/100 z-10" />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent group"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent group"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'w-6 sm:w-8 bg-white' 
                : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center z-10 px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-24 md:pt-60 pb-32 sm:pb-40">
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 max-w-3xl mx-auto drop-shadow-lg px-4">
            Discover the Spirit of
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl px-4">
            Washington County
          </h1>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-12 px-4">
            <div className="relative">
              <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-400 z-10 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search Washington County..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 md:pl-16 pr-4 md:pr-6 h-12 sm:h-14 md:h-16 rounded-xl text-sm sm:text-base md:text-lg bg-white/95 backdrop-blur-sm border-2 border-white/50 focus:border-[#007C91] focus:bg-white shadow-2xl relative"
                aria-label="Search Washington County services and information"
              />
            </div>
          </form>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-12 px-4">
            {quickAccessItems.map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl backdrop-blur-md transition-all duration-300 h-auto cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent group"
                aria-label={item.label}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl ${item.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-xs md:text-sm text-white text-center leading-tight drop-shadow-lg">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        
      </div>
    </div>
  );
}
