# Przebudowa podstrony /kontakt

## Cel
Dostosowanie podstrony Kontakt: banner na górze jak na FAQ, kontakt e-mail/telefon/FAQ w miejscu trzech „atutów", usunięcie dolnych boksów z FAQ i „Masz inny pomysł?".

## Zmiany

### 1. Nowy banner na górze (jak na /faq)
- Wygenerować nową grafikę bannerową (1920x704, inna niż na FAQ, pasująca stylistycznie do strony — motyw personalizowanej figurki 3D, kolory brandu) → `src/assets/kontakt-banner.jpg`.
- Dodać na samej górze podstrony pełno szerokościowy banner o tych samych wymiarach i strukturze co na /faq (`min-h-[270px]` / `sm:min-h-[310px]`, zdjęcie `object-cover` + tekst na tle): napis „KONTAKT", nagłówek „Skontaktuj się z nami" i jedno zdanie opisu — ta sama typografia co na FAQ.
- Usunąć dotychczasowy nagłówek sekcji hero (przenosi się do banera).

### 2. Sekcja z formularzem — zamiast trzech „atutów" dane kontaktowe
Usunąć trzy kafelki („Szybka odpowiedź", „Indywidualne podejście", „Bezpieczna współpraca") oraz akapit „Masz pytanie, pomysł...". W ich miejscu wstawić trzy pozycje:
- **E-mail** — prezent3d@gmail.com (link mailto),
- **Telefon** — +48 123 456 789 (obecny placeholder, bez zmiany, dopóki użytkownik nie poda prawdziwego),
- **FAQ** — link do /faq („Sprawdź najczęstsze pytania").
Formularz „Napisz do nas" i zdjęcie po prawej zostają bez zmian.

### 3. Usunięcie dolnej sekcji
Usunąć całą sekcję z dwoma panelami: accordion „Zanim napiszesz" (Najczęściej zadawane pytania) oraz kartę „Masz inny pomysł?" (wraz ze zdjęciem szkicu).
Sekcja „Inne sposoby kontaktu" i dolny pasek „Nie znalazłeś odpowiedzi?..." zostają.

### 4. Porządki
- Usunąć nieużywane dane (quickFaq), importy (Accordion, Zap, Lightbulb, itd.) i `kontakt-szkic.png`, jeśli przestanie być używane.
- Bez zmian w head()/meta.

## Weryfikacja
- Build czysty; podgląd /kontakt: banner jak na FAQ, e-mail/telefon/FAQ pod nagłówkiem sekcji formularza, brak dolnych boksów, klikalne linki (mailto, tel, /faq).
