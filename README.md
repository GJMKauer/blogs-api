# Boas vindas ao repositório do projeto <b>Blogs API</b>!

Esse projeto foi desenvolvido durante o módulo de Backend na Trybe! #vqv 

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post (através de validação de login com JWT);
- Será necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts;
- Utilizar o ORM Sequelize em conjunto com a arquitetura MSC para a criação da API.

---

# CRUD

CRUD é um acrônimo para **C**reate, **R**ead, **U**pdate and **D**elete. Em português seria **Criar**, **Ler**, **Atualizar** e **Deletar** registros. Nesse projeto trabalhamos diretamente com a manipulação no banco de dados MySQL, utilizando do ORM Sequelize para a manipulação do banco.

---

# MSC

MSC é um acrônimo para **M**odel, **S**ervices e **C**ontroller. A utilização dessas camadas facilita a manutenção e legibilidade no código, uma vez que cada camada é responsável por apenas uma função. A camada Controller é responsável por retornar as requisições e respostas de nossa API para o usuário, enquanto que a camada Model faz as queries necessárias diretamente ao banco de dados. Já o Service é responsável por fazer a intermediação entre as duas camadas, podendo agir como regulador das regras de negócio da aplicação e lançar erros em caso de algum problema na requisição ou query.

---

# ORM

Os ORMs ou **O**bject-**R**elational **M**appers visam diminuir o uso dos comandos e consultas SQL nas tabelas do banco de dados. Utilizando um framework baseado em ORM, conseguimos utilizar comandos SQL sem utilizar a linguagem do mySQL para tal. Nesse projeto utilizamos o **Sequelize**.

---

# Sequelize

O Sequelize é um ORM baseado em **Promises** para Node.js e pode ser utilizado para diversos bancos de dados. Neste projeto, utilizei em conjunto com o MySQL.

---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o projeto em seu computador, para iniciá-lo é necessário executar o comando
```
docker-compose up -d && docker exec -it blogs_api bash
```
e na sequência execute esses comandos, um por vez
```
npm install
npm start
```

na pasta raíz do projeto. Após isso, aperte `Ctrl + C` para parar a execução, e execute os comandos abaixo, um por vez
```
npm run seed
npm start
```

Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível.

Após isso, você pode realizar as requisições de CRUD através de algum cliente HTTP, como o `Insomnia`, o `Postman`, o `HTTPie` ou até mesmo extensões do VSCode como o `Thunder Client` através dos enpoints listados abaixo.

O projeto trata-se de um desafio para consolidar o aprendizado do modelo de Camadas MSC em conjunto com a utilização do ORM Sequelize, responsável por abstrair toda a lógica de requisição ao banco de dados (no caso, MySQL) com uma sintaxe mais simples e com muitas facilidades. Nesse projeto também fui capaz de utilizar a biblioteca JWT para geração de token de usuário (através de login na API), o que possibilita a autenticação do usuário e validação através desse token, conferindo maior segurança nas transações da API. Isso faz com que o um usuário `X` só possa alterar ou excluir as informações relacionados a esse usuário `X`, recebendo uma mensagem de erro caso tente realizar esse procedimento para alterar, por exemplo, o usuário `Y`.

Também foi utilizado o conceito de middlewares para validação das requisições; ao tentar submeter uma requisição com dados inválidos ou qualquer informação que possa gerar um erro, essa submissão é levada até o middleware que retorna um sinal de erro para o usuário, informando-o o tipo de erro para que ele corrija e realize a requisição novamente.

---

## 📚 Documentação (endpoints)

### 🔑 Login
| Método | Funcionalidade           | URL                         |
| ------ | ------------------------ | --------------------------- |
| `POST` | Realiza login no backend | http://localhost:3000/login |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Some required fields are missing</code> caso alguma informação esteja faltando no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Invalid fields</code> caso alguma informação seja inválida no body da requisição.
</details>

### 👨🏻‍🦱 Users
| Método | Funcionalidade                             | URL                        |
| ------ | ------------------------------------------ | -------------------------- |
| `POST` | Adiciona um novo usuário no banco de dados | http://localhost:3000/user |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"displayName" length must be at least 8 characters long</code> caso o campo displayName tenha menos de 8 caracteres body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"email" must be a valid email</code> caso o campo displayName tenha menos de 8 caracteres body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"password" length must be at least 6 characters long</code> caso o campo password tenha menos de 6 caracteres body da requisição;<br>
  - A rota retorna o código <code>409</code>, com a mensagem <code>User already registered</code> caso o usuário já exista no banco de dados.
</details>

## :warning: Validando token nas requisições

Todos endpoints abaixo devem respeitar a regra de autenticação (login). Assim sendo, todas as requisições abaixo devem, obrigatoriamente, ter um `token de autenticação` nos headers, no campo `authorization` (obtido após realizar o login ou cadastrar um usuário).

