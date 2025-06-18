Feature: Busca de produtos

  Scenario: Validar múltiplos resultados de busca por T-Shirt
    Given Eu acesso a busca por produtos
    When Eu busco por todas as "T-Shirt"
    Then Devo ver os seguintes produtos nos resultados:
      | Pure Cotton V-Neck T-Shirt|
      | Green Side Placket Detail T-Shirt|
      | Premium Polo T-Shirts |
