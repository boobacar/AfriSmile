import PageHero from '../components/PageHero'

export default function MentionsPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Cadre légal"
        title="Mentions légales"
        subtitle="Les informations ci-dessous précisent l’identité de l’éditeur, les contacts et les informations d’hébergement du site AfriSmile."
        image="/assets/page-legal.jpg"
      />

      <section className="section-shell space-y-3 text-slate-700">
        <p><strong>Éditeur :</strong> AfriSmile, Liberté 06 Cité CSE Villa 72, Dakar, Sénégal.</p>
        <p><strong>Contact :</strong> contact@afrismile.net | +221 78 438 93 93</p>
        <p><strong>Hébergement :</strong> à compléter selon votre fournisseur.</p>
      </section>
    </main>
  )
}
