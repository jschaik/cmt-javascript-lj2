// Fout gevonden: _______________
// Oplossing: _______________

fetch('./gebruikers.json')
  .then(r => r.json())
  .then(gebruikers => {
    const lijst = document.querySelector('#resultaten');
    gebruikers.forEach(gebruiker => {
      const li = document.createElement('li');
      li.textContent = gebruiker.name;
      lijst.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
