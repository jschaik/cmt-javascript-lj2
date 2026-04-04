// Herschrijf deze vier functies naar moderne syntax:

// 1. Arrow function
function berekenOppervlak(breedte, hoogte) {
  return breedte * hoogte;
}

// 2. Template literal
function maakZin(naam, stad) {
  return 'Hallo, ik ben ' + naam + ' en ik woon in ' + stad;
}

// 3. For/of loop
function somArray(getallen) {
  let totaal = 0;
  for (let i = 0; i < getallen.length; i++) {
    totaal += getallen[i];
  }
  return totaal;
}

// 4. querySelector (vervang getElementById)
const knop = document.getElementById('mijn-knop');
