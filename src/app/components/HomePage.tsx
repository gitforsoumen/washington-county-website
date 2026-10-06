import React from 'react';
import { FileText, Home, Building, Calendar, Users, Map } from 'lucide-react';
import HeroSection from './HeroSection';
import NewsSection from './NewsSection';
import ServicesSection from './ServicesSection';
import EventsSection from './EventsSection';
import NewsletterSection from './NewsletterSection';

const quickAccessItems = [
  { icon: FileText, label: 'Assessor Info', color: 'bg-[#003366]' },
  { icon: Home, label: 'Property Search', color: 'bg-[#007C91]' },
  { icon: Building, label: 'Building Permit', color: 'bg-[#0052A3]' },
  { icon: Calendar, label: 'Meetings', color: 'bg-[#003366]' },
  { icon: Users, label: 'Public Records', color: 'bg-[#007C91]' },
  { icon: Map, label: 'Maps', color: 'bg-[#0052A3]' }
];

export default function HomePage() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement search functionality
  };

  return (
    <main>
      <HeroSection 
        quickAccessItems={quickAccessItems} 
        onSearch={handleSearch}
      />
      <NewsSection />
      <ServicesSection />
      <EventsSection />
      <NewsletterSection />
    </main>
  );
}
