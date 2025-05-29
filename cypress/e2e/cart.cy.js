import productPage from '../pageObjects/ProductPage';
import cartPage from '../pageObjects/CartPage';

describe('Cart Functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should add a product to the cart and verify it appears in the cart', () => {
    cy.contains('.card-title', 'Samsung galaxy s6').click();
    productPage.getAddToCartButton().click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
    cartPage.goToCart();
    cartPage.getCartProduct('Samsung galaxy s6').should('be.visible');
  });

  it('should remove a product from the cart', () => {
    cy.contains('.card-title', 'Samsung galaxy s6').click();
    productPage.getAddToCartButton().click();
    cy.on('window:alert', () => {});
    cartPage.goToCart();
    cartPage.deleteProduct('Samsung galaxy s6');
    cartPage.getCartProduct('Samsung galaxy s6').should('not.exist');
  });
});