fetch('./boeken.json')
  .then(response => response.json())
  .then(boeken => {
    // Toon elk boek als een <li> in #boeken-lijst
  })
  .catch(error => console.error('Fout:', error));
