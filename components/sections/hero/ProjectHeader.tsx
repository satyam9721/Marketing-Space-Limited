"use client";

import { MobileNav } from '@/components/MobileNav';
import { DesktopNav } from '@/components/DesktopNav';
import Image from 'next/image';

export function ProjectHeader() {
  return (
    <header className=" top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="container">
        <div className="flex items-center justify-evenly">
          <div className="flex items-center ">
            <Image
              src="/navlar_logo.svg" 
              alt="Paradise Group Logo" 
              className="h-12"
              width={480}
              height={720}
            />
            <div>
         
            </div>
          </div>

          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}