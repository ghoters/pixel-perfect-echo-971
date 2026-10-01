# FAQ — zaktualizowana odpowiedź: „Ile osób może być na jednej figurce?"

## Cel
Odpowiedź w FAQ ma odzwierciedlać rzeczywiste działanie konfiguratora: limit 6 osób / 6 zwierząt, a większe lub nietypowe zamówienia wyceniane indywidualnie.

## Zmiana
Plik `src/routes/faq.tsx` (kategoria „Zamówienie", obecna linia 50):

- **Pytanie:** bez zmian — „Ile osób może być na jednej figurce?"
- **Odpowiedź (nowa treść):**
  „Tak, w konfiguratorze można dodać do 6 osób i 6 zwierząt. Ogólnie na figurce można umieścić sporo osób — przy większych lub indywidualnych zamówieniach wyceniamy je indywidualnie."

## Bez zmian
- Pozycja pytania w sekcji, kolejność pozostałych pytań, rozwinięte na starcie pierwsze pytanie — bez zmian.
- Konfigurator (`oferta.tsx`) i limit 6 osób/zwierząt — bez zmian, zgodnie z wcześniejszym ustaleniem.
- Brak zmian w nagłówkach, meta i pozostałych sekcjach FAQ.

## Weryfikacja
- Podgląd `/faq`: pytanie rozwija się, nowa odpowiedź widoczna, pierwsze pytanie nadal rozwinięte na starcie.
- Sprawdzenie `/tmp/observability/build-errors.log` — budowanie bez błędów.
