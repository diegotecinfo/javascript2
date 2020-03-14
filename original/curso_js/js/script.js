
/*
// Tipo de dados null, undefined

//Undefined
let indefinido
console.log(indefinido)
console.log(typeof indefinido)

let nome = "Pedro"
console.log(nome[5])

//Null
let temperatura = 35
console.log(temperatura)

temperatura = null
console.log(temperatura)

console.log(temperatura === undefined)

console.log(typeof temperatura)
*/

var caixa_conteudo = document.getElementById("caixa_azul").innerHTML;
console.log(caixa_conteudo)

document.getElementById("caixa_amarela").innerHTML = `<h1>${caixa_conteudo}`
