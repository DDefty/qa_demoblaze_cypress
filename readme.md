# Demoblaze Cypress E2E Testing

This project contains end-to-end tests for the [Demoblaze](https://www.demoblaze.com/) demo e-commerce site, using Cypress and the Page Object Model (POM) pattern.

---

## 📁 Project Structure

```
qa_demoblaze_cypress/
├── cypress/
│   ├── e2e/                # Test specs
│   │   ├── authentication.cy.js
│   │   └── productPage.cy.js
│   ├── fixtures/           # Test data
│   │   ├── user.json
│   │   └── product.json
│   ├── pageObjects/        # Page Object classes
│   │   └── ProductPage.js
│   └── support/
│       ├── commands.js     # Custom Cypress commands
│       └── e2e.js          # Global setup
├── .env                    # Environment variables
├── cypress.config.js       # Cypress configuration
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```
CYPRESS_username=yourLoginUsername
CYPRESS_password=yourLoginPassword
CYPRESS_new_username=newuser42
CYPRESS_new_password=NewPass456
```

### 3. Run tests

```sh
npx cypress open
```
or
```sh
npx cypress run
```

---

## 🧩 Features

- **Page Object Model** for maintainable selectors and actions
- **Custom Cypress commands** for login, registration, and cart actions
- **Fixtures** for reusable user and product data
- **Environment variable support** for credentials and test data

---

## 📝 Example Test

```javascript
import productPage from '../pageObjects/ProductPage';

describe('Product Page', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.contains('.card-title', 'Samsung galaxy s6').click();
  });

  it('should display the product title', () => {
    productPage.getProductTitle().should('be.visible');
  });

  it('should allow adding the product to the cart', () => {
    productPage.getAddToCartButton().click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  });
});
```

---

## 📚 Useful Commands

- `cy.login(username, password)` – Log in as a user
- `cy.register(username, password)` – Register a new user
- `cy.addToCart(productName)` – Add a product to the cart by name