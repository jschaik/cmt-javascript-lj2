const gebruikers = [
  { naam: 'Jan de Vries',  email: 'jan@bedrijf.nl',  rol: 'admin',     actief: true,
    isAdmin() { return this.rol === 'admin'; } },
  { naam: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', rol: 'gebruiker', actief: true,
    isAdmin() { return this.rol === 'admin'; } },
  { naam: 'Tom Visser',    email: 'tom@bedrijf.nl',  rol: 'gebruiker', actief: false,
    isAdmin() { return this.rol === 'admin'; } },
  { naam: 'Sara Meijer',   email: 'sara@bedrijf.nl', rol: 'admin',     actief: true,
    isAdmin() { return this.rol === 'admin'; } },
];
