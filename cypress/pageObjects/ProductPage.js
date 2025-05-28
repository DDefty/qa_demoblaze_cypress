class ProductPage {
  getProductTitle() {
    return cy.get('.name');
  }
  getProductPrice() {
    return cy.get('.price-container');
  }
  getAddToCartButton() {
    return cy.contains('a', 'Add to cart');
  }
  getProductDescription() {
    return cy.get('#more-information, .description, .tab-pane p');
  }
  getProductImage() {
    return cy.get('.carousel-inner .active img');
  }
}

export default new ProductPage();