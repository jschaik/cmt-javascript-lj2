# Debug 4 — Festival-app (groot)

## Opdracht (~60 min)

Debug 1 tot en met 3 hadden elk één fout. Deze app heeft er **negen**. Het moet een festival-app worden die de optredens van festival Zomerklanken uit `festival.json` laadt. Je moet per dag kunnen bekijken wie er speelt, kunnen zoeken op artiest en favorieten kunnen aanklikken.

Je hoeft niets te bedenken of te bouwen, alleen te **repareren**. Daarvoor gebruik je de console en de cheat sheet-pagina **[Foutmeldingen](https://meesterjson.nl/cheat-sheet/pages/javascript/foutmeldingen.html)**. Daar kun je elke foutmelding uit deze app opzoeken.

> Open de app met **Live Server**. Als je `index.html` gewoon dubbelklikt, werkt `fetch` niet en krijg je andere foutmeldingen.

## Werkwijze

Herhaal deze stappen tot de app helemaal werkt:

1. Open de console (F12 → tabblad **Console**) en lees de **bovenste** rode foutmelding.
2. Kijk rechts naast de melding: daar staat in welk bestand en op welke **regel** het misgaat. Klik erop om naar die regel te springen.
3. Zoek het belangrijkste stuk van de melding op op de [Foutmeldingen-pagina](https://meesterjson.nl/cheat-sheet/pages/javascript/foutmeldingen.html), bijvoorbeeld `is not defined` of `Cannot read properties of null`.
4. Fix de fout, sla op en vul een regel in het logboek hieronder in.
5. Ververs de pagina en ga verder met de volgende foutmelding.

## Let op

- **Na een fix kan er een nieuwe fout verschijnen.** Dat is goed nieuws: de code komt dan een stukje verder dan eerst.
- **Soms zie je meerdere fouten tegelijk.** Begin altijd bij de bovenste.
- **Twee fouten zie je pas als je de app gebruikt.** Klik op de knoppen en typ in de zoekbalk.
- **Eén fout geeft geen foutmelding.** Kijk daarom ook goed naar wat er op de pagina staat. Zie je ergens `undefined`?
- Verander alleen wat kapot is. Je hoeft de app niet te herschrijven.

## Foutenlogboek

Vul dit logboek in terwijl je de fouten oplost. Kopieer de foutmelding uit de console.

| # | Foutmelding (uit de console) | Sectie op de cheat sheet | Regel | Wat was er fout en hoe heb je het opgelost? |
|---|------------------------------|--------------------------|-------|---------------------------------------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |

## Klaar?

De app werkt als:

- de titel **Zomerklanken 2026** bovenaan staat;
- je bij het laden de optredens van zaterdag ziet, met artiest, genre, dag, tijd en podium, en **nergens** `undefined`;
- de knoppen **Zaterdag** en **Zondag** wisselen tussen de dagen;
- zoeken op artiest werkt (probeer `the`);
- **♥ Favoriet** de teller bovenaan ophoogt;
- de console geen rode meldingen meer laat zien.

## Cheatsheet

- [Foutmeldingen](https://meesterjson.nl/cheat-sheet/pages/javascript/foutmeldingen.html) — zoek hier elke foutmelding op
- [JSON & fetch](https://meesterjson.nl/cheat-sheet/pages/javascript/json.html) — hoe ziet `festival.json` eruit en hoe lees je het uit?
