"use strict";
// tipos
let nome = "william";
console.log(nome);
let idade = 21;
console.log(idade);
let possueHobbies = true;
console.log(possueHobbies);
let frutas = ["laranja", "melancia", "pitaia"];
console.log(frutas);
let pessoa = {
    name: "william",
    age: 21
};
console.log(pessoa);
// tuplas
let endereco = ["Av principal", 123];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor["cinza"] = "Cinza";
    Cor["vermelho"] = "Vermelho";
    Cor["azul"] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.cinza;
console.log(minhaCor);
const retornaNome = (nome) => {
    return nome;
};
console.log(retornaNome(pessoa.name));
const multiplica = (n1 = 0, n2 = 0) => {
    return n1 * n2;
};
console.log(multiplica(9, 3));
const funcionario = {
    supervisor: ["william", "taty", "spaike"],
    baterPonto: (ponto) => {
        if (ponto <= 8) {
            return "Ponto normal";
        }
        else if (ponto > 8) {
            return "Fora do horario";
        }
        else {
            return "Ponto invalido";
        }
    }
};
console.log(funcionario.baterPonto(8), funcionario.supervisor);
// union types
let nota = 10;
console.log("nota", nota);
nota = "8";
console.log("nota", nota);
// never
const falha = (msg) => {
    throw new Error(msg);
};
const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto: () => {
        if (!produto.nome || produto.nome.trim().length == 0) {
            falha("Precisa ter nome");
        }
        else if (produto.preco <= 0) {
            falha("Precisa ter preço");
        }
    }
};
produto.validarProduto();
//# sourceMappingURL=tipos.js.map