Feature: Validar produtos no checkout

  Scenario: Validar itens adicionados ao carrinho
    Given Que loguei "testefirst@teste.com.br" e a senha "testefirst"
    When Eu acesso o carrinho de compras
    Then Devo visualizar os produtos que adicionei
