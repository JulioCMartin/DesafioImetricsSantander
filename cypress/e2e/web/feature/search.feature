Feature: Busca de produtos

  Scenario: Realizar uma busca por produto
    Given Eu acesso a busca por produto
    When Eu busco por "T-Shirt"
    Then Devo ver resultados relacionados a "T-Shirt"
