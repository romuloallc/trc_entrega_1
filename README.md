trc_entrega_1

Essa atividade consiste em criar uma pequena API que persista no banco de dados informações sobre
disciplinas em que você está matriculado este semestre. 
Utilizando:
    "nodejs": "10.16.1"
    "express": "^4.17.1",
    "mongoose": "^5.7.1",
    "mongoose-auto-increment": "^5.0.1"
    "nodemon": "^1.19.2",
    "sucrase": "^3.10.1" 
Criando uma model e um controller, cada um em seu respectivo diretório na pasta /src.

Para começar faça um clone em vossa máquina:

$ git clone https://github.com/romuloallc/trc_entrega_1.git

Logo após, crie seu container para poder utilizá-lo como Banco de dados:

$ docker run --name trc_entrega_1 -p 27017:27017 -d -t mongo

Verifique se está ativo:

$ docker ps

(Verifique o IP em que está alocado o seu container, caso necessário troque o IP no arquivo "dbConnection.js")

Após estar tudo configurado, vá na pasta do projeto e rode o comando:

$ yarn

E após as dependências terem sido instaladas corretamente:

$ yarn dev

Para ter sua API rodando.

Para realização de teste, utilize o Insomnia:

    -Crie os métodos GET, POST, PUT, DELETE
    -Seria interessante criar uma base_url para facilitar, portanto use: http://localhost:3000/disciplinas/{id}
    -Passe o id da diciplina para os métodos PUT e DELETE
    -O body do método POST, codigo(NUMBER), name/professor/departamento(STRING):
        {
            "codigo": codigo_disciplina,    
            "name": "nome_disciplina",
            "professor": "professor",
            "departamento": "departamento"
        }
