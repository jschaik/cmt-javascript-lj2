# Oefening 1b Week 2 — Parameters & argumenten

## Opdracht (~45 min)

Welkom bij snackbar **De Frietkot**. In deze oefening ga je uitzoeken wat er precies gebeurt als je iets meegeeft aan een functie. Dat klinkt simpel, maar het komt in **elke** opdracht hierna terug. Bijvoorbeeld bij `e` in een event listener en bij `item => ...` in week 5.

**Werkwijze:** de stappen zijn steeds een van twee soorten. Bij **voorspellen** staat de code al klaar en hoef je niets te typen. Bij **zelf doen** schrijf je zelf code. Bij voorspellen bedenk je eerst wat er gebeurt. Schrijf je voorspelling als commentaar in `script.js` achter `// Mijn voorspelling:`. Pas daarna sla je op en kijk je in de browser. Zat je fout? Prima, schrijf dan op waarom het anders ging. Daar leer je het meest van.

## Eerst even: parameter of argument?

```js
function maakBestelling(snack, saus) {   // ← snack en saus zijn PARAMETERS
  return 'Een ' + snack + ' met ' + saus;
}

maakBestelling('friet', 'mayo');         // ← 'friet' en 'mayo' zijn ARGUMENTEN
```

- Een **parameter** is een leeg doosje met een naam. Het doosje bestaat alleen binnen de functie.
- Een **argument** is wat je in dat doosje stopt op het moment dat je de functie aanroept.
- De **volgorde** bepaalt welk argument in welk doosje gaat: het 1e argument gaat in de 1e parameter, het 2e in de 2e, enzovoort. Naar de namen wordt niet gekeken.

## Stappen

### Deel 1 — Argumenten meegeven (~5 min)
1. **1a — Voorspellen.** De regel met `maakBestelling('mayo', 'friet')` staat al in `script.js`, je hoeft niets te typen. Voorspel wat er in de browser komt te staan, kijk daarna en leg uit wat er gebeurt.
2. **1b — Zelf doen.** Schrijf nu zelf een aanroep van `maakBestelling` zodat er `Een friet met mayo` in `#result-1b` komt.

### Deel 2 — De naam maakt niet uit (~5 min)
Er staan twee variabelen klaar: `mijnFavoriet` en `lekkersteSaus`.

1. **2a** Roep `maakBestelling` aan met deze twee variabelen en toon het resultaat in `#result-2`.
2. **2b** Beantwoord in commentaar: hoe heet de waarde `'kroket'` **binnen** de functie?

### Deel 3 — Te weinig argumenten (~5 min)
1. **3a — Voorspellen.** De regel met `maakBestelling('frikandel')` staat al klaar en heeft maar één argument. Voorspel wat er in de browser komt te staan en kijk daarna.
2. **3b — Zelf doen.** Pas die regel aan zodat er een normale zin uitkomt.

### Deel 4 — Een return-waarde doorgeven (~15 min)
Er staan twee functies klaar: `berekenPrijs(aantal, prijsPerStuk)` en `metBezorgkosten(bedrag)`.

1. **4a** Bereken de prijs van 3 frikandellen van €2 per stuk en sla die op in `const subtotaal`.
2. **4b** Geef `subtotaal` mee aan `metBezorgkosten` en toon het resultaat in `#result-4`.
3. **4c** Doe 4a en 4b in één regel door de ene functie-aanroep **als argument** in de andere te zetten. Welke functie wordt het eerst uitgevoerd?

### Deel 5 — Wie vult de parameter in? (~15 min)
Tot nu toe gaf **jij** de argumenten mee. Bij een event listener werkt het anders: dan roept de **browser** je functie aan. De browser geeft zelf een argument mee: het **event-object** met informatie over de klik. Dat komt in je parameter `e` terecht.

1. **5a** Laat `kiesSnack(e)` in `#result-5` de tekst `Je koos: Kroket` tonen, met de tekst van de knop waarop geklikt is. Gebruik daarvoor `e.target.textContent`: `e.target` is het element waarop geklikt is.
2. **5b** Alle drie de knoppen gebruiken **dezelfde** functie. Leg in commentaar uit hoe de functie dan toch weet welke knop het was.
3. **5c** Voorspel wat er gebeurt als je bij één van de `addEventListener`-regels `kiesSnack()` schrijft, dus **met** haakjes. Probeer het, kijk in de console (F12) en zet het daarna weer terug.

## Concepten

- parameters en argumenten
- volgorde van argumenten
- `undefined` bij een ontbrekend argument
- een return-waarde als argument meegeven
- het event-object `e` als parameter
- een functie meegeven zonder `()`

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [Functions](https://meesterjson.nl/cheat-sheet/pages/javascript/functions.html) — functies, parameters en return-waarden
- [DOM manipulatie](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-manipulatie.html) — elementen selecteren en events
