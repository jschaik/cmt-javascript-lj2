const defaults = { name: '', score: 0, level: 1 };

const players = [];

const playersList = document.querySelector('#players');

const showPlayers = () => {
  playersList.innerHTML = players.map(player => `<li>${player.name} — ${player.score} punten</li>`).join('');
};

// Luister naar het submit-event op #player-form
// Maak een nieuw player object aan met spread op defaults en de ingevulde waarden
// Voeg het toe aan de array met push en herrender de lijst
