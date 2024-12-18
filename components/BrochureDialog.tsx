"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Car, IndianRupee } from "lucide-react";
import Image from "next/image";

interface BrochureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BrochureDialog({
  open,
  onOpenChange,
}: BrochureDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-lg p-4 md:p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Request Brochure
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-center mb-4">
          <Image
            src="/navlar_logo.svg"
            alt="Paradise Group Logo"
            width={240}
            height={60}
            className="h-10 md:h-12 w-auto"
          />
        </div>

        <div className="text-center mb-4">
          <h3 className="text-sm md:text-lg font-semibold">
            Register Here And Avail The{" "}
            <span className="text-red-500 font-bold">Best Offers!!</span>
          </h3>
        </div>

        <div className="mb-4">
          <h4 className="text-md md:text-lg font-semibold mb-2">We Promise</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm md:text-base">
              <Phone className="h-5 w-5 text-blue-800" />
              <span>Instant Call Back</span>
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base">
              <Car className="h-5 w-5 text-blue-800" />
              <span>Free Site Visit</span>
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base">
              <IndianRupee className="h-5 w-5 text-blue-800" />
              <span>Unmatched Price</span>
            </div>
          </div>
        </div>

        <form className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 border-b border-gray-400 bg-transparent w-20 focus:outline-none focus:border-blue-600">
              <option value="+91">+91</option>
            </select>
            <input
              type="tel"
              placeholder="Mobile No."
              className="flex-1 px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-3 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1e3a8a] text-white py-2 rounded-md font-semibold hover:bg-blue-900 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="tel:+919619095795" className="text-blue-800 font-semibold">
            +91 9619095795
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
