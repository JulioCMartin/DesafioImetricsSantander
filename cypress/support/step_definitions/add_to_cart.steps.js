import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Que estou com login email {string} e a senha {string}', (email, senha) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(senha);
  cy.get('button[data-qa="login-button"]').click();
});

When('Eu seleciono um produto', () => {
  cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
});

When('Eu adiciono o produto ao carrinho', () => {
  cy.contains('Add to cart').click();
  cy.get('.modal-content').contains('View Cart').click();
});

Then('O produto deve aparecer no checkout', () => {
  cy.get('a[href="/view_cart"]');
  cy.get('.cart_info').should('be.visible');
  cy.get('.col-sm-6 > .btn').click();
  cy.get('.cart_total').should('be.visible');
});
