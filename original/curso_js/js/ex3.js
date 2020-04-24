// 1) EXERCICIO 1

function conversao() {
    var graus = document.getElementById("temp_celsius").value
    var fire = (graus * 9 / 5) + 32
    document.getElementById("temp_fahr").innerHTML = `<strong>${fire}</strong>`
    return fire
}

// -------------------------------------------------------------------------------------

// 2) EXERCICIO 2

document.getElementById("anos_copa").innerHTML = null

for (var copa = 1930; copa <= 2018; copa += 4) {
    document.getElementById("anos_copa").innerHTML += `<li>${copa}</li>`
}

// -------------------------------------------------------------------------------------

// 3) EXERCICIO 3

document.getElementById("calcular").onclick = function () {

    var n_1 = parseFloat(document.getElementById("nota1").value)
    var n_2 = parseFloat(document.getElementById("nota2").value)
    var faltas = document.getElementById("n_faltas").value

    var media = (n_1 + n_2) / 2
    var situacao

    if (media >= 6.5 && faltas <= 6) {
        situacao = "Aprovado!"
    } else if (media < 6.5 && faltas > 6) {
        situacao = "Reprovado por faltas e por média."
    } else if (media < 6.5) {
        situacao = "Reprovado por média."
    } else if (faltas > 6) {
        situacao = "Reprovado por faltas."
    }

    document.getElementById("result").innerHTML = situacao
}

// -------------------------------------------------------------------------------------

// 4) EXERCICIO 4

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null

    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'

    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': '11/12/2020'

    }

];

var total_vendas = 0
document.getElementById("vendas_cursos").innerHTML =""

for (a = 0; a < vendas_cursos.length; a++) {

    if (vendas_cursos[a].reembolso == null) {
        total_vendas += vendas_cursos[a].valor

        var linhaHTML = ""
        linhaHTML += `<tr>
                        <td>${vendas_cursos[a].aluno}</td>
                        <td>${vendas_cursos[a].data}</td>
                        <td>${vendas_cursos[a].valor}</td>
                      </tr>`
        document.getElementById("vendas_cursos").innerHTML += linhaHTML
    }
}

document.getElementById("total_vendas").innerHTML = total_vendas