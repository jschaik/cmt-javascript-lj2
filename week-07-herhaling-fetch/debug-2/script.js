// Fout gevonden: _______________
// Oplossing: _______________

fetch('./producten.json')
  .then(r => r.json())
  .then(producten => {
    const lijst = document.querySelector('#resultaten');
    producten.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.naam} — €${product.prijs}`;
      lijst.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
