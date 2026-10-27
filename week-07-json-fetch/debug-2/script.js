// Fout gevonden: _______________
// Oplossing: _______________

const list = document.querySelector('#results')

fetch('./products.json')
  .then(response => response.json())
  .then(products => {
    for(let product of products) {
      list.innerHTML += `
      <li>${product.name} — €${product.price}</li>`
    }
  })
  .catch(error => console.error('Fout:', error));