### 👨🏻‍🦱 Users
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Retorna uma lista de usuários cadastrados | http://localhost:3000/user |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },

  /* ... */
]
```

</details>
<br>
<br>

| Método | Funcionalidade                                                | URL                            |
| ------ | ------------------------------------------------------------- | ------------------------------ |
| `GET`  | Retorna um usuário pelo seu id (substitua `id` por um número) | http://localhost:3000/user/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "id": 1,
  "displayName": "Lewis Hamilton",
  "email": "lewishamilton@gmail.com",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>404</code>, com a mensagem <code>User does not exist</code> caso o id não corresponda a nenhum usuário do banco.
</details>

<br>
<br>

| Método   | Funcionalidade                                                                  | URL                           |
| -------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `DELETE` | Deleta um usuário do banco de dados (somente o próprio usuário pode se deletar) | http://localhost:3000/user/me |

A rota retorna o status 204, <code>sem resposta</code>.
<br>
<br>

### 🗒️ Categories
| Método | Funcionalidade                              | URL                              |
| ------ | ------------------------------------------- | -------------------------------- |
| `GET`  | Retorna uma lista de categorias cadastradas | http://localhost:3000/categories |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
      "id": 1,
      "name": "Inovação"
  },
  {
      "id": 2,
      "name": "Escola"
  },

  /* ... */
]
```

</details>
<br>
<br>

| Método | Funcionalidade                                | URL                              |
| ------ | --------------------------------------------- | -------------------------------- |
| `POST` | Adiciona uma nova categoria no banco de dados | http://localhost:3000/categories |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "name": "Typescript"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "id": 3,
  "name": "Typescript"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"name" is required</code> caso o campo name não seja informado no body da requisição.
</details>

### 📬 Posts
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Retorna uma lista de postagens realizadas | http://localhost:3000/post |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  },
  
  /* ... */
]
```

</details>
<br>
<br>

| Método | Funcionalidade                               | URL                        |
| ------ | -------------------------------------------- | -------------------------- |
| `POST` | Adiciona uma nova postagem ao banco de dados | http://localhost:3000/post |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "updated": "2022-05-18T18:00:01.196Z",
  "published": "2022-05-18T18:00:01.196Z"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Some required fields are missing</code> caso algum campo não seja informado no body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"categoryIds" not found</code> caso algum item do campo categoryIds não exista.
</details>
<br>
<br>

| Método | Funcionalidade                                                   | URL                            |
| ------ | ---------------------------------------------------------------- | ------------------------------ |
| `GET`  | Retorna uma postagem pelo seu id (substitua `:id` por um número) | http://localhost:3000/post/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
      {
          "id": 1,
          "name": "Inovação"
      }
  ]
}
```

</details>
<br>
<br>

| Método | Funcionalidade                                                                                            | URL                            |
| ------ | --------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `PUT`  | Permite que o usuário logado atualize uma postagem dele no banco de dados (substitua `:id` por um número) | http://localhost:3000/post/:id |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "published": "2022-05-18T18:00:01.000Z",
  "updated": "2022-05-18T18:07:32.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    },
    {
      "id": 2,
      "name": "Escola"
    }
  ]
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>401</code>, com a mensagem <code>Unauthorized user</code> caso o usuário logado tente alterar um post que não pertence a ele;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Some required fields are missing</code> caso algum campo não seja informado no body da requisição.
</details>
<br>
<br>

| Método   | Funcionalidade                                                                                          | URL                            |
| -------- | ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `DELETE` | Permite que o usuário logado delete uma postagem dele no banco de dados (substitua `:id` por um número) | http://localhost:3000/post/:id |

A rota retorna o status 204, <code>sem resposta</code>.

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>401</code>, com a mensagem <code>Unauthorized user</code> caso o usuário logado tente alterar um post que não pertence a ele;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Post does not exist</code> caso o usuário tente remover um post com id inválido.
</details>
<br>
<br>

| Método | Funcionalidade                                                                                                             | URL                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `GET`  | Retorna uma lista de posts com um filtro por título ou conteúdo (substitua `:searchTerm` pelo título ou conteúdo desejado) | http://localhost:3000/post/search?q=:searchTerm |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
// GET /post/search?q=Vamos que vamos     (busca pelo título)

[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]

// GET /post/search?q=Foguete não tem ré     (busca pelo conteúdo)

[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```

</details>

---

# Histórico de Commits

É possível verificar todo o histórico de commits do projeto, de modo a visualizar passo-a-passo como foi desenvolvido o meu raciocínio até a finalização do projeto.

---

# Requisitos técnicos do desafio:

- ✅ 1. Crie migrations para as entidades Users, Categories, BlogPosts, PostCategories.

- ✅ 2. Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas.

- ✅ 3. Sua aplicação deve ter o endpoint POST /login.

- ✅ 4. Sua aplicação deve ter o endpoint POST /user.

- ✅ 5. Sua aplicação deve ter o endpoint GET /user.

- ✅ 6. Sua aplicação deve ter o endpoint GET /user/:id.

- ✅ 7. Crie o modelo 'Category' em 'src/database/models/category.js' com as propriedades corretas.

- ✅ 8. Sua aplicação deve ter o endpoint POST /categories.

- ✅ 9. Sua aplicação deve ter o endpoint GET /categories.

- ✅ 10. Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas.

- ✅ 11. Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas.

- ✅ 12. Sua aplicação deve ter o endpoint POST /post.

- ✅ 13. Sua aplicação deve ter o endpoint GET /post.

- ✅ 14. Sua aplicação deve ter o endpoint GET /post/:id.

- ✅ 15. Sua aplicação deve ter o endpoint PUT /post/:id.

# REQUISITOS BÔNUS

- ✅ 16. Sua aplicação deve ter o endpoint DELETE /post/:id.

- ✅ 17. Sua aplicação deve ter o endpoint DELETE /user/me.

- ✅ 18. Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm.
