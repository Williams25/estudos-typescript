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
    idade: 21
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