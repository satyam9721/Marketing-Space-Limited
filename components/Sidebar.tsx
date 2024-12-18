import QuoteForm from './sidebar/QuoteForm';
import SiteVisit from './sidebar/SiteVisit';
import CallbackButtons from './sidebar/CallbackButtons';

export default function Sidebar() {
  return (
    <div className="w-[320px] bg-gray-50 px-4 fixed top-0 right-0 h-screen overflow-hidden hidden lg:block">
      <CallbackButtons />
      <QuoteForm />
      <SiteVisit />
    </div>
  );
}
