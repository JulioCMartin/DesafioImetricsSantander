import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu acesso a busca por produto', () => {
  cy.visit('/products');
});

When('Eu busco por {string}', (termo) => {
  cy.get('input[name="search"]').type(termo);
  cy.get('#submit_search').click();
});

Then('Devo ver resultados relacionados a {string}', (termo) => {
  cy.contains(termo).should('be.visible');
});
