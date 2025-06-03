// Operadores Lógicos

// && E (AND)
// || OU (OR)
// ! NÃO (NOT)

const pizza = true
const hotDog = true 
console.log(`Você gosto de pizza e hot dog? ${pizza && hotDog}`)

const simpatico = true
const humilde = false
console.log(`Você é legal? ${simpatico || humilde}`)

const portaAberta = false
console.log(`A porta está aberta? ${!portaAberta}`)

//primeiro os parenteses
console.log( (1 + 3 == 5 && 2 - 2 == 0) || !(50 / 10 == 5 * (10 - 2 == 8)) != 30) // true = 1 false = 0