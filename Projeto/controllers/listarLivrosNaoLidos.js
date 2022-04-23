const livros = require('../database')

const listarLivrosNaoLidos = () => {
  const filtro = livros
    .filter(livro => !livro.leu)
  console.table(filtro)
}

module.exports = listarLivrosNaoLidos