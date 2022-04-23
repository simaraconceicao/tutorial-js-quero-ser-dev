const read = require('readline-sync')
const buscaLivros = require('./controllers/buscaLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosRecomendados = require('./controllers/listarRecomendados')


const opcaoInicial = read.question(`
=================== Menu ===================

1- CATEGORIA: Buscar livro por categoria
2- ORDENAR: Ordenar livros por quantidade de páginas
3- RECOMENDADOS: Buscar livros recomendados
4- LISTA DE DESEJO: Buscar lista de desejo

5- SAIR

Digite um número[1-5]: 
`)

switch (opcaoInicial) {
  case '1':
    buscaLivros()
    break
  case '2':
    listarLivrosOrdenados()
    break
  case '3':
    listarLivrosRecomendados()
    break
  case '4':
    listarLivrosNaoLidos()
    break
  default:
    console.log('fim do algoritmo')
    break
}
