Feature: Teste da API do Trello

  Scenario: Validar retorno da API e campo name
    When eu envio uma requisição GET para a API do Trello
    Then o status code da resposta deve ser 200
    And o campo "name" da lista deve ser exibido no log
