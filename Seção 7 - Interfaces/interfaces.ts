interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla (pessoa: Humano): void {
  console.log(`Ola ${pessoa.nome}`)
}

function mudarNome (pessoa: Humano): void {
  pessoa.nome = 'Joana'
}

const pessoa: Humano = {
  nome: 'João',
  idade: 19,
  altura: 1.64,
  saudar (sobrenome: string): void {
    console.log(`Olá ${this.nome} ${sobrenome}`)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

console.log(pessoa)

class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar (sobrenome: string): void {
    console.log(`Olá ${this.nome} ${sobrenome}`)
  }
}

const meuCliente = new Cliente
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = (base: number, exp: number): number => base ** exp
console.log(potencia(3, 10))

interface A {
  a (): void
}

interface B {
  b (): void
}

interface ABC extends A, B {
  c (): void
}

class RealA implements A {
  a (): void {}
}

class RealAB implements A, B {
  a (): void {}
  b (): void {}
}

class RealABC implements ABC {
  a (): void {}
  b (): void {}
  c (): void {}
}

abstract class AbstrataABD implements A, B {
  a (): void {}
  b (): void {}

  abstract d (): void
}

interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString())
}

const h = 2
const j = 3
const k = 4

h.log()
j.log()
k.log()

const cli = {
  nome: 'Pedro',
  toString() {
    return this.nome
  }
}

cli.log()
