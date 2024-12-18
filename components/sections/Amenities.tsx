"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const amenities = [
  {
    title: "GYMNASIUM",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
  },
  {
    title: "INDOOR GAME ROOM",
    image: "/Indoor_game.jpg",
  },
  {
    title: "SEATING PAVILION",
    image: "/Stealing_pavlion.png",
  },
  {
    title: "HEALTH CLUB",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80",
  },
  {
    title: "INFINITY POOL",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80",
  },
  {
    title: "JOGGING TRACK",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80",
  },
  // Duplicated images for carousel functionality
  {
    title: "GYMNASIUM",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
  },
  {
    title: "INDOOR GAME ROOM",
    image: "/Indoor_game.jpg",
  },
  {
    title: "SEATING PAVILION",
    image: "/Stealing_pavlion.png",
  },
];

export default function Amenities() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % amenities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + amenities.length) % amenities.length);
  };

  // Automatic Carousel Effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="amenities" className="py-16 ">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-start">
          Amenities Of Sai World Dreams
        </h2>

        <div className="relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {amenities.slice(currentSlide, currentSlide + 6).map((amenity, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-md">
                  <span className="font-semibold">{amenity.title}</span>
                </div>
              </div>
            ))}
          </div>

        
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
