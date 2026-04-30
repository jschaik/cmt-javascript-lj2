const players = [
  { name: 'Yara',    score: 4800, level: 3 },
  { name: 'Daan',    score: 3200, level: 2 },
  { name: 'Fatima',  score: 5100, level: 4 },
  { name: 'Luca',    score: 1900, level: 1 },
  { name: 'Sophie',  score: 4200, level: 2 },
  { name: 'Noor',    score: 3750, level: 3 },
];

let activeFilter = 'all';

const showScoreboard = () => {
  // Stap 1: filter op activeFilter ('all' of 'level3')
  // Stap 2: filter op zoekterm uit #search-bar (gebruik includes() en toLowerCase())
  // Stap 3: sorteer van hoog naar laag op score
  // Stap 4: pak de top 5 met slice(0, 5)
  // Stap 5: zet elk player object om naar een <li> met map() en toon het in #scoreboard
};

// Maak een eventlistener voor het #player-form submit event
// Voorkom het herladen van de pagina
// Lees name, score en level uit de invoervelden
// Maak een nieuw player object aan met spread op een default object
// Voeg toe aan de array en roep showScoreboard() aan

// Maak een eventlistener voor de #filter-all button
// Zet activeFilter op 'all' en roep showScoreboard() aan

// Maak een eventlistener voor de #filter-level3 button
// Zet activeFilter op 'level3' en roep showScoreboard() aan

// Maak een eventlistener voor de #search-bar input
// Roep showScoreboard() aan bij elke toetsaanslag

showScoreboard();
