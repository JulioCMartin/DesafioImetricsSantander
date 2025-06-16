Feature: Validar produtos no checkout

  Scenario: Validar itens adicionados ao carrinho
    Given Eu acesso o carrinho de compras
    Then Devo visualizar os produtos que adicionei
