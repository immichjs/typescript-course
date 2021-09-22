class Data {
  public dia: number
  public mes: number
  public ano: number

  constructor (dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(20, 11, 2021)

aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2030
console.log(casamento)

class DataEsperta {
  constructor (public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

  }
}

const aniversarioEsperto = new DataEsperta(20, 11, 2021)

aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 2030
console.log(casamentoEsperto)

class Produto {
  constructor (public nome: string, public preco: number, public desconto: number = 0) {

  }

  precoComDesconto (): number {
    const descontoAplicado = this.preco * this.desconto
    this.preco -= descontoAplicado

    return this.preco
  }

  public resumo (): string {
    return `${this.nome} | R$ ${this.precoComDesconto()} (${this.desconto * 100}% OFF)`
  }
}

const iPhone = new Produto('iPhone X', 4200.0)
iPhone.desconto = 0.05
console.log(iPhone.resumo())

const monitorUltraWide = new Produto('Odyssey g9', 10000, 0.33)
console.log(monitorUltraWide.resumo())

class Carro {
  private velocidadeAtual: number = 0

  constructor (public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

  }

  protected alterarVelocidade (delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    velocidadeValida
      ? this.velocidadeAtual = novaVelocidade
      : (
        this.velocidadeAtual = delta > 0
          ? this.velocidadeMaxima
          : 0
      )

    return this.velocidadeAtual
  }

  public acelerar (): number {
    return this.alterarVelocidade(5)
  }

  public frear (): number {
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro {
  constructor (modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar (): number {
    return this.alterarVelocidade(20)
  }

  public frear (): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)

console.log(`${f40.marca} ${f40.modelo}`)

console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())

console.log(f40.frear())
console.log(f40.frear())

class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 130) {
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 19
console.log(pessoa1.idade)

class Matematica {
  static PI: number = 3.1416

  static areaCirc (raio: number): number {
    return Matematica.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(4))

abstract class X {
  abstract y(a: number): number

  w (b: number): void {
    console.log(b)
  } 
}

// console.log(new X())

abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((current, next) => current + next)
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((current, next) => current * next)
  }
}


let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

class Unico {
  private static instance: Unico = new Unico
  
  private constructor () {}

  static getInstance (): Unico {
    return Unico.instance
  }

  agora() {
    return new Date
  }
}

console.log(Unico.getInstance().agora())

class Aviao {
  public readonly modelo: string

  constructor (modelo: string, public readonly prefix: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefix = 'PT-DEF'
console.log(turboHelice)
