import React, { useState, useEffect } from "react";
import {
  Search,
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import MegaMenu from "./MegaMenu";
import SearchDialog from "./SearchDialog";
import SubmitRequestModal from "./SubmitRequestModal";
import { useTheme } from "./ThemeContext";
import darkLogo from "figma:asset/84ae4dca5e7e76ad95733176dc1bf3cd82f404a4.png";
import whiteLogo from "figma:asset/25a076c1f4b23d3b7c3eadf2b8b6a0210d481ea8.png";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  isNotificationVisible: boolean;
}

export default function Header({
  onNavigate,
  currentPage,
  isNotificationVisible,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside and handle body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setExpandedSection(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Navigation configuration
  const servicesAndResourcesSections = [
    {
      title: "Property Services",
      items: [
        { label: "Property Search" },
        { label: "Tax Information" },
        { label: "Property Tax Relief" },
        { label: "Residential Exemption" },
        { label: "Property Tax Estimate" },
        { label: "Appeal Your Market Value" },
      ],
    },
    {
      title: "Permits & Licenses",
      items: [
        { label: "Building Permits" },
        { label: "Business Licenses" },
        { label: "Burn Permit Application" },
        { label: "Short-Term Rental License" },
      ],
    },
    {
      title: "Public Records",
      items: [
        { label: "GRAMA Records Request" },
        { label: "County Code" },
        { label: "Election Results" },
        { label: "Court Calendar" },
      ],
    },
    {
      title: "Community Resources",
      items: [
        { label: "Utility Bill Assistance" },
        { label: "Emergency Management" },
        { label: "Fireworks Restrictions" },
        { label: "Road Work" },
        { label: "Snow Plowed Roads" },
        { label: "Surplus Sale" },
      ],
    },
  ];

  const departmentsSections = [
    {
      title: "Administrative",
      items: [
        { label: "Assessor" },
        { label: "Auditor" },
        { label: "Clerk" },
        { label: "Treasurer" },
        { label: "Recorder/Surveyor" },
      ],
    },
    {
      title: "Public Services",
      items: [
        { label: "Emergency Management" },
        { label: "Public Works" },
        { label: "Roads" },
        { label: "Solid Waste" },
        { label: "Mosquito Abatement" },
        { label: "Noxious Weed Control" },
      ],
    },
    {
      title: "Community & Development",
      items: [
        { label: "Community Development", onClick: () => onNavigate("community-development") },
        { label: "Planning Commission" },
        { label: "Building Maintenance" },
        { label: "Economic Development" },
      ],
    },
    {
      title: "Legal & Safety",
      items: [
        { label: "Attorney" },
        { label: "Justice Court" },
        { label: "Sheriff" },
        { label: "Court Support Services" },
      ],
    },
    {
      title: "Health & Human Services",
      items: [
        { label: "Council on Aging" },
        { label: "Children's Justice Center" },
        { label: "Human Resources" },
      ],
    },
    {
      title: "Libraries & Culture",
      items: [
        { label: "Library (All Branches)" },
        { label: "Convention & Tourism Office" },
        { label: "Legacy Park" },
        { label: "Sports & Outdoor Recreation" },
      ],
    },
  ];

  const recreationSections = [
    {
      title: "Parks & Outdoor",
      items: [
        { label: "Parks & Trails" },
        { label: "Legacy Park" },
        { label: "Campgrounds & Reservations" },
        { label: "Hiking & Biking Trails" },
      ],
    },
    {
      title: "Sports & Activities",
      items: [
        { label: "Sports Facilities" },
        { label: "Community Events" },
        { label: "Outdoor Recreation Programs" },
        { label: "Youth Programs" },
      ],
    },
  ];

  const jobsSections = [
    {
      title: "Employment",
      items: [
        { label: "Current Openings" },
        { label: "How to Apply" },
        { label: "Employee Resources" },
        { label: "Internships" },
        { label: "Volunteer Opportunities" },
      ],
    },
  ];

  const contactSections = [
    {
      title: "Get in Touch",
      items: [
        { label: "Contact Directory" },
        { label: "Submit a Request", onClick: () => setIsRequestModalOpen(true) },
        { label: "Office Locations" },
        { label: "Hours of Operation" },
        { label: "Feedback Form" },
      ],
    },
  ];

  const newsAndEventsSections = [
    {
      title: "Latest Updates",
      items: [
        { label: "Latest News" },
        { label: "Public Notices" },
        { label: "Press Releases" },
        { label: "Emergency Updates" },
      ],
    },
    {
      title: "Civic Engagement",
      items: [
        { label: "Elections" },
        { label: "Meetings & Agendas" },
        { label: "Events Calendar" },
        { label: "Things to Do" },
      ],
    },
  ];

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <header
      className={`fixed ${isNotificationVisible ? 'top-12' : 'top-0'} left-0 right-0 z-40 h-24 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 dark:bg-[#002E45]/98 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          : "bg-white/70 dark:bg-[#002E45]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between w-full">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer z-50"
          onClick={() => {
            onNavigate("home");
            setIsMobileMenuOpen(false);
          }}
        >
          <img
            src={isDarkMode ? whiteLogo : darkLogo}
            alt="Washington County Logo"
            className="h-13 md:h-16 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <MegaMenu
            label="Services & Resources"
            sections={servicesAndResourcesSections}
          />
          <MegaMenu
            label="Departments"
            sections={departmentsSections}
          />
          <MegaMenu
            label="Recreation"
            sections={recreationSections}
          />
          <MegaMenu
            label="Jobs"
            sections={jobsSections}
          />
          <MegaMenu
            label="Contact"
            sections={contactSections}
          />
          <MegaMenu
            label="News & Events"
            sections={newsAndEventsSections}
          />
        </nav>

        {/* Right Side Tools */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-shrink-0">
          {/* Search Icon - visible on all mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="text-[#002E45] dark:text-[#E6F1F4] hover:text-[#F01A42] dark:hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 h-9 w-9 md:h-10 md:w-10"
            aria-label="Open search"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          {/* Theme Toggle - visible on all mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-[#002E45] dark:text-[#E6F1F4] hover:text-[#F01A42] dark:hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 h-9 w-9 md:h-10 md:w-10"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Moon className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </Button>

          {/* Language Selector - visible on all mobile */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 h-9 w-9 md:h-10 md:w-10 flex-shrink-0"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              sideOffset={8} 
              className="min-w-[120px]"
              avoidCollisions={true}
              collisionPadding={8}
            >
              <DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button - Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 h-9 w-9 md:h-10 md:w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Mega Dropdown Menu */}
      <div
        className={`lg:hidden fixed inset-0 ${isNotificationVisible ? 'top-24' : 'top-12'} bg-black/50 backdrop-blur-sm transition-opacity duration-300  ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div
        className={`lg:hidden fixed left-0 right-0 bg-background border-t border-border shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto ${isNotificationVisible ? 'top-32' : 'top-20'} ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{
          maxHeight: isNotificationVisible ? 'calc(100vh - 8rem)' : 'calc(100vh - 5rem)',
        }}
      >
        <div className="max-w-7xl mx-auto px-[16px] py-[24px] m-[0px]">
          <nav className="space-y-2">
            {/* Services & Resources */}
            <div className="border-b border-border/50 pb-2">
              <button
                onClick={() => toggleSection("Services & Resources")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-foreground bg-muted/50 hover:bg-muted rounded-xl transition-colors"
              >
                <span className="text-base">Services & Resources</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "Services & Resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === "Services & Resources"
                    ? "max-h-[800px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {servicesAndResourcesSections.map((section, idx) => (
                    <div key={idx} className="pl-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <Button
                            key={itemIdx}
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 text-sm py-5 px-4 rounded-xl transition-all"
                            onClick={() => {
                              if (item.onClick) item.onClick();
                              setIsMobileMenuOpen(false);
                              setExpandedSection(null);
                            }}
                          >
                            {item.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="border-b border-border/50 pb-2">
              <button
                onClick={() => toggleSection("Departments")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-foreground bg-muted/50 hover:bg-muted rounded-xl transition-colors"
              >
                <span className="text-base">Departments</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "Departments" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === "Departments"
                    ? "max-h-[1000px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {departmentsSections.map((section, idx) => (
                    <div key={idx} className="pl-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <Button
                            key={itemIdx}
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 text-sm py-5 px-4 rounded-xl transition-all"
                            onClick={() => {
                              if (item.onClick) item.onClick();
                              setIsMobileMenuOpen(false);
                              setExpandedSection(null);
                            }}
                          >
                            {item.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recreation */}
            <div className="border-b border-border/50 pb-2">
              <button
                onClick={() => toggleSection("Recreation")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-foreground bg-muted/50 hover:bg-muted rounded-xl transition-colors"
              >
                <span className="text-base">Recreation</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "Recreation" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === "Recreation"
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {recreationSections.map((section, idx) => (
                    <div key={idx} className="pl-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <Button
                            key={itemIdx}
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 text-sm py-5 px-4 rounded-xl transition-all"
                            onClick={() => {
                              if (item.onClick) item.onClick();
                              setIsMobileMenuOpen(false);
                              setExpandedSection(null);
                            }}
                          >
                            {item.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Jobs */}
            <div className="border-b border-border/50 pb-2">
              <button
                onClick={() => toggleSection("Jobs")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-foreground bg-muted/50 hover:bg-muted rounded-xl transition-colors"
              >
                <span className="text-base">Jobs</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "Jobs" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === "Jobs"
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-1">
                  {jobsSections[0].items.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 text-sm py-5 px-4 rounded-xl transition-all"
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setIsMobileMenuOpen(false);
                        setExpandedSection(null);
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="border-b border-border/50 pb-2">
              <button
                onClick={() => toggleSection("Contact")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-foreground bg-muted/50 hover:bg-muted rounded-xl transition-colors"
              >
                <span className="text-base">Contact</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "Contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === "Contact"
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-1">
                  {contactSections[0].items.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 text-sm py-5 px-4 rounded-xl transition-all"
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setIsMobileMenuOpen(false);
                        setExpandedSection(null);
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* News & Events */}
            <div className="pb-2">
              <button
                onClick={() => toggleSection("News & Events")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-foreground bg-muted/50 hover:bg-muted rounded-xl transition-colors"
              >
                <span className="text-base">News & Events</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    expandedSection === "News & Events" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSection === "News & Events"
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {newsAndEventsSections.map((section, idx) => (
                    <div key={idx} className="pl-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <Button
                            key={itemIdx}
                            variant="ghost"
                            className="w-full justify-start text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 text-sm py-5 px-4 rounded-xl transition-all"
                            onClick={() => {
                              if (item.onClick) item.onClick();
                              setIsMobileMenuOpen(false);
                              setExpandedSection(null);
                            }}
                          >
                            {item.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      {/* Submit Request Modal */}
      <SubmitRequestModal open={isRequestModalOpen} onOpenChange={setIsRequestModalOpen} />
    </header>
  );
}