// ============================================================
//  Week 2 — Oefening 3: Pizza-party planner
//  Combineer je eigen functies met een formulier.
// ============================================================

const STUKKEN_PER_GAST = 3;
const STUKKEN_PER_PIZZA = 8;

// Stap 1a. Bereken hoeveel pizza's er nodig zijn voor het aantal gasten.
//          Rond naar boven af met Math.ceil() — een halve pizza bestaat niet!
function berekenAantalPizzas(gasten) {
  // TODO
}

// Stap 1b. Bereken wat de pizza's samen kosten.
function berekenKosten(aantalPizzas, prijs) {
  // TODO
}

// Stap 4. Geef het feesttype terug:
//         minder dan 5 gasten  -> 'Gezellig etentje'
//         minder dan 15 gasten -> 'Feestje'
//         anders               -> 'Mega-party'
function getFeestType(gasten) {
  // TODO
}

// Stap 2 en 3. Het formulier
const form = document.getElementById('pizza-form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  // Voorkomt dat de pagina herlaadt als je op de knop drukt
  e.preventDefault();

  // TODO 2.1: lees de waarden van #guests en #price uit met .value


  // TODO 3: als een van de twee leeg is: toon een foutmelding in #result
  //         en stop met return


  // TODO 2.2: zet de waarden om naar getallen met Number()


  // TODO 2.3: roep berekenAantalPizzas en berekenKosten aan


  // TODO 2.4: toon het resultaat in #result (gebruik .toFixed(2) voor het bedrag)
  //           Stap 4: zet daar ook het feesttype achter

});
