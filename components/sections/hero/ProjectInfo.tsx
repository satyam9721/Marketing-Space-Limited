import { Building2, Calendar } from 'lucide-react';

const projectDetails = [
  { label: "Land Parcel", value: "18 Acres" },
  { label: "Floors", value: "G+35 storeys" },
  { label: "Possession", value: "December 2026" }
];

export function ProjectInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-3 gap-4">
        {projectDetails.map((detail, index) => (
          <div key={index} className="text-center">
            <p className="text-gray-600 text-sm">{detail.label}</p>
            <p className="font-semibold mt-1">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}