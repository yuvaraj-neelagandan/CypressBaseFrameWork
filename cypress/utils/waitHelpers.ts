export const waitForPageLoad = () => {
    cy.document().its('readyState').should('eq', 'complete');
  };
  
  export const delay = (ms: number) => {
    cy.wait(ms);
  };
  