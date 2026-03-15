export default function SolutionsPage() {
  const items = [
    'Installation de cabinet: fauteuil, compresseur, autoclave, mobilier',
    'Pack ouverture cabinet pour jeunes dentistes',
    'Pack cabinet starter: fauteuil dentaire + compresseur + autoclave + turbine',
    'Accompagnement sur le choix du matériel selon budget et volume de patients',
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
