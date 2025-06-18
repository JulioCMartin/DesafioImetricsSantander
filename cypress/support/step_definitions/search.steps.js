const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('Eu acesso a busca por produtos', () => {
  cy.visit('/products');
});

When('Eu busco por todas as {string}', (termo) => {
  cy.get('input[name="search"]').type(termo);
  cy.get('#submit_search').click();
});

Then('Devo ver os seguintes produtos nos resultados:', (dataTable) => {
  dataTable.rawTable.forEach((row) => {
    const produtos = row[0];
    cy.contains(produtos).should('be.visible');
  });
});
