class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  verifyLoginSuccess() {
    cy.url().should('include', '/dashboard');
    cy.get('.welcome-message').should('contain', 'Welcome back');
  }
  
  verifyLoginFailure() {
    cy.get('.error-message').should('be.visible');
  }
  logout() {
    cy.get('.logout-button').click();
    cy.url().should('include', '/login');
  }
}