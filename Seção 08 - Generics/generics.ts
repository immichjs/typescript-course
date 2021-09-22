function echo (obj: any) {
  return obj
}

console.log(echo('João').length)
console.log(echo(19).length)
console.log(echo({ nome: 'João', idade: 27 }))

function echoMelhorado<Type>(obj: Type): Type {
  return obj
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(19))
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome)

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

function imprimir<T> (args: T[]): void {
  args.forEach(e => console.log(e))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Curso', 'Entendendo', 'Typescript'])

type Aluno = { nome: string, idade: number }

imprimir<Aluno>([
  { nome: 'Mich', idade: 19 },
  { nome: 'Juh', idade: 18 },
  { nome: 'Nicky', idade: 18 },
])

type Echo = <T>(data: T) => T

const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

abstract class OperacaoBinaria<T, R> {
  constructor (public operando1: T, public operando2: T) {}

  abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'dia').executar())
// console.log(new OperacaoBinaria({(}, null).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3, 7).executar())
console.log(new SomaBinaria(30, 434).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {

  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)

    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24

    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

const d1 = new Data(1, 2, 2021)
const d2 = new Data(5, 2, 2029)
console.log(new DiferencaEntreDatas(d1, d2).executar())

class Fila<T extends number | string> {
  private fila: Array<T>

  constructor (...args: T[]) {
    this.fila = args
  }

  entrar (e: T) {
    this.fila.push(e)
  }

  proximo (): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const first = this.fila[0]
      this.fila.shift()
  
      return first
    } else {
      return null
    }
  }

  imprimir (): void {
    console.log(this.fila)
  }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')

fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())

fila.imprimir()

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// const outraFila = new Fila<boolean>(true, false)

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type MapObject<C, V> = { chave: C, valor: V }

class Mapa<C, V> {
  private itens: Array<MapObject<C, V>> = new  Array<MapObject<C, V>>()

  obter (chave: C): MapObject<C, V> | null {
    const resultado = this.itens
      .filter(i => i.chave === chave)
      
    return resultado ? resultado[0] : null
  }

  colocar (par: MapObject<C, V>) {
    const encontrado = this.obter(par.chave)

    if (encontrado) {
      encontrado.valor = par.valor
    } else {
      this.itens.push(par)
    }
  }

  limpar () {
    this.itens = new Array<MapObject<C, V>>()
  }

  imprimir () {
    console.log(this.itens)
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()
