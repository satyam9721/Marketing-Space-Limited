import { Phone } from "lucide-react";

export default function CallbackButtons() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1 flex-nowrap text-sm">
        <button className="w-fit bg-[#424242] text-white  rounded-bl-lg py-2 px-1 flex items-center justify-center gap-2 whitespace-nowrap hover:bg-blue-900 transition-colors">
          <Phone className="h-4 w-4" />
          Organize Site Visit
        </button>
        <button className="w-fit bg-[#424242] text-white flex rounded-br-lg  py-2 px-[1px]  items-center justify-center gap-2 whitespace-nowrap hover:bg-blue-900 transition-colors">
          <Phone className="h-4 w-4" />
          +919619095795
        </button>
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-[#1e3a8a] w-fit text-white px-2 py-2 rounded-md flex text-sm items-center justify-center gap-2 hover:bg-blue-900 transition-colors">
          <Phone className="h-4 w-4" />
          Request Call Back
        </button>
      </div>
    </div>
  );
}
