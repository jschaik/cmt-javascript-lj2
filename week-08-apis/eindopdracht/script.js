const API_URL = ''; // Vul jouw API URL hier in

document.querySelector('#loading').textContent = 'Laden...';

fetch(API_URL)
  .then(r => r.json())
  .then(data => {
    document.querySelector('#loading').textContent = '';
    console.log(data[0]); // Bekijk de structuur

    // Toon de data in #results
  })
  .catch(error => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });
