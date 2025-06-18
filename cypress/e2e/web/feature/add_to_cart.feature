Feature: Adicionar produto ao carrinho

  Scenario: Adicionar um produto ao carrinho
    Given Que estou com login email "testefirst@teste.com.br" e a senha "testefirst"
    When Eu seleciono um produto
    And Eu adiciono o produto ao carrinho
    Then O produto deve aparecer no checkout
