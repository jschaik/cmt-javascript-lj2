# Eindopdracht Week 8 — Eigen API naar keuze

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt:

- [API's](https://meesterjson.nl/cheat-sheet/pages/javascript/api.html) — een externe API aanroepen en de response verwerken
- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, JSON lezen
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`

## Opdracht

Kies een API en bouw er een app omheen die data ophaalt, toont en filtert.

**Aanbevolen API's (geen key nodig):**

- `https://restcountries.com/v3.1/all?fields=name,capital,population,flags` — landen met vlaggen, hoofdsteden en inwoners
- `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` — cocktails op naam zoeken
- `https://openlibrary.org/search.json?q=` — boeken zoeken op trefwoord
- `https://jsonplaceholder.typicode.com/posts` — nep-blogposts, handig om mee te oefenen

## Stappen

### Stap 1 — API verkennen (~30 min)
Vul de API-URL in `script.js` in en open de app in de browser. Gebruik `console.log(data[0])` om de structuur van één item te bekijken. Noteer welke properties je wil gebruiken.

### Stap 2 — Data tonen (~1 uur)
Vul de functie `showItems(items)` in zodat elk item als een `<article>` verschijnt in `#results`. Toon minimaal twee properties per item.

### Stap 3 — Zoekbalk of filter toevoegen (~1 uur)
Voeg een `<input>` of knop toe aan de HTML. Filter `allItems` op basis van de invoer en roep `showItems()` aan. Dit werkt hetzelfde als in week 6 en 7.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
