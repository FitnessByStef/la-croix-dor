import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Compass,
  Layers,
  Handshake,
  LineChart,
  ShieldCheck,
} from "lucide-react";

type SectionCard = {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
};

export default function NosServicesPage() {
  const cards: SectionCard[] = [
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Une approche simple et sur mesure",
      text: (
        <>
          <p>
            Chaque projet est différent. Notre accompagnement débute toujours par
            un échange approfondi pour comprendre vos attentes, vos contraintes
            et les solutions envisageables.
          </p>
          <p className="mt-3 text-greyLight">
            Objectif : définir clairement ce que nous pouvons réellement vous
            apporter, puis proposer un accompagnement adapté.
          </p>
        </>
      ),
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Étude et mise en perspective",
      text: (
        <>
          <p>Selon les besoins, notre intervention peut inclure :</p>
          <ul className="mt-3 space-y-1">
            <li>• une analyse globale du projet,</li>
            <li>• une mise en perspective technique et économique,</li>
            <li>• des échanges avec nos partenaires,</li>
            <li>• des pistes de solutions concrètes.</li>
          </ul>
          <p className="mt-3 text-greyLight">
            Nous intervenons comme facilitateur, avec un regard structuré et
            pragmatique.
          </p>
        </>
      ),
    },
    {
      icon: <Handshake className="h-5 w-5" />,
      title: "Mise en relation & accompagnement opérationnel",
      text: (
        <>
          <p>
            Lorsque c’est pertinent, nous pouvons assurer la mise en relation
            avec des professionnels qualifiés :
          </p>
          <ul className="mt-3 space-y-1">
            <li>• architectes,</li>
            <li>• maîtres d’œuvre,</li>
            <li>• agents immobiliers,</li>
            <li>• partenaires techniques ou opérationnels.</li>
          </ul>
          <p className="mt-3 text-greyLight">
            Nous pouvons également accompagner des projets immobiliers ou des
            structures souhaitant être appuyées dans leur réflexion /
            organisation.
          </p>
        </>
      ),
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Transparence & valorisation",
      text: (
        <>
          <p>
            Notre accompagnement repose sur un principe simple : le temps,
            l’analyse et les compétences mobilisées ont une valeur.
          </p>
          <p className="mt-3 text-greyLight">
            Le niveau d’accompagnement est défini selon votre projet et les
            moyens nécessaires. Dans certains projets immobiliers, cet
            accompagnement peut être déduit des commandes réalisées lorsque le
            projet se concrétise.
          </p>
        </>
      ),
    },
  ];

  const steps = [
    {
      title: "1. Échange initial",
      desc: "Comprendre vos objectifs, vos contraintes et le contexte réel.",
    },
    {
      title: "2. Clarification",
      desc: "Identifier les options, ce qui est cohérent, et ce qui ne l’est pas.",
    },
    {
      title: "3. Pistes concrètes",
      desc: "Proposer des axes de solutions et les bons interlocuteurs si nécessaire.",
    },
    {
      title: "4. Suivi",
      desc: "Accompagnement opérationnel selon le niveau défini (cadre clair).",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Nos services – Accompagnement de projets | LA CROIX D’OR</title>
        <meta
          name="description"
          content="Prestations de conseil et d’accompagnement : étude de projet, mise en perspective technique & économique, mise en relation et suivi opérationnel."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs text-greyLight uppercase tracking-[0.25em] mb-3">
              Prestations & conseil
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Accompagnement de projets et prestations de conseil
            </h1>

            <p className="text-greyLight mb-6 max-w-xl">
              LA CROIX D’OR accompagne professionnels et particuliers qui
              souhaitent structurer, faire évoluer ou concrétiser un projet avec
              une vision globale, réaliste et pragmatique.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-gold text-background text-sm font-semibold tracking-wide uppercase hover:brightness-110 transition inline-flex items-center gap-2"
              >
                Parler de votre projet <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/nos-marques"
                className="px-6 py-3 rounded-lg border border-greyLight/40 text-sm font-semibold tracking-wide uppercase hover:border-gold hover:text-gold transition"
              >
                Voir nos marques
              </Link>
            </div>
          </div>

          {/* Encadré "Notre rôle" */}
          <div className="bg-greyLight/5 border border-greyLight/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3 text-gold">
              <Layers className="h-5 w-5" />
              <h2 className="text-lg font-semibold text-foreground">
                Notre rôle
              </h2>
            </div>

            <p className="text-sm text-greyLight">
              Vous aider à y voir clair, à identifier les bonnes options, et à
              vous entourer des bons interlocuteurs — avec un cadre simple, une
              analyse posée, et une logique orientée vers le concret.
            </p>

            <div className="mt-5 rounded-xl border border-greyLight/20 bg-background/40 p-4">
              <p className="text-xs uppercase tracking-wide text-greyLight mb-2">
                Ce que vous obtenez
              </p>
              <ul className="text-sm text-greyLight space-y-1">
                <li>• une mise au clair structurée,</li>
                <li>• des pistes réalistes,</li>
                <li>• des mises en relation pertinentes (si nécessaire),</li>
                <li>• un accompagnement défini en toute transparence.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-surface border-t border-greyLight/15">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((c) => (
              <div key={c.title} className="card-gold p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center border border-gold/20">
                    {c.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{c.title}</h2>
                    <p className="text-xs text-greyLight uppercase tracking-wide mt-1">
                      LA CROIX D’OR – Conseil & accompagnement
                    </p>
                  </div>
                </div>
                <div className="text-sm text-greyLight leading-relaxed">
                  {c.text}
                </div>
              </div>
            ))}
          </div>

          {/* Méthode */}
          <div className="bg-background border border-greyLight/20 rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-xl font-semibold">
                  Comment se déroule l’accompagnement
                </h2>
                <p className="text-sm text-greyLight mt-1">
                  Un cadre clair, progressif, orienté action.
                </p>
              </div>

              <Link to="/contact" className="text-sm text-gold hover:underline">
                Démarrer un échange →
              </Link>
            </div>

            <div className="mt-6 grid md:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-greyLight/20 bg-greyLight/5 p-4"
                >
                  <p className="text-sm font-semibold">{s.title}</p>
                  <p className="text-sm text-greyLight mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="card-cta p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-2">
                Parlons de votre projet
              </h2>
              <div className="text-sm text-greyLight space-y-2">
                <p>Vous avez une idée, un besoin, une réflexion en cours ?</p>
                <p>
                  Le plus simple reste d’en discuter : nous vérifions la
                  cohérence, et définissons la meilleure manière de vous
                  accompagner.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-gold text-background text-sm font-semibold tracking-wide uppercase hover:brightness-110 transition inline-flex items-center gap-2"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
