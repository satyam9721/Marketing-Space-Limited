"use client";

export function ProjectOffers() {
  const offers = [
    "Spin The Wheel Offers",
    "Early Buy Discounts",
    "Assured Gift On Every Booking"
  ];

  return (
    <div className="border border-[#1e3a8a] p-4 rounded mb-6">
      <ul className="space-y-2">
        {offers.map((offer) => (
          <li key={offer}>- {offer}</li>
        ))}
      </ul>
    </div>
  );
}