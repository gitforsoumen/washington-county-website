import React, { useState } from 'react';
import { 
  ChevronRight, FileText, Building, MapPin, Calendar, Users, Phone, 
  ExternalLink, ChevronDown, Search, Shield, Briefcase, BookOpen, 
  Gavel, Home, X, Info, AlertCircle, Map, ClipboardList, Flame
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import NewsletterSection from './NewsletterSection';
import AnimatedButton from './AnimatedButton';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface DepartmentNotificationProps {
  type: 'info' | 'alert';
  message: string;
  linkText?: string;
  linkUrl?: string;
  onDismiss?: () => void;
}

const DepartmentNotification: React.FC<DepartmentNotificationProps> = ({
  type,
  message,
  linkText,
  linkUrl,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`w-full py-3 px-4 ${
        type === 'alert'
          ? 'bg-red-600 text-white'
          : 'bg-[#E6F3F7] text-[#003366] border-b border-[#007C91]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {type === 'alert' ? (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <Info className="w-5 h-5 flex-shrink-0" />
          )}
          <p className="text-sm">
            {message}
            {linkText && (
              <a
                href={linkUrl || '#'}
                className={`ml-2 underline hover:no-underline font-semibold ${
                  type === 'alert' ? 'text-white' : 'text-[#007C91]'
                }`}
              >
                {linkText}
              </a>
            )}
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className={`flex-shrink-0 p-1 rounded-xl hover:bg-white/20 transition-colors ${
            type === 'alert' ? 'text-white' : 'text-[#003366]'
          }`}
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const quickAccessServices = [
  { 
    icon: ClipboardList, 
    label: 'Book an Inspection or Get a Permit', 
    description: 'Schedule inspections and apply for permits online'
  },
  { 
    icon: FileText, 
    label: 'Building Permit Documents', 
    description: 'Access required forms and documents'
  },
  { 
    icon: Shield, 
    label: 'Zoning/Code Violation Complaint', 
    description: 'Report violations in your area'
  },
  { 
    icon: Building, 
    label: 'Short-Term Rental License', 
    description: 'Apply for rental property licenses'
  },
  { 
    icon: Map, 
    label: 'Interactive Map', 
    description: 'Explore zoning and property data'
  },
  { 
    icon: MapPin, 
    label: 'Zoning Info', 
    description: 'Find zoning and planning guidelines'
  },
  { 
    icon: BookOpen, 
    label: 'General Plan', 
    description: 'View comprehensive planning documents'
  },
  { 
    icon: FileText, 
    label: 'Resource Management Plan', 
    description: 'Access environmental planning docs'
  },
  { 
    icon: Calendar, 
    label: 'Planning Commission Meetings', 
    description: 'View schedules, agendas, and minutes'
  },
  { 
    icon: Gavel, 
    label: 'Planning Applications', 
    description: 'Submit and track applications'
  },
  { 
    icon: Briefcase, 
    label: 'Business License Information', 
    description: 'Get licensing requirements info'
  },
  { 
    icon: FileText, 
    label: 'I.C.C. Mission Statement', 
    description: 'Learn about ICC standards'
  },
  { 
    icon: Flame, 
    label: 'Wild Land Fire', 
    description: 'Fire safety and prevention info'
  },
  { 
    icon: FileText, 
    label: 'Community Development Fees', 
    description: 'View current fee schedules'
  }
];

const sidebarLinks = [
  { label: 'Overview', href: '#', isActive: true },
  { label: 'Book Inspection / Permit', href: '#' },
  { label: 'Permit Documents', href: '#' },
  { label: 'Zoning Complaints', href: '#' },
  { label: 'Rental License', href: '#' },
  { label: 'Zoning Map', href: '#' },
  { label: 'Zoning Info', href: '#' },
  { label: 'General Plan', href: '#' },
  { label: 'Resource Plan', href: '#' },
  { label: 'Commission Meetings', href: '#' },
  { label: 'Planning Applications', href: '#' },
  { label: 'Business License', href: '#' },
  { label: 'ICC Mission', href: '#' },
  { label: 'Wildland Fire', href: '#' },
  { label: 'Fee Schedule', href: '#' },
  { label: 'FAQ', href: '#faqs' },
  { label: 'Contact', href: '#' },
  { label: 'About Us', href: '#' }
];

const recentPosts = [
  {
    title: 'New Building Code Updates for 2025',
    date: 'October 5, 2025',
    image: 'https://images.unsplash.com/photo-1692229080119-92181dacd91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYwNTk3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Important updates to building codes effective January 2025.'
  },
  {
    title: 'Zoning Changes in Hurricane Development Area',
    date: 'October 2, 2025',
    image: 'https://images.unsplash.com/photo-1759459981021-10e4faf9ae08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRldmVsb3BtZW50JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYwNTk3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'New zoning regulations for the Hurricane development corridor.'
  },
  {
    title: 'Planning Commission Meeting Minutes - September',
    date: 'September 28, 2025',
    image: 'https://images.unsplash.com/photo-1645791314701-5eee0542c031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGxhbm5pbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MDU5NzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Review the latest Planning Commission meeting minutes and decisions.'
  }
];

const faqItems = [
  {
    question: 'Where can I apply for a building permit?',
    answer: 'You can apply for a building permit online through our permit portal or visit our office in person at 111 East Tabernacle, St. George, UT 84770. Required documents include construction plans, site survey, and a completed application form. Processing time is typically 2-3 weeks for residential permits.'
  },
  {
    question: 'What are the current zoning regulations?',
    answer: 'Zoning regulations vary by area and are outlined in our comprehensive zoning ordinance. You can view zoning maps and regulations on our interactive mapping system or contact our planning department for specific information about your property.'
  },
  {
    question: 'How can I report a code violation?',
    answer: 'Code violations can be reported online through our complaint form, by calling our office at (435) 634-5700, or by visiting our office in person. Please provide as much detail as possible including the property address and nature of the violation.'
  },
  {
    question: 'What is required for short-term rental licensing?',
    answer: 'Short-term rental licenses require a completed application, business license, safety inspection, proof of insurance, and payment of applicable fees. Properties must comply with all zoning requirements and safety standards.'
  },
  {
    question: 'When are Planning Commission meetings held?',
    answer: 'Planning Commission meetings are held on the first and third Thursday of each month at 6:00 PM in the County Administration Building. Agendas are posted 24 hours in advance on our website.'
  },
  {
    question: 'How do I request a zone change?',
    answer: 'Zone change requests must be submitted through a formal application process. Contact our planning division for application requirements, fees, and timelines. The process typically involves public hearings and review by the Planning Commission and County Commission.'
  },
  {
    question: 'What is the General Plan?',
    answer: 'The General Plan is a comprehensive policy document that guides the long-term development and growth of Washington County. It addresses land use, transportation, economic development, and resource management.'
  },
  {
    question: 'How long does it take to get a building permit approved?',
    answer: 'Approval times vary depending on the complexity of the project. Simple residential permits typically take 2-3 weeks, while commercial or complex projects may take 4-6 weeks or longer. Incomplete applications will delay the process.'
  },
  {
    question: 'Do I need a permit for home renovations?',
    answer: 'Most structural changes, electrical work, plumbing modifications, and HVAC installations require permits. Minor cosmetic changes like painting or flooring typically do not. Contact our office if you\'re unsure about your specific project.'
  },
  {
    question: 'How do I schedule a building inspection?',
    answer: 'Building inspections can be scheduled online through our inspection portal or by calling our office at least 24 hours in advance. You will need your permit number and be ready to specify which type of inspection is needed.'
  }
];

interface CommunityDevelopmentPageProps {
  onNavigate?: (page: string) => void;
}

export default function CommunityDevelopmentPage({ onNavigate }: CommunityDevelopmentPageProps) {
  const [activeSidebarItem, setActiveSidebarItem] = useState('Department Home');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Small Height */}
      <section className="relative h-[250px] md:h-[300px] overflow-hidden mt-20 md:mt-32">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646021307561-ce790bd6dc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYwNTQ0MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Community Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/70 to-[#003366]/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl text-white text-center drop-shadow-lg">
            Community Development
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-muted/40 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate && onNavigate('home')}
                  className="flex items-center gap-1 cursor-pointer hover:text-[#007C91]"
                >
                  <Home className="w-4 h-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="cursor-pointer hover:text-[#007C91]">
                  Departments
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Community Development</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Department-Specific Notification Bar */}
      <DepartmentNotification
        type="info"
        message="Planning Commission Meeting moved to October 20, 2025 at 6:00 PM"
        linkText="View Agenda"
        linkUrl="#"
      />
      {/* Example Alert variant (uncomment to use):
      <DepartmentNotification
        type="alert"
        message="Urgent: New wildfire restrictions in effect for unincorporated areas"
        linkText="Learn More"
        linkUrl="#"
      />
      */}

      {/* Main Content Area - Two Column Layout */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Sidebar Toggle Button */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              className="w-full rounded-xl flex items-center justify-between"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              <span>Department Navigation</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSidebarOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Left Column - Secondary Navigation Sidebar */}
            <aside className={`lg:sticky lg:top-36 h-fit ${isMobileSidebarOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="uppercase tracking-wider text-xs font-semibold text-muted-foreground mb-4 pb-3 border-b border-border">
                  Navigation
                </h3>
                <nav className="space-y-1" aria-label="Department navigation">
                  {sidebarLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === '#') {
                          e.preventDefault();
                        }
                        setActiveSidebarItem(link.label);
                        setIsMobileSidebarOpen(false);
                        // Smooth scroll to top for non-hash links
                        if (link.href === '#') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      aria-current={activeSidebarItem === link.label ? 'page' : undefined}
                      className={`block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007C91] focus:ring-offset-2 ${
                        activeSidebarItem === link.label
                          ? 'bg-[#007C91] text-white font-medium'
                          : 'text-foreground hover:bg-muted hover:text-[#007C91]'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Column - Main Content */}
            <div className="space-y-12" id="main-content">
              {/* Department Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
                <div>
                  <h2 className="text-3xl text-foreground mb-6">Community Development</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The Community Development Department consists of the building and planning divisions. 
                      The Community Development Department oversees building and implements comprehensive 
                      planning policies that balance the need to preserve our natural and cultural heritage 
                      while building healthy, dynamic and sustainable communities in the rapidly growing Dixie region.
                    </p>
                    <p>
                      The Department assists in the facilitation of regional and community general plans, 
                      Resource Management Plan, comprehensive long range planning documents; such as Vision Dixie. 
                      Works to coordinate with local, state and federal government agencies and communities to 
                      provide broad direction of how Washington County will grow.
                    </p>
                    <p>
                      The Community Development Department administers the land use ordinances and building codes 
                      adopted by Washington County and the State of Utah through the building permit process and 
                      inspection, subdivision plat process, lot line adjustments, zone change requests, annexation, 
                      conditional use permits, nuisance violations and home occupations. Department staff works with 
                      local residents, builders, land owners, developers, applicants and the Land Use Authority on 
                      planning, zoning and building related issues.
                    </p>
                  </div>
                </div>
                <div className="lg:sticky lg:top-36">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1645791314701-5eee0542c031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGxhbm5pbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MDU5NzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Planning meeting"
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Quick Access Services Panel */}
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl text-foreground mb-2">Quick Access Services</h3>
                  <div className="h-1 w-16 bg-[#007C91] rounded-xl"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickAccessServices.map((service, index) => (
                    <button
                      key={index}
                      className="group bg-muted/30 hover:bg-muted border border-border rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-[#007C91]/30 focus:outline-none focus:ring-2 focus:ring-[#007C91] focus:ring-offset-2 text-left w-full"
                      aria-label={`${service.label}: ${service.description}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-[#007C91]/10 flex items-center justify-center group-hover:bg-[#007C91] transition-colors duration-200">
                            <service.icon className="w-6 h-6 text-[#007C91] group-hover:text-white transition-colors duration-200" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-[#007C91] transition-colors duration-200">
                            {service.label}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-snug">
                            {service.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#007C91] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl text-foreground mb-2">Recent Updates</h3>
                    <div className="h-1 w-16 bg-[#007C91] rounded-xl"></div>
                  </div>
                  <Button variant="outline" className="rounded-xl hover:bg-[#007C91] hover:text-white hover:border-[#007C91]">
                    View All Posts
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentPosts.map((post, index) => (
                    <Card 
                      key={index} 
                      className="group overflow-hidden rounded-xl border-border hover:border-[#007C91]/50 transition-all duration-300 hover:shadow-lg cursor-pointer focus-within:ring-2 focus-within:ring-[#007C91] focus-within:ring-offset-2"
                      role="article"
                    >
                      <a 
                        href="#" 
                        className="block focus:outline-none"
                        aria-label={`${post.title} - Published ${post.date}`}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardContent className="p-5">
                          <Badge variant="outline" className="mb-3 text-xs">
                            <time dateTime={post.date}>{post.date}</time>
                          </Badge>
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-[#007C91] transition-colors leading-snug">
                            {post.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-[#007C91] group-hover:translate-x-1 transition-transform duration-200">
                            <span className="text-sm font-medium">Read More</span>
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </div>
                        </CardContent>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faqs">
                <div className="mb-6">
                  <h3 className="text-2xl text-foreground mb-2">Frequently Asked Questions</h3>
                  <div className="h-1 w-16 bg-[#007C91] rounded-xl"></div>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="bg-card border border-border rounded-xl overflow-hidden data-[state=open]:border-[#007C91]/50"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                        <span className="text-left font-medium text-foreground pr-4">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 pt-1">
                        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
