const spelers = JSON.parse(localStorage.getItem('spelers')) || [];

let actieveFilter = 'alle';

const slaOp = () => {
  // Sla de spelers-array op in localStorage als JSON-string
};

const toonScoreboard = () => {
  // 1. Filter op actieveFilter ('alle' of 'level2') en op de zoekterm in #zoekbalk
  // 2. Sorteer de gefilterde lijst van hoog naar laag op score
  // 3. Pak de top 5 met slice
  // 4. Zet elk speler-object om naar een <li> met map() en zet het resultaat in #scorebord via innerHTML
  //    Voeg per speler een Verwijder-knop toe (bonusopdracht: verwijder de juiste speler uit de array)
};

document.getElementById('speler-formulier').addEventListener('submit', (e) => {
  // Voorkom het herladen van de pagina
  // Lees naam, score en level uit de invoervelden
  // Valideer: naam mag niet leeg zijn, score en level moeten getallen zijn
  // Maak een nieuw speler-object aan met spread op een standaardobject
  // Voeg toe aan de array, sla op en herrender
});

document.getElementById('filter-alle').addEventListener('click', () => {
  // Zet actieveFilter op 'alle' en herrender
});

document.getElementById('filter-level2').addEventListener('click', () => {
  // Zet actieveFilter op 'level2' en herrender
});

document.getElementById('zoekbalk').addEventListener('input', () => {
  // Herrender het scorebord live bij elke toetsaanslag
});

toonScoreboard();
