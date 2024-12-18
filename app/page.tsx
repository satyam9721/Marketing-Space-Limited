"use client";

import { useState, useEffect } from "react";

import Sidebar from "@/components/Sidebar";
import BrochureDialog from "@/components/BrochureDialog";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import PriceTable from "@/components/PriceTable";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import FloorPlan from "@/components/sections/FloorPlan";
import VirtualTour from "@/components/sections/VirtualTour";
import Developer from "@/components/sections/Developer";
import Footer from "@/components/Footer";
import { ProjectHeader } from "@/components/sections/hero/ProjectHeader";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex">
      <main className="flex-1 min-h-screen bg-white lg:pr-[320px]">
        <div className="sticky top-0 z-20">
          <ProjectHeader />
        </div>
        <Hero />
        <Welcome />
        <section id="price" className="container mx-auto px-4 py-16">
          <PriceTable />
        </section>
        <FloorPlan />
        <Amenities />
        <Gallery />
        <Location />
        <VirtualTour />
        <Developer />
        <Footer />
        <BrochureDialog open={showDialog} onOpenChange={setShowDialog} />
      </main>
      <Sidebar />
    </div>
  );
}
