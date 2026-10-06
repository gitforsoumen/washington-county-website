import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface MegaMenuSection {
  title: string;
  items: { label: string; onClick?: () => void }[];
}

interface MegaMenuProps {
  label: string;
  sections: MegaMenuSection[];
}

export default function MegaMenu({ label, sections }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 dark:bg-black/50 z-40 top-32 transition-opacity duration-300"
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
        />
      )}

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          variant="ghost"
          className={`text-[#002E45] dark:text-[#E6F1F4] hover:text-[#F01A42] dark:hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 font-semibold flex items-center space-x-1 transition-all duration-200 h-12 ${
            isOpen ? 'text-[#F01A42] bg-[#FFF5F7] dark:bg-[#F01A42]/10' : ''
          }`}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ease-out ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </Button>

        {/* Mega Menu Dropdown - Full Width */}
      <div
        className={`fixed left-0 right-0 top-24 transition-all duration-300 ease-out z-50 ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        role="menu"
        aria-label={`${label} menu`}
      >
        <div className="bg-white/98 dark:bg-[#002E45]/98 backdrop-blur-lg border-t border-b border-[#AEB0B5]/30 dark:border-[#05547A]/30 shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="max-w-7xl mx-auto px-8 py-12">
            {/* Title for the menu section */}
            <div className="mb-8 animate-fadeIn">
              <h2 className="text-2xl font-semibold text-[#002E45] dark:text-[#E6F1F4] mb-2">{label}</h2>
              <div className="h-1 w-16 bg-[#F01A42] rounded-lg"></div>
            </div>

            <div
              className={`grid gap-x-12 gap-y-10 ${
                sections.length === 1
                  ? 'grid-cols-1'
                  : sections.length === 2
                  ? 'grid-cols-2'
                  : sections.length === 3
                  ? 'grid-cols-3'
                  : sections.length === 4
                  ? 'grid-cols-4'
                  : sections.length === 5
                  ? 'grid-cols-3'
                  : sections.length === 6
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              }`}
            >
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-4 animate-fadeIn" style={{ animationDelay: `${idx * 50}ms` }}>
                  <h3 className="text-[#002E45] dark:text-[#E6F1F4] uppercase tracking-wider text-xs font-bold pb-2 border-b-2 border-[#F01A42]">
                    {section.title}
                  </h3>
                  <ul className="space-y-1" role="none">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} role="none">
                        <button
                          onClick={() => {
                            if (item.onClick) {
                              item.onClick();
                              setIsOpen(false);
                            }
                          }}
                          className="w-full text-left text-sm text-[#002E45] dark:text-[#AEB0B5] hover:text-[#F01A42] dark:hover:text-[#F01A42] hover:translate-x-1 transition-all duration-200 py-2 px-2 -mx-2 rounded-lg hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 group flex items-center font-medium focus:outline-none focus:ring-2 focus:ring-[#05547A] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#002E45]"
                          role="menuitem"
                        >
                          <span className="w-0 h-0.5 bg-[#F01A42] group-hover:w-3 transition-all duration-200 mr-0 group-hover:mr-2 rounded-full" aria-hidden="true"></span>
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
