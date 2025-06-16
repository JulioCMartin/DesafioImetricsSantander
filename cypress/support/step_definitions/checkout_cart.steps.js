import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu acesso o carrinho de compras', () => {
  cy.visit('/view_cart');
});

Then('Devo visualizar os produtos que adicionei', () => {
  cy.get('.cart_info').should('be.visible');
});
