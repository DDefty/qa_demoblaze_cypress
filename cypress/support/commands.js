Cypress.Commands.add('login', () => {
  cy.visit('https://www.demoblaze.com/');
  cy.get('#login2').click();
  cy.get('#loginusername').type(Cypress.env('username'));
  cy.get('#loginpassword').type(Cypress.env('password'));
  cy.contains('button', 'Log in').click();
});

Cypress.Commands.add('register', (username, password) => {
  cy.visit('https://www.demoblaze.com/');
  cy.get('#signin2').click(); // <-- Correct: open Sign up modal
  cy.get('#sign-username').should('be.visible').type(username);
  cy.get('#sign-password').type(password);
  cy.contains('button', 'Sign up').click();
});

Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.card-title', productName).click();
  cy.contains('a', 'Add to cart').click();
  cy.on('window:alert', (str) => {
  });
});