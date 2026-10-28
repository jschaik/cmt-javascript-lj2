# Oefening 3 Week 4 — Mijn watchlist

## Opdracht (~30 min)

Houd bij welke series en films je nog wilt kijken. Vul een titel in, druk op de knop en hij komt in je watchlist te staan.

In oefening 1 voegde je items toe met een **klik** op een knop. Nu doe je hetzelfde met een **formulier**. Zo werkt de eindopdracht ook. De submit-listener staat al klaar in `script.js`, jij vult de TODO's in.

### Stap 1 — Invoer uitlezen (~10 min)
Lees de titel uit `#show-input` met `.value.trim()`. Is de titel leeg? Stop dan met `return`, zodat er geen lege items in je lijst komen.

### Stap 2 — Een item aanmaken (~10 min)
Maak met `createElement` een `<li>` aan en zet de titel erin met `textContent`.

### Stap 3 — Toevoegen aan de lijst (~10 min)
Voeg de `<li>` toe aan `#watchlist` met `appendChild` en maak daarna het invoerveld leeg.

Test het: voeg een paar titels toe. Probeer ook op de knop te drukken met een leeg veld, of met alleen spaties.

## Bonusopdracht

Laat `#counter` bovenaan tonen hoeveel titels er in je watchlist staan, bijvoorbeeld `3 titels`.

Tip: `watchlist.querySelectorAll('li').length` geeft het aantal `<li>`'s in de lijst.

## Tips

**Waarom `e.preventDefault()`?** Een formulier herlaadt standaard de pagina als je op de knop drukt, en dan is je lijst meteen weer leeg. `e.preventDefault()` voorkomt dat.

**Formulier of losse knop?** Met een formulier kun je ook gewoon op **Enter** drukken om iets toe te voegen. Probeer het maar!

## Concepten

- `addEventListener('submit', ...)` en `e.preventDefault()`
- `.value.trim()` en vroegtijdig stoppen met `return`
- `createElement`, `textContent` en `appendChild`

Typ zo'n term in de zoekbalk bovenaan de [cheat sheet](https://meesterjson.nl/cheat-sheet/pages/javascript/index.html) om direct naar de uitleg te springen.

## Cheatsheet

- [DOM manipulatie](https://meesterjson.nl/cheat-sheet/pages/javascript/dom-manipulatie.html) — `createElement` en `appendChild`
- [Events & listeners](https://meesterjson.nl/cheat-sheet/pages/javascript/events.html) — het submit-event
