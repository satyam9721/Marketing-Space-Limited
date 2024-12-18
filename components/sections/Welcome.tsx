import { DownloadBrochure } from './hero/DownloadBrochure';

export default function Welcome() {
  return (
    <section className="py-12 container mx-auto px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Welcome To Sai World Dreams</h2>
        
        <div className="prose prose-lg max-w-none mb-8 text-gray-700">
          <p>
            Nestled in the vibrant lanes of Dombivli, Sai World Dream is a stunning township featuring luxurious residences, commercial parks, and high-street retail spaces. The newly launched Breeze tower presents spacious themed luxury apartments in 1, 2, 2.5, and 3 BHK configurations, complete with an array of lifestyle amenities. Residents can enjoy unique features like a karaoke room and private theater, alongside essential facilities such as a library, souvenir shop, toddler play areas, bar and café, and a business center.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row mb-3 items-center">
          <button className="text-[#1e3a8a] font-medium hover:underline">
            Read more
          </button>
         
        </div>
        <DownloadBrochure />
      </div>
    </section>
  );
}