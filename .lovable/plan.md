## Usuwanie dodanych zdjęć, gdy krok "Zdjęcia" jest nieaktywny

Problem: gdy odznaczysz wcześniejsze punkty, cała sekcja "Zdjęcia" robi się wyszarzona i przestaje reagować na kliknięcia, więc przycisk X na miniaturach też nie działa.

Zmiana:
- Sekcja "Zdjęcia" nadal jest wyszarzona i nie da się w niej dodawać nowych zdjęć (bez zmian).
- Tylko lista "Dodane zdjęcia" (miniatury z X oraz podgląd) będzie klikalna, nawet gdy sekcja jest nieaktywna, więc zdjęcia da się usunąć.
- Wygląd i pozostała mechanika bez zmian.

### Szczegóły techniczne
- `src/routes/oferta.tsx`, sekcja `#zdjecia`: kontener z `OrderPhotoGallery` dostaje `pointer-events-auto` (nadpisuje `pointer-events-none` rodzica). Pole wgrywania pozostaje zablokowane.
- Weryfikacja w Playwright: dodać zdjęcie, odznaczyć punkty, kliknąć X, sprawdzić że zdjęcie znika.
