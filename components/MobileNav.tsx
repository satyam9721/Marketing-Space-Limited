"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/lib/constants/navigation';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 py-2">
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-2 px-4 text-gray-600 hover:text-[#1e3a8a] hover:bg-gray-50 rounded-md transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}