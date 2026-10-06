import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimatedButton from './AnimatedButton';

const events = [
  {
    id: 1,
    title: 'County Commission Meeting',
    date: 'Oct 10',
    time: '9:00 AM',
    location: 'County Administration Building',
    image: 'https://images.unsplash.com/photo-1640200330428-9fe2ab926de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwY291bmNpbCUyMG1lZXRpbmclMjBnb3Zlcm5tZW50fGVufDF8fHx8MTc1OTc3MjI0MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Community Development Workshop',
    date: 'Oct 15',
    time: '6:00 PM',
    location: 'Hurricane City Hall',
    image: 'https://images.unsplash.com/photo-1688293963722-a0eaead0ff52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzZXJ2aWNlcyUyMGNvbW11bml0eSUyMGNlbnRlcnxlbnwxfHx8fDE3NTk4NDcyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Fall Festival & Recreation Fair',
    date: 'Oct 20',
    time: '10:00 AM',
    location: 'Washington County Fairgrounds',
    image: 'https://images.unsplash.com/photo-1565250732404-64317a4e8b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudHMlMjBmZXN0aXZhbCUyMHV0YWh8ZW58MXx8fHwxNzU5ODQ3MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

export default function EventsSection() {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const renderCalendar = () => {
    const days = daysInMonth(selectedMonth, selectedYear);
    const startDay = firstDayOfMonth(selectedMonth, selectedYear);
    const calendarDays = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= days; day++) {
      const isToday = day === currentDate.getDate() && 
                     selectedMonth === currentMonth && 
                     selectedYear === currentYear;
      
      calendarDays.push(
        <div 
          key={day} 
          className={`p-1 md:p-2 text-center cursor-pointer rounded-xl transition-colors text-sm md:text-base ${
            isToday 
              ? 'bg-[#F01A42] text-white font-bold' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Calendar Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">Events & Calendar</h2>
            
            <Card className="p-4 md:p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {monthNames[selectedMonth]} {selectedYear}
                </h3>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => navigateMonth('prev')}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => navigateMonth('next')}
                    className="hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-2 md:mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-1 md:p-2 text-center font-medium text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </Card>
          </div>

          {/* Upcoming Events Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">Upcoming Events</h2>
            
            <div className="space-y-4 md:space-y-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-24 h-32 sm:h-24 flex-shrink-0">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardContent className="flex-1 p-3 md:p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                            <div className="text-center bg-[#F01A42] text-white px-2 md:px-3 py-1 rounded-xl inline-block self-start">
                              <div className="text-xs font-medium">{event.date}</div>
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-foreground">{event.title}</h3>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-gray-600 dark:text-gray-400 gap-2 sm:gap-4">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 md:w-4 md:h-4" />
                              <span className="text-muted-foreground">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                              <span className="text-muted-foreground">{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <AnimatedButton>
                View All Events
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}