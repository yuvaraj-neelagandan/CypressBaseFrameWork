// cypress/e2e/checkout.cy.ts

import { inputText } from '../../utils/pageActions';  // Import utility methods
import { clickElement } from '../../utils/mouseActions';
import { checkUrlContains } from '../../utils/pageActions';

describe('Checkout Flow', () => {
  it('should log in, add the first product to the cart, proceed to checkout, and complete the order', () => {
    // Step 1: Load the configuration from the fixture file
    cy.fixture('config.json').then((config) => {
      // Step 2: Visit the Sauce Demo login page
      cy.visit(config.baseUrl);

      // Step 3: Log in using credentials from config
      inputText(config.userNameSelector, config.userName);
      inputText(config.passwordSelector, config.password);
      clickElement(config.loginButtonSelector);

      // Step 4: Verify login success by checking URL
      checkUrlContains(config.loginSuccessUrl);

      // Step 5: Add the first product to the cart
      cy.get(config.productSelector).first().within(() => {
        clickElement(config.addToCartButton);
      });

      // Step 6: Proceed to checkout
      clickElement(config.cartSelector);
      clickElement(config.checkoutButton);

      // Step 7: Fill out the checkout form with dynamic values from config
      inputText(config.firstNameInput, config.firstName);  // Fetch first name from config
      inputText(config.lastNameInput, config.lastName);    // Fetch last name from config
      inputText(config.postalCodeInput, config.postalCode); // Fetch postal code from config
      clickElement(config.continueButton);

      // Step 8: Complete the checkout process
      clickElement(config.finishButton);

      // Step 9: Verify the order confirmation
      cy.get(config.orderConfirmationSelector).should('be.visible');
      checkUrlContains(config.orderCompleteUrl); // Verify we are on the order complete page
    });
  });
});
