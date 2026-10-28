// ============================================================
//  Week 4 — Oefening 3: Mijn watchlist
//  Laat het formulier titels toevoegen aan de watchlist.
// ============================================================

const form = document.querySelector('#show-form');
const input = document.querySelector('#show-input');
const watchlist = document.querySelector('#watchlist');

form.addEventListener('submit', (e) => {
  // Voorkomt dat de pagina herlaadt als je op de knop drukt
  e.preventDefault();

  // TODO 1: lees de titel uit het invoerveld met .value.trim()
  //         en stop met return als hij leeg is


  // TODO 2: maak een <li> aan en zet de titel erin met textContent


  // TODO 3: voeg de <li> toe aan de watchlist en maak het invoerveld leeg

});

// Bonus: laat #counter tonen hoeveel titels er in je watchlist staan
