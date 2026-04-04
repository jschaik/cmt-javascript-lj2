# Eindopdracht Week 5 — Scorebord

## Opdracht (~4 uur)

Bouw een volledig scorebord waarbij spelers worden toegevoegd via een formulier.

### Vereisten

- Elke speler is een object met `naam`, `score` en `level`.
- Het bord toont altijd de **top 5** op basis van score (`sort` + `slice`).
- Twee filterknoppen: **Alle spelers** en **Level 2+**.
- Een **zoekbalk** filtert live op naam.
- Scores worden opgeslagen in **localStorage** zodat het bord bewaard blijft na herladen.

### Bonusopdracht

Voeg een **Verwijder**-knop toe per speler. Bij verwijderen haal je de speler uit de array, sla je opnieuw op in localStorage en herrender je het bord. Hoe je de juiste speler uit de array haalt bepaal je zelf.

### Bonus — Stijl het scorebord

- Geef de top 3 een goud, zilver en brons kleur.
- Gebruik CSS grid of flexbox voor de layout.
- Voeg een animatie toe als een nieuwe speler wordt toegevoegd.

## Concepten

- objecten
- `array.push`
- `filter()`
- `sort()`
- `map()`
- `addEventListener`
- `localStorage`
- spread
