class CartPage {
  goToCart() {
    cy.contains('Cart').click();
  }

  getCartProduct(productName) {
    return cy.get('#tbodyid').contains('td', productName);
  }

  deleteProduct(productName) {
    this.getCartProduct(productName)
      .parent('tr')
      .within(() => {
        cy.contains('Delete').click();
      });
  }
  get cartItems() {
    return cy.get('.cart-item');
  }

  get totalPrice() {
    return cy.get('.total-price');
  }

  get checkoutButton() {
    return cy.get('.checkout-button');
  }

  get continueShoppingButton() {
    return cy.get('.continue-shopping-button');
  }

  removeItem(itemName) {
    cy.contains(itemName).parent().find('.remove-button').click();
  }

  proceedToCheckout() {
    this.checkoutButton.click();
  }
  
  continueShopping() {
    this.continueShoppingButton.click();
  }
  verifyCartIsEmpty() {
    this.cartItems.should('not.exist');
    this.totalPrice.should('contain', '0.00');
  }
}

export default new CartPage();