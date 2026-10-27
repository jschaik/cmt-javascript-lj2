// Fout gevonden: _______________
// Oplossing: _______________

const list = document.querySelector('#results')

fetch('./users.json')
  .then(response => response.json())
  .then(users => {
    for(let user of users) {
      list.innerHTML += `
      <li>${user.naam} — ${user.email}</li>`
    }
  })
  .catch(error => console.error('Fout:', error));
