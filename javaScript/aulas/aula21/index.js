//Módulos
//separar o código em arquivos separados

//const { soma, sub } = require("./functions/math")

//type module do package.json
import './hello.js'
import { soma, sub } from "./functions/math.js"
import { catEmoji } from "./constants/emojis.js"

console.log(soma(10, 3))
console.log(sub(16, 3))
console.log(catEmoji)