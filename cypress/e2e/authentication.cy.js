describe('Authentication', () => {
  beforeEach(function () {
    cy.fixture('user').as('users');
  });

  it('should log in with valid credentials from env', () => {
    cy.login();
  });

  it('should register a new user', function () {
    cy.register(this.users.newUser.username, this.users.newUser.password);
  });
});