import { site } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 xl:bottom-5 xl:right-5 z-30 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#0d6e63]"
    >
      <span aria-hidden="true">WhatsApp</span>
      <span className="sr-only">Chat with Kishor Career Point on WhatsApp</span>
    </a>
  );
}
