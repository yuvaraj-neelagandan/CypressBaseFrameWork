describe('Base URL Validation', () => {
let config: { baseUrl: string; title: any; };

  before(() => {
    // Load the fixture data
    cy.fixture('config').then((data) => {
      config = data;
    });
  });

  it('should visit the page and check the title', () => {
    // Use the values from the loaded fixture
    cy.visit(config.baseUrl); // Use base URL from fixture
    cy.title().should('include', config.title); // Use title from fixture
  });
});
