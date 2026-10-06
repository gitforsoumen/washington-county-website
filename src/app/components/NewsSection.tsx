import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimatedButton from './AnimatedButton';

const newsItems = [
  {
    id: 1,
    title: 'County Commission Approves New Community Development Plan',
    date: 'October 5, 2025',
    image: 'https://images.unsplash.com/photo-1640200330428-9fe2ab926de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwY291bmNpbCUyMG1lZXRpbmclMjBnb3Zlcm5tZW50fGVufDF8fHx8MTc1OTc3MjI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Planning'
  },
  {
    id: 2,
    title: 'Public Works Announces Road Improvement Projects',
    date: 'October 3, 2025',
    image: 'https://images.unsplash.com/photo-1688293963722-a0eaead0ff52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzZXJ2aWNlcyUyMGNvbW11bml0eSUyMGNlbnRlcnxlbnwxfHx8fDE3NTk4NDcyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Infrastructure'
  },
  {
    id: 3,
    title: 'New Recreation Center Opens in Hurricane',
    date: 'October 1, 2025',
    image: 'https://images.unsplash.com/photo-1565250732404-64317a4e8b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudHMlMjBmZXN0aXZhbCUyMHV0YWh8ZW58MXx8fHwxNzU5ODQ3MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Recreation'
  },
  {
    id: 4,
    title: 'Election Information and Polling Locations',
    date: 'September 28, 2025',
    image: 'https://images.unsplash.com/photo-1604218118561-4bc4427d1e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3RpbmclMjBiYWxsb3QlMjBlbGVjdGlvbnxlbnwxfHx8fDE3NjEwNDAwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Elections'
  },
  {
    id: 5,
    title: 'Community Meeting: Water Conservation Initiative',
    date: 'September 25, 2025',
    image: 'https://images.unsplash.com/photo-1708195994833-c39acabb03d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGNvbnNlcnZhdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjExMzA0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Environment'
  },
  {
    id: 6,
    title: 'Local Business Growth Program Launch',
    date: 'September 22, 2025',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMTI2NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Economic Development'
  }
];



export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = newsItems.length - slidesToShow;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slidesToShow]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? newsItems.length - slidesToShow : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = newsItems.length - slidesToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const maxDots = newsItems.length - slidesToShow + 1;

  return (
    <section className="py-16 bg-[#F5F5F5] dark:bg-[#0A1929]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#002E45] dark:text-[#E6F1F4] mb-4">Latest News & Updates</h2>
          <p className="text-lg text-[#6B7280] dark:text-[#AEB0B5]">Stay informed about what's happening in Washington County</p>
        </div>

        <div 
          className="relative px-4 lg:px-12 mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 lg:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#002E45] shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007C91] focus:ring-offset-2 group"
            aria-label="Previous news"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#002E45] dark:text-[#E6F1F4] group-hover:text-[#007C91]" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` 
              }}
            >
              {newsItems.map((item) => (
                <div 
                  key={item.id} 
                  className="px-3"
                  style={{ 
                    minWidth: `${100 / slidesToShow}%`,
                    flex: `0 0 ${100 / slidesToShow}%`
                  }}
                >
                  <Card 
                    className="group cursor-pointer overflow-hidden border shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-all duration-200 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-[#05547A] focus-within:ring-offset-2 h-full"
                  >
                    <div className="relative h-80">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-white">
                        <div className="mb-2">
                          <span className="inline-block bg-[#F01A42] text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-md">
                            {item.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-xs md:text-sm text-gray-200 mb-2">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" aria-hidden="true" />
                          <time dateTime={item.date}>{item.date}</time>
                        </div>
                        
                        <h3 className="text-base md:text-lg font-bold leading-tight group-hover:text-[#F01A42] transition-colors duration-200">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 lg:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#002E45] shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007C91] focus:ring-offset-2 group"
            aria-label="Next news"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#002E45] dark:text-[#E6F1F4] group-hover:text-[#007C91]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#007C91] w-3 h-3' 
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-[#007C91]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-[rgb(0,124,145)] hover:bg-[#006175] w-[180px] h-[60px] text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            View All News
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}