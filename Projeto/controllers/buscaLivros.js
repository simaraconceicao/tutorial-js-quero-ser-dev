const livros = require('../database')
const read = require('readline-sync')

const buscaLivros = (inputCategoria) => {
  const opcaoInicial = read
    .question('Deseja buscar por categoria?S/N:  ')
      .toUpperCase()

  if (opcaoInicial === 'S') {
    console.table(livros.map(livro => livro.categoria))
    
    const inputCategoria = read
      .question('Digite uma categoria conforme tabela acima: ')

    const confirmacao = read
      .question('Tem certeza?S/N:  ')
        .toUpperCase()

    if (confirmacao === 'S') {
      const filtro = livros
      .filter(livro => livro.categoria === inputCategoria)
      console.table(filtro)  
    } 
  }
}

module.exports = buscaLivros
