fetch('https://restcountries.com/v3.1/all')
  .then(r => r.json())
  .then(landen => {
    console.log(landen[0]); // Bekijk de structuur van één land

    // Toon de naam van elk land in #landen-lijst
    // Hint: landen[0].name.common geeft de naam
  })
  .catch(error => console.error('Fout:', error));
