const players = [
  { naam: 'Yara',    score: 4800, level: 3 },
  { naam: 'Daan',    score: 3200, level: 2 },
  { naam: 'Fatima',  score: 5100, level: 4 },
  { naam: 'Luca',    score: 1900, level: 1 },
  { naam: 'Sophie',  score: 4200, level: 2 },
  { naam: 'Noor',    score: 3750, level: 3 },
];

let activeFilter = 'all';

const showScoreboard = () => {
  // Stap 1: filter op activeFilter ('all' of 'level2')
  // Stap 2: filter op zoekterm uit #search-bar (gebruik includes() en toLowerCase())
  // Stap 3: sorteer van hoog naar laag op score
  // Stap 4: pak de top 5 met slice(0, 5)
  // Stap 5: zet elk speler-object om naar een <li> met map() en toon het in #scoreboard
};

// Maak een eventlistener voor het #player-form submit event
// Voorkom het herladen van de pagina
// Lees naam, score en level uit de invoervelden
// Maak een nieuw speler-object aan met spread op een standaardobject
// Voeg toe aan de array en roep showScoreboard() aan

// Maak een eventlistener voor de #filter-all button
// Zet activeFilter op 'all' en roep showScoreboard() aan

// Maak een eventlistener voor de #filter-level2 button
// Zet activeFilter op 'level2' en roep showScoreboard() aan

// Maak een eventlistener voor de #search-bar input
// Roep showScoreboard() aan bij elke toetsaanslag

showScoreboard();
