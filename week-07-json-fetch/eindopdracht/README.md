# Eindopdracht Week 7 — Receptenboek

## Theorie

Gebruik de volgende cheatsheet-pagina's als je ergens niet uitkomt. Je kunt een specifieke term (zoals een functienaam of methode) ook direct opzoeken in de zoekbalk bovenaan de cheat sheet. Dan spring je meteen naar de uitleg en hoef je niet de hele pagina te doorzoeken:

- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, JSON-structuur lezen
- [Objecten](https://meesterjson.nl/cheat-sheet/pages/javascript/objects.html) — properties uitlezen
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()` en `.length`
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`
- [Foutmeldingen](https://meesterjson.nl/cheat-sheet/pages/javascript/foutmeldingen.html) — zoek hier je foutmelding op

## Opdracht

Maak een receptenboek dat de recepten uit `recepten.json` laadt en toont. Bezoekers kunnen filteren op categorie en op vegetarisch.

> Open de pagina met **Live Server**, anders werkt `fetch` niet.

`recepten.json` is een stuk groter dan het bestand van de nieuwsfeed. Elk recept heeft 13 properties, en sommige daarvan zijn zelf een **object** of een **array**. Zo ziet één recept eruit (ingekort):

```json
{
  "naam": "Spaghetti carbonara",
  "emoji": "🍝",
  "categorie": "Hoofdgerecht",
  "bereidingstijd": 25,
  "personen": 4,
  "vegetarisch": false,
  "stappen": [
    "Kook de spaghetti beetgaar.",
    "Bak de spekblokjes knapperig."
  ],
  "beoordeling": { "gemiddelde": 4.6, "aantal": 212 }
}
```

- `{ }` is een **object**: je gaat erin met een punt, bijvoorbeeld `recept.beoordeling.gemiddelde`.
- `[ ]` is een **array**: je gaat erin met een nummer, bijvoorbeeld `recept.stappen[0]`, of je loopt erdoorheen.

## Stappen

### Stap 1 — Laden en verkennen (~45 min)
Laad `recepten.json` met `fetch`, net als in oefening 3. Sla de recepten op in `alleRecepten` en log ze in de console.

Klap in de console het eerste recept open en zoek uit:

- **1a** Welk type heeft de waarde van `naam`, `bereidingstijd`, `vegetarisch`, `stappen` en `beoordeling`: tekst, getal, boolean, array of object?
- **1b** Met welk pad kom je bij de gemiddelde beoordeling van het eerste recept? Test het met `console.log`.

Schrijf je antwoorden als commentaar in `script.js`.

### Stap 2 — Recepten tonen (~1,5 uur)
Schrijf de functie `toonRecepten(lijst)` en roep hem aan met `alleRecepten`. Toon elk recept als `<article>` met:

- de emoji en de naam in een `<h3>`
- categorie, bereidingstijd en personen: `Hoofdgerecht · 25 min · 4 personen`
- de beoordeling: `⭐ 4.6 (212 beoordelingen)`
- het aantal stappen, en `🌱 Vegetarisch` als het recept vegetarisch is: `4 stappen 🌱 Vegetarisch`

### Stap 3 — Filterknoppen (~1,5 uur)
Laat alle knoppen in de HTML werken:

- **Alle recepten** toont weer alle recepten.
- **Ontbijt**, **Voorgerecht**, **Hoofdgerecht** en **Dessert** tonen alleen de recepten uit die categorie.
- **🌱 Vegetarisch** toont alleen de vegetarische recepten.

Filter steeds `alleRecepten` en geef het resultaat mee aan `toonRecepten`.

## Bonusopdracht

- Toon onder elk recept de bereidingsstappen in een genummerde lijst (`<ol>`). Daarvoor heb je een loop in je loop nodig.
- Toon in `#counter` hoeveel recepten er te zien zijn, bijvoorbeeld `5 recepten`, en zorg dat het klopt na elke filterknop.

## Inleveren

Commit en push je werk. Lever de branch-link in via Canvas.
