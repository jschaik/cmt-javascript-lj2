// ============================================================
//  Week 6 — Oefening 3: Dierenasiel
//  Een array met objecten tonen en filteren.
// ============================================================

const dieren = [
  { naam: 'Boef',   soort: 'hond', leeftijd: 4, beschikbaar: true  },
  { naam: 'Minoes', soort: 'kat',  leeftijd: 2, beschikbaar: true  },
  { naam: 'Rakker', soort: 'hond', leeftijd: 7, beschikbaar: false },
  { naam: 'Tijger', soort: 'kat',  leeftijd: 5, beschikbaar: false },
  { naam: 'Snuf',   soort: 'kat',  leeftijd: 1, beschikbaar: true  },
];

// ------------------------------------------------------------
//  Stap 1 en 2 — de functie toonDieren(lijst)
// ------------------------------------------------------------
// Net als toonSmaken in week 5: de functie toont wat je meegeeft.
// Alleen zit er nu in lijst geen tekst, maar een object per dier.
const toonDieren = (lijst) => {
  const container = document.querySelector('#animals');
  container.innerHTML = '';

  for (const dier of lijst) {
    // TODO 1a: haal naam, soort en leeftijd uit dier met destructuring


    // TODO 2: maak een variabele status: 'Beschikbaar' als beschikbaar true is,
    //         anders 'Gereserveerd' (vergeet niet beschikbaar ook te destructuren)


    // TODO 1b: zet het dier als <article> in de container, bijvoorbeeld:
    //          <h3>Boef</h3>
    //          <p>hond, 4 jaar</p>
    //          <p>Beschikbaar</p>   <- pas na stap 2

  }
};

// Dit staat al klaar: bij het laden toon je ALLE dieren
toonDieren(dieren);

// ------------------------------------------------------------
//  Stap 3 — filterknoppen
// ------------------------------------------------------------

// 3a. Bij klik op #filter-cats: filter de dieren waarvan de soort 'kat' is
//     en geef het resultaat mee aan toonDieren


// 3b. Bij klik op #filter-all: toon weer alle dieren


// ------------------------------------------------------------
//  Bonus — nieuw dier
// ------------------------------------------------------------

// Bij klik op #new-animal: voeg met push() dit dier toe aan de array
// en toon daarna alle dieren opnieuw:
// { naam: 'Pip', soort: 'konijn', leeftijd: 1, beschikbaar: true }
