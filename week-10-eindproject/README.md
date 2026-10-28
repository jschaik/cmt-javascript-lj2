# Week 10 — Eindproject: Binge-planner

## Theorie

Deze week leer je niets nieuws: dit is het eindproject van periode 1. Je gebruikt alles wat je in week 2 tot en met 9 hebt geleerd. Kom je ergens niet uit? Kijk dan terug in je eigen eindopdrachten, vooral die van week 9 (Pokémon-favorieten): die lijkt veel op deze opdracht. Je kunt een specifieke term ook direct opzoeken in de zoekbalk bovenaan de cheat sheet:

- [API's](https://meesterjson.nl/cheat-sheet/pages/javascript/api.html) — een externe API aanroepen
- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, JSON-structuur lezen
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `find()`, `includes()`
- [Objecten](https://meesterjson.nl/cheat-sheet/pages/javascript/objects.html) — objecten aanmaken en aanpassen
- [DOM & localStorage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — `localStorage`, `JSON.stringify`, `JSON.parse`
- [Foutmeldingen](https://meesterjson.nl/cheat-sheet/pages/javascript/foutmeldingen.html) — zoek hier je foutmelding op

## Opdracht

Bouw een **Binge-planner**: een app die 240 series laat zien, waarin je kunt zoeken en waarmee je series op je eigen watchlist zet. Op je watchlist vink je af wat je gezien hebt. Als je de pagina herlaadt, staat je watchlist er nog.

Je gebruikt de [TVmaze API](https://www.tvmaze.com/api). Die is gratis en je hebt **geen API-key** nodig.

> Open de pagina met **Live Server**.

**URL:**

```
https://api.tvmaze.com/shows
```

Je krijgt een array met 240 series terug. Handige properties van een serie:

| Property | Voorbeeld |
|----------|-----------|
| `id` | `169` |
| `name` | `'Breaking Bad'` |
| `genres` | `['Drama', 'Crime', 'Thriller']`, een array |
| `rating.average` | `9.2`, een object in een object |
| `image.medium` | de URL van de poster, ook een object in een object |

## Basis (voldoende) — ~4 uur

### Stap 1 — Alle series laden en tonen (~1 uur)
- Haal de series op met `fetch` en sla ze op in `alleSeries`. Gebruik eerst `console.log` om de structuur te bekijken.
- Schrijf `toonSeries(lijst)`. Die toont elke serie als `<article>` in `#results`, met de poster, de naam, de genres en de beoordeling, en een knop **+ Watchlist** met de class `add-btn`.
- Bij een paar series is de beoordeling `null`. Toon dan `Geen beoordeling`. Dat doe je met een `if`.

### Stap 2 — Zoeken (~30 min)
- Filter `alleSeries` op naam terwijl de gebruiker typt in `#search-input`, en geef het resultaat mee aan `toonSeries`.
- Dit is hetzelfde als de zoekbalk in week 5 en week 8.

### Stap 3 — Toevoegen aan de watchlist (~1 uur)
- Geef in `toonSeries` elke **+ Watchlist**-knop een click listener. Dat gaat net zoals in week 9:
  ```js
  document.querySelectorAll('.add-btn').forEach((knop, i) => {
    knop.addEventListener('click', () => {
      const serie = lijst[i]; // de serie bij deze knop
      // ...
    });
  });
  ```
- Maak bij een klik een **eigen object** met alleen wat je nodig hebt, en voeg het toe aan `watchlist`:
  ```js
  { id: 169, naam: 'Breaking Bad', poster: '...', gezien: false }
  ```
- Zorg dat een serie niet twee keer op je watchlist komt. Controleer het `id` met `find()`.
- Schrijf `toonWatchlist()`. Die toont elke serie als `<li>` in `#watchlist`, met een checkbox (class `seen-checkbox`), de poster en de naam in een `<span>`.

### Stap 4 — Opslaan in localStorage (~30 min)
- Schrijf `opslaan()`. Die bewaart `watchlist` in localStorage. Roep hem aan na elke wijziging.
- Laad de watchlist bij het openen van de pagina weer in en roep meteen `toonWatchlist()` aan.

### Stap 5 — Gezien afvinken (~1 uur)
- Geef in `toonWatchlist` elke checkbox een `change`-listener. Zet `gezien` van die serie op `true` of `false`, sla op en toon de watchlist opnieuw.
- Zet de klasse `gezien` op de `<li>` als de serie gezien is. De CSS om de naam door te strepen staat al klaar.

## Uitbreiding (goed)

Is de basis af? Ga dan verder met deze twee onderdelen:

- **A. Verwijderen:** geef elke serie op je watchlist een verwijderknop. Haal de serie uit `watchlist` met `filter()` op het `id`.
- **B. Filteren:** laat de knoppen **Alle**, **Nog kijken** en **Gezien** werken. Houd in een variabele `filter` bij welke knop actief is, en filter in `toonWatchlist()` eerst de lijst voordat je hem toont.

> ⚠️ **Let op bij B.** Als er een filter actief is, toon je niet de hele `watchlist` maar een gefilterde lijst. De `i` van je checkbox en verwijderknop hoort dan bij die gefilterde lijst. Gebruik dus `lijst[i]` en niet `watchlist[i]`, anders pas je de verkeerde serie aan.

## Bonusopdracht

- Toon in `#counter` hoeveel series je al gezien hebt, bijvoorbeeld `3 van 8 gezien`.
- Schakel de knop **+ Watchlist** uit (`disabled`) als een serie al op je watchlist staat.
- Voeg een knop toe die alle series sorteert op beoordeling, de hoogste bovenaan.

## Tips

- **Werk stap voor stap** en test na elke stap in de browser. Kijk ook steeds in de console.
- **Na het herladen is je watchlist leeg?** Controleer of je bij het opslaan `JSON.stringify` gebruikt en bij het inladen `JSON.parse`. Kijk ook in DevTools → **Application** → **Local Storage** wat er echt is opgeslagen.
- **Klik je op een knop en gebeurt er niets?** Elke keer als je `innerHTML` opnieuw vult, zijn de oude knoppen weg. Daarom geef je de knoppen hun listeners **binnen** `toonSeries` en `toonWatchlist`, direct na het tonen.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
