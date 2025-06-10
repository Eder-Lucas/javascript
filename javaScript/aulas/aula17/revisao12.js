// Arrays

const number = [4, 20, 13, 50]
console.log(number[0]) //acessa o primeiro elemento

const names = ["Eder", "Lucas", "João", "Marcelo"]

names[4] = "Maria" //itens de dentro podem ser alterados

console.log(names) //último elemento

console.log(names.length)

const lastName = names.pop() //remove o último elemento
const firstName = names.shift() //remove o primeiro elemento
console.log(lastName)
console.log(firstName)

console.log(names)

names.push("Pedro") //adiciona no final
names.unshift("Juliano") //adiciona no inicio

console.log(names)

// converte numa string e separa com virgula
const namesString = names.join(", ")
console.log(namesString)

// salva itens especificos
const nameJuliano = names.filter(e => e.includes("Juliano"))
console.log(nameJuliano)

const nameJoao = names.slice(2,3)
console.log(nameJoao)