import { useState } from 'react';

export default function QuoteForm() {
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
    <div className=" ">
      <h3 className="text-lg font-semibold mb-2 text-center">Get The Best Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
  <input
    type="text"
    placeholder="Name"
    className="w-full px-2 py-2 border-b bg-gray-50 border-gray-400 focus:outline-none focus:border-blue-600 transition-all"
    value={formData.name}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, name: e.target.value }))
    }
  />
  <div className="flex gap-0">
    <select className="w-24 px-2 py-2 border-b bg-gray-50 border-gray-400 bg-transparent focus:outline-none focus:border-blue-600 transition-all">
      <option value="+91">+91</option>
    </select>
    <input
      type="tel"
      placeholder="Mobile No."
      className="flex-1 px-2 py-2 border-b bg-gray-50 border-gray-400 focus:outline-none focus:border-blue-600 transition-all"
      value={formData.mobile}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, mobile: e.target.value }))
      }
    />
  </div>
  <input
    type="email"
    placeholder="Email ID"
    className="w-full px-2 py-2 border-b bg-gray-50 border-gray-400 focus:outline-none focus:border-blue-600 transition-all"
    value={formData.email}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, email: e.target.value }))
    }
  />
  <div className="text-center mt-4">
    <button
      type="submit"
      className="w-fit px-10 py-2 bg-[#1e3a8a] text-white rounded-md font-semibold hover:bg-blue-900 transition-colors"
    >
      Submit
    </button>
  </div>
</form>

    </div>
  );
}