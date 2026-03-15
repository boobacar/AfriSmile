import PageHero from '../components/PageHero'

export default function PrivacyPage() {
  return (
    <main className="container-page page-wrap space-y-8">
      <PageHero
        eyebrow="Protection des données"
        title="Politique de confidentialité"
        subtitle="AfriSmile traite vos informations avec transparence et sécurité pour répondre à vos demandes de contact et devis."
        image="/assets/illustration-clinic.jpg"
      />

      <section className="section-shell space-y-4 text-slate-700">
        <p>AfriSmile collecte uniquement les données nécessaires au traitement des demandes de contact et devis.</p>
        <p>Les informations ne sont pas revendues à des tiers et sont utilisées pour le suivi commercial et technique.</p>
        <p>Vous pouvez demander l’accès, la rectification ou la suppression de vos données via contact@afrismile.com.</p>
      </section>
    </main>
  )
}
