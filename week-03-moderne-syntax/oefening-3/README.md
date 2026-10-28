# Oefening 3 Week 3 — Playlist-bouwer

## Opdracht (~60 min)

Bouw je eigen playlist: vul een titel en een artiest in, druk op de knop en het nummer verschijnt als kaartje op de pagina. Bovenaan zie je hoeveel nummers er in je playlist staan.

In deze oefening combineer je de moderne syntax uit oefening 1 (arrow functions, template literals) met events uit oefening 2 — maar nu met een **formulier**. Het skelet staat al klaar in `script.js`, jij vult de TODO's in.

### Stap 1 — Een kaartje maken (~15 min)
Schrijf de arrow function `maakNummerKaart(titel, artiest)`. Die geeft met een template literal (backticks!) deze HTML terug:

```html
<article>
  <h3>Bohemian Rhapsody</h3>
  <p>Queen</p>
</article>
```

Test je functie door de testregel onder de functie aan te zetten (haal de `//` weg). Zie je het kaartje? Zet de regel dan weer uit.

### Stap 2 — Formulier laten werken (~20 min)
De submit-listener en `e.preventDefault()` staan er al. Vul de TODO's in:

1. Lees de waarden van `#title` en `#artist` uit met `.value.trim()`.
2. Roep `maakNummerKaart` aan en voeg het resultaat toe aan `#playlist` met `innerHTML +=`.
3. Maak het formulier leeg met `form.reset()`.

### Stap 3 — Lege invoer negeren (~10 min)
Als de titel of de artiest leeg is, stop dan met `return` voordat er een kaartje wordt toegevoegd. Probeer het: druk op de knop met lege velden, of met alleen spaties.

### Stap 4 — Teller (~15 min)
Houd in de variabele `aantal` bij hoeveel nummers er zijn toegevoegd. Toon na elke toevoeging in `#counter` de tekst `Je playlist heeft 3 nummers` (gebruik een template literal).

## Bonusopdracht

Laat de knop `#clear-btn` werken: bij een klik wordt de playlist leeggemaakt (`innerHTML = ''`) en staat de teller weer op 0.

## Tips

**Waarom `.trim()`?** `.trim()` haalt spaties aan het begin en eind weg. Zonder `.trim()` telt `'   '` (alleen spaties) niet als leeg.

**`innerHTML =` of `innerHTML +=`?** Met `=` vervang je alles wat erin staat, met `+=` voeg je er iets aan toe.

**Template literals over meerdere regels:** tussen backticks mag je gewoon op een nieuwe regel verder typen. Dat maakt HTML in je JavaScript een stuk leesbaarder.

## Concepten

- arrow functions die een template literal teruggeven
- `addEventListener('submit', ...)` en `e.preventDefault()`
- `.value.trim()`
- vroegtijdig stoppen met `return`
- `innerHTML +=`
- `form.reset()`

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [Moderne syntax](https://meesterjson.nl/cheat-sheet/pages/javascript/modern-syntax.html) — arrow functions en template literals
- [DOM manipulatie](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-manipulatie.html) — `innerHTML` en elementen selecteren
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — formulier submit afhandelen
