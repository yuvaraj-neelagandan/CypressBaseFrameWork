export const clickElement = (selector: string) => {
    cy.get(selector).click();
  };
  
  export const doubleClickElement = (selector: string) => {
    cy.get(selector).dblclick();
  };
  
  export const rightClickElement = (selector: string) => {
    cy.get(selector).rightclick();
  };


  