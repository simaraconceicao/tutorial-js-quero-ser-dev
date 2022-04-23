// 1. Exemplos
//   - Tipos de dados, Variáveis e Operadores

//Exemplo 1: Capture a data e horário atual, 
//imprima no console e verifique o tipo do resultado
const hoje = new Date().toLocaleString('pt-BR')
console.log(typeof hoje) // retorna string

//Exemplo 2: Declare duas variaveis que recebem um numero inteiro 
//e uma terceira variavel que recebe o resto da divisao entre estes numeros 
let num1 = 5
let num2 = 2
let resto = num1 % num2

console.log(resto) // retorna 1 - o resto da divisão

//   - Declaração de Funções
//com a palavra reservado function

function myFunction(num1, num2) {
  return num1 * num2
}

const result = myFunction(4, 5)
console.log(result) // 20

// //função anônima
const multiplica = function(num1, num2) {
  return num1 * num2
}

// console.log(multiplica(4, 5)) //20

// // função de seta (arrow function)
const multiplicaDoisInteiros = (num1, num2) => {
  return num1 * num2
}

console.log(multiplicaDoisInteiros(4, 5)) //20
// //   - Estrutura condicional

// //if..else
// //Verifique se a pessoa é maior de idade

let idade = 17
const maior = idade >= 18
const menor = idade < 18

if (maior) {
  console.log('maior idade')
} else if (menor) {
  console.log('menor idade')
} else {
  console.log(idade + ' - idade inválida')
}

// //switch case

switch (idade >= 18) {
  case true:
    console.log('maior idade')
    break
  case false:
    console.log('menor idade')
    break
  default:
    console.log(idade + ' - idade inválida')
    break
}

// //operador ternário
maior ? console.log('maior idade') : console.log('menor idade')

//   - Estrutura de repetição
//Imprima no console numeros de 1 até 25
// for 
for (let i = 1; i <= 25; i++) {
  console.log(i)
}

// while
let i = 1

while (i <= 25) {
  console.log(i)
  i++
}

// do...while
let index = 1
do {
  console.log(index)
  index++
} while (index <= 25) 


// - Objetos e Arrays

// criar, acessar, incluir e deletar

  //1 - objeto (spread e Destructuring)

  // criar um objeto pessoa
  const person = {
    name: 'Simara',
    age: 33
  }

  // acessou as propriedades de pessoa com 'desestruturação'
  const { nome, age } = person 
  console.log("AGE: " + age)

  // criou uma cópia do objeto pessoa e incluiu um item
  const novaPessoa = {...person,  role: 'dev'}
  console.log(novaPessoa)

  // deletou a propriedade idade do objeto pessoa
  delete person.age
  console.log("Sem idade: ", person)

  //2 - array  (push e spread)
  
  // declaração de array
  let pokemons = ['pikachu', 'charizard', 'squartle']

  // adicionar um novo elemento no último índice do array
  pokemons.push('Snorlax')
  console.log('Pokemons: ', pokemons)

  /* 
    mesclar itens de pokemons em um novo array 
    criando um novo elemento na prosição frontal e traseira do array
  */
  let personagens = ['Totoro', ...pokemons, 'Chihiro', 'Mononoque', 'Kiki']

  console.log('Personagens: ', personagens)
  
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

