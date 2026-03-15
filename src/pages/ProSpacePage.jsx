export default function ProSpacePage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Espace professionnel (Premium)</h1>
      <p className="section-subtitle">Un espace dédié aux cliniques et cabinets partenaires AfriSmile.</p>

      <section className="mt-6 rounded-2xl bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-dark">Contenus disponibles</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          <li>Prix professionnels réservés aux praticiens</li>
          <li>Promotions exclusives sur les équipements et consommables</li>
          <li>Documents techniques et guides d’utilisation</li>
        </ul>
        <a href="/contact" className="mt-5 inline-block rounded-lg bg-brand-blue px-4 py-2 font-semibold text-white">Demander un accès</a>
      </section>
    </main>
  )
}
