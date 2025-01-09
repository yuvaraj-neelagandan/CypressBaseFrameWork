// cypress/e2e/login.cy.ts

import { inputText } from '../../utils/pageActions';  // Import utility methods
import { clickElement } from '../../utils/mouseActions';
import { checkUrlContains } from '../../utils/pageActions';

describe('Login Test', () => {
    it('should log in successfully with valid credentials', () => {
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
        
        // Assert that the inventory list is visible
        // const inventoryListSelector = config.inventoryListSelector;  // Get selector from config
        // cy.get(inventoryListSelector).should('be.visible');  // Dynamic selector check
      });
    });
  });