// ============================================================
//  Week 7 — Oefening 3: Nieuwsfeed
//  Data uit een JSON-bestand tonen en filteren.
// ============================================================

let allArticles = [];

// ------------------------------------------------------------
//  Stap 1 — de functie showArticles(list)
// ------------------------------------------------------------
// list is wat je meegeeft: alle artikelen of alleen een categorie
const showArticles = (list) => {
  const container = document.querySelector('#articles');

  // TODO 1a: maak de container eerst leeg


  // TODO 1b: loop met for...of door list en zet elk artikel als <article>
  //          in de container, met:
  //          <span> de category
  //          <h2>   de title
  //          <p>    de summary

};

// ------------------------------------------------------------
//  Laden — dit staat al klaar
// ------------------------------------------------------------
fetch('./news.json')
  .then((response) => response.json())
  .then((articles) => {
    // Bewaar de artikelen, zodat de filterknoppen er straks ook bij kunnen
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch((error) => console.error('Fout bij laden:', error));

// ------------------------------------------------------------
//  Stap 2 — filterknoppen
// ------------------------------------------------------------

// 2a. Bij klik op #filter-alle: toon weer alle artikelen


// 2b. Bij klik op #filter-stad: filter allArticles op category 'Stad'
//     en geef het resultaat mee aan showArticles


// 2c. Doe hetzelfde voor #filter-technologie en #filter-media
