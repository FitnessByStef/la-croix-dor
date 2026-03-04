// src/pages/LegalPage.tsx
import { Helmet } from "react-helmet-async";

export default function LegalPage() {
  return (
    <section className="bg-background">
      <Helmet>
        <title>Mentions légales – LA CROIX D’OR</title>
        <meta
          name="description"
          content="Mentions légales du site LA CROIX D’OR : éditeur, hébergement, propriété intellectuelle, responsabilité, données personnelles et cookies."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <header>
          <h1 className="text-2xl font-semibold mb-2">Mentions légales</h1>
          <p className="text-sm text-greyLight">
            Les présentes mentions légales s’appliquent au site internet de LA CROIX D’OR.
          </p>
        </header>

        <div className="space-y-6 text-sm text-greyLight">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">1. Éditeur du site</h2>
            <p>Le présent site est édité par la société :</p>
            <p className="text-foreground">
              <b>LA CROIX D’OR</b>
              <br />
              Forme juridique : SAS (Société par Actions Simplifiées)
              <br />
              Capital social : 1.200 €
              <br />
              Siège social : 301 Chemin de Mirou, 64160 CARRERE, France
              <br />
              Immatriculée au RCS de <b>[ville]</b> sous le numéro <b>[SIREN]</b>
              <br />
              Numéro de TVA intracommunautaire : <b>[si applicable]</b>
              <br />
              📧 E-mail : <a className="text-gold hover:underline" href="mailto:lacroixdor.fr@gmail.com">lacroixdor.fr@gmail.com</a>
              <br />
              📞 Téléphone : <a className="text-gold hover:underline" href="tel:+33743275656">+33(0) 7 43 27 56 56</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <p className="text-foreground">
              <b>[Nom de l’hébergeur]</b>
              <br />
              Adresse : <b>[adresse complète]</b>
              <br />
              Téléphone : <b>[numéro]</b>
              <br />
              Site internet : <b>[URL]</b>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">3. Création et développement du site</h2>
            <p>Le site a été conçu et développé par un prestataire indépendant :</p>
            <p className="text-foreground">
              <b>Palanque Stéphane</b>
              <br />
              Statut : <b>auto-entrepreneur</b>
              <br />
              Adresse : <b>24 chemin de Laslanottes, 64450 THEZE</b>
              <br />
              Site internet : <b>https://www.fitnessbystef.fr</b>
              <br />
              E-mail : <b>stef.palanque@gmail.com</b>
            </p>
            <p>
              Le créateur du site est intervenu exclusivement sur les aspects techniques, graphiques et fonctionnels du
              site. Il n’intervient pas dans la gestion du contenu, des produits, des services ou des transactions
              proposées par LA CROIX D’OR.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">4. Accès au site</h2>
            <p>
              Le site est accessible 24h/24 et 7j/7, sauf interruption, programmée ou non, pour les besoins de
              maintenance ou en cas de force majeure. LA CROIX D’OR ne saurait être tenue responsable de toute
              interruption du site, quelle qu’en soit la cause.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">5. Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos, icônes, sons,
              structure, etc.) est la propriété exclusive de LA CROIX D’OR, sauf mentions contraires, et est protégé
              par le droit de la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou
              partielle, de ces éléments, par quelque procédé que ce soit, sans autorisation écrite préalable, est
              strictement interdite.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">6. Responsabilité</h2>
            <p>
              Les informations diffusées sur ce site sont fournies à titre indicatif. LA CROIX D’OR s’efforce de fournir
              des informations aussi précises que possible, mais ne saurait garantir l’exactitude, la complétude ou
              l’actualité des contenus. L’utilisateur reconnaît utiliser ces informations sous sa responsabilité
              exclusive.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">7. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers, notamment les sites des marques développées par LA
              CROIX D’OR. LA CROIX D’OR ne dispose d’aucun contrôle sur le contenu de ces sites externes et décline toute
              responsabilité quant à leur contenu, leur politique de confidentialité ou leurs pratiques.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">8. Données personnelles</h2>
            <p>
              Les informations susceptibles d’être collectées sur le site (formulaire de contact, échanges par e-mail)
              sont destinées exclusivement à LA CROIX D’OR, dans le cadre du traitement des demandes.
            </p>
            <p>
              Conformément à la réglementation en vigueur (RGPD et loi Informatique et Libertés), vous disposez d’un
              droit d’accès, de rectification, d’opposition et de suppression des données vous concernant.
            </p>
            <p>
              Toute demande peut être adressée à :{" "}
              <a className="text-gold hover:underline" href="mailto:lacroixdor.fr@gmail.com">
                lacroixdor.fr@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">9. Cookies</h2>
            <p>
              Le site peut être amené à utiliser des cookies ou traceurs à des fins de fonctionnement, de mesure
              d’audience ou d’amélioration de l’expérience utilisateur. L’utilisateur peut configurer son navigateur pour
              refuser tout ou partie des cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">10. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution
              amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="mt-8 rounded-xl border border-greyLight/20 bg-surface p-4 text-xs text-greyLight">
            <p className="mb-2 text-foreground font-semibold">À compléter</p>
            <ul className="space-y-1">
              <li>• RCS : <b>[ville]</b></li>
              <li>• SIREN : <b>[SIREN]</b></li>
              <li>• TVA intracom : <b>[si applicable]</b></li>
              <li>• Hébergeur : <b>[Nom / adresse / URL]</b></li>
              <li>• Créateur du site : <b>[Nom / statut / contact]</b></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
