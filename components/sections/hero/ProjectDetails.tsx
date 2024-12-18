"use client";

interface ProjectDetailItemProps {
  label: string;
  value: string;
}

function ProjectDetailItem({ label, value }: ProjectDetailItemProps) {
  return (
    <div className="text-sm lg:text-base">
      <div className="text-gray-600">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

export function ProjectDetails() {
  const details = [
    { label: "Land Parcel", value: "18 Acres" },
    { label: "Floors", value: "G+35 storeys" },
    { label: "Possession", value: "December 2026" }
  ];

  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 lg:gap-4 mb-4 lg:mb-6">
      {details.map((detail) => (
        <ProjectDetailItem 
          key={detail.label}
          label={detail.label}
          value={detail.value}
        />
      ))}
    </div>
  );
}