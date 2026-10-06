import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import AnimatedButton from './AnimatedButton';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-12 md:py-16 bg-[#E6F1F4] dark:bg-[#132F4C]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F01A42] rounded-lg flex items-center justify-center shadow-md">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#002E45] dark:text-[#E6F1F4]">Stay Connected</h2>
            </div>
            
            <p className="text-base md:text-lg text-[#6B7280] dark:text-[#AEB0B5] leading-relaxed">
              Get the latest county news and updates delivered to your inbox. 
              Stay informed about important announcements, community events, 
              and government services that matter to you.
            </p>

            <ul className="mt-6 space-y-2" role="list">
              <li className="flex items-center space-x-3 text-sm text-[#002E45] dark:text-[#E6F1F4]">
                <div className="w-2 h-2 bg-[#F01A42] rounded-full flex-shrink-0" aria-hidden="true"></div>
                <span>Weekly newsletter with county updates</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-[#002E45] dark:text-[#E6F1F4]">
                <div className="w-2 h-2 bg-[#F01A42] rounded-full flex-shrink-0" aria-hidden="true"></div>
                <span>Emergency alerts and notifications</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-[#002E45] dark:text-[#E6F1F4]">
                <div className="w-2 h-2 bg-[#F01A42] rounded-full flex-shrink-0" aria-hidden="true"></div>
                <span>Community event announcements</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Subscription Form */}
          <div className="bg-white dark:bg-[#002E45] p-6 md:p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-[#AEB0B5]/20 dark:border-[#05547A]/30">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-base font-medium text-[#002E45] dark:text-[#E6F1F4] mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full h-12"
                  aria-required="true"
                  aria-describedby="email-description"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#F01A42] hover:bg-[#D01638] text-white h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 font-semibold"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>

              <p id="email-description" className="text-xs text-[#6B7280] dark:text-[#AEB0B5] text-center leading-relaxed">
                By subscribing, you agree to receive emails from Washington County. 
                You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}