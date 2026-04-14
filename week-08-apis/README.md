# Week 8 — Externe API's

## Theorie

In deze week werk je met echte externe API's. Je haalt data op via `fetch`, verkent de datastructuur met `console.log`, en filtert en toont de resultaten in de DOM.

| Onderwerp | Cheatsheet |
|-----------|-----------|
| Externe API's aanroepen | [API's](https://meesterjson.nl/cheat-sheet/pages/javascript/api.html) |
| fetch en JSON verwerken | [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) |
| async/await als alternatief voor .then() | [Async/await & promises](https://meesterjson.nl/cheat-sheet/pages/javascript/async-await.html) |

## Weekoverzicht

| Onderdeel | Concept | Tijd |
|-----------|---------|------|
| Oefening 1 | API verkennen met console.log — Rick & Morty API | 45 min |
| Oefening 2 | Data filteren en tonen — Pokémon API + zoekbalk | 45 min |
| Eindopdracht | Eigen API naar keuze | 4 uur |

## API's zonder key — meteen bruikbaar

Kies iets wat je leuk vindt. Hieronder een paar suggesties:

| API | Wat je ermee kunt bouwen | URL |
|-----|--------------------------|-----|
| 🎮 Rick & Morty | Karakters zoeken en filteren op status | `https://rickandmortyapi.com/api/character` |
| 🐉 Dragon Ball Z | Karakters met afbeeldingen en statistieken | `https://dragonball-api.com/api/characters?limit=58` |
| 🍸 CocktailDB | Cocktails opzoeken op naam | `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` |
| 🚀 SpaceX | Overzicht van alle lanceringen | `https://api.spacexdata.com/v4/launches` |
| 🐱 Cat breeds | Kattenrassen met afbeeldingen | `https://api.thecatapi.com/v1/breeds` |
| ❓ Trivia | Willekeurige quizvragen per categorie | `https://opentdb.com/api.php?amount=20` |
| 🎵 iTunes | Nummers en albums zoeken op artiest | `https://itunes.apple.com/search?term=` |

## API's met gratis key

- [OMDB](https://www.omdbapi.com/) — films en series zoeken
- [RAWG](https://rawg.io/apidocs) — games zoeken en filteren
- [NASA APOD](https://api.nasa.gov/) — astronomische foto van de dag
