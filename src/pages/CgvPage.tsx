// src/pages/CgvPage.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function CgvPage() {
  return (
    <section className="bg-background">
      <Helmet>
        <title>CGV – LA CROIX D’OR</title>
        <meta
          name="description"
          content="Conditions Générales de Vente (CGV) de LA CROIX D’OR : objet, tarifs, commandes, paiements, livraisons, garanties, litiges."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <header>
          <h1 className="text-2xl font-semibold mb-2">Conditions Générales de Vente (CGV)</h1>
          <p className="text-sm text-greyLight">
            Dernière mise à jour : <b>[à compléter]</b>
          </p>
        </header>

        <div className="space-y-6 text-sm text-greyLight">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 1 - OBJET</h2>
            <p>
              Les présentes Conditions Générales de Vente (dites « CGV »), s’appliquent, sans restriction ni réserve à
              l’ensemble des ventes conclues par la SAS LA CROIX D’OR au capital social de 1.200 €, domicilié à l’adresse
              suivante : 301 Chemin de Mirou à Carrère (64160), désigné ci-après « Le Vendeur » et l’acheteur des
              produits et services désigné ci-après « Le Client ».
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 2 – GENERALITES</h2>
            <p>
              Les CGV sont accessibles sur le site internet : lacroixdor.co ou sur demande par support informatique en
              format de document portable (PDF) ou physique et prévaudront sur tout autre document.
            </p>
            <p>
              Le choix et l’achat d’un Produit sont la seule responsabilité du Client, ce malgré le devoir de conseil de
              la part du Vendeur.
            </p>
            <p>
              Sauf preuve du contraire, les données enregistrées dans le système informatique du Vendeur constituent la
              preuve de l’ensemble des transactions et échanges conclues avec le Client.
            </p>
            <p className="text-foreground font-semibold">
              LE CLIENT DECLARE AVOIR PRIS CONNAISSANCE DES PRESENTES CGV ET LES AVOIR ACCEPTEES EN COCHANT LA CASE
              PREVUE A CET EFFET SUR LES OFFRES DE PRIX.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 3 – TARIFS</h2>
            <p>Les Produits sont fournis aux tarifs et aux détails figurant sur les offres de prix.</p>
            <p>Les prix sont exprimés en Euros (€), hors taxes (HT) et toutes taxes comprises (TTC).</p>
            <p>
              Pour tous les Produits vendu hors France et au sein de l’Union Européenne (UE) aux professionnels, le prix
              sera automatiquement calculé hors taxes sous conditions de présentation du numéro de TVA
              Intracommunautaire.
            </p>
            <p>
              Pour tous les Produits vendu hors Union Européenne (UE) et DOM-TOM, le prix sera automatiquement calculé
              hors taxes.
            </p>
            <p>
              En cas de commande vers un pays hors France métropolitaine, Le Client est l’importateur du ou des produits
              concernés. Les démarches, les frais et les taxes itinérant à l’import sont de la responsabilité et à la
              charge du Client.
            </p>
            <p>
              Les prix sont fermes et non révisable pendant la période de validité du devis, sauf mention exceptionnelle
              obligatoirement mentionné sur l’offre de prix.
            </p>
            <p>
              Les prix ne comprennent pas les frais de pose et de livraison qui font l’objet d’une tarification
              additionnelle si applicable (mention sur les offres de prix).
            </p>
            <p>
              Les paiements demandé (montant et délai) seront précisés sur chaque remise de prix, ainsi que les
              modalités de règlement acceptées.
            </p>
            <p>
              Les factures correspondantes au paiement sont éditées par Le Vendeur et transmise au Client par voir
              dématérialisé à réception du règlement.
            </p>
            <p>Les offres de prix, sauf indication contraire sur le devis, sont valable pour une durée de 30 jours à compter de la date de création.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 4 – COMMANDES</h2>
            <p>
              Il appartient au Client de sélectionner le ou les Produits qu’il désire, suivant le processus de
              fonctionnement en vigueur pour le ou les Produits désigné, le détail du processus peut être demandé à tout
              moment au Vendeur.
            </p>
            <p>
              Pour toute commande de produits sur stock, le montant du paiement (partiel ou intégral) sera détaillé sur
              l’offre de prix.
            </p>
            <p>
              Dans certains cas, des conditions particulières pourront être mise en place : échéancier de paiement,
              durée de validité de l’offre, dans ce cas les informations précisées sur le devis seront prioritaire sur
              les conditions générales, sauf en cas de litige où les CGV priment sur toute conditions annexées à l’offre
              de prix.
            </p>
            <p>
              La vente ne sera considérée comme valide qu’après la réception du règlement partiel ou intégral selon les
              modalités de l’offre de prix.
            </p>
            <p>
              Tout règlement effectué constitue la formation d’un contrat de vente conclu entre Le Vendeur et Le Client.
            </p>
            <p>
              Le Vendeur se réserve le droit d’annuler ou de refuser toute commande d’un Client avec lequel il existe un
              litige relatif au paiement d’une commande.
            </p>
            <p>
              Sauf offre promotionnelle, Le Vendeur laissera le temps nécessaire au Client pour la validation de sa
              commande, en retour une commande validé par Le Client est un paiement dû, aucune annulation et
              remboursement du ou des montant versé ne sera effectué après le départ du ou des Produits de l’usine
              notamment pour les commandes d’importation.
            </p>
            <p>Le Client pourra suivre l’évolution de l’acheminement de sa commande.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 5 – CONDITIONS DE PAIEMENT</h2>
            <p>
              La somme due par Le Client est réglée par voie de paiement sécurisé selon les modalités et conditions
              mentionnées sur l’offre de prix.
            </p>
            <p>
              En cas de retard de paiement et de versements des sommes dues par Le Client au-delà des délais fixés sur
              l’offre de prix (notamment pour les règlements de situations et de solde), des pénalités de retard
              calculées au taux légal applicable au montant TTC du prix d’acquisition figurant sur ladite offre de prix
              validés, seront acquises automatiquement et de plein droit au Vendeur, sans formalité aucune ni mise en
              demeure préalable.
            </p>
            <p>
              En outre, Le Vendeur se réserve le droit, en cas de non-respect des conditions de paiement figurant dans
              cet article des CGV, de suspendre ou d’annuler la livraison des commandes en cours effectués par Le Client
              sans possible remboursement des sommes déjà perçue par Le Vendeur en indemnités de non-respect des
              présentes conditions de paiement des CGV.
            </p>
            <p>
              Les données de paiement sont échangées en mode crypté grâce aux protocole défini par le prestataire de
              paiement agréer intervenant pour les transactions bancaire réalisé par terminal de paiement électronique
              (TPE). Pour les règlements par virement bancaire, les données de paiement sont hébergées sur les interfaces
              en ligne des systèmes bancaire respectif du Client et du Vendeur. Pour toute autre informations, Le Vendeur
              et Le Client sont tenus par la validation des présente CGV à un accord de confidentialités des informations
              privée et bancaire.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 6 – LIVRAISONS</h2>
            <p>Les articles commandés par Le Client sont disponibles en France métropolitaine.</p>
            <p>Les livraisons sont possibles en France métropolitaine uniquement sur devis et aux conditions exposé par Le Vendeur.</p>
            <p>
              Pour toute autre modalité de livraison, Le Client devra gérer la livraison par ses propres moyens, avec
              l’enlèvement de la commande par Le Client ou un tiers sur rendez-vous au dépôt du Vendeur.
            </p>
            <p>
              Pour toute livraison hors France métropolitaine, Le Client aura la responsabilité du transport, des
              démarches, des frais et taxes itinérant à l’exportation de la commande hors France métropolitaine.
            </p>
            <p>
              Lorsque Le Client s’est lui-même chargé de faire appel à un transporteur qu’il choisit lui-même, la
              livraison réputée effectuée dès la remise des Produits commandés par Le Vendeur au transporteur qui les
              acceptent sans réserve. Le Client reconnaît donc que c’est au transporteur qu’il appartient d’effectuer la
              livraison et ne dispose d’aucun recours en garantie contre Le Vendeur en cas de défaut de livraison des
              Produits commandé.
            </p>
            <p>
              En cas de demande particulière du Client concernant les conditions d’emballage ou de transport des Produits
              commandés, dûment acceptées par écrit par Le Vendeur, les coûts y liés feront l’objet d’une facturation
              spécifique complémentaire sur devis préalablement accepté par écrit par Le Client.
            </p>
            <p>
              Le Client est tenu de vérifier l’état des Produits livrés. Il dispose d’un délai de 2 jours à compter de la
              livraison gérer par Le Vendeur ou sans délais en cas de livraison gérer par Le Client ou en cas
              d’enlèvement de la commande sur place, pour formuler des réclamations par courriel, accompagnées de tous
              les justificatifs y afférents (photos notamment).
            </p>
            <p>
              Passé ce délai et à défaut d’avoir respecté ces formalités, les Produits seront réputés conformes et exempts
              de tout vice apparent et aucune réclamation ne pourra être valablement acceptée par Le Vendeur.
            </p>
            <p>
              Le Vendeur remboursera, remplacera ou effectuera un avoir dans les plus brefs délais, les Produits dont les
              défauts de conformité ou les vices auront été dûment prouvés par Le Client, dans les conditions prévues aux
              articles L 217-4 du Code de la consommation et celles prévus aux présente CGV.
            </p>
            <p>
              En cas de transport, les Produits voyagent donc aux risques et périls du Vendeur, sauf lorsque Le Client
              choisi le transporteur, à ce titre les risques sont transférés au moment de la remise de la commande au
              transporteur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 7 – TRANSFERT DE PROPRIETE</h2>
            <p>
              Le transfert de propriété des Produits du Vendeur au Client ne sera effectif qu’après complète réception du
              paiement du prix par Le Vendeur et ce quelle que soit la date de livraison des dits Produits.
            </p>
            <p>
              Le Vendeur ne sera pas tenu de procéder à la délivrance du ou des Produits commandés par Le Client si
              celui-ci n’en paye pas le prix en totalité et dans les conditions exposées dans le présent article des
              CGV.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 8 – DROIT DE RETRACTATION</h2>
            <p>
              Compte tenu de la nature des Produits vendus (importation), du délai de réflexion est laissé au Client par
              Le Vendeur, toutefois, passé le règlement de l’acompte ou du paiement (selon les conditions mentionnées sur
              l’offre de prix), Le Client ne bénéficie plus du droit de rétractation.
            </p>
            <p>
              Le contrat est donc conclu de façon définitive dès la passation de la commande par le règlement de
              déclenchement de commande par Le Client selon les modalités précisées aux présente CGV et sur le devis.
            </p>
            <p>
              Pour tous les Produits sous mention « occasion », ils sont acquis en l’état en tout état de conscience et
              ne seront ni repris, ni échangé et ne feront l’objet d’aucun délais de rétractation ou de garantie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 9 – GARANTIES</h2>
            <p>Les Produits fournis par Le Vendeur bénéficient :</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>De la Garantie légale de conformité, pour les Produits défectueux, abîmés ou endommagés ou ne correspondant pas à la commande ;</li>
              <li>De la Garantie légale contre les vices cachés provenant d’un défaut de matière, de conception ou fabrication affectant les Produits et les rendant impropres à l’utilisation (Garantie constructeur)</li>
            </ul>
            <p className="mt-2">Dispositions relatives aux Garanties légales :</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Article L 217-4, L 217-5, L 217-12 et L 217-16 du Code de la consommation</li>
              <li>Article 1641 et 1648 alinéa 1er du Code civil</li>
            </ul>
            <p className="mt-2">
              Afin de faire valoir ses droits, Le Client devra informer Le Vendeur, par écrit (courrier avec accusé de
              réception), de la non-conformité des Produits ou de l’existence des vices cachés à compter de leur
              découverte.
            </p>
            <p>
              Le Vendeur remboursera, remplacera ou fera réparer les Produits ou pièces sous Garantie jugés non conformes
              ou défectueux.
            </p>
            <p>
              Les frais d’envoi seront remboursés (pour le cas d’une livraison gérer par Le Vendeur) sur la base du tarif
              facturé et les frais de retour seront remboursés (pour le cas d’une livraison gérer par Le Vendeur) sur
              présentation des justificatifs.
            </p>
            <p>
              Les remboursements, remplacement ou réparations des Produits jugés non conforme ou défectueux seront
              effectués dans les meilleurs délais à la suite de la constatation par Le Vendeur du défaut de conformité ou
              du vice caché.
            </p>
            <p>La responsabilité du Vendeur ne saurait être engagée dans les cas de :</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Non-respect de la législation du pays dans lequel les Produits sont livrés, qu’il appartient au Client de vérifier ;</li>
              <li>En cas de mauvaise utilisation ou installation, négligence ou défaut d’entretien de la part du Client, comme en cas d’usure normale du Produit, d’accident ou de force majeure ;</li>
              <li>Les photographies et graphismes présentés sur les supports de communication peuvent ne pas être contractuel et ne sauraient engager la responsabilité du Vendeur.</li>
            </ul>
            <p>
              La Garantie du Vendeur est en tout état de cause, limité au remplacement ou au remboursement des Produits non
              conformes ou affectés d’un vice dont il fera part au Fabricant.
            </p>
            <p>
              Les Produits achetés auprès du vendeur, peuvent outre les Garanties légales de conformité et des vices cachés
              bénéficier d’une Garantie contractuelle comme indiqué le cas échéant au descriptif Produit donné, selon les
              termes et conditions exposé sur l’offre de prix.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 10 – LEGISLATION</h2>
            <p>
              Concernant tout Produit, la responsabilité d’assurance est transmise du Vendeur au Client dès la disposition
              de la commande de la part de ce dernier, ou le cas échéant au Transporteur.
            </p>
            <p>
              Conformément à la législation en vigueur, Le Client à l’obligation du respect de ladite législations
              (notamment être assuré et avoir un permis valide pour les produits soumis au code de la route).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 11 – CONFORMITE</h2>
            <p>
              L’ensemble des produits proposé par Le Vendeur sont conforme aux exigences de l’union européenne et dispose
              du marquage permettant de s’en assurer avec la mention « CE ».
            </p>
            <p>
              Concernant les châssis de tiny-house, le « COC », certificat de conformité européen est présent, toute
              modification sur le châssis impactant les caractéristiques techniques devra faire l’objet d’une validation
              par la DREAL.
            </p>
            <p>
              Le Vendeur ne pourra être tenu responsable pour toute modification impactant la conformité européenne
              effectué par Le Client ou un tier agréer ou non qui ne serait pas de l’initiative du Vendeur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 12 – RESPONSABILITE</h2>
            <p>
              Le Vendeur n’a en aucun cas la responsabilité pour tous dommages ou coût liés à un environnement inadapté,
              une mauvaise installation et/ou utilisation du Produit. La responsabilité du Vendeur ne pourra être engagé
              pour tous dommage résultant de problèmes indépendant de ce dernier.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 13 – TRAITEMENT DES DONNEES</h2>
            <p>
              Le Client est informé que la collecte de ses données à caractère personnel est nécessaire à la vente des
              Produits par Le Vendeur ainsi qu’à leur transmission à des tiers à des fin de livraison des Produits. Ces
              données à caractère personnel sont récoltées uniquement pour l’exécution du contrat de vente.
            </p>
            <p>
              Les droits relatifs au traitement des données, dès lors qu’ils ne s’opposent pas à la finalité du dossier
              d’étude, de remise de prix, ou du contrat de vente, peuvent être exercé en adressant la demande par voie
              physique (courrier) ou voie dématérialisée (courriel) avec retour de prise en compte ou accusé de réception.
            </p>
            <p>
              Le Vendeur devra après confirmation de la réception de la demande ou à date de l’accusé de réception,
              apporter la confirmation de la réalisation de la demande sous 30 jours.
            </p>
            <p>
              En cas de refus de faire droit à la demande du Client, celui-ci doit être motivé. Le Client est informé
              qu’en cas de refus, il peut informer une réclamation auprès de la CNIL au 3 place de Fontenoy à Paris
              (75007) ou saisir une autorité judiciaire.
            </p>
            <p>
              En cas de litige, ou d’intervention d’une autorité compétente, les données à caractère personnel pourront
              être communiquées au dit service de médiation ou autorité compétente en la matière, et conformément à la
              règlementation, Le Client sera tenu informé de la transmission des informations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 14 – PROPRIETE PERSONNELLES</h2>
            <p>
              Le contenu du site internet, de tout support de communication et de documents sont la propriété du Vendeur
              et de ses partenaires et est protégé par les lois du droit français et international relatives à la
              propriété intellectuelle. Toute reproduction totale ou partielle de ce contenu est strictement interdite
              et est susceptible de constituer un délit de contrefaçon.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 15 – DROIT APPLICABLE</h2>
            <p>
              Les présentes CGV et les opérations qui en découlent sont régies et soumises au droit français. Les présentes
              CGV sont rédigées en langue française de France métropolitaine. Dans le cas où elles seraient traduites en
              une ou plusieurs langues étrangères, seul le texte originel français ferait foi en cas de litige.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 16 – LITIGES</h2>
            <p>
              Pour toute réclamation, Le Client devra effectuer la demande par courrier ou courriel à l’adresse contact du
              Vendeur présenté à l’article 1 des présente CGV.
            </p>
            <p>
              Le Client est informé qu’il peut en tout état de cause recourir à une médiation conventionnelle, auprès des
              instances légales.
            </p>
            <p>
              Tous les litiges auxquels les opérations d’achat et de vente conclues en application des présentes CGV et qui
              n’auraient pas fait l’objet d’un règlement amiable, seront soumis aux tribunaux compétents.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">ARTICLE 17 – FORCE MAJEURE</h2>
            <p>
              La responsabilité du Vendeur ne pourra être mise en œuvre si la non-exécution, ou le retard dans l’exécution
              de l’une de ses obligations décrites dans le contrat de vente et/ou les présentes CGV découle d’une force
              majeure. A ce titre, la force majeure s’entend de tout évènement extérieur, imprévisible et irrésistible au
              sens de l’article 1148 du Code civil.
            </p>
          </section>
        </div>

        <div className="rounded-xl border border-greyLight/20 bg-surface p-4 text-xs text-greyLight">
          <p className="mb-2 text-foreground font-semibold">Note</p>
          <p>
            Ces CGV sont fournies par LA CROIX D’OR. En cas d’incohérence entre un devis et les présentes CGV, les
            mentions du devis peuvent s’appliquer à titre particulier, sans préjudice des dispositions légales
            impératives.
          </p>
        </div>
      </div>
    </section>
  );
}
