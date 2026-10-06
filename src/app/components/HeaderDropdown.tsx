import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu@2.1.6";
import { cn } from './ui/utils';

interface HeaderDropdownProps {
  label: string;
  items: string[];
  onItemClick: (item: string) => void;
}

export default function HeaderDropdown({ label, items, onItemClick }: HeaderDropdownProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button 
          variant="ghost" 
          className="text-foreground hover:text-[#F01A42] hover:bg-[#FFF5F7] dark:hover:bg-[#F01A42]/10 font-medium flex items-center space-x-1"
        >
          <span>{label}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuPrimitive.Trigger>
      
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="start"
          sideOffset={8}
          className={cn(
            "bg-popover text-popover-foreground z-50 w-56 rounded-xl border p-1 shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100",
            "data-[side=bottom]:slide-in-from-top-1",
            "origin-top-left will-change-transform"
          )}
        >
          {items.map((item) => (
            <DropdownMenuPrimitive.Item
              key={item}
              onClick={() => onItemClick(item)}
              className={cn(
                "relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "select-none transition-colors",
                "focus:bg-accent focus:text-accent-foreground",
                "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              )}
            >
              {item}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}