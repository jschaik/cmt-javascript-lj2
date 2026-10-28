// ============================================================
//  Week 5 — Oefening 3: IJssalon
//  Eén functie die elke lijst kan tonen — welke lijst bepaal jij.
// ============================================================

const smaken = [
  'Aardbei',
  'Chocolade',
  'Vanille',
  'Stracciatella',
  'Mango',
  'Pistache',
  'Citroen',
  'Kokos',
  'Banaan',
  'Hazelnoot',
  'Framboos',
  'Caramel',
];

// ------------------------------------------------------------
//  Stap 1 — ZELF DOEN: de functie toonSmaken(lijst)
// ------------------------------------------------------------
// lijst is een PARAMETER: een leeg doosje. De functie weet niet
// welke smaken erin zitten — dat bepaal je pas bij het aanroepen.
const toonSmaken = (lijst) => {
  const container = document.querySelector('#flavours');
  const counter = document.querySelector('#counter');

  // TODO 1a: maak de container eerst leeg (innerHTML = '')


  // TODO 1b: loop met for...of door LIJST (niet door smaken!)
  //          en zet elke smaak als <article><h3>...</h3></article> in de container


  // TODO 1c: toon in #counter hoeveel smaken er in LIJST zitten,
  //          bijvoorbeeld '12 smaken'

};

// Dit staat al klaar: bij het laden toon je ALLE smaken
toonSmaken(smaken);

// ------------------------------------------------------------
//  Stap 2 — VOORSPELLEN: haal de // weg bij de regel hieronder
// ------------------------------------------------------------
// Welke smaken staan er dan op de pagina? En wat zegt de teller?
// Mijn voorspelling:
// Wat er echt gebeurde:
// Zet de // daarna weer terug.

// toonSmaken(['Mango', 'Kokos']);

// ------------------------------------------------------------
//  Stap 3 — ZELF DOEN: knoppen
// ------------------------------------------------------------

// 3a. Bij klik op #btn-short: maak met filter() een nieuwe array
//     met alleen de smaken van maximaal 6 letters (smaak.length <= 6)
//     en geef die mee aan toonSmaken


// 3b. Bij klik op #btn-all: toon weer alle smaken


// ------------------------------------------------------------
//  Stap 4 — ZELF DOEN: zoeken
// ------------------------------------------------------------

// Luister naar het 'input'-event op #search.
// Filter de smaken die de zoekterm bevatten (gebruik toLowerCase en includes)
// en geef het resultaat mee aan toonSmaken.
