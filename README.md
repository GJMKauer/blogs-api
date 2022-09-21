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

Antes de iniciar o projeto, é necessário instalar as dependências dele com o comando
```
npm install
```

Para rodar o projeto, é necessário executar o comando
```
docker-compose up -d
```
na raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível. Esse comando deve ser executado via terminal dentro do diretório onde está o arquivo **docker-compose.yml**. Após os containers estarem funcionando, você pode realizar as requisições do CRUD através de algum cliente HTTP, como o Insomnia, o Postman, o HTTPie ou até mesmo extensões como o Thunder Client, do VS Code.

O projeto trata-se de um desafio para consolidar o aprendizado do modelo de Camadas MSC em conjunto com a utilização do ORM Sequelize, responsável por abstrair toda a lógica de requisição ao banco de dados (no caso, MySQL) com uma sintaxe mais simples e com muitas facilidades. Nesse projeto também fui capaz de utilizar a biblioteca JWT para geração de token de usuário (através de login na API), o que possibilita a autenticação do usuário e validação através desse token, conferindo maior segurança nas transações da API. Isso faz com que o um usuário `X` só possa alterar ou excluir as informações relacionados a esse usuário `X`, recebendo uma mensagem de erro caso tente realizar esse procedimento para alterar, por exemplo, o usuário `Y`.

Também foi utilizado o conceito de middlewares para validação das requisições; ao tentar submeter uma requisição com dados inválidos ou qualquer informação que possa gerar um erro, essa submissão é levada até o middleware que retorna um sinal de erro para o usuário, informando-o o tipo de erro para que ele corrija e realize a requisição novamente.

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
