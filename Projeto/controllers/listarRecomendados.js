const livros = require('../database')

const listarLivrosRecomenados = () => {
  const filtro = livros
    .filter(livro => livro.leu && livro.recomenda)
  console.table(filtro)
}

module.exports = listarLivrosRecomenados