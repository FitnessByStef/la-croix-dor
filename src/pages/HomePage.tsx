import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AccordionCard from "../components/ui/AccordionCard";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>LA CROIX D’OR – Import-export et marques spécialisées en France</title>
        <meta
          name="description"
          content="LA CROIX D’OR, groupe français d’import-export et de commerce de gros et de détail. Marques spécialisées, projets sur mesure, France entière."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Import-export et commerce de gros et de détail en France
            </h1>

            <p className="text-greyLight mb-6 max-w-xl">
              LA CROIX D’OR, groupe spécialisé dans l’importation de produits et
              la création de marques dédiées, accompagne professionnels et
              particuliers dans leurs projets, de l’étude à la distribution.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/nos-marques"
                className="px-6 py-3 rounded-lg bg-gold text-background text-sm font-semibold tracking-wide uppercase hover:brightness-110 transition"
              >
                Découvrir nos marques
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-greyLight/40 text-sm font-semibold tracking-wide uppercase hover:border-gold hover:text-gold transition"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Encadré synthèse = H2 + texte exact */}
          <div className="bg-greyLight/5 border border-greyLight/30 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">
              Une approche globale de l’importation et du commerce
            </h2>
            <p className="text-sm text-greyLight">
              LA CROIX D’OR est une société française dont l’activité repose sur
              l’import vers la France, le commerce de gros et de détail, et la
              structuration de marques spécialisées autour de produits à fort
              potentiel.
              <br />
              <br />
              Nous intervenons aussi bien auprès de professionnels que de
              particuliers, avec une logique simple et pragmatique : rendre
              accessibles des produits techniquement maîtrisés, à des conditions
              économiques cohérentes, grâce à des volumes adaptés à
              l’importation.
              <br />
              <br />
              Notre rôle n’est pas de multiplier les références sans cohérence,
              mais de structurer une offre claire, fiable et évolutive.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU — compact via accordéons */}
      <section className="bg-surface border-t border-greyLight/15">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
          <div className="grid md:grid-cols-2 gap-6">
            <AccordionCard
              id="prc"
              title="Import depuis la PRC : un choix industriel assumé"
              subtitle="Pourquoi la PRC (Chine) est au cœur de notre chaîne d’approvisionnement."
            >
              <p>
                Nous travaillons principalement avec des unités de production
                situées en PRC (Chine), aujourd’hui au cœur des chaînes
                industrielles mondiales.
              </p>
              <p>Ce choix repose sur des critères objectifs :</p>
              <ul className="space-y-1">
                <li>• maîtrise des procédés de fabrication,</li>
                <li>• capacité de production à grande échelle,</li>
                <li>
                  • équilibre entre qualité, efficacité et compétitivité
                  tarifaire.
                </li>
              </ul>
              <p>
                La majorité des produits et composants utilisés au quotidien en
                Europe proviennent déjà de ces filières industrielles.
              </p>
              <p>
                Notre approche consiste à assumer cette réalité, à la maîtriser,
                et à la mettre au service de projets concrets et viables pour le
                marché français.
              </p>
            </AccordionCard>

            <AccordionCard
              id="volumes"
              title="Un modèle basé sur la demande et les volumes"
              subtitle="Des volumes minimaux : une réalité logistique, industrielle et économique."
            >
              <p>
                L’importation nécessite des quantités minimales pour garantir
                des coûts logistiques et industriels cohérents.
              </p>
              <p>C’est pourquoi notre fonctionnement repose sur :</p>
              <ul className="space-y-1">
                <li>• l’analyse de la demande,</li>
                <li>• la mutualisation des volumes,</li>
                <li>• l’étude de projets à partir de besoins réels.</li>
              </ul>
              <p>Ce modèle nous permet :</p>
              <ul className="space-y-1">
                <li>• de proposer des prix justifiés,</li>
                <li>• d’assurer une continuité d’approvisionnement,</li>
                <li>
                  • d’ouvrir la voie à la création de nouvelles marques lorsque
                  le marché le permet.
                </li>
              </ul>
            </AccordionCard>

            <AccordionCard
              id="evolutif"
              title="Une structure évolutive, rythme"
              subtitle="De nouvelles marques selon la demande, les volumes et la pertinence économique."
            >
              <p>Notre organisation est volontairement évolutive.</p>
              <p>De nouvelles marques peuvent voir le jour en fonction :</p>
              <ul className="space-y-1">
                <li>• des demandes reçues,</li>
                <li>• des volumes identifiés,</li>
                <li>
                  • de la pertinence économique et industrielle des projets.
                </li>
              </ul>
              <p>Vous avez un besoin spécifique ou un produit à étudier ?</p>
              <p>
                Nous analysons chaque demande avec la même rigueur, qu’elle
                concerne une marque existante ou un projet en devenir.
              </p>
            </AccordionCard>

            <AccordionCard
              id="vision"
              title="Un interlocuteur unique, une vision long terme"
              subtitle="Centraliser l’importation et la stratégie pour garantir cohérence et durabilité."
            >
              <p>
                En centralisant l’importation, la stratégie et la structure
                financière, LA CROIX D’OR permet :
              </p>
              <ul className="space-y-1">
                <li>• une meilleure maîtrise des coûts,</li>
                <li>• une cohérence entre les marques,</li>
                <li>
                  • une relation durable avec ses partenaires et clients.
                </li>
              </ul>
              <p>
                Notre objectif est de construire un groupe solide, lisible et
                pérenne, capable d’accompagner des projets sur le long terme.
              </p>
            </AccordionCard>
          </div>

          {/* Marques (cards) */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                Des marques spécialisées, un groupe structuré
              </h2>
              <Link to="/nos-marques" className="text-sm text-gold hover:underline">
                Voir toutes nos marques →
              </Link>
            </div>

            <p className="text-sm text-greyLight max-w-4xl mb-6">
              Afin de garantir clarté, lisibilité et expertise, LA CROIX D’OR
              développe des marques dédiées par typologie de produits. Chaque
              marque dispose de son propre site, de son positionnement et de son
              discours, tout en s’inscrivant dans la cohérence du groupe.
              <br />
              <br />
              👉 L’ensemble de nos marques est présenté sur une page dédiée, avec
              un accès direct à leurs sites respectifs.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-gold p-5">
                <p className="text-xs text-greyLight uppercase tracking-wide mb-2">
                  Marque
                </p>
                <h3 className="font-semibold mb-2">MonContainer</h3>
                <p className="text-sm text-greyLight mb-3">
                  Une marque dédiée aux solutions modulaires basées sur des
                  containers 20 pieds démontables, avec plusieurs configurations
                  possibles, options d’isolation et finitions adaptées, sans
                  dépôt de permis ni autorisation de travaux.
                </p>
                <a
                  href="https://moncontainer.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gold hover:underline"
                >
                  Accéder au site →
                </a>
              </div>

              <div className="card-gold p-5">
                <p className="text-xs text-greyLight uppercase tracking-wide mb-2">
                  Marque
                </p>
                <h3 className="font-semibold mb-2">MonSolaire</h3>
                <p className="text-sm text-greyLight mb-3">
                  Une marque orientée vers les systèmes d’autonomie électrique
                  (production photovoltaïque, stockage par batteries LiFePO4),
                  pensée non comme un argument écologique, mais comme une
                  réponse pragmatique à la souveraineté énergétique et à la
                  volatilité des prix de l’électricité.
                </p>
                <a
                  href="https://monsolaire.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gold hover:underline"
                >
                  Accéder au site →
                </a>
              </div>

              <div className="card-gold-hover p-5 opacity-70">
                <p className="text-xs text-greyLight uppercase tracking-wide mb-2">
                  À venir
                </p>
                <h3 className="font-semibold mb-2">Nouvelles marques</h3>
                <p className="text-sm text-greyLight mb-3">
                  D’autres marques peuvent voir le jour en fonction des demandes
                  reçues, des volumes identifiés, et de la pertinence économique
                  et industrielle des projets.
                </p>
                <Link to="/nos-marques" className="text-sm text-gold hover:underline">
                  Découvrir nos marques →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Contact */}
          <div className="card-cta p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-2">
                Contact et étude de projet
              </h2>
              <div className="text-sm text-greyLight space-y-2">
                <p>Vous êtes un professionnel ou un particulier ?</p>
                <p>
                  Vous vous intéressez à plusieurs de nos solutions ou souhaitez
                  étudier un projet spécifique ?
                </p>
                <p>📩 Contactez LA CROIX D’OR pour :</p>
                <ul className="space-y-1">
                  <li>• une prise de contact globale,</li>
                  <li>• une étude de faisabilité,</li>
                  <li>
                    • ou une orientation vers la marque la plus adaptée à votre
                    besoin.
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-gold text-background text-sm font-semibold tracking-wide uppercase hover:brightness-110 transition"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
