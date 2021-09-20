let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true

if (estaFrio) {
  let action = 'Colocar o casaco!'
  console.log(action)
}

const cpf: string = '123.456.000-99'
// cpf = '789.123.123-78'
console.log(cpf)

var segredo = 'externo'
function revelar () {
  var segredo = 'Interno'
  console.log(segredo)
}

revelar()
console.log(segredo)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// console.log(i)

const somar = function(n1: number, n2: number): number {
  return n1 + n2
}

console.log(somar(2, 3))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(9, 5))

const saudacao = () => console.log('Ola')
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('Mich')

// function normalComThis() {
//   console.log(this)
// }

// const normalComThisEspecial = normalComThis.bind({ nome: 'Juh' })
// normalComThisEspecial()

// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Juh' })
// arrowComThisEspecial()

function contagemRegressiva(inicio: number = 3, fim: number = inicio - 3): void {
  console.log(inicio)

  while(inicio > fim) {
    inicio--
    console.log(inicio)
  }
  console.log('FIM')
}

contagemRegressiva()
contagemRegressiva(3)

const numbers = [1, 10, 99, -5]

console.log(Math.max(...numbers))

const turmaA: string[] = ['Joao', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]

console.log(turmaB)

function retornaArray(a: number, ...args: number[]): number[] {
  console.log(a)
  return args
}

const numeros = retornaArray(1, 2, 12123, 1212, 123, 11)
console.log(numeros)

console.log(retornaArray(9, ...numbers))

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

const caracteristicas = ['Motor zetec 1.8', 2020]

const motor = caracteristicas[0]
const ano = caracteristicas[1]
console.log(motor, ano)

const [motor1, ano1] = caracteristicas

console.log(motor1, ano1)

const [w, z] = [1, 2]

const item = {
  nome: 'ssd',
  preco: 200
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem, precoItem)

const { nome: n, preco: p } = item
console.log(n, p)

const usuarioID = 'SuportCod3r'
const notificacoes: string = '9'
const boasVindas = 'Boas vindas ' + usuarioID + 'Notificacoes: ' + notificacoes

const boasVindas2 = `Boas vindas ${usuarioID} Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`

console.log(boasVindas)
console.log(boasVindas2)

console.log(`${(1 + 1) * 3}`)
console.log(`Motor: ${caracteristicas[0]}`)

const dobro = (valor: number): number =>  {
  return valor * 2
}
console.log(dobro(10))
  
const dizerOla = (nome: string = 'Pessoa'): void => {
  console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")

const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

const array = [55, 20]
array.push(...nums)
console.log(array)

const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

const cientista = { primeiroNome: "Will", experiencia: 12 }
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)

function esperar3s (callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois...')
  }, 3000)
}

esperar3s((resultado: string) => console.log(resultado))

function esperar3sPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3s depois da promise')
    }, 3000);
  })
}

esperar3sPromise().then(dado => console.log(dado))

fetch(' https://swapi.dev/api/people/1')
  .then(res => res.json())
  .then(data => data.films)
  .then(films => fetch(films[0]))
  .then(res => res.json())
  .then(film => console.log(film.title))
  .catch(err => console.log('Catch' + err))

