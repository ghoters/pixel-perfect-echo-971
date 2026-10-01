import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRight,
  CircleHelp,
  Lightbulb,
  Lock,
  MoveDownRight,
  Zap,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import kontaktHero from "@/assets/kontakt-hero.jpg";
import faqHero from "@/assets/faq-hero.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | prezent3d.com" },
      { name: "description", content: "Skontaktuj się z nami – odpowiemy na pytania o projekt, wycenę i realizację personalizowanej figurki 3D." },
      { property: "og:title", content: "Kontakt | prezent3d.com" },
      { property: "og:description", content: "Masz pytanie lub pomysł na figurkę? Napisz do nas – chętnie pomożemy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontaktPage,
});

const CONTACT_EMAIL = "prezent3d@gmail.com";

const subjects = ["Pytanie o zamówienie", "Wycena projektu", "Poprawki do projektu", "Współpraca", "Inne"];

const inputClass = "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-[12px] text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0] ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Imię i nazwisko: ${name}\nAdres e-mail: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="flex min-h-screen flex-col overflow-x-clip bg-background">
      <SiteHeader active="kontakt" />

      <section className="relative min-h-[270px] overflow-hidden bg-brand-soft sm:min-h-[310px]">
        <img src={faqHero} alt="Personalizowana figurka 3D pary" width={1920} height={700} className="absolute inset-0 size-full object-cover object-[0%_center] sm:object-center" />
        <div className="section-shell relative z-10 flex min-h-[270px] items-center py-10 sm:min-h-[310px]">
          <div className="max-w-[510px]">
            <p className="text-[11px] font-extrabold uppercase text-primary">Kontakt</p>
            <h1 className="mt-2 text-[34px] font-extrabold leading-[1.08] text-foreground sm:text-[42px]">Skontaktuj się<br className="hidden sm:block" /> z nami</h1>
            <p className="mt-4 max-w-[470px] text-[13px] leading-6 text-muted-foreground">Masz pytanie, pomysł na projekt lub chcesz złożyć zamówienie? Napisz do nas – chętnie pomożemy i odpowiemy na wszystkie pytania.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-1 items-center bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="section-shell grid items-center gap-8 py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,0.75fr)] lg:gap-10 lg:py-16">
          <div className="grid max-w-[430px] grid-cols-3 gap-5">
            {([
              [Zap, "Szybka odpowiedź", "Zazwyczaj w ciągu 24 godzin"],
              [Lightbulb, "Indywidualne podejście", "Do każdego projektu podchodzimy indywidualnie"],
              [Lock, "Bezpieczna współpraca", "Twoje dane są u nas w pełni bezpieczne"],
            ] as const).map(([Icon, title, text]) => (
              <div key={title}>
                <span className="grid size-9 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-4" strokeWidth={2} /></span>
                <h2 className="mt-3 text-[11px] font-bold text-foreground">{title}</h2>
                <p className="mt-1 text-[9px] leading-4 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-[16px] font-extrabold text-foreground">Napisz do nas</h2>
            <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required value={name} onChange={(event) => setName(event.target.value)} className={inputClass} placeholder="Imię i nazwisko *" aria-label="Imię i nazwisko" />
                <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} placeholder="Adres e-mail *" aria-label="Adres e-mail" />
              </div>
              <select required value={subject} onChange={(event) => setSubject(event.target.value)} className={inputClass} aria-label="Temat wiadomości">
                {subjects.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              <textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className={`${inputClass} resize-none`} placeholder="Wiadomość *" aria-label="Wiadomość" />
              <Button variant="hero" type="submit" className="w-full">Wyślij wiadomość <ArrowRight /></Button>
            </form>
            <p className="mt-4 flex items-center gap-2 text-[9px] text-muted-foreground"><Lock className="size-3.5 shrink-0 text-primary" /> Twoje dane są bezpieczne. Nie udostępniamy ich osobom trzecim.</p>
          </div>

          <div className="relative hidden pt-9 lg:block">
            <img src={kontaktHero} alt="Personalizowana figurka 3D mężczyzny z psem" width={1024} height={1280} className="w-full rounded-xl object-cover" />
            <p className="absolute right-2 top-0 rotate-[6deg] text-[12px] font-bold italic text-primary">Twoje zdjęcie → nasza figurka</p>
            <MoveDownRight className="absolute left-6 top-1 size-6 rotate-[40deg] text-primary" strokeWidth={2} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="section-shell flex flex-wrap items-center justify-center gap-3 py-7">
          <CircleHelp className="size-5 text-primary" />
          <p className="text-[11px] font-semibold text-muted-foreground">Nie znalazłeś odpowiedzi? Napisz na <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-primary hover:underline">{CONTACT_EMAIL}</a> – odpowiadamy w ciągu 24 godzin.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
