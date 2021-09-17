"use strict";
var nome = 'Mich';
console.log(nome);
// Number
var idade = 19;
console.log(idade);
idade = 19.5;
console.log(idade);
// Boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
var minhaIdade;
minhaIdade = 19;
console.log(typeof minhaIdade);
// minhaIdade = '19'
// Array
var hobbies = ['Cozinhar', 'Volei'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
// Tuplas
var endereco = ['Av Principal', 99, 'Casa 1'];
console.log(endereco);
endereco = ['Rua Importante', 1260, 'Bloco C'];
console.log(endereco);
// Enums
var Color;
(function (Color) {
    Color[Color["Cinza"] = 0] = "Cinza";
    Color[Color["Verde"] = 100] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
    Color[Color["Laranja"] = 3] = "Laranja";
    Color[Color["Amarelo"] = 4] = "Amarelo";
    Color[Color["Vermelho"] = 100] = "Vermelho";
})(Color || (Color = {}));
var minhaCor = Color.Verde;
console.log(minhaCor);
console.log(Color.Verde, Color.Vermelho);
// Function
function retornaMenuNome() {
    return nome;
}
console.log(retornaMenuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4.7, 9));
var teste = function (a, b) {
    return false;
};
console.log(teste(9, 9));
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
var usuario = {
    nome: 'Mich',
    idade: 19
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Juh',
//     age: 19
//   }
usuario = {
    nome: 'Juh',
    idade: 17
};
console.log(usuario);
var funcionarios = {
    nomes: ['Mich', 'Nicole', 'Juh', 'Caroline'],
    baterPonto: function (hour) {
        return hour <= 8 ? 'Ponto normal' : 'Fora do Horario';
    }
};
var funcionarios2 = {
    nomes: ['Mich', 'Nicole', 'Juh', 'Caroline'],
    baterPonto: function (hour) {
        return hour <= 8 ? 'Ponto normal' : 'Fora do Horario';
    }
};
console.log(funcionarios.nomes);
console.log(funcionarios.baterPonto(8));
console.log(funcionarios.baterPonto(10));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
// nota = true
// Checando tipos
var valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
}
else {
    console.log("\u00C9 um " + typeof valor);
}
// Never
function failed(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length) {
            failed('Obrigatório ter um nome no produto');
        }
        if (this.preco < 0) {
            failed('Preço inválido');
        }
    }
};
var height = 12;
// height = null
var heightOptional = 12;
heightOptional = null;
var contato1 = {
    nome: 'Mich',
    tel1: '989283921',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNull = null;
// podeSerNull = 12
console.log(podeSerNull);
// podeSerNull = 'abc'
//# sourceMappingURL=tipos.js.map