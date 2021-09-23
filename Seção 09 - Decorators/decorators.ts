type Constructor = { new(...args: any[]): {} }

function logarClasse(constructor: Constructor) {
  console.log(constructor)
}

function decoratorVazio (_: Constructor) {}

function logarClasseSe (valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b?: number }) {
  return function (_: Constructor): void {
    console.log(obj.a, obj.b)
  }
}


function logarObjecto(constructor: Constructor) {
  console.log('carregado')
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('antes')
      super(...args)
      console.log('depois')
    }
  }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

interface Eletrodomestico {
  imprimir? (): void
}

// @logarClasse
// @decorator({ a: 'Número:', b: 123 })
// @decorator({ a: 'Número:' })
@logarObjecto
@imprimivel
class Eletrodomestico {
  constructor () {
    console.log('new')
  }
}

function imprimivel (constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this)
  }
}

(<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

function perfilAdmin<T extends Constructor> (constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Usuário não é um administrador.')
      }
    }
  }
}


@perfilAdmin
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}


new MudancaAdministrativa().critico()


class ContaCorrente {
  @notNegative
  private saldo: number

  constructor (saldo: number) {
      this.saldo = saldo
  }

  @freeze
  sacar (@paramInfo valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor
      return true
    } else {
      return false
    }
  }
  
  @freeze
  getSaldo () {
    return this.saldo
  }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
cc.sacar(5248.57)
cc.sacar(0.1)
console.log(cc.getSaldo())

// cc.getSaldo = function () {
//   return this['saldo'] + 7000
// }

function freeze (alvo: any, methodName: string, descritor: PropertyDescriptor) {
  console.log(alvo)
  console.log(methodName)
  descritor.writable = false
}

function notNegative (target: any, propertyName: string) {
  delete target[propertyName]
  Object.defineProperty(target, propertyName, {
    get: function (): any {
      return target['_' + propertyName]
    },
    set: function (value: any): void {
      if (value < 0) {
        throw new Error('Saldo inválido')
      } else {
        target['_' + propertyName] = value
      }
    }
  })
}

function paramInfo (target: any, methodName: string, indexParam: number) {
  console.log('Target:', target)
  console.log('Method:', methodName)
  console.log('Index:', indexParam)
}
