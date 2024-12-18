"use client";

import { navigationItems } from '@/lib/constants/navigation';
import { useActiveSection } from '@/hooks/use-active-section';

export function DesktopNav() {
  const activeSection = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:block px-3">
      <ul className="flex items-center gap-4">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeSection === item.id
                  ? 'text-[#1e3a8a] font-bold text-white p-3 bg-[#1e3a8a]'
                  : 'text-gray-600 hover:text-[#1e3a8a]'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
