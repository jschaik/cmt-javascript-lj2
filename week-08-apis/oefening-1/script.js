fetch('https://restcountries.com/v3.1/all')
  .then(r => r.json())
  .then(countries => {
    console.log(countries[0]); // Bekijk de structuur van één land

    // Toon de naam van elk land in #countries-list
    // Hint: countries[0].name.common geeft de naam
  })
  .catch(error => console.error('Fout:', error));
