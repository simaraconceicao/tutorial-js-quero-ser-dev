# Segundo tutorial do canal quero ser dev
![image](https://media.giphy.com/media/3o7btUrUUiljkVzDBS/giphy.gif)

## Para quem é esse tutorial?

✅ Pra quem está precisando treinar lógica aplicada com javascript

✅ Pra quem já iniciou os estudos de javascript e nodejs

✅ Pra quem tem o VScode e nodeJs instalados

## Conteúdos dos exemplos
  - Tipos de dados, Variáveis e Operadores
  - Declaração de Funções, anônimas e arrow function
  - Estrutura condicional: if..else, switch...case e ternário
  - Estrutura de repetição: for, while e do...while
  - Objetos e Arrays: Destructuring, spread operator, criar, acessar, incluir e deletar item 
  - Métodos de iteração: sort, map, reduce, filter e find

<br>

  `Extras: debbuging, readline-sync e code runner`
<br>

  `Veja os códigos na pasta de exemplos`

## Projeto
# 🚀 `SI`stema de gerenciamento de livros

> ⚠️ Poder programar em javascript sem depender do navegador é TUDOOO de bom.   Agora, nem o céu é o limite para as aplicações que vocês vão criar, rs. Mas vamos ao que interessa! 

---

# 🧠 Contexto

O objetivo é criar um sistema onde deverá ser possível gerenciar informações sobre os livros que já lemos e os livros que estão na nossa listinha de desejos.


### `Como criar o projeto` 
Siga os passos abaixo:

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | `npm init -y` |
| No package.json, crie o script start   | `"start": "node app.js"` |
| Instale as dependências   | `npm i readline-sync` |
| Crie o .gitignore     | `node_modules` |
|

### `Tecnologias`

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `npm` | Gerenciador de pacotes|
| `readline-sync` | Dependência para receber inputs no terminal|
| 
  
### `Arquitetura`

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```

### `Requisitos`

- [ ]  **`buscarLivros`** Deverá ser possível buscar livros pela categoria
- [ ]  **`listarLivrosOrdenados`** Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
- [ ]  **`listarRecomendados`** Deverá listar livros que já foram lidos e que são recomendados
- [ ]  **`listarLivrosNaoLidos`** Deverá listar livros que ainda não foram lidos 


`REGRAS`
```
- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
```

`COMPORTAMENTO ESPERADO`
![image](https://media.giphy.com/media/28jwwTNDkRl4pINd7c/giphy.gif)

## `Dados`

Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

LIVRO
- nome: string
- categoria: string
- paginas: number
- recomenda: boolean
- leu: boolean
----
### Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                       | Comando/informação |
| --------------------------- | ------------------ |
| Faça o fork                 | `botão de forkar`  |
| Faça o clone                | `git clone`        |
| Instale as dependências após acessar a pasta projeto    | `npm i`            |
| Rode o projeto              | `npm start`       |

### 😎 Próximos passos para estudar

- Javascript assíncrono, promise e consumo de API com javascript
- Programação orientada a objetos com javascript
- Criação de CRUD, integração com MongoDB e deploy no heroku
- Estrutura de dados e algoritmos com javascript
- Testes unitários com jest

---

_Foi incrível compartilhar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_

### Saudações, Simara!

 <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Professora na {reprograma}, desenvolvedora na ThoughtWorks e criadora do Canal e Podcast Quero Ser Dev.

Vamos nos conectar!

- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição
