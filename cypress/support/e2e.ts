// support/e2e.ts
  
// Global Hook to Take Screenshot After Each Test
  afterEach(() => {
    cy.screenshot(); // Takes a screenshot after each test for reporting or debugging purposes
  });
  
  Cypress.Commands.add('checkIfElementExists', (selector: string) => {
    cy.get(selector).should('exist');
  });

  // support/e2e.ts
Cypress.Commands.add('waitForElement', (selector: string) => {
    cy.get(selector).should('be.visible');
  });
  
  Cypress.Commands.add('clickButton', (buttonSelector: string) => {
    cy.get(buttonSelector).click();
  });
  

  afterEach(() => {
    // Teardown: Clear local storage after each test
    cy.clearLocalStorage();
  });