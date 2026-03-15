export default function SolutionsPage() {
  const items = [
    'Conception complète de cabinet dentaire clé en main',
    'Installation et calibration des équipements',
    'Contrats de maintenance préventive et curative',
    'Formation de l’équipe à l’utilisation du matériel',
  ]

  return (
    <main className="container-page py-10">
      <h1 className="section-title">Solutions pour cabinets</h1>
      <p className="section-subtitle">Nous équipons les nouveaux cabinets et modernisons les structures existantes.</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded-xl bg-white p-5 shadow-soft">{item}</li>
        ))}
      </ul>
    </main>
  )
}
