# API de Agendamentos Médicos

Esta API simula um sistema de agendamentos médicos, retornando listas de médicos com horários disponíveis e permitindo a marcação de consultas. A API foi construída utilizando Node.js, TypeScript, Serverless Framework e AWS Lambda.

## Funcionalidades

- Buscar agendas e horários dos médicos: Retorna uma lista de médicos com horários disponíveis.

- Marcar agendamento do paciente: Permite que o paciente marque uma consulta com um médico.

## Endpoints

1. Buscar Agendas e Horários dos Médicos

- Método: GET
- Rota: /agendas
- Resposta:

    ```json
    {
        "medicos": [
            {
            "id": 1,
            "nome": "Dr. João Silva",
            "especialidade": "Cardiologista",
            "horarios_disponiveis": [
                "2024-10-05 09:00",
                "2024-10-05 10:00",
                "2024-10-05 11:00"
            ]
            },
            {
            "id": 2,
            "nome": "Dra. Maria Souza",
            "especialidade": "Dermatologista",
            "horarios_disponiveis": [
                "2024-10-06 14:00",
                "2024-10-06 15:00"
            ]
            }
        ]
    }

2. Marcar Agendamento do Paciente

- Método: POST
- Rota: /agendamento
- Body:

    ```json
    {
        "medico_id": 1,
        "paciente_nome": "Carlos Almeida",
        "data_horario": "2024-10-05 09:00"
    }

- Resposta:

     ```json
     {
        "mensagem": "Agendamento realizado com sucesso",
        "agendamento": {
            "medico": "Dr. João Silva",
            "paciente": "Carlos Almeida",
            "data_horario": "2024-10-05 09:00"
        }
    }

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js v14 ou superior
- Serverless Framework globalmente (npm install -g serverless)

## Instalação

1.Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/api-agendamentos.git

2.Acesse o diretório do projeto:
    
     ```bash
     cd api-agendamentos

3.Instale as dependências:
    
    ```bash
    npm install

## Rodando Localmente

Para rodar a API localmente com o Serverless Framework e o plugin serverless-offline, use o seguinte comando:

    ```bash
    serverless offline

A API estará disponível em: http://localhost:3000

## Testes
    
    ```bash
    npm test

## Estrutura do Projeto

    /src
        /agenda             # Domínio das agendas médicas
            /controller       # Controladores do domínio
            /service          # Lógica de negócio
            /mocks            # Dados fictícios para simulação (mock)
        /agendamento        # Domínio dos agendamentos
            /controller       # Controladores do domínio

## Boas Práticas Implementadas

- TypeScript para garantir a tipagem estática e segurança no código.
- Serverless Framework para abstrair a infraestrutura da AWS e facilitar o desenvolvimento de Lambdas.
- Validação de payload com Joi para garantir que as requisições estejam corretas.
- Testes unitários com Jest para garantir a qualidade do código.
- Prettier e ESLint configurados para manter a consistência e qualidade do código.