import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/221770000000?text=Bonjour%20AfriSmile%2C%20je%20souhaite%20un%20devis."
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter AfriSmile sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-raised transition hover:brightness-95"
    >
      <MessageCircle size={18} />
      WhatsApp Devis
    </a>
  )
}
