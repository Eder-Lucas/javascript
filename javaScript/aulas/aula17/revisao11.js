//Funções

// function nome(){}

function greet(name) {
    console.log("Seja bem vindo(a)", name)
}
greet("Eder")

function soma(a, b) {
    return a + b
}
const result = soma(2, 3)
console.log(result)

const multi = (a, b) => a * b //flecha
console.log(multi(4, 6))

//fatorial
function fatorial(n) {
    let resultado = 1
    for (let i = 1; i <= n; i++) {
        resultado *= i
    }
    return resultado
}
console.log(fatorial(5))

function createTag(name, prefix, suffix) {
    if (prefix && suffix) {
        return `${prefix} ${name} ${suffix}`
    }
    if (prefix) {
        return `${prefix} ${name}`
    }
    return name
}
const tag = createTag("Eder", "[Desenvolvedor]", "Dev")
console.log(tag)

//valor padrão de parâmetros
function potencia(numero, expoente=2) {
    return numero ** expoente
}
console.log(potencia(2))
console.log(potencia(2, 5))

function saudacao(name, log=false) {
    const texto = `Olá ${name}!`
    if (log) {
        console.log(texto)
        return //nao retorna um valor para o texto
    }
    return texto
}
const texto = saudacao("Eder", true)
console.log(texto) //undefined
