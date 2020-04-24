
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


var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]

console.log(grupos.length)
console.log(grupos[1][1])

var cursos = [ "HTML", "Python", "PHP" ];

cursos.push("Javascript");

console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

cursos.unshift("Bootstrap");

console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

cursos.pop();

console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

cursos.shift();

console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]


var ingredientes = [ "pão branco", "queijo", "presunto" ];

ingredientes[0] = "pão integral";

console.log(ingredientes);  // O console mostrará [ "pão integral", "queijo", "presunto" ]


// AULA 13  - OBJETOS

var funcionario = {
    'nome':'Diego Carvalho',
    'ano_nac':'1992',
    'cpf':'111.111.111.11',
    'cargo':'Analista de suporte'
}

console.log(funcionario)
console.log(funcionario.nome, funcionario.cargo)

funcionario.cnh = '1254780967'
funcionario.cargo = 'Gerente de TI'

console.log(funcionario)
console.log(funcionario.nome, funcionario.cargo)

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
]

cursos[2].categorias[1] = 'administração de empresas'

console.log(cursos)


// AULA 14 - METODOS DE OBJETOS

var aluno = {
    'nome': 'Diego',
    'sobrenome': 'Carvalho',
    'ano_nasc': 1992,
    'idade_aluno': function () {
        var idade = 2020 - this.ano_nasc 
        return idade
    },
    'nome_completo': function () {
        var n_completo = `${this.nome} ${this.sobrenome}`
        return n_completo
    }
}

console.log(aluno.nome_completo())
console.log(`A idade é : ${aluno.idade_aluno()} anos`)

// AULA 16 - EVENTOS

document.getElementById("click-me").onclick = function () {
    alert("Você clicou no botão!")
}

var teste = document.getElementById("hover-me").onmouseover = function () {
    
}

document.getElementById("leave-me").onmouseout = function () {
    alert("Você parou com mouse sobre o botão e removeu o cursor!")
}

document.onkeydown =  function () {
    alert("Você pressionou alguma tecla!" + event.keyCode)
}

function button_clicked () {
    alert("Você clicou no botão!")
}

document.getElementById("botao_cor").onclick = function () {
    botao_cor.style.backgroundColor = "purple"
    botao_cor.style.transform = "translateX(100px)"
    //pode ser utilizada a keyword this para chamar o id
    //this.style.backgroundColor = "purple"
    //this.style.transform = "translateX(100px)"
}

// AULA 18 - OUTROS METODOS getElement

var exemplo = document.getElementsByClassName("exemplo")
exemplo[1].innerHTML = "Alterando o segundo elemento!"

var exemplo1 = document.getElementsByTagName("p")

exemplo1[4].innerHTML = "Alterando o paragrafo 1 !"


// AULA 19 - LOOPING

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos']

for (var b = 0; b < alunos.length; b++) {
    console.log(alunos[b])
}

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

for(var prop in carro) {
    console.log(`${prop} : ${carro[prop]}`)
}

var elementos = document.getElementsByClassName("exemplo")

for(var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "orange"
    elementos[c].style.fontWeight = "bold"
}

// AULA 20 - LOOPING WHILE DO WHILE

var contador = 0

while (contador <= 10) {
    console.log(contador)
    contador++
}

var c = 0
var elementos = document.getElementsByClassName("exemplo")
while(c < elementos.length) {
    elementos[c].style.color = "orange"
    elementos[c].style.fontStyle = "italic"
    c++
}

var contador1 = 10

do {
    console.log(contador1)
    contador1++
} while (contador1 < 10)

// AULA 21 - CONDICIONAIS IF/ELSEIF/ELSE

var idade = 17

if (idade < 18) {
    console.log("Menor de idade!")
} else if (idade == 18) {
    console.log("Tem 18 anos!")
} else {
    console.log("Maior de idade!")
}
-------------------------------------
var nota = 7
var faltas = 5

