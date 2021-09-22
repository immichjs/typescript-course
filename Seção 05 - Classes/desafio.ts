// Exercício 1 - Classe
class Moto {
  constructor (public nome: string, public velocidade: number = 0) {
    this.nome = nome
    this.velocidade = velocidade
  }

  public buzinar(): void {
      console.log('Toooooooooot!')
  }

  public acelerar (delta: number): void {
    this.velocidade = this.velocidade + delta
  }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
abstract class Objecto2D {
  constructor (public base: number = 0, public altura: number = 0) {

  }

  abstract area (): number
}

class Retangulo extends Objecto2D {
  area (): number {
    return this.base * this.altura
  }
}

const retangulo = new Retangulo(5, 7)
retangulo.base = 10
// retangulo.altura = 7
retangulo.area = function() {
  return this.base * this.altura
}
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = ''

  get primeiroNome (): string {
    return this._primeiroNome
  }

  set primeiroNome (valor: string) {
    if (valor.length >= 3) {
      this._primeiroNome = valor
    } else {
        this._primeiroNome = ''
    }
  }
}

const estagiario = new Estagiario

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
