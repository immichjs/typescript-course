let nome = 'Mich'

console.log(nome)

// Number
let idade = 19
console.log(idade)

idade = 19.5
console.log(idade)


// Boolean
let possuiHobbies = false
// possuiHobbies = 1
console.log(possuiHobbies)

let minhaIdade: number
minhaIdade = 19

console.log(typeof minhaIdade)
// minhaIdade = '19'

// Array
let hobbies: any[] = ['Cozinhar', 'Volei']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100

// Tuplas
let endereco: [string, number, string] = ['Av Principal', 99, 'Casa 1']
console.log(endereco)

endereco = ['Rua Importante', 1260, 'Bloco C']
console.log(endereco)

// Enums
enum Color {
  Cinza,
  Verde = 100,
  Azul = 2,
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Color = Color.Verde
console.log(minhaCor)
console.log(Color.Verde, Color.Vermelho)

// Function
function retornaMenuNome (): string {
  return nome
}

console.log(retornaMenuNome())

function digaOi (): void {
  console.log('Oi')
}

digaOi()

function multiplicar (a: number, b: number): number {
  return a * b
}

console.log(multiplicar(4.7, 9))

const teste = function (a: number, b: number): boolean {
  return false
}

console.log(teste(9, 9))

let calculo: (a: number, b: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

let usuario: { nome: string, idade: number } = {
  nome: 'Mich',
  idade: 19
}

console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Juh',
//     age: 19
//   }
usuario = {
    nome: 'Juh',
    idade: 17
  }
  
console.log(usuario)

// Alias
type Funcionario = {
  nomes: string[],
  baterPonto: (hour: number) => string
}

const funcionarios: Funcionario = {
  nomes: ['Mich', 'Nicole', 'Juh', 'Caroline'],
  baterPonto (hour: number): string {
    return hour <= 8 ? 'Ponto normal' : 'Fora do Horario'
  }
}

const funcionarios2: Funcionario = {
  nomes: ['Mich', 'Nicole', 'Juh', 'Caroline'],
  baterPonto (hour: number): string {
    return hour <= 8 ? 'Ponto normal' : 'Fora do Horario'
  }
}

console.log(funcionarios.nomes)
console.log(funcionarios.baterPonto(8))
console.log(funcionarios.baterPonto(10))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
// nota = true

// Checando tipos
let valor = 30

if (typeof valor === 'number') {
  console.log('É um number')
} else {
  console.log(`É um ${typeof valor}`)
}

// Never
function failed (msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validarProduto () {
    if (!this.nome || this.nome.trim().length) {
      failed('Obrigatório ter um nome no produto')
    }
    if (this.preco < 0) {
      failed('Preço inválido')
    }
  }
}

let height = 12
// height = null

let heightOptional: null | number = 12
heightOptional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: null | null
}

const contato1: Contato = {
  nome: 'Mich',
  tel1: '989283921',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNull: null = null
// podeSerNull = 12

console.log(podeSerNull)
// podeSerNull = 'abc'
