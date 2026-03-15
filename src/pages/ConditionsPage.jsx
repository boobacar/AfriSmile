import PageHero from '../components/PageHero'

export default function ConditionsPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Informations contractuelles"
        title="Conditions générales"
        subtitle="Ces conditions définissent le cadre de vente, livraison, installation et service après-vente des produits AfriSmile."
        image="/assets/illustration-instruments.jpg"
      />

      <section className="section-shell space-y-4 text-slate-700">
        <p>Les présentes conditions définissent les règles de vente, livraison, installation et service après-vente des produits AfriSmile.</p>
        <p>Les prix affichés sont indicatifs et peuvent être ajustés selon configuration, disponibilité et services associés.</p>
        <p>Toute commande est confirmée après validation d’un devis signé.</p>
      </section>
    </main>
  )
}
