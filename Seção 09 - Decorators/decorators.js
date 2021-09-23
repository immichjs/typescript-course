"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a, obj.b);
    };
}
function logarObjecto(constructor) {
    console.log('carregado');
    return class extends constructor {
        constructor(...args) {
            console.log('antes');
            super(...args);
            console.log('depois');
        }
    };
}
// @logarClasse
// @decorator({ a: 'Número:', b: 123 })
// @decorator({ a: 'Número:' })
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('new');
    }
};
Eletrodomestico = __decorate([
    logarObjecto,
    imprimivel
], Eletrodomestico);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
new Eletrodomestico().imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Usuário não é um administrador.');
            }
        }
    };
}
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    notNegative
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    freeze,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    freeze
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
cc.sacar(0.1);
console.log(cc.getSaldo());
// cc.getSaldo = function () {
//   return this['saldo'] + 7000
// }
function freeze(alvo, methodName, descritor) {
    console.log(alvo);
    console.log(methodName);
    descritor.writable = false;
}
function notNegative(target, propertyName) {
    delete target[propertyName];
    Object.defineProperty(target, propertyName, {
        get: function () {
            return target['_' + propertyName];
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Saldo inválido');
            }
            else {
                target['_' + propertyName] = value;
            }
        }
    });
}
function paramInfo(target, methodName, indexParam) {
    console.log('Target:', target);
    console.log('Method:', methodName);
    console.log('Index:', indexParam);
}
//# sourceMappingURL=decorators.js.map