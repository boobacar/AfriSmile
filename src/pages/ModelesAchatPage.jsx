export default function ModelesAchatPage() {
  return (
    <main className="container-page py-10">
      <h1 className="section-title">Modèles d’achat</h1>
      <p className="section-subtitle">AfriSmile propose un parcours flexible selon vos besoins opérationnels.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl bg-white p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-cyan">Modèle par défaut</p>
          <h2 className="mt-1 text-xl font-bold text-brand-dark">Catalogue + devis personnalisé</h2>
          <p className="mt-2 text-slate-600">Le client consulte les gammes, sélectionne les produits et reçoit un devis adapté (installation, SAV, délais).</p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-cyan">Option roadmap e-commerce</p>
          <h2 className="mt-1 text-xl font-bold text-brand-dark">Paiement en ligne (optionnel)</h2>
          <p className="mt-2 text-slate-600">Activation progressive d’un tunnel d’achat en ligne pour produits éligibles, avec paiement sécurisé et suivi de commande.</p>
        </section>
      </div>
    </main>
  )
}
