# Oefening 3 Week 7 — Nieuwsfeed

## Opdracht (~45 min)

Maak een nieuwsfeed die artikelen uit `news.json` laat zien, met knoppen om op categorie te filteren.

In oefening 1 laadde je al data met `fetch`. In week 5 en 6 maakte je een functie die een lijst toont en filterknoppen die er een gefilterde lijst aan meegeven. Nu combineer je die twee: dezelfde aanpak, maar de data komt uit een JSON-bestand.

> Open de pagina met **Live Server**, anders werkt `fetch` niet.

Elk artikel in `news.json` ziet er zo uit:

```json
{
  "title": "Nieuw fietspad door stadscentrum geopend",
  "category": "Stad",
  "date": "2026-04-01",
  "summary": "De gemeente heeft een nieuw fietspad geopend..."
}
```

Het laden met `fetch` staat al klaar in `script.js`. De artikelen worden bewaard in `allArticles` en daarna meegegeven aan `showArticles(allArticles)`.

## Stappen

### Stap 1 — Artikelen tonen (~20 min)
Vul de functie `showArticles(list)` in:

1. Maak `#articles` eerst leeg.
2. Loop met `for...of` door `list` en zet elk artikel als `<article>` in de container, met de `category` in een `<span>`, de `title` in een `<h2>` en de `summary` in een `<p>`.

Als het goed is, zie je nu zeven artikelen.

### Stap 2 — Filterknoppen (~25 min)
1. **2a** Bij een klik op **Alle**: toon weer alle artikelen.
2. **2b** Bij een klik op **Stad**: filter `allArticles` op `article.category === 'Stad'` en geef het resultaat mee aan `showArticles`.
3. **2c** Doe hetzelfde voor **Technologie** en **Media**.

## Tips

**Waarom `allArticles`?** De artikelen komen binnen in de `.then`. Daarbuiten, bijvoorbeeld in je filterknoppen, bestaat de parameter `articles` niet. Daarom bewaar je ze in een variabele die bovenaan het bestand staat. Die kan je overal gebruiken.

**Komen er bij elke klik artikelen bij?** Dan ben je vergeten de container eerst leeg te maken.

**Foutmelding in de console?** Zoek hem op op de [Foutmeldingen-pagina](https://meesterjson.nl/cheat-sheet/pages/javascript/foutmeldingen.html) van de cheat sheet.

## Concepten

- data laden met `fetch` en `.then()`
- data bewaren in een variabele buiten de `.then`
- een functie die een lijst toont
- `filter()` op een property

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — `fetch()`, `.then()`, JSON-structuur lezen
- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — `addEventListener`
