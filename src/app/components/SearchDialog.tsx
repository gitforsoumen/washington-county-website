import React, { useState, useEffect, useRef } from 'react';
import { Search, Clock, FileText, Building, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const searchSuggestions = [
  { title: 'Property Tax Information', category: 'Property Services', icon: FileText },
  { title: 'Building Permits', category: 'Permits & Licenses', icon: Building },
  { title: 'Court Calendar', category: 'Legal & Safety', icon: FileText },
  { title: 'Public Records Request', category: 'Public Records', icon: FileText },
  { title: 'Community Development', category: 'Departments', icon: Building },
  { title: 'Events Calendar', category: 'News & Events', icon: FileText },
  { title: 'Tax Assessment', category: 'Property Services', icon: FileText },
  { title: 'Business Licenses', category: 'Permits & Licenses', icon: Building },
  { title: 'Emergency Management', category: 'Public Services', icon: Users },
  { title: 'Meetings & Agendas', category: 'Civic Engagement', icon: FileText },
];

const popularSearches = ['Property Tax', 'Building Permits', 'Court Calendar', 'Events', 'Public Records'];

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof searchSuggestions>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchSuggestions.filter(
        (suggestion) =>
          suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          suggestion.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    onOpenChange(false);
  };

  const handleSuggestionClick = (title: string) => {
    setSearchQuery(title);
    setShowSuggestions(false);
    console.log('Selected:', title);
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[selectedIndex].title);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[650px] rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Search Washington County</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Search for services, departments, and information across Washington County
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground z-10" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for services, departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10 sm:pl-12 pr-3 sm:pr-4 h-12 sm:h-14 rounded-xl text-sm sm:text-base border-2 focus:border-[#007C91]"
              autoFocus
              aria-label="Search input"
              aria-autocomplete="list"
              aria-controls="search-suggestions"
              aria-expanded={showSuggestions}
            />
            
            {/* Auto-suggest Dropdown */}
            {showSuggestions && (
              <div
                id="search-suggestions"
                role="listbox"
                className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg max-h-60 sm:max-h-80 overflow-y-auto z-50"
              >
                {filteredSuggestions.map((suggestion, index) => {
                  const Icon = suggestion.icon;
                  return (
                    <button
                      key={index}
                      type="button"
                      role="option"
                      aria-selected={index === selectedIndex}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-muted flex items-center gap-2 sm:gap-3 transition-colors border-b border-border last:border-b-0 ${
                        index === selectedIndex ? 'bg-muted' : ''
                      }`}
                      onClick={() => handleSuggestionClick(suggestion.title)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#007C91]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#007C91]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground text-sm sm:text-base truncate">{suggestion.title}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground truncate">{suggestion.category}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Popular searches:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {popularSearches.map((term) => (
                <Button
                  key={term}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-xl hover:bg-[#007C91]/10 hover:text-[#007C91] hover:border-[#007C91] transition-colors text-xs sm:text-sm px-2.5 sm:px-3 h-8 sm:h-9"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
