// ============================================================
//  Week 2 — Oefening 1b: Parameters & argumenten
//  Voorspel eerst, kijk dan pas in de browser!
// ============================================================

// Deze functie heeft twee PARAMETERS: snack en saus
function maakBestelling(snack, saus) {
  return 'Een ' + snack + ' met ' + saus;
}

// ------------------------------------------------------------
//  Deel 1 — Argumenten meegeven
// ------------------------------------------------------------

// 1a. VOORSPELLEN — de regel hieronder staat al klaar, je hoeft niets te typen.
//     Wat komt er in de browser te staan?
// Mijn voorspelling:
// Uitleg (na het kijken):
document.getElementById('result-1a').textContent = maakBestelling('mayo', 'friet');

// 1b. ZELF DOEN — schrijf nu zelf een aanroep van maakBestelling
//     zodat er wél 'Een friet met mayo' verschijnt.
document.getElementById('result-1b').textContent = ''; // TODO: vervang '' door je aanroep

// ------------------------------------------------------------
//  Deel 2 — De naam maakt niet uit
// ------------------------------------------------------------

const mijnFavoriet = 'kroket';
const lekkersteSaus = 'mosterd';

// 2a. Roep maakBestelling aan met mijnFavoriet en lekkersteSaus
//     en toon het resultaat in #result-2


// 2b. Hoe heet de waarde 'kroket' BINNEN de functie maakBestelling?
// Antwoord:

// ------------------------------------------------------------
//  Deel 3 — Te weinig argumenten
// ------------------------------------------------------------

// 3a. VOORSPELLEN — de regel hieronder staat al klaar, je hoeft nog niets te typen.
//     Let op: er wordt maar één argument meegegeven. Wat komt er in de browser?
// Mijn voorspelling:
// Uitleg (na het kijken):
//
// 3b. ZELF DOEN — pas daarna deze regel aan zodat er een normale zin uitkomt
document.getElementById('result-3').textContent = maakBestelling('frikandel');

// ------------------------------------------------------------
//  Deel 4 — Een return-waarde doorgeven
// ------------------------------------------------------------

function berekenPrijs(aantal, prijsPerStuk) {
  return aantal * prijsPerStuk;
}

function metBezorgkosten(bedrag) {
  return bedrag + 2.5;
}

// 4a. Bereken de prijs van 3 frikandellen van €2 per stuk
//     en sla die op in const subtotaal


// 4b. Geef subtotaal mee aan metBezorgkosten en toon het resultaat
//     in #result-4, bijvoorbeeld: 'Totaal met bezorging: €8.5'


// 4c. Schrijf 4a en 4b nu in één regel: zet de aanroep van
//     berekenPrijs ALS ARGUMENT in de aanroep van metBezorgkosten.
//     Welke functie wordt als eerste uitgevoerd?
// Antwoord:

// ------------------------------------------------------------
//  Deel 5 — Wie vult de parameter in?
// ------------------------------------------------------------

// Deze functie roep JIJ niet zelf aan: dat doet de browser bij een klik.
// De browser geeft dan het event-object mee als argument -> dat komt in e.
function kiesSnack(e) {
  // 5a. Toon in #result-5: 'Je koos: ' + de tekst van de geklikte knop
  //     Tip: e.target is de knop waarop geklikt is
  // TODO
}

// Let op: kiesSnack staat hier ZONDER haakjes.
// Je geeft de functie mee aan de browser, je roept hem niet zelf aan.
document.getElementById('btn-friet').addEventListener('click', kiesSnack);
document.getElementById('btn-kroket').addEventListener('click', kiesSnack);
document.getElementById('btn-frikandel').addEventListener('click', kiesSnack);

// 5b. Alle drie de knoppen gebruiken dezelfde functie.
//     Hoe weet kiesSnack dan welke knop het was?
// Antwoord:

// 5c. VOORSPELLEN — wat gebeurt er als je hierboven bij één knop
//     kiesSnack() MET haakjes schrijft? Probeer het en zet het daarna terug.
// Mijn voorspelling:
// Wat er echt gebeurde (kijk in de console, F12):
