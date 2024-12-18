"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: LucideIcon;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavItem({ icon: Icon, text, isActive, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 transition-colors",
        isActive ? "text-blue-800 font-medium" : "text-gray-700 hover:text-blue-800"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </button>
  );
}