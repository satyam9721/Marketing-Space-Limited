import { Check } from 'lucide-react';

const highlights = [
  "Spin The Wheel Offers",
  "Early Buy Discounts",
  "Assured Gift On Every Booking"
];

export function ProjectHighlights() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-semibold mb-4">Project Highlights</h3>
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}