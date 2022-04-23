  //3 - array de objetos

  // instância de um novo array
  const listaDeCompras = [
    {
      nome: 'geladeira',
      valor: 2300
    },
    {
      nome: 'televisao smart 50 polegadas',
      valor: 10300
    },
    {
      nome: 'playstations 5',
      valor: 2300
    },
    {
      nome: 'nintendo switch',
      valor: 4500
    },
    {
      nome: 'cadeira gamer',
      valor: 1800
    }
  ]

  // imprime no console o último item da lista
  console.log("Lista de Compras: ", listaDeCompras[listaDeCompras.length-1])

//   - Métodos de iteração

//sort

// ordenar do menor para o maior
const listaOrdenada = listaDeCompras.sort((itemCurr, itemPrev) => {
  return itemCurr.valor - itemPrev.valor
})
console.log("Lista Ordenada: ", listaOrdenada)

//reduce
//média simples de preços dos produtos
const somatorio = listaDeCompras.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual.valor
}, 0)
const mediaSimples = somatorio / listaDeCompras.length
console.log('Media: ', mediaSimples)

//filter
// filtra produtos com valores menor que 5000
const listaFiltrada = listaDeCompras.filter(item => item.valor < 5000)
console.log('listaFiltrada: ', listaFiltrada)

//find
//encontra e retorna produto com valor igual a 1800
const encontraProduto = listaDeCompras.find(item => item.valor === 1800)
console.log('encontraProduto: ', encontraProduto)

//map
//cria um novo array somente com os nomes dos produtos
const novaLista = listaDeCompras.map(item => item.nome)
console.log('novaLista: ', novaLista)