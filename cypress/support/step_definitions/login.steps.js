import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Eu acesso a página de login', () => {
  cy.visit('/login');
});

When('Eu preencho o email {string} e a senha {string}', (email, senha) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(senha);
});

When('Eu clico no botão de login', () => {
  cy.get('button[data-qa="login-button"]').click();
});

Then('Devo visualizar meu painel de conta', () => {
  cy.contains('Logged in as').should('be.visible');
});
