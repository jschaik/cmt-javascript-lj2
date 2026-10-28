// ============================================================
//  Debug 4 — Festival-app
//  Deze app zit vol fouten. Lees de README voor de werkwijze
//  en houd je foutenlogboek daar bij.
// ============================================================

console.log('Festival-app gestart';

const lijst = document.querySelector('#acts');
const zoekveld = document.querySelector('#zoek');
const teller = document.querySelector('#favorites-count');

let alleOptredens = [];
const aantalFavorieten = 0;

const toonOptredens = (optredens) => {
  lijst.innerHTML = '';

  for (const optreden of optredens) {
    lijst.innerHTML += `
      <article>
        <h3>${optreden.artiest}</h3>
        <p>${optreden.genre} · ${optreden.dag} om ${optreden.tijd}</p>
        <p>${optreden.locatie.naam}</p>
        <button class="fav-btn">♥ Favoriet</button>
      </article>
    `;
  }

  const favKnoppen = document.querySelectorAll('.fav-btn');
  for (const favKnop of favKnoppen) {
    favKnop.addEventListener('click', () => {
      aantalFavorieten++;
      teller.textContent = `${aantalFavorieten} favorieten`;
      favKnop.classList.add('active');
    });
  }
};

fetch('./festivals.json')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('#festival-name').textContent = `${data.festival} ${data.editie}`;

    alleOptredens = data.optredens;

    const zaterdag = data.filter((optreden) => optreden.dag === 'zaterdag');
    toonOptredens(zaterdag);
  })
  .catch((error) => console.error('Fout bij laden:', error));

const knop = document.querySelector('#btn-zaterdag');
knop.addEventListener('click', () => {
  toonOptredens(alleOptredens.filter((optreden) => optreden.dag === 'zaterdag'));
});

const knop = document.querySelector('#btn-zondag');
knop.addEventListener('click', () => {
  toonOptredens(alleOptredens.filter((optreden) => optreden.dag === 'zondag'));
});

zoekveld.addEventListener('input', () => {
  const zoekterm = zoekveld.value.toLowerCase();
  const gevonden = alleOptredens.filter((optreden) =>
    optreden.artiest.toLowerCase().includes(zoekTerm)
  );
  toonOptredens(gevonden);
});
