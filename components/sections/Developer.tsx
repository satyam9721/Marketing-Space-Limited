import Image from 'next/image';

export default function Developer() {
  return (
    <section id="developer" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

       
        <div className="flex justify-center mb-6">
          <Image
            src="/navlar_logo.svg"
            alt="Navlar Logo"
            width={150}
            height={150}
            className="rounded-md object-contain"
          />
        </div>

  
        <h2 className="text-3xl font-bold mb-8 text-center">About Developer</h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <p className="text-gray-600 mb-6">
              Founded in 1990, Paradise Group develops luxury residential properties & retail malls across 
              the emerging locales of Mumbai & Navi Mumbai. With a firm presence in suburbs such as Kalyan, 
              Chembur, Dombivli, Kharghar, Taloja, & Panvel, the company has built a good niche for itself 
              in the city through the years.
            </p>
            
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">RERA Information</h3>
              <div className="flex gap-4 items-center">
              
                <Image
                  src="/qr code.webp" // Ensure the correct path
                  alt="QR Code"
                  width={150}
                  height={150}
                  className="rounded-md object-contain"
                />
             
                <div>
                  <p className="font-medium">Sai World Dreams</p>
                  <p className="text-gray-600">MahaRERA - P51700035191</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Sai World Dreams has been registered via MahaRERA registration number: P51800077358 
                    and is available on the website{' '}
                    <a 
                      href="https://maharera.mahaonline.gov.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      maharera.mahaonline.gov.in
                    </a>{' '}
                    under registered projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div></div>
        </div>
      </div>
    </section>
  );
}
