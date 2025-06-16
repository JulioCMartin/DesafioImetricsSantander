import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu coloco um produto no carrinho', () => {
  cy.visit('/');
});

When('Eu seleciono um produto', () => {
  cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
});

When('Eu adiciono o produto ao carrinho', () => {
  cy.contains('Add to cart').click();
  cy.get('.modal-content').contains('View Cart').click();
});

Then('O produto deve aparecer no carrinho', () => {
  cy.get('a[href="/view_cart"]');
  cy.get('.cart_info').should('be.visible');
});
