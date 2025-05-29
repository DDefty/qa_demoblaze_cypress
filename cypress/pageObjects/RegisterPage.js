class RegisterPage {
  visit() {
    cy.visit('/register');
  }

  fillForm(user) {
    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="confirmPassword"]').type(user.confirmPassword);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  verifySuccessMessage() {
    cy.contains('Registration successful').should('be.visible');
  }
  verifyUnsuccessMessage() {
    cy.get('.error-message').should('be.visible');
  }
}

export default new RegisterPage();