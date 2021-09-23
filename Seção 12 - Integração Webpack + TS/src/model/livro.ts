import Vendavel from './vendavel'

export default class Livro implements Vendavel {
  nome: string
  preco: number
  desconto: number

  constructor (nome: string, preco: number, desconto: number) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto
  } 

  precoComDesconto () {
    return this.preco * (1 - this.desconto)
  }
}