if (nota >=7 && faltas <= 4) {
    console.log("O aluno foi aprovado!")
} else {
    console.log("O aluno foi reprovado!")
}
-------------------------------------
var nota = 7
var faltas = 5

if(nota < 7 || faltas > 4) {
    console.log("REPROVADO!")
} else {
    console.log("APROVADO!")
}
*/

// AULA 25 - LOOPS E CONDICIONAIS (NESTING)

/*
Sócios: Grátis
Não sócios menores de 18 anos: R$ 6,00
Não sócios maiores de 18 maiores de 18 anos: R$ 12,00
Maiores de 65 anos: Grátis

----------------------------------------

var socio = false
var idade = 25

if (socio == true || idade >= 65) {
    console.log("O ingresso é grátis!")
} else if (idade < 18){
    console.log("O ingresso custa: R$ 6,00")
} else {
    console.log("O ingresso custa: R$: 12,00")
}

var funcionarios = [

    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']

    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']

    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']

    }

]

document.getElementById("filhos").innerHTML = ""

for (var a = 0; a < funcionarios.length; a++) {

    if (funcionarios[a].filhos) {
        var lista_filhos = funcionarios[a].filhos

        for (var b = 0; b < lista_filhos.length; b++) {
            document.getElementById("filhos").innerHTML += `<li>${lista_filhos[b]} - Filho de: ${funcionarios[a].nome}`
        }

    }
}

// Aula 24 - BOM

window.onmousemove = function (e) {

    if (e.pageY < 5) {
        //alert("Não perca os decontos exclusivos na seção de promoções.")
    }
    console.log(`Eixo Y ${e.pageY}`)
    console.log(`Eixo X ${e.pageX}`)
}

// Aula 25 -  Local Storage

//window.localStorage.setItem("nome", "Diego")

console.log(localStorage.nome)

localStorage.removeItem("nome")

// -------------

document.getElementById("enviar-nome").onclick = function () {

    // guardar o nome digitado em localStorage
    var name_user = document.getElementById("nome-usuario").value
    localStorage.setItem("nome", name_user)
    
    // esconder o formulário
    document.getElementById("name-field").style.display = "none"

    // atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = `Olá ${localStorage.nome}, tudo bem?`
    document.getElementById("not-me").innerHTML = `Nào é ${localStorage.nome}?`
    document.getElementById("welcome-area").style.display = "initial"

}

if (localStorage.nome) {
    document.getElementById("name-field").style.display = "none"

    document.getElementById("welcome-text").innerHTML = `Olá ${localStorage.nome}, tudo bem?`
    document.getElementById("not-me").innerHTML = `Nào é ${localStorage.nome}?`
    document.getElementById("welcome-area").style.display = "initial"

}

document.getElementById("not-me").onclick = function () {
    localStorage.removeItem("nome")

    document.getElementById("welcome-area").style.display = "none"

    document.getElementById("name-field").style.display = "initial"    

}

//AULA Data e Hora

var data = new Date().getFullYear()
var data_nascimento = "1980-03-01"
var ano_nascimento = new Date("1980-03-01").getFullYear()

console.log(data - ano_nascimento)

// DESAFIO DIAS DE ENTREGA - MEU MODO DE SOLUCIONAR //

var data_envio = new Date(2018,02,20)
var data_entrega = new Date(2018,03,06)
var dias_entrega = data_entrega - data_envio

dias_entrega =  new Date(dias_entrega).getDate()

document.getElementById("dias_entrega").innerHTML = `A entrega levou ${dias_entrega} dias para ser realizada.`
*/

// DESAFIO DIAS DE ENTREGA - MODO PROFESSOR DE SOLUCIONAR //

var envio = new Date("2018-03-20")
envio = envio.getTime()

var entrega = new Date("2018-04-06")
entrega = entrega.getTime()

var dias = (entrega - envio) / 86400000

document.getElementById("dias_entrega").innerHTML = `${dias} dias.`