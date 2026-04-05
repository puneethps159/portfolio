import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918431197599?text=Hello%20Puneeth%20Kumar%2C%20I%20need%20civil%20work%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-black/30 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
    >
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      <MessageCircle className="h-5 w-5" />
    </a>
  );
};

export default FloatingWhatsApp;
