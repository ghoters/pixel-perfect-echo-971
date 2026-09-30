import { createFileRoute } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  Box,
  CircleHelp,
  ClipboardList,
  CreditCard,
  FileText,
  Headphones,
  Heart,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
  UserRound,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqHero from "@/assets/faq-hero.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Najczęściej zadawane pytania | prezent3d.com" },
      { name: "description", content: "Odpowiedzi na najczęstsze pytania o zamówienie, projekt, wykonanie, dostawę i płatność za personalizowaną figurkę 3D." },
      { property: "og:title", content: "Najczęściej zadawane pytania | prezent3d.com" },
      { property: "og:description", content: "Sprawdź najważniejsze informacje o zamawianiu personalizowanej figurki 3D." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

type FaqCategory = "order" | "project" | "production" | "delivery" | "payments" | "account" | "other";
type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;
type FaqItem = { question: string; answer: string };
type Category = { id: FaqCategory; label: string; icon: IconType; intro: string; items: FaqItem[] };

const categories: Category[] = [
  {
    id: "order", label: "Zamówienie", icon: ClipboardList, intro: "Jak zamówić figurkę, jakie zdjęcia przesłać i ile osób może być na figurce.",
    items: [
      { question: "Jak zamówić figurkę 3D?", answer: "Przejdź do konfiguratora, wybierz wariant figurki, rozmiar, wykończenie i dodatki. Następnie prześlij zdjęcia, uzupełnij dane i złóż zamówienie." },
      { question: "Jakie zdjęcia są najlepsze do wykonania figurki?", answer: "Najlepsze są ostre, dobrze oświetlone zdjęcia pokazujące twarz, sylwetkę i charakterystyczne detale. Warto przesłać ujęcia z kilku stron." },
      { question: "Ile osób może być na jednej figurce?", answer: "W konfiguratorze możesz wybrać jedną lub dwie osoby, a także dodać zwierzę. Większe kompozycje wyceniamy indywidualnie." },
      { question: "Czy mogę zamówić figurkę z psem lub innym zwierzęciem?", answer: "Tak. W konfiguratorze możesz dodać pupila do figurki. Jeśli potrzebujesz nietypowej kompozycji, skontaktuj się z nami." },
      { question: "Czy mogę wybrać pozę lub ubiór?", answer: "Tak. Opisz oczekiwaną pozę i ubiór w uwagach oraz dołącz zdjęcia referencyjne. Uwzględnimy je podczas przygotowania projektu." },
      { question: "Czy mogę zamówić kilka identycznych figurek?", answer: "Tak. W wiadomości do zamówienia podaj potrzebną liczbę egzemplarzy, a potwierdzimy cenę i termin realizacji." },
    ],
  },
  {
    id: "project", label: "Projekt", icon: Palette, intro: "Jak wygląda proces tworzenia modelu 3D i czy mogę wprowadzać zmiany?",
    items: [
      { question: "Czy mogę wybrać konkretną pozę?", answer: "Tak. Możesz wskazać pozę na przesłanym zdjęciu albo opisać ją w uwagach do zamówienia." },
      { question: "Czy mogę zmienić ubranie lub dodatki?", answer: "Tak. Możemy odwzorować ubranie ze zdjęcia lub przygotować inne na podstawie dodatkowych materiałów." },
      { question: "Jak wygląda proces akceptacji projektu?", answer: "Po przygotowaniu modelu 3D wysyłamy podgląd do akceptacji. Produkcja rozpoczyna się dopiero po Twoim zatwierdzeniu." },
      { question: "Ile zdjęć jest potrzebnych do wykonania modelu?", answer: "Zwykle wystarczą 3–5 wyraźnych zdjęć. Im lepiej pokazują twarz, fryzurę i sylwetkę, tym dokładniej przygotujemy projekt." },
      { question: "Czy można zamówić kilka osób na jednym projekcie?", answer: "Tak. Liczbę postaci wybierzesz w konfiguratorze, a większą grupę możemy przygotować po indywidualnej wycenie." },
      { question: "Czy przed drukiem zobaczę projekt?", answer: "Tak. Zawsze otrzymasz cyfrowy podgląd modelu przed rozpoczęciem druku." },
      { question: "Czy mogę zgłosić poprawki do projektu?", answer: "Tak. Po otrzymaniu podglądu możesz przekazać uwagi, które omówimy przed ostateczną akceptacją." },
    ],
  },
  {
    id: "production", label: "Wykonanie", icon: Sparkles, intro: "Jak wygląda druk 3D, malowanie i cały proces realizacji?",
    items: [
      { question: "Z jakiego materiału wykonywane są figurki?", answer: "Figurki powstają z materiału przeznaczonego do precyzyjnego druku 3D, który dobrze odwzorowuje drobne detale." },
      { question: "Czy figurki są malowane ręcznie?", answer: "Tak, wariant kolorowy jest wykańczany i malowany ręcznie." },
      { question: "Jak trwałe są figurki?", answer: "Przy właściwym użytkowaniu figurka zachowuje wygląd przez lata. Zalecamy chronić ją przed upadkiem i długim działaniem słońca." },
      { question: "Jakie rozmiary figurek są dostępne?", answer: "Dostępne rozmiary znajdziesz w konfiguratorze. Rozmiar oznacza orientacyjną wysokość gotowej kompozycji." },
      { question: "Czy figurka może mieć personalizowaną podstawkę?", answer: "Tak. Możesz wybrać personalizowaną podstawkę i wpisać własny grawer." },
      { question: "Czy każda figurka jest wykonywana indywidualnie?", answer: "Tak. Każdy model tworzymy na podstawie zdjęć i wybranej konfiguracji konkretnego zamówienia." },
    ],
  },
  {
    id: "delivery", label: "Dostawa", icon: Truck, intro: "Jak wysyłamy figurkę i ile trwa dostawa?",
    items: [
      { question: "Jak długo trwa realizacja zamówienia?", answer: "Termin zależy od wariantu i liczby poprawek. Dokładny przewidywany czas potwierdzimy po przyjęciu zamówienia." },
      { question: "Jakie formy dostawy są dostępne?", answer: "Możesz wybrać przesyłkę kurierską lub dostawę do punktu odbioru." },
      { question: "Czy figurka jest bezpiecznie zapakowana?", answer: "Tak. Figurkę zabezpieczamy przed przemieszczaniem i uszkodzeniem podczas transportu." },
      { question: "Czy wysyłacie zamówienia za granicę?", answer: "Możliwość wysyłki zagranicznej i jej koszt ustalamy indywidualnie przed złożeniem zamówienia." },
      { question: "Czy otrzymam numer przesyłki?", answer: "Tak. Po nadaniu paczki otrzymasz informacje umożliwiające śledzenie przesyłki." },
    ],
  },
  {
    id: "payments", label: "Płatności", icon: CreditCard, intro: "Jakie formy płatności są dostępne i kiedy należy zapłacić?",
    items: [
      { question: "Jak mogę zapłacić za zamówienie?", answer: "Dostępne metody płatności zobaczysz na etapie finalizacji zamówienia." },
      { question: "Kiedy następuje płatność?", answer: "Płatność odbywa się po sprawdzeniu konfiguracji i danych zamówienia, przed rozpoczęciem realizacji." },
      { question: "Czy podane ceny są ostateczne?", answer: "Cena w podsumowaniu obejmuje wybrane opcje. Nietypowe elementy wymagające indywidualnej wyceny potwierdzimy osobno." },
      { question: "Czy mogę otrzymać dokument zakupu?", answer: "Tak. Dokument zakupu przekazujemy zgodnie z danymi podanymi podczas składania zamówienia." },
    ],
  },
  {
    id: "account", label: "Konto", icon: UserRound, intro: "Jak działa konto, gdzie sprawdzić status zamówienia?",
    items: [
      { question: "Czy muszę zakładać konto, aby złożyć zamówienie?", answer: "Nie. Zamówienie możesz złożyć bez tworzenia konta." },
      { question: "Gdzie sprawdzę status zamówienia?", answer: "Najważniejsze informacje o postępie realizacji przekazujemy na adres podany w zamówieniu." },
      { question: "Jak zmienić dane kontaktowe w zamówieniu?", answer: "Skontaktuj się z nami jak najszybciej i podaj dane pozwalające zidentyfikować zamówienie." },
    ],
  },
  {
    id: "other", label: "Inne", icon: CircleHelp, intro: "Masz inne pytanie? Sprawdź tutaj lub skontaktuj się z nami.",
    items: [{ question: "Czy mogę zamówić coś, czego nie ma w konfiguratorze?", answer: "Tak. Opisz swój pomysł i prześlij materiały, a sprawdzimy możliwości wykonania i przygotujemy indywidualną wycenę." }],
  },
];

const totalQuestions = categories.reduce((sum, category) => sum + category.items.length, 0);

function CategoryIcon({ icon: Icon }: { icon: IconType }) {
  return <span className="grid size-8 shrink-0 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-4" strokeWidth={2} /></span>;
}

function FaqPage() {
  const [selected, setSelected] = useState<FaqCategory | "all">("all");
  const visibleCategories = selected === "all" ? categories : categories.filter((category) => category.id === selected);

  return (
    <main className="min-h-screen overflow-x-clip bg-background">
      <SiteHeader active="faq" />

      <section className="relative min-h-[270px] overflow-hidden bg-brand-soft sm:min-h-[310px]">
        <img src={faqHero} alt="Personalizowana figurka 3D pary" width={1920} height={700} className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center" />
        <div className="section-shell relative z-10 flex min-h-[270px] items-center py-10 sm:min-h-[310px]">
          <div className="max-w-[510px]">
            <p className="text-[11px] font-extrabold uppercase text-primary">FAQ</p>
            <h1 className="mt-2 text-[34px] font-extrabold leading-[1.08] text-foreground sm:text-[42px]">Najczęściej zadawane<br className="hidden sm:block" /> pytania</h1>
            <p className="mt-4 max-w-[470px] text-[13px] leading-6 text-muted-foreground">Zebraliśmy tutaj najważniejsze informacje, które pomogą Ci w łatwy sposób zamówić swoją personalizowaną figurkę 3D.</p>
          </div>
        </div>
      </section>

      <section className="bg-card py-8 md:py-10">
        <div className="section-shell grid items-start gap-7 lg:grid-cols-[285px_minmax(0,1fr)] lg:gap-8">
          <aside className="overflow-x-auto rounded-md border border-border bg-card p-2 lg:sticky lg:top-[84px]" aria-label="Kategorie pytań">
            <div className="flex min-w-max gap-1 lg:min-w-0 lg:flex-col">
              <Button type="button" variant="ghost" onClick={() => setSelected("all")} aria-pressed={selected === "all"} className={`h-11 justify-start gap-3 px-3 text-xs shadow-none ${selected === "all" ? "bg-secondary text-primary hover:bg-secondary" : "text-foreground"}`}>
                <FileText className="size-4" /><span>Wszystkie pytania</span><span className="ml-auto text-[10px] text-muted-foreground">({totalQuestions})</span>
              </Button>
              {categories.map(({ id, label, icon: Icon, items }) => (
                <Button key={id} type="button" variant="ghost" onClick={() => setSelected(id)} aria-pressed={selected === id} className={`h-11 justify-start gap-3 px-3 text-xs shadow-none ${selected === id ? "bg-secondary text-primary hover:bg-secondary" : "text-foreground"}`}>
                  <Icon className="size-4" /><span>{label}</span><span className="ml-auto text-[10px] text-muted-foreground">({items.length})</span>
                </Button>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            {visibleCategories.map((category) => (
              <section key={category.id} aria-labelledby={`faq-${category.id}`}>
                <div className="mb-2.5 flex items-center gap-3">
                  <CategoryIcon icon={category.icon} />
                  <div>
                    <h2 id={`faq-${category.id}`} className="text-sm font-extrabold text-foreground">{category.label}</h2>
                    <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground">{category.intro}</p>
                  </div>
                </div>
                <Accordion type="single" collapsible className="space-y-1.5">
                  {category.items.map((item, index) => (
                    <AccordionItem key={item.question} value={`${category.id}-${index}`} className="overflow-hidden rounded-md border border-border bg-background px-4 transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-secondary/40">
                      <AccordionTrigger className="min-h-10 py-2.5 text-[11px] font-bold leading-5 hover:text-primary hover:no-underline">{item.question}</AccordionTrigger>
                      <AccordionContent className="pr-8 pb-3 text-[11px] leading-5 text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}

            <div className="flex flex-col gap-4 rounded-md bg-banner px-5 py-5 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary-foreground/30"><Headphones className="size-5" /></span>
                <div><h2 className="text-sm font-extrabold">Nie znalazłeś odpowiedzi na swoje pytanie?</h2><p className="mt-1 text-[10px] text-banner-muted">Skontaktuj się z nami – chętnie pomożemy i rozwiejemy wszelkie wątpliwości.</p></div>
              </div>
              <Button variant="hero" asChild className="shrink-0"><a href="mailto:prezent3d@gmail.com">Skontaktuj się z nami <ArrowRight /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="section-shell grid grid-cols-2 gap-y-6 py-7 lg:grid-cols-4">
          {([
            [ShieldCheck, "Bezpieczne płatności", "Szybkie i bezpieczne metody płatności."],
            [PackageCheck, "Terminowa realizacja", "Dokładamy starań, aby figurka dotarła na czas."],
            [Box, "Wysoka jakość", "Dbałość o każdy detal – od modelu po wykończenie."],
            [Heart, "Indywidualne podejście", "Każda figurka jest tworzona z myślą o Tobie."],
          ] as const).map(([Icon, title, text], index) => (
            <div key={title} className={`flex gap-3 px-3 sm:px-5 ${index > 0 ? "lg:border-l lg:border-border" : ""}`}>
              <Icon className="mt-0.5 size-6 shrink-0 text-primary" />
              <div><h2 className="text-[11px] font-bold text-foreground">{title}</h2><p className="mt-1 text-[9px] leading-4 text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}