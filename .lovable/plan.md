# Kontakt: placeholder u góry + sekcja kontaktu na środku strony

## Zakres
Zmiany tylko w `src/routes/kontakt.tsx`. Stopka zostaje na dole, treść kontaktowa bez zmian (atuty, formularz, zdjęcie figurki, dolny pasek).

## Co zmieniamy

### 1. Placeholder na górze, pod nagłówkiem
- Pod `SiteHeader` dodajemy pełnoszerokościowy banner 1:1 jak na `/faq`: `min-h-[270px]`, `sm:min-h-[310px]`, grafika w tle (`object-cover`), tekst po lewej, stopka z offsetem na mobile.
- Grafika: ponownie używamy istniejącego `src/assets/faq-hero.jpg` (bez generowania nowego pliku).
- Tekst w bannerze: nadtytuł „Kontakt", nagłówek „Skontaktuj się z nami", krótki podtytuł — przeniesiony z obecnej sekcji kontaktowej (dzięki temu sekcja kontaktowa pod bannerem jest wizualnie lżejsza).

### 2. Sekcja kontaktu na wysokości środka strony
- Layout strony: `main` jako kolumna `flex min-h-screen flex-col`.
- Banner u góry, stopka na dole (`mt-auto`), a sekcja kontaktowa (`flex-1`) z treścią wyśrodkowaną w pionie — formularz, atuty i zdjęcie figurki trafiają na środek przestrzeni między bannerem a stopką.
- Obecna zawartość sekcji (trzy atuty, formularz „Napisz do nas", zdjęcie figurki z podpisem) zostaje bez zmian; usuwamy tylko duplikujący się nagłówek „Skontaktuj się z nami", który trafia do bannera.

### 3. Bez zmian
- Dolny pasek „Nie znalazłeś odpowiedzi?…" oraz stopka zostają dokładnie tam, gdzie są.

## Szczegóły techniczne
- Import `faqHero` z `@/assets/faq-hero.jpg`; pozycjonowanie obrazu jak na FAQ (`object-[0%_center]` na mobile, `object-center` na desktopie) — grafika zawiera figurki, więc na mobile przesuwamy kadr, żeby tekst się nie nakładał.
- Build + podgląd w przeglądarce (desktop + mobile) po zmianach.
