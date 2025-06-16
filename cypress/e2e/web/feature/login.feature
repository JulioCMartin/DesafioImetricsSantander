Feature: Login no site Automation Exercise

  Scenario: Realizar login com sucesso
    Given Eu acesso a página de login
    When Eu preencho o email "testefirst@teste.com.br" e a senha "testefirst"
    And Eu clico no botão de login
    Then Devo visualizar meu painel de conta
