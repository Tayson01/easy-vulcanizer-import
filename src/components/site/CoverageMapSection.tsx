import { Suspense, lazy, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import { PHONE, TEL, mapRings, zones } from "@/lib/site-data";

const CoverageMap = lazy(() => import("./CoverageMap"));

const ringTones = ["bg-brand", "bg-brand/60", "bg-brand/30"];

export function CoverageMapSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="harta" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-sm font-semibold tracking-wide text-brand">Hartă acoperire</p>
      <h2 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight">
        Cât de repede ajungem la tine?
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Pornim din Constanța și acoperim întreg județul, litoralul și tronsoanele A2 / A4. Cercurile arată
        timpul estimat de sosire.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          {mounted ? (
            <Suspense
              fallback={<div className="h-[420px] w-full animate-pulse bg-surface" aria-hidden="true" />}
            >
              <CoverageMap />
            </Suspense>
          ) : (
            <div className="h-[420px] w-full bg-surface" aria-hidden="true" />
          )}
        </div>

        <div className="grid gap-5 content-start">
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm font-bold">Timp estimat de sosire</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {mapRings.map((r, i) => (
                <li key={r.km} className="flex items-center gap-3">
                  <span className={`size-3 rounded-full ${ringTones[i]}`} />
                  {r.minutes} — rază {r.km} km
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-sm font-bold">Localități deservite</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {zones.map((z) => (
                <li key={z.slug}>
                  <a href={`/zone/${z.slug}`} className="inline-flex items-center gap-1.5 hover:text-brand">
                    <MapPin className="size-3.5 text-brand" /> {z.short}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Nu vezi localitatea ta?{" "}
              <a href={`tel:${TEL}`} className="font-semibold text-brand">
                Sună-ne la {PHONE}
              </a>
              , deservim întreg județul Constanța.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
