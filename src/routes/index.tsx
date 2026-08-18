import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

import heroImg from "@/assets/hero-duba.jpg";
import ziImg from "@/assets/interventie-zi.jpg";
import noapteImg from "@/assets/interventie-noapte.jpg";
import camionImg from "@/assets/camion.jpg";

import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { GoogleMark } from "@/components/site/GoogleMark";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { ContactForm } from "@/components/site/ContactForm";
import {
  ADDRESS,
  EMAIL,
  MAPS,
  PHONE,
  REVIEWS,
  TEL,
  WA,
  faqs,
  reviews,
  services,
  stats,
  zones,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lovable App" },
      {
        name: "description",
        content:
          "A",
      },
      { property: "og:title", content: "Lovable App" },
      {
        property: "og:description",
        content:
          "A",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Vulcanizare Mobilă Constanța",
          telephone: TEL,
          email: EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Șoseaua Mangaliei 126 B",
            addressLocality: "Constanța",
            addressCountry: "RO",
          },
          openingHours: "Mo-Su 00:00-23:59",
          areaServed: zones.map((z) => z.name),
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
        }),
      },
    ],
  }),
});

const gallery = [
  {
    src: ziImg,
    alt: "Reparație de pană auto pe marginea drumului în Constanța",
    title: "Intervenție pe traseu",
    desc: "Reparație rapidă direct pe marginea drumului, fără platformă.",
  },
  {
    src: noapteImg,
    alt: "Intervenție de vulcanizare mobilă noaptea într-o parcare din Constanța",
    title: "Intervenție nocturnă",
    desc: "Schimb de roată seara, direct lângă mașina clientului.",
  },
  {
    src: camionImg,
    alt: "Schimb de anvelopă la un camion pe autostradă",
    title: "Camioane și flote",
    desc: "Echipament profesional pentru TIR-uri și autoutilitare.",
  },
  {
    src: heroImg,
    alt: "Duba de vulcanizare mobilă noaptea pe stradă în Constanța",
    title: "Duba de intervenție",
    desc: "Autospeciala noastră, pregătită pentru ieșiri rapide 24/7.",
  },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <span className="size-2 rounded-full bg-brand" />
              Disponibili 24/7 în Constanța și împrejurimi
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Vulcanizare mobilă în <span className="text-brand">Constanța</span>, oriunde te afli.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Asistență rutieră non-stop, reparații pe loc, montaj la domiciliu și intervenții pe A2, A4 și
              litoral. Ajungem la tine în cel mai scurt timp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={`tel:${TEL}`}>
                <Phone className="size-4" /> Sună: {PHONE}
              </Btn>
              <BtnLink to="/contact" variant="ghost">
                Cere o ofertă
              </BtnLink>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-brand" /> Răspuns sub 20 min
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-brand" /> Constanța & 40 km
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand" /> Garanție lucrare
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Duba de vulcanizare mobilă în timpul unei intervenții de noapte în Constanța"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-float"
            />
            <div className="absolute -top-4 right-4 inline-flex items-center gap-2 rounded-xl bg-card px-3 py-2 text-xs font-semibold shadow-card">
              <span className="size-2 rounded-full bg-success" /> Online acum
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-card px-5 py-4 shadow-float">
              <p className="text-2xl font-extrabold">2.000+</p>
              <p className="text-xs text-muted-foreground">intervenții reușite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bară urgență */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-base font-bold">Ai pană acum?</p>
              <p className="text-sm text-muted-foreground">
                Răspundem 24/7. Trimite locația pe WhatsApp și pornim spre tine.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Btn href={`tel:${TEL}`}>
                <Phone className="size-4" /> {PHONE}
              </Btn>
              <Btn href={WA} variant="ghost">
                <MessageCircle className="size-4" /> WhatsApp
              </Btn>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {zones.slice(0, 4).map((z) => (
              <BtnLink
                key={z.slug}
                to="/zone/$slug"
                params={{ slug: z.slug }}
                variant="ghost"
                className="flex-col items-start rounded-2xl px-4 py-4 text-left"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="size-4 text-brand" /> {z.short}
                </span>
                <span className="mt-1 text-xs font-normal text-muted-foreground">{z.eta}</span>
              </BtnLink>
            ))}
          </div>
        </div>
      </section>

      {/* Servicii */}
      <section id="servicii" className="mx-auto max-w-6xl px-5 py-20">
        <SectionLabel>Servicii</SectionLabel>
        <h2 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight">
          Tot ce ai nevoie, într-un singur loc.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          De la pene neașteptate pe drum până la întreținere programată — echipa noastră mobilă din Constanța
          se ocupă de tot.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <BtnLink
                to="/servicii/$slug"
                params={{ slug: s.slug }}
                variant="ghost"
                className="mt-4 self-start px-4 py-2"
              >
                Află mai mult →
              </BtnLink>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-brand p-7 text-brand-foreground">
          <div>
            <p className="text-lg font-bold">Nu găsești ce cauți?</p>
            <p className="text-sm opacity-90">
              Sună-ne și îți oferim o soluție personalizată în câteva minute.
            </p>
          </div>
          <a
            href={`tel:${TEL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-card px-5 py-3 text-sm font-semibold text-foreground"
          >
            <Phone className="size-4" /> Contactează-ne
          </a>
        </div>
      </section>

      {/* Statistici */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="mx-auto max-w-6xl px-5 py-20">
        <SectionLabel>Galerie · Intervenții reale</SectionLabel>
        <h2 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight">
          Poze reale din intervențiile noastre.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Imagini din teren, cu duba noastră și lucrări făcute direct la client, pe autostradă sau în oraș.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {gallery.map((g) => (
            <figure key={g.title} className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={1000}
                height={750}
                className="h-60 w-full object-cover"
              />
              <figcaption className="p-5">
                <p className="font-bold">{g.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Hartă acoperire */}
      <div className="border-y border-border bg-surface">
        <CoverageMapSection />
      </div>

      {/* Zone */}
      <section id="zone" className="mx-auto max-w-6xl px-5 py-20">
        <SectionLabel>Zone deservite</SectionLabel>
        <h2 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight">
          Acoperim Constanța și împrejurimile.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Selectează zona ta pentru detalii despre trasee, timp de sosire și prețuri orientative.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <div
              key={z.slug}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <p className="inline-flex items-center gap-2 font-bold">
                <MapPin className="size-4 text-brand" /> {z.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{z.desc}</p>
              <BtnLink
                to="/zone/$slug"
                params={{ slug: z.slug }}
                variant="ghost"
                className="mt-4 self-start px-4 py-2"
              >
                Detalii →
              </BtnLink>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Nu vezi localitatea ta?{" "}
          <a href={`tel:${TEL}`} className="font-semibold text-brand">
            Sună-ne
          </a>
          , deservim întreg județul Constanța.
        </p>
      </section>

      {/* Recenzii */}
      <section id="recenzii" className="relative overflow-hidden border-y border-border bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Recenzii Google verificate</SectionLabel>
          <h2 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight">
            Șoferii din Constanța ne recomandă.
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-[320px_1fr]">
            {/* Panou scor */}
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <GoogleMark />
                Recenzii Google
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-1 text-[10px] font-bold text-brand">
                  <ShieldCheck className="size-3" /> Verificat
                </span>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <p className="text-6xl font-extrabold leading-none tracking-tight">4.9</p>
                <div className="pb-1">
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">120+ recenzii</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  { stars: 5, pct: 94 },
                  { stars: 4, pct: 5 },
                  { stars: 3, pct: 1 },
                  { stars: 2, pct: 0 },
                  { stars: 1, pct: 0 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-3 font-semibold text-foreground">{row.stars}</span>
                    <Star className="size-3 fill-current text-brand" />
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-brand-soft">
                      <span
                        className="block h-full rounded-full bg-brand transition-all"
                        style={{ width: `${row.pct}%` }}
                      />
                    </span>
                    <span className="w-8 text-right tabular-nums">{row.pct}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <Btn href={REVIEWS}>Vezi toate recenziile</Btn>
                <Btn href={REVIEWS} variant="ghost">
                  Lasă o recenzie
                </Btn>
              </div>
            </div>

            {/* Carduri recenzii */}
            <div className="grid gap-5 sm:grid-cols-2">
              {reviews.map((r) => (
                <blockquote
                  key={r.name}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 text-7xl font-black text-brand/10 transition-colors group-hover:text-brand/20"
                  >
                    &rdquo;
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand ring-2 ring-brand/15">
                      {r.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 text-sm font-bold">
                        {r.name}
                        <ShieldCheck className="size-3.5 shrink-0 text-brand" />
                      </p>
                      <p className="text-xs text-muted-foreground">{r.when}</p>
                    </div>
                    <span className="ml-auto shrink-0">
                      <GoogleMark />
                    </span>
                  </div>
                  <div className="mt-4 flex gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">„{r.text}”</p>
                  <p className="mt-4 border-t border-border pt-3 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Recenzie Google verificată
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="intrebari" className="mx-auto max-w-3xl px-5 py-20">
        <SectionLabel>Întrebări frecvente</SectionLabel>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
          Tot ce vrei să știi înainte să suni.
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
                aria-expanded={openFaq === i}
              >
                {f.q}
                <ChevronDown
                  className={`size-4 shrink-0 text-brand transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <BtnLink to="/intrebari-frecvente" variant="ghost">
            Toate întrebările frecvente →
          </BtnLink>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Hai să vorbim.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Sună-ne pentru intervenții urgente sau trimite-ne mesajul direct pe WhatsApp — opțional cu locația
            ta exactă.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="grid gap-4">
              <a
                href={`tel:${TEL}`}
                className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <Phone className="size-5 text-brand" />
                <p className="mt-4 text-xs font-semibold text-muted-foreground">Telefon · WhatsApp</p>
                <p className="text-lg font-bold">{PHONE}</p>
              </a>
              <a
                href={MAPS}
                className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <MapPin className="size-5 text-brand" />
                <p className="mt-4 text-xs font-semibold text-muted-foreground">Vino la noi</p>
                <p className="text-lg font-bold">{ADDRESS}</p>
              </a>
              <div className="rounded-3xl border border-border bg-card p-6">
                <Clock className="size-5 text-brand" />
                <p className="mt-4 text-xs font-semibold text-muted-foreground">Program</p>
                <p className="text-lg font-bold">Non-stop, 24/7</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
