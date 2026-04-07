// Bouw voort op je week-08 eindopdracht
// Kopieer je script.js van week 8 hierheen en voeg het volgende toe:

// Favorieten ophalen uit localStorage
// Als er nog niets opgeslagen is, gebruik een lege array
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Functie om favorieten op te slaan
const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

// TODO: voeg een favorietenknop toe aan elk kaartje
// TODO: laad favorieten terug bij het starten van de pagina
// TODO: toon alleen favorieten als de gebruiker dat kiest
