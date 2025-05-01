// Variáveis

//const e let tem escopo de bloco 

//BLOCO
/*
{
    const meuNome = "eder"
}
console.log(meuNome) não consegue acessar

CONST NÃO PODE SER ATRIBUIDO OUTRAS VEZES

const dogs = "pinscher"
console.log(dogs)

dogs = "pastor alemão"
console.log(dogs)
*/

//já let pode 

let dog = "pinscher"
console.log(dog)

dog = "pastor alemão"
console.log(dog)

//var é global que pode ser acessada fora do escopo
//tentar sempre usar const