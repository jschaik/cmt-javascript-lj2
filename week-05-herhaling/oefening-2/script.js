const defaults = { name: '', score: 0, level: 1 };

const players = [];

const list = document.querySelector('#players');

const showPlayers = () => {
  list.innerHTML = players.map(s => `<li>${s.name} — ${s.score} punten</li>`).join('');
};

// Luister naar het submit-event op #player-form
// Valideer: naam mag niet leeg zijn, score moet een getal zijn
// Maak een nieuw speler-object aan met spread op defaults en de ingevulde waarden
// Voeg het toe aan de array met push en herrender de lijst
