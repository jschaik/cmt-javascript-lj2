# Oefening 3 Week 5 — IJssalon

## Opdracht (~45 min)

De ijssalon wil een pagina waarop klanten de smaken kunnen bekijken, filteren en doorzoeken. Daarvoor schrijf je **één** functie, `toonSmaken(lijst)`, die elke lijst met smaken op de pagina kan zetten. Welke lijst dat is, bepaal je pas als je de functie aanroept.

Dit is precies hoe `showProducts(list)` in de eindopdracht werkt. Hier oefen je het eerst in het klein.

## Eerst even: wat zit er in `lijst`?

Weet je nog uit week 2 (oefening 1b)? Een parameter is een leeg doosje. Wat erin komt, bepaal je bij het **aanroepen**:

```js
toonSmaken(smaken);            // lijst = alle 12 smaken
toonSmaken(['Mango', 'Kokos']); // lijst = alleen Mango en Kokos
toonSmaken(kort);              // lijst = wat er in de variabele kort zit
```

De functie zelf weet niet of hij alles of een gefilterd stukje krijgt, en dat hoeft ook niet. Hij toont gewoon wat er in `lijst` zit. Daarom loop je in de functie altijd door **`lijst`** en nooit door `smaken`.

## Stappen

### Stap 1 — Zelf doen: `toonSmaken(lijst)` (~15 min)
Vul de functie in:

1. Maak `#flavours` eerst leeg met `innerHTML = ''`.
2. Loop met `for...of` door **`lijst`** en zet elke smaak als `<article><h3>Mango</h3></article>` in de container.
3. Toon in `#counter` hoeveel smaken er in `lijst` zitten, bijvoorbeeld `12 smaken`.

De aanroep `toonSmaken(smaken)` staat al onder de functie. Als het goed is, zie je nu alle 12 smaken.

### Stap 2 — Voorspellen (~5 min)
Onder stap 1 staat de regel `toonSmaken(['Mango', 'Kokos']);`, met `//` ervoor. Voorspel eerst wat er op de pagina komt te staan en wat de teller zegt. Haal daarna de `//` weg en kijk. Zet de `//` daarna weer terug.

### Stap 3 — Zelf doen: knoppen (~10 min)
1. **3a** Bij een klik op **Korte namen**: maak met `filter()` een nieuwe array met alleen de smaken van maximaal 6 letters (`smaak.length <= 6`). Geef die array mee aan `toonSmaken`.
2. **3b** Bij een klik op **Alle smaken**: toon weer alle smaken.

Kijk goed naar je code. Beide knoppen roepen **dezelfde functie** aan, alleen met een ander argument.

### Stap 4 — Zelf doen: zoeken (~15 min)
Luister naar het `input`-event op `#search`. Filter de smaken die de zoekterm bevatten en geef het resultaat mee aan `toonSmaken`. Gebruik `toLowerCase()` en `includes()`, zodat het niet uitmaakt of iemand `mango` of `Mango` typt.

## Tips

**Teller klopt niet?** Dan tel je waarschijnlijk `smaken.length` in plaats van `lijst.length`.

**Ziet de pagina er na filteren nog hetzelfde uit?** Dan loop je in de functie waarschijnlijk door `smaken` in plaats van door `lijst`.

**Komen er steeds kaartjes bij?** Dan ben je vergeten de container eerst leeg te maken.

## Concepten

- een array als argument meegeven aan een functie
- `filter()` maakt een **nieuwe** array, de originele blijft hetzelfde
- `for...of`, `innerHTML` en `.length`
- `toLowerCase()` en `includes()`
- het `input`-event

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [Arrays & methods](https://meesterjson.nl/cheat-sheet/pages/javascript/arrays-methods.html) — `filter()`
- [String methods](https://meesterjson.nl/cheat-sheet/pages/javascript/string-methods.html) — `includes()` en `toLowerCase()`
- [Functions](https://meesterjson.nl/cheat-sheet/pages/javascript/functions.html) — parameters en argumenten
