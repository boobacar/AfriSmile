export default function EspaceProPage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Espace professionnel</h1>
      <p className="section-subtitle">Accès premium réservé aux cliniques, cabinets partenaires et distributeurs.</p>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-xl font-bold text-brand-dark">Bientôt disponible (accès sécurisé)</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>Tarifs professionnels personnalisés selon volume d’achat</li>
          <li>Promotions privées et offres pack cabinet</li>
          <li>Documentation technique: manuels, fiches de maintenance, procédures SAV</li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">Placeholder: cette zone sera connectée à un système de connexion client (compte pro).</p>
      </section>
    </main>
  )
}
