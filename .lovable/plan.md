# Nowe pytanie na początku sekcji „Zamówienie" na podstronie FAQ

## Zakres
- Dodać na pierwszym miejscu w sekcji „Zamówienie" pytanie: „Czy mogę zamówić samą figurkę zwierzęcia np. psa/kota?".
- Odpowiedź: „Tak. W takim przypadku, przy wyborze kogo ma przedstawiać figurka, zostaw zaznaczoną opcję „Osoba", a jeśli chcesz dołożyć zwierzaka, dodaj dodatkowo opcję „Zwierzę"."
- Zmiana wyłącznie w danych FAQ w `src/routes/faq.tsx` — pytanie wstawione jako pierwsze w kategorii „Zamówienie", dzięki temu automatycznie pojawia się też w wyświetlanej sekcji (która pobiera pierwsze 5 pytań tej kategorii).
- Bez zmian w układzie, stylach, pozostałych pytaniach i innych stronach.

## Weryfikacja
- Sprawdzić podgląd `/faq`: nowe pytanie widoczne na górze sekcji „Zamówienie", rozwijanie działa, poprawność kompilacji.
