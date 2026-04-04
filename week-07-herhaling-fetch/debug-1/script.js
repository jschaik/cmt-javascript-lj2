// Fout gevonden: _______________
// Oplossing: _______________

fetch('./nieuw.json')
  .then(r => r.json())
  .then(berichten => {
    const lijst = document.querySelector('#resultaten');
    berichten.forEach(bericht => {
      const li = document.createElement('li');
      li.textContent = bericht.titel;
      lijst.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
