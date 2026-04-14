# Eindopdracht Week 7 — Nieuwsfeed uitgebreid

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt:

- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, `.catch()`
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`
- [DOM & Local Storage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — elementen selecteren en tekst tonen
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`

## Opdracht

Breid de nieuwsfeed van week 6 uit met een zoekbalk, een lege staat en een foutmelding.

> De artikelen staan al klaar in `news.json`. Elk artikel heeft de properties `title`, `category`, `date` en `summary`.

## Stappen

### Stap 1 — Vertrekpunt opzetten (~30 min)
De structuur van `script.js` lijkt op week 6. Vul de functie `showArticles(articles)` in en laat de fetch de artikelen laden en tonen. Zorg dat de filterknoppen werken zoals in week 6.

### Stap 2 — Zoekbalk toevoegen (~1 uur)
Voeg een event listener toe aan `#search-bar`. Filter de artikelen live op `title` terwijl de gebruiker typt. Gebruik `includes()` en `toLowerCase()`. Zorg dat zoeken en filteren op categorie tegelijk werken.

### Stap 3 — Lege staat (~30 min)
Als er na filteren of zoeken geen artikelen overblijven, toon je een melding in `#articles` zoals `<p>Geen artikelen gevonden.</p>` in plaats van een lege lijst.

### Stap 4 — Foutmelding bij laden (~30 min)
Toon `<p>Laden...</p>` in `#articles` terwijl de fetch bezig is. Als de fetch mislukt (gebruik `.catch()`), toon je `<p>Er is iets misgegaan.</p>`.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
