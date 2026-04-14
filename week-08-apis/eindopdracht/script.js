const API_URL = ''; // Vul jouw API URL hier in

let allItems = [];

const showItems = (items) => {
  // Zet elk item om naar een <article> met map() en toon het in #results
  // Toon minimaal twee properties per item
  // Gebruik console.log(items[0]) om de structuur te bekijken
};

document.querySelector('#loading').textContent = 'Laden...';

fetch(API_URL)
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    // Sla de data op in allItems
    // Roep showItems() aan met allItems
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

// Voeg hier een event listener toe voor je zoekbalk of filterknoppen
