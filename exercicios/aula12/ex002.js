var agora = new Date()//pega as datas atuais
var hora = agora.getHours()//hora
var minutos = agora.getMinutes()//minutos
var segundos = agora.getSeconds()//segundos
var milissegundos = agora.getMilliseconds()
var dia = agora.getDate()//dia
var mês = agora.getMonth() + 1//mês / soma +1 pois janeiro é igual a 0
var ano = agora.getFullYear()//ano

console.log(`Agora são extamente ${hora} Horas ${minutos} Minutos ${segundos} Segundos e ${milissegundos} Milissegundos do dia ${dia} do mês ${mês} do ano de ${ano}`)

//lógica do dia
if (hora >= 7 && hora < 12) {//entre 7 e 11 horas
    console.log('Bom Dia!')
}
else if ( hora == 12) {//exatamente 12h
    console.log('Meio Dia!')
}
else if (hora > 12 && hora < 19 ) {//entre 13 e 18 horas
    console.log('Boa Tarde!')
}
else if (hora >= 19 && hora < 24) {//entre 19 e 23 horas
    console.log('Boa Noite!')
}
else if (hora == 0) {//exatamente 0 horas
    console.log('Meia Noite!')
}
else {//entre 1 e 6 horas
    console.log('Boa Madrugada!')
}