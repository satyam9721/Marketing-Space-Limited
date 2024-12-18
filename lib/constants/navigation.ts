import {
  Home,
  IndianRupee,
  LayoutTemplate,
  Wifi,
  MapPin,
  Image,
  Video,
  FileDown,
} from 'lucide-react';

export const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'price', label: 'Price', icon: IndianRupee },
  { id: 'floor-plan', label: 'Site & Floor Plan', icon: LayoutTemplate },
  { id: 'amenities', label: 'Amenities', icon: Wifi },
  { id: 'location', label: 'Location', icon: MapPin },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'virtual-tour', label: 'Virtual Tour', icon: Video },
  { id: 'brochure', label: 'Brochure', icon: FileDown },
] as const;
