const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin',     active: true,
    isAdmin() { return this.role === 'admin'; } },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'gebruiker', active: true,
    isAdmin() { return this.role === 'admin'; } },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'gebruiker', active: false,
    isAdmin() { return this.role === 'admin'; } },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin',     active: true,
    isAdmin() { return this.role === 'admin'; } },
];
