import React from 'react';
import { FileText, Building, MapPin, Users, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import AnimatedButton from './AnimatedButton';

const services = [
  {
    icon: FileText,
    title: 'Property Records',
    description: 'Access property information, assessments, and tax records online.',
    color: 'bg-[#05547A]',
    hoverColor: 'hover:bg-[#044261]'
  },
  {
    icon: Building,
    title: 'Building Permits',
    description: 'Apply for building permits and track your application status.',
    color: 'bg-[#F01A42]',
    hoverColor: 'hover:bg-[#D01638]'
  },
  {
    icon: MapPin,
    title: 'Planning & Zoning',
    description: 'Find zoning information and planning development guidelines.',
    color: 'bg-[#002E45]',
    hoverColor: 'hover:bg-[#001F2E]'
  },
  {
    icon: Users,
    title: 'Public Records',
    description: 'Request and access public documents and meeting minutes.',
    color: 'bg-[#05547A]',
    hoverColor: 'hover:bg-[#044261]'
  },
  {
    icon: Phone,
    title: 'Contact Services',
    description: 'Find contact information for all county departments.',
    color: 'bg-[#F01A42]',
    hoverColor: 'hover:bg-[#D01638]'
  },
  {
    icon: Calendar,
    title: 'Online Services',
    description: 'Pay bills, renew licenses, and access forms online.',
    color: 'bg-[#002E45]',
    hoverColor: 'hover:bg-[#001F2E]'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-[#0A1929]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#002E45] dark:text-[#E6F1F4] mb-3 md:mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-[#6B7280] dark:text-[#AEB0B5] px-4">Quick access to essential county services and resources</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border border-[#AEB0B5]/30 hover:border-[#05547A] transition-all duration-200 hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:scale-[1.02] animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-lg ${service.color} ${service.hoverColor} flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-md`}>
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-[#002E45] dark:text-[#E6F1F4] mb-3 md:mb-4 group-hover:text-[#F01A42] transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-[#6B7280] dark:text-[#AEB0B5] mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-[#05547A] dark:text-[#05547A] hover:text-[#F01A42] dark:hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 font-semibold inline-flex items-center space-x-2 transition-all duration-200 group-hover:translate-x-2 focus:ring-2 focus:ring-[#05547A] focus:ring-offset-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <AnimatedButton variant="primary">
            View all services
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}