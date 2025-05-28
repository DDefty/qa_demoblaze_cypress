import productPage from '../pageObjects/ProductPage';

describe('Product Page', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.contains('.card-title', 'Samsung galaxy s6').click();
  });

  it('should display the product title', () => {
    productPage.getProductTitle().should('be.visible');
  });

  it('should display the product price', () => {
    productPage.getProductPrice().should('be.visible');
  });

  it('should allow adding the product to the cart', () => {
    productPage.getAddToCartButton().click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  });

  it('should display the product description', () => {
    productPage.getProductDescription().should('be.visible');
  });

  it('should display the product image', () => {
    productPage.getProductImage().should('be.visible');
  });
  });
