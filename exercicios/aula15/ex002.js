let valores = [2, 5, 3, 9, 8]
valores.sort()

//mostra os valores de forma tradicional => []
console.log(valores)
/*
uma forma de ver os valores visualmente com outra formatação

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//simplifica o código acima
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//para cada posição na variavel valores, mostrar valores[pos]