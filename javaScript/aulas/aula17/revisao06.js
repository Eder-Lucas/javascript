// TERNÁRIO

// (expressão) ?(se verdadeiro) :(se falso)

const number = 6
console.log((number % 2 === 0) ? `${number} é par` : `${number} é ímpar`)

const age = 22
console.log(
    age >= 18
        ? `Você tem ${age} anos, você é maior de idade`
        : `Você tem ${age} anos, você é menor de idade`
)

const learnedJs = true
const practicedJs = true
console.log(
    learnedJs && practicedJs
    ? "Você aprendeu Js da forma correta, estudando e praticando"
    : learnedJs ? "Aprendeu Js mas não anda praticando" : "Praticou Js mas esqueceu de buscar coisas novas, vacilo!"   
)

const isadult = true
console.log(`Cristiano ${isadult ? "não " : ""}é criança`)

const hours = 22
console.log(
    "Está de",
    hours >= 0 && hours < 7 ? "madrugada" :
    hours >= 7 && hours < 12 ? "Manhã" :
    hours >= 12 && hours < 18 ? "Tarde" :
    "Noite"
)