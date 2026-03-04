import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AccordionCard from "../components/ui/AccordionCard";

type BrandId =
  | "moncontainer"
  | "mafixation"
  | "mamachine"
  | "monhabillage"
  | "mamenuiserie"
  | "monsolaire";

type Brand = {
  id: BrandId;
  name: string;
  tagline: string;
  statusLabel: "En ligne" | "Bientôt";
  statusVariant: "online" | "soon";
  logoSrc: string;
  websiteUrl: string;
  description: React.ReactNode;
  gallery?: Array<{ src: string; alt: string }>;
};

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function BrandBadge({
  variant,
  children,
}: {
  variant: "online" | "soon";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "text-xs px-2 py-1 rounded-full border font-medium whitespace-nowrap",
        variant === "online" && "border-gold text-gold",
        variant === "soon" && "border-greyLight/40 text-greyLight/80"
      )}
    >
      {children}
    </span>
  );
}

/* =========================================================
   GRAND CARD (logo à gauche + texte à droite)
   ========================================================= */
function BrandDetailsCard({ brand }: { brand: Brand }) {
  const logoAlt = `${brand.name} — ${brand.tagline} (logo)`;

  return (
    <article className="bg-surface border border-greyLight/20 rounded-2xl p-6 md:p-7">
      {/* Header ligne : badge + CTA */}
      <header className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <BrandBadge variant={brand.statusVariant}>{brand.statusLabel}</BrandBadge>

          {brand.statusVariant === "online" && (
            <a
              href={brand.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-lg bg-gold text-background font-semibold hover:brightness-110 transition"
            >
              Accéder au site →
            </a>
          )}
        </div>

        {/* ✅ Layout demandé : logo à gauche + texte à droite */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-5 md:gap-7 items-start">
          {/* Logo */}
          <img
            src={brand.logoSrc}
            alt={logoAlt}
            className="w-full h-[120px] md:h-[140px] object-contain object-left"
            loading="lazy"
          />

          {/* Texte */}
          <div className="rounded-xl bg-background/10 border border-greyLight/15 p-5">
            <div className="text-sm text-greyLight space-y-3">{brand.description}</div>
          </div>
        </div>
      </header>

      {/* Zone photos */}
      <div className="pt-6">
        <h4 className="text-sm font-semibold mb-2">Aperçu (photos à venir)</h4>

        {brand.gallery?.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {brand.gallery.map((img, idx) => (
              <div
                key={`${brand.id}-img-${idx}`}
                className="rounded-xl overflow-hidden border border-greyLight/20 bg-background/30"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-greyLight/30 bg-background/20 p-4 text-sm text-greyLight/70">
            Tu pourras ajouter ici des photos (réalisations, produits, usages, avant/après…) spécifiques à{" "}
            <span className="text-greyLight font-medium">{brand.name}</span>.
          </div>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   GRID LOGOS (sans scroll horizontal)
   ========================================================= */
function LogoGrid({
  brands,
  selectedId,
  onSelect,
}: {
  brands: Brand[];
  selectedId: BrandId;
  onSelect: (id: BrandId) => void;
}) {
  return (
    <div className="rounded-2xl border border-greyLight/20 bg-surface p-4 md:p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-base font-semibold">Nos marques actuelles</h2>
        <p className="text-xs text-greyLight/70">Clique sur un logo pour afficher la marque.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {brands.map((b) => {
          const active = b.id === selectedId;
          const logoAlt = `${b.name} — ${b.tagline} (logo)`;

          return (
            <button
              key={b.id}
              type="button"
              onClick={() => onSelect(b.id)}
              className={cn(
                "group rounded-2xl border transition p-3 text-left",
                active
                  ? "border-gold/70 bg-background/35"
                  : "border-greyLight/20 hover:border-greyLight/40 hover:bg-background/20"
              )}
              aria-pressed={active}
              aria-label={`Afficher la marque ${b.name} : ${b.tagline}`}
              title={`${b.name} — ${b.tagline}`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <BrandBadge variant={b.statusVariant}>{b.statusLabel}</BrandBadge>
              </div>

              <div className="rounded-xl bg-background/10 border border-greyLight/15 p-2">
                <img
                  src={b.logoSrc}
                  alt={logoAlt}
                  className="w-full h-[70px] sm:h-[80px] lg:h-[85px] object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mt-2 text-[11px] leading-snug text-greyLight/70 line-clamp-2">
                {b.tagline}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */
export default function NosMarquesPage() {
  const brands: Brand[] = useMemo(
    () => [
      {
        id: "moncontainer",
        name: "MonContainer",
        tagline: "Solutions modulaires à base de containers démontables",
        statusLabel: "En ligne",
        statusVariant: "online",
        logoSrc: "/brands/LogoMonContainer.png",
        websiteUrl: "https://moncontainer.lacroixdor.co",
        description: (
          <>
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-2">MON CONTAINER</h3>
            <h4 className="text-base text-gold font-medium mb-4">
              Modules habitables et solutions modulaires clé en main
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MON CONTAINER est la boutique spécialisée de La Croix d’Or dédiée aux modules constructifs et solutions
              modulaires clé en main, pour l’habitat léger comme pour les usages professionnels et tertiaires. La marque
              propose des modules habitables du 20’ au 40’, conçus pour des projets rapides à mettre en œuvre, ainsi que
              des modules assemblables clé en main permettant de créer des ensembles fonctionnels pouvant atteindre
              jusqu’à 80 m² et plus selon les configurations.
            </p>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MON CONTAINER développe également une gamme complète de solutions modulaires tertiaires, adaptées aux
              besoins des entreprises, collectivités et porteurs de projets : bureaux modulaires, modules simples ou
              dépliables, bases de vie, sanitaires, espaces médicaux ou cliniques, ainsi que des solutions hôtelières
              modulaires. Ces modules sont pensés pour offrir des espaces immédiatement opérationnels, évolutifs et
              compatibles avec des contextes variés : sites temporaires, extensions rapides, installations pérennes ou
              projets spécifiques nécessitant des délais maîtrisés.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-greyLight">
              Dans une logique globale de solution, MON CONTAINER intègre également la fourniture de pieux vissés,
              permettant de proposer des fondations adaptées aux constructions modulaires, rapides à mettre en place et
              compatibles avec les contraintes de terrain et d’environnement.
            </p>

            <a
              href="https://moncontainer.lacroixdor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black text-sm font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              👉 Découvrir les solutions MON CONTAINER
            </a>
          </>
        ),
      },
      {
        id: "monhabillage",
        name: "MonHabillage",
        tagline: "Solutions d’habillage intérieur et extérieur du bâtiment",
        statusLabel: "En ligne",
        statusVariant: "online",
        logoSrc: "/brands/MonHabillage.png",
        websiteUrl: "https://monhabillage.lacroixdor.co",
        description: (
          <>
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-2">MON HABILLAGE</h3>
            <h4 className="text-base text-gold font-medium mb-4">
              Solutions d’habillage intérieur et extérieur du bâtiment
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MON HABILLAGE est la boutique spécialisée de La Croix d’Or dédiée aux solutions d’habillage intérieur et
              extérieur, pour l’habitat comme pour les usages professionnels et tertiaires. La marque regroupe une
              sélection de matériaux et systèmes d’habillage permettant de traiter aussi bien les murs intérieurs que
              les façades extérieures, avec une approche orientée fonction, esthétique et durabilité.
            </p>

            <p className="mb-3 text-sm leading-relaxed text-greyLight">
              MON HABILLAGE propose des solutions adaptées à de nombreux contextes : habitat individuel, bâtiments
              tertiaires, locaux professionnels, extensions, modules et constructions légères. L’offre couvre notamment :
            </p>

            <ul className="mb-4 text-sm text-greyLight space-y-1">
              <li>• l’habillage mural intérieur</li>
              <li>• le doublage décoratif ou technique</li>
              <li>• le bardage extérieur</li>
              <li>• les panneaux et systèmes d’habillage prêts à poser</li>
            </ul>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              Ces solutions sont pensées pour s’intégrer facilement à des projets neufs ou de rénovation, avec une large
              variété de matériaux, finitions et rendus.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-greyLight">
              Dans une logique de négoce et de fourniture, MON HABILLAGE met l’accent sur des produits fiables, cohérents
              et compatibles avec les autres solutions du groupe La Croix d’Or, notamment les modules, la menuiserie et
              les équipements techniques. L’objectif est de proposer des solutions d’habillage claires et accessibles,
              permettant aux porteurs de projets, professionnels ou particuliers, de construire ou d’aménager des espaces
              fonctionnels et esthétiques, sans complexité inutile.
            </p>

            <a
              href="https://monhabillage.lacroixdor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black text-sm font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              👉 Découvrir les solutions MON HABILLAGE
            </a>
          </>
        ),
      },
      {
        id: "mamenuiserie",
        name: "MaMenuiserie",
        tagline: "Solutions de menuiseries et systèmes vitrés pour l’habitat et le tertiaire",
        statusLabel: "En ligne",
        statusVariant: "online",
        logoSrc: "/brands/MaMenuiserie.png",
        websiteUrl: "https://mamenuiserie.lacroixdor.co",
        description: (
          <>
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-2">MA MENUISERIE</h3>
            <h4 className="text-base text-gold font-medium mb-4">
              Solutions de menuiseries et systèmes vitrés pour l’habitat et le tertiaire
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MA MENUISERIE est la boutique spécialisée de La Croix d’Or dédiée aux menuiseries intérieures et
              extérieures, ainsi qu’aux systèmes vitrés, pour les projets d’habitat, de rénovation et les usages
              professionnels ou tertiaires. La marque propose une sélection cohérente de fenêtres, portes, portes-fenêtres,
              fenêtres de toit, ainsi que des solutions vitrées techniques, adaptées aux exigences actuelles en matière
              de confort, de performance et d’esthétique.
            </p>

            <p className="mb-3 text-sm leading-relaxed text-greyLight">
              MA MENUISERIE s’adresse aussi bien aux particuliers qu’aux professionnels, pour des projets variés :
              construction neuve, rénovation, extension, modules habitables, bâtiments tertiaires ou locaux
              professionnels. L’offre couvre notamment :
            </p>

            <ul className="mb-4 text-sm text-greyLight space-y-1">
              <li>• les fenêtres et portes-fenêtres</li>
              <li>• les portes d’entrée et portes intérieures</li>
              <li>• les fenêtres de toit</li>
              <li>• les parois vitrées et garde-corps vitrés</li>
            </ul>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              Ces solutions sont sélectionnées pour leur fiabilité, leur compatibilité avec différents types de projets
              et leur capacité à s’intégrer dans des architectures contemporaines comme plus traditionnelles.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-greyLight">
              Dans une logique de négoce et de fourniture, MA MENUISERIE met à disposition des solutions prêtes à être
              intégrées, sans prestation de pose, laissant aux clients et partenaires la liberté de choisir leur mode de
              mise en œuvre. La marque s’inscrit naturellement en complément des autres boutiques du groupe La Croix d’Or,
              notamment MON HABILLAGE et MON CONTAINER, afin de proposer une approche globale et cohérente des projets de
              construction et d’aménagement.
            </p>

            <a
              href="https://mamenuiserie.lacroixdor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black text-sm font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              👉 Découvrir les solutions MA MENUISERIE
            </a>
          </>
        ),
      },
      {
        id: "mafixation",
        name: "MaFixation",
        tagline: "Solutions de fixation, scellement et assemblage pour le bâtiment",
        statusLabel: "En ligne",
        statusVariant: "online",
        logoSrc: "/brands/MaFixation.png",
        websiteUrl: "https://mafixation.lacroixdor.co",
        description: (
          <>
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-2">MA FIXATION</h3>
            <h4 className="text-base text-gold font-medium mb-4">
              Solutions de fixation, scellement et assemblage pour le bâtiment
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MA FIXATION est la boutique spécialisée de La Croix d’Or dédiée aux solutions de fixation et de scellement,
              à destination des projets de construction, d’aménagement et de rénovation, en habitat comme en milieu
              professionnel ou tertiaire. La marque regroupe une gamme de produits techniques de liaison et d’assemblage,
              permettant de répondre aux besoins courants comme aux applications plus spécifiques, avec une approche
              orientée fiabilité, compatibilité et simplicité d’usage.
            </p>

            <p className="mb-3 text-sm leading-relaxed text-greyLight">
              MA FIXATION propose notamment des solutions adaptées à de nombreux usages du bâtiment :
            </p>

            <ul className="mb-4 text-sm text-greyLight space-y-1">
              <li>• scellement chimique</li>
              <li>• résines techniques (dont résines époxy)</li>
              <li>• silicones et mastics, disponibles en plusieurs types et coloris</li>
              <li>• mousses polyuréthane</li>
            </ul>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              Ces produits sont destinés à des applications variées : fixation structurelle, ancrage, étanchéité,
              calfeutrement, assemblage ou complément de mise en œuvre, aussi bien en intérieur qu’en extérieur.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-greyLight">
              Dans une logique de négoce et de fourniture, MA FIXATION met à disposition des solutions sélectionnées pour
              leur efficacité et leur polyvalence, sans prestation de pose, afin de s’intégrer librement dans les méthodes
              de travail des professionnels comme des particuliers avertis. La marque s’inscrit naturellement en
              complément des autres boutiques du groupe La Croix d’Or, notamment MON HABILLAGE, MA MENUISERIE et MON
              CONTAINER, en apportant les solutions de liaison et de fixation indispensables à la cohérence globale des
              projets.
            </p>

            <a
              href="https://mafixation.lacroixdor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black text-sm font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              👉 Découvrir les solutions MA FIXATION
            </a>
          </>
        ),
      },
      {
        id: "mamachine",
        name: "MaMachine",
        tagline: "Machines compactes et équipements motorisés pour le chantier et le terrain",
        statusLabel: "En ligne",
        statusVariant: "online",
        logoSrc: "/brands/MaMachine.png",
        websiteUrl: "https://mamachine.lacroixdor.co",
        description: (
          <>
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-2">MA MACHINE</h3>
            <h4 className="text-base text-gold font-medium mb-4">
              Machines compactes et équipements motorisés pour le chantier et le terrain
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MA MACHINE est la boutique spécialisée de La Croix d’Or dédiée aux machines compactes, engins motorisés et
              équipements techniques, destinés aux travaux extérieurs, au chantier et aux environnements contraints. La
              marque regroupe des solutions conçues pour allier puissance, précision et maniabilité, avec une sélection
              de machines adaptées aux besoins des professionnels comme des utilisateurs avertis.
            </p>

            <p className="mb-3 text-sm leading-relaxed text-greyLight">MA MACHINE propose notamment :</p>

            <ul className="mb-4 text-sm text-greyLight space-y-1">
              <li>• des robots débroussailleurs radiocommandés</li>
              <li>• des dumpers radiocommandés</li>
              <li>• des tracteurs compacts, environ 35 chevaux, avec accessoires</li>
              <li>• des grues araignées pour les opérations de levage en accès difficile</li>
            </ul>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              Ces équipements sont pensés pour intervenir sur des terrains complexes, des chantiers étroits ou des zones
              nécessitant des solutions techniques compactes et efficaces, tout en conservant un haut niveau de contrôle
              et de sécurité.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-greyLight">
              Dans une logique de négoce et de fourniture, MA MACHINE met à disposition des machines sélectionnées pour
              leur robustesse, leur polyvalence et leur facilité d’intégration dans des projets existants ou ponctuels,
              sans prestation de pose ou d’exploitation. La marque est conçue pour évoluer et pourra, selon les besoins
              et opportunités, intégrer d’autres équipements ou de l’outillage, en cohérence avec les usages terrain et
              chantier. MA MACHINE s’inscrit naturellement en complément des autres boutiques du groupe La Croix d’Or, en
              apportant les équipements motorisés et techniques nécessaires à la réalisation des projets.
            </p>

            <a
              href="https://mamachine.lacroixdor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black text-sm font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              👉 Découvrir les solutions MA MACHINE
            </a>
          </>
        ),
      },
      {
        id: "monsolaire",
        name: "MonSolaire",
        tagline: "Solutions solaires et systèmes d’autonomie énergétique",
        statusLabel: "En ligne",
        statusVariant: "online",
        logoSrc: "/brands/MonSolaire.png",
        websiteUrl: "https://monsolaire.lacroixdor.co",
        description: (
          <>
            <h3 className="text-xl font-semibold uppercase tracking-wide mb-2">MON SOLAIRE</h3>
            <h4 className="text-base text-gold font-medium mb-4">
              Solutions solaires et systèmes d’autonomie énergétique
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              MON SOLAIRE est la boutique spécialisée de La Croix d’Or dédiée aux solutions solaires et systèmes
              d’autonomie énergétique, pour l’habitat, les projets modulaires et les usages professionnels. La marque
              propose une sélection de solutions de production et de stockage d’énergie, permettant de répondre à des
              besoins variés : alimentation de sites isolés, complément énergétique, autonomie partielle ou totale, dans
              une logique de fourniture de matériel fiable et cohérent.
            </p>

            <p className="mb-3 text-sm leading-relaxed text-greyLight">MON SOLAIRE regroupe notamment :</p>

            <ul className="mb-4 text-sm text-greyLight space-y-1">
              <li>• des panneaux solaires</li>
              <li>• des solutions de stockage par batteries</li>
              <li>• des systèmes de gestion et de conversion de l’énergie</li>
              <li>• des solutions de production d’eau chaude électrique autonome associées à des équipements solaires</li>
            </ul>

            <p className="mb-4 text-sm leading-relaxed text-greyLight">
              Ces solutions sont adaptées aussi bien à l’habitat léger, aux modules, qu’à des usages professionnels ou
              tertiaires, en complément ou indépendamment d’un raccordement classique au réseau.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-greyLight">
              Dans une logique de négoce et de fourniture, MON SOLAIRE met à disposition des solutions performantes à
              coût maîtrisé, sans prestation de pose ni installation clé en main, laissant aux clients la liberté de
              choisir leur mode de mise en œuvre. La marque s’intègre naturellement dans l’écosystème La Croix d’Or, en
              complément des solutions proposées par MON CONTAINER, MON HABILLAGE et MA MACHINE, afin d’apporter une
              réponse énergétique cohérente aux projets modulaires, résidentiels ou professionnels.
            </p>

            <a
              href="https://monsolaire.lacroixdor.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black text-sm font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
            >
              👉 Découvrir les solutions MON SOLAIRE
            </a>
          </>
        ),
      },
    ],
    []
  );

  const [selectedBrandId, setSelectedBrandId] = useState<BrandId>("moncontainer");

  const selectedBrand = useMemo(
    () => brands.find((b) => b.id === selectedBrandId) ?? brands[0],
    [brands, selectedBrandId]
  );

  return (
    <section className="bg-background">
      <Helmet>
        <title>Nos marques – LA CROIX D’OR | Import-export et solutions spécialisées</title>
        <meta
          name="description"
          content="Découvrez les marques développées par LA CROIX D’OR : solutions modulaires, menuiseries, fixation, machines et autonomie énergétique."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* ✅ SEO : H1 et intro */}
        <h1 className="text-2xl font-semibold mb-2">Nos marques spécialisées</h1>
        <p className="text-sm text-greyLight mb-8 max-w-3xl">
          LA CROIX D’OR développe et structure des marques dédiées, chacune conçue pour répondre à un besoin précis,
          avec une expertise produit claire et un positionnement cohérent.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <AccordionCard
            id="pourquoi-marques"
            title="Pourquoi créer des marques dédiées ?"
            subtitle="Un discours clair, une expertise produit, et une orientation efficace."
          >
            <p>Notre activité repose sur l’importation de produits nécessitant :</p>
            <ul className="space-y-1">
              <li>• une compréhension technique spécifique,</li>
              <li>• des volumes adaptés à l’import,</li>
              <li>• un discours clair et lisible pour les utilisateurs finaux.</li>
            </ul>
            <p>Créer une marque par typologie de produits permet :</p>
            <ul className="space-y-1">
              <li>• d’apporter une information précise et détaillée,</li>
              <li>• d’éviter les catalogues généralistes peu lisibles,</li>
              <li>• d’orienter efficacement les visiteurs vers la solution la plus adaptée.</li>
            </ul>
            <p>
              Chaque marque dispose de son site internet dédié, tout en s’inscrivant dans la structure globale du groupe
              LA CROIX D’OR.
            </p>
          </AccordionCard>

          <AccordionCard
            id="modele-evolutif"
            title="Un modèle évolutif, basé sur la demande"
            subtitle="Des marques qui naissent de besoins réels et de volumes suffisants."
          >
            <p>Nos marques ne sont pas figées.</p>
            <p>
              Elles naissent à partir de besoins identifiés, de demandes réelles et de volumes suffisants pour garantir
              la viabilité économique des projets.
            </p>
            <p>Ce fonctionnement nous permet :</p>
            <ul className="space-y-1">
              <li>• de développer de nouvelles marques lorsque le marché le justifie,</li>
              <li>• de rester ouverts à l’étude de produits variés,</li>
              <li>• d’assurer une cohérence industrielle et commerciale sur le long terme.</li>
            </ul>
          </AccordionCard>
        </div>

        {/* ✅ Logos en grille (sans scroll horizontal) */}
        <div className="mb-6">
          <LogoGrid brands={brands} selectedId={selectedBrandId} onSelect={setSelectedBrandId} />
        </div>

        {/* Grand card */}
        <BrandDetailsCard brand={selectedBrand} />

        {/* Blocs SEO conservés */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <AccordionCard
            id="marques-a-venir"
            title="Des marques à venir"
            subtitle="Développement selon la demande, les volumes et la pertinence industrielle."
          >
            <p>D’autres marques sont actuellement en cours de développement et verront le jour en fonction :</p>
            <ul className="space-y-1">
              <li>• des demandes reçues,</li>
              <li>• des volumes identifiés,</li>
              <li>• de la pertinence industrielle et économique des projets étudiés.</li>
            </ul>
            <p>
              Cette organisation permet à LA CROIX D’OR de rester agile, tout en conservant une structure claire et
              lisible.
            </p>
          </AccordionCard>

          <AccordionCard
            id="projet-produit"
            title="Vous avez un projet ou une idée de produit ?"
            subtitle="Étude de faisabilité, analyse des volumes, orientation vers la marque adaptée."
          >
            <p>
              Vous avez identifié un besoin spécifique ou souhaitez étudier l’importation d’un produit ne faisant pas
              encore l’objet d’une marque dédiée ?
            </p>
            <p>📩 Contactez LA CROIX D’OR pour :</p>
            <ul className="space-y-1">
              <li>• une étude de faisabilité,</li>
              <li>• une analyse des volumes nécessaires,</li>
              <li>• ou une orientation vers une marque existante.</li>
            </ul>

            <Link
              to="/contact"
              className="inline-flex mt-2 px-5 py-2 rounded-lg bg-gold text-background text-sm font-semibold tracking-wide uppercase hover:brightness-110 transition"
            >
              Nous contacter
            </Link>
          </AccordionCard>
        </div>
      </div>
    </section>
  );
}