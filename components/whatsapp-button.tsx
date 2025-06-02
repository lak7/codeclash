import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://chat.whatsapp.com/HuYOZesGsgT96it0pR6r0O"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Join our WhatsApp group"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="group-hover:animate-pulse"
      />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Join CodeClash WhatsApp Group
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </Link>
  );
}
