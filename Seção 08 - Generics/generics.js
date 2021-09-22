"use strict";
function echo(obj) {
    return obj;
}
console.log(echo('João').length);
console.log(echo(19).length);
console.log(echo({ nome: 'João', idade: 27 }));
function echoMelhorado(obj) {
    return obj;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(19));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(e => console.log(e));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Curso', 'Entendendo', 'Typescript']);
imprimir([
    { nome: 'Mich', idade: 19 },
    { nome: 'Juh', idade: 18 },
    { nome: 'Nicky', idade: 18 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, 'dia').executar())
// console.log(new OperacaoBinaria({(}, null).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
console.log(new SomaBinaria(30, 434).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2021);
const d2 = new Data(5, 2, 2029);
console.log(new DiferencaEntreDatas(d1, d2).executar());
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(e) {
        this.fila.push(e);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const first = this.fila[0];
            this.fila.shift();
            return first;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens
            .filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map