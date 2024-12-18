import { Play } from 'lucide-react';

export default function VirtualTour() {
  return (
    <section id="virtual-tour" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Virtual Tour Of Sai World Dreams</h2>
        
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src="/virtual-tour-thumbnail.jpg" 
            alt="Virtual Tour Thumbnail"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              onClick={() => {
                // Handle virtual tour launch
              }}
            >
              <Play className="h-8 w-8 text-blue-800 ml-1" />
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl font-bold mb-4">VIRTUAL TOUR</h3>
              <p className="text-2xl">Sai World Dreams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}