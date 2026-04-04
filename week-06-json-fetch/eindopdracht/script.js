fetch('./nieuws.json')
  .then(r => r.json())
  .then(artikelen => {
    // Toon de artikelen in #artikelen
    // Maak categorie-knoppen in #categorie-nav
  })
  .catch(error => console.error('Fout:', error));
