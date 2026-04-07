const players = [];

let activeFilter = 'all';

const showScoreboard = () => {
  // 1. Filter op activeFilter ('all' of 'level2') en op de zoekterm in #search-bar
  // 2. Sorteer de gefilterde lijst van hoog naar laag op score
  // 3. Pak de top 5 met slice
  // 4. Zet elk speler-object om naar een <li> met map() en zet het resultaat in #scoreboard via innerHTML
  //    Voeg per speler een Verwijder-knop toe (bonusopdracht: verwijder de juiste speler uit de array)
};

document.getElementById('player-form').addEventListener('submit', (e) => {
  // Voorkom het herladen van de pagina
  // Lees naam, score en level uit de invoervelden
  // Valideer: naam mag niet leeg zijn, score en level moeten getallen zijn
  // Maak een nieuw speler-object aan met spread op een standaardobject
  // Voeg toe aan de array en herrender
});

document.getElementById('filter-all').addEventListener('click', () => {
  // Zet activeFilter op 'all' en herrender
});

document.getElementById('filter-level2').addEventListener('click', () => {
  // Zet activeFilter op 'level2' en herrender
});

document.getElementById('search-bar').addEventListener('input', () => {
  // Herrender het scorebord live bij elke toetsaanslag
});

showScoreboard();
