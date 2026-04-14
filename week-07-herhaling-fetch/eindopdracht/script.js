let allArticles = [];
let activeCategory = 'Alle';

const showArticles = (articles) => {
  // Als articles leeg is, toon dan '<p>Geen artikelen gevonden.</p>' in #articles
  // Anders: zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    // Toon 'Laden...' in #articles voordat de fetch klaar is (zet dit boven de fetch)
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles
  })
  .catch(error => {
    // Toon '<p>Er is iets misgegaan.</p>' in #articles
  });

// Maak een eventlistener voor de #filter-alle button
// Zet activeCategory op 'Alle' en roep showArticles() aan met allArticles

// Maak een eventlistener voor de #filter-stad button
// Zet activeCategory op 'Stad'
// Filter allArticles op category en roep showArticles() aan

// Maak een eventlistener voor de #filter-technologie button
// Zet activeCategory op 'Technologie'
// Filter allArticles op category en roep showArticles() aan

// Maak een eventlistener voor de #filter-media button
// Zet activeCategory op 'Media'
// Filter allArticles op category en roep showArticles() aan

// Maak een eventlistener voor de #search-bar input
// Lees de zoekterm uit het veld
// Filter allArticles op category én op title (gebruik includes() en toLowerCase())
// Roep showArticles() aan met het gefilterde resultaat
