class HomePage {
  visit() {
    cy.visit('/');
  }

  getHeader() {
    return cy.get('h1');
  }

  getLoginButton() {
    return cy.get('button.login');
  }

  getSignupButton() {
    return cy.get('button.signup');
  }

  getSearchInput() {
    return cy.get('input[type="search"]');
  }

  getFeaturedProducts() {
    return cy.get('.featured-products');
  }
}