fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    // Toon de artikelen in #articles
    // Maak categorie-knoppen in #category-nav
  })
  .catch(error => console.error('Fout:', error));
