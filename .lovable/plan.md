# FAQ — kolejność pytań w sekcji „Zamówienie"

## Cel
Pytanie „Czy mogę zamówić samą figurkę zwierzęcia np. psa/kota?" ma być **drugim** pytaniem w sekcji „Zamówienie", a pierwszym — rozwiniętym na starcie — ma być „Jak zamówić figurkę 3D?".

## Stan obecny (zweryfikowany w `src/routes/faq.tsx`)
- Pytanie o zwierzęta jest obecnie **pierwsze** (linia ~47), więc to ono rozwija się na starcie (`defaultValue: "order-0"`).
- „Jak zamówić figurkę 3D?" jest drugie.
- Odpowiedź na pytanie o zwierzęta jest już zgodna z treścią podaną przez użytkownika — bez zmian.

## Zmiany
W `src/routes/faq.tsx`, w tablicy `categories` → kategoria `order`:
1. Zamień kolejność dwóch pierwszych elementów:
   - pozycja 1: „Jak zamówić figurkę 3D?"
   - pozycja 2: „Czy mogę zamówić samą figurkę zwierzęcia np. psa/kota?" (z istniejącą odpowiedzią o opcji „Osoba" / „Zwierzę")
2. Reszta pytań, sekcji i mechanika akordeonu — bez zmian.

Mechanika rozwijania nie wymaga edycji: `defaultValue: "order-0"` rozwija pierwszy element sekcji, więc po zamianie na starcie rozwinie się „Jak zamówić figurkę 3D?".

## Weryfikacja
- Otworzyć `/faq` w podglądzie (Playwright): sprawdzić, że pierwsze rozwinięte pytanie to „Jak zamówić figurkę 3D?", a pytanie o zwierzęta jest drugie i rozwija się po kliknięciu.
- Sprawdzić `/tmp/observability/build-errors.log` — budowanie bez błędów.
