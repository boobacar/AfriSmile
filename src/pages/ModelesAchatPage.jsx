export default function ModelesAchatPage() {
  return (
    <main className="container-page page-wrap">
      <h1 className="section-title">Modèles d’achat</h1>
      <p className="section-subtitle">AfriSmile propose un parcours flexible selon vos besoins opérationnels.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="card">
          <p className="chip inline-block">Modèle par défaut</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-brand-dark">Catalogue + devis personnalisé</h2>
          <p className="mt-2 text-slate-600">Le client consulte les gammes, sélectionne les produits et reçoit un devis adapté (installation, SAV, délais).</p>
        </section>

        <section className="card">
          <p className="chip inline-block">Option roadmap e-commerce</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-brand-dark">Paiement en ligne (optionnel)</h2>
          <p className="mt-2 text-slate-600">Activation progressive d’un tunnel d’achat en ligne pour produits éligibles, avec paiement sécurisé et suivi de commande.</p>
        </section>
      </div>
    </main>
  )
}
