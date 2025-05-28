class ProductPage {
  getProductTitle() {
    return cy.get('.product-title');
  }

  getProductPrice() {
    return cy.get('.product-price');
  }

  getAddToCartButton() {
    return cy.get('.add-to-cart-button');
  }

  getProductDescription() {
    return cy.get('.product-description');
  }

  getProductImage() {
    return cy.get('.product-image');
  }
}