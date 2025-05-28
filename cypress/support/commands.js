Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.contains('Log in').click();
  cy.get('#loginusername').type(username);
  cy.get('#loginpassword').type(password);
  cy.get('button[onclick="logIn()"]').click();
});

Cypress.Commands.add('register', (username, password) => {
  cy.visit('/');
  cy.contains('Sign up').click();
  cy.get('#sign-username').type(username);
  cy.get('#sign-password').type(password);
  cy.get('button[onclick="register()"]').click();
  cy.on('window:alert', (str) => {
  });
});

Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.card-title', productName).click();
  cy.contains('a', 'Add to cart').click();
  cy.on('window:alert', (str) => {
  });
});