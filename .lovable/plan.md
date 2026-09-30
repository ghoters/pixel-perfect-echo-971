# Oferta: przytrzymaj pozycję ceny i przycisku w karcie „Dodaj własny element"

## Problem
Na stronie /oferta po zaznaczeniu karty „Dodaj własny element" (+ 80 zł) etykieta ceny przesuwa się o 6 px w dół, a pasek pola tekstowego o 4 px w dół względem stanu odznaczonego. Zmierzone w podglądzie:
- „+ 80 zł": 515.5 px → 521.5 px (zaznaczone)
- przycisk „Dodaj własny element" / pole „Wpisz element": 543.5 px → 547.5 px

## Przyczyna (potwierdzona w kodzie i pomiarami)
W `src/routes/oferta.tsx` podczas edycji (karta zaznaczona, opis niezatwierdzony) edytor jest pozycjonowany absolutnie, a kolumna tekstowa dostaje inny padding:
- kolumna: `pb-[38px]` (zaznaczona) zamiast `py-1` (odznaczona) → cena o 6 px niżej,
- edytor: `bottom-3.5` (14 px) zamiast pozycji odpowiadającej przyciskowi w stanie odznaczonym → 4 px za nisko.

## Zmiana (tylko `src/routes/oferta.tsx`)
1. Linia ~278: w wariancie `absEditor` zmiana `pb-[38px]` na `pb-[44px]` (oba warianty tej gałęzi — dotyczy wyłącznie karty „Dodaj własny element").
2. Linia ~328: kontener absolutnego edytora `bottom-3.5` → `bottom-[18px]`.

Po zmianie: „+ 80 zł" i pasek edycji/„Dodaj własny element"/chip z zapisanym opisem będą na identycznej wysokości 515.5 px i 543.5 px w każdym stanie (odznaczona / zaznaczona / zapisana).

Mechanika (zaznaczanie, wpisywanie, zatwierdzanie, podsumowanie, ceny) — bez zmian. Inne karty (Osoba, Zwierzę) nie używają `textInput`, więc ich wygląd nie zmienia się wcale.

## Weryfikacja
1. Playwright: zmierzyć pozycje „+ 80 zł" oraz przycisku/pola w stanie odznaczonym i zaznaczonym — muszą być identyczne.
2. Zrzuty ekranu obu stanów do porównania wizualnego.
3. Sprawdzić build (build-errors.log).
