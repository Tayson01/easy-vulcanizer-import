import { PHONE, TEL } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs font-semibold">
        <span>🚧 Site DEMO · conținut de prezentare, fără poze reale</span>
        <span className="flex items-center gap-4">
          <span>⏱️ Non-stop 24/7</span>
          <a href={`tel:${TEL}`} className="underline underline-offset-2">
            📞 {PHONE}
          </a>
        </span>
      </div>
    </div>
  );
}
