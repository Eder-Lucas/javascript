// usando break e continue no while

let count = 0

while (count <= 20) {
    console.log(count)
    count++

    if (count === 8) {
        break;
    }
}

let contando = 0

while (contando <= 20) {
    contando++
    
    if (contando % 2 == 0) {
        console.log(contando, "é par")
        continue
    }

    console.log(contando, "não é par")
}