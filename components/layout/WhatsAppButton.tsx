import { site } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Kishor Career Point on WhatsApp"
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-30 inline-flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#25d366] text-white shadow-[0_8px_20px_-6px_rgba(18,140,126,0.7)] transition hover:scale-105 hover:bg-[#128c7e] xl:bottom-5 xl:right-5 xl:h-auto xl:w-auto xl:px-4 xl:py-3"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
        <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.9a8 8 0 0 1-4.1-1.1l-.3-.2-2.900.8.8-2.800-.2-.3a8.100 8.100 0 1 1 6.700 3.600Zm4.400-6c-.2-.1-1.400-.7-1.600-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100a6.600 6.600 0 0 1-3.300-2.900c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.4l-.7-1.700c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.100-.7.300-.2.300-.9.900-.9 2.200s.9 2.500 1 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.8 3.100.6.500-.1 1.400-.6 1.600-1.200.2-.6.200-1.100.1-1.200 0-.1-.2-.2-.5-.4Z" />
      </svg>
      <span className="hidden text-sm font-semibold xl:inline">WhatsApp</span>
    </a>
  );
}
