// ============================================================
//  Week 3 — Oefening 3: Playlist-bouwer
//  Combineer arrow functions en template literals met een formulier.
// ============================================================

const form = document.querySelector('#song-form');
const playlist = document.querySelector('#playlist');
const counter = document.querySelector('#counter');

let aantal = 0;

// Stap 1. Schrijf een arrow function die met een template literal
//         een <article> teruggeeft met de titel in een <h3>
//         en de artiest in een <p>.
const maakNummerKaart = (titel, artiest) => {
  // TODO
};

// Test je functie: haal de // weg, kijk of het kaartje verschijnt
// en zet de // daarna weer terug.
// playlist.innerHTML += maakNummerKaart('Bohemian Rhapsody', 'Queen');

// Stap 2, 3 en 4. Het formulier
form.addEventListener('submit', (e) => {
  // Voorkomt dat de pagina herlaadt als je op de knop drukt
  e.preventDefault();

  // TODO 2.1: lees de waarden van #title en #artist uit met .value.trim()


  // TODO 3: als de titel of de artiest leeg is: stop met return


  // TODO 2.2: roep maakNummerKaart aan en voeg het resultaat toe
  //           aan de playlist met innerHTML +=


  // TODO 4: verhoog aantal met 1 en toon in #counter:
  //         'Je playlist heeft <aantal> nummers' (template literal!)


  // TODO 2.3: maak het formulier leeg met form.reset()

});

// Bonus: laat #clear-btn de playlist leegmaken en de teller op 0 zetten
