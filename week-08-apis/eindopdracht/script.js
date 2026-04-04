const API_URL = ''; // Vul jouw API URL hier in

document.querySelector('#laden').textContent = 'Laden...';

fetch(API_URL)
  .then(r => r.json())
  .then(data => {
    document.querySelector('#laden').textContent = '';
    console.log(data[0]); // Bekijk de structuur

    // Toon de data in #resultaten
  })
  .catch(error => {
    document.querySelector('#laden').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });
