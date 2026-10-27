// Fout gevonden: _______________
// Oplossing: _______________

const list = document.querySelector('#results')

fetch('./new.json')
  .then(response => response.json())
  .then(messages => {
    for(let message of messages) {
      list.innerHTML += `
      <li>${message.title}</li>`
    }
  })
  .catch(error => console.error('Fout:', error));
