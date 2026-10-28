let alleSeries = [];
let watchlist = [];

// ============================================================
//  BASIS
// ============================================================

// ------------------------------------------------------------
//  Stap 1 — Alle series laden en tonen
// ------------------------------------------------------------

const toonSeries = (lijst) => {
  // Maak #results leeg en toon elke serie in lijst als <article> met
  // poster (serie.image.medium), naam, genres en beoordeling (serie.rating.average)
  // en een knop '+ Watchlist' met de class 'add-btn'

  // Stap 3: geef hier, na het tonen, elke '+ Watchlist'-knop een click listener
};

// Doe een fetch naar: https://api.tvmaze.com/shows
// Gebruik console.log om de structuur van de response te bekijken
// Sla de series op in alleSeries en roep toonSeries() aan met alleSeries

// ------------------------------------------------------------
//  Stap 2 — Zoeken
// ------------------------------------------------------------

// Maak een 'input' event listener voor #search-input
// Filter alleSeries op naam (gebruik toLowerCase en includes)
// en roep toonSeries() aan met het resultaat

// ------------------------------------------------------------
//  Stap 3 — Toevoegen aan de watchlist
// ------------------------------------------------------------

// Bij een klik op '+ Watchlist' maak je een object { id, naam, poster, gezien: false }
// en voeg je het toe aan watchlist. Voeg een serie niet twee keer toe.

const toonWatchlist = () => {
  // Maak #watchlist leeg en toon elke serie als <li> met
  // een checkbox (class 'seen-checkbox'), de poster en de naam in een <span>

  // Stap 5: geef hier, na het tonen, elke checkbox een change listener
};

// ------------------------------------------------------------
//  Stap 4 — Opslaan in localStorage
// ------------------------------------------------------------

// Schrijf een functie opslaan() die watchlist opslaat in localStorage
// Laad de watchlist bij het openen van de pagina weer in en toon hem meteen

// ------------------------------------------------------------
//  Stap 5 — Gezien afvinken
// ------------------------------------------------------------

// Checkbox: zet gezien van de serie op true of false, sla op en toon opnieuw

// ============================================================
//  UITBREIDING
// ============================================================

// A. Verwijderknop per serie op de watchlist
// B. Filterknoppen #filter-alle, #filter-kijken en #filter-gezien
