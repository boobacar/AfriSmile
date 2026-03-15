export default function AboutPage() {
  return (
    <main className="container-page page-wrap">
      <h1 className="section-title">À propos d’AfriSmile</h1>
      <div className="card mt-6">
        <p className="text-slate-700">
          AfriSmile est une entreprise spécialisée dans l’équipement dentaire en Afrique de l’Ouest.
          Notre mission est d’offrir des solutions fiables, accessibles et adaptées aux réalités des cabinets locaux.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 p-4">
            <h2 className="font-semibold text-brand-dark">Mission</h2>
            <p className="mt-2 text-sm text-slate-600">Fournir des équipements et consommables dentaires certifiés avec un accompagnement technique complet.</p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h2 className="font-semibold text-brand-dark">Vision</h2>
            <p className="mt-2 text-sm text-slate-600">Devenir la référence de confiance pour l’équipement des cabinets dentaires en Afrique de l’Ouest.</p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h2 className="font-semibold text-brand-dark">Présence régionale</h2>
            <p className="mt-2 text-sm text-slate-600">Interventions et accompagnement commercial dans plusieurs marchés d’Afrique de l’Ouest.</p>
          </article>
          <article className="rounded-xl border border-slate-200 p-4">
            <h2 className="font-semibold text-brand-dark">Expertise métier</h2>
            <p className="mt-2 text-sm text-slate-600">Connaissance terrain des besoins cliniques, de la maintenance et des contraintes d’exploitation.</p>
          </article>
        </div>
      </div>
    </main>
  )
}
