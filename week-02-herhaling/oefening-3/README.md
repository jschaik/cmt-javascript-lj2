# Oefening 3 Week 2 — Pizza-party planner

## Opdracht (~60 min)

Je geeft een feestje en wilt weten hoeveel pizza's je moet bestellen en wat dat kost. Je vult het aantal gasten en de prijs per pizza in, en de pagina rekent het voor je uit.

> Bijvoorbeeld: bij 10 gasten eet iedereen 3 stukken = 30 stukken. Een pizza heeft 8 stukken, dus je hebt `30 / 8 = 3,75` → **4 pizza's** nodig. Bij €9,95 per pizza kost dat `4 * 9.95` = **€39.80**.

In deze oefening combineer je voor het eerst je eigen functies (oefening 1) met een formulier in de DOM (oefening 2). Het formulier-skelet staat al klaar in `script.js` — jij vult de gaten in.

### Stap 1 — Rekenfuncties (~15 min)
Schrijf de twee functies bovenaan `script.js` af:

1. `berekenAantalPizzas(gasten)` — rekent uit hoeveel stukken er nodig zijn (`gasten * STUKKEN_PER_GAST`), deelt dat door `STUKKEN_PER_PIZZA` en rondt **naar boven** af met `Math.ceil()`. Een halve pizza kun je niet bestellen!
2. `berekenKosten(aantalPizzas, prijs)` — geeft het totaalbedrag terug.

### Stap 2 — Formulier laten werken (~20 min)
De submit-listener en `e.preventDefault()` staan er al. Vul de TODO's binnen de listener in:

1. Lees de waarden van `#guests` en `#price` uit met `.value`.
2. Zet ze om naar getallen met `Number()` (zie de tip hieronder).
3. Roep je functies uit stap 1 aan.
4. Toon in `#result` de tekst: `Je hebt 4 pizza's nodig. Dat kost €39.80.` — rond het bedrag af met `.toFixed(2)`.

### Stap 3 — Lege invoer afvangen (~10 min)
Als een van de velden leeg is, toon dan `Vul het aantal gasten en de prijs in.` in `#result` en stop de functie met `return`, zodat er niet gerekend wordt.

### Stap 4 — Wat voor feest wordt het? (~15 min)
Schrijf `getFeestType(gasten)` met een `if` / `else if` / `else`:

| Gasten | Feesttype |
|--------|-----------|
| minder dan 5 | `'Gezellig etentje'` |
| minder dan 15 | `'Feestje'` |
| 15 of meer | `'Mega-party'` |

Zet het feesttype achter je resultaat, bijvoorbeeld: `Je hebt 4 pizza's nodig. Dat kost €39.80. (Feestje)`

## Tips

**Waarom `Number()`?** Alles wat je met `.value` uit een input haalt is een **string**, ook als er een getal in staat. Dat gaat mis bij optellen: `'2' + '3'` geeft `'23'` in plaats van `5`. Zet invoer daarom altijd eerst om met `Number()`.

**Waarom `e.preventDefault()`?** Een formulier herlaadt standaard de pagina als je op de knop drukt — dan is je resultaat meteen weer weg. `e.preventDefault()` voorkomt dat.

**Hoe check je of een veld leeg is?** Een lege input geeft `''` (een lege string) terug. `!waarde` is `true` als de waarde leeg is.

**Testen:** open de console (F12) en gebruik `console.log()` om te kijken wat er in je variabelen zit.

## Concepten

- eigen functies aanroepen vanuit een event listener
- `addEventListener('submit', ...)` en `e.preventDefault()`
- `.value` omzetten met `Number()`
- vroegtijdig stoppen met `return`
- `if` / `else if` / `else`
- `Math.ceil()` en `.toFixed()`

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [Functions](https://meesterjson.nl/cheat-sheet/pages/javascript/functions.html) — functies, parameters en return-waarden
- [Conditionals](https://meesterjson.nl/cheat-sheet/pages/javascript/conditionals.html) — if/else if/else, nodig voor stap 3 en 4
- [DOM manipulatie](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-manipulatie.html) — elementen selecteren, `textContent` en events
