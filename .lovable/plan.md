# Przebudowa podstrony Kontakt

## Zakres
Zmiany dotyczą wyłącznie strony `/kontakt` (plik `src/routes/kontakt.tsx`). Reszta strony bez zmian.

## Co zmieniamy

### 1. Nowy banner na górze (jak na FAQ)
- Nad obecną sekcją kontaktową dodajemy pełnoszerokościowy banner o identycznych wymiarach i strukturze jak banner na `/faq` (`min-h-[270px]`, `sm:min-h-[310px]`, grafika wypełniająca tło, tekst po lewej).
- Do bannera generujemy nową, pasującą grafikę (np. figurka 3D przy telefonie/notesie, styl spójny z resztą strony) i zapisujemy ją jako `src/assets/kontakt-banner.jpg`.
- W bannerze: nadtytuł „Kontakt”, nagłówek „Skontaktuj się z nami”, krótki podtytuł.

### 2. Sekcja pod bannerem — dane kontaktowe zamiast atutów
- Usuwamy trzy kafelki „Szybka odpowiedź”, „Indywidualne podejście”, „Bezpieczna współpraca” oraz akapit wprowadzający.
- W ich miejsce wstawiamy trzy pozycje kontaktowe w tym samym układzie/wielkości: **E-mail** (prezent3d@gmail.com), **Telefon** (+48 123 456 789 — placeholder) oraz **FAQ** (link do `/faq`).
- Formularz „Napisz do nas” i zdjęcie figurki po prawej pozostają bez zmian.

### 3. Usunięcie dolnych boksów
- Usuwamy cały boks „Zanim napiszesz” (akordeon FAQ) i „Masz inny pomysł?” (wraz ze szkicem `kontakt-szkic.png`).
- Zostają: sekcja „Inne sposoby kontaktu”, dolny pasek „Nie znalazłeś odpowiedzi?…” oraz stopka.

### 4. Sprzątanie kodu
- Usuwamy nieużywane po zmianach importy (`Zap`, `Lightbulb`, `Lock` jeśli nieużywany, `Accordion*`, `kontaktSzkic`, `quickFaq`) tak, aby build był czysty.

## Szczegóły techniczne
- Banner kopiowany 1:1 z `src/routes/faq.tsx` (sekcja `min-h-[270px]` z `object-cover`), tylko inna grafika i tekst.
- Telefon `+48 123 456 789` to placeholder — docelowo podmienimy na prawdziwy numer.
- Po zmianach: sprawdzenie builda i podgląd strony w przeglądarce (desktop + mobile).
