import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';
import darkLogo from 'figma:asset/84ae4dca5e7e76ad95733176dc1bf3cd82f404a4.png';
import whiteLogo from 'figma:asset/25a076c1f4b23d3b7c3eadf2b8b6a0210d481ea8.png';

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <footer className="bg-[#002E45] text-white border-t border-[#05547A]/30">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Contact Information & Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img 
                src={whiteLogo} 
                alt="Washington County Logo" 
                className="h-13 md:h-16 w-auto"
              />
            </div>
            
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#F01A42] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#E6F1F4]">197 E Tabernacle St</p>
                  <p className="text-sm text-[#E6F1F4]">St. George, UT 84770</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F01A42] flex-shrink-0" aria-hidden="true" />
                <a href="tel:4356345700" className="text-sm text-[#E6F1F4] hover:text-[#F01A42] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded">
                  (435) 634-5700
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F01A42] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@washco.utah.gov" className="text-sm text-[#E6F1F4] hover:text-[#F01A42] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded">
                  info@washco.utah.gov
                </a>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 text-white">Hours of Operation</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 text-[#F01A42] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-[#E6F1F4]">Monday - Friday</p>
                  <p className="text-sm text-[#AEB0B5]">8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-[#E6F1F4]">Saturday - Sunday</p>
                  <p className="text-sm text-[#AEB0B5]">Closed</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-[#05547A]/20 rounded-lg border border-[#05547A]/30">
                <p className="text-sm text-[#F01A42] font-semibold">Holiday Hours</p>
                <p className="text-xs text-[#AEB0B5] mt-1">
                  Hours may vary on holidays. Check our website for updates.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer quick links">
              {[
                'Property Search',
                'Building Permits',
                'Public Records',
                'Meeting Agendas',
                'Employment',
                'GIS Mapping',
                'Emergency Info'
              ].map((link) => (
                <Button
                  key={link}
                  variant="ghost"
                  className="justify-start h-auto p-0 text-[#E6F1F4] hover:text-[#F01A42] hover:bg-transparent focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded text-sm w-fit"
                >
                  {link}
                </Button>
              ))}
            </nav>
          </div>

          {/* Social Media & Legal */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 text-white">Connect With Us</h3>
            
            <div className="flex space-x-3 md:space-x-4 mb-4 md:mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-[#05547A]/20 hover:bg-[#F01A42] text-[#E6F1F4] hover:text-white border border-[#05547A]/30 hover:border-[#F01A42] transition-all duration-200 hover:scale-110"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-[#05547A]/20 hover:bg-[#F01A42] text-[#E6F1F4] hover:text-white border border-[#05547A]/30 hover:border-[#F01A42] transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-[#05547A]/20 hover:bg-[#F01A42] text-[#E6F1F4] hover:text-white border border-[#05547A]/30 hover:border-[#F01A42] transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-[#05547A]/20 hover:bg-[#F01A42] text-[#E6F1F4] hover:text-white border border-[#05547A]/30 hover:border-[#F01A42] transition-all duration-200 hover:scale-110"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Footer legal links">
              <Button
                variant="ghost"
                className="justify-start h-auto p-0 text-[#E6F1F4] hover:text-[#F01A42] hover:bg-transparent text-sm focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded w-fit"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="justify-start h-auto p-0 text-[#E6F1F4] hover:text-[#F01A42] hover:bg-transparent text-sm focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded w-fit"
              >
                Terms of Use
              </Button>
              <Button
                variant="ghost"
                className="justify-start h-auto p-0 text-[#E6F1F4] hover:text-[#F01A42] hover:bg-transparent text-sm focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded w-fit"
              >
                Accessibility
              </Button>
              <Button
                variant="ghost"
                className="justify-start h-auto p-0 text-[#E6F1F4] hover:text-[#F01A42] hover:bg-transparent text-sm focus:ring-2 focus:ring-[#F01A42] focus:ring-offset-2 focus:ring-offset-[#002E45] rounded w-fit"
              >
                Site Map
              </Button>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#05547A]/30 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <p className="text-xs md:text-sm text-[#AEB0B5] text-center md:text-left">
              © 2025 Washington County, Utah. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-[rgb(174,176,181)] text-center md:text-right">
              Last updated: October 7, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}