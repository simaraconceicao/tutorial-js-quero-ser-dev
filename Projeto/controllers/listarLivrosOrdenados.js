const livros = require('../database')

const listarLivrosOrdenados = () => {
  const filtro = livros
    .sort((a,b) => a.paginas - b.paginas)
  console.table(filtro)
}

module.exports = listarLivrosOrdenados