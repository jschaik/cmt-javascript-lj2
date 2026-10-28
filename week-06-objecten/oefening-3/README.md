# Oefening 3 Week 6 — Dierenasiel

## Opdracht (~40 min)

Het dierenasiel wil een pagina met alle dieren die op een nieuw baasje wachten. Bezoekers moeten ook alleen de katten kunnen bekijken.

Je doet hetzelfde als met `toonSmaken(lijst)` in week 5: één functie die een lijst toont. Het verschil is dat er nu in de array geen tekst zit, maar een **object per dier**:

```js
{ naam: 'Boef', soort: 'hond', leeftijd: 4, beschikbaar: true }
```

In oefening 2 gebruikte je al destructuring om properties uit een object te halen. Nu doe je dat binnen een functie die je steeds opnieuw aanroept.

## Stappen

### Stap 1 — Dieren tonen (~15 min)
Vul de loop in `toonDieren(lijst)` in:

1. Haal `naam`, `soort` en `leeftijd` uit `dier` met destructuring:
   ```js
   const { naam, soort, leeftijd } = dier;
   ```
2. Zet elk dier als `<article>` in de container, met de naam in een `<h3>` en `hond, 4 jaar` in een `<p>`.

De aanroep `toonDieren(dieren)` staat al klaar. Als het goed is, zie je nu vijf dieren.

### Stap 2 — Beschikbaar of gereserveerd? (~10 min)
Voeg `beschikbaar` toe aan je destructuring. Maak met een `if` een variabele `status` die `'Beschikbaar'` of `'Gereserveerd'` is, en toon die op het kaartje.

### Stap 3 — Filterknoppen (~15 min)
1. **3a** Bij een klik op **Alleen katten**: maak met `filter()` een nieuwe array met alleen de dieren waarvan `dier.soort === 'kat'`. Geef die mee aan `toonDieren`.
2. **3b** Bij een klik op **Alle dieren**: toon weer alle dieren.

> **Wat is `dier` in de filter?** `filter()` loopt door de array en geeft elk object één voor één aan je arrow function. In `dier => dier.soort === 'kat'` is `dier` dus steeds één object, bijvoorbeeld het object van Minoes. Daarom schrijf je `dier.soort` en niet `dieren.soort`.

## Bonusopdracht

Laat de knop **Nieuw dier binnengekomen** werken. Voeg bij een klik met `push()` dit object toe aan de array `dieren`:

```js
{ naam: 'Pip', soort: 'konijn', leeftijd: 1, beschikbaar: true }
```

Roep daarna `toonDieren(dieren)` aan, zodat Pip op de pagina verschijnt.

## Tips

**Waarom heet de parameter `lijst` en niet `dieren`?** Dat zou ook kunnen, maar dan zijn er twee dingen met de naam `dieren`: de array bovenaan en het doosje van de functie. Met de naam `lijst` zie je duidelijk dat de functie toont wat je meegeeft. Dat is soms alles, en soms alleen de katten.

**Zie je `undefined` op een kaartje?** Controleer of de naam in je destructuring precies gelijk is aan de property in het object, dus `leeftijd` en niet `leeftijden` of `age`.

## Concepten

- een array met objecten
- destructuring: `const { naam, soort } = dier`
- `filter()` op een property van een object
- een gefilterde array meegeven aan een functie
- `push()` (bonus)

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [Objecten](https://meesterjson.nl/cheat-sheet/pages/javascript/objects.html) — properties
- [Destructuring & spread](https://meesterjson.nl/cheat-sheet/pages/javascript/destructuring-spread.html) — data uit objecten halen
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()` en `push()`
