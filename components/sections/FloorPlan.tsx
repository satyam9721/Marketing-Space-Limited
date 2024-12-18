import Image from "next/image";

const floorPlans = [
  {
    type: "1 BHK",
    area: "450 Sq.ft.",
    image: "/1BHK-450.jpg",
  },
  {
    type: "2 BHK",
    area: "711 Sq.ft.",
    image: "/2bhk.jpg",
  },
  {
    type: "2 BHK",
    area: "730 Sq.ft.",
    image: "/2bhk-730.jpg",
  },
  {
    type: "3 BHK",
    area: "1194 Sq.ft.",
    image: "/3bhk-1194.jpg",
  },
  {
    type: "3 BHK",
    area: "1313 Sq.ft.",
    image: "/3bhk-1313.jpg",
  },
];

export default function FloorPlan() {
  return (
    <section id="floor-plan" className="py-16 ">
      <div className="container mx-auto px-8">
   
        <h2 className="text-3xl font-bold text-start text-blue-800 mb-4">
          Site & Floor Plan Of Sai World Dreams
        </h2>

       
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-start">Master Plan</h3>
          <div className="flex justify-center">
            <Image
              src="/masterplan.jpg"
              alt="Master Plan"
              width={480}
              height={720}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

      
        <div>
          <h3 className="text-2xl font-semibold text-start mb-6">
            Floor Plans
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-lg overflow-hidden shadow-md"
              >
                
                <img
                  src={plan.image}
                  alt={`${plan.type} Floor Plan`}
                  className="w-full h-[250px] object-contain"
                />

                
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white text-lg font-semibold">
                    ENQUIRE NOW
                  </div>
                </div>

                
                <div className="bg-[#1e3a8a] text-white text-center py-2 text-lg font-semibold z-10">
                  {plan.type} - {plan.area}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
