import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";

const priceData = [
  { type: "1 BHK", carpet: "450 Sq.Ft.", price: "₹ 49 Lacs* Onwards" },
  { type: "2 BHK", carpet: "711 Sq.Ft.", price: "₹ 76.50 Lacs* Onwards" },
  { type: "2 BHK", carpet: "720 Sq.Ft.", price: "₹ 77.50 Lacs* Onwards" },
  { type: "2 BHK", carpet: "730 Sq.Ft.", price: "₹ 78.50 Lacs* Onwards" },
  { type: "2.5 BHK", carpet: "825 Sq.Ft.", price: "₹ 88 Lacs* Onwards" },
  { type: "3 BHK", carpet: "1194 Sq.Ft.", price: "₹ 1.26 Cr* Onwards" },
  { type: "3 BHK", carpet: "1313 Sq.Ft.", price: "₹ 1.39 Cr* Onwards" },
];

export default function PriceTable() {
  const [showCostingDetails, setShowCostingDetails] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-[#1e3a8a]">Price</h2>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2">
         
          <div className="grid gap-4 lg:hidden">
            {priceData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center shadow-md"
              >
                <h3 className="text-xl font-bold">{item.type}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.carpet} (Carpet Area)
                </p>
                <p className="text-lg font-semibold mt-2">{item.price}</p>
                <button
                  className="mt-4 bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-900 transition-colors whitespace-nowrap"
                  onClick={() => {
                    setSelectedUnit(item.type);
                    setShowCostingDetails(true);
                  }}
                >
                  Price Breakup
                </button>
              </div>
            ))}
          </div>

         
          <div className="hidden lg:block">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left whitespace-nowrap">Type</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Carpet Area</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Price</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4">{item.carpet}</td>
                    <td className="py-3 px-4">{item.price}</td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap hover:bg-blue-900 transition-colors"
                        onClick={() => {
                          setSelectedUnit(item.type);
                          setShowCostingDetails(true);
                        }}
                      >
                        Price Breakup
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         
          <div className="mt-8 bg-[#0a0f2c] text-white py-4 text-center rounded-md">
            <h3 className="text-lg md:text-xl">Floors: G + 35 storeys (Shop and Parking)</h3>
          </div>
        </div>

        
        <div className="col-span-1">
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-full">
            <h3 className="bg-[#1e3a8a] text-white text-center py-2 rounded-md text-lg font-semibold">
              Complete Costing Details
            </h3>
            <div className="flex justify-center mt-4">
              <Image
                src="/map_price.png"
                alt="Complete Costing Details"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      
      <Dialog open={showCostingDetails} onOpenChange={setShowCostingDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Complete Costing Details - {selectedUnit}
            </DialogTitle>
          </DialogHeader>
          <Image
            src="/costing-details.jpg"
            alt="Costing Details"
            width={800}
            height={600}
            className="w-full rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
