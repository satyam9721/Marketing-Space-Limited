import { MapPin } from 'lucide-react';
import Image from 'next/image';

const landmarks = [
  { name: "Kalyan Taloja Metro", time: "2 mins" },
  { name: "Dombivli Railway Station", time: "15 mins" },
  { name: "Navi Mumbai Airport", time: "30 mins" },
  { name: "Multimodal Corridor", time: "5 mins" },
  { name: "D-Mart Kalyan", time: "10 mins" },
  { name: "LODHA Xperia Mall", time: "10 mins" },
];

export default function Location() {
  return (
    <section id="location" className="py-16 bg-white shadow-lg rounded-md ">
      <div className="container mx-auto px-6 md:px-5">
       
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Address Of Sai World Dreams</h2>

       
        <div className="grid gap-8">
         
          <div className="grid md:grid-cols-2 gap-8">
           
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.666053048659!2d73.1234567!3d19.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzM0LjUiTiA3M8KwMDcnMzQuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md"
              />
            </div>

           
            <div>
              <div className="text-right mb-4">
                <h3 className="text-xl font-semibold text-gray-700">Location Map</h3>
              </div>
              <div className="flex justify-end mb-6">
                <Image
                  src="/Location_map.png"
                  alt="Location Map"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {landmarks.map((landmark, index) => (
              <div key={index} className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-800" />
                <div>
                  <p className="font-medium text-gray-800">{landmark.name}</p>
                  <p className="text-sm text-gray-600">{landmark.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
