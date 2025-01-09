export const inputText = (selector: string, text: string) => {
    cy.get(selector).clear().type(text);
  };
  
  export const selectDropdownValue = (selector: string, value: string) => {
    cy.get(selector).select(value);
  };
  
  export const checkElement = (selector: string) => {
    cy.get(selector).check();
  };
  
  export const uncheckElement = (selector: string) => {
    cy.get(selector).uncheck();
  };

  export const checkUrlContains = (successUrl: string) => {
    cy.url().should('include', successUrl);
  };

  export const selectDropDown = (dropdownSelector: string, optionText: string) => {
    // Click the dropdown to show options
    cy.get(dropdownSelector).click();
  
    // Select the "Price: High to Low" option from the dropdown
    cy.get(dropdownSelector)
      .find('option')
      .contains(optionText)
      .click();  // Click the option with the text "Price (high to low)"
  };