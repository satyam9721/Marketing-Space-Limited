import Image from "next/image";
export default function SiteVisit() {
  return (
    <div className="text-center">
      <Image
        src="/Car_sidebar.png"
        alt="Paradise Group Logo"
        width={320}
        height={680}
        className="object-contain"
      />

      <button className="w-fit bg-[#1e3a8a] px-2  text-white py-3 text-sm rounded-md font-semibold hover:bg-blue-900 transition-colors">
        Book A Free Site Visit
      </button>
    </div>
  );
}
