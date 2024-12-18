"use client";

import { ProjectHeader } from './hero/ProjectHeader';
import { ProjectCard } from './hero/ProjectCard';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen">

  
    <div className="relative h-screen">
      <div className="absolute inset-0 from-black/50 to-transparent z-10" />
      <Image 
        src="/building.png" 
        alt="Sai World Dreams"
        fill
        priority
        className="object-cover"
      />
      <ProjectCard />
    </div>
  </section>
  
  );
}