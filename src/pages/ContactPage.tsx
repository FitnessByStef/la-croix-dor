import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AccordionCard from "../components/ui/AccordionCard";
import emailjs from "@emailjs/browser";

type ContactFormState = {
  lastName: string;
  firstName: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  needs: string; // objet
  description: string; // descriptif
  honey: string; // honeypot anti-spam
};

const initialState: ContactFormState = {
  lastName: "",
  firstName: "",
  company: "",
  phone: "",
  email: "",
  address: "",
  needs: "",
  description: "",
  honey: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;


export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [touched, setTouched] = useState<Record<keyof ContactFormState, boolean>>({
    lastName: false,
    firstName: false,
    company: false,
    phone: false,
    email: false,
    address: false,
    needs: false,
    description: false,
    honey: false,
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const errors = useMemo(() => {
    const e: Partial<Record<keyof ContactFormState, string>> = {};

    if (!form.lastName.trim()) e.lastName = "Le nom est requis.";
    if (!form.firstName.trim()) e.firstName = "Le prénom est requis.";
    if (!form.company.trim()) {
      // optionnel: pas d'erreur
    }
    if (!form.phone.trim()) e.phone = "Le téléphone est requis.";
    if (!form.email.trim()) e.email = "L’email est requis.";
    else if (!isValidEmail(form.email)) e.email = "Email invalide.";
    if (!form.address.trim()) e.address = "L’adresse est requise.";
    if (!form.needs.trim()) e.needs = "Veuillez préciser vos besoins (objet).";
    if (!form.description.trim()) e.description = "Veuillez écrire un descriptif.";

    return e;
  }, [form]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleChange =
    (key: keyof ContactFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleBlur = (key: keyof ContactFormState) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const markAllTouched = () => {
    setTouched({
      lastName: true,
      firstName: true,
      company: true,
      phone: true,
      email: true,
      address: true,
      needs: true,
      description: true,
      honey: true,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    markAllTouched();

    // Honeypot anti-spam: si rempli => on stop silencieusement
    if (form.honey.trim()) return;

    if (!isValid || isSending) return;

    try {
      setIsSending(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          lastName: form.lastName,
          firstName: form.firstName,
          company: form.company,
          phone: form.phone,
          email: form.email,
          address: form.address,
          needs: form.needs,
          description: form.description,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setForm(initialState);
      setTouched({
        lastName: false,
        firstName: false,
        company: false,
        phone: false,
        email: false,
        address: false,
        needs: false,
        description: false,
        honey: false,
      });
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-xs text-red-400 mt-1">{msg}</p> : null;

  const inputBase =
    "w-full rounded-lg bg-background border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-gold/30";
  const inputBorder = (key: keyof ContactFormState) =>
    touched[key] && errors[key]
      ? "border-red-400/60 focus:border-red-400"
      : "border-greyLight/30 focus:border-gold/60";

  return (
    <section className="bg-background">
      <Helmet>
        <title>Contact – LA CROIX D’OR | Import-export et projets sur mesure</title>
        <meta
          name="description"
          content="Contactez LA CROIX D’OR pour une étude de projet, une demande d’information ou une orientation vers nos marques spécialisées, partout en France."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold mb-4">Contactez LA CROIX D’OR</h1>
          <p className="text-sm text-greyLight mb-8">
            Vous souhaitez obtenir des informations, étudier un projet ou être orienté vers l’une de nos marques
            spécialisées ? LA CROIX D’OR est votre interlocuteur central pour l’importation et la structuration de
            solutions adaptées au marché français.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AccordionCard
            id="prise-contact"
            title="Une prise de contact simple et efficace"
            subtitle="Informations générales, étude de projet, orientation vers la bonne marque."
          >
            <p>Que vous soyez professionnel ou particulier, nous analysons chaque demande avec la même rigueur.</p>
            <p>Cette page de contact permet :</p>
            <ul className="space-y-1">
              <li>• d’obtenir des informations générales sur notre activité,</li>
              <li>• de présenter un projet nécessitant une étude spécifique,</li>
              <li>• d’être orienté vers la marque la plus adaptée à votre besoin,</li>
              <li>• ou d’envisager la création d’une solution dédiée lorsque les volumes le permettent.</li>
            </ul>
          </AccordionCard>

          <AccordionCard
            id="cas-contact"
            title="Dans quels cas nous contacter ?"
            subtitle="Plusieurs solutions, besoin d’info, projet structuré, import spécifique."
          >
            <p>Vous pouvez nous contacter notamment si :</p>
            <ul className="space-y-1">
              <li>• vous êtes intéressé par plusieurs de nos solutions,</li>
              <li>• vous souhaitez des informations avant de consulter un site de marque,</li>
              <li>• vous avez un projet nécessitant une étude de faisabilité,</li>
              <li>• vous envisagez l’importation d’un produit spécifique,</li>
              <li>• vous recherchez un interlocuteur unique pour un projet structuré.</li>
            </ul>
          </AccordionCard>

          <AccordionCard
            id="infos-utiles"
            title="Informations utiles pour votre demande"
            subtitle="Les éléments à préciser pour traiter votre demande efficacement."
          >
            <p>Afin de nous permettre de traiter votre demande efficacement, nous vous invitons à préciser :</p>
            <ul className="space-y-1">
              <li>• votre statut : professionnel ou particulier,</li>
              <li>• le type de produit ou de solution recherchée,</li>
              <li>• les quantités estimées (si connues),</li>
              <li>• le cadre du projet (usage, délais, contraintes éventuelles).</li>
            </ul>
            <p>Ces éléments nous permettent d’évaluer rapidement la pertinence et la faisabilité de votre demande.</p>
          </AccordionCard>

          <AccordionCard
            id="orientation-marques"
            title="Orientation vers nos marques"
            subtitle="Pour un produit précis : infos détaillées, caractéristiques, commande en ligne."
          >
            <p>
              Pour des demandes directement liées à un produit ou une solution précise, nous vous invitons à consulter
              nos sites de marques dédiés, où vous trouverez :
            </p>
            <ul className="space-y-1">
              <li>• des informations détaillées,</li>
              <li>• des caractéristiques techniques complètes,</li>
              <li>• et, le cas échéant, des solutions de commande en ligne.</li>
            </ul>

            <Link to="/nos-marques" className="inline-flex mt-2 text-sm text-gold hover:underline">
              Découvrir nos marques →
            </Link>
          </AccordionCard>
        </div>

        {/* Bloc Formulaire (toujours visible) */}
        <div className="mt-10 bg-surface border border-greyLight/20 rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-lg font-semibold">Formulaire de contact</h2>
              <p className="text-sm text-greyLight">Décrivez votre besoin — nous revenons vers vous rapidement.</p>
            </div>
            <p className="text-xs text-greyLight/70">
              Ou écrire directement :{" "}
              <a className="text-gold hover:underline" href="mailto:contact@lacroixdor.fr">
                contact@lacroixdor.fr
              </a>
            </p>
          </div>

          {status === "success" && (
            <div className="mb-4 rounded-lg border border-green-400/30 bg-green-400/10 p-3 text-sm">
              ✅ Demande envoyée. Merci ! Nous revenons vers vous rapidement.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm">
              ❌ Échec d’envoi. Réessayez ou écrivez à contact@lacroixdor.fr
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Honeypot invisible anti-spam */}
            <div className="hidden">
              <label>
                Ne pas remplir
                <input value={form.honey} onChange={handleChange("honey")} />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nom *</label>
                <input
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  className={`${inputBase} ${inputBorder("lastName")}`}
                  autoComplete="family-name"
                />
                <FieldError msg={touched.lastName ? errors.lastName : undefined} />
              </div>

              <div>
                <label className="text-sm font-medium">Prénom *</label>
                <input
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  className={`${inputBase} ${inputBorder("firstName")}`}
                  autoComplete="given-name"
                />
                <FieldError msg={touched.firstName ? errors.firstName : undefined} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Raison sociale (pour les pros)</label>
                <input
                  value={form.company}
                  onChange={handleChange("company")}
                  onBlur={handleBlur("company")}
                  className={`${inputBase} ${inputBorder("company")}`}
                  autoComplete="organization"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Téléphone *</label>
                <input
                  value={form.phone}
                  onChange={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  className={`${inputBase} ${inputBorder("phone")}`}
                  autoComplete="tel"
                />
                <FieldError msg={touched.phone ? errors.phone : undefined} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Mail *</label>
                <input
                  value={form.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  className={`${inputBase} ${inputBorder("email")}`}
                  autoComplete="email"
                />
                <FieldError msg={touched.email ? errors.email : undefined} />
              </div>

              <div>
                <label className="text-sm font-medium">Adresse *</label>
                <input
                  value={form.address}
                  onChange={handleChange("address")}
                  onBlur={handleBlur("address")}
                  className={`${inputBase} ${inputBorder("address")}`}
                  autoComplete="street-address"
                />
                <FieldError msg={touched.address ? errors.address : undefined} />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Vos besoins (objet) *</label>
              <input
                value={form.needs}
                onChange={handleChange("needs")}
                onBlur={handleBlur("needs")}
                className={`${inputBase} ${inputBorder("needs")}`}
                placeholder="Ex : Import produit / Projet sur mesure / Demande pro..."
              />
              <FieldError msg={touched.needs ? errors.needs : undefined} />
            </div>

            <div>
              <label className="text-sm font-medium">Descriptif *</label>
              <textarea
                value={form.description}
                onChange={handleChange("description")}
                onBlur={handleBlur("description")}
                className={`${inputBase} ${inputBorder("description")} min-h-[140px]`}
                placeholder="Décrivez votre besoin, quantités, délais, contraintes, etc."
              />
              <FieldError msg={touched.description ? errors.description : undefined} />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={!isValid || isSending}
                className="inline-flex px-4 py-2 rounded-lg bg-gold text-background text-sm font-semibold hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {isSending ? "Envoi..." : "Envoyer la demande"}
              </button>

              <span className="text-xs text-greyLight/70">
                En envoyant, vous acceptez d’être recontacté au sujet de votre demande.
              </span>
            </div>
          </form>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <AccordionCard
            id="zone-intervention"
            title="Zone d’intervention"
            subtitle="LA CROIX D’OR intervient sur l’ensemble du territoire français."
          >
            <p>
              LA CROIX D’OR intervient sur l’ensemble du territoire français, pour des projets ponctuels comme pour des
              collaborations à long terme.
            </p>
          </AccordionCard>

          <AccordionCard
            id="engagement"
            title="Engagement de réponse"
            subtitle="Analyse attentive, réponse rapide, orientation réaliste et cohérente."
          >
            <p>Nous nous engageons à :</p>
            <ul className="space-y-1">
              <li>• analyser chaque demande avec attention,</li>
              <li>• vous répondre dans les meilleurs délais,</li>
              <li>• vous orienter vers une solution réaliste et cohérente.</li>
            </ul>
          </AccordionCard>
        </div>

        {/* CTA final */}
        <div className="mt-10 bg-background border border-greyLight/20 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">Besoin d’une étude de faisabilité ?</h2>
            <p className="text-sm text-greyLight">
              Décrivez votre besoin, même si vous n’avez pas encore toutes les quantités : nous vous orientons.
            </p>
          </div>

          <Link
            to="/nos-marques"
            className="px-6 py-3 rounded-lg border border-greyLight/40 text-sm font-semibold tracking-wide uppercase hover:border-gold hover:text-gold transition"
          >
            Découvrir nos marques
          </Link>
        </div>
      </div>
    </section>
  );
}
