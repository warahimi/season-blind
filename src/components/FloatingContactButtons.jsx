import { Phone, MessageCircle, MessageSquare } from "lucide-react";
import { brand } from "../data/siteData";

const phoneNumber = brand.phone.replace(/\D/g, "");
const messageText = encodeURIComponent(
  "Hello Season Blinds, I would like to request a free measurement and quote.",
);

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Now */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#F26A00] text-white shadow-lg transition hover:scale-110 hover:bg-[#d85f00]"
        title="Call Now"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${messageText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
        title="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Text Message */}
      <a
        href={`sms:${phoneNumber}?body=${messageText}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#5A3827] text-white shadow-lg transition hover:scale-110 hover:bg-[#3f261a]"
        title="Text Message"
      >
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
