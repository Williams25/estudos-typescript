// tipos
let nome: string = "william"
console.log(nome)

let idade: number = 21
console.log(idade)

let possueHobbies: boolean = true
console.log(possueHobbies)

let frutas: Array<any> = ["laranja", "melancia", "pitaia"]
console.log(frutas)

let pessoa: { name: string, age: number } = {
  name: "william",
  age: 21
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

console.log(retornaNome(pessoa.name))

const multiplica = (n1: number = 0, n2: number = 0): number => {
  return n1 * n2
}
console.log(multiplica(9, 3))

// interface
interface Funcionario {
  supervisor: Array<string>,
  baterPonto: (ponto: number) => string
}

const funcionario: Funcionario = {
  supervisor: ["william", "taty", "spaike"],
  baterPonto: (ponto: number): string => {
    if (ponto <= 8) {
      return "Ponto normal"
    } else if (ponto > 8) {
      return "Fora do horario"
    } else {
      return "Ponto invalido"
    }
  }
}

console.log(funcionario.baterPonto(8), funcionario.supervisor)

// union types
let nota: number | string = 10
console.log("nota", nota)
nota = "8"
console.log("nota", nota)

// never
const falha = (msg: string): never => {
  throw new Error(msg)
}

interface Produto {
  nome: string
  preco: number
  validarProduto: () => void
}

const produto: Produto = {
  nome: "Sabão",
  preco: 4,
  validarProduto: () => {
    if (!produto.nome || produto.nome.trim().length == 0) {
      falha("Precisa ter nome")
    } else if (produto.preco <= 0) {
      falha("Precisa ter preço")
    }
  }
}

produto.validarProduto()