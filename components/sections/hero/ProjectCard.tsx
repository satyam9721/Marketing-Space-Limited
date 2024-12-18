"use client";

import { ProjectDetails } from './ProjectDetails';
import { ProjectOffers } from './ProjectOffers';
import { ProjectPricing } from './ProjectPricing';
import { DownloadBrochure } from './DownloadBrochure';

export function ProjectCard() {
  return (
    <div className="absolute left-0 h-fit right-0 bottom-0 lg:top-1/2 lg:left-4 lg:right-auto lg:-translate-y-1/2 bg-white/95 p-4  lg:p-4 lg:mb-4 rounded-t-lg lg:rounded-lg shadow-lg lg:max-w-md mx-4 lg:mx-0">
      <div className="absolute -top-10 left-0 right-0 lg:left-auto  lg:right-auto">
        <div className="bg-[#1e3a8a] text-white py-2 rounded-t-lg  px-4 inline-block text-sm lg:text-base">
          Booking Open: Limited Time Only
        </div>
      </div>
      
      <h1 className="text-xl lg:text-2xl font-bold mb-2 mt-4">Sai World Dreams</h1>
      <p className="text-gray-600 mb-4 text-sm lg:text-base">At Kalyan-Shil Road By Paradise Group</p>
      
      <ProjectDetails />
      <ProjectOffers />
      <ProjectPricing />
      <DownloadBrochure />
    </div>
  );
}