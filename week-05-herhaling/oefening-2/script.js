const standaard = { naam: '', score: 0, level: 1 };

const spelers = [];

const lijst = document.getElementById('spelers');

const toonSpelers = () => {
  lijst.innerHTML = spelers.map(s => `<li>${s.naam} — ${s.score} punten</li>`).join('');
};

// Luister naar het submit-event op #speler-formulier
// Valideer: naam mag niet leeg zijn, score moet een getal zijn
// Maak een nieuw speler-object aan met spread op standaard en de ingevulde waarden
// Voeg het toe aan de array met push en herrender de lijst
