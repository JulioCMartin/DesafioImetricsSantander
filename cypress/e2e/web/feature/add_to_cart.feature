Feature: Adicionar produto ao carrinho

  Scenario: Adicionar um produto ao carrinho
    Given Eu coloco um produto no carrinho
    When Eu seleciono um produto
    And Eu adiciono o produto ao carrinho
    Then O produto deve aparecer no carrinho
