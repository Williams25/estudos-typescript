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

const retornaNome = (nome: string): string => {
  return nome
}

console.log(retornaNome(nome))

const multiplica = (n1: number = 0, n2: number = 0): number => {
  return n1 * n2
}
console.log(multiplica(9, 3))