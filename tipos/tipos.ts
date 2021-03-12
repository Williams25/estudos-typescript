// tipos
let nome: string = "william"
console.log(nome)

let idade: number = 21
console.log(idade)

let possueHobbies: boolean = true
console.log(possueHobbies)

let frutas: Array<any> = ["laranja", "melancia", "pitaia"]
console.log(frutas)

let pessoa: object = {
  name: "william",
  idade: 21
}
console.log(pessoa)

// tuplas
let endereco: [string, number] = ["Av principal", 123]
console.log(endereco)

// enums
enum Cor {
  cinza = "Cinza",
  vermelho = "Vermelho",
  azul = "Azul"
}

let minhaCor: Cor = Cor.cinza
console.log(minhaCor)