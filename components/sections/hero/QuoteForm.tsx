"use client";

import { useState } from 'react';

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6">Get The Best Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border rounded-md w-24">
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile No."
            className="flex-1 px-4 py-2 border rounded-md"
            value={formData.mobile}
            onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#1e3a8a] text-white py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}