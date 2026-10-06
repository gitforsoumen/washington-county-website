import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button'
}: AnimatedButtonProps) {
  const baseClasses = "w-[180px] h-[60px] rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out font-medium";
  
  const variantClasses = {
    primary: "bg-[#007C91] hover:bg-[#006175] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-50 text-[#003366] border-2 border-[#003366] hover:bg-[#003366] hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
    >
      <div className="flex items-center justify-center h-full relative">
        {/* Text container that slides left on hover */}
        <span className="transition-transform duration-300 ease-in-out group-hover:-translate-x-3">
          {children}
        </span>
        
        {/* Arrow that appears from the right on hover */}
        <ArrowRight 
          className="w-5 h-5 absolute right-4 opacity-0 translate-x-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0" 
        />
      </div>
    </button>
  );
}