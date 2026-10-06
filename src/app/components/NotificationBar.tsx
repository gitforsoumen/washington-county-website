import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface NotificationBarProps {
  onDismiss?: () => void;
}

export default function NotificationBar({ onDismiss }: NotificationBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[rgb(240,26,66)] text-white min-h-12 flex items-center justify-center fixed top-0 left-0 right-0 z-50 shadow-md py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 w-full flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          <AlertTriangle className="w-4 h-4 text-white flex-shrink-0 hidden sm:block" aria-hidden="true" />
          <span className="text-xs sm:text-sm truncate sm:whitespace-normal">
            <span className="hidden sm:inline">Election Day Information: Polling locations and hours are now available.</span>
            <span className="sm:hidden">Election Day Info Available</span>
            {' '}
            <a 
              href="#" 
              className="underline hover:text-white/90 hover:no-underline focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#F01A42] rounded transition-colors whitespace-nowrap"
            >
              Learn more
            </a>
          </span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleDismiss}
          className="text-white hover:bg-white/20 h-8 w-8 flex-shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </Button>
      </div>
    </div>
  );
}