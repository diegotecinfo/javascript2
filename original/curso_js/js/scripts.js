
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


// AULA -  DOM
var caixa_conteudo = document.getElementById("caixa_azul").innerHTML;
console.log(caixa_conteudo)

document.getElementById("caixa_amarela").innerHTML = `<h1>${caixa_conteudo}`


//AULA FUNCOES
function soma_numeros() {
    var x = 10
    var y = 5
    var soma = x + y
    console.log(soma)
}

soma_numeros()

function soma_args(num1, num2) {
    var soma = num1 + num2
    return soma
}

console.log(soma_args(10,40))


//EXERCICIO IMC
function calc_imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc
}

var meu_peso = parseFloat(document.getElementById("peso").innerHTML)
var minha_altura = parseFloat(document.getElementById("altura").innerHTML)

var meu_imc = calc_imc(meu_peso, minha_altura)

document.getElementById("imc").innerHTML = meu_imc.toFixed(2)


//AULA 12 - ARRAYS

var alunos = ["João", "Maria", "José"]
var num_primos = [2, 3, 5, 7, 11, 13]

console.log(alunos.length)
console.log(num_primos[4])
*/

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]

console.log(grupos.length)
console.log(grupos[1][1])

//ARRAYS 5:43 MINUTOS