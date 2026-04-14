# Eindopdracht Week 5 — Scorebord

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt:

- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`, `map()`, `sort()`, `slice()`
- [Objecten](https://meesterjson.nl/cheat-sheet/pages/javascript/objects.html) — object literals en properties
- [Destructuring & spread](https://meesterjson.nl/cheat-sheet/pages/javascript/destructuring-spread.html) — spread-operator
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`
- [DOM & Local Storage](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-local-storage.html) — elementen selecteren en tekst tonen

## Opdracht

Maak een scorebord dat spelers toont, sorteert en filtert.

> De spelers staan al als objecten in de array in `script.js`. Je hoeft geen spelers te bedenken — je leest de eigenschappen uit met `speler.naam`, `speler.score` en `speler.level`.

## Stappen

### Stap 1 — Scorebord tonen (~1 uur)
Schrijf de functie `showScoreboard()` zodat alle spelers als lijstitems verschijnen in `#scoreboard`. Toon de naam en score van elke speler. Sorteer de lijst van hoog naar laag op score zodat de beste speler bovenaan staat.

### Stap 2 — Top 5 en zoekbalk (~1 uur)
Beperk de getoonde lijst tot de **top 5** met `slice(0, 5)`. Voeg daarna een event listener toe aan `#search-bar`. Filter de spelers live op naam terwijl de gebruiker typt. Gebruik `includes()` en `toLowerCase()` zodat hoofdletters niet uitmaken.

### Stap 3 — Filteren op level (~30 min)
Voeg event listeners toe aan de twee filterknoppen. Bij klik filter je op `level >= 2` of toon je alle spelers. Gebruik de `activeFilter` variabele om bij te houden welke filter actief is. Zoeken en filteren moeten tegelijk kunnen werken.

### Stap 4 — Speler toevoegen (~1 uur)
Laat het formulier werken met een submit event. Maak een nieuw speler-object aan met spread op een standaardobject en voeg het toe aan de array. Hoe je het standaardobject opzet bepaal je zelf.

```javascript
const standaard = { naam: '', score: 0, level: 1 };
const nieuweSpeler = { ...standaard, naam: 'Remi', score: 2700, level: 2 };
```

## Bonusopdracht

Voeg een **Verwijder**-knop toe per speler. Bij verwijderen haal je de speler uit de array en roep je `showScoreboard()` opnieuw aan. Hoe je de juiste speler uit de array haalt bepaal je zelf.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
