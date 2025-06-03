// Estrutura condicional switch
/*

switch (valor) {
    case "esperando":{
        ...
        break;
    }
 
}

*/

const animal = "gato"

switch (animal) {
    case "gato":{
        console.log("Miau!")
        break;
    }
    case "galinha":{
        console.log("Cocorico!")
        break;
    }
    case "pato":{
        console.log("quack!")
        break;
    }
}
console.log("emitiu um som")

const coisas = "Coxinha"

switch (coisas) {
    case "Pizza":
    case "Coxinha":
    case "Pastel":
    case "Hamburger":{
        console.log("Comida")
        break;
    }

    case "Vaca":
    case "Galinha":
    case "Pato":
    case "cachorro":{
        console.log("Animal")
        break;
    }

    case "Pá":
    case "Picareta":
    case "Enxada":
    case "Martelo":{
        console.log("Ferramentas")
        break;
    }

    default:
        console.log("Não listado")
        break;
}