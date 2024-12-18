"use client";

import { Download } from 'lucide-react';

export function DownloadBrochure() {
  return (
    <button className="relative bg-[#1e3a8a] cursor-pointer text-white px-6 py-3 rounded-md flex items-center gap-2 justify-center w-fit overflow-hidden group">
    
    <Download
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-12"
    />
    
   
    <span className="transition-all duration-300 group-hover:translate-x-1">
      Download Brochure
    </span>
  
    
    <div className="absolute inset-0 bg-white opacity-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
  </button>
  
  
  );
}