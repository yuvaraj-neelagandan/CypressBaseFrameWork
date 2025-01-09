// cypress/e2e/login.cy.ts

import { inputText, selectDropDown } from '../../utils/pageActions';  // Import utility methods
import { clickElement } from '../../utils/mouseActions';
import { checkUrlContains } from '../../utils/pageActions';

describe('Check Filter', () => {
    it('Filter to be checked - Price High to Low', () => {
      // Load the configuration from the fixture file
      cy.fixture('config.json').then((config) => {
        // Visit the Sauce Demo login page
        cy.visit(config.baseUrl); 
  
        // Get the username and password from the config
        const userName = config.userName;
        const password = config.password;
  
        // Use utility method to input username
        inputText('input#user-name', userName);
  
        // Use utility method to input password
        inputText('input#password', password);
  
        // Use utility method to click the login button
        clickElement('input#login-button');
  
        // Assert that we are redirected to the products page after login
        const successUrl = config.loginSuccessUrl;  // Get success URL from config
        checkUrlContains(successUrl);  // Dynamic check based on config
        
        selectDropDown(config.sortDropdown, config.priceHighToLowOption);

        cy.get(config.priceSelector).then((prices) => {
          let sorted = true;
          let previousPrice = -1;
      
          prices.each((index, price) => {
            const currentPrice = parseFloat(price.innerText.replace('$', ''));
            if (currentPrice > previousPrice) {
              previousPrice = currentPrice;
            } else {
              sorted = false;
            }
          });
      
          // Assertion that prices are sorted in descending order
          expect(sorted).to.be.true;
        });
      });
    });
  });