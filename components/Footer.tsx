export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Disclaimer:</span> The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
          </p>
        </div>
        
        <div className="border-t border-gray-300 pt-4">
          <div className="text-center text-sm text-gray-600">
            <span>© Copyright</span>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 hover:underline">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}